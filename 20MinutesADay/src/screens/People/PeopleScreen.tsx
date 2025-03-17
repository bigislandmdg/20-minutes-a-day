import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PeopleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>People</Text>
      <Text style={styles.content}>
        This screen displays information about different people.
      </Text>
      {/* Ajouter des profils ou des informations sur les gens */}
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

export default PeopleScreen;
