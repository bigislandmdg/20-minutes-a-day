import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ToggleButton, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  date: string;
  phoneNumber?: string; // Nouveau champ pour le numéro de téléphone
}

const PayementScreen: React.FC<PayementScreenProps> = ({ onClose, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'mobile-money'>('credit-card');
  const [paymentProvider, setPaymentProvider] = useState<string>(''); 
  const [amount, setAmount] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // Nouvel état pour le numéro de téléphone
  const [loading, setLoading] = useState<boolean>(false);

  const savePayment = async (payment: PaymentData) => {
    try {
      const existingPayments = await AsyncStorage.getItem('payments');
      const payments = existingPayments ? JSON.parse(existingPayments) : [];
      payments.push(payment);
      await AsyncStorage.setItem('payments', JSON.stringify(payments));
    } catch (error) {
      console.error('Failed to save payment:', error);
    }
  };

  const handlePayment = () => {
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

      // Validation du numéro de téléphone pour mobile money
      if (!/^\d{10}$/.test(phoneNumber)) {
        Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
        return;
      }
    }

    setLoading(true);

    setTimeout(async () => {
      setLoading(false);

      const paymentData: PaymentData = {
        method: paymentMethod,
        provider: paymentProvider,
        amount: amount || '0',
        cardNumber: paymentMethod === 'credit-card' ? cardNumber : undefined,
        expiryDate: paymentMethod === 'credit-card' ? expiryDate : undefined,
        phoneNumber: paymentMethod === 'mobile-money' ? phoneNumber : undefined, // Ajouter le numéro de téléphone dans les données
        date: new Date().toISOString(),
      };

      await savePayment(paymentData);

      Alert.alert('Payment Successful', 'Your payment has been processed successfully.');
      onPaymentSuccess();
    }, 2000);
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
          setPaymentProvider(''); // Réinitialiser provider quand on change de méthode
        }}
        value={paymentMethod}
      >
        <ToggleButton icon="credit-card" value="credit-card" />
        <ToggleButton icon="cellphone" value="mobile-money" />
      </ToggleButton.Row>

      <ScrollView style={styles.formContainer}>
        {/* Dropdown des providers */}
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
              placeholder="Amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
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

        {loading ? (
          <ActivityIndicator size="large" color="#bb3e03" />
        ) : (
          <Button mode="contained" onPress={handlePayment} style={styles.paymentButton}>
            Pay
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    padding: 5,
  },
  toggleButtonRow: {
    marginTop: 20,
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  paymentButton: {
    backgroundColor: '#bb3e03',
    marginTop: 10,
  },
});

export default PayementScreen;
