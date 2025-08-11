import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

interface PayementScreenProps {
  onClose: () => void;
  onPaymentSuccess: (transactionId: string) => void;
  amount: number;
}


const PayementScreen: React.FC<PayementScreenProps> = ({ 
  onClose, 
  onPaymentSuccess,
  amount 
}) => {
  const [paymentUrl, setPaymentUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
  const initializePayment = async () => {
    try {
      setLoading(true);
      setError('');

      // On appelle TON serveur Node.js, pas directement l'API Vanilla
      const response = await fetch("http://10.0.2.2:3000/create-payment", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idpanier: Date.now().toString(),
          montant: amount,
          nom: 'John Doe',
          email: 'john@example.com',
          reference: `REF-${Date.now()}`,
          unitemonetaire: 'Ar'
        }),
      });

      const data = await response.json();
      console.log("Réponse serveur:", data);

      if (data.paymentUrl) {
        setPaymentUrl(data.paymentUrl);
      } else {
        setError(data.error || 'Échec de l\'initialisation du paiement');
      }
    } catch (err) {
      console.error('Erreur init paiement:', err);
      setError('Erreur de connexion au service de paiement');
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
      Alert.alert('Paiement réussi', 'Merci pour votre achat !');
      onPaymentSuccess(transactionId);
      onClose();
    } 
    else if (url.includes('/payment/error') || url.includes('/payment/cancel')) {
      Alert.alert('Paiement annulé ou échoué', 'Veuillez réessayer.');
      setPaymentUrl('');
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
            source={{ uri: paymentUrl }}
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
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', padding: 20,
    borderBottomWidth: 1, borderBottomColor: '#eee',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  closeIcon: { padding: 5 },
  webView: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, fontSize: 16, color: '#555' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorText: { fontSize: 18, color: 'red', marginBottom: 20, textAlign: 'center' },
});

export default PayementScreen;
