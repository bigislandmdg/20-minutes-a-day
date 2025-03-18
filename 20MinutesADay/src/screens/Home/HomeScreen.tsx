import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import { Card, List } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

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
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Welcome to 20Minutes-a-Day!</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>

      <ScrollView 
  style={styles.container} 
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.contentContainer}
>
  {/* Ligne 1 */}
  <View style={styles.row}>
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('DailyDialogues')}
    >
      <Card style={styles.card}>
        <Card.Title
          title={<Text style={styles.data}>Daily Dialogues</Text>}
          left={(props) => <List.Icon {...props} icon="chat" color="#2fa292" />}
        />
      </Card>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Grammar')}
    >
      <Card style={styles.card}>
        <Card.Title
          title={<Text style={styles.data}>Grammar</Text>}
          left={(props) => <List.Icon {...props} icon="pencil" color="#2fa292" />}
        />
      </Card>
    </TouchableOpacity>
  </View>

  {/* Ligne 2 */}
  <View style={styles.row}>
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Debates')}
    >
      <Card style={styles.card}>
        <Card.Title
          title={<Text style={styles.data}>Debates</Text>}
          left={(props) => <List.Icon {...props} icon="forum" color="#2fa292" />}
        />
      </Card>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Proverbs')}
    >
      <Card style={styles.card}>
        <Card.Title
          title={<Text style={styles.data}>Proverbs</Text>}
          left={(props) => <List.Icon {...props} icon="format-quote-close" color="#2fa292" />}
        />
      </Card>
    </TouchableOpacity>
  </View>

   {/* Ligne 3 */}
<View style={styles.row}>
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={() => navigation.navigate('AccentTraining')}
  >
    <Card style={styles.card}>
      <Card.Title
        title={<Text style={styles.data}>Accent Training</Text>}
        left={(props) => <List.Icon {...props} icon="microphone" color="#2fa292" />}
      />
    </Card>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.cardContainer}
    onPress={() => navigation.navigate('People')}
  >
    <Card style={styles.card}>
      <Card.Title
        title={<Text style={styles.data}>People</Text>}
        left={(props) => <List.Icon {...props} icon="account-group" color="#2fa292" />}
      />
    </Card>
  </TouchableOpacity>
</View>


{/* Ligne 4 */}
<View style={styles.row}>
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={() => navigation.navigate('Presentation')}
  >
    <Card style={styles.card}>
      <Card.Title
        title={<Text style={styles.data}>Presentation</Text>}
        left={(props) => <List.Icon {...props} icon="presentation" color="#2fa292" />}
      />
    </Card>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.cardContainer}
    onPress={() => navigation.navigate('Verbs')}
  >
    <Card style={styles.card}>
      <Card.Title
        title={<Text style={styles.data}>Verbs</Text>}
        left={(props) => <List.Icon {...props} icon="format-list-bulleted" color="#2fa292" />}
      />
    </Card>
  </TouchableOpacity>
</View>

 {/* Ligne 5 (carte unique) */}
<View style={styles.singleCardRow}>
  <TouchableOpacity
    style={styles.singleCardContainer}
    onPress={() => navigation.navigate('Vocabularies')}
  >
    <Card style={styles.card}>
      <Card.Title
        title={<Text style={styles.data}>Vocabularies</Text>}
        left={(props) => <List.Icon {...props} icon="book" color="#2fa292" />}
      />
    </Card>
  </TouchableOpacity>
</View>


</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  navbar: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Répartit l'espace entre les cartes
    paddingHorizontal: 5,
    paddingBottom: 20,
    gap: 20, // Espacement uniforme entre les cartes
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: windowWidth / 2 - 31, // 50% de la largeur avec une petite marge
    marginHorizontal: 3,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fafafa',
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  singleCardRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Centrer la carte unique horizontalement
    marginTop: 20,
  },
  singleCardContainer: {
    width: windowWidth - 50, // Largeur égale à deux cartes côte à côte
  },

});
