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
        vocabulary: "TO PULL OVER [poul over]",
        frenchTranslation: "Se garer",
        malagasyTranslation: "Miantsona/mijanona"
      },
      {
        vocabulary: "TO TURN OVER [ternover]/ROLL OVER", 
        frenchTranslation: "Se retourner",
        malagasyTranslation: "Mivadika(fiara)"
      },
      {
        vocabulary: "TO BACK UP [backap]",
        frenchTranslation: " Reculer/faire marche arrière",
        malagasyTranslation: "Mihemotra"
      },
      {
        vocabulary: "TO BRAKE [breik]",
        frenchTranslation: "Freiner",
        malagasyTranslation: "Mitazona frein"
      },
      {
        vocabulary: "TO WIND UP THE WINDOW",
        frenchTranslation: "Monter la fenêtre d’une voiture",
        malagasyTranslation: "Mampiakatra vitra na fiara"
      },
      {
        vocabulary: "TO SWIRVE[soerv]",
        frenchTranslation: "Donner un coup de volant",
        malagasyTranslation: "Miala olona iray @ fiara"
      },
      {
        vocabulary: "TO SKID",
        frenchTranslation: "Déraper/patiner",
        malagasyTranslation: " Mamelona fiara"
      },
      {
        vocabulary: "TO PUT ON YOUR SEAT BELT",
        frenchTranslation: "Mettre la ceinture de securité",
        malagasyTranslation: " Manao fehikibo fiarovana"
      },
      {
        vocabulary: "TO DODGE[daj] ",
        frenchTranslation: "Esquiver",
        malagasyTranslation: " Miala @ zavatra iray."
      },
      {
        vocabulary: " TO DUCK[dak]",
        frenchTranslation: "Eviter",
        malagasyTranslation: " Miala @ zavatra iray."
      },
      {
        vocabulary: "TO HANG[hegn]",
        frenchTranslation: " Suspendre/pendre",
        malagasyTranslation: "Manantona"
      },
      {
        vocabulary: "TO HOOK[houk]",
        frenchTranslation: "Pendre/accrocher",
        malagasyTranslation: "Manantona"
      },
      {
        vocabulary: "TO CLEAN[klin]",
        frenchTranslation: "Nettoyer",
        malagasyTranslation: "Manadio"
      },
      {
        vocabulary: "TO ERASE[ireiz]",
        frenchTranslation: "Effacer",
        malagasyTranslation: "Mamafa"
      },
      {
        vocabulary: "TO WIPE[waip]",
        frenchTranslation: "Fermer",
        malagasyTranslation: "Manakatona"
      },
      {
        vocabulary: "TO SWEEP[swip]",
        frenchTranslation: " Ballayer",
        malagasyTranslation: " Mamafa (famafa)"
      },
      {
        vocabulary: "TO SCRATCH[skratr]",
        frenchTranslation: "Gratter",
        malagasyTranslation: " Mikika/mihaotra"
      },
      {
        vocabulary: " TO STRETCH[stretr]",
        frenchTranslation: "S’étirer",
        malagasyTranslation: "Miezatra"
      },
      {
        vocabulary: "TO HAVE HICCUPS [hikaps]",
        frenchTranslation: " Avoir le hoquet",
        malagasyTranslation: " Mitsakoahana"
      },
      {
        vocabulary: "TO DROOL[droul]",
        frenchTranslation: " Baver",
        malagasyTranslation: " Mirarakivy"
      },
      {
        vocabulary: " TO POUT [paot]",
        frenchTranslation: " Bouder",
        malagasyTranslation: "  "
      },
      {
        vocabulary: "TO IRON[airon]",
        frenchTranslation: " Repasser",
        malagasyTranslation: " Mipasoka"
      },
      {
        vocabulary: "TO PLUG IN#TO UNPLUG [plag]",
        frenchTranslation: " Brancher/débrancher",
        malagasyTranslation: " Mametaka/manatsoaka"
      },
      {
        vocabulary: " TO SWITCH ON/OFF",
        frenchTranslation: " Allumer/etteindre",
        malagasyTranslation: " Mamelona /mamono"
      },
      {
        vocabulary: "TO PUT FIRE ON STH/MAKE FIRE",
        frenchTranslation: " Mettre du feu/Faire du feu",
        malagasyTranslation: " Mandoro/Mamelona"
      },
      {
        vocabulary: "TO PUT THE FIRE OFF",
        frenchTranslation: " Etteindre le feux",
        malagasyTranslation: " Mamono afo"
      },
      {
        vocabulary: " TO KEEP SB/STH FROM+V.ING",
        frenchTranslation: " Empêcher qlq chose/un de",
        malagasyTranslation: " Mieritreritra ny"
      },
      {
        vocabulary: " TO STOP+V.ING",
        frenchTranslation: " Arrêter",
        malagasyTranslation: " Mijanona"
      },
      {
        vocabulary: " TO LIGHT[lait]",
        frenchTranslation: " Allumer(allumette)",
        malagasyTranslation: " Mamelona(afokasika)"
      },
      {
        vocabulary: " TO ANNOY/IRRITATE SB",
        frenchTranslation: " Irriter/énever",
        malagasyTranslation: " Mampahasosotra"
      },
      {
        vocabulary: " TO INTERFERE[interfier]",
        frenchTranslation: "  Se mêler",
        malagasyTranslation: " Miditra @ aferan’olona"
      },
      {
        vocabulary: " TO MESS UP[mesap]",
        frenchTranslation: " Faire une erreur",
        malagasyTranslation: " Manao hadisoana"
      },
      {
        vocabulary: " TO MAKE A MISTAKE[misteik]",
        frenchTranslation: " Faire une erreur",
        malagasyTranslation: " Mankahala"
      },
      {
        vocabulary: "TO MAKE AN EFFORT",
        frenchTranslation: " Faire un effort",
        malagasyTranslation: " Miezaka"
      },
      {
        vocabulary: " TO EXPLAIN[iksiplein]STH TO SB",
        frenchTranslation: " Expliquer",
        malagasyTranslation: " Manazava"
      },
      {
        vocabulary: " TO TAKE A SPEECH/FLOOR",
        frenchTranslation: " Prendre la parole",
        malagasyTranslation: " Mandray fitenena"
      },
      {
        vocabulary: " TO STAY UP [stei ap]",
        frenchTranslation: " Veiller",
        malagasyTranslation: " Miary tory"
      },
      {
        vocabulary: " TO CATCH [catr]",
        frenchTranslation: " Attraper",
        malagasyTranslation: " Misambotra"
      },
      {
        vocabulary: " TO TRAP [trep]",
        frenchTranslation: " Piéger",
        malagasyTranslation: "Mamandrika"
      },
      {
        vocabulary: "TO DESPAIR[dispeir]",
        frenchTranslation: "Désespérer",
        malagasyTranslation: " Kivy"
      },
      {
        vocabulary: "TO HAVE A REMORSE[rimors]",
        frenchTranslation: "Avoir des remords",
        malagasyTranslation: " Manenina"
      },
      {
        vocabulary: " TO REGRET[regret]",
        frenchTranslation: " Regretter",
        malagasyTranslation: " Manenina"
      },
      {
        vocabulary: "TO HOPE[hôup]",
        frenchTranslation: " Espérer",
        malagasyTranslation: " Manantena"
      },
      {
        vocabulary: " TO EXPECT[ixpekt]",
        frenchTranslation: " Attendre/Espérer",
        malagasyTranslation: " Miandry/manantena"
      },
      {
        vocabulary: " TO SWINDLE SB[swindel]",
        frenchTranslation: " Arnaquer",
        malagasyTranslation: " Misoloky"
      },
      {
        vocabulary: "TO SNATCH[snatr]",
        frenchTranslation: "Arracher",
        malagasyTranslation: " Misitona"
      },
      {
        vocabulary: "TO MAKE SB JUMP[jamp]",
        frenchTranslation: " Faire sûrsauter",
        malagasyTranslation: " Manaitra"
      },
      {
        vocabulary: "TO EAT OUT[it aot]",
        frenchTranslation: " Manger déhors",
        malagasyTranslation: " Mihinana"
      },
      {
        vocabulary: " TO WEAR[wer]",
        frenchTranslation: " Porter/Mettre",
        malagasyTranslation: " Mitafy"
      },
      {
        vocabulary: "TO MAKE SB ANGRY/CRY(+Adj/Verb)",
        frenchTranslation: " mettre qn en colére /",
        malagasyTranslation: " Mampitomany/mampa…"
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
        vocabulary: "TO BEAT AROUND THE BUSH",
        frenchTranslation: "Tourner autour du pot",
        malagasyTranslation: " Manodikodin-dresaka"
      },
      {
        vocabulary: "TO BE AT A LOSS[las]", 
        frenchTranslation: "Ne savoir que faire",
        malagasyTranslation: "Tsy mahafantatra izay ho atao"
      },
      {
        vocabulary: "FAT CHANCE! ",
        frenchTranslation: " Tu parles!",
        malagasyTranslation: " Raha tsy inona ko!/zany de tsy hisy"
      },
      {
        vocabulary: "TO GROW[grôou]/PLANT",
        frenchTranslation: " Planter/cultiver",
        malagasyTranslation: " Mamboly"
      },
      {
        vocabulary: "GIVE OR TAKE",
        frenchTranslation: "a…près",
        malagasyTranslation: "Eo ho eo"
      },
      {
        vocabulary: "I HAVEN’T THE FOGGIEST[fogiest]",
        frenchTranslation: " Je ne sais pas",
        malagasyTranslation: " Tsy fantatro mihitsy"
      },
      {
        vocabulary: "YOU NEVER KNOW",
        frenchTranslation: "Tu ne sais jamais",
        malagasyTranslation: " Sao de mba…/iza no mahalala"
      },
      {
        vocabulary: "TELL ME ABOUT IT!",
        frenchTranslation: " Tu as raison",
        malagasyTranslation: " Marina izany"
      },
      {
        vocabulary: "FEEL FREE TO CHECK YOUR EMAILS….",
        frenchTranslation: " N’hésitez pas….",
        malagasyTranslation: " Aza mihafaha raha…."
      },
      {
        vocabulary: "FOR HEAVENS SAKE[seik]",
        frenchTranslation: " Bon sang",
        malagasyTranslation: " Andriamanitra ô"
      },
      {
        vocabulary: " IF GOD’S WILL",
        frenchTranslation: " Si Dieu le veut",
        malagasyTranslation: "Raha sitrapon’Atra"
      },
      {
        vocabulary: "BELIEVE IT OR NOT",
        frenchTranslation: " Crois-le si tu veux",
        malagasyTranslation: " Na hino ianao na tsy hino"
      },
      {
        vocabulary: "THERE IS NOTHING TO TOUCH[tatr]",
        frenchTranslation: " Impeccable",
        malagasyTranslation: "Tsiisy hokianina"
      },
      {
        vocabulary: "DON’T BANK ON IT!",
        frenchTranslation: " Ne dépends pas de ça",
        malagasyTranslation: " Aza miantehitra amin’izany"
      },
      {
        vocabulary: "NO BIG DEAL[dil]",
        frenchTranslation: " C’est ne pas important",
        malagasyTranslation: " Tsinotsinona zany!"
      },
      {
        vocabulary: "NO WAY",
        frenchTranslation: " Il n’y a pas question",
        malagasyTranslation: " Tsiisy fika!"
      },
      {
        vocabulary: "NOT ON YOUR LIFE[laif]",
        frenchTranslation: "Jamais de la vie",
        malagasyTranslation: " Tsiisy mihitsy izany"
      },
      {
        vocabulary: "NO BIGGY",
        frenchTranslation: "Pas de problème",
        malagasyTranslation: " Tsiisy olona"
      },
      {
        vocabulary: "IN YOUR DREAMS[drim]",
        frenchTranslation: "Dans vos rêves",
        malagasyTranslation: " Manonofy angamba ianao!"
      },
      {
        vocabulary: "HANG IN THERE/HOLD ON",
        frenchTranslation: " Attendez un instant",
        malagasyTranslation: " Andraso aloha"
      },
      {
        vocabulary: "BITE/HOLD YOUR TONGUE[tange]",
        frenchTranslation: " Taisez-vous",
        malagasyTranslation: "  Mangina ty vava!"
      },
      {
        vocabulary: "TO HAVE HICCUPS[hikaps]",
        frenchTranslation: "Avoir le hoquet",
        malagasyTranslation: " Mitsakoahana"
      },
      {
        vocabulary: "TO GIVE SB THE CREEPS[krips]",
        frenchTranslation: " Donner la chair de poule à qun",
        malagasyTranslation: " Manaitra olona"
      },
      {
        vocabulary: "TO MAKE SB JUMP[djamp]",
        frenchTranslation: " Faire sursauter qun",
        malagasyTranslation: " Manaitra"
      },
      {
        vocabulary: "TO HAVE A BRUSH WITH DEATH[def]",
        frenchTranslation: " Frôler la mort",
        malagasyTranslation: " Saika maty"
      },
      {
        vocabulary: "TO LET SB OFF THE HOOK",
        frenchTranslation: "Libérer qun de sa responsabilité",
        malagasyTranslation: " Mamela olona @ zavatra tsy mety."
      },
      {
        vocabulary: "TO KEEP STH UNDER WRAPS[raps]",
        frenchTranslation: " Garder qch en secret",
        malagasyTranslation: " Tazonina ho tsy ambara-telo"
      },
      {
        vocabulary: "TO HAVE GOOSE BUMPS[bamps]",
        frenchTranslation: " Avoir la chair de poule",
        malagasyTranslation: " Mitsangana ny volonao noho ny"
      },
      {
        vocabulary: "TO BE THE SPITTING OF SB",
        frenchTranslation: " Etre le portrait craché de qn",
        malagasyTranslation: " Mitovy @ olona"
      },
      {
        vocabulary: "TO SLEEP LIKE LOG[lag]",
        frenchTranslation: "Dormir comme une souche",
        malagasyTranslation: " Matory be/matory maty"
      },
      {
        vocabulary: "TO HIT THE SACK",
        frenchTranslation: "Aller dormir",
        malagasyTranslation: " Mandeha matory"
      },
      {
        vocabulary: " TO TIE THE KNOT[nat]/GET HITCHED WITH",
        frenchTranslation: " Se marier",
        malagasyTranslation: " Maka vady"
      },
      {
        vocabulary: "TO POP THE QUESTION[kwestrin]",
        frenchTranslation: " Demander en mariage",
        malagasyTranslation: " Mangata-bady"
      },
      {
        vocabulary: "TO PULL SB’S LEG/TO KID",
        frenchTranslation: " Blaguer/plaisanter",
        malagasyTranslation: " Misangisangy"
      },
      {
        vocabulary: " TO COME CLEAN[kam klin]WITH SB",
        frenchTranslation: " Etre honnête ",
        malagasyTranslation: " Milaza ny marina"
      },
      {
        vocabulary: "TO BE HONEST[anist]/STRAIGHT/FRANK",
        frenchTranslation: " Etre franch(e)",
        malagasyTranslation: " Milaza mahitsy ny am-po"
      },
      {
        vocabulary: "TO HIT ON SB/TO FLIRT[flert]ON",
        frenchTranslation: " Draguer/fleurter",
        malagasyTranslation: " Mikoty"
      },
      {
        vocabulary: "BUZZ OFF/GET LOST/GET OUT OF MY WAY!",
        frenchTranslation: "Fou-moi la paix ! ",
        malagasyTranslation: " Mbay! Mandehana any!"
      },
      {
        vocabulary: "ZIP IT/CUT IT OUT!",
        frenchTranslation: " Ferme-la!",
        malagasyTranslation: " Mangina!"
      },
      {
        vocabulary: "WHO CARES!",
        frenchTranslation: "Je m’en fou",
        malagasyTranslation: " Tsiisy miraharaha an’izany!"
      },
      {
        vocabulary: " TO GIVE STH A WHIRL[wirl]",
        frenchTranslation: " Essayer qlq chose",
        malagasyTranslation: " Manandrana zavatra raha mety"
      },
      {
        vocabulary: "TO BE DISSAPOINTED",
        frenchTranslation: " Etre déçu",
        malagasyTranslation: " Diso fanantenana"
      },
      {
        vocabulary: "TO BE DESPERATE[dispereit]",
        frenchTranslation: " Désespéré",
        malagasyTranslation: " Kivy"
      },
      {
        vocabulary: "TO BE POOPED[poupt]/)DEAD BEAT",
        frenchTranslation: " Etre fatigué",
        malagasyTranslation: " Reraka"
      },
      {
        vocabulary: "TO BE FLABBERGASTED/STAGGERED",
        frenchTranslation: " Etre étonné",
        malagasyTranslation: " Gaga"
      },
      {
        vocabulary: "TO BE ON THE GO/SWAMPED[soampt]",
        frenchTranslation: " Etre occupé",
        malagasyTranslation: " Tery/tsy manapotoana"
      },
      {
        vocabulary: "TO PLAY HARD TO GET",
        frenchTranslation: " Jouer les insaisissable",
        malagasyTranslation: " Mamilafila"
      },
      {
        vocabulary: "KNOCK[nak] ON WOOD!",
        frenchTranslation: "Touchons du bois!",
        malagasyTranslation: " Sanatria"
      },
      {
        vocabulary: "TO BE DOLLED UP[daldap]/TO BE OVERDRESSED",
        frenchTranslation: " Etre bien habillé",
        malagasyTranslation: " Mitafy tsara"
      },
      {
        vocabulary: "TO MAKE CRACKS ABOUT SB/STH",
        frenchTranslation: " Critiquer",
        malagasyTranslation: " Miresaka momba/mitsikera"
      },
      {
        vocabulary: "TO PASS AWAY/BITE THE DUST[dast]",
        frenchTranslation: " Mourrir",
        malagasyTranslation: " Maty"
      },
      {
        vocabulary: "EASY DOES IT![izi daz it]",
        frenchTranslation: " Du calme ! ",
        malagasyTranslation: " Moramora!"
      },
      {
        vocabulary: "TO GET THE HANG OF STH",
        frenchTranslation: " Apprendre qlq chose",
        malagasyTranslation: " Mianatra manao zavatra"
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
                                  <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                  <RNText style={styles.tableHeader}>Malagasy</RNText>
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
                                  <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                  <RNText style={styles.tableHeader}>Malagasy</RNText>
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
                                  <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                  <RNText style={styles.tableHeader}>Malagasy</RNText>
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
