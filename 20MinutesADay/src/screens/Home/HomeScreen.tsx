import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, TextInput, Animated } from 'react-native';
import { Card, List, FAB } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import PayementScreen from '../Payement/PayementScreen';

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
  const [isModalVisible, setModalVisible] = useState(false); // Contrôle de l'affichage du modal
  const [slideUp] = useState(new Animated.Value(0));

  const toggleModal = () => {
    if (isModalVisible) {
      // Close the modal with slide down animation
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Open the modal with slide up animation
      Animated.timing(slideUp, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>

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
                left={(props) => <List.Icon {...props} icon="chat" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="pencil" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="forum" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="format-quote-close" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="microphone" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="account-group" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="presentation" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="format-list-bulleted" color="#3a86ff" />}
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
                left={(props) => <List.Icon {...props} icon="book" color="#3a86ff" />}
              />
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>

     {/* Bouton flottant */}
       {/* Floating Action Button */}
       <FAB
        style={styles.fab}
        icon="credit-card"
        color="white"
        onPress={toggleModal}
      />

      {/* Animated Modal */}
      {isModalVisible && (
        <Animated.View style={[styles.modalWrapper, { transform: [{ translateY: slideUp.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],  // Slide from bottom to top
        }) }] }]}>
          <PayementScreen onClose={toggleModal} />
        </Animated.View>
      )}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingBottom: 20,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: windowWidth / 2 - 31,
    marginHorizontal: 4,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fafafa',
    height: 90, 
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  singleCardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  singleCardContainer: {
    width: windowWidth - 50,
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#3a86ff',
    marginTop: 12
  },
 
  infoCardContainer: {
    margin: 10,
  },
  infoCard: {
    elevation: 5,
    borderRadius: 10,
  },
  infoCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  infoCardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#3a86ff',
    padding: 5,
    borderRadius: 50,
    elevation: 5,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#3a86ff',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
});
