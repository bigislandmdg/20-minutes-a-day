import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

interface PayementScreenProps {
  onClose: () => void;
}

const PayementScreen: React.FC<PayementScreenProps> = ({ onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'mobile-money'>('credit-card');
  const [amount, setAmount] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handlePayment = () => {
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
    }

    setLoading(true);

    setTimeout(() => { // Simulating a network request
      setLoading(false);
      Alert.alert('Payment Successful', 'Your payment has been processed successfully.');
      // Reset form
      setAmount('');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setPaymentMethod('credit-card');
    }, 2000);
  };

  return (
    <View style={styles.modalContent}>
      {/* Modal Header */}
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

      {/* Payment Method Toggle */}
      <ToggleButton.Row
        style={styles.toggleButtonRow}
        onValueChange={(value) => setPaymentMethod(value as 'credit-card' | 'mobile-money')}
        value={paymentMethod}
      >
        <ToggleButton icon="credit-card" value="credit-card" />
        <ToggleButton icon="cellphone" value="mobile-money" />
      </ToggleButton.Row>

      {/* Payment Form */}
      <ScrollView style={styles.formContainer}>
        {paymentMethod === 'credit-card' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
              accessibilityLabel="Enter card number"
            />
            <TextInput
              style={styles.input}
              placeholder="Expiration Date (MM/YY)"
              value={expiryDate}
              onChangeText={setExpiryDate}
              accessibilityLabel="Enter expiration date"
            />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              secureTextEntry
              keyboardType="numeric"
              value={cvv}
              onChangeText={setCvv}
              accessibilityLabel="Enter CVV code"
            />
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              accessibilityLabel="Enter phone number"
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              accessibilityLabel="Enter payment amount"
            />
          </>
        )}
      </ScrollView>

      {/* Payment Button or Loader */}
      <View style={styles.paymentOption}>
        {loading ? (
          <ActivityIndicator size="large" color="#c75146" />
        ) : (
          <Button 
            title="Make Payment" 
            onPress={handlePayment}
            color="#c75146"
            accessibilityLabel="Make a payment"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#f9f9f9',
  },
  paymentOption: {
    marginTop: 20,
    width: '100%',
  },
  formContainer: {
    width: '100%',
  },
  toggleButtonRow: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  closeIcon: {
    padding: 5,
  },
});

export default PayementScreen;
