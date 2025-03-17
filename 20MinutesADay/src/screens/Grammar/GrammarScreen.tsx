import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GrammarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Grammar</Text>
      <Text style={styles.content}>
        This screen contains grammar lessons and rules.
      </Text>
      {/* Ajouter une liste de règles grammaticales ou des exemples */}
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

export default GrammarScreen;
