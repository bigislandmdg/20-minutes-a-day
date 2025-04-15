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
            <RNText style={styles.tableCell}>{item.affirmative}</RNText>
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
    padding: 16,
  },
  example: {
    fontSize: 16,
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
