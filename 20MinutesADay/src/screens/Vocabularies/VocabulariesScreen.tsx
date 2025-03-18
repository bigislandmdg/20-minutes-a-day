import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

const VocabulariesScreen = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Vocabularies</Text>
      <Text style={styles.content}>
        This screen displays a list of vocabularies.
      </Text>

      {/* Carte 1 */}
      <Card style={styles.card}>
        <Card.Title title="Basic Vocabulary" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Common Words"
              expanded={expanded1}
              onPress={() => setExpanded1(!expanded1)}
              style={styles.accordion}
            >
              <List.Item title="Hello - Bonjour" />
              <List.Item title="Goodbye - Au revoir" />
              <List.Item title="Please - S'il vous plaît" />
              <List.Item title="Thank you - Merci" />
              <List.Item title="Yes - Oui" />
              <List.Item title="No - Non" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Carte 2 */}
      <Card style={styles.card}>
        <Card.Title title="Food Vocabulary" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Common Foods"
              expanded={expanded2}
              onPress={() => setExpanded2(!expanded2)}
              style={styles.accordion}
            >
              <List.Item title="Bread - Pain" />
              <List.Item title="Cheese - Fromage" />
              <List.Item title="Milk - Lait" />
              <List.Item title="Egg - Œuf" />
              <List.Item title="Meat - Viande" />
              <List.Item title="Fish - Poisson" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Carte 3 */}
      <Card style={styles.card}>
        <Card.Title title="Travel Vocabulary" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Travel Phrases"
              expanded={expanded3}
              onPress={() => setExpanded3(!expanded3)}
              style={styles.accordion}
            >
              <List.Item title="Where is the bathroom? - Où sont les toilettes ?" />
              <List.Item title="How much does it cost? - Combien ça coûte ?" />
              <List.Item title="I need help - J'ai besoin d'aide" />
              <List.Item title="I'm lost - Je suis perdu" />
              <List.Item title="Can you help me? - Pouvez-vous m'aider ?" />
              <List.Item title="I don't understand - Je ne comprends pas" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

        {/* Carte 4 */}
      <Card style={styles.card}>
        <Card.Title title="Colors Vocabulary" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Colors"
              expanded={expanded4}
              onPress={() => setExpanded4(!expanded4)}
              style={styles.accordion}
            >
              <List.Item title="Red - Rouge" />
              <List.Item title="Blue - Bleu" />
              <List.Item title="Green - Vert" />
              <List.Item title="Yellow - Jaune" />
              <List.Item title="White - Blanc" />
              <List.Item title="Black - Noir" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

       {/* Carte 5 */}
       <Card style={styles.card}>
        <Card.Title title="Numbers Vocabulary" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Numbers"
              expanded={expanded5}
              onPress={() => setExpanded5(!expanded5)}
              style={styles.accordion}
            >
              <List.Item title="One - Un" />
              <List.Item title="Two - Deux" />
              <List.Item title="Three - Trois" />
              <List.Item title="Four - Quatre" />
              <List.Item title="Five - Cinq" />
              <List.Item title="Six - Six" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Carte 6 */}
      <Card style={styles.card}>
        <Card.Title title="Weather Vocabulary" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Weather Terms"
              expanded={expanded6}
              onPress={() => setExpanded6(!expanded6)}
              style={styles.accordion}
            >
              <List.Item title="Rain - Pluie" />
              <List.Item title="Sun - Soleil" />
              <List.Item title="Wind - Vent" />
              <List.Item title="Snow - Neige" />
              <List.Item title="Cloud - Nuage" />
              <List.Item title="Storm - Orage" />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4, // Ombre sous la carte (pour Android)
    backgroundColor: '#fff',
  },
  accordion: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
});

export default VocabulariesScreen;
