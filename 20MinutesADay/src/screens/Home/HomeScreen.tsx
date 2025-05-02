import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Animated, Image } from 'react-native';
import { Card, FAB } from 'react-native-paper';
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

      {/* Ligne 1 (carte info) */}
      <View style={styles.row}>
          <TouchableOpacity
            style={styles.infoCardContainer}
          >
                <Card style={styles.infocard}>
              <Card.Content style={styles.cardContent}>
               <Text style={styles.bold}>🎉 Welcome to 20 Minutes A Day 🚀</Text> 
                  <Text>Track your progress and stay consistent! 💪</Text>
           </Card.Content>
          </Card>
          </TouchableOpacity>
        </View>
   

        {/* Ligne 1 */}
        <View style={styles.row}>
          <TouchableOpacity
           style={styles.cardContainer}
           onPress={() => navigation.navigate('DailyDialogues')}
>
        <Card style={styles.card}>
         <Card.Content style={styles.cardContent}>
         <Image 
        source={require('../../../assets/images/dialogues.jpg')} 
        style={styles.icon}
      />
      <Text style={styles.data}>Daily Dialogues</Text>
    </Card.Content>
  </Card>
</TouchableOpacity>


          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('Grammar')}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/grammars.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>Grammar</Text>
           </Card.Content>
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
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/debates.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>Debates</Text>
           </Card.Content>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('Proverbs')}
          >
                <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/proverbs.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>Proverbs</Text>
           </Card.Content>
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
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/training.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>American Accent Training</Text>
           </Card.Content>
          </Card>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('People')}
          >
              <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/people.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>People</Text>
           </Card.Content>
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
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/presentation.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>Presentation</Text>
           </Card.Content>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('Verbs')}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/vocabularies.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>Verbs</Text>
           </Card.Content>
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
              <Card.Content style={styles.cardContent}>
            <Image 
               source={require('../../../assets/images/verbs.jpg')} 
               style={styles.icon}
             />
           <Text style={styles.data}>Vocabularies</Text>
           </Card.Content>
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
    backgroundColor: '#f8f8f8',
  },
  icon: {
    width: 140,
    height: 80,
    marginBottom: 3, // 
  },

  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingBottom: 30,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: windowWidth / 2 - 34,
    marginHorizontal: 4,
    
  },

  cardContent: {
    alignItems: 'center', // Centre l'image horizontalement
    justifyContent: 'center', // Centre verticalement si nécessaire
  },
  
  infocardContent: {
    alignItems: 'center', // Centre l'image horizontalement
    justifyContent: 'center', // Centre verticalement si nécessaire
  },

  card: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    height: 155, 
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  singleCardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
  },
  singleCardContainer: {
    width: '99%',
    height: 200,
    paddingLeft: 3
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#c75146',
    marginTop: 12
  },
 
  infoCardContainer: {
    width: '99%',
    height: 60,
    paddingLeft: 2
  },
  infocard: {
    width: '100%',
    backgroundColor: '#edF2F4',
    padding: 2,
    height: 50,
    borderRadius: 10,
    elevation: 4, // Shadow for Android
     // Shadow for iOS
  },
  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#bb3e03',
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
    backgroundColor: '#bb3e03',
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
  bold: {
    fontWeight: 'bold', // Texte en gras
  },
});
