import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const dialogues1 = [
  {
    id: 1,
    title: 'Lesson 1: GREETINGS',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Good morning/afternoon/evening",
        pronunciation: '[goud mo:nin/aft:noun/iv:nin]',
      },
      {
        sentence: 'Hi, Hello!',
        pronunciation: '[hai], [hɛˈloʊ]',
      },
      {
        sentence: 'How are you doing/ How’s it going?',
        pronunciation: '[Haoa you doin/ haozit…....goin]',
      },
      {
        sentence: 'Good morning!',
        pronunciation: '[goud mo:nin]',
      },
    ],
    content2: [
      {
        sentence: "B- I’m fine/ good/ I’m in good shape, thanks.",
        pronunciation: "[aim fain/goud/aim in goud sheip, tenks]",
      },
      {
        sentence: "Not bad[na bad]thanks, AND YOU/WHAT ABOUT YOU?",
        pronunciation: "[nat baad, tenks, ……ænd ju/ wot abaut ju]",
      },
      {
        sentence: "→ You say this when you are feeling sick",
        pronunciation: "[ju sey dis wen ju ar filin sik]",
      },
      {
        sentence: "→ I’m feeling bad, today/ I’m in bad shape.",
        pronunciation: "[aimfiilin baad/ ………. ai d /aim in baad sheip]",
      },
      {
        sentence: "→ Then you say: I’m sorry, Get well soon! Désolé; Soignes-toi bien",
        pronunciation: "[den ju sey: aim sori, get wel sun!]",
      },
    ],
    content3: [
      {
        sentence: "A- What’s new/ up?",
        pronunciation: "[wats nio/nou/ap]",
      },
      {
        sentence: "B- Nothing (special/ much)/ Not much but I’m tired.",
        pronunciation: "[nafin speshel/matr/ nat matr…baraim taird]",
      },
    ],
    content4: [
      {
        sentence: "A- So, where are you from?",
        pronunciation: "[sei..wer a io frem]",
      },
      {
        sentence: "→ Where do you come from?",
        pronunciation: "[wer dy kam frem]",
      },
      {
        sentence: "B- Um, I’m from Tana, but I grew up in Tulear.",
        pronunciation: "[am..aim from………..barai grou ap in……]",
      },
      {
        sentence: "I come from Madagascar…and you [en io]?",
        pronunciation: "[ai kam from Madagaskar... en io]",
      },
    ],
  },
  // ... other dialogues remain unchanged
];

const dialogues2 = [
  {
    id: 1,
    title: 'Lesson 2: ASKING SB’S DWELLING ',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Where do you live/dwell [doel]., here?",
        pronunciation: '[wer dyu liv/dwel, hiar]',
      },
      {
        sentence: '→ Where’s home?',
        pronunciation: '[werz houm]',
      },
      {
        sentence: 'B- Well, I live in/at downtown/Ampefiloha..',
        pronunciation: '[wel, ai liv in/at dauntaon/Ampefiloha]',
      },
      {
        sentence: '→ Who do you live with?',
        pronunciation: '[hu du yu liv wid]',
      },
      {
        sentence: '→ Do you live alone?',
        pronunciation: '[du yu liv aloun]',
      },
      {
        sentence: 'A- Well, I live with [wid] my parents',
        pronunciation: '[wel, ai liv wid mai perents]',
      },
      {
        sentence: '→ Where about(s) there you live?',
        pronunciation: '[wel, ai liv wid mai perents]',
      },
      
    ],
    content2: [
      {
        sentence: "A- Do you have any brothers or sisters?",
        pronunciation: "[du yu hav eni bradars or sistars]",
      },
      {
        sentence: "→ How many brothers and sisters do you have?",
        pronunciation: "[hau meni br dars and sistars du yu hav]",
      },
      {
        sentence: "B- Yes, I do, I have one brother and two sisters.",
        pronunciation: "[yes, ai du, ai hav wan bradar and tu: sistars]",
      },
      {
        sentence: "→ No, I don’t, I’m an only child.",
        pronunciation: "[no, ai dont, aim an ounli chaild]",
      },
     
    ],
    content3: [
      {
        sentence: "A- Where are you going now?",
        pronunciation: "[wer ar yu goin nau]",
      },
      {
        sentence: "→ Where are you off to?",
        pronunciation: "[wer ar yu of tu]",
      },
      {
        sentence: "B- Well, I’m going to learn English now.",
        pronunciation: "[wel, aim goin tu l rn inglish nau]",
      },
      {
        sentence: "→ I’m going to the market/bank/to School/to 67ha",
        pronunciation: " [aim goin tu de markit/bank/tu sku:l/tu siksiti sevn a]/ What about you?",
      },
      {
        sentence: "A- Where have you been?",
        pronunciation: "[wer hav yu bin]",
      },
      {
        sentence: "→ Where are you coming from?",
        pronunciation: "[wer ar yu kam in from]",
      },
      {
        sentence: "B- Well, I’ve been to the Market/bank/police..etc.",
        pronunciation: " [wel, aiv bin tu de markit/bank/polis..etc.]",
      },
      {
        sentence: "→ I’m coming from the Market/bank/police",
        pronunciation: "[aim kam in from de markit/bank/polis]",
      },

    ],
   
  },
  // ... other dialogues remain unchanged
];

const DailyDialoguesScreen = () => {
  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      rate: 0.9, // Adjust the speech rate
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Dialogues</Text>
      <Text style={styles.content}>
        Learn to hold a daily conversation in English.
      </Text>

      {dialogues1.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            title={dialogue.title}
            subtitle={dialogue.description}
          />
          <Card.Content>
            <List.Accordion
              title="GREETING PHRASES"
              left={(props) => <List.Icon {...props} icon="handshake" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation here
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="RESPONDING TO GREETINGS"
              left={(props) => <List.Icon {...props} icon="emoticon-happy" color='#8da9c4' />}
            >
              {dialogue.content2.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the second set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="ASKING THE NEWS"
              left={(props) => <List.Icon {...props} icon="newspaper" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Fourth Accordion: Asking SB's Origin */}
            <List.Accordion
              title="ASKING SB's ORIGIN"
              left={(props) => <List.Icon {...props} icon="map-marker" color='#8da9c4' />}
            >
              {dialogue.content4.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the fourth set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

          </Card.Content>
        </Card>
      ))}

{dialogues2.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            title={dialogue.title}
            subtitle={dialogue.description}
          />
          <Card.Content>
            <List.Accordion
              title="ASKING SB’S DWELLING"
              left={(props) => <List.Icon {...props} icon="home-city" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation here
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="ASKING SB’S IF THEY HAVE SIBLINGS"
              left={(props) => <List.Icon {...props} icon="account-group" color='#8da9c4' />}
            >
              {dialogue.content2.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the second set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="ASKING SB’S DIRECTION"
              left={(props) => <List.Icon {...props} icon="compass" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#bb3e03',
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
  },
  pronunciation: {
    fontStyle: 'italic', // Style for the pronunciation
    color: '#555',
    marginTop: 4,
  },
});

export default DailyDialoguesScreen;
