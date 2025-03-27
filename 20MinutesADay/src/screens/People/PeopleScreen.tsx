import React from 'react';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Card, Text, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icône personnalisée pour chaque section

// Importation de l'image locale
const headImage = require('../../../assets/images/humanbody.png'); // Exemple d'image pour le corps humain
const faceImage = require('../../../assets/images/womanface.jpg'); // Exemple d'image pour le corps humain

const people1 = [
  {
    id: 1,
    title: 'Lesson 53: BODY',
    description: 'PEOPLE — LES GENS',
    content1: [
      {
        part: 'Human Body', // Partie du corps humain
        description: 'The head contains the brain, eyes, ears, mouth, etc.',
        image: headImage, // Image spécifique pour cette partie du corps
        arrowPositionHead: { top: 10, left: 100 }, // Position de la flèche pour la tête
        arrowTitle: 'Head', // Titre pour la flèche "Head"
        arrowPositionNeck: { top: 55, left: 255 }, // Position de la flèche pour le cou (à ajuster selon la position souhaitée)
        arrowTitle1: 'Neck', // Titre pour la flèche "Neck"
        arrowPositionChest: { top: 75, right: 65 }, // Position de la flèche pour le cou (à ajuster selon la position souhaitée)
        arrowTitle2: 'Chest', // Titre pour la flèche "Neck"
      },
    ],
  },
];

const people2 = [
  {
    id: 2,
    title: 'Lesson 54: FACE',
    description: 'PEOPLE — LES GENS',
    content1: [
      {
        part: 'FACE', // Partie du corps humain
        description: 'The head contains the brain, eyes, ears, mouth, etc.',
        image: faceImage, // Image spécifique pour cette partie du corps
        arrowPosition: { bottom: 40, left: 45 }, // Position de la flèche pour le visage
      },
    ],
  },
];

const PeopleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>People</Text>
      <Text style={styles.content}>
        This screen displays information about different parts of the human body.
      </Text>

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
                left={(props) => <MaterialCommunityIcons {...props} name="human" />}
                style={styles.accordion}
              >
                <Text style={styles.subtitle}>{item.description}</Text>

                {/* Vue avec la flèche superposée sur l'image */}
                <View style={styles.imageContainer}>
                  <Image style={styles.image1} source={item.image} />
                  {/* Flèche indiquant la tête */}
                  <View style={[styles.arrow, { top: item.arrowPositionHead.top, left: item.arrowPositionHead.left }]} />
                  <Text style={[styles.arrowTitle, { top: item.arrowPositionHead.top + 10, left: item.arrowPositionHead.left }]}>{item.arrowTitle}</Text> {/* Affiche le titre "Head" */}

                  {/* Flèche indiquant le cou (flèche vers la droite) */}
                  <View style={[styles.arrow, { top: item.arrowPositionNeck.top, left: item.arrowPositionNeck.left, transform: [{ rotate: '90deg' }] }]} /> {/* Flèche dirigée vers la droite */}
                  <Text style={[styles.arrowTitle1, { top: item.arrowPositionNeck.top + 10, left: item.arrowPositionNeck.left }]}>{item.arrowTitle1}</Text> {/* Affiche le titre "Neck" */}
                  
                  {/* Flèche indiquant le cou (flèche vers la droite) */}
                  <View style={[styles.arrow, { top: item.arrowPositionChest.top, right: item.arrowPositionChest.right, transform: [{ rotate: '30deg' }] }]} /> {/* Flèche dirigée vers la droite */}
                  <Text style={[styles.arrowTitle2, { top: item.arrowPositionChest.top + 10, right: item.arrowPositionChest.right }]}>{item.arrowTitle2}</Text> {/* Affiche le titre "Neck" */}
                
                     
                   

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
                left={(props) => <MaterialCommunityIcons {...props} name="emoticon-happy-outline" />}
                style={styles.accordion}
              >
                <Text style={styles.subtitle}>{item.description}</Text>

                {/* Vue avec la flèche superposée sur l'image */}
                <View style={styles.imageContainer}>
                  <Image style={styles.image2} source={item.image} />
                  {/* Flèche indiquant la tête */}
                  <View style={[styles.arrow, { bottom: item.arrowPosition.bottom, left: item.arrowPosition.left }]} />
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
    fontSize: 24,
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
    position: 'relative', // Pour positionner la flèche sur l'image
    alignSelf: 'center',
  },
  image1: {
    width: 250,
    height: 500,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  image2: {
    width: 180,
    height: 180,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
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
    borderTopColor: 'red', // Couleur de la flèche
  },
  arrowTitle: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8da9c4',
    textAlign: 'center',
  },
  arrowTitle1: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8da9c4',
    textAlign: 'center',
  },
  arrowTitle2: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8da9c4',
    textAlign: 'center',
  },
});

export default PeopleScreen;
