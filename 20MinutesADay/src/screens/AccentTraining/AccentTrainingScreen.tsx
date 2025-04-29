import React, { useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const trainings1 = [
  {
    id: 1,
    title: 'Lesson 50: AMERICAN ACCENT TRAINING',
    description: 'INTONATION PRACTICE',
    content1: [
      {
        training: 'READING WITH STAIRCASE INTONATION',
        subtitle: 'Practice clear intonation',
        description: `Read the following with clear intonation where marked. Every time, you come to the
underlined bold characters, you rise your voice up. Repeat after me, let’s begin!
\n Hello, my name is_____________. I’m taking American Accent training. There’s a lot to learn,
but I hope to make it as enjoyable as possible. I should pick up on the American
intonation pattern pretty easily, although the only way to get it is to practice all of the
time. I use the up and down, or peaks and valleys, intonation more than I used to. I’ve
been paying attention to pitch, too. It’s like walking down a staircase. I’ve been talking to
a lot of Americans lately, and they tell me that I’m easier to understand. Anyway, I could
go on and on, but the important thing is to listen well and sound good. Well, what do you
think? DoI?`,
      },
    ],
    content2: [
      {
        training: 'SOME RULES TO BE REMEMBERED (LIAISON)',
        subtitle: 'Practice liaison rules',
        description: ` → CONSONNE + VOWEL doit être lié : American Accent = amerkenaksent
        \n → Test lid faible, comme= I get it = I ged it
        \n → T+Y= TR= comme= I got you= I gotrio
        \n→ DID+Y= DJOU= comme= Did you come yesterday? = Djou come………..?
        \n→ DO+YOU= DY= comme= What do you mean? = wa dy min?`,
      },
    ],
   
  },
];

const trainings2 = [
  {
    id: 1,
    title: 'AMERICAN IDIOMS',
    description: 'SPOKEN EXPRESSIONS',
    content1: [
      {
        training: 'TO PULL SB’S LEG → = blaguer =Mananiany',
        subtitle: '',
        description: `Ex: Don’t take it seriously; I’m just pulling your leg.`,
      },
    ],
    content2: [
      {
        training: 'TO BEAT AROUND THE BUSH → NOT STRAIGHT= Tourner autour du pôt= Tsy miteny izay tiana hotenenina',
        subtitle: '',
        description: ` 
        \n →Ex: Stop beating around the bush, but tell me what you want?`,
      },
    ],
    content3: [
      {
        training: 'TO PLAY HARD TO GET → ACT SEEM MORE ATTRACTIVE= Mamilafila.Jouer les insaisissable.',
        subtitle: '',
        description: ` 
        \n →Ex: You really play hard to get, who do you think you are? ..pour qui tu te prends?`,
      },
    ],
    content4: [
      {
        training: 'TO BE AT A LOSS → DISORIENTED= TSY MAHAFANTATRA NY ATAO=Désorienté/déconcerté.',
        subtitle: '',
        description: ` 
        \n → Ex: Yesterday, when I met her I was at a loss.`,
      },
    ],
    content5: [
      {
        training: 'TO HAVE A BIGGER FISH TO FRY → BE TIED UP= TERY = Occupé',
        subtitle: '',
        description: `\nAvoir d'autres chats à fouetter.
        Ex : Sorry for yesterday, I had a bigger fish to fry`,
      },
    ],
    content6: [
      {
        training: 'TO BE A WET BLANKET → A KILL JOY= RABBAT-JOIE= BE RESAKA SADY TSY MBA MINO HAHAVITA ZAVATRA.',
        subtitle: '',
        description: ` 
        \nEx: James was not invited to go on the outing with the rest of the group as he’s such a
         WET BLANKET.`,
      },
    ],
    content7: [
      {
        training: 'TO BE OUT OF THE WOODS → TIRÉ D’AFFAIRE= TSY MISY OLANA INTSONY',
        subtitle: '',
        description: ` 
        \n →Ex: You are not out of the woods yet, so you need to be careful!
        Vou n’êtes pasencore tiré d’affaire, alors faites attention !`,
      },
    ],

  },
];

const AccentTrainingScreen = () => {
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
          
   // Fonction pour faire parler le proverbe
    const speakTraining = (training: string): void => {
      Speech.speak(training, {
        language: 'en-US',
        pitch: 1,
        rate: 1,
      });
    };

  
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Accent Training</Text>
      
      <View style={styles.textWithButtonContainer}>
          <Text style={styles.content}>
          Improve your accent training exercises.
          </Text>
      
          {/* Bouton pour jouer l'audio */}
          <TouchableOpacity style={styles.audioButton} onPress={playSound}>
            <Ionicons name="volume-high" size={24} color="#8da9c4" />
          </TouchableOpacity>
        </View>

       {trainings1.map((section) => (
              <Card key={section.id} style={styles.card}>
                  <Card.Title titleStyle={styles.boldTitle} title={section.title} />
                <Card.Content>
                  <Text style={styles.description}>{section.description}</Text>
      
                  {section.content1.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                    >
                      {/* Sous-titre */}
                      <Text 
                        style={styles.subtitle} 
                        onPress={() => speakTraining(item.training)}
                      >
                        {item.subtitle || 'Subtitle Missing'}
                      </Text>
      
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}
      
                  {section.content2.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                    >
                      {/* Sous-titre */}
                      <Text 
                        style={styles.subtitle} 
                        onPress={() => speakTraining(item.training)}
                      >
                        {item.subtitle}
                      </Text>
      
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}
      
                </Card.Content>
              </Card>
            ))}

          {trainings2.map((section) => (
              <Card key={section.id} style={styles.card}>
                <Card.Title title={section.title}  />
                <Card.Content>
                  <Text style={styles.description}>{section.description}</Text>
      
                  {section.content1.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                    
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}
      
                  {section.content2.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}

                {section.content3.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}

                {section.content4.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}

                {section.content5.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}

              {section.content6.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
                    </List.Accordion>
                  ))}

             {section.content7.map((item, index) => (
                    <List.Accordion
                      key={index}
                      title={item.training}
                      left={(props) => <List.Icon {...props} icon="microphone" />}
                      style={styles.accordion}
                      onPress={() => speakTraining(item.training)}
                    >
                      {/* Description complète */}
                      <Text style={styles.content}>
                        {item.description}
                      </Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#bb3e03',
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    marginBottom: 22,
    borderRadius: 8,
  },
  accordion: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
  phraseButton: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  subtitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#8da9c4',
    marginBottom: 8,
  },
  phraseText: {
    fontSize: 16,

    color: '#333',
  },
  speakButton: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    lineHeight: 22,
    marginBottom: 16,

  },
  boldTitle: {
    fontWeight: 'bold',
    fontSize: 12, // You can adjust the size if needed
  },
  textWithButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligne verticalement le texte et le bouton
    justifyContent: 'space-between', // Optionnel, permet d'ajuster l'espacement
    marginTop: 0, // Ajoute de l'espace entre le titre et cette ligne
  },
  audioButton: {
    marginLeft: 16,
    padding: 10,
  },
});

export default AccentTrainingScreen;
