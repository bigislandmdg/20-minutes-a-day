import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

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
  {
    id: 4,
    title: 'Travel',
    description: 'Useful phrases when traveling abroad.',
    content: [
      'Where is the nearest hotel?',
      'I would like to book a room.',
      'How much does it cost per night?',
      'What time is check-in?',
      'Can you recommend a good place to eat?',
    ],
  },
  {
    id: 5,
    title: 'Shopping',
    description: 'Common phrases used while shopping.',
    content: [
      'How much is this?',
      'Do you have this in a different size?',
      'Can I try this on?',
      'Do you accept credit cards?',
      'Is there a discount available?',
    ],
  },
  {
    id: 6,
    title: 'Emergencies',
    description: 'Phrases to use in case of an emergency.',
    content: [
      'Help! Please call an ambulance!',
      'I need to report a fire.',
      'Where is the nearest hospital?',
      'I’ve lost my passport.',
      'Call the police, please!',
    ],
  },
  {
    id: 7,
    title: 'Professional Conversations',
    description: 'Phrases to use in a professional setting.',
    content: [
      'May I have a moment of your time?',
      'Could you clarify that for me?',
      'Let’s schedule a meeting.',
      'I’ll follow up with you soon.',
      'Thank you for your time.',
    ],
  },
  {
    id: 8,
    title: 'Social Events',
    description: 'Phrases for social gatherings and making friends.',
    content: [
      'Nice to meet you!',
      'What do you do for a living?',
      'Do you live around here?',
      'Would you like to join us?',
      'Let’s keep in touch.',
    ],
  },
];

const DailyDialoguesScreen = () => {
  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      rate: 0.9, // Ajuste la vitesse de lecture
    });
  };

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
                <List.Item
                  key={index}
                  title={line}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line)}
                    />
                  )}
                />
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
    textAlign: 'center',
    color: '#3a86ff',
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
    elevation: 4,
  },
});

export default DailyDialoguesScreen;
