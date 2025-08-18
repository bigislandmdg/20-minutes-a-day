import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import { Card, List, Text, Button, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage'; // 🔑 stockage local
import PayementScreen from '../Payement/PayementScreen';
import { useSearch } from '../../contexts/SearchContext';

const STORAGE_KEY = "lesson_unlock_state"; // clé de sauvegarde JSON

const proverbs = [
  {
    id: 1,
    title: 'Lesson 68: PROVERBS',
    description: 'DAILY SPOKEN',
    content1: [
      {
        proverb: '“Two Heads Are Better Than one”',
        subtitle: '(Two people working together can solve a problem quicker and better than a person working alone)',
        description: `A: Hey, Jonathan. Come over here a minute.\nB: What’s happening?\nA: I’d like to pick your brain for this composition...`,
      },
    ],
    content2: [
      {
        proverb: '“Do As I Say, Not As I Do”',
        subtitle: '(Follow my advice, but don’t follow my example)',
        description: `A: For heaven’s sake, Dave. You smell like a chimney...`,
      },
    ],
    content3: [
      {
        proverb: '“Curiosity Killed the Cat”',
        subtitle: '(It is dangerous to be curious)',
        description: `A: Phil, you have no business trying to find out what will be on tomorrow’s exam...`,
      },
    ],
    content4: [
      {
        proverb: '“Don’t Bite the Hand That Feeds You”',
        subtitle: '(Don’t hurt someone who takes care of you)',
        description: `A: Julie, I simply can’t understand you! I’ve worked my fingers to the bone...`,
      },
    ],
  },
];

const ProverbsScreen = () => {
  const [isLessonUnlocked, setIsLessonUnlocked] = useState(false); 
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const sound = useRef<Audio.Sound | null>(null);
  const { searchTerm } = useSearch();

  // 🔹 Charger état depuis AsyncStorage
  useEffect(() => {
    const loadUnlockState = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setIsLessonUnlocked(parsed.isLessonUnlocked);
        }
      } catch (e) {
        console.error("Erreur de chargement:", e);
      }
    };
    loadUnlockState();
  }, []);

  // 🔹 Sauvegarder état quand ça change
  useEffect(() => {
    const saveUnlockState = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ isLessonUnlocked }));
      } catch (e) {
        console.error("Erreur de sauvegarde:", e);
      }
    };
    saveUnlockState();
  }, [isLessonUnlocked]);

  // Fonction pour jouer un audio local (si besoin)
  const playSound = async () => {
    if (sound.current) {
      await sound.current.unloadAsync();
    }
    // exemple: await Audio.Sound.createAsync(require('../assets/audio/daily_dialogue.mp3'));
  };

  const speakProverb = (text: string): void => {
    Speech.speak(text, {
      language: 'en-US',
      pitch: 1,
      rate: 1,
    });
  };

  const renderContent = (content: any[]) => {
    const filteredContent = content.filter(item =>
      item.proverb.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredContent.map((item, index) => (
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
  };

  // 🔹 Callback après succès paiement
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
        <TouchableOpacity style={styles.audioButton} onPress={playSound}>
          <Ionicons name="volume-high" size={24} color="#004e98" />
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

      {/* Modal Paiement */}
      <Modal
        visible={isPaymentModalVisible}
        animationType="slide"
        transparent={false}
      >
        <PayementScreen 
          onClose={() => setPaymentModalVisible(false)} 
          onPaymentSuccess={handlePaymentSuccess} 
        />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  card: { marginBottom: 18, borderRadius: 8, backgroundColor: '#ffffff' },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#000' },
  screenTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#bb3e03', marginBottom: 10 },
  description: { fontSize: 14, marginBottom: 12, color: '#333' },
  accordion: { backgroundColor: '#f0f0f0', marginBottom: 16, borderRadius: 8 },
  subtitleContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  subtitle: { fontSize: 14, fontStyle: 'italic', color: '#555', flex: 1 },
  content: { fontSize: 14, color: '#333', marginTop: 14, lineHeight: 22, marginBottom: 16 },
  textWithButtonContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  audioButton: { marginLeft: 10, padding: 10 },
  lockedContainer: { alignItems: 'center', marginVertical: 20 },
  lockedText: { fontSize: 16, color: '#888', marginBottom: 12, textAlign: 'center' },
  paymentButton: { backgroundColor: '#bb3e03' },
});

export default ProverbsScreen;
