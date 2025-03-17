import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const verbList = [
  { id: '1', verb: 'to be', conjugation: 'am, is, are' },
  { id: '2', verb: 'to have', conjugation: 'have, has' },
  { id: '3', verb: 'to go', conjugation: 'go, goes' },
  // Ajouter d'autres verbes ici
];

const VerbsScreen = () => {
  return (
    <FlatList
      data={verbList}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <Text style={styles.title}>Verbs</Text>
          <Text style={styles.content}>
            This screen displays various verbs and their conjugations to help you with your language learning.
          </Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.verbCard}>
          <Text style={styles.verb}>{item.verb}</Text>
          <Text style={styles.conjugation}>Conjugation: {item.conjugation}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
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
  verbCard: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  verb: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conjugation: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default VerbsScreen;
