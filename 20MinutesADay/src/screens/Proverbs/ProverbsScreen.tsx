import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

const ProverbsScreen = () => {
  const handleProverbPress = () => {
    Alert.alert("Proverb Practice", "You can now start practicing proverbs!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proverb Practice</Text>
      <Text style={styles.description}>
        Improve your understanding of proverbs. Here are some common proverbs you can practice and reflect on.
      </Text>

      {/* Exemple de Proverbe */}
      <Text style={styles.proverbText}>
        "A picture is worth a thousand words."
      </Text>

      {/* Bouton pour démarrer l'exercice */}
      <TouchableOpacity style={styles.button} onPress={handleProverbPress}>
        <Text style={styles.buttonText}>Start Proverb Practice</Text>
      </TouchableOpacity>

      {/* Autres proverbes */}
      <Text style={styles.proverbText}>
        You can practice with the following proverbs:
      </Text>
      <Text style={styles.proverbs}>
        - "Actions speak louder than words."  
        - "The early bird catches the worm."  
        - "Don't count your chickens before they hatch."  
        - "A journey of a thousand miles begins with a single step."  
      </Text>

      {/* Bouton pour voir plus de proverbes */}
      <Button title="View More Proverbs" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  proverbText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  proverbs: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2fa292',
    padding: 12,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProverbsScreen;
