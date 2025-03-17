import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PresentationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to 20Minutes-a-Day!</Text>
      <Text style={styles.subtitle}>Your daily language learning companion</Text>
      
      <Text style={styles.content}>
        This app is designed to help you learn a new language in just 20 minutes a day. Whether you're focusing on vocabulary, grammar, or daily conversations, our goal is to make language learning fun and easy.
      </Text>

      <Text style={styles.subtitle}>Features</Text>
      <Text style={styles.content}>
        - Vocabulary: Learn new words every day
        {'\n'}- Grammar: Understand the structure of the language
        {'\n'}- Daily Dialogues: Practice common phrases used in daily conversations
        {'\n'}- Verbs: Master verb conjugations in different tenses
        {'\n'}- People: Learn about different people and their roles in the language
      </Text>

      <Text style={styles.subtitle}>Get Started</Text>
      <Text style={styles.content}>
        To get started, navigate through the app to explore different sections. Choose a category, such as "Vocabularies" or "Grammar", and start learning!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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
});

export default PresentationScreen;
