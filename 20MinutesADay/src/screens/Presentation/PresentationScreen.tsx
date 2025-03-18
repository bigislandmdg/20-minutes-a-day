import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

const PresentationScreen = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Première carte */}
      <Card style={styles.card}>
        <Card.Title title="Welcome to 20Minutes-a-Day!" />
        <Card.Content>
          <Text style={styles.subtitle}>Your daily language learning companion</Text>
          <Text style={styles.content}>
            This app is designed to help you learn a new language in just 20 minutes a day. 
            Whether you're focusing on vocabulary, grammar, or daily conversations, 
            our goal is to make language learning fun and easy.
          </Text>

          <List.Section>
            <List.Accordion
              title="Features"
              expanded={expanded1}
              onPress={() => setExpanded1(!expanded1)}
              style={styles.accordion}
            >
              <List.Item title="Vocabulary: Learn new words every day" />
              <List.Item title="Grammar: Understand the structure of the language" />
              <List.Item title="Daily Dialogues: Practice common phrases used in daily conversations" />
              <List.Item title="Verbs: Master verb conjugations in different tenses" />
              <List.Item title="People: Learn about different people and their roles in the language" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Deuxième carte */}
      <Card style={styles.card}>
        <Card.Title title="Progress Tracking" />
        <Card.Content>
          <Text style={styles.subtitle}>Monitor Your Progress</Text>
          <Text style={styles.content}>
            Keep track of your daily streak, completed lessons, and mastered vocabulary.
          </Text>

          <List.Section>
            <List.Accordion
              title="Progress Details"
              expanded={expanded2}
              onPress={() => setExpanded2(!expanded2)}
              style={styles.accordion}
            >
              <List.Item title="Daily Streak: Maintain your daily learning habit" />
              <List.Item title="Completed Lessons: Track the lessons you have finished" />
              <List.Item title="Mastered Vocabulary: See the words you have mastered" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Troisième carte */}
      <Card style={styles.card}>
        <Card.Title title="Community and Support" />
        <Card.Content>
          <Text style={styles.subtitle}>Connect with Others</Text>
          <Text style={styles.content}>
            Join our learning community and get help from other language learners.
          </Text>

          <List.Section>
            <List.Accordion
              title="Community Features"
              expanded={expanded3}
              onPress={() => setExpanded3(!expanded3)}
              style={styles.accordion}
            >
              <List.Item title="Forums: Ask questions and share tips" />
              <List.Item title="Support: Get help from our team" />
              <List.Item title="Challenges: Participate in language challenges" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Quatrième carte */}
      <Card style={styles.card}>
        <Card.Title title="Settings and Preferences" />
        <Card.Content>
          <Text style={styles.subtitle}>Customize Your Experience</Text>
          <Text style={styles.content}>
            Adjust the app to fit your learning style and personal preferences.
          </Text>

          <List.Section>
            <List.Accordion
              title="Settings Options"
              expanded={expanded4}
              onPress={() => setExpanded4(!expanded4)}
              style={styles.accordion}
            >
              <List.Item title="Notifications: Manage notification settings" />
              <List.Item title="Language: Choose your preferred learning language" />
              <List.Item title="Dark Mode: Switch between light and dark themes" />
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
    elevation: 4, // Ombre sous la carte (pour Android)
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
