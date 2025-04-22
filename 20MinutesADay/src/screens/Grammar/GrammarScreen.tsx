import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text as RNText } from 'react-native';
import { Card, List, Text, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const grammarRules1 = [
  {
    id: 1,
    title: 'Lesson 13: SIMPLE PRESENT TENSE',
    description: 'BASIC GRAMMARS',
    content1: [
      { 
        sentence: 'A- What do you do in your spare/free time?', 
        pronunciation: "[ wot - doo - yoo - doo - in - yoor - spare - free - taym ]",
        frenchTranslation: "A- Que fais-tu pendant ton temps libre ?",
        malagasyTranslation: "A- Inona no ataonao amin'ny fotoana malalaka?"
      },
      { 
        sentence: 'B- Well, in my spare time, I like to stay home \n\n\n and read a book, sometimes, I watch TV.', 
        pronunciation: "[ wel - in - my - spare - taym - aye - like - to - stay - home - and - reed - a - book - sam - taymz - aye - watch - tee - vee ]",
        frenchTranslation: "B- Eh bien, pendant mon temps libre, j'aime rester à la maison et lire un livre, parfois je regarde la télévision.",
        malagasyTranslation: "B- Eny, amin'ny fotoana malalaka dia tiako ny mijanona ao an-trano sy mamaky boky, indraindray aho mijery fahitalavitra."
      },
    ],
    content2: [
      {
        vocabulary: "To like(to)+ving(v.inf)",
        frenchTranslation: "Aimer",
        malagasyTranslation: "Mitia"
      },
      {
        vocabulary: "To visit my friends",
        frenchTranslation: "Visiter mes amis",
        malagasyTranslation: "Mamangy ny namana"
      },
      {
        vocabulary: "To go for a walk with pals",
        frenchTranslation: "Se promener",
        malagasyTranslation: "Mitsangatsangana"
      },
      {
        vocabulary: "To go (on) window-shopping",
        frenchTranslation: "Faire du lèche-vitrine",
        malagasyTranslation: "Mandeha mijery zvt any an-tsena na tsy hividy"
      },
      {
        vocabulary: "To make my bed",
        frenchTranslation: "Faire mon lit",
        malagasyTranslation: "Mandamina fandriana"
      },
      {
        vocabulary: "To clean the house",
        frenchTranslation: "Nettoyer la maison",
        malagasyTranslation: "Manadio ny trano"
      },
      {
        vocabulary: "To arrange sth",
        frenchTranslation: "Ranger qqch",
        malagasyTranslation: " Mametraka zvt"
      },
      {
        vocabulary: "To cook",
        frenchTranslation: "Faire la cuisine",
        malagasyTranslation: "Mahandro"
      },
      {
        vocabulary: "To do the laundry [londri]",
        frenchTranslation: "Faire la lessive",
        malagasyTranslation: "Manasa lamba"
      },
      {
        vocabulary: "To do the chores [trors]",
        frenchTranslation: "Faire les menages",
        malagasyTranslation: "Manao zvt rehetra ao an-trano"
      },
      {
        vocabulary: "To do the dishes [dishiz]",
        frenchTranslation: "Faire la vaisselle",
        malagasyTranslation: "Manasa vilia"
      },
      {
        vocabulary: "To bake cake [beik keik]",
        frenchTranslation: "Faire un gâteau",
        malagasyTranslation: "Manamboatra mofo mamy"
      },
      {
        vocabulary: "To have fun with [hav fan]",
        frenchTranslation: "S’amuser avec",
        malagasyTranslation: "Manala azy miarak@ namana"
      },
      
    ],
    content3: [
      {
        title: "Simple Present Tense",
        description: `                                       [S + V + C].

        Le Présent Simple est utilisé pour parler de ce qui est 
        toujours vrai ou habituel. 
          Il s'emploie notamment dans les cas suivants : 
        1. Ce qui est toujours vrai:
          Ex: "The sun rises in the east." → Le soleil se lève à l'est.
        2. Ce qui est d'habitude le cas:
          Ex: "I learn English every day." → J’apprends l’Anglais tous les jours.
        
        → AMPIASAINA NY PRESENT SIMPLE AMIN’NY ZAVATRA ATAO ISAN’ANDRO/ MAHAZATRA`
        
      }
    ],
    content4: [
      {
        table: [
          { adverb: "EVERYDAY/WEEK/MONTH [evridei]",
            frenchTranslation: "TOUT LE JOUR ", 
            malagasyTranslation: "ISAN’ANDRO/KERINANDRO/VOLANA" },
          { adverb: "EVERY TIME [evritaim]", 
            frenchTranslation: "TOUT LE TEMPS /A CHAQUE FOIS", 
            malagasyTranslation: "ISAKIN'NY / FOANA" },
          { adverb: "ALL THE TIME[oldtaim]", 
            frenchTranslation: " TOUT LE TEMPS", 
            malagasyTranslation: "FOANA" },
          { adverb: "EACH DAY[ichdei]", 
            frenchTranslation: "CHAQUE JOUR", 
            malagasyTranslation: "ISAN’ANDRO" },
          
        ],
        example: "Ex: (Every time) I go to visit my family every day/all the time/each day, (I’m happy.)"
      }
    ]

  }
];

const grammarRules2 = [
  {
    id: 1,
    title: 'Lesson 14: SIMPLE PRESENT TENSE [S + ADV.FREQ + V ]',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        vocabulary: "SOMETIMES [samtaimz]",
        frenchTranslation: "PARFOIS",
        malagasyTranslation: "INDRAINDRAY"
      },
      {
        vocabulary: "ALWAYS [olweiz]",
        frenchTranslation: "TOUJOURS",
        malagasyTranslation: "FOANA FOANA"
      },
      {
        vocabulary: "OFTEN [ofn]",
        frenchTranslation: "SOUVENT",
        malagasyTranslation: "MATETIKA"
      },
      {
        vocabulary: "OCASSIONALLY [okeizhnali]",
        frenchTranslation: "OCASSIONNELLEMENT",
        malagasyTranslation: "INDRAINDRAY"
        
      },
      {
        vocabulary: "USUALLY [yujouli]",
        frenchTranslation: "HABITUELLEMENT",
        malagasyTranslation: "MAHAZATRA"
      },
      
    ],
    content2: [
      { 
        sentence: '→We often use the auxiliary TO DO in the SIMPLE PRESENT TENSE, in the negative and interrogative sentence', 
        frenchTranslation: " →On emploi souvent l'auxiliaire TO DO dans le PRESENT SIMPLE, dans la phrase négative et interrogative",
        malagasyTranslation: "→ Maro ny fampiasana ny TO DO amin'ny SIMPLE PRESENT TENSE, amin'ny fampahalalana sy fanontaniana",
        affirmative1: 'I/you like.',
        negative1: "I/you don't like.",
        interrogative1: 'Do I/you like?',
        affirmative2: 'He/she/it likes.',
        negative2: "He/she/it doesn't like.",
        interrogative2: 'Does he/she/it like?',
        affirmative3: 'We/they like.',
        negative3: "We/they don't like.",
        interrogative3: 'Do we/they like?'
        
      },
    ],
    content3: [
      {
        table: [
          { linkingWords: "And", frenchTranslation: "Et",  malagasyTranslation: "Ary" },
          { linkingWords: "And then", frenchTranslation: " Et puis",  malagasyTranslation: "Avy eo" },
          { linkingWords: "After that", frenchTranslation: "Après cela",  malagasyTranslation: "Rehefa avy eo" },
          { linkingWords: "Before+v.ing", frenchTranslation: "Avant+v+inf",  malagasyTranslation: "Alohan'ny" },
          { linkingWords: "After+v.ing", frenchTranslation: "Après+v+inf",  malagasyTranslation: "Aorian'ny" },
          { linkingWords: "That’s why", frenchTranslation: "C’est pourquoi",  malagasyTranslation: "Ka izany indrindra" },
          { linkingWords: "To+v.inf/for+v.ing", frenchTranslation: "Pour",  malagasyTranslation: "Mba" },
          { linkingWords: "If not", frenchTranslation: "Sinon",  malagasyTranslation: "Raha tsy" },
        ],
       
      }
    ],
  }
];


const grammarRules3 = [
  {
    id: 1,
    title: 'Lesson 15: EXERCISES OF SIMPLE PRESENT TENSE',
    description: 'BASIC GRAMMARS',
    content1: [
      { 
        sentence: 'What time do you get up every morning?', 
        pronunciation: "[ wot - taym - doo - yoo - get - up - evri - morn - ing ]",
        frenchTranslation: " A quelle heure tu te lèves tous les matins?",
        malagasyTranslation: "Amin'ny firy ianao mifoha isa-maraina?"
      },
     
      
    ],
    
    content2: [
      {
        table: [
          { verbs: "To get up[gerap]", 
            frenchTranslation: " Se lever", },
          { verbs: "To go to the bathroom", frenchTranslation: "Aller à la douche", },
          { verbs: "To take a shower[teik esawer]", frenchTranslation: "Prendre une douche", },
          { verbs: "To brush [brash] my teeth", frenchTranslation: "Brosser les dents", },
          { verbs: "To comb [kôoum] my hair", frenchTranslation: "Peigner les cheveux", },
          { verbs: "To wash my face", frenchTranslation: "Se laver le visage", },
          { verbs: "To rinse[rinz] my face", frenchTranslation: "Se rincer le visage", },
          { verbs: "To shave", frenchTranslation: "Se raser", },
          { verbs: "To prepare breakfast", frenchTranslation: "Préparer le petit déjeuner", },
          { verbs: "To eat breakfast", frenchTranslation: "Prendre le petit déjeuner", },
          { verbs: "To get dressed[get drest]", frenchTranslation: "S'habiller", },
          { verbs: "To put on make-up", frenchTranslation: "Se maquiller", },
          { verbs: "To get ready to go out", frenchTranslation: "S’apprêter", },
          { verbs: "To put my shoes on", frenchTranslation: "Mettre les chaussures", },
          { verbs: "To leave home for school", frenchTranslation: "Sortir de la maison", },




        
        ],
       
      }
    ],
    
    content3: [
      { sentence: "→ ANSWER – REPONSE – VALINY" },
      { sentence: "Every morning, I get up at 5:30 and then I go to the bathroom to take a shower, to brush my teeth, and comb my hair." },
      { sentence: "I sometimes prepare breakfast for my family, and before getting dressed I eat breakfast, after that I put my shoes [souz] on and then I get everything ready and leave home for school at around 6:15." },
      { sentence: "I gotta leave home early, just because of the traffic jam, if not, I’m late, but I actually start at 8:30 am." },
      { sentence: "I think that’s all." },
      { sentence: "→ HOW OFTEN [hao ofen] DO YOU LEARN ENGLISH?" },
      { sentence: "I learn English once/twice [towais] a week." },
      { sentence: "I learn English three/four times a week." }
    ],
    content4: [
      {
        title: "EXERCISES - FILL IN THE BLANKS",
        instructions: "FILL IN THE BLANKS WITH THE CORRECT FORM OF THE WORDS GIVEN",
        questions: [
          "1. Joanne __________ (work) eight hours a day.",
          "2. Tonight we __________ (see) a play at the theatre.",
          "3. Who __________ you __________ (speak) on the phone every day?",
          "4. He __________ (not know) him very well.",
          "5. What will you do if she __________ (come) late?",
          "6. My wife __________ (like) coffee for breakfast.",
          "7. What __________ Tom usually __________ (have) for breakfast?",
          "8. Your train __________ (leave) at 17.25 from platform 3."
        ]
      }
    ]
        
  }
];

const grammarRules4 = [
  {
    id: 1,
    title: 'Lesson 16: EXPRESSING OPINIONS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        sentence: "A- WHAT DO YOU THINK ABOUT ENGLISH?",
        pronunciation: "[wat do io fink ebaot eninglish]",
        translationFr: "\n→ Que pensez-vous de la langue Anglaise?",
        translationMg: ""
      },
      {
        sentence: 'B- Well, I think that English language is very important and I like it.',
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },           
    ],
    
    content2: [
      {
        sentence: "→ I THINK THAT… ",
        pronunciation: "",
        translationFr: "Je pense que...",
        translationMg: "Raha ny hevitro dia",
      },      
      {
        sentence: "→ I RECKON[reken] THAT…",
        pronunciation: "",
        translationFr: "En ce qui me concerne de",
        translationMg: "",
      },      
      {
        sentence: "→ AS FAR AS I’M CONCERNED…",
        pronunciation: "[az faraz aim kansernd]",
        translationFr: "Quant à moi/pour moi...",
        translationMg: "Raha ny amiko",
      },
      {
        sentence: "→ TO ME/AS FOR ME, I CAN SAY THAT",
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: `→ IN MY POINT OF VIEW….`,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },
      {
        sentence: `→ IN MY OPINION….`,
        pronunciation: "",
        translationFr: "Au Sujet de..",
        translationMg: "",
      },
      {
        sentence: `→ WITH REGARDS TO...`,
        pronunciation: "",
        translationFr: "",
        translationMg: "",
      },            
    ],
    
    content3: [
      {
        sentence: "→ TO BE GOOD FOR SB / AT STH (TO + INF.v)",
        translation: "Être bon pour quelqu’un / bon en quelque chose / mahay",
        examples: [
          { 
            sentence: "Ex: English is good for me.",
            translation: ""
          },
          {
            sentence: "Ex: I’m not good at English.",
            translation: ""
          }
        ]
      },
      {
        sentence: "→ TO BE BAD FOR SB / AT / IN STH (TO + INF.v)",
        translation: "Être mauvais pour quelqu’un / nul en quelque chose / tsy mahay",
        examples: [
          {
            sentence: "Ex: I’m so bad in English, that’s why I learn it.",
            translation: ""
          }
        ]
      },
      {
        sentence: "→ TO BE DIFFICULT FOR SB / TO + INF.v",
        translation: "Être difficile pour / de + verbe à l’infinitif = Sarotra",
        examples: [
          {
            sentence: "Ex: It is difficult to master English fastly.",
            translation: ""
          }
        ]
      },
      {
        sentence: "→ TO BE EASY FOR SB / TO + INF.v",
        translation: "Être facile pour quelqu’un / de = Mora",
        examples: [
          {
            sentence: "EX: Do you think it is easy to speak English in two months?",
            translation: ""
          }
        ]
      },
      {
        sentence: "→ TO BE IMPORTANT FOR SB / TO + INF.v",
        translation: "Être important pour quelqu’un / de = Zava-dehibe",
        examples: [
          {
            sentence: "Ex: As for me, it is important to know English.",
            translation: ""
          }
        ]
      },
      {
        sentence: "→ TO BE USEFUL FOR SB / TO + INF.v",
        translation: "Être utile pour quelqu’un / Ilaina",
        examples: [
          {
            sentence: "Ex: Of course, it is useful for everybody to speak English.",
            translation: ""
          }
        ]
      },
      {
        sentence: "→ TO BE USELESS[iozles]FOR SB/TO +INF.v",
        translation: "Etre inutile pour qlq1/Tsy ILAINA",
        examples: [
          {
            sentence: "Ex: It is useless to do things which you don’t like.",
            translation: ""
          }
        ]
      }
    ],         
  }
];

const grammarRules5 = [
  {
    id: 1,
    title: 'Lesson 17: LINKING WORDS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        sentence: "→ First, firstly, first of all, in the first place,",
        pronunciation: "",
        translationFr: "\n→ Premièrement/D’abord",
        translationMg: ""
      },
      {
        sentence: '→ First and foremost,',
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },
      {
        sentence: '→ To begin / start with..',
        pronunciation: "",
        translationFr: "",
        translationMg: ""
      },            
    ],
    
    content2: [
      {
        linking: "→ Firstly, Secondly, thirdly, then, next",
        frenchTranslation: "   Prémierement/Deuxiément",
        malagasyTranslation: ""
      },
      {
        linking: "→ As a matter of fact, in fact",
        frenchTranslation: "→ (en fait) ",
        malagasyTranslation: "Raha tena marina"
      },
      {
        linking: "→ Actually [aktrouali]",
        frenchTranslation: "→ effectivement/vraiment ",
        malagasyTranslation: "Raha tena marina"
      },
      {
        linking: "→ Anyway",
        frenchTranslation: "→ de toute façon ",
        malagasyTranslation: "Na dia izany aza"
      },
      {
        linking: "→ Even if/even though",
        frenchTranslation: "→  Même si… ",
        malagasyTranslation: "Na dia…"
      },
      {
        linking: "→ In spite of that/ despite of that",
        frenchTranslation: "→ Malgré tout ça… ",
        malagasyTranslation: "Na dia eo aza izany..."
      },
      {
        linking: "→ No matter what/whatever ",
        frenchTranslation: "→ Quoi que…  ",
        malagasyTranslation: "Na inona na inona"
      },
      {
        linking: "→ Unless/except/ Apart from",
        frenchTranslation: "→ Sauf/ excépter ",
        malagasyTranslation: "Afa tsy/Raha tsyhoe.."
      },
      {
        linking: "→ If not",
        frenchTranslation: "→ Sinon",
        malagasyTranslation: "Raha tsy izany"
      },
      {
        linking: "→ Apart from that/in addition/besides",
        frenchTranslation: "→ à part ça",
        malagasyTranslation: "Ho fanampin’izay"
      },
      {
        linking: "→ On the one hand",
        frenchTranslation: "→ D’une part",
        malagasyTranslation: "@ lafiny voalohany"
      },
      {
        linking: "→ On the other hand",
        frenchTranslation: "→ D’autre part",
        malagasyTranslation: "@ lafiny hafa koa dia.."
      },
      {
        linking: "→ But/however/although",
        frenchTranslation: "→ mais/cependant",
        malagasyTranslation: "Nefa/Kanefa"
      },
      {
        linking: "→ Not only…..but also",
        frenchTranslation: "→ Pas seulement…mais aussi",
        malagasyTranslation: "Tsy vitan’ny hoe….fa"
      },
      {
        linking: "→ That’s why, that’s the reason why",
        frenchTranslation: "→ C’est pour cela",
        malagasyTranslation: "Ka izany indrindra"
      },
      {
        linking: "→ So/Especially[espesli]",
        frenchTranslation: "→ Alors/ Surtout",
        malagasyTranslation: "Ka noho izany/Indrindra2"
      },
      {
        linking: "→ Because of",
        frenchTranslation: "→ A cause de",
        malagasyTranslation: "Noho ny"
      },
      {
        linking: "→ Thanks to",
        frenchTranslation: "→ Grâce à",
        malagasyTranslation: "Isaorana an’ny…"
      },
      {
        linking: "→ To, in order to, so as to",
        frenchTranslation: "→ A fin de ",
        malagasyTranslation: "Mba"
      },
      {
        linking: "→ For + nom/ pronom + TO + v",
        frenchTranslation: "→ Pour que… ",
        malagasyTranslation: "Mba"
      },
      {
        linking: "→ Provided/providing that",
        frenchTranslation: "→ A condition que ",
        malagasyTranslation: "Raha ohatra ka"
      },
      {
        linking: "→ On condition that",
        frenchTranslation: "→ A condition que ",
        malagasyTranslation: "Raha ohatra ka"
      },
      {
        linking: "→ So long as / as long as",
        frenchTranslation: "→ En tant que/ tant que  ",
        malagasyTranslation: "Raha ohatra ka/@ maha"
      },
      {
        linking: "→ As soon as/once",
        frenchTranslation: "→ Dès que /une fois ",
        malagasyTranslation: "Raha vatany…"
      },
      {
        linking: "→ Suddenly/all of a sudden[saden]",
        frenchTranslation: "→ Soudainement",
        malagasyTranslation: "Tampotampoka teo"
      },

    ],
    
    content3: [
      {
        sentence:`  
        A- What do you think about English?
        → Well, to begin with, I’ve been learning English for at least three weeks now, and I think
that English is very important, and I like it a lot, why? Because, I need it for my future life.
Not onlyis it important but also it is an international language, and I reckon that nobody
can avoid this language anymore; everybody has to learn it if they want to communicate
with the outside world. Yeah, to me, English is difficult, in terms of pronounciation, and it
is easy to forget. However, I’m gonna do best to master it, because I think I have an
apportunity to speak quickly, hopefully by this Book and CD. Um, I think that’s all.
        `,
      },
    ],         
  }
];


const grammarRules6 = [
  {
    id: 1,
    title: 'Lesson 18: PRESENT PROGRESSIVE TENSE',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "PRESENT PROGRESSIVE TENSE",
        description: `                          [TO BE + V(ING) +C].

        → Le Présent Progressif (ou PresentContinuous) s'emploie pour parler de: 
         Ce qui se passe maintenant: 
        → Ampiasaina ny PRESENT CONTINUOUS amin’ny zavatra mitranga amin’ny fotoana
        anaovana an’ilay zavatra.
          Ex: " I'm reading a page on the Internet at the moment/I’m now eating and watching TV".
        - Je suis en train de lire une page sur Internet en ce moment/ je mange et regarde la TELE.`
        
      }      
    ],
    content2: [
      {
        type: "adverbs",
        table: [
          { adverbs: "→ Right now", frenchTranslation1: "→ Maintenant/tout de suite" },
          { adverbs: "→ Now", frenchTranslation1: "→ Maintenant" },
          { adverbs: "→ Presently", frenchTranslation1: "→ À présent" },
          { adverbs: "→ At the moment", frenchTranslation1: "→ En ce moment" },
          { adverbs: "→ At this time", frenchTranslation1: "→ À cette heure-ci" },
        ],
      },
      {
        type: "sentenceForms",
        table: [
          {
            affirmative: "I’m eating.",
            interrogative: "Am I eating?",
            negative: " I’m not eating."
          },
          {
            affirmative: "You are eating.",
            interrogative: "Are you eating?",
            negative: " You are not eating."
          },
          {
            affirmative: "He/she/it is eating",
            interrogative: "Is he/she/it eating?",
            negative: " He/she/it is not eating"
          },
          {
            affirmative: "We/they are eating",
            interrogative: "Are we/they eating?",
            negative: " We/they are not eating"
          }
        ]
      }
    ],    
    
    content3: [
      {
        title: "EXERCISES - FILL IN THE BLANKS",
        instructions: "I) Exercise: Put the verb in brackets in the correct form to make different form of the Present Continuous Tense",
        questions: [
          "1. Joanne __________ (work) at her office now",
          "2. What __________ (you do) at this moment.",
          "3. Who __________ you __________ (speak) with?",
          "4. Maria __________ (sit) next to Paul.",
          "5. What __________ (you think about)?",
          "6. My wife __________ (sleep) presently",
          "7.The phone __________ (not ring)",
        ]
      }
    ],         
  }
];

const grammarRules7 = [
  {
    id: 1,
    title: 'Lesson 19: INFINITIVE VERBS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        type: "ETAT MENTAUX",
        table: [
          { infinitive: "→ TO DOUBT SB/STH", frenchTranslation2: "- Douter de", malagasyTranslation1:"- Manahy" },
          { infinitive: "→ TO KNOW (ABOUT STH) ", frenchTranslation2: "- Savoir/connaître", malagasyTranslation1:"- Mahalala" },
          { infinitive: "→  TO THINK OF/ABOUT SB", frenchTranslation2: "- Penser à/de", malagasyTranslation1:" - Mieritreritra" },
          { infinitive: "→ TO UNDERSTAND SB", frenchTranslation2: "- Comprendre", malagasyTranslation1:" - Mahazo" },
        ],
      },
      {
        type: "ETATS EMOTIONS",
        table: [
          { infinitive1: "→ TO LIKE (TO) STH/SB", frenchTranslation3: " - Aimer qlq1",malagasyTranslation2: " - Tia" },
          { infinitive1: "→ TO LOVE (TO) STH/SB", frenchTranslation3: " - Aimer ",malagasyTranslation2: " - Tia" },
          { infinitive1: "→ TO NEED (TO) STH/SB", frenchTranslation3: " - Avoir besoin de ",malagasyTranslation2: " Mila" },
          { infinitive1: "→ TO PREFER (TO)", frenchTranslation3: " - Préférer de ",malagasyTranslation2: " - Aleo" },
          { infinitive1: "→ TO WANT (TO) STH/SB", frenchTranslation3: " - Vouloir ",malagasyTranslation2: " - Maniry/te" },
          { infinitive1: "→ TO WISH (TO)", frenchTranslation3: " - Souhaiter",malagasyTranslation2: " - Mirary/te" },
        ]
      },
      {
        type: "PERCEPTIONS",
        table: [
          { infinitive2: "→ TO FEEL STH/SB", frenchTranslation4: " - Sentir/Se sentir",malagasyTranslation3: "- Mahatsapa" },
          { infinitive2: "→ TO HEAR STH/SB", frenchTranslation4: " - Entendre ",malagasyTranslation3: "- Maheno" },
          { infinitive2: "→ TO SEE STH/SB", frenchTranslation4: " - Voir ",malagasyTranslation3: "- Mahita" },
          { infinitive2: "→ TO SMELL STH", frenchTranslation4: " - Sentir(odeur) ",malagasyTranslation3: "- Manimbolo " },
          { infinitive2: "→ TO TASTE STH", frenchTranslation4: " - Goutter ",malagasyTranslation3: " - Manandrana" },
  
        ]
      },
      {
        type: "APPARENCES",
        table: [
          { infinitive3: "→ TO LOOK+ADJ", frenchTranslation5: "- Avoir l’air",malagasyTranslation4: "- Hoatran’ny" },
          { infinitive3: "→ TO SEEM +ADJ", frenchTranslation5: " - Avoir l’air ",malagasyTranslation4: "-  ---//---" },
          { infinitive3: "→ IT LOOKS THAT+SUJET", frenchTranslation5: "- Il semble que.. ",malagasyTranslation4: "- ---//---" },
          { infinitive3: "→ IT SEEMS THAT+SUJET", frenchTranslation5: " - Il semble que.. ",malagasyTranslation4: "- ---//--- " },
          { infinitive3: "→ IT APPEARS THAT", frenchTranslation5: " - Il parait que.. ",malagasyTranslation4: " - ---//--- " },
          { infinitive3: "→ → TO PRETEND (NOT)TO", frenchTranslation5: " - Prétendre de",malagasyTranslation4: " - Mody " },
          { infinitive3: "→ TO SEEM (NOT) TO", frenchTranslation5: " - Faire semblant ",malagasyTranslation4: " - ---//--- " },
          { infinitive3: "→ TO ACT AS IF….", frenchTranslation5: "- Faire comme si.. ",malagasyTranslation4: " - ---//--- " },
        ]
      },
      {
        type: "(IR)REGULAR VERBS",
        table: [
          { irregular: "→ TO SPEAK WITH/TO/ABOUT SB", frenchTranslation6: " - Parler",malagasyTranslation5: " - Miteny" },
          { irregular: "→ TO TALK WITH/TO/ABOUT SB", frenchTranslation6: " - Parler",malagasyTranslation5: " - Miteny" },
          { irregular: "→ TO TELL STH TO SB", frenchTranslation6: " - Raconter ",malagasyTranslation5: "- Mitantara" },
          { irregular: "→ TO SAY[sei] STH TO SB", frenchTranslation6: " - Dire",malagasyTranslation5: "- Miteny" },
          { irregular: "→ TO LISTEN TO SB", frenchTranslation6: " - Ecouter",malagasyTranslation5: "- Mihaino" },
          { irregular: "→ TO LOOK AT SB/STH", frenchTranslation6: " - Regarder",malagasyTranslation5: "- Mijery olona" },
          { irregular: "→ TO WATCH TV", frenchTranslation6: " - Regarder ",malagasyTranslation5: "- Mijery tele" },
          { irregular: "→ TO FORGET STH/SB", frenchTranslation6: " - Oublier",malagasyTranslation5: "- Manadino" },
          { irregular: "→ TO REMEMBER STH/SB", frenchTranslation6: " - Se souvenir",malagasyTranslation5: "- Mahatadidy" },
          { irregular: "→ TO TRUST IN SB", frenchTranslation6: " - Faire confiance",malagasyTranslation5: "- Mahatoky" },
          { irregular: "→ TO DEPEND ON SB/STH", frenchTranslation6: " - Dépendre de",malagasyTranslation5: "- Miankina" },
          { irregular: "→ TO BETRAY SB", frenchTranslation6: " - Trahir",malagasyTranslation5: " - Mamadika" },
          { irregular: "→ TO DECEIVE SB", frenchTranslation6: " - Tromper",malagasyTranslation5: "- Mamitaka" },
          { irregular: "→ TO CHEAT [trit] ON SB", frenchTranslation6: " - Tricher",malagasyTranslation5: "- " },
          { irregular: "→ TO STEAL STH FROM SB", frenchTranslation6: " - Voler",malagasyTranslation5: "- Mangalatra" },
          { irregular: "→ TO BORROW STH FROM SB", frenchTranslation6: " - Emprunter",malagasyTranslation5: "- Mindrana" },
          { irregular: "→ TO LEND STH TO SB", frenchTranslation6: " -Prêter ",malagasyTranslation5: "- Mampindrana" },  
        ]
      },
      {
        type: "expressions",
        table: [
          { expressions: "To be used to + v.ing", frenchTranslation7: " Avoir l'habitude de" },
          { expressions: "To be accustomed to + v.ing", frenchTranslation7: " Zatra" },
          { expressions: "To used to + v.ing", frenchTranslation7: " Avoir l'habitude de (au passe)" },
        ],
        examples: [
          {
            en: "He doubted that her story was true.",
            fr: "Il doutait que son histoire soit vraie.",
            mg: "Manahy ny fahamarinan’ny tantaran’ilay zazavavy izy.",
          },
          {
            en: "I prefer staying here.",
            fr: "Je préfère rester ici.",
            mg: "Aleoko mijanona eto.",
          },
          {
            en: "I don’t hear you, can you speak up please?",
            fr: "Je t’entends pas, peux-tu parler plus fort stp ?",
            mg: "Tsy mandre anao aho, afaka miteny mafy ve azafady ?",
          },
        ],  
      },
      {
        type: "expressions",
        table: [
          { expressions1: "From now on/today", frenchTranslation7: "=A partir de maintenant", 
            malagasyTranslation6: " Manombok'izao/androany" },
        ],        
      },
      
    ],    
    
   
  }
];

const grammarRules8 = [
  {
    id: 1,
    title: 'Lesson 20: THE ARTICLES',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        type: 'definition',
        text: [
          "→ Il sert à désigner un objet (ou une classe d'objet) qui a une existence propre en dehors du locuteur.",
          "→ Ampiasaina ny ARTICLE DEFINIS entina anondroana zavatra iray.",
          "                                            [Voyelles: A, E, I, O, et Y]"
        ],
      },
      {
        type: 'prononciation',
        text: [
          "▪ Prononciation :  ",
          "▪ THE se prononce [ðə] devant une consonne y compris U prononcé [j]",
          "   Ex: the cat, the university",
          "   → le chat, l'université",
          "▪ THE se prononce [ði:] ou [ði] devant une voyelle et devant le h muet de hour, heir, honest, honour et leurs dérivés.",
          "   Ex: the art, the heir apparent",
        ],
      },
    ],
    content2: [
      {
        type: 'definition',
        text: [
          "→ Ny Article indéfinis dia ampiasaina @ zavatra IRAY tokana ihany.",
        ],
      },
      {
        type: 'prononciation',
        text: [
          "→ A s'emploie devant une consonne phonétique",
          "▪ a cat, a unit ['ju:nit], a euro ['juərəu]",
          "   → un chat, une unité, un euro",
          "                                    [Voyelles: A, E, I, O, et Y]",
          "→ AN s'emploie devant une voyelle phonétique   ",
          "▪ an arm ['a:m]",
          "   → un bras",
          "▪ an apple [eiple:]",
          "   → une pomme",
          "N.B. : le son [ j ] est, en effet, une consonne.",
          "De même, devant H muet :",
          "▪ hour, heir, honest,",
          "▪ an heir : un héritier",
          "▪ an hour",
          "▪ honor et leurs dérivés.",
        ],
      },
    ],
    content3: [
      {
        type: 'demonstratives_pair',
        pairs: [
          {
            left: {
              label: 'THIS/ ITY — CE/CET(TE)',
              description: 'Utilisé pour les noms singuliers près du parleur.',
              example: 'This one is yours / What is this?',
              translation: 'Celui-ci est le tien. / Qu’est-ce que c’est ?',
            },
            right: {
              label: 'THAT/ IRY — CE/CET(TE)',
              description: 'Utilisé pour les noms singuliers loin du parleur.',
              example: 'Can you give me that umbrella, please?',
              translation: 'Peux-tu me passer ce parapluie, s’il te plaît ?',
            },
          },
          {
            left: {
              label: 'THESE/ IRETO — CE(S)/CET(TE)',
              description: 'Pluriel de THIS.',
              example: 'These books are mine; I bought them for my studies.',
              translation: 'Ces livres sont les miens ; je les ai achetés pour mes études.',
            },
            right: {
              label: 'THOSE/ IRETO — CE(S)/CET(TE)',
              description: 'Pluriel de THAT.',
              example: 'Can you give me those umbrellas, please?',
              translation: 'Peux-tu me passer ces parapluies, s’il te plaît ?',
            },
          },
        ],
        notes: [
          "THE DEFINITE ARTICLES ‘THE’ = le, la, les, l’ (NY/ILAY)",
          "THE INDEFINITE ARTICLES 'A', 'AN' = un/une",
          "→ THIS — THESE (plural) = ITY/IRETO — CE(S)/CET(TE)"
        ]
      }
    ]    

  },
];

const grammarRules9 = [
  {
    id: 1,
    title: 'Lesson 21: THE PRONOUNS/ POSSESSIVES',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        type: 'complexTable',
        title: 'PRONOUNS / POSSESSIVES',
        headers: [
          'Personal Pronouns',
          'Object Pronouns',
          'Possessive Adjectives',
          'Possessive Pronouns',
          'Reflexive Pronouns',
        ],
        rows: [
          {
            label: 'Singular',
            data: [
              ['I', 'me', 'my', 'mine', 'myself'],
              ['you', 'you', 'your', 'yours', 'yourself'],
              ['he', 'him', 'his', 'his', 'himself'],
              ['she', 'her', 'her', 'hers', 'herself'],
              ['it', 'it', 'its', '*', 'itself'],
            ]
          },
          {
            label: 'Plural',
            data: [
              ['we', 'us', 'our', 'ours', 'ourselves'],
              ['you', 'you', 'your', 'yours', 'yourselves'],
              ['they', 'them', 'their', 'theirs', 'themselves'],
            ]
          }
        ]
      }
    ],
    content2: [
      {
        type: 'grammarRule',
        title: 'SIMPLE PAST TENSE',
        text: [
          "→ **Structure**: S + Past (V2 : Irrégulier / Reg.V + -ED) + C",
          "",
          "→ **Le Past Simple (prétérit simple)** s'emploie pour :",
          "   Parler d'une action, événement, ou état qui a eu lieu dans une période de temps qui est déjà terminée.",
          "",
          "→ **AMPIASAINA NY SIMPLE PAST TENSE** AMIN’NY ZAVATRA NATAO NA NITRANGA EFA LASA.",
        ],
      },
      {
        type: 'examples',
        title: 'EXEMPLES',
        text: [
          "- I went to visit my friend yesterday.",
          "   → Je suis allé visiter mon ami.",
          "   → Nandeha namangy namako izaho omaly.",
          "",
          "- I watched a movie all night.",
          "   → J’ai regardé un film toute la nuit.",
          "   → Nijery sary mihetsika foana aho nandritra ny alina.",
        ],
      },
      {
        type: 'table',
        title: 'Formes : Affirmation / Négation / Interrogation',
        headers: ['AFFIRMATION', 'NEGATION', 'INTERROGATION'],
        rows: [
          ['I spoke with him', 'I didn’t speak with him', 'Did I speak with him?'],
        ],
      },
      {
        type: 'list',
        title: 'ADVERBS OF TIME / ADVERBES DE TEMPS',
        text: [
          "- YESTERDAY / HIER = OMALY",
          "- THE DAY BEFORE YESTERDAY / AVANT HIER = AFAKA OMALY",
          "- LAST NIGHT / LA NUIT DERNIÈRE",
          "- LAST WEEK / LA SEMAINE DERNIÈRE",
          "- LAST MONTH / LE MOIS DERNIER",
          "- LAST YEAR / L’ANNÉE DERNIÈRE",
          "- ONE/TWO DAYS AGO / IL Y A UN/DEUX JOURS = EFA MISY ROA ANDRO IZA",
          "- THIS MORNING / CETTE MATINÉE",
          "- THIS AFTERNOON / CET APRÈS-MIDI",
        ],
      },
      {
        type: 'narration',
        title: 'NARRATION – Voir la page 15, changez les verbes au passé',
        text: [
          " What time did you get up this morning?",
          "→ This morning, I got up at 5:30, and then, I went to the bathroom to take a shower,",
          "to brush my teeth, to comb my hair. After that, I prepared breakfast for myself,",
          "because I live alone. And after breakfast, I got dressed and prepared my stuff for",
          "school and I left home early this morning, just because of the traffic jam,",
          "if not I was late, as I live far. I think that’s all.",
        ],
      },

    ],
    
        
  }
];


const grammarRules10 = [
  {
    id: 1,
    title: 'Lesson 22: VOCABULARY IN USE',
    description: 'BASIC GRAMMARS', 
    content1: [
      {
        vocabulary: "TO GO TO+ v.inf",
        frenchTranslation: " Aller",
        malagasyTranslation: " Mandeha"
      },
      {
        vocabulary: "TO COME TO+v.inf",
        frenchTranslation: " Venir",
        malagasyTranslation: " Tonga"
      },
      {
        vocabulary: "TO BECOME[bikam]",
        frenchTranslation: " Devenir",
        malagasyTranslation: " Lasa"
      },
      {
        vocabulary: "TO TAKE [teik]",
        frenchTranslation: " Prendre",
        malagasyTranslation: " Mandray/Maka"
      },
      {
        vocabulary: "TO BRING",
        frenchTranslation: " Apporter",
        malagasyTranslation: " Mitondra"
      },
      {
        vocabulary: "TO LOOK FOR STH/SB",
        frenchTranslation: " Chercher",
        malagasyTranslation: " Mitady"
      },
      {
        vocabulary: "TO FIND",
        frenchTranslation: " Trouver",
        malagasyTranslation: " Mahita"
      },
      {
        vocabulary: "TO GET",
        frenchTranslation: " Obtenir",
        malagasyTranslation: " Mahazo"
      },
      {
        vocabulary: "TO GIVE",
        frenchTranslation: " Donner",
        malagasyTranslation: " Manome"
      },
      {
        vocabulary: "TO LIE TO SB",
        frenchTranslation: " Mentir",
        malagasyTranslation: " Mandainga"
      },
      {
        vocabulary: "TO BE SLEEPY",
        frenchTranslation: " Avoir sommeil",
        malagasyTranslation: " Te-hatory"
      },
      {
        vocabulary: "TO FALL ASLEEP",
        frenchTranslation: " S'endormir",
        malagasyTranslation: " Tafatory"
      },
      {
        vocabulary: "TO EAT/NOSH",
        frenchTranslation: " Manger",
        malagasyTranslation: " Mihinana"
      },
      {
        vocabulary: "TO SPEND MY TIME TO",
        frenchTranslation: " Passer mon temps",
        malagasyTranslation: " Mandany fotoana"
      },
      {
        vocabulary: "TO REVISE",
        frenchTranslation: " Reviser",
        malagasyTranslation: " Mianatra"
      },
      {
        vocabulary: "TO PICK SB UP",
        frenchTranslation: " Prendre qlq1",
        malagasyTranslation: " Mandray/Maka"
      },
      {
        vocabulary: "TO IMITATE",
        frenchTranslation: " Imiter",
        malagasyTranslation: " Mankatahaka"
      },
      {
        vocabulary: "TO IMPROVE/BRUSH UP ON STH",
        frenchTranslation: " Ameliorer",
        malagasyTranslation: " Manatsara"
      },
      {
        vocabulary: "TO PRACTICE",
        frenchTranslation: " Pratiquer",
        malagasyTranslation: " Mizatra"
      },
      {
        vocabulary: "TO GO TO BED/SLEEP",
        frenchTranslation: " Dormir/Coucher",
        malagasyTranslation: " Matory/Mandeha matory"
      },
      {
        vocabulary: "TO HAVE A PARTY",
        frenchTranslation: " Faire une fête",
        malagasyTranslation: " Manao fety"
      },
      {
        vocabulary: "TO HAVE FUN WITH SB ",
        frenchTranslation: " S'amuser avec",
        malagasyTranslation: " Manala azy "
      },
      {
        vocabulary: "TO ASK SB TO DO STH",
        frenchTranslation: " Demandera qlq1 de",
        malagasyTranslation: " Miangavy olona"
      },
      {
        vocabulary: "TO PERSUADE SB TO",
        frenchTranslation: " Persuader qlq1",
        malagasyTranslation: " Mandresy lahatra"
      },
      {
        vocabulary: "TO FORCE SB TO DO",
        frenchTranslation: " Forcer",
        malagasyTranslation: " Manery olona hanao zavatra"
      },
      {
        vocabulary: "TO BUY STH",
        frenchTranslation: " Acheter",
        malagasyTranslation: " Mividy"
      },
      {
        vocabulary: "TO MEET SB/BUMP INTO SB",
        frenchTranslation: " Rencontrer",
        malagasyTranslation: " Mifanena"
      },
      {
        vocabulary: "ON MY WAY",
        frenchTranslation: " Sur mon chemin",
        malagasyTranslation: " Teny an-dalana"
      },
      {
        vocabulary: "TO INVITE SB",
        frenchTranslation: " Inviter",
        malagasyTranslation: " Manasa olona"
      },
      {
        vocabulary: "TO HAVE A DRINK/LUNCH",
        frenchTranslation: " Boire/Déjeuner",
        malagasyTranslation: " Misotro/Mihinana atoandro"
      },
      {
        vocabulary: "TO HAVE A LONG/SHORT TALK WITH",
        frenchTranslation: " Avoir une longue conversation",
        malagasyTranslation: " Miresaka"
      },
      {
        vocabulary: "TO ACCEPT",
        frenchTranslation: " Accepter",
        malagasyTranslation: " Manaiky"
      },
      {
        vocabulary: "TO REFUSE/REJECT",
        frenchTranslation: " Refuser/Nier",
        malagasyTranslation: " Manda"
      },
      {
        vocabulary: "TO KEEP ON+V.ING",
        frenchTranslation: " Continuer",
        malagasyTranslation: " Manohy"
      },
      {
        vocabulary: "TO CALL SB/GIVE SB A CALL",
        frenchTranslation: " Appeler qlq1",
        malagasyTranslation: " Miantso"
      },
      {
        vocabulary: "TO POSTPONE/PUSH STH OFF[poush]",
        frenchTranslation: " Remettre/Reporter",
        malagasyTranslation: " Manemotra"
      },
      {
        vocabulary: "TO GET ON/IN",
        frenchTranslation: " Monter",
        malagasyTranslation: " Mitaingina"
      },
      {
        vocabulary: "TO GET OFF",
        frenchTranslation: " Descendre",
        malagasyTranslation: " Midina"
      },
      {
        vocabulary: "TO GIVE SB A LIFT/RIDE[raid]TO DROP SB OFF",
        frenchTranslation: " Raccompagner/Deposer qlq1",
        malagasyTranslation: " Manatitra/Mampidina"
      },
      {
        vocabulary: "TO TAKE SB’S PHONE NUMBER[namber]",
        frenchTranslation: " Prendre le numero de qlq1",
        malagasyTranslation: " Mandray nomerao"
      },

    ],
    
    content2: [
      {
        sentence:`  
         What did you do yesterday?
Well, yesterday, I didn’t do anything special, so my mum asked me to buy something for lunch at the
market. On my way there, I bumped into one of my friends by chance; he was my classmate in high school.
And he was very excited to see me, and so was I, and then, he invited me to have lunch with his family and
talked about life. Unfortunately, I wasn’t sure about it, just because I was completely busy as I had to go to
school after the market. So, I……………..
        `,
      },
    ],         
  }
];

const grammarRules11 = [
  {
    id: 1,
    title: 'Lesson 23: PAST CONTINUOUS TENSE',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "PAST PROGRESSIVE TENSE",
        description: `                     [WAS/WERE+ ING/V+ C].

       →Le Past Continuous s'emploie pour : 
         Parler d'une action qui était en train de se dérouler en même temps que l’autre dans le 
        passé: En utilisant WHEN= QUAND / WHILE= PENDANT QUE..
           →AMPIASAINA NY PPT AMIN’NY ZAVATRA IRAY EFA NITRANGA, LASA.
           →AMPIASAINA NY PAST CONT TENSE AMIN’NY TRANGA MIARA MISEHO NA ZAVATRA IRAY EO
          AMPI-TRANGANA KA NOTAPAHANA TRANGA HAFA(MIARAKA @ WHEN/WHILE)

          Ex: I was eating when he called me

             J’étais en train de manger quand-il m’a appelé.
             Ex: While I was sleeping; he stole something from the house.
              Pendant que je dormais; il a volé quelque chose de la maison.

        Note: Marihina fa tsy maintsy SIMPLE PAST TENSE ny iray amin’izy roa.`
        
      }      
    ],
    content2: [
      {
        type: "sentenceForms",
        table: [
          {
            affirmative: "I was",
            negative: "I wasn’t",
            interrogative: "Was I?"
          },
          {
            affirmative: "You were",
            negative: "You weren’t",
            interrogative: "Were you?"
          },
          {
            affirmative: "He/She/It was",
            negative: "He/She/It wasn’t",
            interrogative: "Was he/she/it?"
          },
          {
            affirmative: "We were",
            negative: "We weren’t",
            interrogative: "Were we?"
          },
          {
            affirmative: "They were",
            negative: "They weren’t",
            interrogative: "Were they?"
  
          },
        ]
      },
      {
        type: "adverbs",
        table: [
          { adverbs: "→ YESTERDAY", frenchTranslation1: "- HIER=OMALY" },
          { adverbs: "→ THE DAY BEFORE YESTERDAY", frenchTranslation1: "- AVANT HIER= AFAKA OMALY" },
          { adverbs: "→ LAST NIGHT/WEEK/MONTH/YEAR", frenchTranslation1:"- LA NUIT/SEMAINE/MOI/ANNÉE DERNIER(E)" },
          { adverbs: "→ ONE/TWO DAYS AGO", frenchTranslation1: "- IL Y A UN/DEUX JOURS= EFA MISY ROA ANDRO IZAY" },
          { adverbs: "→ THIS MORNING/AFTERNOON", frenchTranslation1: "- CE MATIN/CET APRÉS MIDI= TAMIN’NY MARAINA TEO" },
        ],
      },
      
    ],    
    
    content3: [
      {
        title: "EXERCISES - FILL IN THE BLANKS",
        instructions: "I) Exercise: : Put the verb in brackets in the correct form to make different form of the Past Continuous and Simple Past Tense.",
        questions: [
          "1. I__________ (see) a movie yesterday. ",
          "2. I __________ (do not see) a play yesterday" ,
          "3. Last year, I __________ (travel) to Japan",
          "4. What (you, do) __________when the accident occurred?",
          "5. I (watch) __________a mystery movie on TV when the electricity went out",
          "6. While (I,be) __________(sleep), he arrived at home",
          "7. I__________ (live in) the dorm, when (study) __________at Ankatso.",
        ]
      }
    ],         
  }
];


const grammarRules12 = [
  {
    id: 1,
    title: 'Lesson 24: THE MODAL VERBS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "",
        description: `    
       → Les VERBES MODAUX ne sont pas comme tous les verbes infinitifs, comme, on ne peut pas
mettre S après le verbe conjugué avec la 3ème prs du singulier : Ex: He/she/it can S
→ Le verbe modal reste le même au futur et sa forme passé doit avoir HAVE+VPP après MV
     `  
      }      
    ],
    content2: [
      {
        type: "modalVerbs",
        table: [
          {
            verb: "CAN / BE ABLE TO",
            present: "CAN, BE ABLE TO",
            future: "CAN, WILL BE ABLE TO",
            past: "COULD, WAS ABLE TO, COULD HAVE + VPP",
            negative: "CANNOT / CAN'T",
            usages: [
              {
                type: "Possibilité, Capacité, Permission  \n\nPOUVOIR/AFAKA/MAHAY",
                examples: [
                  {
                    en: "He can play the piano.",
                    fr: "Il peut jouer du piano."
                  },
                  {
                    en: "Can you come to visit me tomorrow?",
                    fr: "Pouvez-vous venir me rendre visite demain ?"
                  },
                  {
                    en: "I couldn’t come to visit you yesterday because I was busy.",
                    fr: "Je ne pouvais pas venir te rendre visite hier parce que j’étais occupé."
                  }
                ]
              }
            ]
          },
          {
            verb: "MAY",
            present: "MAY",
            future: "MAY",
            past: "MAY HAVE + VPP",
            negative: "MAY NOT",
            usages: [
              {
                type: "Probabilité (prédiction), Possibilité, Permission \n\nIL SE PEUT QUE/PEUT ÊTRE/METY/ANGAMBA",
                examples: [
                  {
                    en: "It may rain this afternoon.",
                    fr: "Il se peut qu’il pleuve cet après-midi."
                  },
                  {
                    en: "You may say that you don’t care, but you need to think it over.",
                    fr: "Il se peut que vous disiez que vous vous en foutiez, mais vous devez y réfléchir."
                  },
                  {
                    en: "He may have missed the plane.",
                    fr: "Il a peut-être manqué l’avion."
                  }
                ]
              }
            ]
          },
          {
            verb: "MUST / HAVE TO",
            present: "MUST / HAVE TO",
            future: "MUST / WILL HAVE TO",
            past: "MUST HAVE + VPP / HAD TO",
            negative: "DON’T HAVE TO",
            usages: [
              {
                type: "Nécessité, Forte probabilité, Obligation \n\nDEVOIR/TSY MAINTSY",
                examples: [
                  {
                    en: "You must go home.",
                    fr: "Il faut que vous rentriez chez vous."
                  },
                  {
                    en: "I have to go home.",
                    fr: "Je dois rentrer chez moi."
                  }
                ]
              }
            ]
          },
          {
            verb: "SHOULD / OUGHT TO",
            present: "SHOULD / OUGHT TO",
            future: "SHOULD / OUGHT TO",
            past: "SHOULD / OUGHT TO HAVE + VPP",
            negative: "SHOULD NOT / SHOULDN’T",
            usages: [
              {
                type: "Conseil (moralité), Probabilité \n\nDEVRAIS/TOKONY",
                examples: [
                  {
                    en: "You should learn English nowadayss [naoedeiz].",
                    fr: " Vous devriez apprendre l’anglais de nos jours."
                  },
                  {
                    en: "You shouldn’t have told him to do that; it is dangerous.",
                    fr: "Tu n’aurais pas dû lui dire de faire ça ; c’est dangereux."
                  }
                ]
              }
            ]
          }
        ],
        notes: [
        
          "→ Structures fréquentes avec les modaux :",
          "   - THERE + MODAL + BE → ex : There could be no doubt about it.",
          "   - THERE + MODAL + HAVE BEEN + COMPL. → ex : There can’t have been doubt about it.",
          "   - MODAL + BE + ADJ / NOM → ex : You may/must/should be tired / a president."
        ]        
      },      
    ],            
  }
];

const grammarRules13 = [
  {
    id: 1,
    title: 'Lesson 25: MODAL VERBS- EXERCISES – VOCABULARIES',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "EXERCISES - FILL IN THE BLANKS",
        instructions: "I) Exercise: Complete the following exercise with past modal verbs. Use the correct form of the verbs in parentheses. Choose between affirmative and negative.",
        questions: [
          "1. I got a C on my math test. I ___________(should / do) better than that ",
          "2. Don't be so hard on yourself. It _________ (may / be) your fault. It just _________ (could / be) a more difficult test than usual." ,
          "3. No, it _______ (could / be) that difficult. The rest of the class did pretty well. I _______ (should / study) harder.",
          "4. What you ______ (could / do) differently?",
          "5. Well, for one thing, I ________ (should / miss) that day of class.",
          "6. You missed a day? Did you get the notes?",
          "7. No, I _______ (ought to / copy) them. Some of the problems which I got wrong ",
        ]
      }
    ],     
    content2: [
    
      {
        type: "vocabs",
        table: [
          {
            vocabs: "TO INTERRUPT[interapt]",
            frenchTranslation2: "- Interrompre qlq1",
            malagasyTranslation4: "- Manapaka ny tenin'ny olona"
          },
          {
            vocabs: "TO BUTT IN SB[batin]",
            frenchTranslation2: "- Interrompre qlq1",
            malagasyTranslation4: "- Manapaka ny tenin'ny olona"
          },
          {
            vocabs: "TO FEEL FREE TO+V.INF",
            frenchTranslation2: "- Ne pas gêner/Ne pas hésiter",
            malagasyTranslation4: "- Tsy misalasala"
          },
          {
            vocabs: "TO BOTHER[bader]DISTURB[disturb]",
            frenchTranslation2: "- Déranger qlq1",
            malagasyTranslation4: "- Manelingelina olona"
          },
          {
            vocabs: "TO EXPRESS YOURSEFL[ixpres]",
            frenchTranslation2: "- S'exprimer",
            malagasyTranslation4: "- Milaza ny hevitrao"
          },
          {
            vocabs: "WHAT DOES IT MEAN?[wadazit min]",
            frenchTranslation2: "- Qu’est- ce que ça veut dire ?",
            malagasyTranslation4: "- Fa inona ny dikan’io/izao ?"
          },
          {
            vocabs: "TO TRANSLATE[transleit] STH INTO STH",
            frenchTranslation2: "- Traduire",
            malagasyTranslation4: "- Mandika"
          },
          {
            vocabs: "TO IMPROVISE[improvaiz]",
            frenchTranslation2: "- Improviser",
            malagasyTranslation4: "- Mamorona"
          },
          {
            vocabs: "TO PUT STH IN USE/PRACTICE[praktis]",
            frenchTranslation2: "- Mettre qlqch en pratique",
            malagasyTranslation4: "- Mampiasa"
          },
          {
            vocabs: "TO CREATE[kriet]",
            frenchTranslation2: "- Créer",
            malagasyTranslation4: "- Mamorona"
          },
          {
            vocabs: "TO REPEAT[ripit]AGAIN AND AGAIN",
            frenchTranslation2: " - Répéter encore et encore",
            malagasyTranslation4: "- Averimberina foana"
          },
          {
            vocabs: "TO IMPROVE/BRUSH UP[brashap]",
            frenchTranslation2: " - Améliorer",
            malagasyTranslation4: "- Manatsara/Mihatsara"
          },
          {
            vocabs: "TO ENRICH[inritr]",
            frenchTranslation2: "- Enrichir",
            malagasyTranslation4: "- Mampitombo"
          },
          {
            vocabs: "TO MEMORIZE[memoraiz]",
            frenchTranslation2: "- Mémoriser",
            malagasyTranslation4: "- Mitadidy"
          },
          {
            vocabs: "TO MOVE FORWARD[forword]",
            frenchTranslation2: "- S’avancer",
            malagasyTranslation4: "- Mandroso foana"
          },
          {
            vocabs: "TO THINK STH OVER[aver]",
            frenchTranslation2: "- Réfléchir",
            malagasyTranslation4: "- Mieritreritra"
          },
          {
            vocabs: "TO TAKE STH SERIOUSLY[seriesli]",
            frenchTranslation2: "- Prendre qlqch au sérieux",
            malagasyTranslation4: "- Mandray zavatra ampamatorana"
          },
          {
            vocabs: "TO WORK HARD",
            frenchTranslation2: "- Travailler dur",
            malagasyTranslation4: "- Miasa mafy"
          },
          {
            vocabs: "TO GO/COME BACK HOME",
            frenchTranslation2: "- Rentrer chez soi",
            malagasyTranslation4: "- Mandeha mody"
          },
          {
            vocabs: "TO START/BEGIN (TO+V.INF) + V.ING",
            frenchTranslation2: "- Commencer à",
            malagasyTranslation4: "- Manomboka"
          },
          {
            vocabs: "TO MANAGE TO+V.INF[manidge]",
            frenchTranslation2: "- Se débrouiller",
            malagasyTranslation4: "- Miezaka"
          },
          {
            vocabs: "TO TRY[trai]TO +V.INF",
            frenchTranslation2: "- Essayer de",
            malagasyTranslation4: "- Manandrana"
          },
          {
            vocabs: "TO FOCUS[fokeson]ON STH",
            frenchTranslation2: "- Se concéntrer sur qlq",
            malagasyTranslation4: "- Mifantoka @"
          },
          {
            vocabs: "TO DEVOTE[divôout]YOUR TIME[taim]",
            frenchTranslation2: "- Consacrer le temps",
            malagasyTranslation4: "- Manoka-potoana"
          },
          {
            vocabs: "TO DEVOTE[divôout]YOUR TIME[taim]",
            frenchTranslation2: "- Consacrer le temps",
            malagasyTranslation4: "- Manoka-potoana"
          },
          {
            vocabs: "TO GET BETTER AND BETTER",
            frenchTranslation2: "- Devenir de plus en plus mieux",
            malagasyTranslation4: "- Mihatsara"
          },
          {
            vocabs: "TO GET WORSE AND WORSE",
            frenchTranslation2: "- Devinir de plus en plus mauvais",
            malagasyTranslation4: "- Miharatsy"
          },
          {
            vocabs: "TO DEEPEN[dipen]",
            frenchTranslation2: "- Approfondir",
            malagasyTranslation4: "- Mandalina/Manamafy"
          },
          {
            vocabs: "TO HASTEN[hasen]",
            frenchTranslation2: "- Précipiter/Se depêcher",
            malagasyTranslation4: "- Manafaingana"
          },
          {
            vocabs: "TO LOOK FORWARD TO+V.ING",
            frenchTranslation2: "- Avoir hâte de",
            malagasyTranslation4: "- Tsy mahandry ny…"
          },
        ]
      }

    ],        
        
  }
];

const grammarRules14 = [
  {
    id: 1,
    title: 'Lesson 26: WH-QUESTION—RELATIVE PRONOUNS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "→ WH + VALEUR DE TEMPS + V(ING)",
        description: `→ On emploie le WH-Question pour poser une question. Ny WH-Question dia entina anontaniana.
      
      WHAT DO YOU DO IN YOUR SPARE TIME?  
      ARE YOU DOING NOW?  
      DID YOU DO YESTERDAY?  
      WERE YOU DOING?  
      HAVE YOU DONE?  
      WILL YOU DO?  
      HAD YOU DONE?
      
      → WHAT…./whatever.. (Quoi?) INONA?  
      ▪ What are you doing now? — Qu’est-ce que tu fais maintenant.  
      ▪ What do you do in spare time?
      
      → WHERE…./wherever.. (Où?) AIZA?  
      ▪ Where are you from? — D’où viens-tu?  
      ▪ Where does he stay? — Où est-ce qu’il reste?
      
      → WHEN…./whenever.. (Quand?) OVIANA?  
      ▪ When will you leave? — Quand est-ce que tu partiras ?  
      ▪ When did you come back?
      
      → WHICH…./whichever (Lequel…) IZA?  
      ▪ Which one do you like?  
      ▪ Which of them did you choose?  
      ▪ Laquelle d’entre elles as-tu choisi?
      
      → WHOSE… (À qui?) AN’IZA?  
      ▪ Whose book is it? — C’est à qui ce livre ?
      
      → WHY… (Pourquoi?) INONA NY ANTONY?  
      ▪ Why did you learn English?
      
      → HOW… (Comment?) AHOANA?  
      ▪ How are you doing?  
      ▪ How does it work?
      
      → WHO… (Qui?) IZA?  
      ▪ Who are you?  
      ▪ Who are you waiting for?  
      — Qui es-tu ?  
      — Qui est-ce que tu attends ?`
      }           
    ],
    content2: [
      {
        title: "→ WH + NOUN / SUBJECT / VERB",
        description: `→ WH-RELATIVE PRONOUNS : utilisés pour relier deux phrases. Ils remplacent un mot (personne, chose, temps, lieu).
    
     WHO / THAT → QUELQU’UN (olona) = QUI / QUE / IZAY  
    ▪ The man who lives here is a scientist.  
      → L'homme qui habite ici est un scientifique.  
    ▪ The guy who I told you about is my roommate.  
      → Le gars dont je t'ai parlé est mon colocataire.
    
     WHICH / THAT → QUELQUE CHOSE (zavatra) = QUI / QUE / IZAY  
    ▪ The thing which/that you gave me was lost.  
      → La chose que tu m’as donnée était perdue.
    
     TO WHOM / WHO → QN (olona) = AVEC QUI  
    ▪ The woman to whom you were speaking is a doctor.  
      → La femme avec qui tu parlais est médecin.  
    ▪ The woman who you were speaking to is a doctor.
    
     WHOSE + NOM D’OBJET = DONT  
    ▪ This is the girl whose mother has just died.  
      → C’est la fille dont la mère vient juste de mourir.
    
     WHERE → Lieu = OÙ / IZAY  
    ▪ The town where I saw him was in Tana.  
      → La ville où je l’ai vu est à Tana.
    
     WHEN → Temps = QUAND / FOTOANA  
    ▪ Do you remember the time when we first met?  
      → Tu te souviens du moment où nous nous sommes rencontrés ?
    
     WHAT → CHOSE = CE QUE / CE QUI / IZAY  
    (pronom ou adjectif)  
    ▪ Tell me what you want. (pronom)  
      → Dis-moi ce que tu veux.  
    ▪ What we had was gone. (adjectif)  
      → Tout ce qu’on avait est perdu.
    
     WHY → POURQUOI = INONA NY ANTONY  
    ▪ I don’t know why she/he did that.  
      → Je ne sais pas pourquoi il/elle a fait ça.
    
     HOW TO → COMMENT = AHOANA  
    ▪ I wanna know how you did it.  
      → Je veux savoir comment tu l’as fait.  
    ▪ I wanna know how to do it.  
      → Je veux savoir comment le faire.`
      }
    ],
           
  }
];

const grammarRules15 = [
  {
    id: 1,
    title: 'Lesson 27: PRESENT PERFECT (CONT) TENSE',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "→ PRESENT PERFECT TENSE",
        description: `             → S + HAVE/HAS (JUST) + VPP
    
    → Le Present Perfect Tense s'emploie pour parler d'une action, événement, ou état qui vient de se passer dans une période de temps défini ou indéfini. (il y a quelques instants)  
    → **AMPIASAINA NY PRESENT PERFECT TENSE** amin’ny **zavatra nitranga vao teo**. Ary ampiasaina ihany koa izy io amin’ny **zavatra efa vita/natao** nefa **tsy tadidy oviana no nahavitana azy**.
    
    → **Exemples :**  
    ▪ I have just seen him.  
    → Je viens de le voir tout à l’heure = Vao teo izaho no nahita azy.  
    ▪ She has told me about it already.  
    → Elle me l’a déjà dit = Efa noteneniny tamiko izany.
    
    → **ADVERBS fréquents :**
    
    • **Up till now / Thus far / So far** → Jusqu’à maintenant = HATRAMIN’IZAO  
    Ex: He hasn’t called me up till now; I don’t know why.  
    → Il ne m’a pas encore appelé ; je ne sais pas pourquoi.
    
    • **Recently / Lately / Just now** → Récemment = VAO HAINGANA IZAO  
    Ex: I have (just) finished my job recently, and now, I’m going home.
    
    • **Already / Yet / Never** → Déjà / Pas encore / Jamais  
    Ex:  
    ✓ I have already seen this movie.  
    → J’ai déjà vu ce film.`
      }
    ],    
    content2: [
      {
        title: "PRESENT PERFECT CONTINUOUS",
        description: `→ S + HAVE/HAS BEEN + V-ING
    
    → On emploie le **Present Perfect Continuous** pour parler d'une action, événement, ou état qui s’est passé dans une période de temps dans le passé mais **n’est pas encore terminé**.  
    → **AMPIASAINA NY PRESENT PERFECT CONTINUOUS TENSE** amin’ny **zavatra nitsanga tany aloha** nefa **mbola mitohy ankehitriny**.
    
    → **Exemples :**  
    ▪ How long have you been learning English?  
    → Depuis combien de temps apprends-tu l’anglais ?  
    ▪ I have been learning it for three months now.  
    → Je l’apprends depuis trois mois.  
    ▪ I have been learning English since SEPT 17, 2012.
    
    → **ADVERBS** utiles :  
    • **FOR** → DURÉE D’ÉVÉNEMENT  
    → (Milaza ny faharetan’ny zavatra iray)  
    Ex: I have been waiting **for** an hour.  
    
    • **SINCE** → DÉBUT D’ÉVÉNEMENT  
    → (Milaza ny fanombohan’ny zavatra iray)  
    Ex: He has been working here **since** 2020.
    
    • **A LONG TIME** → Longtemps = Efa ela  
    Ex: They have been talking for **a long time**.
    
     TO BE ABOUT TO + V.INF → ÊTRE SUR LE POINT DE + V.ING
     TO BE IN THE PROCESS OF + V.ING → ÊTRE EN TRAIN DE + V.ING
    `
      }
    ]        
  }
];

const grammarRules16 = [
  {
    id: 1,
    title: 'Lesson 28: VOCABULARIES / PAST PERFECT (CONTINUOUS) TENSE',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        type: "vocabs",
        table: [
          { vocabs: "TO POKESB [pôouk] mikitika", 
            frenchTranslation3: "- Donner un coup à ", 
            malagasyTranslation5: "- Mikitika"
           },
           { vocabs: "TO PINCHSTH[pintr]", 
            frenchTranslation3: "- Pincer",  
            malagasyTranslation5: "- Manongo"
           },
          { vocabs: "TO SQUEEZE STH[skwiz]", 
            frenchTranslation3: "- Presser",
            malagasyTranslation5: "- Manapotsitra"
          },
          { vocabs: "TO MELT/THAW[fôou]",
            frenchTranslation3: "- Fondre",
            malagasyTranslation5: "- Mitsonika"
          },
          { vocabs: "TO CHOKE[trôk]",
            frenchTranslation3: "- S’étouffer",
            malagasyTranslation5: "- Kenda"
          },
          { vocabs: "TO SWALLOW[soalôou] STH",
            frenchTranslation3: "- Avaler",
            malagasyTranslation5: "- Mitelina"
          },
          { vocabs: "TO SPEW[spio]/VOMIT",
            frenchTranslation3: "- Vomir",
            malagasyTranslation5: "- Mandoa"
          },
          { vocabs: "TO QUENCHYOUR THIRST[koentr ior ferst]",
            frenchTranslation3: "- Se désaltérer",
            malagasyTranslation5: "- Manala hetaheta"
          },
          { vocabs: "TO TICKLE (reg)SB",
            frenchTranslation3: "- Chatouiller qlq1",
            malagasyTranslation5: "- Migiligilika"
          },

        ],
      },
    ],
    content2: [
  {
    title: "PAST PERFECT (CONT’) TENSE",
    description: `→ **S + HAD (+ BEEN) + V-ING / PP.V**

→ On emploie le **Past Perfect** pour parler d’une **action qui s’est produite avant une autre** dans le passé.  
→ Si l'on décrit deux actions passées, on utilise le **Past Perfect** pour celle qui s’est produite **en premier**.

→ **AMPIASAINA NY PAST PERFECT** entina ilazana fa **ny tranga iray dia efa niseho talohan’ny tranga iray hafa.**

→ **Exemples :**  
▪ After we’d had lunch at a restaurant, we went to the cinema.  
→ Après avoir déjeuné dans un restaurant, nous sommes allés au cinéma.  
▪ John had gone out when I arrived in the office.  
→ John était déjà sorti quand je suis arrivé au bureau.

→ **ADVERBS OF TIME** (Fanamarihan'ny fotoana) :  
• **At that time** = En ce moment / Tamin’izany fotoana izany  
• **Once upon a time** = Il était une fois / Indray andro hono  
• **Many moons ago / A long time ago** = Il y a longtemps / Efa ela be izay`
  }
]

    
  }
];

const GrammarScreen = () => {
  const [expanded, setExpanded] = useState<string | number | null>(null);

  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      pitch: 1.0,
      rate: 1.0,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Grammar</Text>
      <Text style={styles.content}>
        This screen contains grammar lessons and rules.
      </Text>

      {grammarRules1.map((rule) => (
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
                title="DAILY DIALOGUES"
                left={(props) => (
                  <List.Icon {...props} icon="handshake" color='#8da9c4' />
                )}
              >
                {rule.content1.map((line, index) => (
                  <List.Item
                    key={index}
                    title={line.sentence}
                    description={line.frenchTranslation}
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
                  )
                )}
                {rule.content1.map((line, index) => (
                  <React.Fragment key={index}>
                    <List.Item
                      title={`French: ${line.frenchTranslation}`}
                      description="French Translation"
                      descriptionStyle={styles.translation}
                    />
                    <List.Item
                      title={`Malagasy: ${line.malagasyTranslation}`}
                      description="Malagasy Translation"
                      descriptionStyle={styles.translation}
                    />
                  </React.Fragment>
                ))}
              </List.Accordion>

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
                  {rule.content2.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                      <RNText style={styles.tableCell}>{item.vocabulary}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                      <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                    </View>
                  ))}
                </View>
              </List.Accordion>

              {/* New Accordion for Simple Present Tense Explanation */}
              <List.Accordion
                title="SIMPLE PRESENT TENSE"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content3[0].title}</Text>
                  <Text style={styles.content}>{rule.content3[0].description}</Text>
                </View>
              </List.Accordion>

              {/* New Accordion for Adverbs of Time (content4) */}
              <List.Accordion
                title="ADVERBS OF TIME"
                left={(props) => (
                  <List.Icon {...props} icon="clock" color='#8DA9C4' />
                )}
              >
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <RNText style={styles.tableHeader}>Adverb (English)</RNText>
                    <RNText style={styles.tableHeader}>French Translation</RNText>
                    <RNText style={styles.tableHeader}>Malagasy Translation</RNText>
                  </View>
                  {rule.content4?.map((content, contentIndex) =>
                    content.table?.map((item: { adverb: string; frenchTranslation: string; malagasyTranslation: string }, index: number) => (
                    <View key={index} style={styles.tableRow}>
                      <RNText style={styles.tableCell}>{item.adverb}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                      <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                    </View>
                  )))}
                </View>
                <RNText style={styles.example}>
    Ex: <Text style={{ fontWeight: 'bold' }}>(Every time)</Text> I go to visit my family every day/all the time/each day, (I’m happy.)
  </RNText>
              </List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules2.map((rule) => (
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
                title=" S+ADV.FREQ+V"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <RNText style={styles.tableHeader}>ADVERBS OF FREQUENCY</RNText>
                    <RNText style={styles.tableHeader}>ADVERBES DE FREQUENCE</RNText>
                    <RNText style={styles.tableHeader}>FAMARITAM-POTOANA</RNText>
                  </View>
                  {rule.content1.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                      <RNText style={styles.tableCell}>{item.vocabulary}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                      <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                    </View>
                  ))}
                </View>
                <RNText style={styles.example}>
  Ex: I <Text style={{ fontWeight: 'bold' }}>sometimes</Text> like to play the guitar and write a song.
  {'\n'}  {/* Retour à la ligne */}
  {'\u2192'} J’aime parfois jouer à la guitare et écrire de la chanson...
  {'\n\n'}  {/* Retour à la ligne */}
  Ex: I always go to the gym and work out.
  {'\n'}  {/* Retour à la ligne */}
  I<Text style={{ fontWeight: 'bold' }}> often</Text> stay home and relax and <Text style={{ fontWeight: 'bold' }}>sometimes</Text> I surf on the net.
</RNText>

              </List.Accordion>

                 {/* New Accordion for Simple Present Tense Explanation */}
              <List.Accordion
                title="AUXILIARY TO DO"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                {rule.content2.map((line, index) => (
                  <List.Item
                    key={index}
                    title={line.sentence}
                  
                    right={() => (
                      <IconButton
                        icon="volume-high"
                        size={24}
                        onPress={() => speak(line.sentence)}
                        iconColor="#8da9c4"
                      />
                    )}
                  />
                  )
                )}
                {rule.content2.map((line, index) => (
                  <React.Fragment key={index}>
                    <List.Item
                      title={`French: ${line.frenchTranslation}`}
                      description="French Translation"
                      descriptionStyle={styles.translation}
                    />
                    <List.Item
                      title={`Malagasy: ${line.malagasyTranslation}`}
                      description="Malagasy Translation"
                      descriptionStyle={styles.translation}
                    />
                  </React.Fragment>
                ))}
                 <RNText style={styles.example}>
  Ex: <Text style={{ fontWeight: 'bold' }}>Do</Text> you understand me? I <Text style={{ fontWeight: 'bold' }}>Don't</Text> understand you.
  {'\n'}  {/* Retour à la ligne */}TOUS LES VERBES QUI SE TERMINENT PAR “O, SH, CH, X, S et Y”:{'\n'}
  {`→ HE\n→ SHE\n→ IT`}
  <Text style={{ fontWeight: 'bold' }}> GO+ES/FINISH+ES/WATCH+ES/ FIX+ES/MISS+ES/CRY</Text> = <Text style={{ fontWeight: 'bold' }}>[IES]</Text>
</RNText>
                {/* Tableau Affirmative/Negative/Interrogative */}
  <View style={styles.table}>
    {/* En-tête du tableau */}
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>Affirmative</RNText>
      <RNText style={styles.tableHeader}>Negative</RNText>
      <RNText style={styles.tableHeader}>Interrogative</RNText>
    </View>

    {/* Corps du tableau */}
    {rule.content2.map((item, index) => (
      <View key={index} style={styles.tableRow}>
      {/* Affirmative */}
      <View style={styles.tableCell}>
        <RNText style={styles.cellText}>{item.affirmative1}</RNText>
        <RNText style={styles.cellText}>{item.affirmative2}</RNText>
        <RNText style={styles.cellText}>{item.affirmative3}</RNText>
      </View>
    
      {/* Negative */}
      <View style={styles.tableCell1}>
        <RNText style={styles.cellText}>{item.negative1}</RNText>
        <RNText style={styles.cellText}>{item.negative2}</RNText>
        <RNText style={styles.cellText}>{item.negative3}</RNText>
      </View>
    
      {/* Interrogative */}
      <View style={styles.tableCell}>
        <RNText style={styles.cellText}>{item.interrogative1}</RNText>
        <RNText style={styles.cellText}>{item.interrogative2}</RNText>
        <RNText style={styles.cellText}>{item.interrogative3}</RNText>
      </View>
    </View>
    ))}
    </View>
    </List.Accordion>
             
         {/* New Accordion for Adverbs of Time (content4) */}
         <List.Accordion
                title="PRACTICE LINKING WORDS"
                left={(props) => (
                  <List.Icon {...props} icon="book" color='#8DA9C4' />
                )}
              >
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <RNText style={styles.tableHeader}>Linking Words (English)</RNText>
                    <RNText style={styles.tableHeader}>French Translation</RNText>
                    <RNText style={styles.tableHeader}>Malagasy Translation</RNText>
                  </View>
                  {rule.content3?.map((content, contentIndex) =>
                    content.table?.map((item: { linkingWords: string; frenchTranslation: string; malagasyTranslation: string }, index: number) => (
                    <View key={index} style={styles.tableRow}>
                      <RNText style={styles.tableCell}>{item.linkingWords}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                      <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                    </View>
                  )))}
                </View>
                
              </List.Accordion>

            </List.Section>
          </Card.Content>
        </Card>
      ))}




{grammarRules3.map((rule) => (
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
                title="DAILY DIALOGUES"
                left={(props) => (
                  <List.Icon {...props} icon="handshake" color='#8da9c4' />
                )}
              >
                {rule.content1.map((line, index) => (
                  <List.Item
                    key={index}
                    title={line.sentence}
                    description={line.frenchTranslation}
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
                  )
                )}
                {rule.content1.map((line, index) => (
                  <React.Fragment key={index}>
                    <List.Item
                      title={`French: ${line.frenchTranslation}`}
                      description="French Translation"
                      descriptionStyle={styles.translation}
                    />
                    <List.Item
                      title={`Malagasy: ${line.malagasyTranslation}`}
                      description="Malagasy Translation"
                      descriptionStyle={styles.translation}
                    />
                  </React.Fragment>
                ))}
              </List.Accordion>

            
             
         {/* New Accordion for Adverbs of Time (content4) */}
         <List.Accordion
                title="VERBS "
                left={(props) => (
                  <List.Icon {...props} icon="book" color='#8DA9C4' />
                )}
              >
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <RNText style={styles.tableHeader}>Verbs (English)</RNText>
                    <RNText style={styles.tableHeader}>French Translation</RNText>
                
                  </View>
                  {rule.content2?.map((content, contentIndex) =>
                    content.table?.map((item: { verbs: string; frenchTranslation: string; }, index: number) => (
                    <View key={index} style={styles.tableRow}>
                       <RNText style={[styles.tableCell, { fontWeight: 'bold' }]}>{item.verbs}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                     
                    </View>
                  )))}
                </View>
                
              </List.Accordion>

              <List.Accordion
  title="DAILY DIALOGUES"
  left={(props) => (
    <List.Icon {...props} icon="handshake" color="#8da9c4" />
  )}
>
  {rule.content3.map((line, index) => (
    <List.Item
      key={index}
      title={line.sentence}
      titleStyle={[
        { fontSize: 14 },
        line.sentence.startsWith("→") && { fontWeight: "bold", color: "#4a4a4a" }
      ]}
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
  title="EXERCISES"
  left={(props) => (
    <List.Icon {...props} icon="book-open-variant" color="#8da9c4" />
  )}
>
  {rule.content4.map((exercise, index) => (
    <View key={index} style={{ paddingHorizontal: 3 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>{exercise.instructions}</Text>
      {exercise.questions.map((q, i) => (
        <List.Item
        key={i}
        title={() => (
          <Text style={{ flex: 2, flexWrap: 'wrap' }}>
            {q}
          </Text>
        )}
        right={() => (
          <IconButton
            icon="volume-high"
            size={20}
            onPress={() => speak(q)}
            iconColor="#8da9c4"
          />
        )}
      />      
      ))}
    </View>
  ))}
</List.Accordion>


            </List.Section>
          </Card.Content>
        </Card>
      ))}


{grammarRules4.map((rule) => (
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
                  title="EXPRESSING OPINIONS"
                  left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
                >
                {rule.content1.map((line, index) => (
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
                       title="EXPRESSING OPINIONS"
                       left={(props) => (
                         <List.Icon {...props} icon="comment" color="#8da9c4" />
                       )}
                     >
                       {rule.content2.map((line, index) => (
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
                    
                     <List.Accordion
  title="ADJECTIVES"
  left={(props) => (
    <List.Icon {...props} icon="brain" color="#8da9c4" />
  )}
>
  {rule.content3.map((item, index) => (
    <View key={index} style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
      <Text style={{ fontWeight: "bold", color: "#4a4a4a", fontSize: 14 }}>
        {item.sentence}
      </Text>
      <Text style={{ fontStyle: "italic", marginBottom: 8 }}>{item.translation}</Text>

      {item.examples.map((ex, exIndex) => (
        <View
          key={exIndex}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 4
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14 }}>{ex.sentence}</Text>
            <Text style={{ fontSize: 12, color: "#666" }}>{ex.translation}</Text>
          </View>
          <IconButton
            icon="volume-high"
            size={20}
            onPress={() => speak(ex.sentence)}
            iconColor="#8DA9C4"
          />
        </View>
      ))}
    </View>
  ))}
</List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      ))}


{grammarRules5.map((rule) => (
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
                  title="POUR COMMENCER"
                  left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
                >
                {rule.content1.map((line, index) => (
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
                title="POUR DEVELOPPER UN SUJET"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <RNText style={styles.tableHeader}>Linking words</RNText>
                    <RNText style={styles.tableHeader}>French Translation</RNText>
                    <RNText style={styles.tableHeader}>Malagasy Translation</RNText>
                  </View>
                  {rule.content2.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                      <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.linking}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                      <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                    </View>
                  ))}
                </View>
              </List.Accordion>
                    
                 <List.Accordion
                           title="PRACTICE"
                           left={(props) => (
                             <List.Icon {...props} icon="book-open" color="#8DA9C4" />
                           )}
                         >
                           {rule.content3.map((arg, index) => {
                             const boldPhrases = [
                               "A- What do you think about English?",
                               "to begin with",
                               "Not only",
                               "but also",
                               "I reckon that",
                               "to me",
                               "However",
                               "hopefully",
                             ];
                 
                             const regex = new RegExp(`(${boldPhrases.join('|')})`, 'gi');
                             const parts = arg.sentence.split(regex);
                 
                             return (
                               <List.Item
                                 key={index}
                                 title={() => (
                                   <Text>
                                     {parts.map((part, i) => {
                                       const isBold = boldPhrases.some(
                                         (phrase) =>
                                           phrase.toLowerCase() === part.trim().toLowerCase()
                                       );
                                       return (
                                         <Text key={i} style={isBold ? { fontWeight: 'bold' } : {}}>
                                           {part}
                                         </Text>
                                       );
                                     })}
                                   </Text>
                                 )}
                 
                               />
                             );
                           })}
                         </List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules6.map((rule) => (
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
                title="PRESENT PROGRESSIVE TENSE"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content1[0].title}</Text>
                  <Text style={styles.content}>{rule.content1[0].description}</Text>
                </View>
              </List.Accordion>
              
              {/* Second Accordion */}
              <List.Accordion
  title="ADVERBS"
  left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
>
  {/* Tableau 1 : Adverbs */}
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>ADVERBS OF TIME</RNText>
      <RNText style={styles.tableHeader}>ADVERBES DE TEMPS</RNText>
    </View>
    {rule.content2
      ?.find((c) => c.type === "adverbs")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>
            {'adverbs' in item ? item.adverbs : ''}
          </RNText>
          {'frenchTranslation1' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation1}</RNText>
          )}
        </View>
      ))}
  </View>

  {/* Tableau 2 : Affirmative / Interrogative / Negative */}
  <View style={[styles.table, { marginTop: 24 }]}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>Affirmative</RNText>
      <RNText style={styles.tableHeader}>Interrogative</RNText>
      <RNText style={styles.tableHeader}>Negative</RNText>
    </View>
    {rule.content2
      ?.find((c) => c.type === "sentenceForms")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {'affirmative' in item && (
            <RNText style={styles.tableCell}>{String(item.affirmative)}</RNText>
          )}
          {'interrogative' in item && (
            <RNText style={styles.tableCell}>{item.interrogative}</RNText>
          )}
          {'negative' in item && (
            <RNText style={styles.tableCell}>{item.negative}</RNText>
          )}
        </View>
      ))}
  </View>
</List.Accordion>

<List.Accordion
  title="EXERCISES"
  left={(props) => (
    <List.Icon {...props} icon="book-open-variant" color="#8da9c4" />
  )}
>
  {rule.content3.map((exercise, index) => (
    <View key={index} style={{ paddingHorizontal: 3 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>{exercise.instructions}</Text>
      {exercise.questions.map((q, i) => (
        <List.Item
        key={i}
        title={() => (
          <Text style={{ flex: 2, flexWrap: 'wrap' }}>
            {q}
          </Text>
        )}
        right={() => (
          <IconButton
            icon="volume-high"
            size={20}
            onPress={() => speak(q)}
            iconColor="#8da9c4"
          />
        )}
      />      
      ))}
    </View>
  ))}
</List.Accordion>

            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules7.map((rule) => (
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
              
              {/* Second Accordion */}
              <List.Accordion
  title="INFINITIVE VERBS"
  left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
>
  {/* Tableau 1 : Adverbs */}
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>ETAT MENTAUX</RNText>
    </View>
    {rule.content1
      ?.find((c) => c.type === "ETAT MENTAUX")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>
            {'infinitive' in item ? item.infinitive : ''}
          </RNText>
          {'frenchTranslation2' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation2}</RNText>
          )}
           {'malagasyTranslation1' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation1}</RNText>
          )}
        </View>
      ))}
  </View>

  {/* Tableau 2 : Affirmative / Interrogative / Negative */}
  <View style={[styles.table, { marginTop: 24 }]}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>ETATS EMOTIONS</RNText>
    </View>
    {rule.content1
      ?.find((c) => c.type === "ETATS EMOTIONS")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {'infinitive1' in item && (
            <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.infinitive1}</RNText>
          )}
          {'frenchTranslation3' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation3}</RNText>
          )}
          {'malagasyTranslation2' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation2}</RNText>
          )}
        </View>
      ))}
  </View>

   {/* Tableau 3 : Affirmative / Interrogative / Negative */}
   <View style={[styles.table, { marginTop: 24 }]}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>PERCEPTIONS</RNText>
    </View>
    {rule.content1
      ?.find((c) => c.type === "PERCEPTIONS")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {'infinitive2' in item && (
            <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.infinitive2}</RNText>
          )}
          {'frenchTranslation4' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation4}</RNText>
          )}
          {'malagasyTranslation3' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation3}</RNText>
          )}
        </View>
      ))}
  </View>

     {/* Tableau 4 : Affirmative / Interrogative / Negative */}
     <View style={[styles.table, { marginTop: 24 }]}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>APPARENCES</RNText>
    </View>
    {rule.content1
      ?.find((c) => c.type === "APPARENCES")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {'infinitive3' in item && (
            <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.infinitive3}</RNText>
          )}
          {'frenchTranslation5' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation5}</RNText>
          )}
          {'malagasyTranslation4' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation4}</RNText>
          )}
        </View>
      ))}
  </View>

   {/* Tableau 6 : Expressions / Interrogative / Negative */}
   <View style={[styles.table, { marginTop: 24 }]}>
  <View style={styles.tableRow}>
    <RNText style={styles.tableHeader}></RNText>
  </View>

  {rule.content1
    ?.find((c) => c.type === "expressions")
    ?.table.map((item, index) => (
      <View key={index} style={styles.tableRow}>
        {'expressions' in item && (
          <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.expressions}</RNText>
        )}
        {'frenchTranslation7' in item && (
          <RNText style={styles.tableCell}>{item.frenchTranslation7}</RNText>
        )}
      </View>
    ))}

  {/* 🔽 Affichage des exemples */}
  {rule.content1
    ?.find((c) => c.type === "expressions")
    ?.examples?.map((ex, idx) => (
      <View key={`example-${idx}`} style={{ marginTop: 12 }}>
        <RNText style={{ fontWeight: "bold" }}>- {ex.en}</RNText>
        <RNText>{ex.fr}</RNText>
        <RNText style={{ fontStyle: "italic", color: "#555" }}>{ex.mg}</RNText>
      </View>
    ))}
</View>

<View style={[styles.table, { marginTop: 24 }]}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}></RNText>
    </View>
    {rule.content1
      ?.find((c) => c.type === "expressions")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {'expressions1' in item && (
            <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.expressions1}</RNText>
          )}
          {'frenchTranslation7' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation7}</RNText>
          )}
          {'malagasyTranslation6' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation6}</RNText>
          )}
        </View>
      ))}
  </View>
</List.Accordion>
</List.Section>
  </Card.Content>
  </Card>
))}


{grammarRules8.map((rule) => (
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
                  title="THE DEFINITE ARTICLES ‘THE’ le, la, les, l’ (NY/ILAY)"
                  left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
                >
                {rule.content1.map((section, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
                {section.type === 'definition' && (
                <>
        {section.text.map((t, i) => (
          <Text key={i} style={{ marginBottom: 4 }}>{t}</Text>
        ))}
      </>
    )}
    {section.type === 'prononciation' && (
      <>
        <Text style={{ fontWeight: 'bold', marginTop: 8 }}>Prononciation :</Text>
        {section.text.map((t, i) => (
          <Text key={i} style={{ marginLeft: 8, marginBottom: 4 }}>{t}</Text>
        ))}
      </>
    )}
  </View>
))}
</List.Accordion>

<List.Accordion
    title="THE INDEFINITE ARTICLE A, AN un/une"
                  left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
                >
                {rule.content2.map((section, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
                {section.type === 'definition' && (
                <>
        {section.text.map((t, i) => (
          <Text key={i} style={{ marginBottom: 4 }}>{t}</Text>
        ))}
      </>
    )}
    {section.type === 'prononciation' && (
      <>
        <Text style={{ fontWeight: 'bold', marginTop: 8 }}>Prononciation :</Text>
        {section.text.map((t, i) => (
          <Text key={i} style={{ marginLeft: 8, marginBottom: 4 }}>{t}</Text>
        ))}
      </>
    )}
  </View>
))}
</List.Accordion>

<List.Accordion
  title="DEMONSTRATIVES"
  left={(props) => <List.Icon {...props} icon="gesture-tap" color="#8da9c4" />}
>
  {rule.content3.map((section, index) => (
    <View key={index}>
      {section.type === 'demonstratives_pair' &&
        section.pairs.map((pair, i) => (
          <View key={i} style={{ flexDirection: 'row', marginBottom: 16 }}>
            {/* Colonne gauche */}
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={{ fontWeight: 'bold' }}>{pair.left.label}</Text>
              <Text>{pair.left.description}</Text>
              <Text style={{ fontStyle: 'italic' }}>{pair.left.example}</Text>
              <Text>{pair.left.translation}</Text>
            </View>

            {/* Colonne droite */}
            <View style={{ flex: 1, paddingLeft: 8 }}>
              <Text style={{ fontWeight: 'bold' }}>{pair.right.label}</Text>
              <Text>{pair.right.description}</Text>
              <Text style={{ fontStyle: 'italic' }}>{pair.right.example}</Text>
              <Text>{pair.right.translation}</Text>
            </View>
          </View>
        ))
      }

      {/* Notes en bas */}
      {section.notes && section.notes.map((note, i) => (
        <Text key={`note-${i}`} style={{ marginTop: 4 }}>{note}</Text>
      ))}
    </View>
  ))}
</List.Accordion>

          
            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules9.map((rule) => (
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
                  title="PRONOUNS/POSSESSIVE ADJE/PRO"
                  left={(props) => <List.Icon {...props} icon="comment" color='#8da9c4' />}
                >
                {rule.content1.map((section, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
  <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>PRONOUNS         POSSESSIVES</Text>

  <View style={{ flexDirection: 'row', backgroundColor: '#ddd', padding: 8 }}>
    {['Personal', 'Object', 'Adj.', 'Pronoun', 'Reflexive'].map((h, idx) => (
      <Text key={idx} style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>{h}</Text>
    ))}
  </View>

  {grammarRules9[0].content1[0].rows.map((section, idx) => (
    <View key={idx}>
      <Text style={{ fontStyle: 'italic', marginTop: 10 }}>{section.label}</Text>
      {section.data.map((line, i) => (
        <View key={i} style={{ flexDirection: 'row', paddingVertical: 4 }}>
          {line.map((cell, j) => (
            <Text key={j} style={{ flex: 1, textAlign: 'center' }}>{cell}</Text>
          ))}
        </View>
      ))}
    </View>
  ))}
</View>
))}
</List.Accordion>

<List.Accordion
  title="SIMPLE PAST TENSE"
  left={(props) => <List.Icon {...props} icon="history" color="#8da9c4" />}
>
  {/* Grammatical Rule + Examples */}
<View style={{ paddingHorizontal: 8, marginBottom: 12 }}>
  <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Structure et Utilisation :</Text>
  {rule.content2[0]?.text?.map((line, index) => (
    <Text key={`rule-${index}`} style={{ marginBottom: 4 }}>
      {line}
    </Text>
  ))}

  {/* Affichage des exemples (type: 'examples') */}
  <Text style={{ fontWeight: 'bold', marginTop: 12, marginBottom: 6 }}>
    {rule.content2[1].title}
  </Text>
  {rule.content2[1]?.text?.map((example, index) => (
    <Text key={`example-${index}`} style={{ marginBottom: 4 }}>
      {example}
    </Text>
  ))}
</View>

 {/* Table: Affirmation / Négation / Interrogation */}
 <View style={{ paddingHorizontal: 8, marginBottom: 12 }}>
    <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>
      {rule.content2[2].title}
    </Text>
    <View style={{ flexDirection: 'row', marginBottom: 4 }}>
      {rule.content2[2]?.headers?.map((header, idx) => (
        <Text key={`header-${idx}`} style={{ flex: 1, fontWeight: '600' }}>
          {header}
        </Text>
      ))}
    </View>
    {rule.content2[2]?.rows?.map((row, rowIndex) => (
      <View key={`row-${rowIndex}`} style={{ flexDirection: 'row', marginBottom: 4 }}>
        {row.map((cell, cellIndex) => (
          <Text key={`cell-${rowIndex}-${cellIndex}`} style={{ flex: 1 }}>
            {cell}
          </Text>
        ))}
      </View>
    ))}
  </View>

   {/* Liste des Adverbes de temps */}
   <View style={{ paddingHorizontal: 8, marginBottom: 12 }}>
    <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>
      {rule.content2[3].title}
    </Text>
    {rule.content2[3]?.text?.map((item, index) => (
      <Text key={`adverb-${index}`} style={{ marginBottom: 4 }}>
        {item}
      </Text>
    ))}
  </View>

    {/* Narration */}
    {rule.content2.find((c) => c.type === 'narration') && (
    <View style={{ paddingHorizontal: 8, marginBottom: 12 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>
        {rule.content2.find((c) => c.type === 'narration')?.title}
      </Text>
      {rule.content2.find((c) => c.type === 'narration')?.text?.map((line, index) => (
        <Text key={`narration-${index}`} style={{ marginBottom: 4 }}>
          {line}
        </Text>
      ))}
    </View>
  )}


</List.Accordion>          
            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules10.map((rule) => (
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
              
                      {/* First Accordion */}
                      <List.Accordion
                title="VOCABULARY"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <RNText style={styles.tableHeader}></RNText>
                    <RNText style={styles.tableHeader}></RNText>
                    <RNText style={styles.tableHeader}></RNText>
                  </View>
                  {rule.content1.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                      <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.vocabulary}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                      <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                    </View>
                  ))}
                </View>
              </List.Accordion>
                    
                 <List.Accordion
                           title="PRACTICE"
                           left={(props) => (
                             <List.Icon {...props} icon="book-open" color="#8DA9C4" />
                           )}
                         >
                           {rule.content2.map((arg, index) => {
                             const boldPhrases = [
                               "Asked",
                               "to buy",
                               "On my way there",
                               "bumped into",
                               "excited",
                               "invited",
                               "to have a lunch",
                             ];
                 
                             const regex = new RegExp(`(${boldPhrases.join('|')})`, 'gi');
                             const parts = arg.sentence.split(regex);
                 
                             return (
                               <List.Item
                                 key={index}
                                 title={() => (
                                   <Text>
                                     {parts.map((part, i) => {
                                       const isBold = boldPhrases.some(
                                         (phrase) =>
                                           phrase.toLowerCase() === part.trim().toLowerCase()
                                       );
                                       return (
                                         <Text key={i} style={isBold ? { fontWeight: 'bold' } : {}}>
                                           {part}
                                         </Text>
                                       );
                                     })}
                                   </Text>
                                 )}
                 
                               />
                             );
                           })}
                         </List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      ))}


{grammarRules11.map((rule) => (
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
                title="PAST CONTINUOUS TENSE"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content1[0].title}</Text>
                  <Text style={styles.content}>{rule.content1[0].description}</Text>
                </View>
              </List.Accordion>
              
              {/* Second Accordion */}
              <List.Accordion
  title="ADVERBS"
  left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
>
   {/* Tableau 1 : Affirmative / Interrogative / Negative */}
  <View style={[styles.table, { marginTop: 24 }]}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>Affirmation</RNText>
      <RNText style={styles.tableHeader}>Negation</RNText>
      <RNText style={styles.tableHeader}>Interrogation</RNText>
    </View>
    {rule.content2
      ?.find((c) => c.type === "sentenceForms")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {'affirmative' in item && (
            <RNText style={styles.tableCell}>{String(item.affirmative)}</RNText>
          )}
          {'interrogative' in item && (
            <RNText style={styles.tableCell}>{item.negative}</RNText>
          )}
          {'negative' in item && (
            <RNText style={styles.tableCell}>{item.interrogative}</RNText>
          )}
        </View>
      ))}
  </View>

  {/* Tableau 2 : Adverbs */}
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>ADVERBS OF TIME</RNText>
      <RNText style={styles.tableHeader}>ADVERBES DE TEMPS</RNText>
    </View>
    {rule.content2
      ?.find((c) => c.type === "adverbs")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>
            {'adverbs' in item ? item.adverbs : ''}
          </RNText>
          {'frenchTranslation1' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation1}</RNText>
          )}
        </View>
      ))}
  </View>
</List.Accordion>

<List.Accordion
  title="EXERCISES"
  left={(props) => (
    <List.Icon {...props} icon="book-open-variant" color="#8da9c4" />
  )}
>
  {rule.content3.map((exercise, index) => (
    <View key={index} style={{ paddingHorizontal: 3 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>{exercise.instructions}</Text>
      {exercise.questions.map((q, i) => (
        <List.Item
        key={i}
        title={() => (
          <Text style={{ flex: 2, flexWrap: 'wrap' }}>
            {q}
          </Text>
        )}
        right={() => (
          <IconButton
            icon="volume-high"
            size={20}
            onPress={() => speak(q)}
            iconColor="#8da9c4"
          />
        )}
      />      
      ))}
    </View>
  ))}
</List.Accordion>

            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules12.map((rule) => (
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
                title="THE MODAL VERBS"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.content}>{rule.content1[0].description}</Text>
                </View>
              </List.Accordion>
              
                
              <List.Accordion
  title="MODAL VERBS – LES VERBES MODAUX"
  left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
>
  {/* Table des verbes modaux */}
  {rule.content2?.find((c) => c.type === "modalVerbs")?.table?.map((verbItem, idx) => (
    <View key={idx} style={{ marginTop: 16, paddingHorizontal: 12 }}>
      {/* Titre du modal verb */}
      <RNText style={{ fontWeight: "bold", fontSize: 16, marginBottom: 6 }}>
        {verbItem.verb}
      </RNText>

      {/* Temps et formes */}
      <View style={[styles.table, { marginBottom: 8 }]}>
        <View style={styles.tableRow}>
          <RNText style={styles.tableHeader}>Présent</RNText>
          <RNText style={styles.tableHeader}>Futur</RNText>
          <RNText style={styles.tableHeader}>Passé</RNText>
          <RNText style={styles.tableHeader}>Négation</RNText>
        </View>
        <View style={styles.tableRow}>
          <RNText style={styles.tableCell}>{verbItem.present}</RNText>
          <RNText style={styles.tableCell}>{verbItem.future}</RNText>
          <RNText style={styles.tableCell}>{verbItem.past}</RNText>
          <RNText style={styles.tableCell}>{verbItem.negative}</RNText>
        </View>
      </View>

      {/* Usages et exemples */}
      {verbItem.usages.map((usage, uIdx) => (
        <View key={uIdx} style={{ marginBottom: 12 }}>
          <RNText style={{ fontWeight: "600", marginBottom: 4 }}>{usage.type}</RNText>
          {usage.examples.map((ex, exIdx) => (
            <View key={exIdx} style={{ marginBottom: 4 }}>
              <RNText>• {ex.en}</RNText>
              <RNText style={{ color: "gray", marginLeft: 8 }}>{ex.fr}</RNText>
            </View>
          ))}
        </View>
      ))}
    </View>
  ))}

  {/* ✅ Section notes, une seule fois */}
  <View style={{ paddingHorizontal: 12, marginTop: 16 }}>
    {rule.content2?.find((c) => c.type === "modalVerbs")?.notes?.map((note, index) => (
      <RNText
        key={index}
        style={{
          fontStyle: note.trim().startsWith("-") ? "normal" : "italic",
          marginLeft: note.trim().startsWith("-") ? 24 : 12,
          marginVertical: 2
        }}
      >
        {note}
      </RNText>
    ))}
  </View>
</List.Accordion>

            </List.Section>
          </Card.Content>
        </Card>
      ))}


{grammarRules13.map((rule) => (
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
  title="MODAL VERBS- EXERCISES"
  left={(props) => (
    <List.Icon {...props} icon="book-open-variant" color="#8da9c4" />
  )}
>
  {rule.content1.map((exercise, index) => (
    <View key={index} style={{ paddingHorizontal: 3 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>{exercise.instructions}</Text>
      {exercise.questions.map((q, i) => (
        <List.Item
        key={i}
        title={() => (
          <Text style={{ flex: 2, flexWrap: 'wrap' }}>
            {q}
          </Text>
        )}
        right={() => (
          <IconButton
            icon="volume-high"
            size={20}
            onPress={() => speak(q)}
            iconColor="#8da9c4"
          />
        )}
      />      
      ))}
    </View>
  ))}
</List.Accordion>           
              
              {/* Second Accordion */}
              <List.Accordion
  title=" VOCABULARIES"
  left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
>
   
  {/* Tableau 2 : Vocabs */}
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>ENGLISH</RNText>
      <RNText style={styles.tableHeader}>FRENCH</RNText>
      <RNText style={styles.tableHeader}>MALAGASY</RNText>
    </View>
    {rule.content2
      ?.find((c) => c.type === "vocabs")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>
            {'vocabs' in item ? item.vocabs : ''}
          </RNText>
          {'frenchTranslation2' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation2}</RNText>
          )}
           {'malagasyTranslation4' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation4}</RNText>
          )}
        </View>
      ))}
  </View>
</List.Accordion>

            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules14.map((rule) => (
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
                title="WH-QUESTION"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content1[0].title}</Text>
                  <Text style={styles.content}>{rule.content1[0].description}</Text>
                </View>
              </List.Accordion>
              
              <List.Accordion
                title="RELATIVE PRONOUNS"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content2[0].title}</Text>
                  <Text style={styles.content}>{rule.content2[0].description}</Text>
                </View>
              </List.Accordion>
             

            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules15.map((rule) => (
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
                title="PRESENT PERFECT"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content1[0].title}</Text>
                  <Text style={styles.content}>{rule.content1[0].description}</Text>
                </View>
              </List.Accordion>
              
              <List.Accordion
                title="PRESENT PERFECT CONTINUOUS"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content2[0].title}</Text>
                  <Text style={styles.content}>{rule.content2[0].description}</Text>
                </View>
              </List.Accordion>
             

            </List.Section>
          </Card.Content>
        </Card>
      ))}

{grammarRules16.map((rule) => (
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
           
              
              {/* Second Accordion */}
              <List.Accordion
  title="VOCABULARIES"
  left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
>
  {/* Tableau 2 : Adverbs */}
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <RNText style={styles.tableHeader}>ENGLISH</RNText>
      <RNText style={styles.tableHeader}>FRENCH</RNText>
      <RNText style={styles.tableHeader}>MALAGASY</RNText>
    </View>
    {rule.content1
      ?.find((c) => c.type === "vocabs")
      ?.table.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>
            {'vocabs' in item ? item.vocabs : ''}
          </RNText>
          {'frenchTranslation3' in item && (
            <RNText style={styles.tableCell}>{item.frenchTranslation3}</RNText>
          )}
          {'malagasyTranslation5' in item && (
            <RNText style={styles.tableCell}>{item.malagasyTranslation5}</RNText>
          )}
        </View>
      ))}
  </View>
</List.Accordion>

<List.Accordion
                title="PAST CONTINUOUS TENSE"
                left={(props) => (
                  <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                )}
              >
                <View style={styles.content3Container}>
                  <Text style={styles.title}>{rule.content2[0].title}</Text>
                  <Text style={styles.content}>{rule.content2[0].description}</Text>
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
    fontSize: 14,
    marginBottom: 14,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
  },
  pronunciation: {
    fontStyle: 'italic',
    color: '#000000',
    fontSize: 14
  },
  translation: {
    fontStyle: 'italic',
    color: '#3a86ff',
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
  content3Container: {
    padding: 12,
  },
  example: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#000000',
    marginTop: 8,
  },
  tableCell1: {
    flex: 1,
    flexDirection: 'column', // Empile verticalement
    justifyContent: 'flex-end', // Aligner en bas de la cellule
    alignItems: 'flex-start', // Aligner le texte à gauche
    paddingHorizontal: 5,
    fontWeight: 'bold'
  },
  cellText: {
    fontSize: 14,
    color: '#333',
  },
});

export default GrammarScreen;
