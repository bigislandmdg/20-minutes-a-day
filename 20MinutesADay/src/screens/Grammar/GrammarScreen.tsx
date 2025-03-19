import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const grammarRules = [
  {
    id: '1',
    title: 'Present Simple',
    examples: [
      'I eat breakfast every morning.',
      'She works at a bank.',
      'They play football on weekends.',
    ],
  },
  {
    id: '2',
    title: 'Past Simple',
    examples: [
      'I visited my grandmother last week.',
      'She studied French in college.',
      'They watched a movie yesterday.',
    ],
  },
  {
    id: '3',
    title: 'Future Simple',
    examples: [
      'I will call you tomorrow.',
      'She will finish her homework soon.',
      'They will travel to France next summer.',
    ],
  },
  {
    id: '4',
    title: 'Present Continuous',
    examples: [
      'I am eating lunch right now.',
      'She is working on a project.',
      'They are playing football.',
    ],
  },
  {
    id: '5',
    title: 'Past Continuous',
    examples: [
      'I was watching TV when she called.',
      'He was sleeping when the alarm rang.',
      'They were playing football yesterday.',
    ],
  },
  {
    id: '6',
    title: 'Future Continuous',
    examples: [
      'I will be working at 5 PM tomorrow.',
      'She will be studying at that time.',
      'They will be playing football tomorrow afternoon.',
    ],
  },
  {
    id: '7',
    title: 'Present Perfect',
    examples: [
      'I have eaten lunch already.',
      'She has finished her project.',
      'They have played football before.',
    ],
  },
  {
    id: '8',
    title: 'Past Perfect',
    examples: [
      'I had already left when she arrived.',
      'He had studied French before he moved.',
      'They had played football before it started to rain.',
    ],
  },
  {
    id: '9',
    title: 'Future Perfect',
    examples: [
      'I will have finished by 5 PM.',
      'She will have completed the project by tomorrow.',
      'They will have played football before sunset.',
    ],
  },
];

const GrammarScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const speak = (text: string) => {
     Speech.speak(text, {
          language: 'en',
          pitch: 1.0,
          rate: 1.0,
        });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Grammar</Text>
      <Text style={styles.content}>
        This screen contains grammar lessons and rules.
      </Text>

      {grammarRules.map((rule) => (
        <Card key={rule.id} style={styles.card}>
          <Card.Title
            title={rule.title}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => speak(rule.title)}
              />
            )}
          />
          <Card.Content>
            <List.Section>
              <List.Accordion
                title={`Examples for "${rule.title}"`}
                expanded={expanded === rule.id}
                onPress={() =>
                  setExpanded(expanded === rule.id ? null : rule.id)
                }
                style={styles.accordion}
              >
                {rule.examples.map((example, index) => (
                  <List.Item
                    key={index}
                    title={example}
                    onPress={() => speak(example)}
                    left={(props) => (
                      <IconButton
                        {...props}
                        icon="volume-high"
                        onPress={() => speak(example)}
                      />
                    )}
                  />
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
    textAlign: 'center',
    color: '#3a86ff',
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

export default GrammarScreen;
