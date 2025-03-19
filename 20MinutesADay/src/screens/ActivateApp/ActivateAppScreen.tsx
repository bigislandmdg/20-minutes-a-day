import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Utilisation de Ionicons d'Expo

const ActivateAppScreen = () => {
  const [nomComplet, setNomComplet] = useState('');
  const [numeroTel, setNumeroTel] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = () => {
    console.log('Licence vérifiée avec : ', nomComplet, numeroTel);
  };

  const handleInputChange = (input: string, type: string) => {
    if (type === 'nomComplet') {
      setNomComplet(input);
    } else if (type === 'numeroTel') {
      setNumeroTel(input);
    }
    validateForm();
  };

  const validateForm = () => {
    if (nomComplet && numeroTel) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vérifier ma licence</Text>

          {/* Champ Nom Complet avec icône */}
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={22} color="#3a86ff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nom complet"
              value={nomComplet}
              onChangeText={(text) => handleInputChange(text, 'nomComplet')}
            />
          </View>

          {/* Champ Numéro de Téléphone avec icône */}
          <View style={styles.inputContainer}>
            <Ionicons name="call-outline" size={22} color="#3a86ff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Numéro de téléphone"
              keyboardType="phone-pad"
              value={numeroTel}
              onChangeText={(text) => handleInputChange(text, 'numeroTel')}
            />
          </View>

          {/* Bouton de Soumission avec icône */}
          <TouchableOpacity
            style={[styles.submitButton, !isFormValid && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isFormValid}
          >
            <Ionicons name="checkmark-circle-outline" size={22} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.submitButtonText}>Vérifier ma licence</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 100,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 300,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    padding: 10,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#3a86ff',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
});

export default ActivateAppScreen;
