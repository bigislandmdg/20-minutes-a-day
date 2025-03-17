import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

const AccentTrainingScreen = () => {
  const handleExercisePress = () => {
    Alert.alert("Accent Training", "You can now start practicing pronunciation!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accent Training</Text>
      <Text style={styles.description}>
        Improve your pronunciation with our accent training exercises. Here, you can practice common words and phrases.
      </Text>

      {/* Exemple de Phrase */}
      <Text style={styles.exerciseText}>
        Repeat after me: "How are you today?"
      </Text>

      {/* Bouton pour démarrer l'exercice */}
      <TouchableOpacity style={styles.button} onPress={handleExercisePress}>
        <Text style={styles.buttonText}>Start Exercise</Text>
      </TouchableOpacity>

      {/* Autres exercices */}
      <Text style={styles.exerciseText}>
        You can practice with the following phrases:
      </Text>
      <Text style={styles.phrases}>
        - "Good morning, how are you?"
        {'\n'}- "What is your name?"
        {'\n'}- "Where are you from?"
        {'\n'}- "Nice to meet you!"
      </Text>

      {/* Bouton pour voir plus d'exercices */}
      <Button title="View More Exercises" onPress={() => {}} />
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
  exerciseText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  phrases: {
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

export default AccentTrainingScreen;
