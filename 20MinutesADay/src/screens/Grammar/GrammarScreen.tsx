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
                      <RNText style={styles.tableCell}>{item.verbs}</RNText>
                      <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                     
                    </View>
                  )))}
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
  },
  cellText: {
    fontSize: 14,
    color: '#333',
  },
});

export default GrammarScreen;
