import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text as RNText } from 'react-native';
import { Card, IconButton, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech'; // Import the expo-speech library

const vocabsRules1 = [
  {
    id: 1,
    title: 'Lesson 43: DAILY ENGLISH WORDS',
    description: 'VOCABS',
    
    content1: [
      {
        vocabulary: "TO GET IN [gerin]",
        frenchTranslation: "Entrer",
        malagasyTranslation: "Miditra"
      },
      {
        vocabulary: "TO GET ON [geron]", 
        frenchTranslation: "Monter",
        malagasyTranslation: "Miakatra"
      },
      {
        vocabulary: "TO GET OFF [gerof]",
        frenchTranslation: " Descendre",
        malagasyTranslation: "Midina"
      },
      {
        vocabulary: "TO RIDE[raid]",
        frenchTranslation: "Monter a cheval/bicyclette",
        malagasyTranslation: "Mitaingina"
      },
      {
        vocabulary: " TO PULL[poul]",
        frenchTranslation: "Tirer",
        malagasyTranslation: "Mitarika"
      },
      {
        vocabulary: "TO DRIVE[draiv]",
        frenchTranslation: "Conduire",
        malagasyTranslation: "Mitondra (fiara)"
      },
      {
        vocabulary: "TO START[sta:t]",
        frenchTranslation: "Demarrer",
        malagasyTranslation: " Mamelona (fiara)"
      },
      {
        vocabulary: "TO LEARN[ler n]",
        frenchTranslation: "Apprendre",
        malagasyTranslation: "Mianatra"
      },
      {
        vocabulary: "TO STUDY[stadi]",
        frenchTranslation: "Etudier[Universite/Lycee]",
        malagasyTranslation: "Mianatra @ Oniverisitea/Lisea"
      },
      {
        vocabulary: "TO REVISE MY LESSON",
        frenchTranslation: "Reviser",
        malagasyTranslation: "Mamerin-desona"
      },
      {
        vocabulary: "TO SPEND TIME TO",
        frenchTranslation: " Passer du temps",
        malagasyTranslation: "Mandany fotoana"
      },
      {
        vocabulary: "TO WORK HARD",
        frenchTranslation: "Travailler dûr",
        malagasyTranslation: "Miezaka/miasa mafy"
      },
      {
        vocabulary: "TO SUCCEED[saksid]",
        frenchTranslation: "Réussir",
        malagasyTranslation: "Tafita"
      },
      {
        vocabulary: "TO FAIL [feil]",
        frenchTranslation: "Râter/Echouer",
        malagasyTranslation: "Tsy tafita/"
      },
      {
        vocabulary: "TO CLOSE[kloouz]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona/ manidy"
      },
      {
        vocabulary: "TO SHUT[shat]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona/manidy"
      },
      {
        vocabulary: "TO OPEN",
        frenchTranslation: "Ouvrir",
        malagasyTranslation: "Mamoha"
      },
      {
        vocabulary: "TO PREPARE[pripar]",
        frenchTranslation: "Préparer",
        malagasyTranslation: "Manomana"
      },
      {
        vocabulary: "TO SHAKE [sheik]",
        frenchTranslation: "Secouer",
        malagasyTranslation: "Mikotrana/Manotrana"
      },
      {
        vocabulary: "TO SET THE TABLE",
        frenchTranslation: " Mettre la table",
        malagasyTranslation: "Manao couvert"
      },
      {
        vocabulary: "TO CLEAR THE TABLE[klir de tebel]",
        frenchTranslation: " Débarrasser la table",
        malagasyTranslation: "  Mangoro vilia"
      },
      {
        vocabulary: "TO GO TO BED",
        frenchTranslation: "Se coucher",
        malagasyTranslation: "Mandeha matory"
      },
      {
        vocabulary: "TO SLEEP[slip]",
        frenchTranslation: " Dormir",
        malagasyTranslation: "Matory"
      },
      {
        vocabulary: "TO SLEEP IN",
        frenchTranslation: "Faire la grace matiné",
        malagasyTranslation: "Tara vao mifoha"
      },
      {
        vocabulary: "TO WAKE UP[weikap]",
        frenchTranslation: "Se réveiller",
        malagasyTranslation: "Mahatsiaro(tory)"
      },
      {
        vocabulary: "TO LONG TO",
        frenchTranslation: "Vouloir/avoir très envie de",
        malagasyTranslation: "Te- na Maniry"
      },
      {
        vocabulary: "TO INTEND TO",
        frenchTranslation: "Avoir l’intention de",
        malagasyTranslation: "Mieritreritra ny"
      },
      {
        vocabulary: "TO TEND TO",
        frenchTranslation: "Avoir tendance de",
        malagasyTranslation: "Mirona/mankany@"
      },
      {
        vocabulary: "TO FEEL LIKE TO+V.ING[fil laik]",
        frenchTranslation: "Avoir envie de",
        malagasyTranslation: "Te-na Maniry"
      },
      {
        vocabulary: "TO DESIRE TO[dizair]",
        frenchTranslation: "Désirer",
        malagasyTranslation: "Maniry"
      },
      {
        vocabulary: "I WOULD LIKE TO+V.INF",
        frenchTranslation: "Je voudrais/j’aimerais de",
        malagasyTranslation: "Maniry"
      },
      {
        vocabulary: "YOU HAD/WOULD RATHER/BETTER+V.INF",
        frenchTranslation: "Avoir intérêt à/Il vaut mieux/ferais mieux",
        malagasyTranslation: "Aleo…"
      },
      {
        vocabulary: "TO DETEST TO+V.INF[ditest]",
        frenchTranslation: "Détester",
        malagasyTranslation: "Mankahala"
      },
      {
        vocabulary: " TO HATE+V.ING[heit]",
        frenchTranslation: "Haîr",
        malagasyTranslation: "Mankahala"
      },
      {
        vocabulary: "TO EXCHANGE[ixtreinj]",
        frenchTranslation: "Echanger",
        malagasyTranslation: "Mifanakalo"
      },
      {
        vocabulary: "TO BUY[bai]",
        frenchTranslation: "Acheter",
        malagasyTranslation: "Mividy"
      },
      {
        vocabulary: "TO SELL",
        frenchTranslation: "Vendre",
        malagasyTranslation: "Mivarotra"
      },
      {
        vocabulary: "TO FIND[faind]",
        frenchTranslation: "Trouver",
        malagasyTranslation: "Mahita"
      },
      {
        vocabulary: "TO LOOK FOR",
        frenchTranslation: "Chercher",
        malagasyTranslation: "Mitady"
      },
      {
        vocabulary: "TO BRING",
        frenchTranslation: "Apporter",
        malagasyTranslation: "Mitondra"
      },
      {
        vocabulary: "TO TAKE[teik]",
        frenchTranslation: "Prendre",
        malagasyTranslation: "Maka/mandray"
      },
      {
        vocabulary: "TO HOLD",
        frenchTranslation: "Tenir",
        malagasyTranslation: "Mitazona"
      },
      {
        vocabulary: "TO GRAB",
        frenchTranslation: "Saisir",
        malagasyTranslation: "Mandray"
      },
      {
        vocabulary: "TO RELEASE[rilis]",
        frenchTranslation: "Relâcher",
        malagasyTranslation: "Mamotsitra"
      },
      {
        vocabulary: "TO DROP[drap]",
        frenchTranslation: "Laisser tomber",
        malagasyTranslation: "Mandatsaka"
      },
      {
        vocabulary: "TO LEAK[lik]",
        frenchTranslation: "Fuir",
        malagasyTranslation: "Mitete"
      },
      {
        vocabulary: "TO BREAK[brek]",
        frenchTranslation: "Casser",
        malagasyTranslation: "Mamaky"
      },
      {
        vocabulary: "TO STICK STH",
        frenchTranslation: "Coller",
        malagasyTranslation: "Mametaka @ dity"
      },
      {
        vocabulary: "TO ATTEMPT SB(TO+V.INF)",
        frenchTranslation: " Tenter de",
        malagasyTranslation: "Maka fanahy olona"
      },
      {
        vocabulary: "TO BE IN DEBT[det]",
        frenchTranslation: "Etre endetté",
        malagasyTranslation: "Be trosa"
      },
      {
        vocabulary: "TO OWE[ôou]SB",
        frenchTranslation: "Devoir",
        malagasyTranslation: "Ananan’olona vola"
      },
      
    ],
    

  }
];


const vocabsRules2 = [
  {
    id: 1,
    title: 'Lesson 45: DAILY EXPRESSIONS',
    description: 'VOCABS',
    
    content1: [
      {
        vocabulary: "TO GET IN [gerin]",
        frenchTranslation: "Entrer",
        malagasyTranslation: "Miditra"
      },
      {
        vocabulary: "TO GET ON [geron]", 
        frenchTranslation: "Monter",
        malagasyTranslation: "Miakatra"
      },
      {
        vocabulary: "TO GET OFF [gerof]",
        frenchTranslation: " Descendre",
        malagasyTranslation: "Midina"
      },
      {
        vocabulary: "TO RIDE[raid]",
        frenchTranslation: "Monter a cheval/bicyclette",
        malagasyTranslation: "Mitaingina"
      },
      {
        vocabulary: " TO PULL[poul]",
        frenchTranslation: "Tirer",
        malagasyTranslation: "Mitarika"
      },
      {
        vocabulary: "TO DRIVE[draiv]",
        frenchTranslation: "Conduire",
        malagasyTranslation: "Mitondra (fiara)"
      },
      {
        vocabulary: "TO START[sta:t]",
        frenchTranslation: "Demarrer",
        malagasyTranslation: " Mamelona (fiara)"
      },
      {
        vocabulary: "TO LEARN[ler n]",
        frenchTranslation: "Apprendre",
        malagasyTranslation: "Mianatra"
      },
      {
        vocabulary: "TO STUDY[stadi]",
        frenchTranslation: "Etudier[Universite/Lycee]",
        malagasyTranslation: "Mianatra @ Oniverisitea/Lisea"
      },
      {
        vocabulary: "TO REVISE MY LESSON",
        frenchTranslation: "Reviser",
        malagasyTranslation: "Mamerin-desona"
      },
      {
        vocabulary: "TO SPEND TIME TO",
        frenchTranslation: " Passer du temps",
        malagasyTranslation: "Mandany fotoana"
      },
      {
        vocabulary: "TO WORK HARD",
        frenchTranslation: "Travailler dûr",
        malagasyTranslation: "Miezaka/miasa mafy"
      },
      {
        vocabulary: "TO SUCCEED[saksid]",
        frenchTranslation: "Réussir",
        malagasyTranslation: "Tafita"
      },
      {
        vocabulary: "TO FAIL [feil]",
        frenchTranslation: "Râter/Echouer",
        malagasyTranslation: "Tsy tafita/"
      },
      {
        vocabulary: "TO CLOSE[kloouz]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona/ manidy"
      },
      {
        vocabulary: "TO SHUT[shat]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona/manidy"
      },
      {
        vocabulary: "TO OPEN",
        frenchTranslation: "Ouvrir",
        malagasyTranslation: "Mamoha"
      },
      {
        vocabulary: "TO PREPARE[pripar]",
        frenchTranslation: "Préparer",
        malagasyTranslation: "Manomana"
      },
      {
        vocabulary: "TO SHAKE [sheik]",
        frenchTranslation: "Secouer",
        malagasyTranslation: "Mikotrana/Manotrana"
      },
      {
        vocabulary: "TO SET THE TABLE",
        frenchTranslation: " Mettre la table",
        malagasyTranslation: "Manao couvert"
      },
      {
        vocabulary: "TO CLEAR THE TABLE[klir de tebel]",
        frenchTranslation: " Débarrasser la table",
        malagasyTranslation: "  Mangoro vilia"
      },
      {
        vocabulary: "TO GO TO BED",
        frenchTranslation: "Se coucher",
        malagasyTranslation: "Mandeha matory"
      },
      {
        vocabulary: "TO SLEEP[slip]",
        frenchTranslation: " Dormir",
        malagasyTranslation: "Matory"
      },
      {
        vocabulary: "TO SLEEP IN",
        frenchTranslation: "Faire la grace matiné",
        malagasyTranslation: "Tara vao mifoha"
      },
      {
        vocabulary: "TO WAKE UP[weikap]",
        frenchTranslation: "Se réveiller",
        malagasyTranslation: "Mahatsiaro(tory)"
      },
      {
        vocabulary: "TO LONG TO",
        frenchTranslation: "Vouloir/avoir très envie de",
        malagasyTranslation: "Te- na Maniry"
      },
      {
        vocabulary: "TO INTEND TO",
        frenchTranslation: "Avoir l’intention de",
        malagasyTranslation: "Mieritreritra ny"
      },
      {
        vocabulary: "TO TEND TO",
        frenchTranslation: "Avoir tendance de",
        malagasyTranslation: "Mirona/mankany@"
      },
      {
        vocabulary: "TO FEEL LIKE TO+V.ING[fil laik]",
        frenchTranslation: "Avoir envie de",
        malagasyTranslation: "Te-na Maniry"
      },
      {
        vocabulary: "TO DESIRE TO[dizair]",
        frenchTranslation: "Désirer",
        malagasyTranslation: "Maniry"
      },
      {
        vocabulary: "I WOULD LIKE TO+V.INF",
        frenchTranslation: "Je voudrais/j’aimerais de",
        malagasyTranslation: "Maniry"
      },
      {
        vocabulary: "YOU HAD/WOULD RATHER/BETTER+V.INF",
        frenchTranslation: "Avoir intérêt à/Il vaut mieux/ferais mieux",
        malagasyTranslation: "Aleo…"
      },
      {
        vocabulary: "TO DETEST TO+V.INF[ditest]",
        frenchTranslation: "Détester",
        malagasyTranslation: "Mankahala"
      },
      {
        vocabulary: " TO HATE+V.ING[heit]",
        frenchTranslation: "Haîr",
        malagasyTranslation: "Mankahala"
      },
      {
        vocabulary: "TO EXCHANGE[ixtreinj]",
        frenchTranslation: "Echanger",
        malagasyTranslation: "Mifanakalo"
      },
      {
        vocabulary: "TO BUY[bai]",
        frenchTranslation: "Acheter",
        malagasyTranslation: "Mividy"
      },
      {
        vocabulary: "TO SELL",
        frenchTranslation: "Vendre",
        malagasyTranslation: "Mivarotra"
      },
      {
        vocabulary: "TO FIND[faind]",
        frenchTranslation: "Trouver",
        malagasyTranslation: "Mahita"
      },
      {
        vocabulary: "TO LOOK FOR",
        frenchTranslation: "Chercher",
        malagasyTranslation: "Mitady"
      },
      {
        vocabulary: "TO BRING",
        frenchTranslation: "Apporter",
        malagasyTranslation: "Mitondra"
      },
      {
        vocabulary: "TO TAKE[teik]",
        frenchTranslation: "Prendre",
        malagasyTranslation: "Maka/mandray"
      },
      {
        vocabulary: "TO HOLD",
        frenchTranslation: "Tenir",
        malagasyTranslation: "Mitazona"
      },
      {
        vocabulary: "TO GRAB",
        frenchTranslation: "Saisir",
        malagasyTranslation: "Mandray"
      },
      {
        vocabulary: "TO RELEASE[rilis]",
        frenchTranslation: "Relâcher",
        malagasyTranslation: "Mamotsitra"
      },
      {
        vocabulary: "TO DROP[drap]",
        frenchTranslation: "Laisser tomber",
        malagasyTranslation: "Mandatsaka"
      },
      {
        vocabulary: "TO LEAK[lik]",
        frenchTranslation: "Fuir",
        malagasyTranslation: "Mitete"
      },
      {
        vocabulary: "TO BREAK[brek]",
        frenchTranslation: "Casser",
        malagasyTranslation: "Mamaky"
      },
      {
        vocabulary: "TO STICK STH",
        frenchTranslation: "Coller",
        malagasyTranslation: "Mametaka @ dity"
      },
      {
        vocabulary: "TO ATTEMPT SB(TO+V.INF)",
        frenchTranslation: " Tenter de",
        malagasyTranslation: "Maka fanahy olona"
      },
      {
        vocabulary: "TO BE IN DEBT[det]",
        frenchTranslation: "Etre endetté",
        malagasyTranslation: "Be trosa"
      },
      {
        vocabulary: "TO OWE[ôou]SB",
        frenchTranslation: "Devoir",
        malagasyTranslation: "Ananan’olona vola"
      },
      
    ],
    

  }
];

const vocabsRules3 = [
  {
    id: 1,
    title: 'Lesson 62: DAILY SPOKEN ENGLISH',
    description: 'SLANG AND IDIOMS',
    
    content1: [
      {
        vocabulary: "TO GET IN [gerin]",
        frenchTranslation: "Entrer",
        malagasyTranslation: "Miditra"
      },
      {
        vocabulary: "TO GET ON [geron]", 
        frenchTranslation: "Monter",
        malagasyTranslation: "Miakatra"
      },
      {
        vocabulary: "TO GET OFF [gerof]",
        frenchTranslation: " Descendre",
        malagasyTranslation: "Midina"
      },
      {
        vocabulary: "TO RIDE[raid]",
        frenchTranslation: "Monter a cheval/bicyclette",
        malagasyTranslation: "Mitaingina"
      },
      {
        vocabulary: " TO PULL[poul]",
        frenchTranslation: "Tirer",
        malagasyTranslation: "Mitarika"
      },
      {
        vocabulary: "TO DRIVE[draiv]",
        frenchTranslation: "Conduire",
        malagasyTranslation: "Mitondra (fiara)"
      },
      {
        vocabulary: "TO START[sta:t]",
        frenchTranslation: "Demarrer",
        malagasyTranslation: " Mamelona (fiara)"
      },
      {
        vocabulary: "TO LEARN[ler n]",
        frenchTranslation: "Apprendre",
        malagasyTranslation: "Mianatra"
      },
      {
        vocabulary: "TO STUDY[stadi]",
        frenchTranslation: "Etudier[Universite/Lycee]",
        malagasyTranslation: "Mianatra @ Oniverisitea/Lisea"
      },
      {
        vocabulary: "TO REVISE MY LESSON",
        frenchTranslation: "Reviser",
        malagasyTranslation: "Mamerin-desona"
      },
      {
        vocabulary: "TO SPEND TIME TO",
        frenchTranslation: " Passer du temps",
        malagasyTranslation: "Mandany fotoana"
      },
      {
        vocabulary: "TO WORK HARD",
        frenchTranslation: "Travailler dûr",
        malagasyTranslation: "Miezaka/miasa mafy"
      },
      {
        vocabulary: "TO SUCCEED[saksid]",
        frenchTranslation: "Réussir",
        malagasyTranslation: "Tafita"
      },
      {
        vocabulary: "TO FAIL [feil]",
        frenchTranslation: "Râter/Echouer",
        malagasyTranslation: "Tsy tafita/"
      },
      {
        vocabulary: "TO CLOSE[kloouz]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona/ manidy"
      },
      {
        vocabulary: "TO SHUT[shat]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona/manidy"
      },
      {
        vocabulary: "TO OPEN",
        frenchTranslation: "Ouvrir",
        malagasyTranslation: "Mamoha"
      },
      {
        vocabulary: "TO PREPARE[pripar]",
        frenchTranslation: "Préparer",
        malagasyTranslation: "Manomana"
      },
      {
        vocabulary: "TO SHAKE [sheik]",
        frenchTranslation: "Secouer",
        malagasyTranslation: "Mikotrana/Manotrana"
      },
      {
        vocabulary: "TO SET THE TABLE",
        frenchTranslation: " Mettre la table",
        malagasyTranslation: "Manao couvert"
      },
      {
        vocabulary: "TO CLEAR THE TABLE[klir de tebel]",
        frenchTranslation: " Débarrasser la table",
        malagasyTranslation: "  Mangoro vilia"
      },
      {
        vocabulary: "TO GO TO BED",
        frenchTranslation: "Se coucher",
        malagasyTranslation: "Mandeha matory"
      },
      {
        vocabulary: "TO SLEEP[slip]",
        frenchTranslation: " Dormir",
        malagasyTranslation: "Matory"
      },
      {
        vocabulary: "TO SLEEP IN",
        frenchTranslation: "Faire la grace matiné",
        malagasyTranslation: "Tara vao mifoha"
      },
      {
        vocabulary: "TO WAKE UP[weikap]",
        frenchTranslation: "Se réveiller",
        malagasyTranslation: "Mahatsiaro(tory)"
      },
      {
        vocabulary: "TO LONG TO",
        frenchTranslation: "Vouloir/avoir très envie de",
        malagasyTranslation: "Te- na Maniry"
      },
      {
        vocabulary: "TO INTEND TO",
        frenchTranslation: "Avoir l’intention de",
        malagasyTranslation: "Mieritreritra ny"
      },
      {
        vocabulary: "TO TEND TO",
        frenchTranslation: "Avoir tendance de",
        malagasyTranslation: "Mirona/mankany@"
      },
      {
        vocabulary: "TO FEEL LIKE TO+V.ING[fil laik]",
        frenchTranslation: "Avoir envie de",
        malagasyTranslation: "Te-na Maniry"
      },
      {
        vocabulary: "TO DESIRE TO[dizair]",
        frenchTranslation: "Désirer",
        malagasyTranslation: "Maniry"
      },
      {
        vocabulary: "I WOULD LIKE TO+V.INF",
        frenchTranslation: "Je voudrais/j’aimerais de",
        malagasyTranslation: "Maniry"
      },
      {
        vocabulary: "YOU HAD/WOULD RATHER/BETTER+V.INF",
        frenchTranslation: "Avoir intérêt à/Il vaut mieux/ferais mieux",
        malagasyTranslation: "Aleo…"
      },
      {
        vocabulary: "TO DETEST TO+V.INF[ditest]",
        frenchTranslation: "Détester",
        malagasyTranslation: "Mankahala"
      },
      {
        vocabulary: " TO HATE+V.ING[heit]",
        frenchTranslation: "Haîr",
        malagasyTranslation: "Mankahala"
      },
      {
        vocabulary: "TO EXCHANGE[ixtreinj]",
        frenchTranslation: "Echanger",
        malagasyTranslation: "Mifanakalo"
      },
      {
        vocabulary: "TO BUY[bai]",
        frenchTranslation: "Acheter",
        malagasyTranslation: "Mividy"
      },
      {
        vocabulary: "TO SELL",
        frenchTranslation: "Vendre",
        malagasyTranslation: "Mivarotra"
      },
      {
        vocabulary: "TO FIND[faind]",
        frenchTranslation: "Trouver",
        malagasyTranslation: "Mahita"
      },
      {
        vocabulary: "TO LOOK FOR",
        frenchTranslation: "Chercher",
        malagasyTranslation: "Mitady"
      },
      {
        vocabulary: "TO BRING",
        frenchTranslation: "Apporter",
        malagasyTranslation: "Mitondra"
      },
      {
        vocabulary: "TO TAKE[teik]",
        frenchTranslation: "Prendre",
        malagasyTranslation: "Maka/mandray"
      },
      {
        vocabulary: "TO HOLD",
        frenchTranslation: "Tenir",
        malagasyTranslation: "Mitazona"
      },
      {
        vocabulary: "TO GRAB",
        frenchTranslation: "Saisir",
        malagasyTranslation: "Mandray"
      },
      {
        vocabulary: "TO RELEASE[rilis]",
        frenchTranslation: "Relâcher",
        malagasyTranslation: "Mamotsitra"
      },
      {
        vocabulary: "TO DROP[drap]",
        frenchTranslation: "Laisser tomber",
        malagasyTranslation: "Mandatsaka"
      },
      {
        vocabulary: "TO LEAK[lik]",
        frenchTranslation: "Fuir",
        malagasyTranslation: "Mitete"
      },
      {
        vocabulary: "TO BREAK[brek]",
        frenchTranslation: "Casser",
        malagasyTranslation: "Mamaky"
      },
      {
        vocabulary: "TO STICK STH",
        frenchTranslation: "Coller",
        malagasyTranslation: "Mametaka @ dity"
      },
      {
        vocabulary: "TO ATTEMPT SB(TO+V.INF)",
        frenchTranslation: " Tenter de",
        malagasyTranslation: "Maka fanahy olona"
      },
      {
        vocabulary: "TO BE IN DEBT[det]",
        frenchTranslation: "Etre endetté",
        malagasyTranslation: "Be trosa"
      },
      {
        vocabulary: "TO OWE[ôou]SB",
        frenchTranslation: "Devoir",
        malagasyTranslation: "Ananan’olona vola"
      },
      
    ],
    

  }
];

const VocabulariesScreen = () => {
  const [expanded, setExpanded] = useState(false);
  
   const speak = (text: string) => {
       Speech.speak(text, {
         language: 'en',
         pitch: 1.0,
         rate: 1.0,
          });
        };
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Vocabularies</Text>
      <Text style={styles.content}>
        This screen displays a list of vocabularies.
      </Text>

      {vocabsRules1.map((rule) => (
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
                              title="VOCABULARIES IN USE"
                              left={(props) => (
                                <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                            >
                              <View style={styles.table}>
                                <View style={styles.tableRow}>
                                  <RNText style={styles.tableHeader}>Vocabulary</RNText>
                                  <RNText style={styles.tableHeader}>French Translation</RNText>
                                  <RNText style={styles.tableHeader}>Malagasy Translation</RNText>
                                </View>
                                {rule.content1.map((item, index) => (
                                  <View key={index} style={styles.tableRow}>
                                    <RNText style={styles.tableCell}>{item.vocabulary}</RNText>
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

      {vocabsRules2.map((rule) => (
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
                              title="VOCABULARIES IN USE"
                              left={(props) => (
                                <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                            >
                              <View style={styles.table}>
                                <View style={styles.tableRow}>
                                  <RNText style={styles.tableHeader}>Vocabulary</RNText>
                                  <RNText style={styles.tableHeader}>French Translation</RNText>
                                  <RNText style={styles.tableHeader}>Malagasy Translation</RNText>
                                </View>
                                {rule.content1.map((item, index) => (
                                  <View key={index} style={styles.tableRow}>
                                    <RNText style={styles.tableCell}>{item.vocabulary}</RNText>
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

{vocabsRules3.map((rule) => (
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
                              title="VOCABULARIES IN USE"
                              left={(props) => (
                                <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                            >
                              <View style={styles.table}>
                                <View style={styles.tableRow}>
                                  <RNText style={styles.tableHeader}>Vocabulary</RNText>
                                  <RNText style={styles.tableHeader}>French Translation</RNText>
                                  <RNText style={styles.tableHeader}>Malagasy Translation</RNText>
                                </View>
                                {rule.content1.map((item, index) => (
                                  <View key={index} style={styles.tableRow}>
                                    <RNText style={styles.tableCell}>{item.vocabulary}</RNText>
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
    elevation: 4, // Ombre sous la carte (pour Android)
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
    padding: 10,
    marginTop: 6,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#8da9c4',
    flex: 1,
  },
  tableCell: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
});

export default VocabulariesScreen;
