
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import { Card, List, Text, Button, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import PayementScreen from '../Payement/PayementScreen';

const proverbs = [
  {
    id: 1,
    title: 'Lesson 68: PROVERBS',
    description: 'DAILY SPOKEN',
    content1: [
      {
        proverb: '“Two Heads Are Better Than one”',
        subtitle: '(Two people working together can solve a problem quicker and better than a person working alone)',
        description: `A: Hey, Jonathan. Come over here a minute.\nB: What’s happening?\nA: I’d like to pick your brain for this composition I have to hand it tomorrow. I’ve got a problem with the introduction, and I figure that two heads are better than one. I need some input on the wording.\nB: To be honest with you, I’m not that good with words, but I’m willing to help out if I can.\nA: Thanks buddy. My brain is all dried up. I’m sure the two of us working together will be able to solve this problem faster than I could do it alone.\nB: Well, I’ll give it my best shot. Let me look at what you’ve already written and we’ll take it from there.`,
      },
    ],
    content2: [
      {
        proverb: '“Do As I Say, Not As I Do”',
        subtitle: '(Follow my advice, but don’t follow my example)',
        description: `A: For heaven’s sake, Dave. You smell like a chimney...\nB: You can talk all you want—but look at you!\nA: Never mind me. Do as I say, not as I do.\nB: But you’ve been smoking ever since you were a teenager.\nA: Just because I’ve made a mistake doesn’t mean you have to repeat it.\nB: OK. You win. I’ll try. But why don’t we both try to stop? Maybe we can help each other out.\nA: You’re on. I’ll give it a whirl.`,
      },
    ],
    content3: [
      {
        proverb: '“Curiosity Killed the Cat”',
        subtitle: '(It is dangerous to be curious)',
        description: `A: Phil, you have no business trying to find out what will be on tomorrow’s exam...\nB: If I don’t pass this exam, I probably won’t pass the course.\nA: Ok. But it’s your funeral! Sooner or later your curiosity will do you in.`,
      },
    ],
    content4: [
      {
        proverb: '“Don’t Bite the Hand That Feeds You”',
        subtitle: '(Don’t hurt someone who takes care of you)',
        description: `A: Julie, I simply can’t understand you! I’ve worked my fingers to the bone...\nB: I’m sorry, Dad. I don’t mean to hurt you...\nA: Still, don’t be hasty. Why don’t you give this a little more thought?`,
      },
    ],
  },
];

const ProverbsScreen = () => {

  const [isLessonUnlocked, setIsLessonUnlocked] = useState(false); // <- Lock/Unlock
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const sound = useRef<Audio.Sound | null>(null);
       
         // Fonction pour jouer l'audio
         const playSound = async () => {
           if (sound.current) {
             await sound.current.unloadAsync(); // Décharge si déjà chargé
           }
          // const { sound: newSound } = await Audio.Sound.createAsync(
           //  require('../assets/audio/daily_dialogue.mp3')  // ton chemin audio ici
           //);
           //sound.current = newSound;
           //await sound.current.playAsync();
         };

  const speakProverb = (text: string): void => {
    Speech.speak(text, {
      language: 'en-US',
      pitch: 1,
      rate: 1,
    });
  };

  const renderContent = (content: any[]) =>
    content.map((item, index) => (
      <List.Accordion
        key={index}
        title={item.proverb}
        left={(props) => <List.Icon {...props} icon="format-quote-close" />}
        style={styles.accordion}
      >
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <IconButton
            icon="volume-high"
            size={20}
            onPress={() => speakProverb(item.proverb)}
            accessibilityLabel="Listen"
          />
        </View>
        <Text style={styles.content}>{item.description}</Text>
      </List.Accordion>
    ));

    const handlePaymentSuccess = () => {
      setIsLessonUnlocked(true);
      setPaymentModalVisible(false);
    };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Proverbs</Text>

      <View style={styles.textWithButtonContainer}>
          <Text style={styles.content}>
            Learn to hold a various proverbs lessons in English.
          </Text>
      
          {/* Bouton pour jouer l'audio */}
          <TouchableOpacity style={styles.audioButton} onPress={playSound}>
            <Ionicons name="volume-high" size={24} color="#8da9c4" />
          </TouchableOpacity>
        </View>

        {proverbs.map((section) => (
        <Card key={section.id} style={styles.card}>
          <Card.Title
            title={<Text style={styles.cardTitle}>{section.title}</Text>}
          />
          <Card.Content>
            <Text style={styles.description}>{section.description}</Text>

            {isLessonUnlocked ? (
              <>
                {renderContent(section.content1)}
                {renderContent(section.content2)}
                {renderContent(section.content3)}
                {renderContent(section.content4)}
              </>
            ) : (
              <View style={styles.lockedContainer}>
                <Text style={styles.lockedText}>
                  This lesson is locked. Please purchase to unlock.
                </Text>
                <Button
                  mode="contained"
                  onPress={() => setPaymentModalVisible(true)}
                  style={styles.paymentButton}
                >
                  Unlock Lesson
                </Button>
              </View>
            )}
          </Card.Content>
        </Card>
      ))}

      {proverbs.map((section) => (
        <Card key={section.id} style={styles.card}>
          <Card.Title
            title={<Text style={styles.cardTitle}>{section.title}</Text>}
          />
          <Card.Content>
            <Text style={styles.description}>{section.description}</Text>

            {isLessonUnlocked ? (
              <>
                {renderContent(section.content1)}
                {renderContent(section.content2)}
                {renderContent(section.content3)}
                {renderContent(section.content4)}
              </>
            ) : (
              <View style={styles.lockedContainer}>
                <Text style={styles.lockedText}>
                  This lesson is locked. Please purchase to unlock.
                </Text>
                <Button
                  mode="contained"
                  onPress={() => setPaymentModalVisible(true)}
                  style={styles.paymentButton}
                >
                  Unlock Lesson
                </Button>
              </View>
            )}
          </Card.Content>
        </Card>
      ))}

       {/* Modal for Payment */}
      <Modal
        visible={isPaymentModalVisible}
        animationType="slide"
        transparent={false}
      >
        <PayementScreen onClose={() => setPaymentModalVisible(false)} onPaymentSuccess={handlePaymentSuccess} />
      </Modal>

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
    marginBottom: 18,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#bb3e03',
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    color: '#333',
  },
  accordion: {
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    borderRadius: 8,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    flex: 1,
  },
  content: {
    fontSize: 14,
    color: '#333',
    marginTop: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  textWithButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligne verticalement le texte et le bouton
    justifyContent: 'space-between', // Optionnel, permet d'ajuster l'espacement
    marginTop: 0, // Ajoute de l'espace entre le titre et cette ligne
  },
  audioButton: {
    marginLeft: 10,
    padding: 10,
  },
  lockedContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  lockedText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
    textAlign: 'center',
  },
  paymentButton: {
    backgroundColor: '#bb3e03',
  },
});

export default ProverbsScreen;
