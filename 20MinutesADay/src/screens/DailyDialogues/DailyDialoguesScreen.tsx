import React, { useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Text, List, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

const dialogues1 = [
  {
    id: 1,
    title: 'Lesson 1: GREETINGS',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Good morning/afternoon/evening",
        pronunciation: '[goud mo:nin/aft:noun/iv:nin]',
        frenchTranslation: "A- Bonjour/bonsoir",
        malagasyTranslation: "A- Manao ahoana/ Manao ahoana hariva"
      },
      {
        sentence: 'Hi, Hello!',
        pronunciation: '[hai], [hɛˈloʊ]',
        frenchTranslation: "Salut, Bonjour!",
        malagasyTranslation: "Salama, Manao ahoana!"
      },
      {
        sentence: 'How are you doing/ How’s it going?',
        pronunciation: '[Haoa you doin/ haozit…....goin]',
        frenchTranslation: "Comment ça va ?",
        malagasyTranslation: "Manao ahoana ianao?"
      },
      {
        sentence: 'Good morning!',
        pronunciation: '[goud mo:nin]',
         frenchTranslation: "Bonjour !",
        malagasyTranslation: "Manao ahoana!"
      },
    ],
    content2: [
      {
        sentence: "B- I’m fine/ good/ I’m in good shape, thanks.",
        pronunciation: "[aim fain/goud/aim in goud sheip, tenks]",
      },
      {
        sentence: "Not bad[na bad]thanks, AND YOU/WHAT ABOUT YOU?",
        pronunciation: "[nat baad, tenks, ……ænd ju/ wot abaut ju]",
      },
      {
        sentence: "→ You say this when you are feeling sick",
        pronunciation: "[ju sey dis wen ju ar filin sik]",
      },
      {
        sentence: "→ I’m feeling bad, today/ I’m in bad shape.",
        pronunciation: "[aimfiilin baad/ ………. ai d /aim in baad sheip]",
      },
      {
        sentence: "→ Then you say: I’m sorry, Get well soon! Désolé; Soignes-toi bien",
        pronunciation: "[den ju sey: aim sori, get wel sun!]",
      },
    ],

    content3: [
      {
        sentence: "A- What’s new/ up?",
        pronunciation: "[wats nio/nou/ap]",
      },
      {
        sentence: "B- Nothing (special/ much)/ Not much but I’m tired.",
        pronunciation: "[nafin speshel/matr/ nat matr baraim taird]",
      },
    ],
    content4: [
      {
        sentence: "A- What’s your name please?\n\n\n→ Can I have your name?.",
        pronunciation: "[wats yor neim pli:z]\n\n\n[ken ai hav yor neim]",
      },
      {
        sentence: "B- My name’s Kelly, and yourself/What about you?\n\n\n→ → I’m Bob, nice to meet you(Joe).\n\n\n→ Glad to know you too/ you too/\n\n\n→ The pleasure is mine",
        pronunciation: "[mai neimz keli, and yorself/wot abaut yu]\n\n\n[aim bab, nais tu mit yu(jou)]\n\n\n[aim bab, nais tu mit yu(jou)]",
      
      },
    ],
    content5: [
      {
        sentence: "A- So, where are you from?",
        pronunciation: "[sei..wer a io frem]",
      },
      {
        sentence: "→ Where do you come from?",
        pronunciation: "[wer dy kam frem]",
      },
      {
        sentence: "B- Um, I’m from Tana, but I grew up in Tulear.",
        pronunciation: "[am..aim from………..barai grou ap in……]",
      },
      {
        sentence: "I come from Madagascar…and you [en io]?",
        pronunciation: "[ai kam from Madagaskar... en io]",
      },
    ],
  },
  // ... other dialogues remain unchanged
];

const dialogues2 = [
  {
    id: 1,
    title: 'Lesson 2: ASKING SB’S DWELLING ',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Where do you live/dwell [doel]., here?",
        pronunciation: '[wer dyu liv/dwel, hiar]',
      },
      {
        sentence: '→ Where’s home?',
        pronunciation: '[werz houm]',
      },
      {
        sentence: 'B- Well, I live in/at downtown/Ampefiloha..',
        pronunciation: '[wel, ai liv in/at dauntaon/Ampefiloha]',
      },
      {
        sentence: '→ Who do you live with?',
        pronunciation: '[hu du yu liv wid]',
      },
      {
        sentence: '→ Do you live alone?',
        pronunciation: '[du yu liv aloun]',
      },
      {
        sentence: 'A- Well, I live with [wid] my parents',
        pronunciation: '[wel, ai liv wid mai perents]',
      },
      {
        sentence: '→ Where about(s) there you live?',
        pronunciation: '[wel, ai liv wid mai perents]',
      },
      
    ],
    content2: [
      {
        sentence: "A- Do you have any brothers or sisters?",
        pronunciation: "[du yu hav eni bradars or sistars]",
      },
      {
        sentence: "→ How many brothers and sisters do you have?",
        pronunciation: "[hau meni br dars and sistars du yu hav]",
      },
      {
        sentence: "B- Yes, I do, I have one brother and two sisters.",
        pronunciation: "[yes, ai du, ai hav wan bradar and tu: sistars]",
      },
      {
        sentence: "→ No, I don’t, I’m an only child.",
        pronunciation: "[no, ai dont, aim an ounli chaild]",
      },
     
    ],
    content3: [
      {
        sentence: "A- Where are you going now?",
        pronunciation: "[wer ar yu goin nau]",
      },
      {
        sentence: "→ Where are you off to?",
        pronunciation: "[wer ar yu of tu]",
      },
      {
        sentence: "B- Well, I’m going to learn English now.",
        pronunciation: "[wel, aim goin tu l rn inglish nau]",
      },
      {
        sentence: "→ I’m going to the market/bank/to School/to 67ha",
        pronunciation: " [aim goin tu de markit/bank/tu sku:l/tu siksiti sevn a]/ What about you?",
      },
      {
        sentence: "A- Where have you been?",
        pronunciation: "[wer hav yu bin]",
      },
      {
        sentence: "→ Where are you coming from?",
        pronunciation: "[wer ar yu kam in from]",
      },
      {
        sentence: "B- Well, I’ve been to the Market/bank/police..etc.",
        pronunciation: " [wel, aiv bin tu de markit/bank/polis..etc.]",
      },
      {
        sentence: "→ I’m coming from the Market/bank/police",
        pronunciation: "[aim kam in from de markit/bank/polis]",
      },

    ],
   
  },

];

const dialogues3 = [
  {
    id: 1,
    title: 'Lesson 3: ASKING SB’S STAY',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A-How long have you been here in Tana?",
        pronunciation: '[hau long hav yu bin hiar in Tana]',
      },
      {
        sentence: 'B- Well, I’ve been here for two years/months now.',
        pronunciation: '[wel, aiv bin hiar for tu: yias/maunths nau]',
      },
      {
        sentence: "- I’ve been+v-ing\nI’ve been here for more than[mor dan] two months.\na I’ve been here for at least[at list] three weeks.\nb I’ve been living here for a long time. \nc I’ve been here since my childhood/birth",
        
        pronunciation: '[aiv bin hiar for mor dan tu: maunths\naiv bin hiar for at list tri: wiks\naiv bin livin hiar for a long taim\naiv bin hiar sins mai tchaildoud/ba:th]',
      },
    
      
    ],
    content2: [
      {
        affirmative: "I AM",
        interrogative: "AM I ?",
        negative: "IM'NOT"
      },
      {
        affirmative: "YOU ARE",
        interrogative: "ARE YOU?",
        negative: "YOU'RE NOT"
      },
      {
        affirmative: "HE/SHE/IT IS",
        interrogative: "IS HE/SHE/IT ?",
        negative: "HE/SHE/IT ISN'T"
      },
      {
        affirmative: "WE ARE",
        interrogative: "ARE IT ?",
        negative: "WE AREN'T"
      },
      {
        affirmative: "THEY ARE",
        interrogative: "ARE THEY ?",
        negative: "THEY AREN'T"
      },

    ],
   
    content3: [
      {
        terms: ["TO BE FULL UP", "TO BE STUFFED"],
        pronunciations: ["[foulap]", "[staft]"]
      },
      {
        terms: ["TO BE ANGRY WITH", "TO BE MAD AT SB"],
        pronunciations: ["[angri]", "[m d]"]
      },
      {
        terms: ["TO BE LAZY", "TO BE A LAZYBONES"],
        pronunciations: ["[leizi]", "[leizibounz]"]
      },
      {
        terms: ["TO BE CRAZY", "TO BE FOOLISH"],
        pronunciations: ["[kreizi]", "[fulish]"]
      },
      {
        terms: ["TO BE AFRAID OF SB", "TO BE SCARED OF SB"],
        pronunciations: ["[efreid]", "[skeird]"]
      },
      {
        terms: ["TO BE MISER", "TO BE STINGY"],
        pronunciations: ["[maiz r]", "[stindji]"]
      },
      {
        terms: ["TO BE SURPRISED BY/AT (to+v-inf)", "TO BE AMAZED BY/AT [emeizt]", "TO BE ASTONISHED BY/AT"],
        pronunciations: ["[s rpraizd]", "[emeizd]", "[ st nisht]"]
      },
      {
        terms: ["TO BE HAPPY FOR SB","TO BE EXCITED", "TO BE PLEASED"],
        pronunciations: ["[h pi]", "[iksaite]", "[plizd]"]
      },
      {
        terms: ["TO BE TIRED", "TO BE EXHAUSTED"],
        pronunciations: ["[taierd]", "[igzostid]"]
      },
      {
        terms: ["TO BE HUNGRY", "TO BE STARVING"],
        pronunciations: ["[hangri]", "[st ving]"]
      },
      {
        terms: ["TO BE GREEDY", "TO BE A GLUTTON"],
        pronunciations: ["[gridi]", "[glat n]"]
      },
      {
        terms: ["TO BE SATISFIED WITH", "TO BE FULFILLED "],
        pronunciations: ["[s tisfaid wid]", "[f lfid]"]
      },
      {
        terms: ["TO BE ASHAMED OF SB/STH", "TO BE EMBARRASSED"],
        pronunciations: ["[ cheimd]", "[emb r st]"]
      },
      {
        terms: ["TO BE FED UP WITH SB", "TO BE SICK OF SB/STH"],
        pronunciations: ["[fedap wid]", "[sikap]"]
      },
      {
        terms: [" TO BE THIRSTY", "TO BE PARCHED"],
        pronunciations: ["[fersti]", "[partrit]"]
      },
      {
        terms: ["TO BE SHY", "TO BE COY"],
        pronunciations: ["[chai]", "[koi]"]
      },
      {
        terms: ["TO BE CUNNING", "TO BE SLY"],
        pronunciations: ["[kanin]", "[slai]"]
      },
    ]
  },
  // ... other dialogues remain unchanged
];

  const dialogues4 = [
  {
    id: 1,
    title: 'Lesson 4: SAYING GOODBYE',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: " Good bye --bye",
        pronunciation: '[gud bai—bai]',
      },
      {
        sentence: '→ So long!',
        pronunciation: '[so long]',
    
      },
      {
        sentence: 'Bye!',
        pronunciation: '[bai]',
      },
      {
        sentence: '→ See you later! [si io leiter] SEE U THEN!',
        pronunciation: '[si io leiter] [si io den]',
      
      },
      {
        sentence: 'Talk to you later!',
        pronunciation: '[tok tu yu leiter]',
      },
      {
        sentence: 'See you soon/around!',
        pronunciation: '[si io sun/araund]',
    
      },
      {
        sentence: 'Take care! [teiker] YOU TOO!',
        pronunciation: '[teiker] [ju tu]',
    
      },
      
    ],
    content2: [
      {
        sentence: "I gotta [gara] go, bye!I’M IN A RUSH= ETRE PRESSE",
        pronunciation: "[ai gata go, bai] [aim in a rach]",
      },
      {
        sentence: "I gotta blow",
        pronunciation: "[ai gata blo]",
      },
      {
        sentence: "Let’s go/move, see ya/you!",
        pronunciation: "[lets go/mouv, si ya/ju]",
      },
     

    ],
    content3: [
      {
        sentence: "Have a good travel/trip/journey",
        pronunciation: "[hav a gud trav l/trip/dj rni]",
      },
      {
        sentence: "Have a safe [seif] trip home, have a nice flight!",
        pronunciation: "[hav a seif trip houm, hav a nais flait]",
      },
      {
        sentence: "Drive safely!",
        pronunciation: "[draiv seifli]",
      },
      
    ],
    content4: [
      {
        sentence: "Enjoy it!",
        pronunciation: "[injoi it]",
      },
      {
        sentence: "Have fun!",
        pronunciation: "[hav fan]",
      },
      {
        sentence: "You guys, serve yourselves!",
        pronunciation: "[ju gais, s v ior se:ves]",
      },
      {
        sentence: "Go ahead, serve yourself!",
        pronunciation: " [ go hed, s v ior se:lf]",
      },
      {
        sentence: "Do you want some / Do you wanna taste",
        pronunciation: "[du yu want sam/du yu wana teist]",
      },
      

    ],
    content5: [
      {
        sentence: "Hey, come (on) in, have a seat please.",
        pronunciation: "[hei, kam (on) in, hav a sit pli:z]",
      },
      {
        sentence: "Take a seat, please.",
        pronunciation: "[teik a sit, pli:z]",
      },
      {
        sentence: "Pull up [poulap] a chair",
        pronunciation: "[poulap] [e tche]",
      },
      {
        sentence: "Please, sit down",
        pronunciation: "[ pli:z, sit daun]",
      },
      {
        sentence: "Make yourself at home!",
        pronunciation: "[meik yorself at houm]",
      },
     

    ],
   
  },

];


const dialogues5 = [
  {
    id: 1,
    title: 'Lesson 5: ASKING SB’S JOB',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: " A- What’s your job/ what do you do for a living?",
        pronunciation: '[watsior…dzab / wat do io do for e livin]',
        translationFr: "Quel est votre métier ? / Que faites-vous dans la vie ?",
        translationMg: "Inona no asanao ? / Inona no ataonao amin’ny fiainana andavanandro ?",
      },
      {
        sentence: '→  What’s your profession',
        pronunciation: '[prafeshen]',
        translationFr: "Quelle est votre profession ?",
        translationMg: "Inona ny asanao manokana ?",
      },
      {
        sentence: 'B- Well, I’m doctor',
        pronunciation: '[oel aim daktor]',
        translationFr: "Eh bien, je suis médecin",
        translationMg: "Eny, dokotera aho",
      },
      {
        sentence: '→ I’m a dentist   I’m a student',
        pronunciation: '[aim e student]',
        translationFr: "Je suis dentiste / Je suis étudiant",
        translationMg: "Dentista aho / Mpianatra aho",
      },
      {
        sentence: 'I’m a teacher',
        pronunciation: '[aim e titrer]',
        translationFr: "Je suis enseignant",
        translationMg: "Mpampianatra aho",
      },
      {
        sentence: '- I’m a businessman ',
        pronunciation: '',
        translationFr: "Je suis un homme d’affaires",
        translationMg: "Mpandraharaha aho",
      },
      {
        sentence: 'I’m a housewife',
        pronunciation: '[aim e haoswaif]',
        translationFr: "Je suis femme au foyer",
        translationMg: "Vehivavy mpikarakara tokantrano aho",
      },
      {
        sentence: '-I’m a housekeeper',
        pronunciation: '[aim e haoskiper]',
        translationFr: "Je suis  femme de ménage",
        translationMg: "Vehivavy mpikarakara tokantrano aho",
      },
      {
        sentence: '- I’m a salesperson',
        pronunciation: '[aim e seilsperson]',
        translationFr: "Je suis Commerçant",
        translationMg: "Mpivarotra",
      },
      {
        sentence: '- I’m an accountant',
        pronunciation: '[aim an akaontant]',
        translationFr: "Je suis comptable",
        translationMg: "Mpanao kaonty aho",
      },      
      {
        sentence: 'A- Well, I’m now jobless / out of work',
        pronunciation: '[wel, aim nao djoblès / aut ov werk]',
        translationFr: "Eh bien, je suis actuellement sans emploi",
        translationMg: "Eny, tsy an’asa aho amin’izao fotoana izao",
      },
      {
        sentence: 'B- Yeah, good luck!',
        pronunciation: '[ié, goud lak!]',
        translationFr: "Oui, bonne chance !",
        translationMg: "Eny, mirary soa!",
      },
      {
        sentence: 'A- But, what’s your marital status/ Are you married?',
        pronunciation: '[bʌt, wats yor marital steɪtəs / ar yu mɛrɪd?]',
        translationFr: "Mais, quelle est votre situation matrimoniale ? / Êtes-vous marié ?",
        translationMg: "Fa maninona, inona ny sata ara-piarahamonina  / Manambady ve ianao?",
      },
      {
        sentence: 'B- Well, I’m married/single/divorced/a widower',
        pronunciation: '[wɛl, aɪm mɛrɪd/ˈsɪŋɡl/ˈdɪvɔrst/ə wɪdoʊər]',
        translationFr: "Eh bien, je suis marié/célibataire/divorcé/fianceé",
        translationMg: "Eny, manambady/tsy manambady/misarabady/ fofom-bady aho",
      }
          
    ],
    content2: [
      {
        sentence: "A- So, what grade are you in? (for High school student)",
        pronunciation: "[so, wʌt greɪd ɑr ju ɪn]",
        translationFr: "Alors, en quelle classe es-tu ? (pour un élève de lycée)",
        translationMg: "Kilasy faha-firy ianao izao? (ho an'ny mpianatra ambaratonga faharoa)",
      },
      
      {
        sentence: "Well, I’m in tenth/eleventh/twelfth grade",
        pronunciation: "",
        translationFr: "Eh bien, je suis en classe de seconde",
        translationMg: "",
      },
      {
        sentence: "A- What year are you in? (for University student)",
        pronunciation: "[watier………ario……in]",
        translationFr: "→ En quelle année êtes-vous à l’université ?",
        translationMg: "",
      },
      {
        sentence: "A- Um, I’m in my first/second year (freshman)",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },

      {
        sentence: ` Types of jobs: Full-time job Part-time Self-employed man Permanent Job Temporary job `,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: ` Day/night shift  Flextime: des horaires à la carte. Clock on/off (in/out) pointer `,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
     

    ],
    content3: [
      {
        sentence: "A- What’s the date today? What’s today’s date?",
        pronunciation: "[wʌts ðə deɪt təˈdeɪ? wʌts təˈdeɪz deɪt?]",
        translationFr: "Quelle est la date aujourd'hui ?",
        translationMg: "Inona ny daty androany?",
      },      
      {
        sentence: " Today is the 1st of September, 2012 (British)",
        pronunciation: "[tə'deɪ ɪz ðə fɜrst ʌv sɪpˈtɛmbər, tuː θaʊzənd twɛlv]",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: "→ It is September 1st, 2012(US)",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: "→ On+day+monthIn+Month+Year",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      
    ],
   
   
  },

];


const dialogues6 = [
  {
    id: 1,
    title: 'Lesson 6: INTRODUCTION',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Can you make yourself known please?",
        pronunciation: "[kæn juː meɪk jɔːˈsɛlf nəʊn pliːz]",
        translationFr: "Pouvez-vous vous faire connaître, s'il vous plaît ?",
        translationMg: "Azonao ve ampahafantarina ny tenanao azafady ?"
      },
      {
        sentence: '→ Can you please introduce yourself?',
        pronunciation: "[kæn juː pliːz ˌɪntrəˈdjuːs jɔːˈsɛlf]",
        translationFr: "Pouvez-vous vous présenter, s'il vous plaît ?",
        translationMg: "Afaka mampahafantatra ny tenanao azafady ve ianao ?"
      },      
      {
        sentence: '→ Can you talk a little bit about yourself?',
        pronunciation: "[kæn juː tɔːk ə ˈlɪtl bɪt əˈbaʊt jɔːˈsɛlf]",
        translationFr: "Pouvez-vous parler un peu de vous ?",
        translationMg: "Azonao hazavaina kely ve ny momba anao ?"
      },      
      {
        sentence: 'B-Yes, I can, well, I’m Randy',
        pronunciation: "[jɛs aɪ kæn wɛl aɪm ˈrændi]",
        translationFr: "Oui, bien sûr, je suis….",
        translationMg: ""
      },
      {
        sentence: '→ I’m from Tulear but I live here in…………..',
        pronunciation: '[aim from………barai liv hirin……]',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ I’m a …..doctor ',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ I’m single/married with two kids, one boy and one girl.',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ I have two brothers and no sister/ I’m an only child [aimen onli traid] ',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: 'Well, what else can I tell you?',
        pronunciation: '[wharelseknaitelio]',
        translationFr: "Quoi d’autre puis-je vous dire?",
        translationMg: "Inona koa no azoko lazaina ankoatr’izay ?",
      },
      {
        sentence: '→ Yeah, I like to speak languages, like French and English.',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },      
      {
        sentence: '→ I think that’s all!',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
     
          
    ],
    content2: [
      {
        sentence: "A- You know Jenny?",
        pronunciation: "",
        translationFr: "→ Tu connais Jenny?",
        translationMg: "",
      },
      
      {
        sentence: "→ Excuse me, let me introduce you to my pal Jenny.",
        pronunciation: "[ixkioz mi, lemi….jast…introdous io to mai……]",
        translationFr: "→ Excuse-moi, laissez-moi présenter mon ",
        translationMg: "→ Mamela ahy ianareo hampahafantatra ny namako.",
      },
      {
        sentence: "→ (Informal) Jenny→Patrick→Patrick→Jenny",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: "→ I’d like youto meet my friend",
        pronunciation: "[aid laik io to mit mai frend …..]",
        translationFr: "J’aimerais présenter mon amie Jenny.",
        translationMg: "",
      },

      {
        sentence: `Do you know each other`,
        pronunciation: "[itr ader]",
        translationFr: "→ Vous vous-connaissez déjà ?",
        translationMg: "Efa mifankafantra ve ianareo ?",
      },
      
    ],
    content3: [
      {
        sentence: "A- Where were you yesterday?",
        pronunciation: "[wer weerio……ieste:dei]",
        translationFr: "- Où étais-tu passé hier ?",
        translationMg: "- Fa t’aiza ianao omaly ?",
      },      
      {
        sentence: "B- Well, I was just at home all day to watch TV",
        pronunciation: "",
        translationFr: "Eh bien j’étais à la maison toute la journé pour regarder la Télé.",
        translationMg: "",
      },
      {
        sentence: "→ I went for a walk with my buddies yesterday.",
        pronunciation: "",
        translationFr: "- Je me suis promené avec mes amies.",
        translationMg: "",
      },
      {
        sentence: "→  Where have you been?",
        pronunciation: "[Wer havio bin]",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: "→ Long time no see you?",
        pronunciation: "",
        translationFr: "- Ça fait longtemps qu’on ne s’est pas vu.",
        translationMg: "- Efa ela izay isika tsy nifankahita ",
      },
      {
        sentence: "→ I haven’t seen you in years?",
        pronunciation: "[aɪ ˈhævənt siːn juː ɪn jɪəz]",
        translationFr: "- Ça fait longtemps qu’on ne s’est pas vu.",
        translationMg: "- Efa ela be izay no tsy nahitako anao."
      },
      {
        sentence: "→ I haven’t seen you in a month of Sundays!",
        pronunciation: "[ai haven’t sin io in e mant of sandeiz]",
        translationFr: "",
        translationMg: "",
      },
     
      
    ],
   
   
  },

];

const dialogues7 = [
  {
    id: 1,
    title: 'Lesson 7: FAMILY RELATIONSHIP ',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Excuse me, what relation are you with Jessy?",
        pronunciation: "",
        translationFr: "Excuse-moi, quel est votre lien parenté avec Jessy?",
        translationMg: "Mpifaninona ianao sy Jessy ? ?"
      },
      {
        sentence: '→ What’s your relationship with him/her?',
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },      
      {
        sentence: '→ Have you met each other?',
        pronunciation: "",
        translationFr: "→ Vous vous connaissez?",
        translationMg: ""
      },      
      {
        sentence: 'B- Well, he/she is my brother/sister/in law',
        pronunciation: "",
        translationFr: "(Beau/belle) frère/ sœur",
        translationMg: "Zaodahy/Zaobavy"
      },
      {
        sentence: '→ Half brother/sister',
        pronunciation: '',
        translationFr: "Demi-frère/sœur",
        translationMg: "---//-------",
      },
      {
        sentence: '→ Cousin [kazin] ',
        pronunciation: '',
        translationFr: "Cousin(e) ",
        translationMg: "Cousin(e)",
      },
      {
        sentence: '→ Nephew[nifio]/ niece [nis]',
        pronunciation: '',
        translationFr: "Neveu/nièce",
        translationMg: " Zana-drahalahy/bavy",
      },
      {
        sentence: '→ Father/mother/ in law ',
        pronunciation: '',
        translationFr: "(Beau/belle) père/mère",
        translationMg: "Rafozanan-dahy/mbavy",
      },
      {
        sentence: '→ Uncle/ aunt[ankel/ont]',
        pronunciation: '',
        translationFr: "Oncle/tante",
        translationMg: "Dadatoa/nenitoa",
      },
      {
        sentence: '→ Husband/ wife[hazband/waif]',
        pronunciation: '',
        translationFr: "Mari/femme",
        translationMg: "Vavy=wife/lahy=husband)",
      },      
      {
        sentence: '→ Son[san]/daughter[doter]/in law',
        pronunciation: '',
        translationFr: "(Beau/belle) fils/fille",
        translationMg: "Zanaka/vinanto/lahy/vavy",
      },
      {
        sentence: '→ Grandson/daughter ',
        pronunciation: '',
        translationFr: "Petit fils/fille",
        translationMg: "Zafy",
      },
      {
        sentence: '→ → Step son/daughter',
        pronunciation: '',
        translationFr: "(Beau/belle) fils/fille",
        translationMg: "Zana-bady",
      },
      {
        sentence: '→ Step father/mother',
        pronunciation: '',
        translationFr: "(Beau/belle) père/mère",
        translationMg: "Rai/reny-kely",
      },
      {
        sentence: '→ Friend[frend] pal/ buddy[badi]',
        pronunciation: '',
        translationFr: "Ami(e)",
        translationMg: "Namako",
      },
      {
        sentence: '→ Workmate[workmeit]/ classmate/neighbor[nibor]',
        pronunciation: '',
        translationFr: "Collégue à l’école /voisin",
        translationMg: "Mpiara-miasa/mianatra Mpifanolo-bodorindrina",
      },
      {
        sentence: '→ → Boy/girlfriend/boo',
        pronunciation: '',
        translationFr: "Petit(e) ami(e)",
        translationMg: "Sipa",
      },
     
          
    ],
    content2: [
      {
        sentence: "A- Oh really,you are brother and sister/friends.",
        pronunciation: "",
        translationFr: "→ Ah, vous êtes frère et sœurs/ des amies.",
        translationMg: "",
      },
      
      {
        sentence: "→ You reallylook like her/him.",
        pronunciation: "",
        translationFr: "→ Vous ressemblez vraiment à elle ",
        translationMg: "→ Ay, mpiralahy ianareo/mitovy aminy be ianao",
      },
      {
        sentence: "→ TO BE BEAUTIFUL/PRETTY/CUTE [biorf0l]",
        pronunciation: "",
        translationFr: "Etre belle/jolie/charmante",
        translationMg: "TSARA TAREHY",
      },
      {
        sentence: "→ TO BE HANDSOME/GOODLOOKING [hensam]",
        pronunciation: "",
        translationFr: "Etre beau",
        translationMg: "TSARA TAREHY (LAHY)",
      },

      {
        sentence: `→ TO BE UGLY/UNATTRACTIVE [agli]`,
        pronunciation: "",
        translationFr: "→ Etre moche/laid(e)",
        translationMg: "RATSY TAREHY",
      },
      {
        sentence: `→ TO BE COOL / KIND / EASY GOING`,
        pronunciation: "",
        translationFr: "→ Etre gentil(le)",
        translationMg: "TSOTRA",
      },
      {
        sentence: `→TO BE STRICT/MEAN/NAUGHTY[noti]`,
        pronunciation: "",
        translationFr: "→ Etre strict(e)/difficil(e)",
        translationMg: "SAROTINY",
      },
      
    ],
    content3: [
      {
        sentence: "A Polygamist",
        pronunciation: "",
        translationFr: "→ Polygamme",
        translationMg: "Maro vady",
      },      
      {
        sentence: "A womanizer (man)/ to be promiscuous",
        pronunciation: "[omanaizer]",
        translationFr: "Un Coureur de jupons / dragueur invétéré",
        translationMg: "",
      },
      {
        sentence: "→ A slut (woman)/ to be promiscuous",
        pronunciation: "",
        translationFr: "→Une salope(argo)/aux mœurs légères",
        translationMg: "",
      },
      {
        sentence: "→ To jilt sb",
        pronunciation: "[Wer havio bin]",
        translationFr: "→ Plaquer / qlq1",
        translationMg: "/misaraka@olona",
      },
      {
        sentence: "→  To break up with sb",
        pronunciation: "",
        translationFr: "\n→ Se séparer de qlq1",
        translationMg: "\n- Efa ela izay isika tsy nifankahita ",
      },
      {
        sentence: "→ To split up with sb",
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },
      {
        sentence: "→ Ex: He’s a womanizer for your information / I’m sad now, because he jilted me.",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      
    ],
   
   
  },

];

const dialogues8 = [
  {
    id: 1,
    title: 'Lesson 8: TELLING THE TIME',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- What time is it, please?",
        pronunciation: "[wataimiz it, pliz]",
        translationFr: "\n→ Quelle heure est-il?",
        translationMg: ""
      },
      {
        sentence: '→ Can you tell me what time it is?',
        pronunciation: "[knio……tel mi..wat taim it iz]",
        translationFr: "\n Peux-tu me dire quelle heure il est ?",
        translationMg: "\n → Amin’ny firy izao azafady? "
      },      
      {
        sentence: '→ You got a watch on you? ',
        pronunciation: "",
        translationFr: "[io gar e wotr on io]",
        translationMg: ""
      },      
      {
        sentence: ' Well, it’s now one o’clock pm ',
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },
      {
        sentence: '→ It is five past/after one p.m. 01:05',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ It is one o five 01:05 (standard)',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ It is quarter past/after one p.m. 01:15 ',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→  It is one fifteen p.m. 01:15 (standard) ',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ It is half past/after one p.m. 01:30 ',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ It is one thirty p.m. 01:30(standard)',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },      
      {
        sentence: '→ It is a quarter to/of two p.m. 1:45',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ It is one forty five p.m. 1:45',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: `→ @ teny Anglisy, ny minitra no tenenina 
        voalohany izay vao ny ora.`,
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ PAST/AFTER = PLUS',
        pronunciation: '',
        translationFr: "",
        translationMg: "MAHERY",
      },
      {
        sentence: '→ TO/OF= MOINS',
        pronunciation: '',
        translationFr: "",
        translationMg: "LATSAKA/TARA",
      },
      {
        sentence: '→ Sorry, my watch is ten minutes slow/fast',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ My watch is broken',
        pronunciation: '',
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: '→ My watch doesn’t work well',
        pronunciation: '[mai wotr dazn workoel]',
        translationFr: "",
        translationMg: "",
      },
     
          
    ],
    content2: [
      {
        sentence: "A- Thank you very much/ thanks a lot/ a million/a bunch",
        pronunciation: "[tenk io veri..matr/ tenks e lat/e milen/e bantr]",
        translationFr: "\nA- Merci beaucoup/infiniment.\n",
        translationMg: "\nMisaotra betsaka tompoko",
      },
      
      {
        sentence: "→ Thanks in advance/thanks beforehand",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: "→ Thanks anyway.\n\nB- Don’t (no) mention it/ you’re welcome it!\n\n",
        pronunciation: "",
        translationFr: "B- Merci d’avance : Misaotra mialoha\n→ Merci quand même !",
        translationMg: "Misaotra ihany",
      },
      {
        sentence: "- It was nothing/ No problem!",
        pronunciation: "",
        translationFr: "→ Il n’y a pas de quoi/ de rien",
        translationMg: "Tsy misy fisaorana",
      },

      {
        sentence: `- The pleasure is mine, sir`,
        pronunciation: "[de pleizer iz main ser]",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: `A- What are you doing now?`,
        pronunciation: "[wat io doin nao]",
        translationFr: "→ Qu’est-ce que tu fais maintenant?",
        translationMg: "Inona no ataonao izao?",
      },
      {
        sentence: `B- Well, I’m just relaxing and watching TV`,
        pronunciation: "[oel…aim jast rilaksin en wotrin tivi]",
        translationFr: "→ Je me repose et regarde la Télé.",
        translationMg: "Mijery TELE sy maka aina fotsiny aho?",
      },
      
      {
        sentence: `→ I’m just waiting for a friend of mine here`,
        pronunciation: "",
        translationFr: "→J’attends un ami à moi",
        translationMg: "Miandry namana eto fotsiny aho.",
      },
      {
        sentence: `A- Hey Rob, can you accompany me to the market/bank?`,
        pronunciation: "[...Knio ekampni mi to de ...]\n",
        translationFr: "→ Salut Robert, peux-tu m’accompagner au marché\n",
        translationMg: "Mna, mba afakamiaraka amiko mian-tsena ve ianao?",
      },
      {
        sentence: `B- Yes/No, I can(’t), I really don’t wanna go out`,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
    ],
    
  },

];

const dialogues9 = [
  {
    id: 1,
    title: 'Lesson 9: MINOR SICKNESS',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- What’s the matter with you?",
        pronunciation: "[wats de marer …]\n",
        translationFr: "- Qu’est ce-que tu as?",
        translationMg: ""
      },
      {
        sentence: '→ What’s wrong[ron]with you?',
        pronunciation: "",
        translationFr: "Qu’est ce qu’il ya ?",
        translationMg: "Fa inona no mahazo anao ? "
      },      
      {
        sentence: '→ Are you alright/ok? ',
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },      
      {
        sentence: 'B- I have a toothache[toufeik]',
        pronunciation: "",
        translationFr: "J’ai mal aux dents",
        translationMg: "Marary nify aho"
      },
      {
        sentence: '- I have a sore throat',
        pronunciation: '',
        translationFr: "J’ai mal a la gorge",
        translationMg: "Marary tenda aho",
      },
      {
        sentence: '- I have a backache[bakeik]',
        pronunciation: '',
        translationFr: "J’ai mal au dos",
        translationMg: "Marary lamosina aho",
      },
      {
        sentence: '- I have a bellyache[beliek]/diarrhoea ',
        pronunciation: '',
        translationFr: "J’ai mal au ventre",
        translationMg: "Marary kibo",
      },
      {
        sentence: '- I have a pain in my chest [trest] ',
        pronunciation: '',
        translationFr: "J’ai mal à la poitrine",
        translationMg: "Marary tratra",
      },
      {
        sentence: '- I got a bump [ai gar e bamp] ',
        pronunciation: '',
        translationFr: "Je me suis coigné ",
        translationMg: "Nidona t@ zvt (dia mivonto)",
      },
      {
        sentence: '- I sprained [sprend] my ankle [enkel]',
        pronunciation: '',
        translationFr: "Je me suis foulé le cheville",
        translationMg: "Folaka ny kitroko",
      },      
      {
        sentence: '- I broke my arm',
        pronunciation: '',
        translationFr: "Je me suis cassé le bras",
        translationMg: "Folaka ny tanako",
      },
      {
        sentence: '- I have a nose blocked [noouz blakt]',
        pronunciation: '',
        translationFr: "J’ai le nez bouché ",
        translationMg: "Voan’ny sery aho",
      },
      {
        sentence: `- I have the flu[flou]`,
        pronunciation: '',
        translationFr: "J’ai la grippe ",
        translationMg: "Mikoaka",
      },
      {
        sentence: '- I have a cough[kaf]/fever ',
        pronunciation: '',
        translationFr: "Je tousse/j’ai de la fièvre",
        translationMg: "Mikoaka aho /mafanafana",
      },
      {
        sentence: '- I have malaria',
        pronunciation: '',
        translationFr: "J’ai la paludisme ",
        translationMg: "Voan’ny tazo aho",
      },
      {
        sentence: 'I have a headache[hedeik]',
        pronunciation: '',
        translationFr: "J’ai mal à la tête",
        translationMg: "Marary loha aho",
      },
      {
        sentence: '- I have a sore eye',
        pronunciation: '',
        translationFr: "J’ai mal aux yeux",
        translationMg: "Marary ny masoko",
      },
      {
        sentence: '- I have a rash ',
        pronunciation: '',
        translationFr: "J’ai une éruption/rougeur",
        translationMg: "Voan’ny tandimerina",
      },
      {
        sentence: '- I have a stomachache[stamakei] ',
        pronunciation: '',
        translationFr: "J’ai mal à l’estomac",
        translationMg: "Marary vavony",
      },
      {
        sentence: '- I have a nosebleed[nôuz blid]',
        pronunciation: '',
        translationFr: "J’ai le nez qui saigne",
        translationMg: "Tonto/voan’ny tefidoha",
      },
       {
        sentence: 'A- What are you allergic to? I’m allergic to shrimp?',
        pronunciation: '',
        translationFr: "À quoi es-tu allérgique ? Je suis allérgique aux crévettes",
        translationMg: "",
      },
       {
        sentence: '→ How long have you been in this condition?',
        pronunciation: '',
        translationFr: "Dépuis quand êtes-vous dans cet état ?",
        translationMg: "Efa misy hafiriana ianao no hoatr’izao?",
      },
       {
        sentence: 'I think you should go to see a doctor.',
        pronunciation: '[ai fink io shoud go to si e daktor]',
        translationFr: "Je pense que tu devrais aller voir un docteur",
        translationMg: "",
      },
     
          
    ],
    content2: [
      {
        sentence: "A- Thank you very much/ thanks a lot/ a million/a bunch",
        pronunciation: "[tenk io veri..matr/ tenks e lat/e milen/e bantr]",
        translationFr: "\nA- Merci beaucoup/infiniment.\n",
        translationMg: "\nMisaotra betsaka tompoko",
      },
      
      {
        sentence: "→ Thanks in advance/thanks beforehand",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: "→ Thanks anyway.\n\nB- Don’t (no) mention it/ you’re welcome it!\n\n",
        pronunciation: "",
        translationFr: "B- Merci d’avance : Misaotra mialoha\n→ Merci quand même !",
        translationMg: "Misaotra ihany",
      },
      {
        sentence: "- It was nothing/ No problem!",
        pronunciation: "",
        translationFr: "→ Il n’y a pas de quoi/ de rien",
        translationMg: "Tsy misy fisaorana",
      },

      {
        sentence: `- The pleasure is mine, sir`,
        pronunciation: "[de pleizer iz main ser]",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: `A- What are you doing now?`,
        pronunciation: "[wat io doin nao]",
        translationFr: "→ Qu’est-ce que tu fais maintenant?",
        translationMg: "Inona no ataonao izao?",
      },
      {
        sentence: `B- Well, I’m just relaxing and watching TV`,
        pronunciation: "[oel…aim jast rilaksin en wotrin tivi]",
        translationFr: "→ Je me repose et regarde la Télé.",
        translationMg: "Mijery TELE sy maka aina fotsiny aho?",
      },
      
      {
        sentence: `→ I’m just waiting for a friend of mine here`,
        pronunciation: "",
        translationFr: "→J’attends un ami à moi",
        translationMg: "Miandry namana eto fotsiny aho.",
      },
      {
        sentence: `A- Hey Rob, can you accompany me to the market/bank?`,
        pronunciation: "[...Knio ekampni mi to de ...]\n",
        translationFr: "→ Salut Robert, peux-tu m’accompagner au marché\n",
        translationMg: "Mna, mba afakamiaraka amiko mian-tsena ve ianao?",
      },
      {
        sentence: `B- Yes/No, I can(’t), I really don’t wanna go out`,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
    ],
    
  },

];

const dialogues10 = [
  {
    id: 1,
    title: 'Lesson 10: UNDERSTANDING AND NOT UNDERSTANDING',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "- This is true.",
        pronunciation: "",
        translationFr: "C’est vrai, vous avez raison.",
        translationMg: " Marina izany"
      },
      {
        sentence: '- That’s true.',
        pronunciation: "",
        translationFr: "C’est vrai, vous avez raison.",
        translationMg: "Marina izany"
      },           
      {
        sentence: '- You’re right.',
        pronunciation: "",
        translationFr: "- Tu as raison.",
        translationMg: "- Marina ianao."
      },          
      {
        sentence: '- That’s for sure',
        pronunciation: "",
        translationFr: "C’est certain.",
        translationMg: "Tsy azo lavina izany."
      },      
      {
        sentence: '- That’s for darn sure.',
        pronunciation: "",
        translationFr: "Ça, c’est sûr et certain.",
        translationMg: "Tena marina mihitsy izany."
      },      
      {
        sentence: '- I agree with you 100 percent.',
        pronunciation: '',
        translationFr: "Je suis d’accord avec toi à 100%",
        translationMg: "Manaiky an’izany 100% aho",
      },
      {
        sentence: "- Ain’t that the truth?",
        pronunciation: "",
        translationFr: "Ça, c’est complètement vrai.",
        translationMg: "Tena marina izany, sa ahoana?",
      },      
    ],
    content2: [
      {
        sentence: "- Do you understand/know what I’m saying?",
        pronunciation: "",
        translationFr: "Tu comprends / sais ce que je dis ?",
        translationMg: "Azonao / fantatrao ve izay lazainy aminao ?",
      },      
      {
        sentence: "Do you grasp/get/gather me?",
        pronunciation: "",
        translationFr: "Tu me saisis / comprends / captes ?",
        translationMg: "Azonao ve ny tian-kambara / ny hevitro ?",
      },      
      {
        sentence: "- I hear what you are saying.",
        pronunciation: "[ai hir watior sain…]",
        translationFr: "Je t’entends bien",
        translationMg: "Henoko tsara ianao",
      },
      {
        sentence: "- I know what you mean",
        pronunciation: "",
        translationFr: "- J’entends ce que t’es entrain de dire.",
        translationMg: "Azoko tsara izany zavatra lazainao izany.",
      },

      {
        sentence: `- I see where you’re coming from.`,
        pronunciation: "",
        translationFr: "Je comprends ton point de vue.",
        translationMg: "Takatro ny fomba fijerinao.",
      },      
      {
        sentence: `- Point well taken.`,
        pronunciation: "",
        translationFr: "Remarque bien reçue.",
        translationMg: "Voaray tsara ny hevitrao.",
      },      
      {
        sentence: `I know what you’re talking about.`,
        pronunciation: "[ai no wat yoor to-king uh-bawt]",
        translationFr: "Je vois de quoi tu parles.",
        translationMg: "Fantatro izay resahinao.",
      },      
      {
        sentence: `- I dig it.`,
        pronunciation: "[ai dig it]",
        translationFr: "J'aime bien." ,// ou "J'aime bien." pour une version plus neutre
        translationMg: "Tiako be izany.", // ou "Mahafinaritra ahy izany."
      },      
      {
        sentence: `I got you/Gotchya/I’m with you.`,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      
    ],

    content3: [
      {
        sentence: "- I don’t know what you are talking about.",
        pronunciation: "[ai don’t no wat yoor to-king uh-bawt]",
        translationFr: "Je ne sais pas ce que tu es entrain de dire.",
        translationMg: "Tsy fantatro izay resahinao.",
      },          
      {
        sentence: "- I don’t know what you are driving at.",
        pronunciation: "[ai dont no wat yoor draï-ving at]",
        translationFr: "Je ne comprends pas où tu veux en venir.",
        translationMg: "Tsy fantatro mihitsy ny tianao holazaina",
      },           
      {
        sentence: "- I don’t see what you mean",
        pronunciation: "[ai don’t si wat you miin]",
        translationFr: "Je ne vois pas ce que tu veux dire.",
        translationMg: "Tsy azoko izay tianao holazaina.",
      },      
      {
        sentence: "→ Pardon me/excuse me/sorry?",
        pronunciation: "[parden mi/ixkioz mi….]",
        translationFr: "Pardon ? / Excuse-moi ? / Désolé ?",
        translationMg: "Azafady? / Miala tsiny?",
      },
      {
        sentence: `→ Come again/say again please?`,
        pronunciation: "[kam uh-gen / sey uh-gen pliz]",
        translationFr: "Tu peux répéter, s'il te plaît ?",
        translationMg: "Azonao averina azafady?",
      },           
      {
        sentence: `→ Can you say that again please?`,
        pronunciation: "[knio…..sei..dad egen…pliz]",
        translationFr: "",
        translationMg: "",
      },      
      {
        sentence: `→ Can you run that by me again?`,
        pronunciation: "[knio……ran dat bai mi..egen]",
        translationFr: "",
        translationMg: "",
      },      
      
    ],
    content4: [
      {
        isIntro: true,
        sentence: "→ Il y a des expressions qu’on utilise tous les jours en Anglais Américain, ce qu’on appelle *Slang* et *Colloquial*, ce qui signifie ‘ARGOT ET FAMILIER’ en français.",
      },
      {
        sentence: "- Roger doger / I can dig it / Gotchya / I see the light / I get the picture : J’ai compris",
      },
      {
        sentence: "- That’s a lot of crap / that’s hooey / that’s a lot of baloney : C’est du n’importe quoi !!",
      }
    ]    
  },
];


const dialogues11 = [
  {
    id: 1,
    title: 'Lesson 11: AGREEING AND DISAGREEING',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "-  Yep ",
        pronunciation: "",
        translationFr: "Oui",
        translationMg: "Eny"
      },
      {
        sentence: '- Yup',
        pronunciation: "",
        translationFr: "Bien-Sur",
        translationMg: "Mazava ho azy"
      },           
      {
        sentence: '- Sure thing',
        pronunciation: "",
        translationFr: "- ÇA, C’EST VRAI",
        translationMg: ""
      },          
      {
        sentence: '- This is true.',
        pronunciation: "",
        translationFr: "C’est vrai.",
        translationMg: "Marina izany.",
      },      
      {
        sentence: '- That’s true.',
        pronunciation: "",
        translationFr: "Vous avez raison",
        translationMg: "Marina ny anao"
      },      
      {
        sentence: '- You’re right',
        pronunciation: '',
        translationFr: "Vous avez raison",
        translationMg: "Marina ny anao",
      },
      {
        sentence: "- That’s for sure.",
        pronunciation: "",
        translationFr: "Je suis d'accord avec toi",
        translationMg: "",
      }, 
      {
        sentence: "- That’s for darn sure.",
        pronunciation: "",
        translationFr: "Ça, c’est sûr et certain.",
        translationMg: "Tsy misy isalasalana mihitsy izany.",
      }, 
      {
        sentence: "- I agree [eigri] with you 100 percent.",
        pronunciation: "",
        translationFr: "Je suis entièrement d’accord avec toi.",
        translationMg: "Manaiky tanteraka aminao aho.",
      }, 
      {
        sentence: "-Ain’t that the truth?",
        pronunciation: "",
        translationFr: "N’est-ce pas la vérité ?",
        translationMg: "",
      },
      {
        sentence: "- I think it’s great",
        pronunciation: "",
        translationFr: "",
        translationMg: "Tsy marina ve izany ?",
      },  

    ],
    content2: [
      {
        sentence: "- No ",
        pronunciation: "",
        translationFr: "Non",
        translationMg: "Tsia",
      },      
      {
        sentence: "- Nope",
        pronunciation: "",
        translationFr: "Non",
        translationMg: "Tsia",
      },      
      {
        sentence: "- No way",
        pronunciation: "",
        translationFr: "Il n'est pas question",
        translationMg: "Tsy mety izany",
      },
      {
        sentence: "- Not a chance",
        pronunciation: "",
        translationFr: "- Aucune chance",
        translationMg: "Tsisy hevitra izany.",
      },

      {
        sentence: `- Not (slang)`,
        pronunciation: "",
        translationFr: "Je pense que non.",
        translationMg: "",
      },      
      {
        sentence: `- - I don’t think so.`,
        pronunciation: "",
        translationFr: "",
        translationMg: "Tsy izany ny fijeriko azy",
      },      
      {
        sentence: `- That’s not true`,
        pronunciation: "",
        translationFr: "Vous avez tort",
        translationMg: "Diso ianao",
      },      
      {
        sentence: `- You’ve got that wrong`,
        pronunciation: "[iov gadat rong]",
        translationFr: "Vous avez tort" ,// ou "J'aime bien." pour une version plus neutre
        translationMg: "Diso ianao", // ou "Mahafinaritra ahy izany."
      },      
      {
        sentence: `Wrong!`,
        pronunciation: "",
        translationFr: "Vous avez tort",
        translationMg: "Diso ianao",
      },
      {
        sentence: `You missed the boat`,
        pronunciation: "",
        translationFr: "Vous avez tort",
        translationMg: "Diso ianao",
      },
      {
        sentence: `You’re off`,
        pronunciation: "",
        translationFr: "Vous avez tort",
        translationMg: "Diso ianao",
      },
      
    ],

    content3: [
      {
        sentence: "- - I disagree completely.",
        pronunciation: "[ai disagri kamplitli]",
        translationFr: "Je ne suis absolument pas d'accord",
        translationMg: "Tena tsy manaiky aho",
      },          
      {
        sentence: "- I couldn’t disagree with you more",
        pronunciation: "",
        translationFr: "Je ne pourrais pas être plus en désaccord avec toi.",
        translationMg: "Tsy afaka mifanohitra aminao bebe kokoa aho.",
      },           
      {
        sentence: "- Bullshit.(taboo)",
        pronunciation: "",
        translationFr: "N'importe quoi. (vulgaire)",
        translationMg: "Tsy marina izany",
      },      
      {
        sentence: "- That’s BS.(mildly vulgar)",
        pronunciation: "",
        translationFr: "C'est du n'importe quoi",
        translationMg: "Tsy marina izany",
      },
      {
        sentence: `- Bull (mildly vulgar)`,
        pronunciation: "",
        translationFr: "Connerie (légèrement vulgaire)",
        translationMg: "Tsy marina izany",
      },           
      {
        sentence: `-  Baloney (slang)`,
        pronunciation: "",
        translationFr: "Des bêtises, des idioties (familier)",
        translationMg: "Tsy marina izany, fitaka (fiteny tsy ofisialy)",
      },      
      {
        sentence: `- That’s out of the question`,
        pronunciation: "[dats aotov de kwestren]",
        translationFr: "C'est hors de question",
        translationMg: "Tsisy fika izany",
      },
      {
        sentence: `- You are lying through your teeth`,
        pronunciation: "[io ar lain…..frou……ior tif] ",
        translationFr: "Vouz mentez sur vos dents",
        translationMg: "Mandainga mihitsy ianao",
      },
      {
        sentence: `-It sucks[saks]/reeks[riks]`,
        pronunciation: "",
        translationFr: "C'est nul / Ça pue",
        translationMg: "Tsy misy dikany",
      },
      {
        sentence: `- - That’s a lot of baloney!`,
        pronunciation: "",
        translationFr: "Ça, C’est nul ! ",
        translationMg: "",
      },      
    ],  
  },
];

const dialogues12 = [
  {
    id: 1,
    title: 'Lesson 12: FOCUSING ATTENTION',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "- Pardon me.(formal) ",
        pronunciation: "[parden mi]",
        translationFr: "Excuse-moi",
        translationMg: "Mba azafady tompoko"
      },
      {
        sentence: '- Excuse me.',
        pronunciation: "",
        translationFr: "Excuse-moi",
        translationMg: "Mba azafady tompoko"
      },           
      {
        sentence: '- Hey!(informal)',
        pronunciation: "",
        translationFr: "- Hey!",
        translationMg: ""
      },          
      {
        sentence: '- Hey, you!(informal)',
        pronunciation: "",
        translationFr: "- Hey, vous!.",
        translationMg: "",
      },      
      {
        sentence: '- You!.',
        pronunciation: "",
        translationFr: "Vous!",
        translationMg: ""
      },      
      {
        sentence: '- Look here.(informal)',
        pronunciation: '',
        translationFr: " Regardez ça ! / Regarde ici !!",
        translationMg: "Jereo ity!",
      },
      {
        sentence: "- Listen up.(informal)",
        pronunciation: "",
        translationFr: "Ecoutez, s'il vous plait",
        translationMg: "Mba henoy kely",
      }, 
      {
        sentence: "- Get a load of this.",
        pronunciation: "[gere lôoud of dis]",
        translationFr: "Regarde ça ! / T'as vu ça !",
        translationMg: "Jereo ity!",
      }, 
      {
        sentence: "- Are you ready for this?",
        pronunciation: "",
        translationFr: "Tu es prêt pour ça ?",
        translationMg: "Vonona ve ianao amin'ity?",
      }, 
      {
        sentence: " Do you have your ear[ir]?(idiomatic)",
        pronunciation: "",
        translationFr: "pouvez-vous ecouter ça ?",
        translationMg: "",
      },
      {
        sentence: "- Can I bend your ear a minute?",
        pronunciation: "[knai bendior ir e min]",
        translationFr: "Je peux te parler une minute ?",
        translationMg: "Afaka miresaka kely aminao ve aho?",
      },
      {
        sentence: "- Take a gander at that",
        pronunciation: "",
        translationFr: "Jette un coup d'œil à ça",
        translationMg: "Topazo maso io",
      }, 
      {
        sentence: " Lookie here.",
        pronunciation: "",
        translationFr: "Regarde-moi ça !",
        translationMg: "Topazo maso ity!",
      }, 
      {
        sentence: "- Can you believe your eyes?",
        pronunciation: "",
        translationFr: "Pouvez-vous croire ça?",
        translationMg: "Mba mino an'izao ve anareo?",
      }, 
      {
        sentence: "- Do my eyes deceive me?",
        pronunciation: "",
        translationFr: "Mes yeux me trompent ou quoi ?",
        translationMg: "",
      }, 
    ],
    content2: [
      {
        sentence: "- I hear you. ",
        pronunciation: "",
        translationFr: "Je vous entends",
        translationMg: "Henoko tsara ka",
      },      
      {
        sentence: "- I heard you.",
        pronunciation: "",
        translationFr: "Je t'ai entendu.",
        translationMg: "Henoko tsara ka",
      },      
      {
        sentence: "- I’m listening.",
        pronunciation: "",
        translationFr: "Je vous ai entendu",
        translationMg: "Henoko tsara ka",
      },
      {
        sentence: "- I’m still here.",
        pronunciation: "",
        translationFr: "- Je suis toujours là.",
        translationMg: "Henoko tsara izy teo.",
      },

      {
        sentence: `- I’m all ears.`,
        pronunciation: "",
        translationFr: "Je vous écoute.",
        translationMg: "",
      },            
    ],

    content3: [
      {
        sentence: "-  Guess what?.",
        pronunciation: "[ges wat]",
        translationFr: "Tu sais quoi?",
        translationMg: "Hitanao?",
      },          
      {
        sentence: "- Have you heard the latest?",
        pronunciation: "- [havio…..jerd…de leitest]",
        translationFr: "Est-ce que tu connais la derniere?.",
        translationMg: "Efa henonao ny vaovao farany?.",
      },           
      {
        sentence: "- - Did you get the scoop? Recent news?",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },          
    ],  
    content4: [
      {
        sentence: "- (You) got a minute?.",
        pronunciation: "[io gare minit]",
        translationFr: "Est-ce que tu as une minute",
        translationMg: "Manana iray minitra kely ve ianao?",
      },          
      {
        sentence: "- - Let’s chew the fat(slang)",
        pronunciation: "",
        translationFr: "On va parler un peu.",
        translationMg: "Ndao hiresaka kely aloha",
      },           
      {
        sentence: "- May I have word with you?",
        pronunciation: "[me ai have ……..widio]",
        translationFr: "Puis-je parle avec toi",
        translationMg: "",
      },      
           
    ],  
  },
];

const DailyDialoguesScreen = () => {
  const AUDIO_DIR = FileSystem.documentDirectory ? FileSystem.documentDirectory + 'audios/' : '';
  const sound = useRef<Audio.Sound | null>(null); // Référence pour le son

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
  
  const playAudio = async (audioFileName: string): Promise<void> => {
    try {
      //const { sound } = await Audio.Sound.createAsync(
        //require(`../assets/audio/${audioFileName}`) // adapte le chemin
      //);
      //await sound.playAsync();
    } catch (error) {
      console.log('Erreur lecture audio', error);
    }
  };

  // Notre dossier audios

 const playOrDownloadAudio = async (fileName: string, remoteUrl: string): Promise<void> => {
  try {
    // Créer le dossier "audios" si nécessaire
    const dirInfo = await FileSystem.getInfoAsync(AUDIO_DIR);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(AUDIO_DIR, { intermediates: true });
    }

    const fileUri = AUDIO_DIR + fileName; // chemin complet du fichier local

    const fileInfo = await FileSystem.getInfoAsync(fileUri);

    if (!fileInfo.exists) {
      console.log('Téléchargement audio...');
      await FileSystem.downloadAsync(remoteUrl, fileUri);
      console.log('Téléchargement terminé');
    } else {
      console.log('Audio déjà téléchargé');
    }

    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });

  } catch (error) {
    console.error('Erreur lors du téléchargement/lecture:', error);
  }
};

  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      rate: 0.9, // Adjust the speech rate
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Dialogues</Text>
       
      <View style={styles.textWithButtonContainer}>
    <Text style={styles.content}>
      Learn to hold a daily conversation in English.
    </Text>

    {/* Bouton pour jouer l'audio */}
    <TouchableOpacity style={styles.audioButton} onPress={playSound}>
      <Ionicons name="volume-high" size={24} color="#8da9c4" />
    </TouchableOpacity>
  </View>

      {dialogues1.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
               title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
              />
            )}
            
          />
          <Card.Content>
          <List.Accordion
        title="GREETING PHRASES"
        left={(props) => <List.Icon {...props} icon="handshake" color='#8da9c4' />}
      >
        {dialogue.content1.map((line, index) => (
          <React.Fragment key={index}>
            <List.Item
              key={`sentence-${index}`}  // Unique key for sentence item
              title={line.sentence}
              description={line.pronunciation} // Add the pronunciation here
              descriptionStyle={styles.pronunciation} // Style for pronunciation text
              right={() => (
                <IconButton
                  icon="volume-high"
                  size={24}
                  onPress={() => speak(line.sentence)}
                  iconColor="#8da9c4"
                />
              )}
            />
            <List.Item
              key={`french-${index}`}  // Unique key for French translation
              title={`French: ${line.frenchTranslation}`}
              description="French Translation"
              descriptionStyle={styles.translation}
            />
            <List.Item
              key={`malagasy-${index}`}  // Unique key for Malagasy translation
              title={`Malagasy: ${line.malagasyTranslation}`}
              description="Malagasy Translation"
              descriptionStyle={styles.translation}
            />
          </React.Fragment>
        ))}
      </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="RESPONDING TO GREETINGS"
              left={(props) => <List.Icon {...props} icon="emoticon-happy" color='#8da9c4' />}
            >
              {dialogue.content2.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the second set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="ASKING THE NEWS"
              left={(props) => <List.Icon {...props} icon="newspaper" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            <List.Accordion
  title="ASKING SB's NAME"
  left={(props) => <List.Icon {...props} icon="account-group" color='#8da9c4' />}
>
  {dialogue.content4.map((line, index) => (
    <List.Item
      key={index}
      title={
        <>
          {line.sentence.split('\n').map((part, idx) => (
            <Text key={idx}>
              {part}
              {'\n'}
            </Text>
          ))}
        </>
      }
      description={line.pronunciation}
      descriptionStyle={styles.pronunciation} // Style for pronunciation text
      right={() => (
        <IconButton
          icon="volume-high"
          size={24}
          onPress={() => speak(line.sentence)}
          iconColor="#8da9c4"
        />
      )}
    />
  ))}
</List.Accordion>


            {/* Fourth Accordion: Asking SB's Origin */}
            <List.Accordion
              title="ASKING SB's ORIGIN"
              left={(props) => <List.Icon {...props} icon="map-marker" color='#8da9c4' />}
            >
              {dialogue.content5.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the fourth set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

          </Card.Content>
        </Card>
      ))}

{dialogues2.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
              />
            )}
          />
          <Card.Content>
            <List.Accordion
              title="ASKING SB’S DWELLING"
              left={(props) => <List.Icon {...props} icon="home-city" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation here
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="ASKING SB’S IF THEY HAVE SIBLINGS"
              left={(props) => <List.Icon {...props} icon="account-group" color='#8da9c4' />}
            >
              {dialogue.content2.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the second set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                  
                />
              ))}
            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="ASKING SB’S DIRECTION"
              left={(props) => <List.Icon {...props} icon="compass" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>
          </Card.Content>
        </Card>
      ))}

{/* Removed dialogues3 block as it is not defined */}
{dialogues3.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
              title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
              subtitle={dialogue.description}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="volume-high"
                  onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
                />
              )}
          />
          <Card.Content>
          <List.Accordion
  title="ASKING SB’S STAY"
  left={(props) => <List.Icon {...props} icon="home-city" color='#8da9c4' />}
>
  {dialogue.content1.map((line, index) => (
    <List.Item
      key={index}
      title={
        <>
          {line.sentence.split('\\n').map((part, idx) => {
            const formattedPart = part.replace(/(I’ve been)/g, (match) => `**${match}**`);
            return (
              <Text key={idx}>
                {formattedPart.split(/\*\*(.*?)\*\*/).map((segment, i) =>
                  i % 2 === 1 ? (
                    <Text key={i} style={{ fontWeight: 'bold' }}>
                      {segment}
                    </Text>
                  ) : (
                    segment
                  )
                )}
                {'\n'}
              </Text>
            );
          })}
        </>
      }
      titleNumberOfLines={0}
      description={line.pronunciation}
      descriptionStyle={styles.pronunciation}
      right={() => (
        <IconButton
          icon="volume-high"
          size={24}
          onPress={() => speak(line.sentence)}
          iconColor="#8da9c4"
        />
      )}
    />
  ))}
</List.Accordion>


<List.Accordion
  title="TO BE"
  left={(props) => <List.Icon {...props} icon="account-group" color='#8da9c4' />}
>
  <View style={{ flexDirection: 'row', padding: 8, backgroundColor: '#f0f0f0' }}>
    <Text style={[styles.header, { flex: 1 }]}>Affirmative</Text>
    <Text style={[styles.header, { flex: 1 }]}>Interrogative</Text>
    <Text style={[styles.header, { flex: 1 }]}>Negative</Text>
  </View>

  {dialogue.content2.map((line, index) => (
    <View key={index} style={styles.row}>
      <Text style={[styles.cell, { flex: 1 }]}>{line.affirmative}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{line.interrogative}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{line.negative}</Text>
      <IconButton
        icon="volume-high"
        size={24}
        onPress={() => speak(`${line.affirmative}, ${line.interrogative}, ${line.negative}`)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>
  
<List.Accordion
  title="EXPRESSIONS"
  left={(props) => <List.Icon {...props} icon="comment" color="#8da9c4" />}
>
  {/* En-tête */}
  <View style={{ flexDirection: 'row', padding: 8, backgroundColor: '#f0f0f0' }}>
    <Text style={[styles.header, { flex: 2 }]}>Expression</Text>
    <Text style={[styles.header, { flex: 1 }]}>Pronunciation</Text>
  </View>

  {/* Lignes regroupées */}
  {dialogue.content3.map((group, index) => (
    <View key={index} style={styles.row}>
      {/* Première colonne : termes regroupés */}
      <View style={{ flex: 2 }}>
        {group.terms.map((term, i) => (
          <Text key={i} style={styles.cell}>
            {term}
          </Text>
        ))}
      </View>

      {/* Deuxième colonne : prononciations regroupées */}
      <View style={{ flex: 1 }}>
        {group.pronunciations.map((pronunciation, i) => (
          <Text key={i} style={styles.cell}>
            {pronunciation}
          </Text>
        ))}
      </View>

      {/* Bouton pour la lecture audio */}
      <IconButton
        icon="volume-high"
        size={24}
        onPress={() => speak(group.terms.join(", ") + " " + group.pronunciations.join(", "))}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>
</Card.Content>
</Card>
))}

    {dialogues4.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
              />
            )}
          />
          <Card.Content>
            <List.Accordion
              title="SAYING GOODBYE"
              left={(props) => <List.Icon {...props} icon="home-city" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation here
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="TAKE A LEAVE"
              left={(props) => <List.Icon {...props} icon="account-group" color='#8da9c4' />}
            >
              {dialogue.content2.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the second set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="TRAVELING (Voyage)"
              left={(props) => <List.Icon {...props} icon="compass" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>
 

             {/* Third Accordion */}
            <List.Accordion
              title="FOR A MEAL (Repas)"
              left={(props) => <List.Icon {...props} icon="food" color='#8da9c4' />}
            >
              {dialogue.content4.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

{/* Third Accordion */}
<List.Accordion
              title="RECEIVING PEOPLE (Acceillir qlq1)"
              left={(props) => <List.Icon {...props} icon="account" color='#8da9c4' />}
            >
              {dialogue.content5.map((line, index) => (
                <List.Item
                  key={index}
                  title={line.sentence}
                  description={line.pronunciation} // Add the pronunciation for the third set
                  descriptionStyle={styles.pronunciation} // Style for pronunciation text
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

          </Card.Content>
        </Card>
      ))}

    {dialogues5.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
              />
            )}
          />
          <Card.Content>
            <List.Accordion
              title=" ASKING SB’S JOB"
              left={(props) => <List.Icon {...props} icon="home-city" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="SCHOOLING"
              left={(props) => <List.Icon {...props} icon="school" color='#8da9c4' />}
            >
               {dialogue.content2.map((line, index) => (
  <List.Item
    key={index}
    title={
      <Text style={{ fontWeight: 'bold' }}>
        {line.sentence} {'\n'}
         Types of jobs: Full-time job {'\n'}
        Part-time {'\n'}
        Self-employed man {'\n'}
        Permanent Job {'\n'}
        Temporary job {'\n'}
        Day/night shift {'\n'}
        Flextime: des horaires à la carte. {'\n'}
        Clock on/off (in/out) pointer
      </Text>
    }
    description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
    descriptionStyle={styles.pronunciation}
    right={() => (
      <IconButton
        icon="volume-high"
        size={24}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    )}
  />
))}

            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="GENERAL QUESTION"
              left={(props) => <List.Icon {...props} icon="information" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>
 
          </Card.Content>
        </Card>
      ))}


    {dialogues6.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
              />
            )}
          />
          <Card.Content>
            <List.Accordion
              title="PRESENTATION"
              left={(props) => <List.Icon {...props} icon="account" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="INTRODUCING PEOPLE"
              left={(props) => <List.Icon {...props} icon="account" color='#8da9c4' />}
            >
               {dialogue.content2.map((line, index) => (
  <List.Item
    key={index}
    title={
      <Text style={{ fontWeight: 'bold' }}>
        {line.sentence} {'\n'}
         Types of jobs: Full-time job {'\n'}
        Part-time {'\n'}
        Self-employed man {'\n'}
        Permanent Job {'\n'}
        Temporary job {'\n'}
        Day/night shift {'\n'}
        Flextime: des horaires à la carte. {'\n'}
        Clock on/off (in/out) pointer
      </Text>
    }
    description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
    descriptionStyle={styles.pronunciation}
    right={() => (
      <IconButton
        icon="volume-high"
        size={24}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    )}
  />
))}

            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="ASKING SB WHERE HE WAS"
              left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>
 
          </Card.Content>
        </Card>
      ))}

     
    {dialogues7.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
            right={(props) => (
              <IconButton
                {...props}
                icon="volume-high"
                onPress={() => playAudio('audioFileName.mp3')} // Replace 'audioFileName.mp3' with the actual file name
              />
            )}
          />
          <Card.Content>
            <List.Accordion
              title="FAMILY RELATIONSHIP"
              left={(props) => <List.Icon {...props} icon="account-group" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="COMPLIMENT"
              left={(props) => <List.Icon {...props} icon="emoticon-happy" color='#8da9c4' />}
            >
               {dialogue.content2.map((line, index) => (
  <List.Item
    key={index}
    title={
      <Text style={{ fontWeight: 'bold' }}>
        {line.sentence} {'\n'}
         Types of jobs: Full-time job {'\n'}
        Part-time {'\n'}
        Self-employed man {'\n'}
        Permanent Job {'\n'}
        Temporary job {'\n'}
        Day/night shift {'\n'}
        Flextime: des horaires à la carte. {'\n'}
        Clock on/off (in/out) pointer
      </Text>
    }
    description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
    descriptionStyle={styles.pronunciation}
    right={() => (
      <IconButton
        icon="volume-high"
        size={24}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    )}
  />
))}

            </List.Accordion>

            {/* Third Accordion */}
            <List.Accordion
              title="EXPRESSIONS"
              left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
            >
              {dialogue.content3.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>
 
          </Card.Content>
        </Card>
      ))}

    {dialogues8.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
          />
          <Card.Content>
            <List.Accordion
              title="TELLING THE TIME"
              left={(props) => <List.Icon {...props} icon="clock" color='#8da9c4' />}
            >
              {dialogue.content1.map((line, index) => (
                <List.Item
                  key={index}
                  title={<Text style={{ fontWeight: 'bold',flexWrap: 'nowrap' }}>
                    {line.sentence}</Text>}
                  description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                  descriptionStyle={styles.pronunciation}
                  right={() => (
                    <IconButton
                      icon="volume-high"
                      size={24}
                      onPress={() => speak(line.sentence)}
                      iconColor="#8da9c4"
                    />
                  )}
                />
              ))}
            </List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="SAYING THANK YOU"
              left={(props) => <List.Icon {...props} icon="emoticon-happy" color='#8da9c4' />}
            >
               {dialogue.content2.map((line, index) => (
                <List.Item
                key={index}
                title={() => (
                  <Text style={{ fontWeight: 'bold' }}>
                    {line.sentence}
                  </Text>
                )}
                description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                descriptionStyle={styles.pronunciation}
                right={() => (
                  <IconButton
                    icon="volume-high"
                    size={24}
                    onPress={() => speak(line.sentence)}
                    iconColor="#8da9c4"
                  />
                )}
              />              
             ))}

            </List.Accordion>
          </Card.Content>
        </Card>
      ))}


{dialogues9.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
          />
          <Card.Content>
            <List.Accordion
              title="MINOR SICKNESS"
               left={(props) => (
               <List.Icon {...props} icon="hospital" color="#8da9c4" />
               )}
              >
             {dialogue.content1.map((line, index) => (
          <View
              key={index}
              style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
        >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

            {/* Second Accordion */}
            <List.Accordion
              title="SAYING THANK YOU"
              left={(props) => <List.Icon {...props} icon="emoticon-happy" color='#8da9c4' />}
            >
               {dialogue.content2.map((line, index) => (
                <List.Item
                key={index}
                title={() => (
                  <Text style={{ fontWeight: 'bold' }}>
                    {line.sentence}
                  </Text>
                )}
                description={`${line.pronunciation}  ${line.translationFr}\n  ${line.translationMg}`}
                descriptionStyle={styles.pronunciation}
                right={() => (
                  <IconButton
                    icon="volume-high"
                    size={24}
                    onPress={() => speak(line.sentence)}
                    iconColor="#8da9c4"
                  />
                )}
              />              
             ))}

            </List.Accordion>
          </Card.Content>
        </Card>
      ))}


{dialogues10.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
          />
          <Card.Content>
          <List.Accordion
  title="STATING YOUR CONCURRENCE"
  left={(props) => (
    <List.Icon {...props} icon="handshake" color="#8da9c4" />
  )}
>
  {dialogue.content1.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>


            {/* Second Accordion */}
            <List.Accordion
  title="STATING THAT YOU UNDERSTAND"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content2.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

          {/* Third Accordion */}
          <List.Accordion
  title="STATING THAT YOU DON'T UNDERSTAND"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content3.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

      {/* Fourth Accordion */}
<List.Accordion
  title="Conversational Tips"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content4.map((line, index) => (
    line.isIntro ? (
      <View key={index} style={{ padding: 12 }}>
        <Text style={{ fontStyle: 'italic', color: '#444' }}>{line.sentence}</Text>
      </View>
    ) : (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        {/* Phrase en anglais à gauche */}
        <View style={{ flex: 1, paddingRight: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        </View>

        {/* Bouton audio */}
        <IconButton
          icon="volume-high"
          size={20}
          onPress={() => speak(line.sentence)}
          iconColor="#8da9c4"
        />
      </View>
    )
  ))}
</List.Accordion>
          </Card.Content>
        </Card>
      ))}

    
{dialogues11.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
          />
          <Card.Content>
          <List.Accordion
  title="STATING YOUR ACCEPTANCE"
  left={(props) => (
    <List.Icon {...props} icon="handshake" color="#8da9c4" />
  )}
>
  {dialogue.content1.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>


            {/* Second Accordion */}
            <List.Accordion
  title="STATING THAT YOU DISAGREE"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content2.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

          {/* Third Accordion */}
          <List.Accordion
  title="STATING STRONG DISAGREEMENT"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content3.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

          </Card.Content>
        </Card>
      ))}


{dialogues12.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
            
            title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
          />
          <Card.Content>
          <List.Accordion
  title="GETTING SB’S ATTENTION/TO LISTEN"
  left={(props) => (
    <List.Icon {...props} icon="handshake" color="#8da9c4" />
  )}
>
  {dialogue.content1.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>


            {/* Second Accordion */}
            <List.Accordion
  title="CONFERMING THAT YOU ARE PAYING ATT"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content2.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

          {/* Third Accordion */}
          <List.Accordion
  title="LAUNCHING THE CONVERSATION"
  left={(props) => (
    <List.Icon {...props} icon="emoticon-confused" color="#8da9c4" />
  )}
>
  {dialogue.content3.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

{/* Fourth Accordion */}
<List.Accordion
  title="INVITING SB TO TALK"
  left={(props) => (
    <List.Icon {...props} icon="comment" color="#8da9c4" />
  )}
>
  {dialogue.content4.map((line, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {/* Phrase en anglais à gauche */}
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{line.sentence}</Text>
        <Text style={{ color: '#555' }}>{line.pronunciation}</Text>
      </View>

      {/* Traductions à droite */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#555' }}>{line.translationFr}</Text>
        <Text style={{ color: '#555' }}>{line.translationMg}</Text>
      </View>

      {/* Bouton audio à droite (en haut aligné) */}
      <IconButton
        icon="volume-high"
        size={20}
        onPress={() => speak(line.sentence)}
        iconColor="#8da9c4"
      />
    </View>
  ))}
</List.Accordion>

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
    color: '#c75146',
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    marginTop: 1,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
  },
  pronunciation: {
    fontStyle: 'italic', // Style for the pronunciation
    color: '#555',
    marginTop: 1,
  },
  translation: {
    fontStyle: 'italic', // Style for the translation
    color: '#888',
    marginTop: 2,
  },
  cell: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: '#f0f0f0',
  },
  textWithButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligne verticalement le texte et le bouton
    justifyContent: 'space-between', // Optionnel, permet d'ajuster l'espacement
    marginTop: 0, // Ajoute de l'espace entre le titre et cette ligne
  },
  audioButton: {
    marginLeft: 30,
    padding: 10,
  },
});

export default DailyDialoguesScreen;
