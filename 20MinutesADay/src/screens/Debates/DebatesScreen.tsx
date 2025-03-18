import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

const debateTopics = [
  {
    id: '1',
    topic: 'Should school uniforms be mandatory?',
    arguments: [
      'Pro: Promotes equality among students.',
      'Con: Restricts freedom of expression.',
    ],
  },
  {
    id: '2',
    topic: 'Should social media platforms be regulated by governments?',
    arguments: [
      'Pro: Prevents spread of misinformation.',
      'Con: Threatens freedom of speech.',
    ],
  },
  {
    id: '3',
    topic: 'Is climate change the biggest threat to humanity?',
    arguments: [
      'Pro: Environmental changes are affecting health and economies.',
      'Con: There are more immediate threats like conflicts and poverty.',
    ],
  },
  {
    id: '4',
    topic: 'Should animal testing be banned?',
    arguments: [
      'Pro: It is unethical to harm animals for human benefits.',
      'Con: Necessary for scientific research and medical advancements.',
    ],
  },
  {
    id: '5',
    topic: 'Should artificial intelligence be restricted?',
    arguments: [
      'Pro: Prevents job loss and unethical use.',
      'Con: Limits technological advancements.',
    ],
  },
  {
    id: '6',
    topic: 'Should nuclear energy be used as a primary energy source?',
    arguments: [
      'Pro: Efficient and reduces carbon emissions.',
      'Con: Risk of nuclear accidents and waste disposal issues.',
    ],
  },
];

const DebatesScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Debates</Text>
      <Text style={styles.content}>
        This screen displays various topics for debates.
      </Text>

      {debateTopics.map((debate) => (
        <Card key={debate.id} style={styles.card}>
          <Card.Title title={debate.topic} />
          <Card.Content>
            <List.Section>
              <List.Accordion
                title={`Arguments for "${debate.topic}"`}
                expanded={expanded === debate.id}
                onPress={() =>
                  setExpanded(expanded === debate.id ? null : debate.id)
                }
                style={styles.accordion}
              >
                {debate.arguments.map((argument, index) => (
                  <List.Item key={index} title={argument} />
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

export default DebatesScreen;
