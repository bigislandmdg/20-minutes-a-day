import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PaymentContextType {
  hasPaid: boolean;
  paymentData: PaymentData | null;
  verifyPayment: () => Promise<void>;
  clearPayment: () => Promise<void>;
  setPaymentSuccess: (data: PaymentData) => Promise<void>;
}

interface PaymentData {
  transactionId: string;
  amount: number;
  date: string;
  expiryDate: string;
  paymentMethod: string;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [hasPaid, setHasPaid] = useState<boolean>(false);
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Vérifier le statut de paiement au démarrage
  useEffect(() => {
    verifyPayment();
  }, []);

  const verifyPayment = async () => {
    try {
      const storedData = await AsyncStorage.getItem('paymentData');
      if (storedData) {
        const data: PaymentData = JSON.parse(storedData);
        const isExpired = new Date(data.expiryDate) < new Date();
        
        if (!isExpired) {
          setHasPaid(true);
          setPaymentData(data);
        } else {
          await clearPayment();
        }
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setPaymentSuccess = async (data: {
    transactionId: string;
    amount: number;
    paymentMethod: string;
  }) => {
    const paymentData = {
      ...data,
      date: new Date().toISOString(),
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 jours
    };

    try {
      await AsyncStorage.setItem('paymentData', JSON.stringify(paymentData));
      setHasPaid(true);
      setPaymentData(paymentData);
    } catch (error) {
      console.error('Error saving payment:', error);
    }
  };

  const clearPayment = async () => {
    try {
      await AsyncStorage.removeItem('paymentData');
      setHasPaid(false);
      setPaymentData(null);
    } catch (error) {
      console.error('Error clearing payment:', error);
    }
  };

  if (isLoading) {
    return null; // Ou un écran de chargement
  }

  return (
    <PaymentContext.Provider 
      value={{ 
        hasPaid, 
        paymentData,
        verifyPayment,
        clearPayment,
        setPaymentSuccess
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};