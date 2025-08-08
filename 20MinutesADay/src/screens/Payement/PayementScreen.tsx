import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

interface PayementScreenProps {
  onClose: () => void;
  onPaymentSuccess: (transactionId: string) => void;
  amount: number; // Montant passé directement depuis l'écran précédent
}

const PayementScreen: React.FC<PayementScreenProps> = ({ 
  onClose, 
  onPaymentSuccess,
  amount 
}) => {
  const [payementUrl, setPayementUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const webViewRef = useRef<WebView>(null);

  // Initialisation directe du paiement au montage du composant
  useEffect(() => {
    const initializePayment = async () => {
      try {
        const response = await fetch('https://votre-api.com/api/payment/init-direct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amount,
            // Autres paramètres nécessaires pour Vanilla Pay
          }),
        });

        const data = await response.json();

        if (data.success && data.paymentUrl) {
          setPayementUrl(data.paymentUrl);
        } else {
          setError(data.message || 'Échec de l\'initialisation du paiement');
        }
      } catch (err) {
        setError('Erreur de connexion au service de paiement');
        console.error('Payement initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializePayment();
  }, [amount]);

  const handleWebViewNavigation = (navState: any) => {
    const { url } = navState;

    if (url.includes('/payment/success')) {
      const transactionId = extractTransactionIdFromUrl(url);
      onPaymentSuccess(transactionId);
      onClose();
    } else if (url.includes('/payment/error')) {
      setError('Le paiement a échoué. Veuillez réessayer.');
      onClose();
    }
  };

  const extractTransactionIdFromUrl = (url: string): string => {
    const match = url.match(/transaction=([^&]+)/);
    return match ? match[1] : '';
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Button mode="contained" onPress={onClose}>
          Fermer
        </Button>
      </View>
    );
  }

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Paiement Vanilla Pay</Text>
          <Ionicons
            name="close"
            size={24}
            color="black"
            onPress={onClose}
            style={styles.closeIcon}
          />
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0066cc" />
            <Text style={styles.loadingText}>Initialisation du paiement...</Text>
          </View>
        ) : (
          <WebView
            ref={webViewRef}
            source={{ uri: payementUrl }}
            style={styles.webView}
            onNavigationStateChange={handleWebViewNavigation}
            startInLoadingState={true}
            renderLoading={() => (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0066cc" />
              </View>
            )}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            sharedCookiesEnabled={true}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    padding: 5,
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PayementScreen;