import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text as RNText } from 'react-native';
import { Card, List, Text, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const debateTopics1 = [
  {
    id: 1,
    topic: 'Lesson 38: DEBATE - LIFE CONDITION',
    description: ' SOCIAL—WHAT DO YOU THINK ABOUT LIFE IN TANA? ',
    arguments1: [
      {
        debate: "To be expensive[ixpensiv] ",
        frenchTranslation: "Cher ",
        malagasyTranslation: " Lafo"
      },
      {
        debate: "To be cheap[trip]",
        frenchTranslation: "Bon marché /pas cher ",
        malagasyTranslation: " Mora"
      },
      {
        debate: "The cost of living[kastov]  ",
        frenchTranslation: "Coût de la vie  ",
        malagasyTranslation: " Ny vidim-piainana"
      },
      {
        debate: "The things’ price[de tins]  ",
        frenchTranslation: "Prix des choses  ",
        malagasyTranslation: " Ny vidin-javatra "
      },
      {
        debate: "To increase/rise/go up[inkriz]",
        frenchTranslation: "Augmenter ",
        malagasyTranslation: " Miakatra"
      },
      {
        debate: "To decrease/drop off/decline[dikriz] ",
        frenchTranslation: "Diminuer",
        malagasyTranslation: " Midina"
      },
      {
        debate: "To afford/have the means to[eford]  ",
        frenchTranslation: "Avoir le moyen de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "To stand/bear/tolerate[steind/ber/tolereit]  ",
        frenchTranslation: "Supporter ",
        malagasyTranslation: " Mahazaka"
      },
      {
        debate: "To make a good living  ",
        frenchTranslation: "Gagner sa vie ",
        malagasyTranslation: " Mandeha tsara ny atao"
      },
      {
        debate: "To struggle (to)/fight[stragel/fait]",
        frenchTranslation: "Lutter contre/avoir du mal à ",
        malagasyTranslation: " Miady mafy @"
      },
      {
        debate: "To suffer from [safer] ",
        frenchTranslation: " Souffrir (de)/subir ",
        malagasyTranslation: " Mijaly/mizaka "
      },
      {
        debate: "To face/confront[feis/kanfrant]",
        frenchTranslation: "Faire face à/confronter  ",
        malagasyTranslation: " Miatrika ny zava-misy "
      },
      {
        debate: "To get rid of sb/to avoid +ing ",
        frenchTranslation: "Se débarrasser/éviter de  ",
        malagasyTranslation: " Miala/ialana"
      },
      {
        debate: "unemployed/jobless people [animploid] ",
        frenchTranslation: "Des gens chômeurs  ",
        malagasyTranslation: " Olona tsy miasa"
      },
      {
        debate: "Unemployment rate",
        frenchTranslation: "Taux de chômage",
        malagasyTranslation: " Tahan’ny tsy fanan’(asa)"
      },
      {
        debate: "To found /create/establish[faond]",
        frenchTranslation: "Fonder/créer/établir  ",
        malagasyTranslation: " Manangana/mamorona"
      },
      {
        debate: "To send sb to school ",
        frenchTranslation: "Envoyer qlq1 à l’école",
        malagasyTranslation: " Mandefa olona hianatra "
      },
      {
        debate: "To educate/teach/instruct[ejoukeit]",
        frenchTranslation: "Éduquer/instruire",
        malagasyTranslation: " Mampianatra "
      },
      {
        debate: "The purchase power[pertreis paower]  ",
        frenchTranslation: "Pouvoir d’achat ",
        malagasyTranslation: " Fahefana mividy"
      },
      {
        debate: "To complain/moan about [kamplein]",
        frenchTranslation: "Se plaindre ",
        malagasyTranslation: " Mitaraina "
      },
      {
        debate: "In terms of/concerning about",
        frenchTranslation: "Pour ce qui est de/ au niveau de ",
        malagasyTranslation: " Raha mikasika manokana"
      },
      {
        debate: "The advantage of+ving[di advantidz] ",
        frenchTranslation: "L’avantage de ",
        malagasyTranslation: " Ny tombotsoan’ny "
      },
      {
        debate: "The disadvantage/drawback of[disadva]  ",
        frenchTranslation: "L’inconvénient/désavantage de ",
        malagasyTranslation: " Ny lafi-ratsin’ny "
      },
      {
        debate: "To rob/burglarize/burgle[rab/berglaraiz] ",
        frenchTranslation: "Dévaliser/dérober  ",
        malagasyTranslation: " Mandrava/mandroba"
      },
      {
        debate: "To shoplift/snatch sth[shoplift]  ",
        frenchTranslation: "Voler à l’etalage ",
        malagasyTranslation: " Mangalatra zvt @ boutik"
      },
      {
        debate: "Pickpocket ",
        frenchTranslation: "pickpocket ",
        malagasyTranslation: " Mpangaro-posy"
      },
      {
        debate: "To(be) pollute(d)/to be dirty [pôlout]  ",
        frenchTranslation: "Polluer(é)/sale",
        malagasyTranslation: " Mandoto/Maloto"
      },
      {
        debate: "To litter/throw away sth  ",
        frenchTranslation: "Laisser de détritus/ Jeter ",
        malagasyTranslation: " Manipitsipy zvt/mandoto"
      },
      {
        debate: "To be difficult/hard/tough to  ",
        frenchTranslation: "Être Difficile de ",
        malagasyTranslation: " Sarotra ny "
      },
      {
        debate: "To apply for a job  ",
        frenchTranslation: "Demander d’emploie  ",
        malagasyTranslation: " Manao fangatahana asa"
      },
      {
        debate: "To find/get a job",
        frenchTranslation: "Trouver un boulôt  ",
        malagasyTranslation: " Mahita asa"
      },
      {
        debate: "To look for/search/seek for sth ",
        frenchTranslation: "Chercher qlq chose",
        malagasyTranslation: " Mitady zvt"
      },
      {
        debate: "To humble oneself/to be humble[hambol]",
        frenchTranslation: "S’humilier/être humble ",
        malagasyTranslation: " Manetri-tena "
      },
      {
        debate: "To console/comfort sb[kensol/kamfor] ",
        frenchTranslation: "Consoler/réconforter   ",
        malagasyTranslation: " Mampionona"
      },
      {
        debate: "To be poor/ A poverty ",
        frenchTranslation: "Etre pauvre/ Pauvreté",
        malagasyTranslation: " Mahantra/ Fahantrana"
      },
      {
        debate: "Homeless ",
        frenchTranslation: "Sans abri",
        malagasyTranslation: " Tsy manan-kialofana "
      },
      {
        debate: "To overcome/defeat sb ",
        frenchTranslation: "Vaincre ",
        malagasyTranslation: " Mandresy"
      },
      {
        debate: "To pass through a problem",
        frenchTranslation: "Avoir un problem",
        malagasyTranslation: " Mandalo olana"
      },
      {
        debate: "To  be in trouble/in a hot water[trabel]",
        frenchTranslation: "Avoir des ennuis ",
        malagasyTranslation: " Mandalo olana"
      },
      {
        debate: "To resolve a problem[rizalv] ",
        frenchTranslation: "Resoudre un problem  ",
        malagasyTranslation: " Mamaha olona"
      },
      {
        debate: "To encourage [inkaridze] ",
        frenchTranslation: "Encourager  ",
        malagasyTranslation: " Mamporisika"
      },
      {
        debate: "To reach (my goal) ",
        frenchTranslation: "Atteindre mon but",
        malagasyTranslation: " Mahatratra ny tanjona"
      },
      {
        debate: "To work hard ",
        frenchTranslation: "Travailler dûr   ",
        malagasyTranslation: " Miasa mafy "
      },
      {
        debate: "To fail[feil]",
        frenchTranslation: "Echouer",
        malagasyTranslation: " Tsy tafita/ Resy "
      },
      {
        debate: "To succeed[saksid] ",
        frenchTranslation: " Réussir",
        malagasyTranslation: " Tafita "
      },
      {
        debate: "To discourage[diskaridze] ",
        frenchTranslation: " Décourager ",
        malagasyTranslation: " Manakivy "
      },
      {
        debate: "To endure[indior] ",
        frenchTranslation: " Sûbir",
        malagasyTranslation: " Miaritra/miatrika "
      },
      {
        debate: "To worsen/to get worse and worse ",
        frenchTranslation: " Empirer ",
        malagasyTranslation: " Miharatsy "
      },
      {
        debate: "To survive[servaiv] ",
        frenchTranslation: " Survivre",
        malagasyTranslation: "Miaina "
      },
      {
        debate: "To scrimp (and save) ",
        frenchTranslation: " Lésiner",
        malagasyTranslation: " Mitsitsy"
      },
      {
        debate: "To save",
        frenchTranslation: " Epargner ",
        malagasyTranslation: "   Mitahiry "
      },
    ],
  },
 
];

const DebatesScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // ✅ Fonction pour lire le texte avec Expo Speech
  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      pitch: 1.0,
      rate: 1.0,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Debates</Text>
      <Text style={styles.content}>
        This screen displays various topics for debates.
      </Text>

      {debateTopics1.map((debate) => (
              <Card key={debate.id} style={styles.card}>
                <Card.Title
                  title={<Text style={{ fontWeight: 'bold' }}>{debate.topic}</Text>}
                  subtitle={debate.description}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="volume-high"
                      onPress={() => speak(debate.topic)}
                    />
                  )}
                />
                <Card.Content>
                  <List.Section>
                     <List.Accordion
                          title="SOCIAL—WHAT DO YOU THINK ABOUT LIFE IN TANA? "
                          left={(props) => (
                            <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                          >
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                                       <RNText style={styles.tableHeader}>Malagasy</RNText>
                                                     </View>
                                                     {debate.arguments1.map((item, index) => (
                                                       <View key={index} style={styles.tableRow}>
                                                         <RNText style={styles.tableCell}>{item.debate}</RNText>
                                                         <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                                                         <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                              </View>
                            ))}
                          </View>
                      </List.Accordion>
                  </List.Section>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3a86ff',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
  },
  accordion: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  table: {
    padding: 8,
    marginTop: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#8da9c4',
    flex: 1,

  },
  tableCell: {
    flex: 1,
    color: '#000',
    fontSize: 15,
  },
});

export default DebatesScreen;
