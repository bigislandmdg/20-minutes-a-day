import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

const verbList = [
  { id: '1', verb: 'To be', conjugation: ['am', 'is', 'are'] },
  { id: '2', verb: 'To have', conjugation: ['have', 'has'] },
  { id: '3', verb: 'To go', conjugation: ['go', 'goes'] },
  { id: '4', verb: 'To do', conjugation: ['do', 'does'] },
  { id: '5', verb: 'To say', conjugation: ['say', 'says'] },
  { id: '6', verb: 'To get', conjugation: ['get', 'gets'] },
];

const VerbsScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Verbs</Text>
      <Text style={styles.content}>
        This screen displays various verbs and their conjugations to help you with your language learning.
      </Text>

      {verbList.map((verb) => (
        <Card key={verb.id} style={styles.card}>
          <Card.Title title={verb.verb} />
          <Card.Content>
            <List.Section>
              <List.Accordion
                title={`Conjugation for "${verb.verb}"`}
                expanded={expanded === verb.id}
                onPress={() =>
                  setExpanded(expanded === verb.id ? null : verb.id)
                }
                style={styles.accordion}
              >
                {verb.conjugation.map((form, index) => (
                  <List.Item key={index} title={form} />
                ))}
              </List.Accordion>
            </List.Section>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
  },
  accordion: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
});

export default VerbsScreen;
