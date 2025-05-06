// src/screens/About/AboutScreen.tsx

import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List } from 'react-native-paper';

const AboutScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handlePress = (panel: string) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const modules = [
    {
      id: 'dailyDialogues',
      title: 'Daily Dialogues',
      description: 'Learn to hold a daily conversation in English.',
      icon: 'chat',
    },
    {
      id: 'vocabularies',
      title: 'Vocabularies',
      description: 'Improve your vocabulary with new words every day.',
      icon: 'book-open-page-variant',
    },
    {
      id: 'grammar',
      title: 'Grammar',
      description: 'Master English grammar to improve your writing.',
      icon: 'school',
    },
    {
      id: 'debates',
      title: 'Debates',
      description: 'Participate in debates to improve your confidence.',
      icon: 'account-voice',
    },
    {
      id: 'proverbs',
      title: 'Proverbs',
      description: 'Learn common proverbs in English.',
      icon: 'format-quote-close',
    },
    {
      id: 'americanAccentTraining',
      title: 'American Accent Training',
      description: 'Practice speaking with an American accent.',
      icon: 'microphone',
    },
    {
      id: 'people',
      title: 'People',
      description: 'Learn how to describe people and their personalities.',
      icon: 'account-group',
    },
    {
      id: 'presentation',
      title: 'Presentation',
      description: 'Learn how to give professional presentations.',
      icon: 'presentation',
    },
    {
      id: 'verbs',
      title: 'Verbs',
      description: 'Enhance your knowledge of regular and irregular verbs.',
      icon: 'clipboard-text',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Main card about the app */}
      <Card style={styles.card}>
        <Card.Title title="About the App" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="App Details"
              left={props => (
                <List.Icon 
                  {...props} 
                  icon="information" 
                  color={expanded === 'appDetails' ? '#2541b2' : props.color} 
                />
              )}
              expanded={expanded === 'appDetails'}
              onPress={() => handlePress('appDetails')}
              titleStyle={{
                color: expanded === 'appDetails' ? '#2541b2' : '#000',
                fontWeight: expanded === 'appDetails' ? 'bold' : 'normal',
              }}
            >
              <Text style={styles.text}>
                This app is designed to improve your vocabulary in 20 minutes per day.
              </Text>
              <Text style={styles.version}>Version: 1.1.0</Text>
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Cards for each module */}
      {modules.map(module => (
        <Card key={module.id} style={styles.card}>
          <Card.Title title={module.title} />
          <Card.Content>
            <List.Section>
              <List.Accordion
                title={`Details of ${module.title}`}
                left={props => (
                  <List.Icon 
                    {...props} 
                    icon={module.icon} 
                    color={expanded === module.id ? '#2541b2' : props.color}
                  />
                )}
                expanded={expanded === module.id}
                onPress={() => handlePress(module.id)}
                titleStyle={{
                  color: expanded === module.id ? '#2541b2' : '#000',
                  fontWeight: expanded === module.id ? 'bold' : 'normal',
                }}
              >
                <Text style={styles.text}>{module.description}</Text>
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
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    backgroundColor: '#ffffff',
    shadowRadius: 2,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'normal',
    marginTop: 5,
  },
});

export default AboutScreen;
