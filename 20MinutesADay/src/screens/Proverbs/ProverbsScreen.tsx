import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import * as Speech from 'expo-speech';

const proverbs = [
  {
    id: 1,
    title: 'Lesson 68: PROVERBS',
    description: 'DAILY SPOKEN',
    content1: [
      {
        proverb: '“Two Heads Are Better Than one”',
        subtitle: '(Two people working together can solve a problem quicker and better than a person working alone)',
        description: `A: Hey, Jonathan. Come over here a minute.\nB: What’s happening?\nA: I’d like to pick your brain for this composition I have to hand it tomorrow. I’ve got a problem with the introduction, and I figure that two heads are better than one. I need some input on the wording.\nB: To be honest with you, I’m not that good with words, but I’m willing to help out if I can.\nA: Thanks buddy. My brain is all dried up. I’m sure the two of us working together will be able to solve this problem faster than I could do it alone.\nB: Well, I’ll give it my best shot. Let me look at what you’ve already written and we’ll take it from there.`,
      },
    ],
    content2: [
      {
        proverb: '“Do As I Say, Not As I Do”',
        subtitle: '(Follow my advice, but don’t follow my example)',
        description: `A:  .For heaven’s sake, Dave. You smell like a chimney. For how many times do I have to tell you thatsmoking is going to eat out your lungs and take years off your life?
        \nB: You can talk all you want—but look at you!\nA: Never mind me. Do as I say, not as I do.\nB: .But you’ve been smoking ever since you were teenager.\nA:.Just because I’ve made a mistake doesn’t mean you have to repeat it. I’m telling you to follow my
advice, not my example.\nB:.OK. You win. I’ll try. But why don’t we both try to stop? Maybe we can help each other out.\nA:. You’re on. I’ll give it a whirl.`,
      },
    ],
    content3: [
      {
        proverb: '“Curiosity Killed the Cat”',
        subtitle: '(It is dangerous to be curious)',
        description: `A: .Phil, you have no business trying to find out what will be on tomorrow’s exam by shuffling
through those papers on the teacher’s desk. Just because she’s out of the room doesn’t give you
right to go poking in her personal papers. What do you think will happen to you if she walks in and
catches you? Don’t you realize that curiosity killed the cat?
        \nB: .If I don’t pass this exam, I probably won’t pass the course. I know I could be severely punished for
going into her personal papers, but I desperate!\nA: Ok. But it’s your funeral! Sooner or later your curiosity will do you in.`,
      },
    ],
    content4: [
      {
        proverb: '“Don’t Bite the Hand That Feeds You”',
        subtitle: '(Don’t hurt someone who takes care of you)',
        description: `A:.Julie, I simply can’t understand you! I’ve worked my fingers to the bone and I’ve saved and
scrimped to pay for your college education, and here you go running off to get married without
finishing school. Hasn’t anyone ever told you “Don’t bite the hand that feed you? You must know
how disappointed I am!
        \nB: .I’m sorry, Dad. I don’t mean to hurt you after all you’ve done for me, and I have every intention of
going back to school after A1 and I get settled. He’s got a great job overseas, and he wants me to go
with him as his wife. \nA:.Still, don’t be hasty. Why don’t you give this a little more thoughts?`,
      },
    ],
  },
];

const ProverbsScreen = () => {
  // Fonction pour faire parler le proverbe
  const speakProverb = (proverb: string): void => {
    Speech.speak(proverb, {
      language: 'en-US',
      pitch: 1,
      rate: 1,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Proverbs</Text>
            <Text style={styles.content}>
              This screen contains grammar lessons and rules.
            </Text>
      {proverbs.map((section) => (
        <Card key={section.id} style={styles.card}>
          <Card.Title title={section.title}  />
          <Card.Content>
            <Text style={styles.description}>{section.description}</Text>

            {section.content1.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.proverb}
                left={(props) => <List.Icon {...props} icon="format-quote-close" />}
                style={styles.accordion}
              >
                {/* Sous-titre */}
                <Text 
                  style={styles.subtitle} 
                  onPress={() => speakProverb(item.proverb)}
                >
                  {item.subtitle}
                </Text>

                {/* Description complète */}
                <Text style={styles.content}>
                  {item.description}
                </Text>
              </List.Accordion>
            ))}

            {section.content2.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.proverb}
                left={(props) => <List.Icon {...props} icon="format-quote-close" />}
                style={styles.accordion}
              >
                {/* Sous-titre */}
                <Text 
                  style={styles.subtitle} 
                  onPress={() => speakProverb(item.proverb)}
                >
                  {item.subtitle}
                </Text>

                {/* Description complète */}
                <Text style={styles.content}>
                  {item.description}
                </Text>
              </List.Accordion>
            ))}

           {section.content3.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.proverb}
                left={(props) => <List.Icon {...props} icon="format-quote-close" />}
                style={styles.accordion}
              >
                {/* Sous-titre */}
                <Text 
                  style={styles.subtitle} 
                  onPress={() => speakProverb(item.proverb)}
                >
                  {item.subtitle}
                </Text>

                {/* Description complète */}
                <Text style={styles.content}>
                  {item.description}
                </Text>
              </List.Accordion>
            ))}

            {section.content4.map((item, index) => (
              <List.Accordion
                key={index}
                title={item.proverb}
                left={(props) => <List.Icon {...props} icon="format-quote-close" />}
                style={styles.accordion}
              >
                {/* Sous-titre */}
                <Text 
                  style={styles.subtitle} 
                  onPress={() => speakProverb(item.proverb)}
                >
                  {item.subtitle}
                </Text>

                {/* Description complète */}
                <Text style={styles.content}>
                  {item.description}
                </Text>
              </List.Accordion>
            ))}


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
  card: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    marginBottom: 22,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  accordion: {
    backgroundColor: '#e0e1dd',
    marginBottom: 16,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    lineHeight: 22,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#bb3e03',
  },
});

export default ProverbsScreen;
