import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ToggleButton, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { createPayment } from '../../services/mvolaService'; // ✅ Utilisation de createPayment qui est un alias pour processMvolaPayment

interface PayementScreenProps {
  onClose: () => void;
  onPaymentSuccess: () => void;
}

interface PaymentData {
  method: 'credit-card' | 'mobile-money';
  provider: string;
  amount: string;
  cardNumber?: string;
  expiryDate?: string;
  phoneNumber?: string;
  date: string;
}

const PayementScreen: React.FC<PayementScreenProps> = ({ onClose, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'mobile-money'>('credit-card');
  const [paymentProvider, setPaymentProvider] = useState<string>(''); 
  const [amount, setAmount] = useState<string>(''); 
  const [cardNumber, setCardNumber] = useState<string>(''); 
  const [expiryDate, setExpiryDate] = useState<string>(''); 
  const [cvv, setCvv] = useState<string>(''); 
  const [phoneNumber, setPhoneNumber] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    if (!paymentProvider) {
      Alert.alert('Select Provider', 'Please select a payment provider.');
      return;
    }

    if (paymentMethod === 'credit-card') {
      if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        Alert.alert('Invalid Card Number', 'Please enter a valid 16-digit card number.');
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        Alert.alert('Invalid Expiry Date', 'Please enter expiration date in MM/YY format.');
        return;
      }
      if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
        Alert.alert('Invalid CVV', 'Please enter a valid 3-digit CVV.');
        return;
      }
    } else {
      if (!amount || isNaN(Number(amount))) {
        Alert.alert('Invalid Amount', 'Please enter a valid numeric amount.');
        return;
      }
      if (!/^\d{10}$/.test(phoneNumber)) {
        Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
        return;
      }
    }

    setLoading(true);

    const paymentData: PaymentData = {
      method: paymentMethod,
      provider: paymentProvider,
      amount: amount || '0',
      cardNumber: paymentMethod === 'credit-card' ? cardNumber : undefined,
      expiryDate: paymentMethod === 'credit-card' ? expiryDate : undefined,
      phoneNumber: paymentMethod === 'mobile-money' ? phoneNumber : undefined,
      date: new Date().toISOString(),
    };

    try {
      await createPayment({
        amount: Number(paymentData.amount),
        phoneNumber: paymentData.phoneNumber || '',
        externalId: paymentData.date, // vous pouvez mettre un UUID aussi
        description: 'Paiement via l\'application',
        environment: 'sandbox',
      });
      Alert.alert('Payment Successful', 'Your payment has been processed successfully.');
      onPaymentSuccess();
    } catch (error) {
      console.error(error);
      Alert.alert('Payment Failed', 'An error occurred while processing the payment.');
    } finally {
      setLoading(false);
    }
  };

  const getProviders = () => {
    return paymentMethod === 'credit-card'
      ? ['Paypal', 'Stripe']
      : ['MVola', 'Orange Money', 'Airtel Money'];
  };

  return (
    <View style={styles.modalContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment Information</Text>
        <Ionicons
          name="close"
          size={24}
          color="black"
          onPress={onClose}
          style={styles.closeIcon}
        />
      </View>

      <ToggleButton.Row
        style={styles.toggleButtonRow}
        onValueChange={(value) => {
          setPaymentMethod(value as 'credit-card' | 'mobile-money');
          setPaymentProvider('');
        }}
        value={paymentMethod}
      >
        <ToggleButton icon="credit-card" value="credit-card" />
        <ToggleButton icon="cellphone" value="mobile-money" />
      </ToggleButton.Row>

      <ScrollView style={styles.formContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Choose Provider</Text>
          <Picker
            selectedValue={paymentProvider}
            onValueChange={(itemValue: string) => setPaymentProvider(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="-- Select Provider --" value="" />
            {getProviders().map((provider) => (
              <Picker.Item key={provider} label={provider} value={provider} />
            ))}
          </Picker>
        </View>

        {paymentMethod === 'credit-card' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
              maxLength={16}
            />
            <TextInput
              style={styles.input}
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChangeText={setExpiryDate}
              maxLength={5}
            />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              keyboardType="numeric"
              value={cvv}
              onChangeText={setCvv}
              maxLength={3}
            />
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
          </>
        )}

        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#00f" />
        ) : (
           <Button
        mode="contained"
        onPress={handlePayment}
        disabled={!paymentProvider || !amount || loading}
        style={styles.paymentButton}
        labelStyle={styles.buttonText} // Ajout pour le style du texte
      >
        Pay Now
      </Button>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeIcon: {
    padding: 5,
  },
  toggleButtonRow: {
    marginVertical: 10,
    justifyContent: 'center',
   

  },
  formContainer: {
    marginTop: 10,
  },
  dropdownContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  paymentButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#004e98',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PayementScreen;
