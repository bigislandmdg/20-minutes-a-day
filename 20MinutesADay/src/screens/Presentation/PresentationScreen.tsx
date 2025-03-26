import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech';

type Section = {
  title: string;
  items: string[];
};

type Presentation = {
  id: number;
  title: string;
  subtitle: string;
  content: Section[];
};

const presentations: Presentation[] = [
  {
    id: 1,
    title: 'Lesson 61: ENGLISH FOR PRESENTATION',
    subtitle: 'LADIES AND GENTLEMENT',
    content: [
      {
        title: '1.1 Welcoming the audience',
        items: [
          '- Good morning/afternoon, ladies and gentlemen',
          '- Hi/Hello, everyone.',
          '- First of all, let me thank you all for coming here today.',
          '- I’m happy/delighted that so many of you could make it today.',
        ],
      },
      {
        title: '1.2 Introducing yourself',
        items: [
          '- Let me introduce myself. I’m Dave Elwood from…',
          '- For those of you who don’t know me, my name’s…',
          '- As you probably know, I’m the new HR manager.',
          '- I’m head of logistics here at……',
          '- I’m here in my function as the Head of controlling.',
        ],
      },
      {
        title: '1.3 Saying what your topic is',
        items: [
          '- As you can see on the screen [ecran], our topic today is...',
          '- Today’s topic is…',
          '- What I’d like to present to you today is…',
          '- The subject of my presentation is…',
        ],
      },
      {
        title: '1.4 Explaining why your topic relevant for your audience',
        items: [
          '- My talk is particularly relevant to those of you/us who…',
          '- Today’s topic is of particular interest to those of you/us who..',
          '- My/topic is very important for you because…',
          '- By the end of this talk you will be familiar with...',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Lesson 61: ENGLISH FOR PRESENTATION',
    subtitle: 'STRUCTURING A PRESENTATION',
    content: [
      {
        title: '→ Most formal and many informal presentations have three main parts and follow this simple formula:',
        items: [
          '1- Tell the audience what you are going to say! = Introduction',
          '2- Say it! = Main part',
          '3- Tell them what you said! = Conclusion',
        ],
      },
      {
        title: '→ There are several ways you can tell the audience what you are going to say.',
        items: [
          '→ Would like + infinitive\nEx: Today I’d like to tell about our new plans.',
          '→ Going to + infinitive\n\nEx: I’m going to talk to you today about ….',
          '→ Will + infinitive\n\nEx: I’ll begin by + v.ing',
          '→ Will be + verb.Ing\n\nEx: I’ll be talking about our…',
          '→ The purpose of the introduction is not only to tell the audience who you are, what the is about, and why it is relevant to them; you also want to tell the audience briefly how the talk is structured.',
          '→ I’ve divided my presentation into three main parts: X, Y, and Z',
          '→ In my presentation I’ll focus on three major issues=problem',
          '→ First of all, I’ll be looking at…, second…, and third…',
          '→ Then/Next/after that, I’ll go on to…',
          '→ Finally, I’ll offer some solutions',
        ],
      },
      {
        title: 'REMARKS',
        items: [
          'ISSUE = Question/Probleme TO BE RELEVANT TO = Etre pertinent par rapport à ch PARTICULAR = Particulier; TO FOCUS ON = Se concentrer sur qlq chose; AUDIENCE = Audience',
        ],
      },
    ],
  },
];

// Fonction pour lire le texte avec la synthèse vocale
const speak = (text: string) => {
  Speech.speak(text, {
    language: 'en',
  });
};

// Composant réutilisable pour afficher une présentation
const PresentationCard = ({ presentation }: { presentation: Presentation }) => (
  <Card key={presentation.id} style={styles.card}>
    <Card.Title title={presentation.title} />
    <Card.Content>
      <Text style={styles.subtitle} onPress={() => speak(presentation.subtitle)}>
        {presentation.subtitle}
      </Text>

      {presentation.content.map((section, index) => (
        <List.Accordion
          key={index}
          title={<Text style={styles.sectionTitle}>{section.title}</Text>}
          style={styles.accordion}
        >
          {section.items.map((item, idx) => {
            const parts = item.split('\n\n');
            const mainText = parts[0];
            const example = parts[1] || '';

            return (
              <List.Item
                key={idx}
                title={
                  <>
                    {/* Affichage du texte principal */}
                    <Text style={styles.mainText}>{mainText}</Text>
                    {/* Affichage de l'exemple s'il existe */}
                    {example ? (
                      <Text style={styles.exampleText}>{`\nEx: ${example}`}</Text>
                    ) : null}
                  </>
                }
                onPress={() => speak(item)}
                style={styles.listItem}
              />
            );
          })}
        </List.Accordion>
      ))}
    </Card.Content>
  </Card>
);

const PresentationScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>English for Presentation</Text>
    <Text style={styles.content}>
      This screen contains English for Presentation.
    </Text>

    {presentations.map((presentation) => (
      <PresentationCard key={presentation.id} presentation={presentation} />
    ))}
  </ScrollView>
);

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
    marginBottom: 22,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#bb3e03',
  },
  content: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    lineHeight: 22,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8da9c4',
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  accordion: {
    backgroundColor: '#f4f4f4',
  },
  listItem: {
    paddingLeft: 16,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  exampleText: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#555',
  },
});

export default PresentationScreen;
