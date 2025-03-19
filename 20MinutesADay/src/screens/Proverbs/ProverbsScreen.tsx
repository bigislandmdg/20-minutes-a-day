import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, Button, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech'; // Import expo-speech

const ProverbsScreen = () => {
  // Function to handle proverb speech
  const speakProverb = (proverb: string): void => {
    Speech.speak(proverb, {
      language: 'en-US',
      pitch: 1,
      rate: 1,
    });
  };

  const handleProverbPress = () => {
    Alert.alert("Proverb Practice", "You can now start practicing proverbs!");
  };

  return (
    <ScrollView style={styles.container}>
      {/* ---- Carte 1 ---- */}
      <Card style={styles.card}>
        <Card.Title title="Proverb Practice 1" />
        <Card.Content>
          <Text style={styles.description}>
            Improve your understanding of proverbs. Here are some common proverbs you can practice and reflect on.
          </Text>

          <List.Accordion
            title="Proverbs List 1"
            left={props => <List.Icon {...props} icon="format-quote-close" />}
            style={styles.accordion}
          >
            <List.Item
              title="A picture is worth a thousand words."
              onPress={() => speakProverb("A picture is worth a thousand words.")}
            />
            <List.Item
              title="Actions speak louder than words."
              onPress={() => speakProverb("Actions speak louder than words.")}
            />
            <List.Item
              title="The early bird catches the worm."
              onPress={() => speakProverb("The early bird catches the worm.")}
            />
          </List.Accordion>

          <Button
            mode="contained"
            onPress={handleProverbPress}
            style={styles.button}
          >
            Start Proverb Practice
          </Button>

          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.moreButton}
          >
            View More Proverbs
          </Button>
        </Card.Content>
      </Card>

      {/* ---- Carte 2 ---- */}
      <Card style={styles.card}>
        <Card.Title title="Proverb Practice 2" />
        <Card.Content>
          <Text style={styles.description}>
            Here are some more proverbs to deepen your understanding.
          </Text>

          <List.Accordion
            title="Proverbs List 2"
            left={props => <List.Icon {...props} icon="format-quote-close" />}
            style={styles.accordion}
          >
            <List.Item
              title="Don't count your chickens before they hatch."
              onPress={() => speakProverb("Don't count your chickens before they hatch.")}
            />
            <List.Item
              title="A journey of a thousand miles begins with a single step."
              onPress={() => speakProverb("A journey of a thousand miles begins with a single step.")}
            />
            <List.Item
              title="When in Rome, do as the Romans do."
              onPress={() => speakProverb("When in Rome, do as the Romans do.")}
            />
          </List.Accordion>

          <Button
            mode="contained"
            onPress={handleProverbPress}
            style={styles.button}
          >
            Start Proverb Practice
          </Button>

          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.moreButton}
          >
            View More Proverbs
          </Button>
        </Card.Content>
      </Card>

      {/* ---- Carte 3 ---- */}
      <Card style={styles.card}>
        <Card.Title title="Proverb Practice 3" />
        <Card.Content>
          <Text style={styles.description}>
            Keep practicing with these additional proverbs.
          </Text>

          <List.Accordion
            title="Proverbs List 3"
            left={props => <List.Icon {...props} icon="format-quote-close" />}
            style={styles.accordion}
          >
            <List.Item
              title="Fortune favors the bold."
              onPress={() => speakProverb("Fortune favors the bold.")}
            />
            <List.Item
              title="Honesty is the best policy."
              onPress={() => speakProverb("Honesty is the best policy.")}
            />
            <List.Item
              title="You can't judge a book by its cover."
              onPress={() => speakProverb("You can't judge a book by its cover.")}
            />
          </List.Accordion>

          <Button
            mode="contained"
            onPress={handleProverbPress}
            style={styles.button}
          >
            Start Proverb Practice
          </Button>

          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.moreButton}
          >
            View More Proverbs
          </Button>
        </Card.Content>
      </Card>
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
  button: {
    marginVertical: 12,
    backgroundColor: '#2fa292',
  },
  moreButton: {
    marginVertical: 4,
    borderColor: '#2fa292',
  },
});

export default ProverbsScreen;
