import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text as RNText } from 'react-native';
import { Card, IconButton, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech';


const verbsRules1 = [
  {
    id: 1,
    title: 'Lesson 62: DAILY SPOKEN ENGLISH',
    description: 'SLANGS AND IDIOMS',
    
    content1: [
      {
        verb: "TO BEAT AROUND THE BUSH",
        frenchTranslation: "Tourner autour du pot",
        malagasyTranslation: " Manodikodin-dresaka"
      },
      {
        verb: "TO BE AT A LOSS[las]", 
        frenchTranslation: "Ne savoir que faire",
        malagasyTranslation: "Tsy mahafantatra izay ho atao"
      },
      {
        verb: "FAT CHANCE! ",
        frenchTranslation: " Tu parles!",
        malagasyTranslation: " Raha tsy inona ko!/zany de tsy hisy"
      },
      {
        verb: "TO GROW[grôou]/PLANT",
        frenchTranslation: " Planter/cultiver",
        malagasyTranslation: " Mamboly"
      },
      {
        verb: "GIVE OR TAKE",
        frenchTranslation: "a…près",
        malagasyTranslation: "Eo ho eo"
      },
      {
        verb: "I HAVEN’T THE FOGGIEST[fogiest]",
        frenchTranslation: " Je ne sais pas",
        malagasyTranslation: " Tsy fantatro mihitsy"
      },
      {
        verb: "YOU NEVER KNOW",
        frenchTranslation: "Tu ne sais jamais",
        malagasyTranslation: " Sao de mba…/iza no mahalala"
      },
      {
        verb: "TELL ME ABOUT IT!",
        frenchTranslation: " Tu as raison",
        malagasyTranslation: " Marina izany"
      },
      {
        verb: "FEEL FREE TO CHECK YOUR EMAILS….",
        frenchTranslation: " N’hésitez pas….",
        malagasyTranslation: " Aza mihafaha raha…."
      },
      {
        verb: "FOR HEAVENS SAKE[seik]",
        frenchTranslation: " Bon sang",
        malagasyTranslation: " Andriamanitra ô"
      },
      {
        verb: " IF GOD’S WILL",
        frenchTranslation: " Si Dieu le veut",
        malagasyTranslation: "Raha sitrapon’Atra"
      },
      {
        verb: "BELIEVE IT OR NOT",
        frenchTranslation: " Crois-le si tu veux",
        malagasyTranslation: " Na hino ianao na tsy hino"
      },
      {
        verb: "THERE IS NOTHING TO TOUCH[tatr]",
        frenchTranslation: " Impeccable",
        malagasyTranslation: "Tsiisy hokianina"
      },
      {
        verb: "DON’T BANK ON IT!",
        frenchTranslation: " Ne dépends pas de ça",
        malagasyTranslation: " Aza miantehitra amin’izany"
      },
      {
        verb: "NO BIG DEAL[dil]",
        frenchTranslation: " C’est ne pas important",
        malagasyTranslation: " Tsinotsinona zany!"
      },
      {
        verb: "NO WAY",
        frenchTranslation: " Il n’y a pas question",
        malagasyTranslation: " Tsiisy fika!"
      },
      {
        verb: "NOT ON YOUR LIFE[laif]",
        frenchTranslation: "Jamais de la vie",
        malagasyTranslation: " Tsiisy mihitsy izany"
      },
      {
        verb: "NO BIGGY",
        frenchTranslation: "Pas de problème",
        malagasyTranslation: " Tsiisy olona"
      },
      {
        verb: "IN YOUR DREAMS[drim]",
        frenchTranslation: "Dans vos rêves",
        malagasyTranslation: " Manonofy angamba ianao!"
      },
      {
        verb: "HANG IN THERE/HOLD ON",
        frenchTranslation: " Attendez un instant",
        malagasyTranslation: " Andraso aloha"
      },
      {
        verb: "BITE/HOLD YOUR TONGUE[tange]",
        frenchTranslation: " Taisez-vous",
        malagasyTranslation: "  Mangina ty vava!"
      },
      {
        verb: "TO HAVE HICCUPS[hikaps]",
        frenchTranslation: "Avoir le hoquet",
        malagasyTranslation: " Mitsakoahana"
      },
      {
        verb: "TO GIVE SB THE CREEPS[krips]",
        frenchTranslation: " Donner la chair de poule à qun",
        malagasyTranslation: " Manaitra olona"
      },
      {
        verb: "TO MAKE SB JUMP[djamp]",
        frenchTranslation: " Faire sursauter qun",
        malagasyTranslation: " Manaitra"
      },
      {
        verb: "TO HAVE A BRUSH WITH DEATH[def]",
        frenchTranslation: " Frôler la mort",
        malagasyTranslation: " Saika maty"
      },
      {
        verb: "TO LET SB OFF THE HOOK",
        frenchTranslation: "Libérer qun de sa responsabilité",
        malagasyTranslation: " Mamela olona @ zavatra tsy mety."
      },
      {
        verb: "TO KEEP STH UNDER WRAPS[raps]",
        frenchTranslation: " Garder qch en secret",
        malagasyTranslation: " Tazonina ho tsy ambara-telo"
      },
      {
        verb: "TO HAVE GOOSE BUMPS[bamps]",
        frenchTranslation: " Avoir la chair de poule",
        malagasyTranslation: " Mitsangana ny volonao noho ny"
      },
      {
        verb: "TO BE THE SPITTING OF SB",
        frenchTranslation: " Etre le portrait craché de qn",
        malagasyTranslation: " Mitovy @ olona"
      },
      {
        verb: "TO SLEEP LIKE LOG[lag]",
        frenchTranslation: "Dormir comme une souche",
        malagasyTranslation: " Matory be/matory maty"
      },
      {
        verb: "TO HIT THE SACK",
        frenchTranslation: "Aller dormir",
        malagasyTranslation: " Mandeha matory"
      },
      {
        verb: " TO TIE THE KNOT[nat]/GET HITCHED WITH",
        frenchTranslation: " Se marier",
        malagasyTranslation: " Maka vady"
      },
      {
        verb: "TO POP THE QUESTION[kwestrin]",
        frenchTranslation: " Demander en mariage",
        malagasyTranslation: " Mangata-bady"
      },
      {
        verb: "TO PULL SB’S LEG/TO KID",
        frenchTranslation: " Blaguer/plaisanter",
        malagasyTranslation: " Misangisangy"
      },
      {
        verb: " TO COME CLEAN[kam klin]WITH SB",
        frenchTranslation: " Etre honnête ",
        malagasyTranslation: " Milaza ny marina"
      },
      {
        verb: "TO BE HONEST[anist]/STRAIGHT/FRANK",
        frenchTranslation: " Etre franch(e)",
        malagasyTranslation: " Milaza mahitsy ny am-po"
      },
      {
        verb: "TO HIT ON SB/TO FLIRT[flert]ON",
        frenchTranslation: " Draguer/fleurter",
        malagasyTranslation: " Mikoty"
      },
      {
        verb: "BUZZ OFF/GET LOST/GET OUT OF MY WAY!",
        frenchTranslation: "Fou-moi la paix ! ",
        malagasyTranslation: " Mbay! Mandehana any!"
      },
      {
        verb: "ZIP IT/CUT IT OUT!",
        frenchTranslation: " Ferme-la!",
        malagasyTranslation: " Mangina!"
      },
      {
        verb: "WHO CARES!",
        frenchTranslation: "Je m’en fou",
        malagasyTranslation: " Tsiisy miraharaha an’izany!"
      },
      {
        verb: " TO GIVE STH A WHIRL[wirl]",
        frenchTranslation: " Essayer qlq chose",
        malagasyTranslation: " Manandrana zavatra raha mety"
      },
      {
        verb: "TO BE DISSAPOINTED",
        frenchTranslation: " Etre déçu",
        malagasyTranslation: " Diso fanantenana"
      },
      {
        verb: "TO BE DESPERATE[dispereit]",
        frenchTranslation: " Désespéré",
        malagasyTranslation: " Kivy"
      },
      {
        verb: "TO BE POOPED[poupt]/)DEAD BEAT",
        frenchTranslation: " Etre fatigué",
        malagasyTranslation: " Reraka"
      },
      {
        verb: "TO BE FLABBERGASTED/STAGGERED",
        frenchTranslation: " Etre étonné",
        malagasyTranslation: " Gaga"
      },
      {
        verb: "TO BE ON THE GO/SWAMPED[soampt]",
        frenchTranslation: " Etre occupé",
        malagasyTranslation: " Tery/tsy manapotoana"
      },
      {
        verb: "TO PLAY HARD TO GET",
        frenchTranslation: " Jouer les insaisissable",
        malagasyTranslation: " Mamilafila"
      },
      {
        verb: "KNOCK[nak] ON WOOD!",
        frenchTranslation: "Touchons du bois!",
        malagasyTranslation: " Sanatria"
      },
      {
        verb: "TO BE DOLLED UP[daldap]/TO BE OVERDRESSED",
        frenchTranslation: " Etre bien habillé",
        malagasyTranslation: " Mitafy tsara"
      },
      {
        verb: "TO MAKE CRACKS ABOUT SB/STH",
        frenchTranslation: " Critiquer",
        malagasyTranslation: " Miresaka momba/mitsikera"
      },
      {
        verb: "TO PASS AWAY/BITE THE DUST[dast]",
        frenchTranslation: " Mourrir",
        malagasyTranslation: " Maty"
      },
      {
        verb: "EASY DOES IT![izi daz it]",
        frenchTranslation: " Du calme ! ",
        malagasyTranslation: " Moramora!"
      },
      {
        verb: "TO GET THE HANG OF STH",
        frenchTranslation: " Apprendre qlq chose",
        malagasyTranslation: " Mianatra manao zavatra"
      },
     
    ],
    

  }
];


const verbsRules2 = [
  {
    id: 1,
    title: 'Lesson 63: DAILY SPOKEN ENGLISH',
    description: 'IRREGULARS VERBS',
    
    content1: [
      {
        infinitive: "to abide[ebaid]",
        past: " abode",
        pastParticiple: " abode",
        frenchTranslation: "demeurer",
        malagasyTranslation: "Mipetraka"
      },
      {
        infinitive: "to arise[araiz]",
        past: " arose",
        pastParticiple: " arisen",
        frenchTranslation: " s'élever, survenir ",
        malagasyTranslation: " Mitsangana/miakatra"
      },
      {
        infinitive: "to awake[eweik]",
        past: " awoke",
        pastParticiple: " awoken",
        frenchTranslation: " (se) réveiller ",
        malagasyTranslation: " Mifoha(torimaso)"
      },
      
     
    ],
    

  }
];


const VerbsScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Fonction pour lire le texte avec expo-speech
  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      pitch: 1.0, // Tonalité de la voix (1 = normal)
      rate: 0.9, // Vitesse de lecture (1 = normal)
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Verbs</Text>
      <Text style={styles.content}>
        This screen displays various verbs and their conjugations to help you with your language learning.
      </Text>

      {verbsRules1.map((rule) => (
        <Card key={rule.id} style={styles.card}>
          <Card.Title
            title={<Text style={{ fontWeight: 'bold' }}>{rule.title}</Text>}
            subtitle={rule.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => speak(rule.title)}
              />
            )}
          />
          <Card.Content>
            <List.Section>
               <List.Accordion
                    title="SLANGS AND IDIOMS"
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
                                               {rule.content1.map((item, index) => (
                                                 <View key={index} style={styles.tableRow}>
                                                   <RNText style={styles.tableCell}>{item.verb}</RNText>
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

      {verbsRules2.map((rule) => (
        <Card key={rule.id} style={styles.card}>
          <Card.Title
            title={<Text style={{ fontWeight: 'bold' }}>{rule.title}</Text>}
            subtitle={rule.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => speak(rule.title)}
              />
            )}
          />
          <Card.Content>
            <List.Section>
               <List.Accordion
                    title="IRREGULARS VERBS"
                    left={(props) => (
                      <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                        )}
                    >
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                          <RNText style={styles.tableHeader}>INFINITIVE</RNText>
                          <RNText style={styles.tableHeader}>PAST</RNText>
                          <RNText style={styles.tableHeader}>PAST PARTICIPLE</RNText>
                            <RNText style={styles.tableHeader}>TRANSLATION</RNText>
                                                 <RNText style={styles.tableHeader}>DIKATENY</RNText>
                                               </View>
                                               {rule.content1.map((item, index) => (
                                                 <View key={index} style={styles.tableRow}>
                                                   <RNText style={styles.tableCell}>{item.infinitive}</RNText>
                                                   <RNText style={styles.tableCell}>{item.past}</RNText>
                                                   <RNText style={styles.tableCell}>{item.pastParticiple}</RNText>
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
    textAlign: 'center',
    color: '#bb3e03',
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
  pronunciation: {
    fontStyle: 'italic',
    color: '#8da9c4',
  },
  translation: {
    fontStyle: 'italic',
    color: '#3a86ff',
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
    color: '#333',
    fontSize: 15,
  },
});

export default VerbsScreen;
