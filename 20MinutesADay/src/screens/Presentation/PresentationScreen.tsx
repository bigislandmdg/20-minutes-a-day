import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech'; // Import expo-speech

const PresentationScreen = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  // Function to speak text
  const speak = (text: string): void => {
    Speech.speak(text, {
      language: 'en', // You can change the language to 'fr' for French or any other supported language
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Première carte */}
      <Card style={styles.card}>
        <Card.Title title="Welcome to 20Minutes-a-Day!" />
        <Card.Content>
          <Text style={styles.subtitle}>Your daily language learning companion</Text>
          <Text style={styles.content} onPress={() => speak("This app is designed to help you learn a new language in just 20 minutes a day.")}>
            This app is designed to help you learn a new language in just 20 minutes a day.
          </Text>
          <Text style={styles.content} onPress={() => speak("Whether you're focusing on vocabulary, grammar, or daily conversations, our goal is to make language learning fun and easy.")}>
            Whether you're focusing on vocabulary, grammar, or daily conversations, our goal is to make language learning fun and easy.
          </Text>

          <List.Section>
            <List.Accordion
              title="Features"
              expanded={expanded1}
              onPress={() => {
                setExpanded1(!expanded1);
                speak("Features");
              }}
              style={styles.accordion}
            >
              <List.Item title="Vocabulary: Learn new words every day" onPress={() => speak("Vocabulary: Learn new words every day")} />
              <List.Item title="Grammar: Understand the structure of the language" onPress={() => speak("Grammar: Understand the structure of the language")} />
              <List.Item title="Daily Dialogues: Practice common phrases used in daily conversations" onPress={() => speak("Daily Dialogues: Practice common phrases used in daily conversations")} />
              <List.Item title="Verbs: Master verb conjugations in different tenses" onPress={() => speak("Verbs: Master verb conjugations in different tenses")} />
              <List.Item title="People: Learn about different people and their roles in the language" onPress={() => speak("People: Learn about different people and their roles in the language")} />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Deuxième carte */}
      <Card style={styles.card}>
        <Card.Title title="Progress Tracking" />
        <Card.Content>
          <Text style={styles.subtitle}>Monitor Your Progress</Text>
          <Text style={styles.content} onPress={() => speak("Keep track of your daily streak, completed lessons, and mastered vocabulary.")}>
            Keep track of your daily streak, completed lessons, and mastered vocabulary.
          </Text>

          <List.Section>
            <List.Accordion
              title="Progress Details"
              expanded={expanded2}
              onPress={() => {
                setExpanded2(!expanded2);
                speak("Progress Details");
              }}
              style={styles.accordion}
            >
              <List.Item title="Daily Streak: Maintain your daily learning habit" onPress={() => speak("Daily Streak: Maintain your daily learning habit")} />
              <List.Item title="Completed Lessons: Track the lessons you have finished" onPress={() => speak("Completed Lessons: Track the lessons you have finished")} />
              <List.Item title="Mastered Vocabulary: See the words you have mastered" onPress={() => speak("Mastered Vocabulary: See the words you have mastered")} />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Troisième carte */}
      <Card style={styles.card}>
        <Card.Title title="Community and Support" />
        <Card.Content>
          <Text style={styles.subtitle}>Connect with Others</Text>
          <Text style={styles.content} onPress={() => speak("Join our learning community and get help from other language learners.")}>
            Join our learning community and get help from other language learners.
          </Text>

          <List.Section>
            <List.Accordion
              title="Community Features"
              expanded={expanded3}
              onPress={() => {
                setExpanded3(!expanded3);
                speak("Community Features");
              }}
              style={styles.accordion}
            >
              <List.Item title="Forums: Ask questions and share tips" onPress={() => speak("Forums: Ask questions and share tips")} />
              <List.Item title="Support: Get help from our team" onPress={() => speak("Support: Get help from our team")} />
              <List.Item title="Challenges: Participate in language challenges" onPress={() => speak("Challenges: Participate in language challenges")} />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Quatrième carte */}
      <Card style={styles.card}>
        <Card.Title title="Settings and Preferences" />
        <Card.Content>
          <Text style={styles.subtitle}>Customize Your Experience</Text>
          <Text style={styles.content} onPress={() => speak("Adjust the app to fit your learning style and personal preferences.")}>
            Adjust the app to fit your learning style and personal preferences.
          </Text>

          <List.Section>
            <List.Accordion
              title="Settings Options"
              expanded={expanded4}
              onPress={() => {
                setExpanded4(!expanded4);
                speak("Settings Options");
              }}
              style={styles.accordion}
            >
              <List.Item title="Notifications: Manage notification settings" onPress={() => speak("Notifications: Manage notification settings")} />
              <List.Item title="Language: Choose your preferred learning language" onPress={() => speak("Language: Choose your preferred learning language")} />
              <List.Item title="Dark Mode: Switch between light and dark themes" onPress={() => speak("Dark Mode: Switch between light and dark themes")} />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4, // Shadow for the card (Android)
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  accordion: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
});

export default PresentationScreen;
