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
            frenchTranslation3: " - Donner un coup à ", 
            malagasyTranslation5: " - Mikitika"
           },
           { vocabs: "TO PINCHSTH[pintr]", 
            frenchTranslation3: " - Pincer",  
            malagasyTranslation5: " - Manongo"
           },
          { vocabs: "TO SQUEEZE STH[skwiz]", 
            frenchTranslation3: " - Presser",
            malagasyTranslation5: " - Manapotsitra"
          },
          { vocabs: "TO MELT/THAW[fôou]",
            frenchTranslation3: " - Fondre",
            malagasyTranslation5: " - Mitsonika"
          },
          { vocabs: "TO CHOKE[trôk]",
            frenchTranslation3: " - S’étouffer",
            malagasyTranslation5: " - Kenda"
          },
          { vocabs: "TO SWALLOW[soalôou] STH",
            frenchTranslation3: " - Avaler",
            malagasyTranslation5: " - Mitelina"
          },
          { vocabs: "TO SPEW[spio]/VOMIT",
            frenchTranslation3: " - Vomir",
            malagasyTranslation5: " - Mandoa"
          },
          { vocabs: "TO QUENCHYOUR THIRST[koentr ior ferst]",
            frenchTranslation3: " - Se désaltérer",
            malagasyTranslation5: " - Manala hetaheta"
          },
          { vocabs: "TO TICKLE (reg)SB",
            frenchTranslation3: " - Chatouiller qlq1",
            malagasyTranslation5: " - Migiligilika"
          },
          { vocabs: "TO CHUCKLE[trakel]",
            frenchTranslation3: " - Rire tout bas",
            malagasyTranslation5: " - Mihomehy irery"
          },
          { vocabs: "TO BLOW [blôou]YOUR NOSE",
            frenchTranslation3: " - Se moucher",
            malagasyTranslation5: " - Manisin-delo"
          },
          { vocabs: "TO WIPE[waip] YOUR TEARS",
            frenchTranslation3: " - Essuyer ses larmes",
            malagasyTranslation5: " - Mamafa ny ranomaso"
          },
          { vocabs: "TO FART",
            frenchTranslation3: " - Péter",
            malagasyTranslation5: " - Mandefa rivotra"
          },
          { vocabs: "TO SPIT (A SALIVA) OUT",
            frenchTranslation3: " - Cracher",
            malagasyTranslation5: " - Mandrora"
          },
          { vocabs: "TO ITCH/TO BE ITCHY",
            frenchTranslation3: " - Démanger",
            malagasyTranslation5: " - Mangidihidy"
          },
          { vocabs: "TO PUT STH ON/PUT STH OFF",
            frenchTranslation3: " - Mettre qlqch sur/enlever qlqch",
            malagasyTranslation5: " - Miakanjo/Manala"
          },
          { vocabs: "TO TRY STH ON",
            frenchTranslation3: " - Essayer qlqch",
            malagasyTranslation5: " - Manohatra akanjo"
          },
          { vocabs: "TO STINK/REEK/TO BE STINKY",
            frenchTranslation3: " - Puer",
            malagasyTranslation5: " - Maimbo"
          },
          
          { vocabs: "TO BURP[berp]",
            frenchTranslation3: " - Roter",
            malagasyTranslation5: " - Mandrezatra"
          },
          { vocabs: "TO LICK",
            frenchTranslation3: " - Lécher",
            malagasyTranslation5: " - Milelaka"
          },
          { vocabs: "TO SUCK out/at STH[sak]",
            frenchTranslation3: " - Sucer",
            malagasyTranslation5: " - Minono/Mitsetsitra"
          },
          { vocabs: "TO STRANGLE [streingel]SB ",
            frenchTranslation3: " - Étrangler qlq1",
            malagasyTranslation5: " - Mikenda"
          },
          { vocabs: "TO HAVE A HANGOVER[hegnover]",
            frenchTranslation3: " - Avoir la gueule de bois",
            malagasyTranslation5: " - Makafoka"
          },
          { vocabs: "TO HANG UP[hegnap]",
            frenchTranslation3: " - Raccrocher",
            malagasyTranslation5: " - Manapaka resaka(phone)"
          },
          { vocabs: "TO PICK UP[pikap]",
            frenchTranslation3: " - Decrocher",
            malagasyTranslation5: " - Mandray antso(phone)"
          },
          { vocabs: "SWITCH ON/OFF",
            frenchTranslation3: " - Allumer/Éteindre",
            malagasyTranslation5: " - Mamelona/Mamono(jiro)"
          },
          { vocabs: "TO PEEL[pil]",
            frenchTranslation3: " - Éplucher",
            malagasyTranslation5: " - Mamofy"
          },
          { vocabs: "TO POUR[pour]",
            frenchTranslation3: " - Verser",
            malagasyTranslation5: " - Mandraraka"
          },
          { vocabs: "TO STIR[ster]",
            frenchTranslation3: " - Remuer",
            malagasyTranslation5: " - Manafangaro(siramamy)"
          },
          { vocabs: "TO HAVE ONE’S HAIR CUT",
            frenchTranslation3: " - Se couper les cheveux ",
            malagasyTranslation5: " - Mihety"
          },
          { vocabs: "TO CHEW[trou]",
            frenchTranslation3: " - Macher",
            malagasyTranslation5: " - Mitsako"
          },
          { vocabs: "TO BE NUMB[nam]",
            frenchTranslation3: " - Être engourdi",
            malagasyTranslation5: " - Voly/Ngoly/Maritry"
          },
          { vocabs: "TO BE DEAF[dif",
            frenchTranslation3: " - Être sourd",
            malagasyTranslation5: " - Marenina"
          },
          { vocabs: "TO BE DUMB[dam]",
            frenchTranslation3: " - Être muet",
            malagasyTranslation5: " - Moana"
          },
          { vocabs: "TO BE BLIND[blaind]",
            frenchTranslation3: " - Être aveugle",
            malagasyTranslation5: " - Jamba"
          },
          { vocabs: "TO BE BLOATED[blôoutid]",
            frenchTranslation3: " - Avoir le ventre ballonné",
            malagasyTranslation5: " - Kibo feno rivotra"
          },
          { vocabs: "TO BE DRUNK/SLOUSHED ",
            frenchTranslation3: " - Être ivre",
            malagasyTranslation5: " - Mamo"
          },
          { vocabs: "TO BE STINGY/MINGY",
            frenchTranslation3: " - Être radin/avare",
            malagasyTranslation5: " - Kaiatra/Kaidy"
          },
          { vocabs: "TO BE SELFISH",
            frenchTranslation3: " - Être égoïste",
            malagasyTranslation5: " - Tia tena"
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


const grammarRules17 = [
  {
    id: 1,
    title: 'Lesson 29: QUANTIFIERS—QUANTIFIEUR',
    description: 'BASIC GRAMMARS',
    content1: [
  {
    title: "→ QUANTIFIERS",
    description: [
      {
        ruleTitle: "SOME = DU, DE LA, DE L’, DES / QUELQUES",
        content: `→ Unspecified Number/Amount  
→ On emploie SOME avec des noms singuliers ou pluriels.  
→ Utilisé dans les phrases affirmatives.  

Exemples :  
▪ I need some water to drink.  
→ J’ai besoin de l’eau à boire.  
▪ There are some letters for you.  
→ Il y a des lettres pour vous.  

→ Formes composées :  
SOMEONE / SOMEBODY / SOMETHING / SOMEWHERE + Singulier  
Ex : There is someone who is looking for you outside.`
      },
      {
        ruleTitle: "ANY = DU, DE LA, DE L’, DES / N’IMPORTE QUEL / TOUT",
        content: `→ On emploie ANY avec des noms singuliers ou pluriels.  
→ Utilisé dans les phrases négatives et interrogatives.  

Exemples :  
▪ Do you have any problem?  
→ As-tu un problème ?  
▪ Are there any letters for me?  
→ Y a-t-il des lettres pour moi ?  
▪ There isn’t anyone at home.  
→ Il n'y a personne à la maison.  

→ Formes composées :  
ANYONE / ANYBODY / ANYTHING / ANYWHERE + Singulier`
      },
      {
        ruleTitle: "NO = RIEN / NE...PAS / AUCUN",
        content: `→ On emploie NO avec des noms singuliers ou pluriels.  
→ Utilisé dans une phrase affirmative, mais avec un sens négatif.  

Exemples :  
▪ I have no problem.  
→ Je n’ai aucun problème.  
▪ I have no letter for you.  
→ Je n’ai aucune lettre pour toi.  

→ Formes composées :  
NO ONE / NOBODY / NOTHING / NOWHERE = NULLE PART  
Ex : No one knows about it, man, just let it go!`
      },
      {
        ruleTitle: "HOW MANY / HOW MUCH (COMBIEN)",
        content: `→ On utilise HOW MANY pour les noms pluriels.  
→ On utilise HOW MUCH pour les noms incomptables / singuliers.  

Exemples :  
▪ How many students do you teach every day?  
→ Combien d’élèves enseignes-tu chaque jour ?  
▪ How much water did you drink today?  
→ Combien d’eau as-tu bu aujourd’hui ?  

Exemples :  
▪ I don’t have much money / time / water, sorry!  
→ Je n’ai pas beaucoup d’argent / de temps / d’eau.  
▪ There are [many] lemurs in Madagascar.  
→ Il y a beaucoup de lémuriens à Madagascar.  

→ MUCH / MANY = BEAUCOUP  
→ On emploie MUCH avec un nom singulier/incomptable  
→ On emploie MANY avec un nom pluriel`
      },
      {
        ruleTitle: "INSTEAD OF + V.ING = AU LIEU DE = NA DIA TOKONY...",
        content: `→ On emploie INSTEAD OF suivi du verbe à l’infinitif avec « VING ».  
→ Cela indique un choix alternatif ou un remplacement d'action.

Exemple :  
▪ I decided to stay home instead of going to the party.  
→ J’ai décidé de rester à la maison au lieu d’aller à la fête.`
      }
    ]
  }
]
   
  }
];

const grammarRules18 = [
  {
    id: 1,
    title: 'Lesson 30: QUANTIFIERS / A LOT OF / LOTS OF / PLENTY OF / A FEW / A LITTLE / ENOUGH / ALL OF / BOTH OF / WHOLE',
    description: 'BASIC GRAMMARS',
    content1: [
  {
    title: "QUANTIFIERS",
    description: [
      {
        ruleTitle: "A LOT OF / LOTS OF / PLENTY OF = BEAUCOUP DE",
        content: `→ S’emploient avec des noms indénombrables ou dénombrables pluriels.

Exemples :
▪ I have a lot of friends.
→ J’ai beaucoup d’amis.
▪ He drinks plenty of water.
→ Il boit beaucoup d’eau.
▪ There are lots of books on the table.
→ Il y a beaucoup de livres sur la table.`
      },
      {
        ruleTitle: "A FEW / A LITTLE = QUELQUES / UN PEU DE",
        content: `→ « A FEW » s’emploie avec des noms dénombrables pluriels.
→ « A LITTLE » s’emploie avec des noms indénombrables.

Exemples :
▪ I have a few friends.
→ J’ai quelques amis.
▪ She has a little money.
→ Elle a un peu d’argent.`
      },
      {
        ruleTitle: "ENOUGH = ASSEZ DE",
        content: `→ Peut être utilisé avant un nom, un adjectif ou un adverbe.

Exemples :
▪ I have enough money.
→ J’ai assez d’argent.
▪ He is not tall enough.
→ Il n’est pas assez grand.`
      },
      {
        ruleTitle: "ALL OF (YOU / THEM / US) / THE / MY / THESE = TOUS LES / MES / CES",
        content: `→ S’emploie avec les noms singuliers et pluriels.
→ Permet d’exprimer la totalité d’un groupe ou d’un ensemble.

Exemples :
▪ I like you all / all of you / them.
→ Je vous/les aime tous.
▪ He stole all my books.
→ Il a volé tous mes livres.
▪ All the books in the library are interesting.
→ Tous les livres de la bibliothèque sont intéressants.
▪ I drank all of the water in the bottle.
→ J’ai bu toute l’eau dans la bouteille.`
      },
      {
        ruleTitle: "BOTH OF (YOU / THEM / US) / THE = TOUS LES DEUX / LES DEUX",
        content: `→ S’emploie avec des noms pluriels.
→ Sert à désigner deux éléments ou deux personnes en même temps.

Exemples :
▪ Both (the) books are expensive.
→ Les deux livres sont chers.
▪ I like them both.
→ J’aime les deux.
▪ Both of them are my friends.
→ Les deux sont mes amis.
▪ Can you see it? – Yes, we both can.
→ Tu peux le voir ? – Oui, nous deux pouvons.`
      },
      {
        ruleTitle: "ALL (THE) / THE WHOLE (TIME / DAY / WEEK / MONTH / YEAR) = TOUT(E) LE / LA...",
        content: `→ « ALL » + nom pluriel ou singulier indénombrable.
→ « THE WHOLE » + nom singulier dénombrable.

Exemples :
▪ I spent all the day cleaning the house.
→ J’ai passé toute la journée à nettoyer la maison.
▪ He was busy the whole week.
→ Il a été occupé toute la semaine.
▪ She worked the whole year without a break.
→ Elle a travaillé toute l’année sans pause.
▪ They stayed here all the time.
→ Ils sont restés ici tout le temps.`
      }
    ]
  }
]

  }
];

const grammarRules19 = [
  {
    id: 1,
    title: 'Lesson 31: QUANTIFIERS / HALF / ONE OF/ EACH & EVERY/',
    description: 'BASIC GRAMMARS',
     content1: [
  {
    title: "",
    description: [
      {
        ruleTitle: "HALF OF THE/THESE/THEM = LA MOITIE DE CES",
        content: `→ On l’emploie avec le nom pluriel et singulier.
        
Exemples :
▪ I have read the half of the book.
→ J’ai déjà lu la moitié du livre.
▪ Half of the eggs are rotten.
→ La moitié des œufs sont pourris.`
      },
      {
        ruleTitle: "ONE OF YOU/THEM/US = L’UN(E) DE VOUS/NOUS",
        content: `→ On l’emploie avec le nom pluriel.
        
Exemples :
▪ Yesterday, I met one of my friends at the market.
→ Hier, j’ai rencontré un de mes amis au marché.
▪ One of his brothers is in America.
→ L'un de ses frères est en Amérique.`
      },
      {
        ruleTitle: "EACH & EVERY = CHAQUE/TOUT",
        content: `→ On l’emploie avec le nom singulier (CHAQUE).
        
Exemples :
▪ My teacher asked each of us to get our homework done by Monday.
→ Mon professeur a demandé à chacun de (d’entre) nous de finir nos devoirs d'ici lundi.`
      },
      {
        ruleTitle: "EACH OF YOU/THEM/US—EVERYONE OF YOU/THEM/US = CHACUN DE VOUS/NOUS",
        content: `→ On l’emploie avec le nom singulier.
        
Exemples :
▪ Each of you must do your best.
→ Chacun de vous doit donner son meilleur.
▪ Everyone of them was surprised.
→ Tout le monde parmi eux était surpris.`
      },
      {
        ruleTitle: "ANOTHER = UN AUTRE / OTHER = L’AUTRE",
        content: `→ "Another" s'emploie pour un autre élément. "Other" pour un élément parmi plusieurs.
        
Exemples :
▪ I need another more coke.
→ J’ai besoin d’un autre coca-cola.
▪ Give me the other one.
→ Donnez-moi l’autre.`
      },
      {
        ruleTitle: "EACH OTHER = L’UN À L’AUTRE / ONE ANOTHER = LES UNS LES AUTRES",
        content: `→ "Each other" est utilisé pour deux personnes, et "one another" pour plus de deux.
        
Exemples :
▪ We first need to help each other.
→ On doit d’abord s’entraider.
▪ We first need to talk to one another.
→ On doit d’abord discuter les uns les autres.`
      },
      {
        ruleTitle: "TOO MUCH = TROP (Nom singulier)",
        content: `→ Sera employé avec un nom singulier.
        
Exemples :
▪ I have drunk too much coke and I’m bloated.
→ J’ai bu trop de coca et je suis ballonné.`
      },
      {
        ruleTitle: "TOO MANY = TROP (Nom pluriel)",
        content: `→ Sera employé avec un nom pluriel.
        
Exemples :
▪ There are too many dogs in my town.
→ Il y a trop de chiens dans ma ville.`
      },
      {
        ruleTitle: "SO MUCH = TELLEMENT DE (Nom singulier)",
        content: `→ Sera employé avec un nom singulier.
        
Exemples :
▪ I have drunk so much coke that I’m bloated.
→ J’ai bu tellement de coca que je suis ballonné.`
      },
      {
        ruleTitle: "SO MANY = TELLEMENT DE (Nom pluriel)",
        content: `→ Sera employé avec un nom pluriel.
        
Exemples :
▪ There are so many dogs in my town.
→ Il y a tellement de chiens dans ma ville.`
      },
      {
        ruleTitle: "TOO/SO = AUSSI = TORAK’IZANY",
        content: `→ Utilisé pour indiquer que l’on fait ou ressent la même chose que l’autre.
        
Exemples :
▪ I like to eat pizza, and my children do, too.
→ J’aime manger de la pizza, et mes enfants aussi.
▪ He’s intelligent and I’m too.
→ Il est intelligent, et moi aussi.
▪ She is happy, and so is John.
→ Elle est heureuse, et John aussi.`
      },
      {
        ruleTitle: "SO = AUSSI / SI (TRÈS)",
        content: `→ Utilisé pour montrer la même chose ou une conséquence.
        
Exemples :
▪ I like to eat pizza, and so do my children.
→ J’aime manger de la pizza, et mes enfants aussi.
▪ I liked to eat pizza, and so did she.
→ J’aimais manger de la pizza, et elle aussi.
▪ She is happy, and so is John.
→ Elle est heureuse, et John aussi.
   
  SO DO I/SO AM I/IS HE/SHE = MOI AUSSI
  ME NEITHER  = MOI NON PLUS`
      }
    ]
  }
]
  }
];


const grammarRules20 = [
  {
    id: 1,
    title: 'Lesson 32: VOCABULARY',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        type: "vocabs",
        table: [
          { vocabs: "TO BE RIPE (raip) [raip]", 
            frenchTranslation3: " - Mûr", 
            malagasyTranslation5: " - Masaka"
           },
           { vocabs: "TO BE RAW (rô) [rôou]", 
            frenchTranslation3: " -  Cru",  
            malagasyTranslation5: " - Manta"
           },
          { vocabs: "TO BE TOUGH (taf)[taf]", 
            frenchTranslation3: " -  Dur",
            malagasyTranslation5: " - Mafy/Mahery"
          },
          { vocabs: "TO BE TENDER",
            frenchTranslation3: " - Tendre",
            malagasyTranslation5: " - Malefaka/Malemy"
          },
          { vocabs: "TO BE SWEET[swit]",
            frenchTranslation3: " -  Sucré",
            malagasyTranslation5: " -  Mamy"
          },
          { vocabs: "TO BE BITTER",
            frenchTranslation3: " - Amer",
            malagasyTranslation5: " - Mangidy"
          },
          { vocabs: "TO BE SOUR (saor)",
            frenchTranslation3: " - Aigre",
            malagasyTranslation5: " - Marikivy"
          },
          { vocabs: "TO BE SALTY[solti]",
            frenchTranslation3: " - Salé",
            malagasyTranslation5: " - Masira"
          },
          { vocabs: "TO BE DELICIOUS[delisies]YUMMY",
            frenchTranslation3: " - Délicieux",
            malagasyTranslation5: " - Matsiro"
          },
          { vocabs: "TO BE ROTTEN[raten]",
            frenchTranslation3: " - Pourri",
            malagasyTranslation5: " - Lo"
          },
          { vocabs: "TO GRATE[greit]",
            frenchTranslation3: " - Râper",
            malagasyTranslation5: " - Mikiky(karaoty)"
          },
          { vocabs: "TO PICK STH UP",
            frenchTranslation3: " - Ramasser",
            malagasyTranslation5: " - Mandraoka/maka"
          },
          { vocabs: "TO GAWK AT/GAZE AT[gok/geiz]",
            frenchTranslation3: " - Regarder qlq1 fixement",
            malagasyTranslation5: " - Mijery olona maharitra"
          },
          { vocabs: "TO BE WELL-COOKED[oel-koukt]",
            frenchTranslation3: " - Bien cuit",
            malagasyTranslation5: " - Masaka tsara(nandrahoana)"
          },
          { vocabs: "TO BE PEEK AT SB",
            frenchTranslation3: " -  Jetter un coup d’oeil ",
            malagasyTranslation5: " - Mitsirika/mangalatra mijery"
          },
          { vocabs: "TO BE DISGUSTING [disgastin]/TO BE YUKKY",
            frenchTranslation3: " - Dégoûtant",
            malagasyTranslation5: " - Ratsy/Mantsiravina"
          },
          { vocabs: "TO EXTEND[ikstend]",
            frenchTranslation3: " - Etendre",
            malagasyTranslation5: " - Manitatra"
          },
          { vocabs: "TO SMELL GOOD/BAD",
            frenchTranslation3: " - Sentir bon/mauvais",
            malagasyTranslation5: " - Manitra/Maimbo"
          },
          
          { vocabs: "TO BE SHABBY (sheibi)",
            frenchTranslation3: " - Rapé, élimé ",
            malagasyTranslation5: " - Vasoka"
          },
          { vocabs: "TO STAIN/ A STAIN",
            frenchTranslation3: " - Tacher/une tache",
            malagasyTranslation5: " - Misy pentina"
          },
          { vocabs: "TO SHRIVEL/WITHER",
            frenchTranslation3: " - Se déssecher ",
            malagasyTranslation5: " - Malazo(ravin-javatra)"
          },
          { vocabs: "TO SPROUT [spraot]",
            frenchTranslation3: " - Pousser",
            malagasyTranslation5: " - Mitsimoka"
          },
          { vocabs: "TO FLAKE (OUT)[fleik]",
            frenchTranslation3: " - S’écailler ",
            malagasyTranslation5: " - Mihitsana(volo)"
          },
          { vocabs: "TO DOZE OFF",
            frenchTranslation3: " - S’endormir",
            malagasyTranslation5: " - Tafatory"
          },
          { vocabs: "TO GAPE[geip]",
            frenchTranslation3: " - Regarder bouche bée",
            malagasyTranslation5: " - Midanàka"
          },
          { vocabs: "TO BRIBE SB[braib]",
            frenchTranslation3: " - Corrompre qlq1",
            malagasyTranslation5: " - Manao kolikoly"
          },
          { vocabs: "TO GET RID OF STH/SB",
            frenchTranslation3: " - Se débarrasser de qlqch/qlq1",
            malagasyTranslation5: " - Miala/mamaha olana"
          },
          { vocabs: "TO PREVENT SB FROM+V.ING[privent]",
            frenchTranslation3: " - Empêcher qlq1 de faire qlqch",
            malagasyTranslation5: " - Misakana olona tsy ..."
          },
          { vocabs: "TO BASE ON STH[beiz]",
            frenchTranslation3: " - Se baser sur qlchose",
            malagasyTranslation5: " - Mifototra"
          },
          { vocabs: "TO UNDERESTIMATE SB/STH[anderestimeit]",
            frenchTranslation3: " - Sous-estimer qlq1/qlqch",
            malagasyTranslation5: " - Manambanimbany"
          },
          { vocabs: "TO NEGLECT[niglekt]",
            frenchTranslation3: " - Négliger",
            malagasyTranslation5: " - Tsy miraharaha"
          },
          { vocabs: "TO IGNORE[ignor]",
            frenchTranslation3: " - Ignorer",
            malagasyTranslation5: " - Mody fanina"
          },
          { vocabs: "TO TAKE CARE OF SB",
            frenchTranslation3: " - Prendre soin de qlq1",
            malagasyTranslation5: " - Mikarakara olona"
          },
          { vocabs: "TO LOOK AFTER SB",
            frenchTranslation3: " - S’occuper de qlq1",
            malagasyTranslation5: " - Mikarakara olona"
          },
          { vocabs: "TO RESOLVE/SOLVE STH[rizalv]",
            frenchTranslation3: " - Résoudre",
            malagasyTranslation5: " - Mamaha olana"
          },
          { vocabs: "TO AVOID + VING[evoid]",
            frenchTranslation3: " - Éviter de faire qlqch",
            malagasyTranslation5: " - Misoroka/miala"
          },
          { vocabs: "TO RETAIN/KEEP STH",
            frenchTranslation3: " - Rétenir",
            malagasyTranslation5: " - Mitazona/mitahiry"
          },
          { vocabs: "TO PRACTICE[praktis]",
            frenchTranslation3: " - Pratiquer",
            malagasyTranslation5: " - Manazatra"
          },
          { vocabs: "TO APPLY[eplai]",
            frenchTranslation3: " - Appliquer",
            malagasyTranslation5: " - Mampihatra"
          },
          { vocabs: "TO MASTER[master]",
            frenchTranslation3: " - Maîtriser",
            malagasyTranslation5: " - Mahavoafehy"
          },
          { vocabs: "TO DO MY BEST TO+V.INF",
            frenchTranslation3: " - Faire de mon mieux pour faire qlqch",
            malagasyTranslation5: " - Manao izay azo atao"
          },
          { vocabs: "TO SNORE",
            frenchTranslation3: " - Ronfler",
            malagasyTranslation5: " - Miesona"
          },
          { vocabs: "TO YAWN[ion]",
            frenchTranslation3: " - Bâiller",
            malagasyTranslation5: " - Manoaka"
          },
          { vocabs: "TO SNEEZE",
            frenchTranslation3: " - Eternuer",
            malagasyTranslation5: " - Mievona"
          },
        ],
      },
    ],
   
  }
];

const grammarRules21 = [
  {
    id: 1,
    title: 'Lesson 33: PREPOSITIONS – PUNCTUATIONS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        type: "ENGLISH PREPOSITIONS",
        table: [
          { english: "TO", french: "à" },
          { english: "AT", french: "À" },
          { english: "IN", french: "Dans/à" },
          { english: "OF", french: "De/à" },
          { english: "WITH", french: "Avec" },
          { english: "FOR", french: "Pour" },
          { english: "AGAINST", french: "Contre" },
          { english: "THROUGH", french: "À travers" },
          { english: "ACROSS", french: "À travers" },
          { english: "BY", french: "Par/à" },
          { english: "ON", french: "Sur/À" },
          { english: "ALONG", french: "Au long de" },
          { english: "FROM", french: "Dès/ depuis" },
          { english: "AMONG(ST)", french: "Parmi/Entre" },
          { english: "UNDER", french: "Sous" },
          { english: "BELOW", french: "Au-dessous" },
          { english: "ABOVE", french: "Au-dessus" },
          { english: "UP", french: "En haut" },
          { english: "DOWN", french: "En bas" },
          { english: "BEYOND", french: "Au-delà" },
          { english: "AROUND/ABOUT", french: "Autour/ environ/ Au sujet de- Sur" },
          { english: "BETWEEN", french: "Entre" },
          { english: "BEFORE", french: "Avant/devant" },
          { english: "BESIDES/BESIDE", french: "À côté de" },
          { english: "INTO", french: "Dans" },
          { english: "INSIDE", french: "Dedans" },
          { english: "OUTSIDE", french: "Dehors/ en dehors" },
          { english: "TOWARD(S)", french: "Vers/ Envers" },
          { english: "FORWARD(S)", french: "En avant" },
          { english: "BACKWARD(S)", french: "En arrière" },
          { english: "OUT OF", french: "Hors" },
          { english: "OVER", french: "Par-dessus" },
          { english: "UNTIL", french: "Jusque" },
          { english: "STRAIGHT", french: "Droit" },
          { english: "DURING/FOR", french: "Pendant" },
          { english: "UPSIDE DOWN", french: "À l’envers/ la tête en bas" },
          { english: "INSIDE OUT", french: "À l’envers" },
          { english: "AT THE BOTTOM", french: "Au fond" },
          { english: "ON THE TOP", french: "Sur" },
        ],
      },
      {
        type: "PUNCTUATIONS",
        content: [
          ["COMMA : ,", "COLON : :"],
          ["SEMICOLON : ;", "FULL STOP / PERIOD : ."],
          ["DOT : .", "HYPHEN : -"],
          ["DASH : --", "QUESTION MARK : ?"],
          ["EXCLAMATION MARK : !", "PARENTHESIS : ( )"],
          ["BRACKETS : [ ]", "QUOTATION MARKS : “ ”"],
          ["SLASH / BACK SLASH : \\ /", "APOSTROPHE : ’"]
        ]
      }
            
    ]
  }
];

const grammarRules22 = [
  {
    id: 1,
    title: 'Lesson 34: ACTIVE-PASSIVE VOICE',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: " ACTIVE-PASSIVE VOICE",
        description: [
          {
            ruleTitle: "TO BE + V.PP = PASSIVE VOICE",
            content: `→ En général, on emploie la forme passive lorsqu'on ne s'intéresse pas à, ou ne connaît pas l'agent.  
→ Quand le sujet fait l'action, c'est la voix active, (la plus courante) :  
Ex : Marc watches TV. → Marc regarde la TV  
→ Quand le sujet subit l'action, c'est la voix passive :  
Ex : The TV is watched. → La télé est regardée. Ici, le sujet (la TV) subit l'action, elle est regardée.`
          },
          {
            ruleTitle: "TENSES COMPARISON TABLE",
            table: [
              { tense: "SIMPLE PRESENT", active: "John cooks the food", passive: "The food is cooked by John" },
              { tense: "PRESENT CONTINUOUS", active: "John is cooking the food", passive: "The food is being cooked by John" },
              { tense: "SIMPLE PAST", active: "John cooked the food", passive: "The food was cooked by John" },
              { tense: "PAST CONTINUOUS", active: "John was cooking the food", passive: "The food was being cooked by John" },
              { tense: "PRESENT PERFECT", active: "John has cooked the food", passive: "The food has been cooked by John" },
              { tense: "FUTURE", active: "John will cook the food", passive: "The food will be cooked by John" },
              { tense: "MODAL VERBS", active: "John may cook the food", passive: "The food may be cooked by John" },
            ]
          },
          {
            ruleTitle: "",
            content: `→ GET + V.PP = Se faire + V. (passif)
             You'll get fired = Tu vas te faire virer.
             Causative Form: To Have + Noun + V.PP = I'm having my car washed.
             Ex: We're having/getting the job done by the local builders.
            `
          },

        ]
      }
    ],
    content2: [
      {
        title: "FUTURE SIMPLE / CONTINUOUS TENSE",
        description: [
          {
            ruleTitle: "S + WILL (BE) + V(ING)",
            content: `• On emploie le Future pour parler de l'avenir.  
    • AMPIASAINA NY FUTURE SIMPLE/CONT TENSE ENTINA ILAZANA NY ZAVATRA MBOLA HOAVY.  
    → I will come to see you tomorrow.  
    Je viendrai te voir demain  
    → I’ll be gone tomorrow at this time.  
    Je serai parti demain à cette heure ci.`
          },
          {
            ruleTitle: "PRESENT CONTINUOUS = TO BE + V.ING",
            content: `• On emploie le Present Continuous pour parler de :  
      - Ce qui a été prévu ou décidé dans le futur = AMPIASAINA @ ZAVATRA EFA VOALAHATRA  
      Ex: We're having dinner at 8 o’clock = Nous dînons à 20h00  
      - Nos arrangements personnels  
      Ex: This weekend I'm leaving for Tana = Ce week-end je vais partir pour Tana`
          },
          {
            ruleTitle: "TO BE GOING TO + INF.",
            content: `• On l’emploie pour parler :  
      - D'une intention ou d’un désir  
      Ex: I'm going to call him = Je vais l’appeler  
      • Forme informelle : I'm gonna + V.inf.  
      Ex: I'm gonna eat = Je vais manger`
          }
        ]
      }
    ]
    
  }
];

const grammarRules23 = [
  {
    id: 1,
    title: 'Lesson 35: COMPARATIVE AND SUPERLATIVE FORMS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "COMPARATIVE AND SUPERLATIVE FORMS",
        description: [
          {
            ruleTitle: "COMPARATIVE FORM",
            type: "text",
            content: `On emploie le comparatif lorsqu’on est amené à comparer deux éléments (individus, groupes d'individus, objets, etc.)\n\nAMPIASAINA NY COMPARATIF RAHA HAMPITAHA ZAVATRA na OLONA ROA
            \n\nNote : Cette formule est utilisée avec les ADJECTIFS moins de 2 syllabes, ce qu’on appelle ADJECTIF COURT, 
               Ex : TO BE TALL = GRAND / TO BE PRETTY = JOLIE`
          },
          {
            type: "formula",
            content: "COMPARATIVE : S + ADJ + ER/IER + THAN [plus… que]"
          },
          {
            type: "examples",
            content: `Ex: You are tallER than me (I am) = Tu es plus grand que moi\n→ She is prettIER than you (you are) = Elle est plus jolie que toi.`
          },
          {
            type: "table",
            table: [
              { adjective: "Clean = propre", comparative: "Cleaner", superlative: "THE Cleanest" },
              { adjective: "Big = grand", comparative: "Bigger", superlative: "THE Biggest" },
              { adjective: "Nice = bien", comparative: "Nicer", superlative: "THE Nicest" },
              { adjective: "Tidy = bien rangé", comparative: "Tidier", superlative: "THE Tidiest" },
              { adjective: "Narrow = étroit", comparative: "Narrower", superlative: "THE Narrowest" }
            ]
          },
          {
            ruleTitle: "SUPERLATIVE FORM",
            type: "text",
            content: `On parle de superlatif lorsqu'on met en évidence qu'un élément se situe à l'extrémité d'un gradient.\n\nAMPIASAINA NY SUPERLATIF ENTINA ILAZANA ZAVATRA NA OLONA ANANKIRAY FARANY AMBONY INDRINDRA.`
          },
          {
            type: "formula",
            content: "SUPERLATIVE : S + THE + ADJ + EST/IEST + IN [le plus…]"
          },
          {
            type: "examples",
            content: `Ex: You are the tallEST in your basketball team = Vous êtes le plus grand dans votre équipe de basketball\n→ She is the prettIEST in my class.`
          },
          {
            ruleTitle: "IRREGULAR ADJECTIVES",
            type: "table",
            table: [
              { adjective: "Good", comparative: "Better", superlative: "THE Best" },
              { adjective: "Bad", comparative: "Worse", superlative: "THE Worst" },
              { adjective: "Far", comparative: "Farther / Further", superlative: "THE Furthest" },
              { adjective: "Old", comparative: "Older / Elder", superlative: "THE Oldest / Eldest" }
            ]
          }
        ]
      }
    ]
  }
];

const grammarRules24 = [
  {
    id: 1,
    title: 'Lesson 36: COMPARATIVE AND SUPERLATIVE FORMS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "COMPARATIVE AND SUPERLATIVE FORMS",
        description: [
          {
            ruleTitle: "DOUBLING THE CONSONANT",
            type: "text",
            content: `→ Les adjectifs d'une syllabe s'épelant "consonne + voyelle + consonne" redoublent cette dernière consonne.\n→ NY ADJECTIF IZAY MISY RENIN-TSORATRA + ZANATSORATRA + RENIN-TSORATRA DIA AMPIANA RENI-TSORATRA ANAKIRAY INDRAY MANDEHA.`
          },
          {
            type: "table",
            table: [
              { adjective: "Fat", comparative: "Fatter", superlative: "THE Fattest" },
              { adjective: "Big", comparative: "Bigger", superlative: "THE Biggest" },
              { adjective: "Sad", comparative: "Sadder", superlative: "THE Saddest" }
            ]
          },
          {
            ruleTitle: "ENDING WITH 'I' + CONSONANT",
            type: "text",
            content: `→ Les adjectifs d'une syllabe se terminant par "i" + "consonne" redoublent cette dernière consonne.`
          },
          {
            type: "table",
            table: [
              { adjective: "Thin", comparative: "Thinner", superlative: "THE Thinnest" }
            ]
          },
          {
            ruleTitle: "COMPARATIVE WITH LONG ADJECTIVES",
            type: "formula",
            content: "S + MORE + ADJECTIVE + THAN [plus… que]"
          },
          {
            type: "examples",
            content: `Ex: English is MORE important THAN French nowadays.\n→ L’Anglais est plus important que le Français.\n→ My young brother is more intelligent than I am / me.`
          },
          {
            ruleTitle: "SUPERLATIVE WITH LONG ADJECTIVES",
            type: "formula",
            content: "S + THE MOST + ADJECTIVE (+ IN THE) [le plus…]"
          },
          {
            type: "examples",
            content: `Ex: English is the most important language which I have ever known.\n→ L’Anglais est la langue la plus importante que je n’ai jamais connue.`
          },
          {
            ruleTitle: "INFERIORITY COMPARATIVE",
            type: "formula",
            content: "S + LESS + ADJECTIVE + THAN [moins… que]"
          },
          {
            type: "examples",
            content: `Ex: This book is less interesting than that one.\n→ Ce livre est moins intéressant que celui-là.`
          },
          {
            ruleTitle: "EQUALITY",
            type: "formula",
            content: "S + AS + ADJECTIVE + AS [aussi… que]"
          },
          {
            type: "examples",
            content: `EX : This comic is as funny as yours. → They are the same.\n→ Cette BD est aussi drôle que la tienne.`
          },
          {
            ruleTitle: "ADVANCED COMPARATIVE STRUCTURE",
            type: "examples",
            content: `= The more difficult it is, the more interested the pupils are.\n= Arakaraky ny maha-sarotra azy, no maha-liana ny mpianatra.`
          }
        ]
      }
    ]
  }
];

const grammarRules25 = [
  {
    id: 1,
    title: 'Lesson 37: THE CONDITIONAL – IF CLAUSES (SI)',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "IF CLAUSES (CONDITIONAL SENTENCES)",
        description: [
          {
            ruleTitle: "→ IF + SIMPLE PRESENT → FUTURE SIMPLE (WILL)",
            type: "examples",
            content: `Ex: If I have time, I will come to visit you.\n→ Si j’ai le temps, je viendrai te visiter.\n\n▪ What will you do, if you can speak English?\n→ Que feriez-vous, si vous pouvez parler l’Anglais ?`
          },
          {
            ruleTitle: "→ IF + SIMPLE PAST → CONDITIONAL PRESENT (WOULD)",
            type: "examples",
            content: `Ex: If I had money, I would buy that car.\n→ Si j’avais de l’argent, j’achèterais cette voiture.\n\n▪ What would you answer, if he asked you to marry him?\n→ Que répondrais-tu, s’il te demandait de l’épouser ?`
          },
          {
            ruleTitle: "→ IF I WERE YOU → CONDITIONAL PRESENT (WOULD)",
            type: "examples",
            content: `Ex: If I were rich, I would buy a big house.\n→ Si j’étais riche, j’achèterais une grande maison.\n\n▪ If you were a president, what would be your priority?\n→ Si vous étiez un président, quelle serait votre priorité ?`
          },
          {
            ruleTitle: "→ IF + PAST PERFECT → CONDITIONAL PAST (WOULD HAVE + VPP)",
            type: "examples",
            content: `✓ Il est impossible de remplir une condition qui est donnée dans le IF Clause.\n\nEx: If I had studied, I would have passed the exams.\n→ Si j'avais étudié, j'aurais passé les examens.`
          },
          {
            ruleTitle: "→ WHETHER...OR NOT = SI ... OUI NON",
            type: "examples",
            content: `Ex: I don't know whether he will come or not.\n→ Je ne sais pas s'il viendra ou non.`
          },
          {
            ruleTitle: "→ WHETHER...OR NOT = QUE...OU NON",
            type: "examples",
            content: `Ex: Wheter[weder] you want to or not, I don't care!\n→ Que tu le veuilles ou non, je m'en fous!.`
          },
          {
            ruleTitle: "→ EITHER...OR = SOIT...SOIT/OU...OU",
            type: "examples",
            content: `Ex: Either you stop complaining or I go home.`
          },
          {
            ruleTitle: "→ NEITHER... NOR = NI...NI",
            type: "examples",
            content: `Ex: I like neither[nider] tea nor coffee.\n→ Je n'aime ni le the ni le cafe.`
          },
          {
            ruleTitle: "→ NEITHER OF = AUCUNE DE...",
            type: "examples",
            content: `Ex: I like neither[nider] of them.\n→ Je n'aime aucun d'eux.`
          },
          
        ]
      }
    ]
  }
];

const grammarRules26 = [
  {
    id: 1,
    title: 'Lesson 40: THE ADVERBS',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "LES ADVERBES",
        description: [
          {
            ruleTitle: "→ Les adverbes peuvent se diviser en divers types selon leur sens",
            type: "examples",
            content: `→ Ny adverbes dia mizarazara maro isa-tsokajiny avy miankina @ ny dikany.`
          },
          {
            ruleTitle: "→ Adverbes de temps",
            type: "examples",
            content: `Ex: now (maintenant), then (alors), once (une fois), soon (bientôt), always (toujours), briefly (brièvement).`
          },
          {
            ruleTitle: "→ Adverbes de lieu",
            type: "examples",
            content: `Ex: here (ici), there (là-bas), everywhere (partout), up (en haut), down (en bas), back (derrière).`
          },
          {
            ruleTitle: "→ Adverbes de manière",
            type: "examples",
            content: `Ex: well (bien), clumsily (maladroitement), beautifully (merveilleusement).`
          },
          {
            ruleTitle: "→ Exemples d'adverbes de manière",
            type: "examples",
            content: `Ex: He does well = Il le fait bien.`
          },
          {
            ruleTitle: "→ Adverbes d'intensité",
            type: "examples",
            content: `Ex: Very/so much: I enjoyed your party. ~ Tellement/Beaucoup.`
          },
          {
            ruleTitle: "→ Adverbes d'intensité - Exemples",
            type: "examples",
            content: `Ex: How can you tell such lies?\n→ Comment peux-tu raconter de tels mensonges.\n\nEx: I don’t like classical music at all.\n→ Je n’aime pas du tout la musique classique.`
          },
          {
            ruleTitle: "→ Adverbes d'intensité - Autres exemples",
            type: "examples",
            content: `→ rather (plutôt), quite (assez), very (très), hardly (à peine), extremely (extrêmement), Almost (presque).`
          },
          {
            ruleTitle: "→ Exemples d'adverbes d'intensité",
            type: "examples",
            content: `Ex: It is rather good.\n→ C’est plutôt bien.\n\nEx: Even: même. ~ Tom knows that 2 and 2 make 4.\n→ Même Tom sait que 2 et 2 font 4.`
          },
          {
            ruleTitle: "→ Adverbes de restriction",
            type: "examples",
            content: `→ Even: même pas.\nEx: You don’t know it.\n→ Tu ne le sais même pas.`
          },
          {
            ruleTitle: "→ Adverbes de restriction - Autre exemple",
            type: "examples",
            content: `→ Only (seul, seulement / ne…que).\nEx: He only wants to help you.\n→ Il ne veut que t’aider.`
          },
          {
            ruleTitle: "→ Adverbes - Too / As well",
            type: "examples",
            content: `→ Too/As well: (aussi)\nEx: I like John and I like his wife, too/as well.\n→ J’aime John et j’aime aussi sa femme.`
          },
          {
            ruleTitle: "→ LES DIFFERENTES FORMES DES ADVERBES",
            type: "examples",
            content: `a) Les adverbes en –ly: On ajoute normalement cette terminaison directement à l'adjectif correspondant pour former un adverbe.`
          },
          {
            ruleTitle: "→ Exemples d'adverbes en –ly",
            type: "examples",
            content: `Ex: TO BE HAPPY = HAPPILY – heureusement\nEx: TO BE SWEET = SWEETLY – doucement`
          },
          {
            ruleTitle: "→ Exception pour les adjectifs en -ic",
            type: "examples",
            content: `Mais si l'adjectif se termine en -ic, on ajoute -ally.\nEx: TO BE CRITIC = CRITICALLY – Critiquement`
          },
          {
            ruleTitle: "→ Exceptions à la règle en –ly",
            type: "examples",
            content: `Les seules exceptions sont :\nEx: TO BE PUBLIC = PUBLICLY\nEx: TO BE POLITIC = POLITICALLY`
          },
          {
            ruleTitle: "→ b) Même forme que l'adjectif",
            type: "examples",
            content: `Certains adverbes ont la même forme que l'adjectif correspondant.\nEx: a fast car = une voiture rapide\nEx: he hit him hard = Il l’a frappé fort.`
          }
        ]
      }
    ]
  }
];

const grammarRules27 = [
  {
    id: 1,
    title: 'Lesson 41: REPORTED SPEECH',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "REPORTED SPEECH",
        description: [
          {
            ruleTitle: "→ On emploie le reported speech pour dire ce que quelqu'un a dit ( nous parlons presque du passé). Il y a deux façons de faire cela:",
            type: "examples",
            content: `→ Ampiasaina ny reported speech entina amerenana ny zavatra nolazain’olona, ary, saika zavatra efa lasa daholo ilay izy.`
          },
          {
            ruleTitle: "1. Discours direct",
            type: "examples",
            content: `Ex: He said: "I'm watching TV" → Izy dia nanao hoe: "Mijery TV aho".`
          },
          {
            ruleTitle: "2. Discours indirect",
            type: "examples",
            content: `Ex: He said (that) he was watching TV → Izy dia nanao hoe (fa) izy dia nijery TV.`
          },
          {
            ruleTitle: "Présent → Présent",
            type: "examples",
            content: `Ex: He says “I like living here” → R.S = He says (that) he likes living here.`
          },
          {
            ruleTitle: "SIMPLE Present(S+V+C)-----SIMPLE Past (S+PAST+C)\n PRESENT Continuous (I’M+ V.ING) PAST Continuous (WAS/WERE+V.ING)",
            type: "examples",
            content: `  → N’oubliez pas que le discours direct doit être entre guillemet :
Ex: He said :“I want to speak English”
Reported S= He said (that) he wantED to speak English..Simple past.
Ex: “I’m going to visit my buddy” He said→RS= He said (that) he was going tohisbuddy.
“Where do you live here?” He asked me→RS= He asked me where I lived.`
          },
          {
            ruleTitle: "SIMPLE Past (S+PAST+C)  PAST Perfect(HAD+VParticipe Passé)  PAST Continuous PAST Perf Cont (HAD BEEN+ V.ING)",
            type: "examples",
            content: ` Ex: “I spoke with him yesterday” I replied.
      R.S= I replied (that)I had spoken with him the day before.
Ex: “I was learning English” I said → R.S= I said (that) I had been learning English.
“DID you like it” He asked→ He asked if I liked it.`
          },
          {
            ruleTitle: "PRESENT perfect(Have+VPP) PAST perfect PRESENT Perf Cont (Have been+V.ING) PAST Perfect Continuous",
            type: "examples",
            content: `Ex: “Have you told him about it”He asked meHe asked me if I had told him about it
              “I have been living here for a year” He said He said (that) he had been for a year.`
          },
          {
            ruleTitle: "Future(WILL(BE)+(V+ING) Conditional present (WOULD)",
            type: "examples",
            content: `Ex: He said “I will call you” → R.S= He said (that) he would call me.`
          },
          {
            ruleTitle: "Les modaux (could, might, must, ought, should, would) restent inchangés",
            type: "examples",
            content: `   La plupart des modaux
(could, might, must, ought, should, would) restent inchanger dans le discours
indirect.
En revanche, can devient could et may devient might.
 “You should see a doctor” he told me = He told me that I should see a doctor.
 → Where/what/when/who/ → He asked me where I
                                            You whereYou
                                            Him/her where He/She
                                            Us where we`
          },
          
        ]
      }
    ]
  }
];

const grammarRules28 = [
  {
    id: 1,
    title: 'Lesson 42: REPORTED SPEECH',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "REPORTED SPEECH",
        description: [
          {
            ruleTitle: "→ SAY/TELL/ASK/ANSWER/REPLY = sont les verbes utilisés avec REPORTED SPEECH",
            type: "examples",
            content: `→ Ampiasaina ireo verbe ireo amin'ny fanehoana reported speech: SAY, TELL, ASK, ANSWER, REPLY, ary koa WONDER IF/WHETHER.`
          },
          {
            ruleTitle: "Correcte:",
            type: "examples",
            content: `He told me (that) he didn't know the answer. → He said (that) he didn't know the answer.`
          },
          {
            ruleTitle: "→ ORDRE:",
            type: "examples",
            content: `“Finish the job by Friday,” my boss said. → My boss told me to finish the job by Friday.\n“Do it now!” he said. → He ordered me to do the job right away.`
          },
          {
            ruleTitle: "→ DEMANDE ET YES OR NO QUESTION",
            type: "examples",
            content: `He said: “Can you pass me the salt?” → He asked me to pass the salt.\n“Can you help me?” I asked → I asked him if/whether he could help me.`
          },
          {
            ruleTitle: "To wonder if… = Se demander si...",
            type: "examples",
            content: `Ex: I wonder if she knows the truth. → Je me demande si elle connaît la vérité.`
          },
          {
            ruleTitle: "Exemples de possibilité de changement du temps ou lieu",
            type: "table",
            content: [
              { from: "NOW", to: "THEN / IMMEDIATELY" },
              { from: "TWO DAYS AGO", to: "TWO DAYS BEFORE / EARLIER" },
              { from: "TODAY", to: "THAT DAY" },
              { from: "LAST NIGHT", to: "THAT NIGHT" },
              { from: "TOMORROW", to: "THE NEXT / FOLLOWING DAY" },
              { from: "YESTERDAY", to: "THE DAY BEFORE" },
              { from: "TONIGHT", to: "THE NIGHT BEFORE" },
              { from: "HERE", to: "THERE" },
              { from: "THIS PLACE", to: "THAT PLACE" },
              { from: "THESE PLACES", to: "THOSE PLACES" },
              { from: "COME / BRING", to: "GO / TAKE" }
            ]
          },
          {
            ruleTitle: "Exemples",
            type: "examples",
            content: `“He has to do it now,” he said. → His boss said that he had to do it immediately.\n“I saw him two days ago,” he said. → He said he had seen him two days before.`
          },
          {
            ruleTitle: "→ What did you do last week?",
            type: "examples",
            content: `        Well, last week, I didn’t really have a bigger fish to fry, except, when my pal came and
asked me to go out with him to buy some stuff at the market, I didn’t wanna go, in fact, but he
actually persuaded me, then I decided. On our way there, we bumped into an American man,
and he seemed lost the guy and asked us   \n“Excuse me, can you speak English”and “Yes, we
can, how can we help you?” we replied. Then he said that he had been to the market and he
didn’t remember the way back, so, we asked him “Where do you wanna go?” “I wanna go
to the Colbert Hotel” He said. Then, we showed him the way to get there, and before he left,
he said “I thank you very much guys” and gave us some money. In fact, we told him that he
didn’t need to give us anything, but he didn’t accept until we took the compensation. And
then, we left for the market. Apart from that, I just discussed about the political situation in
Madagascar; we had a long talk, and I was just stunning when my father told me that he
wasn’t interested in politics. And all of a sudden, his friend showed up and our talk was
finished from there. That’s all I can remember for the last week.`
          }
        ]
      }
    ]
  }
];

const grammarRules29 = [
  {
    id: 1,
    title: 'Lesson 44: GERUNDIVE AND INFINITIVE',
    description: 'BASIC GRAMMARS',
    content1: [
      {
        title: "GERUNDIVE AND INFINITIVE",
        description: [
          {
            ruleTitle: "GERUNDIVE = verbe + ING après une préposition ou un nom",
            type: "examples",
            content: `Ex: I like eating – I hate doing the dishes in my spare time.\n- I’m feeling like (to) sleeping.\n- I’m looking forward to meeting my future wife.\n- I’m used to taking a nap every afternoon.`
          },
          {
            ruleTitle: "INFINITIVE = verbe à l'infinitif après certains verbes ou structures",
            type: "examples",
            content: `Ex: I always go to visit friends every weekend.\n- I don’t want to ask him to do anything which he doesn’t want to.\n- I try not to tell her what I feel in my heart.`
          },
          {
            ruleTitle: "TO SEE SB + V.ING = Voir quelqu’un faire quelque chose",
            type: "examples",
            content: `Ex: I saw him playing basketball yesterday. → Je l’ai vu jouer au basketball.\n- I didn’t see him doing his homework.`
          },
          {
            ruleTitle: "TO HEAR SB + V.ING = Entendre quelqu’un faire quelque chose",
            type: "examples",
            content: `Ex: I want to hear you playing the guitar. → Je veux t'entendre jouer de la guitare.`
          },
          {
            ruleTitle: "TO HELP SB + V.INF = Aider quelqu’un à faire quelque chose",
            type: "examples",
            content: `Ex: I try to help you remember what happened.`
          },
          {
            ruleTitle: "TO LET SB + V.INF = Laisser quelqu’un faire quelque chose",
            type: "examples",
            content: `Ex: Don’t let anyone bully you like that.`
          },
          {
            ruleTitle: "TO DARE (TO) + V.INF = Oser, ne pas avoir peur",
            type: "examples",
            content: `TO DARE est un verbe modal qui signifie ne pas avoir peur.\nEx: I don’t dare have that conversation with him.\nI daren’t have that conversation with him.\n→ Je n’ose pas avoir cette conversation avec lui.`
          },
          {
            ruleTitle: "",
            type: "examples",
            content: `What kind of movie do you watch? → Quel genre/sorte/type..       Inona ny karazana \n-What type of + Noun\n-What sort of.`
          },
        ]
      }
    ]
  }
];

const grammarRules30 = [
  {
    id: 2,
    title: 'Lesson 46: NUMBERS',
    description: 'TRICKY GRAMMARS',
    content1: [
      {
        title: 'CARDINAL AND ORDINAL NUMBERS',
        description: [
          {
            ruleTitle: 'CARDINAL NUMBERS – Utilisés pour compter',
            type: 'examples',
            content: `- En Anglais, la façon de dire le montant d’argent est pareille qu’en Français.\n→ HUNDRED = CENT\n→ THOUSAND [taozend] = MILLE\n→ MILLION [milen] = MILLION\n→ BILLION [bilen] = MILLIARD\n\nExemples :\n- (One) hundred = 100\n- One hundred and one = 101\n- One thousand and two hundred = 1 200\n- One million and two hundred thousand = 1 200 000\n- One billion and two hundred million = 1 200 000 000`
          },
          {
            ruleTitle: 'CARDINAL NUMBERS',
            type: 'table',
            content: [
              { from: 'One', to: 'Un' },
              { from: 'Two', to: 'Deux' },
              { from: 'Three', to: 'Trois' },
              { from: 'Four', to: 'Quatre' },
              { from: 'Five', to: 'Cinq' },
              { from: 'Six', to: 'Six' },
              { from: 'Seven', to: 'Sept' },
              { from: 'Eight', to: 'Huit' },
              { from: 'Nine', to: 'Neuf' },
              { from: 'Ten', to: 'Dix' },
              { from: 'Eleven', to: 'Onze' },
              { from: 'Twelve', to: 'Douze' },
              { from: 'Thirteen', to: 'Treize' },
              { from: 'Fourteen', to: 'Quatorze' },
              { from: 'Fifteen', to: 'Quinze' },
              { from: 'Sixteen', to: 'Seize' },
              { from: 'Seventeen', to: 'Dix-sept' },
              { from: 'Eighteen', to: 'Dix-huit' },
              { from: 'Nineteen', to: 'Dix-neuf' },
              { from: 'Twenty', to: 'Vingt' },
              { from: 'Twenty-one', to: 'Vingt et un' },
              { from: 'Twenty-two', to: 'Vingt-deux' },
              { from: 'Twenty-three', to: 'Vingt-trois' },
              { from: 'Twenty-four', to: 'Vingt-quatre' },
              { from: 'Twenty-five', to: 'Vingt-cinq' },
              { from: 'Twenty-six', to: 'Vingt-six' },
              { from: 'Twenty-seven', to: 'Vingt-sept' },
              { from: 'Twenty-eight', to: 'Vingt-huit' },
              { from: 'Twenty-nine', to: 'Vingt-neuf' },
              { from: 'Thirty', to: 'Trente' }
            ]
          },
          {
            ruleTitle: "THE NOUNS – Suivis de 'OF' pour exprimer des quantités vagues",
            type: "examples",
            content: `→ Hundreds of people : des centaines de gens
→ Thousands of trees : des milliers d'arbres
→ Dozens of eggs : des douzaines d'œufs
→ Scores of animals : des vingtaines d'animaux
→ Millions of people : des millions de gens
→ Hundreds of millions of people : des centaines de millions de gens

Exemple :
- The refugees arrived in their hundreds. → Les réfugiés arrivèrent par centaines.`
          },
          {
            ruleTitle: "c – We put AND before the group of ten/units:",
            type: "examples",
            content: `125 = one hundred and twenty-five \n1,012 = one thousand and twelve.`
          },
          {
            ruleTitle: 'ORDINAL NUMBERS',
            type: 'table',
            content: [
              { from: 'First', to: 'Première' },
              { from: 'Second', to: 'Deuxième' },
              { from: 'Third', to: 'Troisième' },
              { from: 'Fourth', to: 'Quatrième' },
              { from: 'Fifth', to: 'Cinquième' },
              { from: 'Sixth', to: 'Sixième' },
              { from: 'Seventh', to: 'Septième' },
              { from: 'Eighth', to: 'Huitième' },
              { from: 'Ninth', to: 'Neuvième' },
              { from: 'Tenth', to: 'Dixième' },
              { from: 'Eleventh', to: 'Onzième' },
              { from: 'Twelfth', to: 'Douzième' },
              { from: 'Thirteenth', to: 'Treizième' },
              { from: 'Fourteenth', to: 'Quatorzième' },
              { from: 'Fifteenth', to: 'Quinzième' },
              { from: 'Sixteenth', to: 'Seizième' },
              { from: 'Seventeenth', to: 'Dix-septième' },
              { from: 'Eighteenth', to: 'Dix-huitième' },
              { from: 'Nineteenth', to: 'Dix-neuvième' },
              { from: 'Twenty-first', to: 'Vingt et unième' },
              { from: 'Twenty-second', to: 'Vingt-deuxième' },
              { from: 'Twenty-third', to: 'Vingt-troisième' },
              { from: 'Twenty-fourth', to: 'Vingt-quatrième' },
              { from: 'Twenty-fifth', to: 'Vingt-cinquième' },
              { from: 'Twenty-sixth', to: 'Vingt-sixième' },
              { from: 'Twenty-seventh', to: 'Vingt-septième' },
              { from: 'Twenty-eighth', to: 'Vingt-huitième' },
              { from: 'Twenty-ninth', to: 'Vingt-neuvième' }
            ]
          }
        ]
      }
    ]
  }
];

const grammarRules31 = [
  {
    id: 1,
    title: 'Lesson 47: NUMBERS – SUMS',
    description: 'TRICKY GRAMMARS',
    content1: [
      {
        title: 'NUMBERS – SUMS',
        description: [
          {
            ruleTitle: 'Sums=Sommes',
            type: 'table',
            content: [
              { symbol: '+', word: 'Plus (And)', symbolFrench: 'Plus' },
              { symbol: '-', word: 'Minus (Take away)', symbolFrench: 'Moins' },
              { symbol: 'x', word: 'Multiplied by (Times)', symbolFrench: 'Fois' },
              { symbol: '÷', word: 'Divided by', symbolFrench: 'Divisé par' },
              { symbol: '=', word: 'Equals (Is)', symbolFrench: 'Égal(e)' },
              { symbol: '.', word: 'Point', symbolFrench: 'Point' },
              { symbol: '%', word: 'Percent', symbolFrench: 'Pourcent' }
            ]
          },
          {
            ruleTitle: 'EXAMPLES OF EXPRESSIONS',
            type: 'examples',
            content: `(((1 + 6) - 2) x 2) ÷ 2.5 = 4\n→ One plus six minus two multiplied by two divided by two point five equals four or\n→ One and six take away two times two divided by two point five is four.\n\n10% of 100 = 10\n→ Ten percent of one hundred equals ten.`
          },
          {
            ruleTitle: 'WHAT TO SAY',
            type: 'examples',
            content: `→ On dit souvent "a" au lieu de "one". Par exemple quand on a des nombres 100 ou 1/2 on dit "A hundred" ou "A half".\nPar exemple :\n- 11/2 = "One and a half."\n→ Quand on prononce les décimales, on utilise "Point" pour représenter le Dot (.) et les chiffres suivants sont prononcés séparément.\nPar exemple : 1.36 = "One point three six."`
          },
          {
            ruleTitle: 'DIFFERENT WAYS TO SAY ZERO',
            type: 'table',
            content: [
              { zero: '0', pronunciation: 'Oh', usage: 'After a decimal point, e.g., 9.02 = "Nine point oh two."' },
              { zero: '0', pronunciation: 'Nought', usage: 'Before a decimal point, e.g., 0.06 = "Nought point oh six."' },
              { zero: '0', pronunciation: 'Zero', usage: 'American English usage, e.g., -10°C = "Ten degrees below zero."' },
              { zero: '0', pronunciation: 'Nil', usage: 'In sports, e.g., Chelsea 2 Manchester United 0 = "Chelsea two Manchester United nil."' },
              { zero: '0', pronunciation: 'Love', usage: 'In tennis, e.g., 20 - 0 = "Twenty love."' }
            ]
          },

        ]
      },    
    ]
  }
];

const grammarRules32 = [
  {
    id: 1,
    title: 'Lesson 51: NOUNS IN PLURAL – NOMS AU PLURIEL',
    description: 'TRICKY GRAMMARS',
    content1: [
      {
        title: "NOUNS IN PLURAL",
        description: [
          {
            ruleTitle: "LIFE → LIVES = La vie",
            type: "examples",
            content: `Ex: Today, the people’s lives are at stake (en jeux).`
          },
          {
            ruleTitle: "CHILD → CHILDREN = Enfant",
            type: "examples",
            content: `Ex: There are many poor children.\n- She is a poor child.`
          },
          {
            ruleTitle: "WIFE → WIVES = Femme",
            type: "examples",
            content: `Ex: He has a lot of wives; he is so called a polygamist.`
          },
          {
            ruleTitle: "LEAF → LEAVES = Feuille",
            type: "examples",
            content: `Ex: There are plenty of leaves in the yard; you need to sweep them up.`
          },
          {
            ruleTitle: "MOUSE → MICE = Souris",
            type: "examples",
            content: `Ex: Oh gosh, I found many mice in your room.`
          },
          {
            ruleTitle: "LOUSE → LICE = Pou",
            type: "examples",
            content: `Ex: Look! Some lice in your hair.`
          },
          {
            ruleTitle: "V.INF → TO MAKE SB + rendre/faire quelqu’un heureux/pleurer",
            type: "examples",
            content: `Ex: You made me angry this time.\n- I didn't mean to make you cry.`
          },
          {
            ruleTitle: "ADJ → Descriptive Adjectives",
            type: "examples",
            content: `Ex: He made me feel happy.\n- This time, you made me angry.`
          },
        ]
      }
    ],
    content2: [
      {
        title: "TAG QUESTION—N’EST-CE-PAS",
        description: [
          {
            ruleTitle: "",
            type: "explanation",
            content: `En anglais, on peut transformer une phrase affirmative en question, en ajoutant un petit
tag, comme le n'est-ce-pas français. IZAY MIDIKA HOE SA TSY IZANY
→ Pour faire cette question tag, on regarde la phrase et son temps. S’il y a déjà un auxiliaire,
on le reprend à la forme inverse (phrase affirmative => question tag négatif OU phrase
négative => question tag affirmatif) et on remet le sujet.`
          },
          {
            ruleTitle: "Form of tag questions: AFF---NEGForm of tag questions: NEG---INTER",
            type: "table",
            content: [
              { verb: "BE", affirmative: "I’m late,", negative: "I’m not late,", negativeInterrogative: "Aren’t I?" },
              { verb: "BE", affirmative: "They’re waiting,", negative: "He isn’t leaving,", negativeInterrogative: "Aren’t they?" },
              { verb: "BE", affirmative: "We were late,", negative: "I wasn’t ill,", negativeInterrogative: "Weren’t we?" },
              { verb: "BE", affirmative: "It’s good, huh?", negative: "", negativeInterrogative: "Isn’t it?" },
              { verb: "HAVE", affirmative: "I’ve finished,", negative: "I haven’t finished,", negativeInterrogative: "Haven’t I?" },
              { verb: "HAVE", affirmative: "He’s left,", negative: "He hasn’t left,", negativeInterrogative: "Hasn’t he?" },
              { verb: "DO/DOES/DID", affirmative: "You like it,", negative: "You don’t like it,", negativeInterrogative: "Don’t you?" },
              { verb: "DO/DOES/DID", affirmative: "It works,", negative: "It doesn’t work,", negativeInterrogative: "Doesn’t it?" },
              { verb: "DO/DOES/DID", affirmative: "You painted it,", negative: "You didn’t paint it,", negativeInterrogative: "Didn’t you?" },
              { verb: "WILL", affirmative: "You will do it,", negative: "You won’t be there,", negativeInterrogative: "Won’t you?" }
        ]
          },
          {
            ruleTitle: "Note",
            type: "explanation",
            content: `Parfois, la phrase ne comporte pas d'auxiliaire, le présent simple ou le prétérit simple par exemple. Il faut alors prendre l'auxiliaire de remplacement TO DO et le conjuguer au temps voulu. Exemple : John works hard every day → on prend TO DO au présent simple avec "He" cela donne "Doesn’t he?"`
          },    
          {
            ruleTitle: "Example",
            type: "examples",
            content: `Ex: John works hard every day → Doesn't he?`
          }
        ]
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

      {grammarRules17.map((rule) => (
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
  title={rule.content1[0].title}
  left={(props) => (
    <List.Icon {...props} icon="book-open" color='#8DA9C4' />
  )}
>
  {rule.content1[0].description.map((item, index) => (
    <View key={index} style={styles.content3Container}>
      <Text style={styles.ruleTitle}>{item.ruleTitle}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  ))}
</List.Accordion>

            </List.Section>
          </Card.Content>
        </Card>
      ))}

      {grammarRules18.map((rule) => (
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
  title="QUANTIFIERS/ A LOT OF/ LOTS OF / PLENTY OF/A FEW/ A LITTLE"
  left={(props) => (
    <List.Icon {...props} icon="book-open" color="#8DA9C4" />
  )}
>
  <View style={styles.content3Container}>
    <Text style={styles.title}>{rule.content1[0].title}</Text>

    {rule.content1[0].description.map((section, index) => (
      <View key={index} style={styles.ruleBox}>
        <Text style={styles.ruleTitle}>{section.ruleTitle}</Text>
        <Text style={styles.ruleContent}>{section.content}</Text>
      </View>
    ))}
  </View>
</List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      ))}

       {grammarRules19.map((rule) => (
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
  title="QUANTIFIERS / HALF / ONE OF/ EACH & EVERY/ "
  left={(props) => (
    <List.Icon {...props} icon="book-open" color="#8DA9C4" />
  )}
>
  <View style={styles.content3Container}>
    <Text style={styles.title}>{rule.content1[0].title}</Text>

    {rule.content1[0].description.map((section, index) => (
      <View key={index} style={styles.ruleBox}>
        <Text style={styles.ruleTitle}>{section.ruleTitle}</Text>
        <Text style={styles.ruleContent}>{section.content}</Text>
      </View>
    ))}
  </View>
</List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      ))}

      {grammarRules20.map((rule) => (
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
            </List.Section>
          </Card.Content>
        </Card>
      ))}

       
{grammarRules21.map((rule) => (
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
          title="ENGLISH PREPOSITIONS"
          left={(props) => <List.Icon {...props} icon="book" color="#8DA9C4" />}
        >
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <RNText style={[styles.tableHeader, styles.tableCell]}>ENGLISH</RNText>
              <RNText style={[styles.tableHeader, styles.tableCell]}>FRENCH</RNText>
            </View>
            {rule.content1?.find((c) => c.type === "ENGLISH PREPOSITIONS")?.table?.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                  <RNText style={[styles.tableCell, { fontWeight: "bold" }]}>{item.english}</RNText>
                  <RNText style={styles.tableCell}>{item.french}</RNText>
                </View>
              ))}
          </View>
        </List.Accordion>
        <List.Accordion
  title="PUNCTUATIONS"
  left={(props) => <List.Icon {...props} icon="pencil" color="#8DA9C4" />}
>
  <View style={{ paddingHorizontal: 8, gap: 8 }}>
    {(rule.content1?.find(c => c.type === "PUNCTUATIONS")?.content || []).map((pair, index) => (
      <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {pair.map((item, idx) => (
          <Text key={idx} style={{ flex: 1, paddingRight: 6, lineHeight: 22 }}>{item}</Text>
        ))}
      </View>
    ))}
  </View>
</List.Accordion>

      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules22.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => (
            <List.Icon {...props} icon="book-open" color='#8DA9C4' />
          )}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              <Text style={styles.ruleTitle}>{item.ruleTitle}</Text>
              
              {/* Affichage du texte si disponible */}
              {item.content && (
                <Text style={styles.content}>{item.content}</Text>
              )}

              {/* Affichage du tableau s'il existe */}
              {item.table && (
                <View style={styles.tableContainer}>
                  <View style={styles.tableHeader1}>
                    <Text style={styles.tableCell}>Tense</Text>
                    <Text style={styles.tableCell}>Active</Text>
                    <Text style={styles.tableCell}>Passive</Text>
                  </View>
                  
                  {item.table.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.tableRow1}>
                      <Text style={styles.tableCell}>{row.tense}</Text>
                      <Text style={styles.tableCell}>{row.active}</Text>
                      <Text style={styles.tableCell}>{row.passive}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </List.Accordion>
         
        <List.Accordion
  title={rule.content2[0].title}
  left={(props) => (
    <List.Icon {...props} icon="calendar" color='#8DA9C4' />
  )}
>
  {rule.content2[0].description.map((item, index) => (
    <View key={index} style={styles.content3Container}>
      <Text style={styles.ruleTitle}>{item.ruleTitle}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  ))}
</List.Accordion>

      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules23.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {item.ruleTitle && <Text style={styles.ruleTitle}>{item.ruleTitle}</Text>}

              {item.type === 'text' && (
                <Text style={styles.content}>{item.content}</Text>
              )}

              {item.type === 'formula' && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.content}</Text>
                </View>
              )}

              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
              )}

              {item.type === 'table' && item.table && (
                <View style={styles.tableContainer}>
                  <View style={styles.tableHeader2}>
                    <Text style={styles.tableCell}>Adjective</Text>
                    <Text style={styles.tableCell}>Comparative</Text>
                    <Text style={styles.tableCell}>Superlative</Text>
                  </View>

                  {item.table.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.tableRow2}>
                      {/* Adjective */}
                      <Text style={styles.tableCell}>{row.adjective}</Text>

                      {/* Comparative */}
                      <Text style={styles.tableCell}>
                        {row.comparative.endsWith('ier') ? (
                          <>
                            {row.comparative.slice(0, -3)}
                            <Text style={{ fontWeight: 'bold' }}>ier</Text>
                          </>
                        ) : row.comparative.endsWith('er') ? (
                          <>
                            {row.comparative.slice(0, -2)}
                            <Text style={{ fontWeight: 'bold' }}>er</Text>
                          </>
                        ) : (
                          row.comparative
                        )}
                      </Text>

                      {/* Superlative */}
                      <Text style={styles.tableCell}>
                        {row.superlative.startsWith('THE ') ? (
                          <>
                            <Text style={{ fontWeight: 'bold' }}>THE </Text>
                            {row.superlative.includes('iest') ? (
                              <>
                                {row.superlative.slice(4, -4)}
                                <Text style={{ fontWeight: 'bold' }}>iest</Text>
                              </>
                            ) : row.superlative.includes('est') ? (
                              <>
                                {row.superlative.slice(4, -3)}
                                <Text style={{ fontWeight: 'bold' }}>est</Text>
                              </>
                            ) : (
                              row.superlative.slice(4)
                            )}
                          </>
                        ) : (
                          row.superlative
                        )}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules24.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {item.ruleTitle && <Text style={styles.ruleTitle}>{item.ruleTitle}</Text>}

              {item.type === 'text' && (
                <Text style={styles.content}>{item.content}</Text>
              )}

              {item.type === 'formula' && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.content}</Text>
                </View>
              )}

              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
              )}

              {item.type === 'table' && item.table && (
                <View style={styles.tableContainer}>
                  <View style={styles.tableHeader2}>
                    <Text style={styles.tableCell}>Adjective</Text>
                    <Text style={styles.tableCell}>Comparative</Text>
                    <Text style={styles.tableCell}>Superlative</Text>
                  </View>

                  {item.table.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.tableRow2}>
                      {/* Adjective */}
                      <Text style={styles.tableCell}>{row.adjective}</Text>

                      {/* Comparative */}
                      <Text style={styles.tableCell}>
                        {row.comparative.endsWith('ier') ? (
                          <>
                            {row.comparative.slice(0, -3)}
                            <Text style={{ fontWeight: 'bold' }}>ier</Text>
                          </>
                        ) : row.comparative.endsWith('er') ? (
                          <>
                            {row.comparative.slice(0, -2)}
                            <Text style={{ fontWeight: 'bold' }}>er</Text>
                          </>
                        ) : (
                          row.comparative
                        )}
                      </Text>

                      {/* Superlative */}
                      <Text style={styles.tableCell}>
                        {row.superlative.startsWith('THE ') ? (
                          <>
                            <Text style={{ fontWeight: 'bold' }}>THE </Text>
                            {row.superlative.includes('iest') ? (
                              <>
                                {row.superlative.slice(4, -4)}
                                <Text style={{ fontWeight: 'bold' }}>iest</Text>
                              </>
                            ) : row.superlative.includes('est') ? (
                              <>
                                {row.superlative.slice(4, -3)}
                                <Text style={{ fontWeight: 'bold' }}>est</Text>
                              </>
                            ) : (
                              row.superlative.slice(4)
                            )}
                          </>
                        ) : (
                          row.superlative
                        )}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules25.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Affichage du ruleTitle dans une formulaBox */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Contenu des exemples en italique */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>
                  {typeof item.content === 'string' ? (
                  item.content
                  ) : Array.isArray(item.content) ? (
                  (item.content as { from: string; to: string }[]).map((row, index) => (
                    <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{row.from}</Text>
                    <Text style={styles.tableCell}>{row.to}</Text>
                    </View>
                  ))
                  ) : null}
                </Text>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules26.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Affichage du ruleTitle dans une formulaBox */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Contenu des exemples en italique */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules27.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Affichage du ruleTitle dans une formulaBox */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Contenu des exemples en italique */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules28.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => (
            <List.Icon {...props} icon="book-open" color="#8DA9C4" />
          )}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Affichage du ruleTitle dans une formulaBox */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Affichage du contenu en italique pour les exemples */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>
                  {typeof item.content === 'string' ? (
                    item.content
                  ) : Array.isArray(item.content) ? (
                    item.content.map((row, index) => (
                      <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{row.from}</Text>
                        <Text style={styles.tableCell}>{row.to}</Text>
                      </View>
                    ))
                  ) : null}
                </Text>
              )}

              {/* Affichage du tableau si le type est 'table' */}
              {item.type === 'table' &&
                Array.isArray(item.content) &&
                (item.content as { from: string; to: string }[]).length > 0 && (
                  <View style={styles.tableContainer}>
                    <View style={styles.tableRowHeader}>
                      <Text style={styles.tableHeaderText}>From</Text>
                      <Text style={styles.tableHeaderText}>To</Text>
                    </View>
                    {(item.content as { from: string; to: string }[]).map(
                      (row, i) => (
                        <View key={i} style={styles.tableRow}>
                          <Text style={styles.tableCell}>{row.from}</Text>
                          <Text style={styles.tableCell}>{row.to}</Text>
                        </View>
                      )
                    )}
                  </View>
                )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules29.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Titre de la règle */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Exemples en italique */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{grammarRules30.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Titre de la règle */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Contenu exemples */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>
                  {typeof item.content === 'string' ? (
                    item.content
                  ) : Array.isArray(item.content) ? (
                    item.content.map((row, index) => (
                      <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{row.from}</Text>
                        <Text style={styles.tableCell}>{row.to}</Text>
                      </View>
                    ))
                  ) : null}
                </Text>
              )}

              {/* Contenu tableau */}
              {item.type === 'table' && (
                <View style={styles.tableContainer}>
                  {Array.isArray(item.content) && item.content.map((row: { from: string; to: string }, rowIndex: number) => (
                    <View
                      key={rowIndex}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 4,
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ccc'
                      }}
                    >
                      <Text style={styles.tableText}>{row.from}</Text>
                      <Text style={styles.tableText}>{row.to}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}


{grammarRules31.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Titre de la règle */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Contenu exemples */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>
                  {typeof item.content === 'string' ? (
                    item.content
                  ) : Array.isArray(item.content) ? (
                    item.content.map((row, index) => (
                      <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>
                          {('symbol' in row && row.symbol) || 
                           ('zero' in row && row.zero)}
                        </Text>
                      </View>
                    ))
                  ) : null}
                </Text>
              )}

              {/* Contenu tableau */}
              {item.type === 'table' && (
                <View style={styles.tableContainer}>
                  <View style={styles.tableHeaderRow}>
                    <Text style={[styles.tableHeaderText, styles.symbolColumn]}>Symbols</Text>
                    <Text style={[styles.tableHeaderText, styles.wordColumn]}>Word (Common term in brackets)</Text>
                    <Text style={[styles.tableHeaderText, styles.symbolFrenchColumn]}>Symboles</Text>
                  </View>
                  {Array.isArray(item.content) && item.content.map((row, rowIndex) => (
                    <View
                      key={rowIndex}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 8,
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ccc',
                        paddingHorizontal: 10,
                      }}
                    >
                      {'symbol' in row && (
                        <View style={styles.tableCellContainer}>
                          <Text style={[styles.tableText, styles.symbolColumn]}>{row.symbol}</Text>
                        </View>
                      )}
                      {'word' in row && (
                        <View style={styles.tableCellContainer}>
                          <Text style={[styles.tableText, styles.wordColumn]}>{row.word}</Text>
                        </View>
                      )}
                      {'symbolFrench' in row && (
                        <View style={styles.tableCellContainer}>
                          <Text style={[styles.tableText, styles.symbolFrenchColumn]}>{row.symbolFrench}</Text>
                        </View>
                      )}
                      {'zero' in row && (
                        <View style={styles.tableCellContainer}>
                          <Text style={styles.tableText}>{row.zero}</Text>
                        </View>
                      )}
                      {'pronunciation' in row && (
                        <View style={styles.tableCellContainer}>
                          <Text style={styles.tableText}>{row.pronunciation}</Text>
                        </View>
                      )}
                      {'usage' in row && (
                        <View style={styles.tableCellContainer}>
                          <Text style={styles.tableText}>{row.usage}</Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}


{grammarRules32.map((rule) => (
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
          title={rule.content1[0].title}
          left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
        >
          {rule.content1[0].description.map((item, index) => (
            <View key={index} style={styles.content3Container}>
              {/* Titre de la règle */}
              {item.ruleTitle && (
                <View style={styles.formulaBox}>
                  <Text style={styles.formulaText}>{item.ruleTitle}</Text>
                </View>
              )}

              {/* Exemples en italique */}
              {item.type === 'examples' && (
                <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
              )}
            </View>
          ))}
        </List.Accordion>

        <List.Accordion
  title={rule.content2[0].title}
  left={(props) => <List.Icon {...props} icon="book-open" color="#8DA9C4" />}
>
  {rule.content2[0].description.map((item, index) => (
    <View key={index} style={styles.content3Container}>
      {/* Titre de la règle */}
      {item.ruleTitle && (
        <View style={styles.formulaBox}>
          <Text style={styles.formulaText}>{item.ruleTitle}</Text>
        </View>
      )}

      {/* Affichage de la table */}
      {item.type === 'table' && (
         <View style={[styles.tableContainer, { padding: 7 }]}>
         <View style={[styles.tableHeader, { flexDirection: 'row', justifyContent: 'space-between' }]}>
           <Text style={[styles.tableHeaderText, { flex: 1 }]}>Verb</Text>
           <Text style={[styles.tableHeaderText, { flex: 1 }]}>Affirmative</Text>
           <Text style={[styles.tableHeaderText, { flex: 1 }]}>Negative</Text>
           <Text style={[styles.tableHeaderText, { flex: 1 }]}>Negative Interrogative</Text>
         </View>
       
         {Array.isArray(item.content) &&
           item.content.map((row, rowIndex) => (
             <View key={rowIndex} style={[styles.tableRow, { flexDirection: 'row', justifyContent: 'space-between' }]}>
               <Text style={[styles.tableCell, { flex: 1 }]}>{row.verb}</Text>
               <Text style={[styles.tableCell, { flex: 1 }]}>{row.affirmative}</Text>
               <Text style={[styles.tableCell, { flex: 1 }]}>{row.negative}</Text>
               <Text style={[styles.tableCell, { flex: 1 }]}>{row.negativeInterrogative}</Text>
             </View>
           ))}
       </View>       
      )}

      {/* Affichage des exemples */}
      {item.type === 'examples' && typeof item.content === 'string' && (
        <Text style={[styles.content, { fontStyle: 'italic' }]}>{item.content}</Text>
      )}

      {/* Affichage de l'explication */}
      {item.type === 'explanation' && typeof item.content === 'string' && (
        <Text style={styles.content}>{item.content}</Text>
      )}
    </View>
  ))}
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
  ruleBox: {
  backgroundColor: '#F0F4FA',
  borderRadius: 10,
  padding: 12,
  marginVertical: 8,
  borderColor: '#A8C3DA',
  borderWidth: 1,
},

ruleTitle: {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#1E3A5F',
  marginBottom: 6,
},

ruleContent: {
  fontSize: 12,
  lineHeight: 20,
  color: '#333',
},
ruleTitle1: {
  fontWeight: 'bold',
  fontSize: 16,
  marginBottom: 8,
},

tableContainer: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 4,
  marginTop: 12,
  marginBottom: 12,
},
tableRowHeader: {
  flexDirection: 'row',
  backgroundColor: '#cce0f0',
  padding: 8,
},
tableHeaderText: {
  flex: 1,
  fontWeight: 'bold',
},
tableHeader1: {
  flexDirection: 'row',
  backgroundColor: '#f0f4fa',
  padding: 5,
},
tableRow1: {
  flexDirection: 'row',
  padding: 8,
  borderTopWidth: 1,
  borderColor: '#eee',
},
tableHeader2: {
  flexDirection: 'row',
  backgroundColor: '#D3E4F0',
  padding: 5,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
},
tableRow2: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  padding: 4,
},
formulaBox: {
  backgroundColor: '#F0F8FF',
  padding: 4,
  marginVertical: 8,
  borderLeftWidth: 5,
  borderLeftColor: '#4682B4',
  borderRadius: 5,
},
formulaText: {
  fontWeight: 'bold',
  fontSize: 14,
  color: '#333',
},
tableHeaderRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 8,
  backgroundColor: '#f1f1f1',  // Fond gris clair pour l'en-tête
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},

tableCellContainer: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 5,
},
tableText: {
  fontSize: 14,
  color: '#333',
},
symbolColumn: {
  fontWeight: 'bold',
  textAlign: 'left', // Alignement à gauche pour les symboles
},
wordColumn: {
  textAlign: 'center', // Alignement centré pour les mots
},
symbolFrenchColumn: {
  textAlign: 'right', // Alignement à droite pour les symboles français
},

});

export default GrammarScreen;
