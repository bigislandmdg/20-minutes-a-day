import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List } from 'react-native-paper';

const dialogues = [
  {
    id: 1,
    title: 'Greetings',
    description: 'Basic greetings used in daily conversations.',
    content: [
      'Hello! How are you?',
      'Good morning!',
      'Good afternoon!',
      'Good evening!',
      'How is it going?',
    ],
  },
  {
    id: 2,
    title: 'Asking for Directions',
    description: 'Common phrases for asking directions.',
    content: [
      'Excuse me, can you help me?',
      'How do I get to the station?',
      'Is this the right way to the airport?',
      'Could you show me on the map?',
    ],
  },
  {
    id: 3,
    title: 'Ordering Food',
    description: 'Phrases to use when ordering food in a restaurant.',
    content: [
      'I would like to order, please.',
      'Can I have the menu?',
      'What do you recommend?',
      'I am allergic to nuts.',
    ],
  },
];

const DailyDialoguesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Dialogues</Text>
      <Text style={styles.content}>
        This screen displays daily dialogues to help you with conversations.
      </Text>

      {dialogues.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            title={dialogue.title}
            subtitle={dialogue.description}
          />
          <Card.Content>
            <List.Accordion
              title="View Dialogues"
              left={(props) => <List.Icon {...props} icon="message" />}
            >
              {dialogue.content.map((line, index) => (
                <Text key={index} style={styles.dialogueText}>
                  {line}
                </Text>
              ))}
            </List.Accordion>
          </Card.Content>
        </Card>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2fa292',
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4, // ombre légère
  },
  dialogueText: {
    fontSize: 16,
    marginVertical: 4,
    color: '#333',
  },
});

export default DailyDialoguesScreen;
