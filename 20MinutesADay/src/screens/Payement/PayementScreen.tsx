import React, { useState, useRef, useEffect } from "react";
import { 
  View, Text, StyleSheet, TextInput, 
  ActivityIndicator, Alert, Modal, TouchableOpacity 
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import * as Network from "expo-network";
import { Button } from "react-native-paper";

interface PayementScreenProps {
  onClose: () => void;
  onPaymentSuccess: (transactionId: string) => void;
  initialAmount?: number;
  customerInfo?: {
    name: string;
    email?: string;
    phone?: string;
  };
  reference?: string;
}

const PayementScreen: React.FC<PayementScreenProps> = ({
  onClose,
  onPaymentSuccess,
  initialAmount,
  customerInfo = { name: "Client", email: "", phone: "" },
  reference = `REF_${Date.now()}`
}) => {
  const [formData, setFormData] = useState({
    amount: initialAmount ? initialAmount.toString() : "",
    name: customerInfo.name,
    email: customerInfo.email || "",
    phone: customerInfo.phone || "",
  });

  const [paymentUrl, setPaymentUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState("127.0.0.1");
  const webViewRef = useRef<WebView>(null);

  const API_URL = __DEV__ ? "http://10.0.2.2:3000" : "https://votre-api-production.com";
  const CURRENCY = "MGA";

  // 🔹 Récupération IP
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const ip = await Network.getIpAddressAsync();
        setIpAddress(ip);
      } catch {
        console.warn("Impossible de récupérer l'IP");
      }
    };
    fetchIp();
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Nom requis";
    if (!formData.amount.trim() || isNaN(Number(formData.amount))) return "Montant invalide";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Email invalide";
    return null;
  };

  // 🔹 Initialisation du paiement
  const initializePayment = async () => {
    const error = validate();
    if (error) {
      Alert.alert("Erreur", error);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        unitemonetaire: CURRENCY,
        adresseip: ipAddress,
        idpanier: `CMD_${Date.now()}`,
        montant: parseFloat(formData.amount),
        nom: formData.name.trim(),
        email: formData.email.trim(),
        reference,
        telephone: formData.phone.trim() || undefined,
      };

      const response = await fetch(`${API_URL}/create-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data.paymentUrl) throw new Error(data.error || "Échec du paiement");

      setPaymentUrl(data.paymentUrl);
    } catch (err: any) {
      Alert.alert("Erreur paiement", err.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Gestion des retours du WebView
  const handleWebViewNavigation = (navState: { url: string }) => {
    if (navState.url.includes("/paiement/success")) {
      const transactionId = new URLSearchParams(navState.url.split("?")[1]).get("transactionId") || "";
      onPaymentSuccess(transactionId);
      onClose();
    } else if (navState.url.includes("/paiement/error")) {
      Alert.alert("Paiement échoué");
    } else if (navState.url.includes("/paiement/cancel")) {
      Alert.alert("Paiement annulé");
    }
  };

  // 🔹 Affichage WebView après init
  if (paymentUrl) {
    return (
      <Modal visible animationType="slide">
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Paiement sécurisé</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <WebView
            ref={webViewRef}
            source={{ uri: paymentUrl }}
            style={{ flex: 1 }}
            onNavigationStateChange={handleWebViewNavigation}
            startInLoadingState
            renderLoading={() => (
              <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#0066cc" />
            )}
          />
        </View>
      </Modal>
    );
  }

  // 🔹 Affichage formulaire avant init
  return (
    <Modal visible animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Infos de paiement</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Montant (MGA)"
            keyboardType="numeric"
            value={formData.amount}
            onChangeText={(t) => handleChange("amount", t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nom complet"
            value={formData.name}
            onChangeText={(t) => handleChange("name", t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(t) => handleChange("email", t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Téléphone"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(t) => handleChange("phone", t)}
          />

          <Button
            mode="contained"
            onPress={initializePayment}
            style={styles.button}
            loading={loading}
          >
            {loading ? "Traitement..." : "Payer avec Vanilla Pay"}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", padding: 16, backgroundColor: "#fff",
    borderBottomWidth: 1, borderBottomColor: "#eee"
  },
  title: { fontSize: 18, fontWeight: "600", color: "#333" },
  card: {
    backgroundColor: "#fff", margin: 16, padding: 16,
    borderRadius: 12, elevation: 3
  },
  input: {
    height: 50, borderWidth: 1, borderColor: "#ddd", borderRadius: 8,
    paddingHorizontal: 12, marginBottom: 12, backgroundColor: "#fdfdfd"
  },
  button: { marginTop: 8, borderRadius: 8, backgroundColor: "#0066cc" }
});

export default PayementScreen;
