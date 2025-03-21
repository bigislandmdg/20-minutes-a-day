import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';  // Assurez-vous d'avoir la bonne bibliothèque d'icônes

interface PayementScreenProps {
  onClose: () => void;
}

const PayementScreen: React.FC<PayementScreenProps> = ({ onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'mobile-money'>('credit-card');
  const [amount, setAmount] = useState<string>('');

  const handlePayment = () => {
    // Handle the payment logic here
    console.log('Processing payment with:', paymentMethod);
    console.log('Amount:', amount);
  };

  return (
    <View style={styles.modalContent}>
      {/* Modal Header with Close Icon */}
      <View style={styles.header}>
       
        <Text style={styles.title}>Payment Information</Text>
        <Ionicons 
          name="close" 
          size={20} 
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
        <ToggleButton icon="phone" value="mobile-money" />
      </ToggleButton.Row>

      {/* Form for Credit Card */}
      {paymentMethod === 'credit-card' ? (
        <ScrollView style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Expiration Date (MM/YY)"
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            secureTextEntry
            keyboardType="numeric"
          />
        </ScrollView>
      ) : (
        <ScrollView style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </ScrollView>
      )}

      {/* Action Buttons */}
      <View style={styles.paymentOption}>
        <Button title="Make Payment" 
            onPress={handlePayment}
             color="#bb3e03"
         />
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
  },
  paymentOption: {
    marginTop: 10,
    width: '100%',
    color:'#bb3e03'
  },
  formContainer: {
    width: '97%',
  },
  toggleButtonRow: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // Styles for the header with close icon
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  closeIcon: {
    marginLeft: 10,
  },
});

export default PayementScreen;
