import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Text as RNText, TouchableOpacity } from 'react-native';
import { Card, IconButton, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';


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
      {
        infinitive: "to bear[ber]",
        past: " bore",
        pastParticiple: " borne",
        frenchTranslation: " supporter ",
        malagasyTranslation: " Miaritra"
      },
       {
        infinitive: "to beat[bit]",
        past: " beat",
        pastParticiple: " beaten",
        frenchTranslation: " battre ",
        malagasyTranslation: " Miady/mamely"
      },
       {
        infinitive: "to become[bikam]",
        past: " became",
        pastParticiple: " become",
        frenchTranslation: " devenir ",
        malagasyTranslation: " Lasa (tsara/ratsy)"
      },
       {
        infinitive: "to begin[bigin]",
        past: " began",
        pastParticiple: " begun",
        frenchTranslation: " commencer ",
        malagasyTranslation: " Manomboka"
      },
       {
        infinitive: "to bend",
        past: " bent",
        pastParticiple: " bent",
        frenchTranslation: " (se) courber ",
        malagasyTranslation: " Mamaingoka zvt"
      },
       {
        infinitive: "to bet",
        past: " bet",
        pastParticiple: " bet",
        frenchTranslation: " parier ",
        malagasyTranslation: " Miloka"
      },
       {
        infinitive: "to bid",
        past: " bid",
        pastParticiple: " bid",
        frenchTranslation: " offrir (un prix) ",
        malagasyTranslation: " Manome prix"
      },
       {
        infinitive: "to bind[baind]",
        past: " bound",
        pastParticiple: " bound",
        frenchTranslation: " lier, relier ",
        malagasyTranslation: " Mampifandray"
      },
       {
        infinitive: "to bite[bait]",
        past: " bit",
        pastParticiple: " bitten",
        frenchTranslation: " mordre ",
        malagasyTranslation: " Manaikitra"
      },
       {
        infinitive: "to bleed[blid]",
        past: " bled",
        pastParticiple: " bled",
        frenchTranslation: " saigner ",
        malagasyTranslation: " Maratra"
      },
       {
        infinitive: "to blow[blôou]",
        past: " blew",
        pastParticiple: " blown",
        frenchTranslation: " souffler ",
        malagasyTranslation: " Mitsoka"
      },
       {
        infinitive: "to break[brek]",
        past: " broke",
        pastParticiple: " broken",
        frenchTranslation: " casser ",
        malagasyTranslation: " Mamaky(vera)"
      },
       {
        infinitive: "to breed[brid]",
        past: " bred",
        pastParticiple: " bred",
        frenchTranslation: " élever (du bétail) ",
        malagasyTranslation: " Miompy"
      },
       {
        infinitive: "to bring",
        past: " brought",
        pastParticiple: " brought",
        frenchTranslation: " apporter ",
        malagasyTranslation: " Mitondra"
      },
       {
        infinitive: "to build[bild]",
        past: " built",
        pastParticiple: " built",
        frenchTranslation: " construire ",
        malagasyTranslation: " Manamboatra trano"
      },
       {
        infinitive: "to burn[bern]",
        past: " burnt",
        pastParticiple: " burnt",
        frenchTranslation: " brûler ",
        malagasyTranslation: " Mandoro"
      },
       {
        infinitive: "to burst[berst]",
        past: " burst",
        pastParticiple: " burst",
        frenchTranslation: " éclater ",
        malagasyTranslation: " Manapoaka"
      },
       {
        infinitive: "to buy[bai]",
        past: " bought",
        pastParticiple: " bought",
        frenchTranslation: " acheter ",
        malagasyTranslation: " Mividy"
      },
       {
        infinitive: "to cast",
        past: " cast",
        pastParticiple: " cast",
        frenchTranslation: " jeter, distribuer les rôles de ",
        malagasyTranslation: " Manipy/mitoraka"
      },
       {
        infinitive: "to catch[katr]",
        past: " caught",
        pastParticiple: " caught",
        frenchTranslation: " attraper  ",
        malagasyTranslation: " Misambotra"
      },
       {
        infinitive: "to choose[trouz]",
        past: " chose",
        pastParticiple: " chosen",
        frenchTranslation: " choisir ",
        malagasyTranslation: " Mifidy"
      },
       {
        infinitive: "to cling",
        past: " clung",
        pastParticiple: " clung",
        frenchTranslation: " s'accrocher ",
        malagasyTranslation: " Miraikitra/mifihina"
      },
       {
        infinitive: "to come[kam]",
        past: " came",
        pastParticiple: " come",
        frenchTranslation: " venir ",
        malagasyTranslation: " Tonga eto/any"
      },
       {
        infinitive: "to cost[kast]",
        past: " cost",
        pastParticiple: " cost",
        frenchTranslation: " coûter ",
        malagasyTranslation: " Ny vidiny"
      },
       {
        infinitive: "to creep[krip]",
        past: " crept",
        pastParticiple: " crept",
        frenchTranslation: " ramper  ",
        malagasyTranslation: " Mandeha moramora"
      },
       {
        infinitive: "to cut[kat]",
        past: " cut",
        pastParticiple: " cut",
        frenchTranslation: " couper ",
        malagasyTranslation: " Manapaka"
      },
       {
        infinitive: "to deal[dil]",
        past: " dealt",
        pastParticiple: " dealt",
        frenchTranslation: " distribuer ",
        malagasyTranslation: " Mizara[carte]"
      },
       {
        infinitive: "to dig",
        past: " dug",
        pastParticiple: " dug",
        frenchTranslation: " creuser ",
        malagasyTranslation: " Mihady(mangady)"
      },
       {
        infinitive: "to do",
        past: " did",
        pastParticiple: " done",
        frenchTranslation: " faire ",
        malagasyTranslation: " Manao zavatra"
      },
       {
        infinitive: "to draw[drôou]",
        past: " drew",
        pastParticiple: " drawn",
        frenchTranslation: " dessiner ",
        malagasyTranslation: " Manamboatra sary"
      },
      {
        infinitive: "to dream[drim]",
        past: " dreamt",
        pastParticiple: " dreamt",
        frenchTranslation: " rêver ",
        malagasyTranslation: " Manonofy"
      },
      {
        infinitive: "to drink",
        past: " drank",
        pastParticiple: " drunk",
        frenchTranslation: " boire ",
        malagasyTranslation: " Misotro"
      },
      {
        infinitive: "to drive[draiv]",
        past: " drove",
        pastParticiple: " driven",
        frenchTranslation: " conduire ",
        malagasyTranslation: " Mamily(fiara)"
      },
      {
        infinitive: "to dwell[doel]",
        past: " dwelt",
        pastParticiple: " dwelt",
        frenchTranslation: " habiter ",
        malagasyTranslation: " Mipetraka"
      },
      {
        infinitive: "to eat[it]",
        past: " ate",
        pastParticiple: " eaten",
        frenchTranslation: " manger ",
        malagasyTranslation: " Mihinana"
      },
      {
        infinitive: "to fall[fol]",
        past: " fell",
        pastParticiple: " fallen",
        frenchTranslation: " tomber ",
        malagasyTranslation: " Mianjera"
      },
      {
        infinitive: "to feed[fid]",
        past: " fed",
        pastParticiple: " fed",
        frenchTranslation: " nourrir ",
        malagasyTranslation: " Mamahana"
      },
      {
        infinitive: "to feel[fil] ",
        past: " felt",
        pastParticiple: " felt",
        frenchTranslation: " sentir, éprouver ",
        malagasyTranslation: " Mahatsapa"
      },
      {
        infinitive: "to fight[fait]",
        past: " fought",
        pastParticiple: " fought",
        frenchTranslation: " combattre ",
        malagasyTranslation: " Miady"
      },
    ],
    

  }
];

const verbsRules3 = [
  {
    id: 1,
    title: 'Lesson 64: DAILY SPOKEN ENGLISH',
    description: 'IRREGULARS VERBS',
    
    content1: [
      {
        infinitive: "to find[faind] ",
        past: " found",
        pastParticiple: " found",
        frenchTranslation: "trouver",
        malagasyTranslation: "Mahita"
      },
      {
        infinitive: "to flee[fli]",
        past: " fled",
        pastParticiple: " fled",
        frenchTranslation: " s'enfuir ",
        malagasyTranslation: " Mandositra"
      },
      {
        infinitive: "to fling[flin]",
        past: " flung",
        pastParticiple: " flung",
        frenchTranslation: " jeter violemment ",
        malagasyTranslation: " Manipy mafy"
      },
      {
        infinitive: "to  fly[flai]",
        past: " flew",
        pastParticiple: " flown",
        frenchTranslation: " voler ",
        malagasyTranslation: " Manidina"
      },
       {
        infinitive: "to forbid",
        past: " forbade",
        pastParticiple: " forbidden",
        frenchTranslation: " interdire ",
        malagasyTranslation: " Misakana"
      },
       {
        infinitive: "to forget",
        past: " forgot",
        pastParticiple: " forgotten",
        frenchTranslation: " oublier ",
        malagasyTranslation: " Manadino"
      },
       {
        infinitive: "to forgive",
        past: " forgave",
        pastParticiple: " forgiven",
        frenchTranslation: " pardonner ",
        malagasyTranslation: " Mamela(heloka)"
      },
       {
        infinitive: "to freeze",
        past: " froze",
        pastParticiple: " frozen",
        frenchTranslation: " geler  ",
        malagasyTranslation: " Mandry"
      },
       {
        infinitive: "to  get",
        past: " got",
        pastParticiple: " got",
        frenchTranslation: " obtenir ",
        malagasyTranslation: " Mahazo"
      },
       {
        infinitive: "to give ",
        past: " gave",
        pastParticiple: " given",
        frenchTranslation: " donner ",
        malagasyTranslation: " Manome "
      },
       {
        infinitive: "to go",
        past: " went",
        pastParticiple: " gone",
        frenchTranslation: " aller ",
        malagasyTranslation: " Mankany amin'ny"
      },
       {
        infinitive: "to grind",
        past: " ground",
        pastParticiple: " ground",
        frenchTranslation: " moudre ",
        malagasyTranslation: " Mamotika/Mitoto"
      },
       {
        infinitive: "to hang",
        past: " hung",
        pastParticiple: " hung",
        frenchTranslation: " pendre, accrocher  ",
        malagasyTranslation: " Ahantona"
      },
       {
        infinitive: "to have",
        past: " had",
        pastParticiple: " had",
        frenchTranslation: " avoir ",
        malagasyTranslation: " Manana"
      },
       {
        infinitive: "to hear",
        past: " heard",
        pastParticiple: " heard",
        frenchTranslation: " entendre ",
        malagasyTranslation: " Maheno/Mandre"
      },
       {
        infinitive: "to hide",
        past: " hid",
        pastParticiple: " hidden",
        frenchTranslation: " (se) cacher ",
        malagasyTranslation: " Miafina"
      },
       {
        infinitive: "to hold",
        past: " held",
        pastParticiple: " held",
        frenchTranslation: " tenir ",
        malagasyTranslation: " Mitazona"
      },
       {
        infinitive: "to hurt",
        past: " hurt",
        pastParticiple: " hurt",
        frenchTranslation: " blesser ",
        malagasyTranslation: " Maratra"
      },
       {
        infinitive: "to keep",
        past: " kept",
        pastParticiple: " kept",
        frenchTranslation: " garder ",
        malagasyTranslation: " Mitahiry"
      },
       {
        infinitive: "to kneel",
        past: " knelt",
        pastParticiple: " knelt",
        frenchTranslation: " s'agenouiller ",
        malagasyTranslation: " Mandohalika"
      },
       {
        infinitive: "to know",
        past: " knew",
        pastParticiple: " known",
        frenchTranslation: " savoir, connaître  ",
        malagasyTranslation: " Mahafantatra "
      },
       {
        infinitive: "to lay",
        past: " laid",
        pastParticiple: " laid",
        frenchTranslation: " poser à plat  ",
        malagasyTranslation: " Mametraka"
      },
       {
        infinitive: "to lead",
        past: " led",
        pastParticiple: " led",
        frenchTranslation: " mener ",
        malagasyTranslation: " Mitarika"
      },
       {
        infinitive: "to lean",
        past: " leant",
        pastParticiple: " leant",
        frenchTranslation: " s'appuyer ",
        malagasyTranslation: " Mitehina/miankina"
      },
       {
        infinitive: "to leap",
        past: " leapt",
        pastParticiple: " leapt",
        frenchTranslation: " sauter ",
        malagasyTranslation: " Mitsambikina"
      },
       {
        infinitive: "to learn",
        past: " learnt",
        pastParticiple: " learnt",
        frenchTranslation: " apprendre ",
        malagasyTranslation: " Mianatra"
      },
       {
        infinitive: "to leave",
        past: " left",
        pastParticiple: " left",
        frenchTranslation: " laisser, quitter ",
        malagasyTranslation: " Mandao/mamela "
      },
       {
        infinitive: "to lend",
        past: " lent",
        pastParticiple: " lent",
        frenchTranslation: " prêter   ",
        malagasyTranslation: " Mampindrana"
      },
       {
        infinitive: "to let",
        past: " let",
        pastParticiple: " let",
        frenchTranslation: " permettre, louer ",
        malagasyTranslation: " Mamela"
      },
       {
        infinitive: "to lie",
        past: " lay",
        pastParticiple: " lain",
        frenchTranslation: " Être étendu ",
        malagasyTranslation: " Mitsilailay/matoritory"
      },
       {
        infinitive: "to light",
        past: " lit",
        pastParticiple: " lit",
        frenchTranslation: " allumer ",
        malagasyTranslation: " Mandrehitra"
      },
       {
        infinitive: "to lose",
        past: " lost",
        pastParticiple: " lost",
        frenchTranslation: " perdre ",
        malagasyTranslation: " Very/mamoy "
      },
       {
        infinitive: "to make",
        past: " made",
        pastParticiple: " made",
        frenchTranslation: " faire,fabriquer ",
        malagasyTranslation: " Mamorona"
      },
      {
        infinitive: "to mean",
        past: " meant",
        pastParticiple: " meant",
        frenchTranslation: " signifier  ",
        malagasyTranslation: " Midika"
      },
      {
        infinitive: "to meet",
        past: " met",
        pastParticiple: " met",
        frenchTranslation: " (se) rencontrer ",
        malagasyTranslation: " Mifanena/Mihaona"
      },
      {
        infinitive: "to pay",
        past: " paid",
        pastParticiple: " paid",
        frenchTranslation: " payer ",
        malagasyTranslation: " Manefa/mandoa vola"
      },
      {
        infinitive: "to put",
        past: " put",
        pastParticiple: " put",
        frenchTranslation: " mettre ",
        malagasyTranslation: " Manisy/mandatraka "
      },
      {
        infinitive: "to quit",
        past: " quit",
        pastParticiple: " quit",
        frenchTranslation: " cesser (de)  ",
        malagasyTranslation: " Mandao/mijanona"
      },
      {
        infinitive: "to read",
        past: " read",
        pastParticiple: " read",
        frenchTranslation: " lire ",
        malagasyTranslation: " Mamaky"
      },
      {
        infinitive: "to rid",
        past: " rid",
        pastParticiple: " rid",
        frenchTranslation: " débarrasser  ",
        malagasyTranslation: " Manary"
      },
      
    ],
  }
];

const verbsRules4 = [
  {
    id: 1,
    title: 'Lesson 65: DAILY SPOKEN ENGLISH',
    description: 'IRREGULARS VERBS',
    
    content1: [
      {
        infinitive: "to ride",
        past: " rode",
        pastParticiple: " ridden",
        frenchTranslation: "chevaucher ",
        malagasyTranslation: "Mitondra/mitaingina "
      },
      {
        infinitive: "to ring",
        past: " rang",
        pastParticiple: " rung",
        frenchTranslation: " sonner ",
        malagasyTranslation: " Mampaneno/maneno"
      },
      {
        infinitive: "to rise",
        past: " rose",
        pastParticiple: " risen",
        frenchTranslation: " s'élever, se lever  ",
        malagasyTranslation: " Miakatra/mitombo"
      },
      {
        infinitive: "to run",
        past: " ran",
        pastParticiple: " run",
        frenchTranslation: " courrir ",
        malagasyTranslation: " Miazakazaka"
      },
       {
        infinitive: "to saw",
        past: " sawed",
        pastParticiple: " sawn",
        frenchTranslation: " scier ",
        malagasyTranslation: " Manapaka @ tsofa "
      },
       {
        infinitive: "to say",
        past: " said",
        pastParticiple: " said",
        frenchTranslation: " dire ",
        malagasyTranslation: " Milaza/miteny"
      },
       {
        infinitive: "to see",
        past: " saw",
        pastParticiple: " seen",
        frenchTranslation: " voir ",
        malagasyTranslation: " Mahita"
      },
       {
        infinitive: "to seek",
        past: " sought",
        pastParticiple: " sought",
        frenchTranslation: " chercher ",
        malagasyTranslation: " Mitady"
      },
       {
        infinitive: "to sell",
        past: " sold",
        pastParticiple: " sold",
        frenchTranslation: " vendre ",
        malagasyTranslation: " Mivarotra"
      },
       {
        infinitive: "to send",
        past: " sent",
        pastParticiple: " sent",
        frenchTranslation: " envoyer ",
        malagasyTranslation: " Mandefa"
      },
       {
        infinitive: "to set",
        past: " set",
        pastParticiple: " set",
        frenchTranslation: " fixer ",
        malagasyTranslation: " Mametaka/Manamboatra"
      },
       {
        infinitive: "to sew",
        past: " sewed",
        pastParticiple: " sewn",
        frenchTranslation: " coudre ",
        malagasyTranslation: " Manjaitra"
      },
       {
        infinitive: "to shake",
        past: " shook",
        pastParticiple: " shaken",
        frenchTranslation: " secouer ",
        malagasyTranslation: " Manontsana"
      },
       {
        infinitive: "to shear",
        past: " sheared",
        pastParticiple: " shorn",
        frenchTranslation: " tondre (des moutons) ",
        malagasyTranslation: " Manala volo (Ondry)"
      },
       {
        infinitive: "to shed",
        past: " shed",
        pastParticiple: " shed",
        frenchTranslation: " verser (des larmes)",
        malagasyTranslation: " Mandatsaka(rà-ranomaso)"
      },
       {
        infinitive: "to shine",
        past: " shone",
        pastParticiple: " shone",
        frenchTranslation: " briller ",
        malagasyTranslation: " Manjelatra/mamiratra"
      },
       {
        infinitive: "to shoe",
        past: " shod",
        pastParticiple: " shod",
        frenchTranslation: " ferrer, chausser ",
        malagasyTranslation: " Manisy vy @ tongo-tsoavaly "
      },
       {
        infinitive: "to shoot",
        past: " shot",
        pastParticiple: " shot",
        frenchTranslation: " tirer ",
        malagasyTranslation: " Mitifitra "
      },
       {
        infinitive: "to show",
        past: " showed",
        pastParticiple: " shown",
        frenchTranslation: " montrer ",
        malagasyTranslation: " Maneho"
      },
       {
        infinitive: "to shrink",
        past: " shrank",
        pastParticiple: " shrunk",
        frenchTranslation: " rétrécir ",
        malagasyTranslation: " Mifintina"
      },
       {
        infinitive: "to shut",
        past: " shut",
        pastParticiple: " shut",
        frenchTranslation: " fermer ",
        malagasyTranslation: " Manakatona"
      },
       {
        infinitive: "to sing",
        past: " sang",
        pastParticiple: " sung",
        frenchTranslation: " chanter ",
        malagasyTranslation: " Mihira"
      },
       {
        infinitive: "to sink",
        past: " sank",
        pastParticiple: " sunk",
        frenchTranslation: " couler",
        malagasyTranslation: " Milentika"
      },
       {
        infinitive: "to sit",
        past: " sat",
        pastParticiple: " sat",
        frenchTranslation: " être assis ",
        malagasyTranslation: " Mipetraka"
      },
       {
        infinitive: "to sleep",
        past: " slept",
        pastParticiple: " slept",
        frenchTranslation: " dormir ",
        malagasyTranslation: " Matory"
      },
       {
        infinitive: "to slide",
        past: " slid",
        pastParticiple: " slid",
        frenchTranslation: " glisser ",
        malagasyTranslation: " Mibolisatra/Malama"
      },
       {
        infinitive: "to sling",
        past: " slung",
        pastParticiple: " slung",
        frenchTranslation: " lancer (avec force)",
        malagasyTranslation: " Manipy/mitoraka"
      },
       {
        infinitive: "to slink",
        past: " slunk",
        pastParticiple: " slunk",
        frenchTranslation: " aller furtivement",
        malagasyTranslation: " Mandeha mirifatra"
      },
       {
        infinitive: "to slit",
        past: " slit",
        pastParticiple: " slit",
        frenchTranslation: " fendre, inciser ",
        malagasyTranslation: " Misy vaky kely/Mitsiatra"
      },
       {
        infinitive: "to smell",
        past: " smelt",
        pastParticiple: " smelt",
        frenchTranslation: " sentir (odorat)  ",
        malagasyTranslation: " Manimbolo"
      },
       {
        infinitive: "to sow",
        past: " sowed",
        pastParticiple: " sown",
        frenchTranslation: " semer ",
        malagasyTranslation: " Mamafy"
      },
       {
        infinitive: "to speak",
        past: " spoke",
        pastParticiple: " spoken",
        frenchTranslation: " parler ",
        malagasyTranslation: " Miresaka"
      },
       {
        infinitive: "to speed",
        past: " sped",
        pastParticiple: " sped",
        frenchTranslation: " aller à toute vitesse ",
        malagasyTranslation: " Mandeha mafy be"
      },
      {
        infinitive: "to spell",
        past: " spelt",
        pastParticiple: " spelt",
        frenchTranslation: " épeler",
        malagasyTranslation: " Manonona(teny)"
      },
      {
        infinitive: "to spend",
        past: " spent",
        pastParticiple: " spent",
        frenchTranslation: " dépenser  ",
        malagasyTranslation: " Mandany"
      },
      {
        infinitive: "to spill",
        past: " spilt",
        pastParticiple: " spilt",
        frenchTranslation: " renverser (un liquide)  ",
        malagasyTranslation: " Very (rano)"
      },
      {
        infinitive: "to spit",
        past: " spat",
        pastParticiple: " spat",
        frenchTranslation: " cracher ",
        malagasyTranslation: " Mandrora"
      },
      {
        infinitive: "to split",
        past: " split",
        pastParticiple: " split",
        frenchTranslation: " fendre ",
        malagasyTranslation: " Misaraka/mizara roa "
      },
      {
        infinitive: "to spoil",
        past: " spoilt",
        pastParticiple: " spoilt",
        frenchTranslation: " gâcher, gâter ",
        malagasyTranslation: " Mamotika "
      },
      {
        infinitive: "to spread",
        past: " spread",
        pastParticiple: " spread",
        frenchTranslation: " répandre  ",
        malagasyTranslation: " Manaparitaka"
      },
      {
        infinitive: "to spring ",
        past: " sprang",
        pastParticiple: " sprung",
        frenchTranslation: " jaillir, bondir",
        malagasyTranslation: " Mikorina "
      },
      {
        infinitive: "to stand",
        past: " stood",
        pastParticiple: " stood",
        frenchTranslation: " être debout  ",
        malagasyTranslation: " Mitsangana"
      },
      {
        infinitive: "to steal",
        past: " stole",
        pastParticiple: " stolen",
        frenchTranslation: " voler, dérober",
        malagasyTranslation: " Mangalatra"
      },
      {
        infinitive: "to stick",
        past: " stuck",
        pastParticiple: " stuck",
        frenchTranslation: " coller  ",
        malagasyTranslation: " Mametaka"
      },
      {
        infinitive: "to sting",
        past: " stung",
        pastParticiple: " stung",
        frenchTranslation: " piquer  ",
        malagasyTranslation: " Manaikitra(biby kely) "
      },
      {
        infinitive: "to stink",
        past: " stank",
        pastParticiple: " stunk",
        frenchTranslation: " puer  ",
        malagasyTranslation: " Maimbo"
      },
      {
        infinitive: "to stride",
        past: " strode",
        pastParticiple: " stridden",
        frenchTranslation: " marcher à grands pas  ",
        malagasyTranslation: " Mandroso mialoha"
      },
    ],
  }
];

const verbsRules5 = [
  {
    id: 1,
    title: 'Lesson 66: DAILY SPOKEN ENGLISH',
    description: 'IRREGULARS VERBS',
    
    content1: [
      {
        infinitive: "to strike",
        past: " struck",
        pastParticiple: " struck",
        frenchTranslation: "frapper",
        malagasyTranslation: "Mikapoka"
      },
      {
        infinitive: "to string",
        past: " strung",
        pastParticiple: " strung",
        frenchTranslation: " enfiler, tendre  ",
        malagasyTranslation: " Manisy/mitafy"
      },
      {
        infinitive: "to strive",
        past: " strove",
        pastParticiple: " striven",
        frenchTranslation: " s'efforcer",
        malagasyTranslation: " Miezaka"
      },
      {
        infinitive: "to swear",
        past: " swore",
        pastParticiple: " sworn",
        frenchTranslation: " jurer  ",
        malagasyTranslation: " Mianiana"
      },
       {
        infinitive: "to sweep",
        past: " swept",
        pastParticiple: " swept",
        frenchTranslation: " balayer",
        malagasyTranslation: " Mamafa"
      },
       {
        infinitive: "to swell",
        past: " swelled",
        pastParticiple: " swollen",
        frenchTranslation: " enfler ",
        malagasyTranslation: " Mivonto"
      },
       {
        infinitive: "to swim",
        past: " swam",
        pastParticiple: " swum",
        frenchTranslation: " nager ",
        malagasyTranslation: " Milomano"
      },
       {
        infinitive: "to swing",
        past: " swung",
        pastParticiple: " swung",
        frenchTranslation: "se balancer ",
        malagasyTranslation: " Mampifandanja"
      },
       {
        infinitive: "to take",
        past: " took",
        pastParticiple: " taken",
        frenchTranslation: " prendre ",
        malagasyTranslation: " Maka/Mandray"
      },
       {
        infinitive: "to teach",
        past: " taught",
        pastParticiple: " taught",
        frenchTranslation: " enseigner ",
        malagasyTranslation: " Mampianatra"
      },
       {
        infinitive: "to tear",
        past: " tore",
        pastParticiple: " torn",
        frenchTranslation: " déchirer  ",
        malagasyTranslation: " Mandrovitra"
      },
       {
        infinitive: "to tell",
        past: " told",
        pastParticiple: " told",
        frenchTranslation: " dire, raconter ",
        malagasyTranslation: " Mitantara"
      },
       {
        infinitive: "to think",
        past: " thought",
        pastParticiple: " thought",
        frenchTranslation: " penser ",
        malagasyTranslation: " Mieritreritra"
      },
       {
        infinitive: "to throw",
        past: " threw",
        pastParticiple: " thrown",
        frenchTranslation: " jeter ",
        malagasyTranslation: " Manipy"
      },
       {
        infinitive: "to thrust",
        past: " thrust",
        pastParticiple: " thrust",
        frenchTranslation: " enfoncer ",
        malagasyTranslation: " Mampitsofoka"
      },
       {
        infinitive: "to tread",
        past: " trod",
        pastParticiple: " trodden",
        frenchTranslation: " fouler aux pieds ",
        malagasyTranslation: " Folaka(tongotra) "
      },
       {
        infinitive: "to understand",
        past: " understood",
        pastParticiple: " understood",
        frenchTranslation: " comprendre ",
        malagasyTranslation: " Mahazo(lazaina)"
      },
       {
        infinitive: "to wake",
        past: " woke",
        pastParticiple: " woken",
        frenchTranslation: " (se) réveiller ",
        malagasyTranslation: " Mahatsiaro"
      },
       {
        infinitive: "to wear",
        past: " wore",
        pastParticiple: " worn",
        frenchTranslation: " porter (des vêtements) ",
        malagasyTranslation: " Mitafy/Manao"
      },
       {
        infinitive: "to weave",
        past: " wove",
        pastParticiple: " woven",
        frenchTranslation: " tisser ",
        malagasyTranslation: " Mandrary/tsihy"
      },
       {
        infinitive: "to weep",
        past: " wept",
        pastParticiple: " wept",
        frenchTranslation: " pleurer ",
        malagasyTranslation: " Midradradra mitomany"
      },
       {
        infinitive: "to win",
        past: " won",
        pastParticiple: " won",
        frenchTranslation: " gagner ",
        malagasyTranslation: " Mahazo/mandresy"
      },
       {
        infinitive: "to wind",
        past: " wound",
        pastParticiple: " wound",
        frenchTranslation: "  enrouler  ",
        malagasyTranslation: " Aodina"
      },
       {
        infinitive: "to wring",
        past: " wrung",
        pastParticiple: " wrung",
        frenchTranslation: " tordre ",
        malagasyTranslation: " "
      },
       {
        infinitive: "to write",
        past: " wrote",
        pastParticiple: " written",
        frenchTranslation: " écrire  ",
        malagasyTranslation: " Manoratra"
      },
       
    ],
    content2: [
      {
        verb: "TO BE QUITS/EVEN[iven]",
        frenchTranslation: "Etre quitte",
        malagasyTranslation: " Tsy misy trosa intsony"
      },
      {
        verb: "IT IS NOT FAIR[feir]",
        frenchTranslation: "Ce n’est pas juste",
        malagasyTranslation: " Tsy rariny"
      },
      {
        verb: "KNOCK ON WOOD[nakon woud]",
        frenchTranslation: "Touchons du bois",
        malagasyTranslation: " Sanatria!"
      },
      {
        verb: "IF GOD’S WILL! ",
        frenchTranslation: "Si Dieu le veut",
        malagasyTranslation: " Raha sitrampon’Atra"
      },
      {
        verb: "NO WAY![no wei]",
        frenchTranslation: "Il n’y a pas question.",
        malagasyTranslation: " Tsiisy hevitra"
      },
      {
        verb: "ZIP IT/CUT IT OUT",
        frenchTranslation: "Ferme-la",
        malagasyTranslation: " Mangina ianao"
      },
      {
        verb: "CALM DOWN[kam daon]",
        frenchTranslation: "Du calme",
        malagasyTranslation: " Aoka hitony ianao!/Calme!"
      },
      {
        verb: "WHATSAMACALLIT[watsmakolit]",
        frenchTranslation: "Truc/ machin",
        malagasyTranslation: " Le zavatra iny"
      },
      {
        verb: "PARDON MY FRENCH",
        frenchTranslation: "Désolé",
        malagasyTranslation: " Azafady"
      },
      {
        verb: "TO GIVE SB A PIGGYBACK",
        frenchTranslation: "Porter qn sur son dos",
        malagasyTranslation: " Mibaby"
      },
      {
        verb: "TO BE (A) MOOCH[moutr]",
        frenchTranslation: "Traîner/vivre au crochet des autres",
        malagasyTranslation: " Tsy mahavelo-tena"
      },
      {
        verb: "TO BE A PATSY",
        frenchTranslation: "Bouc-émissaire",
        malagasyTranslation: " Olona mora fitahina"
      },
      {
        verb: "TO BE A COWARD/CHICKEN",
        frenchTranslation: "Etre un lâche",
        malagasyTranslation: " Sarotahotra/kanosa"
      },
      {
        verb: "TO BULLY SB[bouli]",
        frenchTranslation: "Maltraiter",
        malagasyTranslation: " Mampijaly(olona)"
      },
      {
        verb: "LET IT BE!",
        frenchTranslation: "Qu’il soit ainsi",
        malagasyTranslation: " Enga anie"
      },
      {
        verb: "A BOOT LICKER[liker]",
        frenchTranslation: "Lèche-bottes",
        malagasyTranslation: " Miandry zavatra@olona"
      },
    ],
  }
];

const verbsRules6 = [
  {
    id: 1,
    title: 'Lesson 67: DAILY SPOKEN ENGLISH',
    description: 'MIXED VOCABULARIES',
    content1: [
      {
        verb: "TO CONSTRUCT[konstrakt] ",
        frenchTranslation: "Construire/bâtir ",
        
      },
      {
        verb: "TO POUR[pôr]/POURING ",
        frenchTranslation: "Couler/Coulage ",
      
      },
      {
        verb: "TO IMPLEMENT  ",
        frenchTranslation: "Implenter  ",
      
      },
      {
        verb: "TO FOUND[faond]  ",
        frenchTranslation: "Fondre ",
      
      },
      {
        verb: "A TRUSS[tras]  ",
        frenchTranslation: "Ferme  ",
      
      },
      {
        verb: "ROOF/FLOOR[flôr]  ",
        frenchTranslation: "Toit/plancher/carrelage",
      
      },
      {
        verb: "TO INSPECT ",
        frenchTranslation: "Inspecter",
      
      },
      {
        verb: "GRAVEL/CONCRETE(MIXER) ",
        frenchTranslation: "Gravillon/béton(nière)",
      
      },
      {
        verb: "CEMENT/MORTAR  ",
        frenchTranslation: "Ciment/Mortier ",
      
      },
      {
        verb: "SCAFFOLDINGP[skafoldin]  ",
        frenchTranslation: "Echafaudage",
      
      },
      {
        verb: "TO HAMMER A NAIL",
        frenchTranslation: "Marteler/Enfoncer",
      
      },
      {
        verb: "TO TAKE OFF ",
        frenchTranslation: "Décoller ",
      
      },
      {
        verb: "TO LAND[leind] ",
        frenchTranslation: "Atterir ",
      
      },
      {
        verb: "AIRCRAFT ",
        frenchTranslation: "Avion",
      
      },
      {
        verb: "TO AMEND YOUR FLIGHT PLAN",
        frenchTranslation: " Modifier le plan de vol  ",
      
      },
      {
        verb: "ANOMALY  ",
        frenchTranslation: "Anomalie",
      
      },
      {
        verb: "TO ASSESS ",
        frenchTranslation: "Evaluer/Expertiser",
      
      },
      {
        verb: "TO BOARD/EMBARK/SAIL[seil]",
        frenchTranslation: " Embarquer",
      
      },
      {
        verb: " TO BOOK  ",
        frenchTranslation: " Réserver",
      
      },
      {
        verb: " TO CANCEL YOUR DEPARTURE  ",
        frenchTranslation: " Anuller ",
      
      },
      {
        verb: " ASAP(as soon as possible)  ",
        frenchTranslation: " Dès que possible ",
      
      },
      {
        verb: " BLOW-OUT  ",
        frenchTranslation: " Eclatement(Pneu) ",
      
      },
      {
        verb: " BUMBY/TURBULENT  ",
        frenchTranslation: " Turbulent  ",
      
      },
      {
        verb: " TO PUT ON YOUR SEATBELT ",
        frenchTranslation: " Ceinture de sécurité  ",
      
      },
      {
        verb: "TO COLLAPSE [kelaps]  ",
        frenchTranslation: " S’effondrer/s’écrouller ",
      
      },
      {
        verb: "TO WRECK[rek]",
        frenchTranslation: " Démolir/accidenter",
      
      },
      {
        verb: " TO BE SHIPWRECKED[shiprekt] ",
        frenchTranslation: " Etre naufragé  ",
      
      },
      {
        verb: " TO PAINT[pent]  ",
        frenchTranslation: " Peindre  ",
      
      },
      {
        verb: " TO REHABILITATE[rehabiliteit] ",
        frenchTranslation: " Réhabiliter   ",
      
      },
      {
        verb: " FREIGHT[frait]  ",
        frenchTranslation: " Fret/chargement   ",
      
      },
      {
        verb: " BAGGED CARGO ",
        frenchTranslation: " Cargaison en sac   ",
      
      },
      {
        verb: " TO FILL UP THE TANK ",
        frenchTranslation: " Faire plein la réservoir ",

      },
      {
        verb: " FUEL[fiol]",
        frenchTranslation: " Carburant   ",
      
      },
      {
        verb: " PETROL/GASOLINE[gasoline]  ",
        frenchTranslation: " Essence/Gasoil   ",
      
      },
      {
        verb: " TO NAVIGATE[navigeit] ",
        frenchTranslation: " Gouverner/piloter   ",
      
      },
      {
        verb: " TO RUN OUT OF FUEL/CREDIT ",
        frenchTranslation: " Epuiser/être à court de  ",
      
      },
      {
        verb: " TO LAY THE FOUNDATION  ",
        frenchTranslation: " Poser la fondation   ",
      
      },
      {
        verb: " TO TOW[tôou]  ",
        frenchTranslation: " Remorquer",
      
      },
      {
        verb: " TO BREAK DOWN ",
        frenchTranslation: " Etre en panne ",
      
      },
      {
        verb: " BACK AND FORTH[forf] ",
        frenchTranslation: " Aller-retour",
      
      },
      {
        verb: " ROUND-TRIP[raond]TICKET ",
        frenchTranslation: " Aller-retour",
      
      },
      {
        verb: " SHANTY TOWN/GHETTO  ",
        frenchTranslation: " Bidonville  ",
      
      },
      {
        verb: " THE NEWSPAPERS  ",
        frenchTranslation: " la presse (journaux)  ",
      
      },
      {
        verb: " PRINT JOURNALISM[djernalizm]  ",
        frenchTranslation: " La presse écrite   ",
      
      },
      {
        verb: " FREEDOM OF THE PRESS  ",
        frenchTranslation: " La liberté de la presse  ",
      
      },
      {
        verb: " TO INVESTIGATE  ",
        frenchTranslation: " Enquêter   ",
      
      },
      {
        verb: " THE NEWS ITEM  ",
        frenchTranslation: " Une information(diffusé)   ",
      
      },
      {
        verb: " THE HEADLINE  ",
        frenchTranslation: " Un gros titre ",
      
      },
      {
        verb: " THE FRONT PAGE ",
        frenchTranslation: " La une ",
      
      },
      {
        verb: "  TO INFORM ",
        frenchTranslation: " Informer ",
      
      },
      {
        verb: "  TO SENSITIZE[sensitaiz]  ",
        frenchTranslation: " Sensibilization ",
      
      },
      {
        verb: " LEGACY  ",
        frenchTranslation: " Héritage  ",
      
      },
      {
        verb: "  TO LIBEL/SLANDER  ",
        frenchTranslation: " Calomnier/diffamer   ",
      
      },
      {
        verb: "  TO HARM   ",
        frenchTranslation: " Nuire/blésser",
      
      },
      {
        verb: "TO HOLOD A GRUDGE AGAINST ",
        frenchTranslation: " Avoir une racune contre",
      
      },
      {
        verb: "TO GRANT AN INTERVIEW ",
        frenchTranslation: " Accorder une interview ",
      },
      {
        verb: "TO BE PRE-RECORDED ",
        frenchTranslation: " Enregistrer/pré-enregistré  ",
      },
      {
        verb: "TO CARRY PIGGYBACK  ",
        frenchTranslation: " Porter qn au dos",
      },
      {
        verb: "DANDRUFF[dendraf]",
        frenchTranslation: " Péllicule ",
      },
      {
        verb: "BOOGER/ MUCUS  ",
        frenchTranslation: " Crote de nez ",
      },
      {
        verb: "SNOT/BE SNOTTY[snat]  ",
        frenchTranslation: "Morve/morveux  ",
      },
      {
        verb: "DIRT[dert] ROAD  ",
        frenchTranslation: " Chemin de terre  ",
      },
      {
        verb: "PAVED[pavt] ROAD ",
        frenchTranslation: " Route/pavé goudronnée  ",
      },
      {
        verb: "TO ADVERTISE[advertaiz]  ",
        frenchTranslation: " Faire la publicité  ",
      },
      {
        verb: "TO PROMOTE ",
        frenchTranslation: " Promouvoir  ",
      },
      {
        verb: "TO BE ON (THE)AIR  ",
        frenchTranslation: " A l’antenne  ",
      },
      {
        verb: "TO PUT UP A POSTER ",
        frenchTranslation: " Mettre un affiche/poster  ",
      },
      {
        verb: "SOFT SELL # HARD SELL ",
        frenchTranslation: " Campagne non agressive ",
      },
      {
        verb: "SELLING POINT ",
        frenchTranslation: " Point de vente  ",
      },
      {
        verb: "Wholesale price/bulk ",
        frenchTranslation: " Prix de gros  ",
      },
      {
        verb: "GROSS/NET SALARY",
        frenchTranslation: " Salaire brut/net",
      },
      {
        verb: "SELL STH AT RETAIL  ",
        frenchTranslation: " Au détail ",
      },
      {
        verb: "TO TRANSFER MONEY  ",
        frenchTranslation: " Transférer de l’argent ",
      },
      {
        verb: "TO WIRE[wair]  ",
        frenchTranslation: "Virer de l’argent ",
      },
      {
        verb: "TO WITHDRAW[wivdrô] ",
        frenchTranslation: " Retirer de l’argent  ",
      },
      {
        verb: "BALANCE",
        frenchTranslation: "Solde ",
      },
      {
        verb: "TO BE BROKE  ",
        frenchTranslation: " Etre fauché  ",
      },
      {
        verb: "BEANS/DOUGH[dôou] ",
        frenchTranslation: " Argent ",
      },
      {
        verb: "TO TAKE REVENGE[rivendj] ",
        frenchTranslation: " Se venger  ",
      },
      {
        verb: "TO HOODWINK SB",
        frenchTranslation: " Tromper  ",
      },
      {
        verb: "TO BE FLABBERGASTED ",
        frenchTranslation: " Etre étonné  ",
      },
      {
        verb: "TO BE TIED-UP/SWAMPED ",
        frenchTranslation: " Etre occupé   ",
      },
      {
        verb: "TO BE POOPED/BUSHED ",
        frenchTranslation: " Etre fatigue",
      },
      {
        verb: "TO SIT ON SB’S LAP  ",
        frenchTranslation: " S’asseoir sur les genoux",
      },
      {
        verb: " TO SEDUCE[dios]/CARESS",
        frenchTranslation: " Seduire/caresser",
      },
      {
        verb: "TO FLIRT[flert]TO HIT ON ",
        frenchTranslation: " Fleurter/Draguer ",
      },
      {
        verb: "TO DATE SB  ",
        frenchTranslation: " Avoir un rancard  ",
      },
      {
        verb: "TO HAVE AN APPOINTMENT WITH  ",
        frenchTranslation: " Avoir un rendez-vous   ",
      },
      {
        verb: "TO GET ALONG WITH SB  ",
        frenchTranslation: " Bien s’entendre avec  ",
      },
      {
        verb: "TO QUARREL [kwarel] ",
        frenchTranslation: " Se disputer",
      },
    ],
  }
];

const VerbsScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

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
      
      <View style={styles.textWithButtonContainer}>
          <Text style={styles.content}>
          Learn verbs to help you learn English.
          </Text>
      
          {/* Bouton pour jouer l'audio */}
          <TouchableOpacity style={styles.audioButton} onPress={playSound}>
            <Ionicons name="volume-high" size={24} color="#004e98" />
          </TouchableOpacity>
        </View>

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
                      <List.Icon {...props} icon="book-open" color='#004e98' />
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
                                                   <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.verb}</RNText>
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
                      <List.Icon {...props} icon="book-open" color='#004e98' />
                        )}
                    >
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                          <RNText style={styles.tableHeader}> INFINITIVE</RNText>
                          <RNText style={styles.tableHeader}> PAST</RNText>
                          <RNText style={styles.tableHeader}> PAST PARTICIPLE</RNText>
                            <RNText style={styles.tableHeader}> TRANSLATION </RNText>
                                                 <RNText style={styles.tableHeader}> DIKATENY</RNText>
                                               </View>
                                               {rule.content1.map((item, index) => (
                                                 <View key={index} style={styles.tableRow}>
                                                   <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.infinitive}</RNText>
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


{verbsRules3.map((rule) => (
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
                      <List.Icon {...props} icon="book-open" color='#004e98' />
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
                                                   <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.infinitive}</RNText>
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

{verbsRules4.map((rule) => (
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
                      <List.Icon {...props} icon="book-open" color='#004e98' />
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
                                                     <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.infinitive}</RNText>
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

{verbsRules5.map((rule) => (
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
                      <List.Icon {...props} icon="book-open" color='#004e98' />
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
                                                     <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.infinitive}</RNText>
                                                   <RNText style={styles.tableCell}>{item.past}</RNText>
                                                   <RNText style={styles.tableCell}>{item.pastParticiple}</RNText>
                                                   <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                                                   <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                        </View>
                      ))}
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="IRREGULAR AND IDIOMS"
                    left={(props) => (
                      <List.Icon {...props} icon="book-open" color='#004e98' />
                        )}
                    >
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                          <RNText style={styles.tableHeader}>English</RNText>
                            <RNText style={styles.tableHeader}>French</RNText>
                                                 <RNText style={styles.tableHeader}>Malagasy</RNText>
                                               </View>
                                               {rule.content2.map((item, index) => (
                                                 <View key={index} style={styles.tableRow}>  
                                                   <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.verb}</RNText>
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

{verbsRules6.map((rule) => (
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
                    title="MIXED VOCABULARIES"
                    left={(props) => (
                      <List.Icon {...props} icon="book-open" color='#004e98' />
                        )}
                    >
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                          <RNText style={styles.tableHeader}>English</RNText>
                            <RNText style={styles.tableHeader}>Francais</RNText>
                                </View>
                                    {rule.content1.map((item, index) => (
                                    <View key={index} style={styles.tableRow}>
                                                   <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.verb}</RNText>
                                                   <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
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
    fontSize: 20,
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
});

export default VerbsScreen;
