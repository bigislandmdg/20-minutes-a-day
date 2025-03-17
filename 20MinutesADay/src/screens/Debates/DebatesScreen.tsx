import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DebatesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Debates</Text>
      <Text style={styles.content}>
        This screen displays various topics for debates.
      </Text>
      {/* Ajouter des sujets de débat ou des exemples */}
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

export default DebatesScreen;
