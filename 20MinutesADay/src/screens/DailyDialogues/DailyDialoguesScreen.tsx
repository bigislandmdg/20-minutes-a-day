import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, List, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const dialogues1 = [
  {
    id: 1,
    title: 'Lesson 1: GREETINGS',
    description: 'BASIC SOCIAL ENCOUNTERS',
    content1: [
      {
        sentence: "A- Good morning/afternoon/evening",
        pronunciation: '[goud mo:nin/aft:noun/iv:nin]',
      },
      {
        sentence: 'Hi, Hello!',
        pronunciation: '[hai], [hɛˈloʊ]',
      },
      {
        sentence: 'How are you doing/ How’s it going?',
        pronunciation: '[Haoa you doin/ haozit…....goin]',
      },
      {
        sentence: 'Good morning!',
        pronunciation: '[goud mo:nin]',
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



const DailyDialoguesScreen = () => {
  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      rate: 0.9, // Adjust the speech rate
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Dialogues</Text>
      <Text style={styles.content}>
        Learn to hold a daily conversation in English.
      </Text>

      {dialogues1.map((dialogue) => (
        <Card key={dialogue.id} style={styles.card}>
          <Card.Title
               title={<Text style={{ fontWeight: 'bold' }}>{dialogue.title}</Text>}
            subtitle={dialogue.description}
          />
          <Card.Content>
            <List.Accordion
              title="GREETING PHRASES"
              left={(props) => <List.Icon {...props} icon="handshake" color='#8da9c4' />}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#bb3e03',
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
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
    marginTop: 4,
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
});

export default DailyDialoguesScreen;
