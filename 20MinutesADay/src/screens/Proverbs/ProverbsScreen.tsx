import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech'; // Import expo-speech

// Liste des proverbes
const proverbs = [
  {
    id: 1,
    title: 'Lesson 68: PROVERBS',
    description: 'DAILY SPOKEN',
    content1: [
      {
        proverb: 'Two Heads Are Better Than One',
        description: `
A: Hey, Jonathan. Come over here a minute.\n
B: What’s happening?\n
A: I’d like to pick your brain for this composition I have to hand it tomorrow. I’ve got a problem with
the introduction, and I figure that two heads are better than one. I need some input on the wording.\n
B: To be honest with you, I’m not that good with words, but I’m willing to help out if I can.\n
A: Thanks buddy. My brain is all dried up. I’m sure the two of us working together will be able to
solve this problem faster than I could do it alone.\n
B: Well, I’ll give it my best shot. Let me look at what you’ve already written and we’ll take it from
there.
        `,
      },
      {
        proverb: 'Do As I Say, Not As I Do',
        description: `
A: Why are you not following the rules?\n
B: Well, you don’t follow them either!\n
A: Do as I say, not as I do!
        `,
      },
    ],
    content2: [
      {
        proverb: 'Curiosity Killed the Cat',
        description: `
A: Why are you looking through my phone?\n
B: I was just curious.\n
A: Well, curiosity killed the cat!
        `,
      },
      {
        proverb: 'Don’t Bite the Hand That Feeds You',
        description: `
A: Why are you always arguing with your boss?\n
B: I don’t know.\n
A: Don’t bite the hand that feeds you!
        `,
      },
    ],
  },
];

const ProverbsScreen = () => {
  // Fonction pour faire parler le proverbe
  const speakProverb = (proverb: string): void => {
    Speech.speak(proverb, {
      language: 'en-US',
      pitch: 1,
      rate: 1,
    });
  };

  const handlePracticePress = () => {
    Alert.alert('Proverb Practice', 'You can now start practicing proverbs!');
  };

  return (
    <ScrollView style={styles.container}>
      {proverbs.map((section) => (
        <Card key={section.id} style={styles.card}>
          <Card.Title title={section.title} />
          <Card.Content>
            <Text style={styles.description}>{section.description}</Text>

            {/* Liste des proverbes - Content 1 */}
            {section.content1.length > 0 && (
              <Text style={styles.sectionTitle}>Content 1</Text>
            )}
            {section.content1.map((item, index) => (
              <List.Accordion
                key={index}
                title={`“${item.proverb}”`}
                left={(props) => <List.Icon {...props} icon="format-quote-close" />}
                style={styles.accordion}
              >
                <List.Item
                  title={item.proverb}
                  description={item.description}
                  onPress={() => speakProverb(item.proverb)}
                />
              </List.Accordion>
            ))}

            {/* Liste des proverbes - Content 2 */}
            {section.content2.length > 0 && (
              <Text style={styles.sectionTitle}>Content 2</Text>
            )}
            {section.content2.map((item, index) => (
              <List.Accordion
                key={index}
                title={`“${item.proverb}”`}
                left={(props) => <List.Icon {...props} icon="format-quote-close" />}
                style={styles.accordion}
              >
                <List.Item
                  title={item.proverb}
                  description={item.description}
                  onPress={() => speakProverb(item.proverb)}
                />
              </List.Accordion>
            ))}
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
    backgroundColor: '#f8f8f8',
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  accordion: {
    backgroundColor: '#e8f5e9',
    marginBottom: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
});

export default ProverbsScreen;
