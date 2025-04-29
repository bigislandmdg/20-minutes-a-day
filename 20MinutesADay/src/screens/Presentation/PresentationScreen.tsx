import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { List, Text, IconButton, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

type ContentItem = {
  title: string;
  items: string[];
};

type Presentation = {
  id: number;
  title: string;
  subtitle: string;
  content: ContentItem[];
};

const presentations: Presentation[] = [
  {
    id: 1,
    title: 'Lesson 61: ENGLISH FOR PRESENTATION',
    subtitle: 'LADIES AND GENTLEMEN & STRUCTURING A PRESENTATION',
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
        title: '1.4 Explaining why your topic is relevant for your audience',
        items: [
          '- My talk is particularly relevant to those of you/us who…',
          '- Today’s topic is of particular interest to those of you/us who..',
          '- My/topic is very important for you because…',
          '- By the end of this talk you will be familiar with...',
        ],
      },
      {
        title: 'Structuring a presentation',
        items: [
          '1- Tell the audience what you are going to say! = Introduction',
          '2- Say it! = Main part',
          '3- Tell them what you said! = Conclusion',
        ],
      },
      {
        title: 'Ways to tell the audience what you are going to say',
        items: [
          '→ Would like + infinitive\nEx: Today I’d like to tell about our new plans.',
          '→ Going to + infinitive\nEx: I’m going to talk to you today about ….',
          '→ Will + infinitive\nEx: I’ll begin by + v.ing',
          '→ Will be + verb.ing\nEx: I’ll be talking about our…',
          '→ The purpose of the introduction is not only to tell the audience who you are, what the talk is about, and why it is relevant to them; you also want to tell the audience briefly how the talk is structured.',
          '→ I’ve divided my presentation into three main parts: X, Y, and Z',
          '→ In my presentation I’ll focus on three major issues=problem',
          '→ First of all, I’ll be looking at…, second…, and third…',
          '→ Then/Next/after that, I’ll go on to…',
          '→ Finally, I’ll offer some solutions',
        ],
      },
      {
        title: 'Remarks',
        items: [
          'ISSUE = Question/Problem TO BE RELEVANT TO = Etre pertinent par rapport à… PARTICULAR = Particulier; TO FOCUS ON = Se concentrer sur quelque chose; AUDIENCE = Audience',
        ],
      },
    ],
  },
];


const PresentationScreen = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setExpanded(expanded === index ? null : index); // Toggle accordion expansion
  };

  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en-US',
      pitch: 1,
      rate: 1,
    });
  };

  const renderContent = (content: ContentItem[]) =>
    content.map((section, index) => (
      <Card key={index} style={styles.card}>
        <Card.Content>
          <List.Accordion
            title={section.title}
            expanded={expanded === index}
            onPress={() => handlePress(index)}
          >
            {section.items.map((item, idx) => (
              <List.Item key={idx} title={item} />
            ))}
          </List.Accordion>
        </Card.Content>
      </Card>
    ));
    
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.screenTitle}>Presentations</Text>

    <View style={styles.textWithButtonContainer}>
      <Text style={styles.content}>Learn useful presentation phrases.</Text>
      <TouchableOpacity style={styles.audioButton}>
        <Ionicons name="volume-high" size={24} color="#8da9c4" />
      </TouchableOpacity>
    </View>

    {presentations.map((presentation) => (
      <Card key={presentation.id} style={styles.card}>
        <Card.Title
          titleStyle={styles.lessonTitle}
          title={presentation.title}
          subtitle={presentation.subtitle}
         
        />
        <Card.Content>
          {renderContent(presentation.content)}
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
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 10,
    color: '#555',
    marginBottom: 12,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#bb3e03',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  textWithButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  audioButton: {
    marginLeft: 1,
    padding: 0,
  },
  lessonTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#000',
  },
  
});

export default PresentationScreen;
