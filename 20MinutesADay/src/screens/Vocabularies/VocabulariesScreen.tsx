import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const VocabulariesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Vocabularies</Text>
      <Text style={styles.content}>
        This screen displays a list of vocabularies.
      </Text>
      {/* Vous pouvez ajouter ici une liste de vocabulaire ou d'autres éléments */}
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

export default VocabulariesScreen;
