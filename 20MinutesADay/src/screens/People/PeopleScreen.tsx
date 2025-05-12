import React, { ReactNode, useRef } from 'react';
import { StyleSheet, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { Card, Text, List } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import { useSearch } from '../../contexts/SearchContext';

const headImage = require('../../../assets/images/humanbody.png');
const faceImage = require('../../../assets/images/womanface.jpg');


const people1 = [
  {
    id: 1,
    title: 'Lesson 53: BODY',
    description: 'PEOPLE — LES GENS',
    content1: [
      {
        part: 'Human Body',
        description: 'The human body includes the head, neck, chest, arms, and legs, containing vital organs and structures necessary for life and movement.',
        image: headImage,
        arrowPositionHead: { top: 40, left: 115 },
        arrowTitle: 'Head',
        arrowTranslation: 'La Tête', // Traduction
        arrowPositionNeck: { top: 60, left: 245 },
        arrowTitle1: 'Neck',
        arrowTranslation1: 'Le Cou', // Traduction
        arrowPositionChest: { top: 77, right: 70 },
        arrowTitle2: 'Chest',
        arrowTranslation2: 'La Poitrine', // Traduction
        arrowPositionAbdomen: { top: 110, right: 45 },
        arrowTitle3: 'Abdomen',
        arrowTranslation3: 'Le Ventre', // Traduction
        arrowPositionBreasts: { top: 86, right: 214 },
        arrowTitle4: 'Breasts',
        arrowTranslation4: 'Les seins', // Traduction
        arrowPositionWaist: { top: 125, right: 210 },
        arrowTitle5: 'Waist',
        arrowTranslation5: 'La taille', // Traduction
        arrowPositionNavel: { top: 118, left: 90 },
        arrowTitle6: 'Navel',
        arrowTranslation6: 'Le Nombril', // Traduction
        arrowPositionHip: { top: 150, left: 200 },
        arrowTitle7: 'Hip',
        arrowTranslation7: 'La Hanche', // Traduction
        arrowPositionNipple: { top: 90, left: 105 },
        arrowTitle8: 'Nipple',
        arrowTranslation8: 'Les mamelons', // Traduction
        arrowPositionGenitals: { top: 155, left: 233 },
        arrowTitle9: 'Genitals',
        arrowTranslation9: 'Les organes génitaux', // Traduction
        arrowPositionTigh: { top: 170, left: 115 },
        arrowTitle10: 'Tigh',
        arrowTranslation10: 'Le Cuisse',
        arrowPositionForearm: { top: 125, left: 275 },
        arrowTitle11: 'Forearm',
        arrowTranslation11: 'L’avant-bras',
        arrowPositionKnee: { top: 200, left: 205 },
        arrowTitle12: 'Knee',
        arrowTranslation12: 'Le genou',
        arrowPositionShin: { top: 210, left: 255 },
        arrowTitle13: 'Shin',
        arrowTranslation13: 'Le tibia',
        arrowPositionLeg: { top: 220, left: 110 },
        arrowTitle14: 'Leg',
        arrowTranslation14: 'Le jambe',
        arrowPositionFoot: { top: 262, left: 265 },
        arrowTitle15: 'Foot',
        arrowTranslation15: 'Le pied',
        arrowPositionNape: { top: 315, left: 249 },
        arrowTitle16: 'Nape of Neck',
        arrowTranslation16: 'La nuque',
        arrowPositionShoulder: { top: 345, left: 120 },
        arrowTitle17: 'Shoulder',
        arrowTranslation17: 'L’epaule',
        arrowPositionBack: { top: 338, left: 219 },
        arrowTitle18: 'Back',
        arrowTranslation18: 'Le dos',
        arrowPositionArmpit: { top: 358, left: 75 },
        arrowTitle19: 'Armpit',
        arrowTranslation19: 'L’aisselle',
        arrowPositionArm: { top: 355, left: 195 },
        arrowTitle20: 'Arm',
        arrowTranslation20: 'Le bras',
        arrowPositionElbow: { top: 365, left: 270 },
        arrowTitle21: 'Elbow',
        arrowTranslation21: 'Le coude',
        arrowPositionWrist: { top: 414, left: 38 },
        arrowTitle22: 'Wrist',
        arrowTranslation22: 'Le poignet',
        arrowPositionHand: { top: 425, left: 140 },
        arrowTitle23: 'Hand',
        arrowTranslation23: 'La main',
        arrowPositionSmallback: { top: 389, left: 235 },
        arrowTitle24: 'Small of Back',
        arrowTranslation24: 'Le creux de reins',
        arrowPositionButtock: { top: 427, left: 88 },
        arrowTitle25: 'Buttock',
        arrowTranslation25: 'La fesse',
        arrowPositionCalf: { top: 495, left: 210 },
        arrowTitle26: 'Calf',
        arrowTranslation26: 'Le mollet',
        arrowPositionAnkle: { top: 520, left: 109 },
        arrowTitle27: 'Ankle',
        arrowTranslation27: 'La cheville',
        arrowPositionHeel: { top: 528, left: 255 },
        arrowTitle28: 'Heel',
        arrowTranslation28: 'Le talon',
      },
    ],
  },
];

const people2 = [
  {
    id: 1,
    title: 'Lesson 54: FACE',
    description: 'PEOPLE — LES GENS',
    content1: [
      {
        part: 'Face',
        description: 'The face includes the eyes, nose, mouth, ears, and forehead, which are essential for communication, sensory perception, and expression.',
        image: faceImage,
        arrowPositionHair: { top: 40, left: 205 },
        arrowTitle: 'Hair',
        arrowTranslation: 'Les cheveux', // Traduction
        arrowPositionSkin: { top: 50, left: 99 },
        arrowTitle1: 'Skin',
        arrowTranslation1: 'La peau', // Traduction
        arrowPositionForehead: { top: 60, left: 145 },
        arrowTitle2: 'Forehead',
        arrowTranslation2: 'Le front', // Traduction
        arrowPositionTemple: { top: 90, left: 195 },
        arrowTitle3: 'Temple',
        arrowTranslation3: 'La tempe', // Traduction
        arrowPositionEyebrow: { top: 80, right: 147 },
        arrowTitle4: 'Eyebrow',
        arrowTranslation4: 'Le sourcil', // Traduction
        arrowPositionEyelash: { top: 102, right: 127 },
        arrowTitle5: 'Eyelash',
        arrowTranslation5: 'Le cil ', // Traduction
        arrowPositionEye: { top: 108, right: 65 },
        arrowTitle6: 'Eye',
        arrowTranslation6: 'L\'oeil', // Traduction
        arrowPositionNose: { top: 125, right: 105 },
        arrowTitle7: 'Nose',
        arrowTranslation7: 'Le nez', // Traduction
        arrowPositionEar: { top: 128, left: 199 },
        arrowTitle8: 'Ear',
        arrowTranslation8: 'L\'oreille', // Traduction
        arrowPositionNostril: { top: 145, left: 145 },
        arrowTitle9: 'Nostril',
        arrowTranslation9: 'La narine', // Traduction
        arrowPositionMole: { top: 150, right: 130 },
        arrowTitle10: 'Mole',
        arrowTranslation10: 'Le grain de beauté',
        arrowPositionMouth: { top: 155, left: 140 },
        arrowTitle11: 'Mouth',
        arrowTranslation11: 'La bouche',
        arrowPositionLip: { top: 172, left: 125 },
        arrowTitle12: 'Lip',
        arrowTranslation12: 'La levre',
        arrowPositionCheek: { top: 145, left: 165 },
        arrowTitle13: 'Cheek',
        arrowTranslation13: 'La joue',
        arrowPositionJaw: { top: 190, left: 100 },
        arrowTitle14: 'Jaw',
        arrowTranslation14: 'Le menton',
        arrowPositionChin: { top: 195, left: 160 },
        arrowTitle15: 'Chin',
        arrowTranslation15: 'La machoire',
       
       
      },
    ],
  },
];


const speak = (text: string) => {
  Speech.speak(text, { language: 'en' });
};

const PeopleScreen = () => {
   const sound = useRef<Audio.Sound | null>(null);
    const { searchTerm } = useSearch();
              
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
                const renderContent = (content: any[]) => {
                  // Filtrer ici :
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
                        
                      </View>
                      <Text style={styles.content}>{item.description}</Text>
                    </List.Accordion>
                  ));
                };
                
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>People</Text>
     
      <View style={styles.textWithButtonContainer}>
          <Text style={styles.content}>
          This screen shows parts of the human body.
          </Text>
      
          {/* Bouton pour jouer l'audio */}
          <TouchableOpacity style={styles.audioButton} onPress={playSound}>
            <Ionicons name="volume-high" size={24} color="#004e98" />
          </TouchableOpacity>
        </View>


      {people1.map((person) => (
        <Card key={person.id} style={styles.card}>
          <Card.Title
            title={<Text style={{ fontWeight: 'bold' }}>{person.title}</Text>}
            subtitle={person.description}
          />
          <Card.Content>
            {person.content1.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.part}
                left={(props) => <MaterialCommunityIcons {...props} name="human" color="#004e98" size={24} />}
                style={styles.accordion}
              >
                <Text style={styles.subtitle}>{item.description}</Text>

                <View style={styles.imageContainer}>
                  <Image style={styles.image1} source={item.image} />
                  
                  {/* Flèche pour la tête */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle)}
                    style={[styles.arrow, { top: item.arrowPositionHead.top, left: item.arrowPositionHead.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionHead.top + 10, left: item.arrowPositionHead.left }]}>
                    {item.arrowTitle}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionHead.top + 22, left: item.arrowPositionHead.left }]}>
                    {item.arrowTranslation}
                  </Text>

                  {/* Flèche pour le cou */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle1)}
                    style={[styles.arrow, { top: item.arrowPositionNeck.top, left: item.arrowPositionNeck.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionNeck.top + 10, left: item.arrowPositionNeck.left }]}>
                    {item.arrowTitle1}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionNeck.top + 22, left: item.arrowPositionNeck.left }]}>
                    {item.arrowTranslation1}
                  </Text>

                  {/* Flèche pour la poitrine */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle2)}
                    style={[styles.arrow, { top: item.arrowPositionChest.top, right: item.arrowPositionChest.right, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionChest.top + 10, right: item.arrowPositionChest.right }]}>
                    {item.arrowTitle2}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionChest.top + 22, right: item.arrowPositionChest.right }]}>
                    {item.arrowTranslation2}
                  </Text>
                  {/* Flèche pour la ventre */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle3)}
                    style={[styles.arrow, { top: item.arrowPositionAbdomen.top, right: item.arrowPositionAbdomen.right, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionAbdomen.top + 10, right: item.arrowPositionAbdomen.right }]}>
                    {item.arrowTitle3}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionAbdomen.top + 22, right: item.arrowPositionAbdomen.right }]}>
                    {item.arrowTranslation3}
                  </Text>
                  {/* Flèche pour les seins */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle4)}
                    style={[styles.arrow, { top: item.arrowPositionBreasts.top, right: item.arrowPositionBreasts.right, transform: [{ rotate: '55deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionBreasts.top + 10, right: item.arrowPositionBreasts.right }]}>
                    {item.arrowTitle4}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionBreasts.top + 22, right: item.arrowPositionBreasts.right }]}>
                    {item.arrowTranslation4}
                  </Text>
                   {/* Flèche pour la taille */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle5)}
                    style={[styles.arrow, { top: item.arrowPositionWaist.top, right: item.arrowPositionWaist.right, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionWaist.top + 10, right: item.arrowPositionWaist.right }]}>
                    {item.arrowTitle5}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionWaist.top + 22, right: item.arrowPositionWaist.right }]}>
                    {item.arrowTranslation5}
                  </Text>
                   {/* Flèche pour la taille */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle6)}
                    style={[styles.arrow, { top: item.arrowPositionNavel.top, left: item.arrowPositionNavel.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionNavel.top + 10, left: item.arrowPositionNavel.left }]}>
                    {item.arrowTitle6}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionNavel.top + 22, left: item.arrowPositionNavel.left }]}>
                    {item.arrowTranslation6}
                  </Text>
                   {/* Flèche pour la hanche */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle7)}
                    style={[styles.arrow, { top: item.arrowPositionHip.top, left: item.arrowPositionHip.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionHip.top + 10, left: item.arrowPositionHip.left }]}>
                    {item.arrowTitle7}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionHip.top + 22, left: item.arrowPositionHip.left }]}>
                    {item.arrowTranslation7}
                  </Text>
                  {/* Flèche pour les mamelons */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle8)}
                    style={[styles.arrow, { top: item.arrowPositionNipple.top, left: item.arrowPositionNipple.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionNipple.top + 10, left: item.arrowPositionNipple.left }]}>
                    {item.arrowTitle8}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionNipple.top + 22, left: item.arrowPositionNipple.left }]}>
                    {item.arrowTranslation8}
                  </Text>
                   {/* Flèche pour les mamelons */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle9)}
                    style={[styles.arrow, { top: item.arrowPositionGenitals.top, left: item.arrowPositionGenitals.left, transform: [{ rotate: '180deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionGenitals.top + 10, left: item.arrowPositionGenitals.left }]}>
                    {item.arrowTitle9}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionGenitals.top + 22, left: item.arrowPositionGenitals.left }]}>
                    {item.arrowTranslation9}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle10)}
                    style={[styles.arrow, { top: item.arrowPositionTigh.top, left: item.arrowPositionTigh.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionTigh.top + 10, left: item.arrowPositionTigh.left }]}>
                    {item.arrowTitle10}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionTigh.top + 22, left: item.arrowPositionTigh.left }]}>
                    {item.arrowTranslation10}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle11)}
                    style={[styles.arrow, { top: item.arrowPositionForearm.top, left: item.arrowPositionForearm.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionForearm.top + 10, left: item.arrowPositionForearm.left }]}>
                    {item.arrowTitle11}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionForearm.top + 22, left: item.arrowPositionForearm.left }]}>
                    {item.arrowTranslation11}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle12)}
                    style={[styles.arrow, { top: item.arrowPositionKnee.top, left: item.arrowPositionKnee.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionKnee.top + 10, left: item.arrowPositionKnee.left }]}>
                    {item.arrowTitle12}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionKnee.top + 22, left: item.arrowPositionKnee.left }]}>
                    {item.arrowTranslation12}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle13)}
                    style={[styles.arrow, { top: item.arrowPositionShin.top, left: item.arrowPositionShin.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionShin.top + 10, left: item.arrowPositionShin.left }]}>
                    {item.arrowTitle13}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionShin.top + 22, left: item.arrowPositionShin.left }]}>
                    {item.arrowTranslation13}
                  </Text>
                   {/* Flèche pour les jambes */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle14)}
                    style={[styles.arrow, { top: item.arrowPositionLeg.top, left: item.arrowPositionLeg.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionLeg.top + 10, left: item.arrowPositionLeg.left }]}>
                    {item.arrowTitle14}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionLeg.top + 22, left: item.arrowPositionLeg.left }]}>
                    {item.arrowTranslation14}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle15)}
                    style={[styles.arrow, { top: item.arrowPositionFoot.top, left: item.arrowPositionFoot.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionFoot.top + 10, left: item.arrowPositionFoot.left }]}>
                    {item.arrowTitle15}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionFoot.top + 22, left: item.arrowPositionFoot.left }]}>
                    {item.arrowTranslation15}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle16)}
                    style={[styles.arrow, { top: item.arrowPositionNape.top, left: item.arrowPositionNape.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionNape.top + 10, left: item.arrowPositionNape.left }]}>
                    {item.arrowTitle16}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionNape.top + 22, left: item.arrowPositionNape.left }]}>
                    {item.arrowTranslation16}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle17)}
                    style={[styles.arrow, { top: item.arrowPositionShoulder.top, left: item.arrowPositionShoulder.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionShoulder.top + 10, left: item.arrowPositionShoulder.left }]}>
                    {item.arrowTitle17}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionShoulder.top + 22, left: item.arrowPositionShoulder.left }]}>
                    {item.arrowTranslation17}
                  </Text>
                  {/* Flèche pour les pieds */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle18)}
                    style={[styles.arrow, { top: item.arrowPositionBack.top, left: item.arrowPositionBack.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionBack.top + 10, left: item.arrowPositionBack.left }]}>
                    {item.arrowTitle18}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionBack.top + 22, left: item.arrowPositionBack.left }]}>
                    {item.arrowTranslation18}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle19)}
                    style={[styles.arrow, { top: item.arrowPositionArmpit.top, left: item.arrowPositionArmpit.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionArmpit.top + 10, left: item.arrowPositionArmpit.left }]}>
                    {item.arrowTitle19}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionArmpit.top + 22, left: item.arrowPositionArmpit.left }]}>
                    {item.arrowTranslation19}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle20)}
                    style={[styles.arrow, { top: item.arrowPositionArm.top, left: item.arrowPositionArm.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionArm.top + 10, left: item.arrowPositionArm.left }]}>
                    {item.arrowTitle20}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionArm.top + 22, left: item.arrowPositionArm.left }]}>
                    {item.arrowTranslation20}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle21)}
                    style={[styles.arrow, { top: item.arrowPositionElbow.top, left: item.arrowPositionElbow.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionElbow.top + 10, left: item.arrowPositionElbow.left }]}>
                    {item.arrowTitle21}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionElbow.top + 22, left: item.arrowPositionElbow.left }]}>
                    {item.arrowTranslation21}
                  </Text>
                    {/* Flèche pour les pieds */}
                    <TouchableOpacity
                    onPress={() => speak(item.arrowTitle22)}
                    style={[styles.arrow, { top: item.arrowPositionWrist.top, left: item.arrowPositionWrist.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionWrist.top + 10, left: item.arrowPositionWrist.left }]}>
                    {item.arrowTitle22}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionWrist.top + 22, left: item.arrowPositionWrist.left }]}>
                    {item.arrowTranslation22}
                  </Text>
                   {/* Flèche pour les mains */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle23)}
                    style={[styles.arrow, { top: item.arrowPositionHand.top, left: item.arrowPositionHand.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionHand.top + 10, left: item.arrowPositionHand.left }]}>
                    {item.arrowTitle23}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionHand.top + 22, left: item.arrowPositionHand.left }]}>
                    {item.arrowTranslation23}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle24)}
                    style={[styles.arrow, { top: item.arrowPositionSmallback.top, left: item.arrowPositionSmallback.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionSmallback.top + 10, left: item.arrowPositionSmallback.left }]}>
                    {item.arrowTitle24}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionSmallback.top + 22, left: item.arrowPositionSmallback.left }]}>
                    {item.arrowTranslation24}
                  </Text>
                  {/* Flèche pour les mains */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle25)}
                    style={[styles.arrow, { top: item.arrowPositionButtock.top, left: item.arrowPositionButtock.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionButtock.top + 10, left: item.arrowPositionButtock.left }]}>
                    {item.arrowTitle25}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionButtock.top + 22, left: item.arrowPositionButtock.left }]}>
                    {item.arrowTranslation25}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle26)}
                    style={[styles.arrow, { top: item.arrowPositionCalf.top, left: item.arrowPositionCalf.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionCalf.top + 10, left: item.arrowPositionCalf.left }]}>
                    {item.arrowTitle26}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionCalf.top + 22, left: item.arrowPositionCalf.left }]}>
                    {item.arrowTranslation26}
                  </Text>
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle27)}
                    style={[styles.arrow, { top: item.arrowPositionAnkle.top, left: item.arrowPositionAnkle.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionAnkle.top + 10, left: item.arrowPositionAnkle.left }]}>
                    {item.arrowTitle27}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionAnkle.top + 22, left: item.arrowPositionAnkle.left }]}>
                    {item.arrowTranslation27}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle28)}
                    style={[styles.arrow, { top: item.arrowPositionHeel.top, left: item.arrowPositionHeel.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionHeel.top + 10, left: item.arrowPositionHeel.left }]}>
                    {item.arrowTitle28}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionHeel.top + 22, left: item.arrowPositionHeel.left }]}>
                    {item.arrowTranslation28}
                  </Text>
                </View>
              </List.Accordion>
            ))}
          </Card.Content>
        </Card>
      ))}

    {people2.map((person) => (
        <Card key={person.id} style={styles.card}>
          <Card.Title
            title={<Text style={{ fontWeight: 'bold' }}>{person.title}</Text>}
            subtitle={person.description}
          />
          <Card.Content>
            {person.content1.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.part}
                left={(props) => <MaterialCommunityIcons {...props} name="account" color="#004e98" size={24} />}
                style={styles.accordion}
              >
                <Text style={styles.subtitle}>{item.description}</Text>

                <View style={styles.imageContainer}>
                  <Image style={styles.image2} source={item.image} />
                  
                  {/* Flèche pour la tête */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle)}
                    style={[styles.arrow, { top: item.arrowPositionHair.top, left: item.arrowPositionHair.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionHair.top + 10, left: item.arrowPositionHair.left }]}>
                    {item.arrowTitle}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionHair.top + 22, left: item.arrowPositionHair.left }]}>
                    {item.arrowTranslation}
                  </Text>

                  {/* Flèche pour le cou */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle1)}
                    style={[styles.arrow, { top: item.arrowPositionSkin.top, left: item.arrowPositionSkin.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionSkin.top + 10, left: item.arrowPositionSkin.left }]}>
                    {item.arrowTitle1}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionSkin.top + 22, left: item.arrowPositionSkin.left }]}>
                    {item.arrowTranslation1}
                  </Text>

                  {/* Flèche pour la poitrine */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle2)}
                    style={[styles.arrow, { top: item.arrowPositionForehead.top, left: item.arrowPositionForehead.left, transform: [{ rotate: '180deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionForehead.top + 10, left: item.arrowPositionForehead.left }]}>
                    {item.arrowTitle2}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionForehead.top + 22, left: item.arrowPositionForehead.left }]}>
                    {item.arrowTranslation2}
                  </Text>
                  {/* Flèche pour la ventre */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle3)}
                    style={[styles.arrow, { top: item.arrowPositionTemple.top, left: item.arrowPositionTemple.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionTemple.top + 10, left: item.arrowPositionTemple.left }]}>
                    {item.arrowTitle3}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionTemple.top + 22, left: item.arrowPositionTemple.left }]}>
                    {item.arrowTranslation3}
                  </Text>
                  {/* Flèche pour les seins */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle4)}
                    style={[styles.arrow, { top: item.arrowPositionEyebrow.top, right: item.arrowPositionEyebrow.right, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionEyebrow.top + 10, right: item.arrowPositionEyebrow.right }]}>
                    {item.arrowTitle4}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionEyebrow.top + 22, right: item.arrowPositionEyebrow.right }]}>
                    {item.arrowTranslation4}
                  </Text>
                   {/* Flèche pour la taille */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle5)}
                    style={[styles.arrow, { top: item.arrowPositionEyelash.top, right: item.arrowPositionEyelash.right, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionEyelash.top + 10, right: item.arrowPositionEyelash.right }]}>
                    {item.arrowTitle5}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionEyelash.top + 22, right: item.arrowPositionEyelash.right }]}>
                    {item.arrowTranslation5}
                  </Text>
                   {/* Flèche pour la taille */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle6)}
                    style={[styles.arrow, { top: item.arrowPositionEye.top, right: item.arrowPositionEye.right, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionEye.top + 10, right: item.arrowPositionEye.right }]}>
                    {item.arrowTitle6}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionEye.top + 22, right: item.arrowPositionEye.right }]}>
                    {item.arrowTranslation6}
                  </Text>
                   {/* Flèche pour la hanche */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle7)}
                    style={[styles.arrow, { top: item.arrowPositionNose.top, right: item.arrowPositionNose.right, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionNose.top + 10, right: item.arrowPositionNose.right }]}>
                    {item.arrowTitle7}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionNose.top + 22, right: item.arrowPositionNose.right }]}>
                    {item.arrowTranslation7}
                  </Text>
                  {/* Flèche pour les mamelons */}
                  <TouchableOpacity
                    onPress={() => speak(item.arrowTitle8)}
                    style={[styles.arrow, { top: item.arrowPositionEar.top, left: item.arrowPositionEar.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionEar.top + 10, left: item.arrowPositionEar.left }]}>
                    {item.arrowTitle8}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionEar.top + 22, left: item.arrowPositionEar.left }]}>
                    {item.arrowTranslation8}
                  </Text>
                   {/* Flèche pour les mamelons */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle9)}
                    style={[styles.arrow, { top: item.arrowPositionNostril.top, left: item.arrowPositionNostril.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionNostril.top + 10, left: item.arrowPositionNostril.left }]}>
                    {item.arrowTitle9}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionNostril.top + 22, left: item.arrowPositionNostril.left }]}>
                    {item.arrowTranslation9}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle10)}
                    style={[styles.arrow, { top: item.arrowPositionMole.top, right: item.arrowPositionMole.right, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionMole.top + 10, right: item.arrowPositionMole.right }]}>
                    {item.arrowTitle10}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionMole.top + 22, right: item.arrowPositionMole.right }]}>
                    {item.arrowTranslation10}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle11)}
                    style={[styles.arrow, { top: item.arrowPositionMouth.top, left: item.arrowPositionMouth.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionMouth.top + 10, left: item.arrowPositionMouth.left }]}>
                    {item.arrowTitle11}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionMouth.top + 22, left: item.arrowPositionMouth.left }]}>
                    {item.arrowTranslation11}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle12)}
                    style={[styles.arrow, { top: item.arrowPositionLip.top, left: item.arrowPositionLip.left, transform: [{ rotate: '30deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionLip.top + 10, left: item.arrowPositionLip.left }]}>
                    {item.arrowTitle12}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionLip.top + 22, left: item.arrowPositionLip.left }]}>
                    {item.arrowTranslation12}
                  </Text>
                   {/* Flèche pour les cuisses */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle13)}
                    style={[styles.arrow, { top: item.arrowPositionCheek.top, left: item.arrowPositionCheek.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionCheek.top + 10, left: item.arrowPositionCheek.left }]}>
                    {item.arrowTitle13}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionCheek.top + 22, left: item.arrowPositionCheek.left }]}>
                    {item.arrowTranslation13}
                  </Text>
                   {/* Flèche pour les jambes */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle14)}
                    style={[styles.arrow, { top: item.arrowPositionJaw.top, left: item.arrowPositionJaw.left, transform: [{ rotate: '60deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionJaw.top + 10, left: item.arrowPositionJaw.left }]}>
                    {item.arrowTitle14}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionJaw.top + 22, left: item.arrowPositionJaw.left }]}>
                    {item.arrowTranslation14}
                  </Text>
                   {/* Flèche pour les pieds */}
                   <TouchableOpacity
                    onPress={() => speak(item.arrowTitle15)}
                    style={[styles.arrow, { top: item.arrowPositionChin.top, left: item.arrowPositionChin.left, transform: [{ rotate: '90deg' }] }]}
                  />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionChin.top + 10, left: item.arrowPositionChin.left }]}>
                    {item.arrowTitle15}
                  </Text>
                  <Text style={[styles.translation, { top: item.arrowPositionChin.top + 22, left: item.arrowPositionChin.left }]}>
                    {item.arrowTranslation15}
                  </Text>                  
                </View>

                <View style={styles.gridContainer}>
                {[
                   { id: 1, source: require('../../../assets/images/wrinckle.jpg'), title: 'Wrinkle', translation: 'Rides' },
                   { id: 2, source: require('../../../assets/images/freckle.jpg'), title: 'Freckle', translation: 'Taches de rousseur' },
                   { id: 3, source: require('../../../assets/images/pore.jpg'), title: 'Pore', translation: 'Le Pore' },
                   { id: 4, source: require('../../../assets/images/dimple.jpg'), title: 'Dimple', translation: 'La fossette' }, 
   
                  ].map((item: {
                     title: ReactNode; id: number; source: any; translation: string 
                  }) => (
                   <View key={item.id} style={styles.imageContainer1}>
                  <Image source={item.source} style={styles.image3} />
                  <Text style={styles.imageTitle}>{item.title}- {item.translation}</Text>
             </View>


                 ))}
              </View>
              <View style={styles.handImageContainer}>
                <Image source={require('../../../assets/images/hand.jpg')} style={styles.handImage} />

                {/* Lettres ou textes positionnés sur la main */}
                <Text style={[styles.label, { top: 120, left: 240 }]}>1. Thumb = Le Pouce</Text>
  <Text style={[styles.label, { top: 20, left: 220 }]}>2. Point finger = L'index</Text>
  <Text style={[styles.label, { top: 40, left: 179 }]}>3. Middle finger = Le majeur</Text>
  <Text style={[styles.label, { top: 60, left: 155 }]}>4. Ring finger =L'annulaire</Text>
  <Text style={[styles.label, { top: 80, left: 125 }]}>5. Little finger = L'auriculaire</Text>
  <Text style={[styles.label, { bottom: 50, left: 160 }]}>a. Palm = Le paume</Text>
</View>

           <View style={styles.imageContainer}>
               {/* Image de poing fermé */}
               <Image source={require('../../../assets/images/fist.jpg')} style={styles.handImage} />

                {/* Tu peux aussi ajouter des labels sur le poing si besoin */}
                <Text style={[styles.label, { top: 150, left: 100 , color:'#333'}]}>Poing fermé = Fist</Text>
             </View>

             <View style={styles.handImageContainer}>
                <Image source={require('../../../assets/images/handface.jpg')} style={styles.handImage} />

                {/* Lettres ou textes positionnés sur la main */}
                <Text style={[styles.label, { top: 25, left: 160,color:'#333' }]}>1.l’ongle/Nail</Text>
                  <Text style={[styles.label, { top: 120, left: 220, color:'#333' }]}>2. la cuticule/Cuticule</Text>
                  <Text style={[styles.label, { bottom: 40, left: 160,color:'#333' }]}>O.le nœud de l’articulation
                   knuckle</Text>
                </View>

                <View style={styles.footImageContainer}>
  <Image source={require('../../../assets/images/barefoot.png')} style={styles.footImage} />

  {/* Orteil */}
  <Text style={[styles.label, { top: 170, left: 100, color: '#333' }]}>
    ⬇️ L’orteil / Toe
  </Text>

  {/* Avant-pied */}
     <Text style={[styles.label, { top: 200, left: 160, color: '#333' }]}>
     ⬆️ L’avant-pied / Ball
      </Text>

  {/* Talon */}
  <Text style={[styles.label, { bottom: 65, left: 240, color: '#333' }]}>
    ⬆️ Le talon / Heel
  </Text>
</View>



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
    color: '#bb3e03',
    textAlign: 'center',
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
  accordion: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginVertical: 8,
  },
  imageContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  image1: {
    width: 250,
    height: 550,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  image2: {
    width: 200,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer1: {
    width: '50%', // Pour s'assurer qu'il y a 2 images par ligne
    marginBottom: 2,
  },
  image3: {
    width: '100%',
    height: 65,
    resizeMode: 'cover',
  },
  footImageContainer: {
    position: 'relative',
    alignItems: 'baseline',
  },
  footImage: {
    width: 220,
    height: 300,
    resizeMode: 'contain',
  },
  arrow: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: '#555',
  },
  arrowTitle: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8da9c4',
    textAlign: 'center',
  },
  translation: {
    position: 'absolute',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },
  imageTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 8,
  },
  handImageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  handImage: {
    width: 200,
    height: 220,
    resizeMode: 'contain',
  },
  label: {
    position: 'absolute',
    color: '#555',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: 'rgba(252, 249, 249, 0.7)', // optionnel pour améliorer la lisibilité
    padding: 2,
    borderRadius: 4,
  },
  textWithButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligne verticalement le texte et le bouton
    justifyContent: 'space-between', // Optionnel, permet d'ajuster l'espacement
    marginTop: 0, // Ajoute de l'espace entre le titre et cette ligne
  },
  audioButton: {
    marginLeft: 14,
    padding: 10,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  
});

export default PeopleScreen;
