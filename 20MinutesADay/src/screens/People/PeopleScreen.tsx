import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Avatar, Button, List } from 'react-native-paper';

const people = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Software Engineer at XYZ Company',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    details: 'John has worked on various software development projects in XYZ Company, specializing in backend architecture and cloud solutions.',
    career: 'John is currently leading the backend team at XYZ Company and focuses on cloud-based solutions and microservices architecture.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'Marketing Manager at ABC Corp',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    details: 'Jane is an expert in digital marketing strategies, managing high-performing marketing campaigns for ABC Corp.',
    career: 'Jane has been managing digital marketing strategies at ABC Corp for over 5 years and has contributed to numerous successful campaigns.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    description: 'UI/UX Designer at Design Studio',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    details: 'Emily specializes in creating intuitive user interfaces and seamless user experiences for web and mobile applications.',
    career: 'Emily is working on designing user interfaces for mobile apps at Design Studio and has a passion for creating accessible designs.',
  },
];

const PeopleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>People</Text>
      <Text style={styles.content}>
        This screen displays information about different people.
      </Text>

      {people.map((person) => (
        <Card key={person.id} style={styles.card}>
          <Card.Title
            title={person.name}
            subtitle={person.description}
            left={(props) => (
              <Avatar.Image size={48} source={{ uri: person.avatar }} />
            )}
          />
          <Card.Content>
            {/* Accordéon pour afficher les détails supplémentaires */}
            <List.Accordion
              title="More Info"
              left={(props) => <List.Icon {...props} icon="information" />}
            >
              <Text>{person.details}</Text>
            </List.Accordion>

            {/* Accordéon supplémentaire pour afficher des informations sur la carrière */}
            <List.Accordion
              title="Career Info"
              left={(props) => <List.Icon {...props} icon="briefcase" />}
            >
              <Text>{person.career}</Text>
            </List.Accordion>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => {}}>
              View Profile
            </Button>
          </Card.Actions>
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
    color: '#2fa292',
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
    elevation: 4, // ombre légère
  },
});

export default PeopleScreen;
