import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DailyDialoguesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Dialogues</Text>
      <Text style={styles.content}>
        This screen displays daily dialogues to help you with conversations.
      </Text>
      {/* Ajouter une liste ou des exemples de dialogues */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
  },
});

export default DailyDialoguesScreen;
