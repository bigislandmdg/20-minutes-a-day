import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Card, List, Button } from 'react-native-paper';

const AccentTrainingScreen = () => {
  const handleExercisePress = () => {
    Alert.alert("Accent Training", "You can now start practicing pronunciation!");
  };

  return (
    <ScrollView style={styles.container}>
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

      {/* Section avec d'autres exercices */}
      <Text style={styles.exerciseText}>
        You can practice with the following phrases:
      </Text>

      {/* Card pour exercices */}
      <Card style={styles.card}>
        <Card.Title title="Common Phrases" subtitle="Practice these common phrases" />
        <Card.Content>
          <List.Accordion
            title="View Phrases"
            left={(props) => <List.Icon {...props} icon="message" />}
          >
            <Text style={styles.phrases}>
              - "Good morning, how are you?"
              {'\n'}- "What is your name?"
              {'\n'}- "Where are you from?"
              {'\n'}- "Nice to meet you!"
            </Text>
          </List.Accordion>
        </Card.Content>
      </Card>

      {/* Autres exercices sous forme de Card */}
      <Card style={styles.card}>
        <Card.Title title="Additional Practice" subtitle="More phrases to practice" />
        <Card.Content>
          <List.Accordion
            title="More Phrases"
            left={(props) => <List.Icon {...props} icon="message-processing" />}
          >
            <Text style={styles.phrases}>
              - "Can you help me with this?"
              {'\n'}- "Where do you live?"
              {'\n'}- "How was your day?"
              {'\n'}- "I’m learning English!"
            </Text>
          </List.Accordion>
        </Card.Content>
      </Card>

      {/* Bouton pour voir plus d'exercices */}
      <Button style={styles.viewMoreButton} mode="contained" onPress={() => {}}>
        View More Exercises
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2fa292',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#333',
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  phrases: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
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
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
  },
  viewMoreButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default AccentTrainingScreen;
