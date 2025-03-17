import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { List } from 'react-native-paper';

// Largeur de l'écran pour ajuster la grille
const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  DailyDialogues: undefined;
  Grammar: undefined;
  Debates: undefined;
  Proverbs: undefined; 
  AccentTraining: undefined;
  People: undefined;
  Presentation: undefined;
  Verbs: undefined;
  Vocabularies: undefined;

  Modules: { 
    screen: 
    'DailyDialogues' | 'Grammar' | 'Debates' | 'Proverbs' | 'AccentTraining' | 'People' | 'Presentation' | 'Verbs'| 'Vocabularies' 
  };
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}


      <Text style={styles.title}>Welcome to 20Minutes-a-Day!</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>

      {/* 🟢 Cartes cliquables */}
      <View style={styles.cardRow}>
        {/* Carte 1 : Vocabularies */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'DailyDialogues' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>Daily Dialogues</Text>}
              left={(props) => <List.Icon {...props} icon="chat" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>

        {/* Carte 2 : Grammar */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'Grammar' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>Grammar</Text>}
              left={(props) => <List.Icon {...props} icon="pencil" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>
      </View>

      {/* 🟢 Cartes cliquables */}
      <View style={styles.cardRow}>
        {/* Carte 3 : Debates */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'Debates' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>Debates</Text>}
              left={(props) => <List.Icon {...props} icon="comment" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>

        {/* Carte 4 : Daily Dialogues */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'Proverbs' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>Proverbs</Text>}
              left={(props) => <List.Icon {...props} icon="book" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>
      </View>

      {/* 🟢 Cartes cliquables */}
      <View style={styles.cardRow}>
        {/* Carte 5 : Presentation */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'AccentTraining' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>American Accent Training</Text>}
              left={(props) => <List.Icon {...props} icon="microphone" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>

        {/* Carte 6 : Verbs */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'People' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>People</Text>}
              left={(props) => <List.Icon {...props} icon="account-group" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>
      </View>

      {/* 🟢 Cartes cliquables */}
      <View style={styles.cardRow}>
        {/* Carte 7 : Proverbs */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'Presentation' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>Presentation</Text>}
              left={(props) => <List.Icon {...props} icon="presentation" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>

        {/* Carte 8 : Accent Training */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Modules', { screen: 'Verbs' })}
        >
          <Card style={[styles.card, styles.customCard]}>
            <Card.Title
              title={<Text style={styles.data}>Verbs</Text>}
              left={(props) => <List.Icon {...props} icon="book" color="#2fa292" />}
            />
          </Card>
        </TouchableOpacity>
      </View>

      {/* 🟢 Carte UNIQUE pour Accent Training */}
      <TouchableOpacity
        style={styles.fullCardContainer} // Using a larger container for the full card
        onPress={() => navigation.navigate('Modules', { screen: 'Vocabularies' })}
      >
        <Card style={[styles.card, styles.infoCard]}> {/* Use infoCard style for this unique card */}
          <Card.Title
            title={<Text style={styles.data}>Vocabularies</Text>}
            left={(props) => <List.Icon {...props} icon="book" color="#2fa292" />}
          />
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50, // Adjusted padding for better view with search bar
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    width: windowWidth - 10,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  cardContainer: {
    width: (windowWidth - 40) / 2, // Ajuste pour deux cartes par ligne
    margin: 5,
  },
  fullCardContainer: {
    width: windowWidth - 30, // Full width for the last card
    margin: 5,
  },
  card: {
    padding: 5,
    borderRadius: 10,
    elevation: 5,
    height: 100,
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  customCard: {
    backgroundColor: '#ffffff',
  },
  infoCard: {
    backgroundColor: '#ffffff', // Lighter background for info card
    height: 150, // Adjust the height to make it larger
  },
});
