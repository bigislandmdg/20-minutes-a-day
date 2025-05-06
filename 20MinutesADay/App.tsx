import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import des écrans
import GetStartedScreen from './src/screens/GetStarted/GetStartedScreen';

import VocabulariesScreen from './src/screens/Vocabularies/VocabulariesScreen';
import DailyDialoguesScreen from './src/screens/DailyDialogues/DailyDialoguesScreen';
import GrammarScreen from './src/screens/Grammar/GrammarScreen';
import DebatesScreen from './src/screens/Debates/DebatesScreen';
import PeopleScreen from './src/screens/People/PeopleScreen';
import ProverbsScreen from './src/screens/Proverbs/ProverbsScreen';
import AccentTrainingScreen from './src/screens/AccentTraining/AccentTrainingScreen';
import PresentationScreen from './src/screens/Presentation/PresentationScreen';
import VerbsScreen from './src/screens/Verbs/VerbsScreen';
import Sidebar from './src/components/Sidebar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PayementScreen from './src/screens/Payement/PayementScreen';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('hasPaid');
        if (value === 'true') {
          setHasPaid(true);
        } else {
          setHasPaid(false);
        }
      } catch (error) {
        console.error('Error reading payment status', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkPaymentStatus();
  }, []);

  if (isLoading) {
    return null; // ou un écran de chargement
  }
  
  return (
    
    <NavigationContainer>
       
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Sidebar} options={{ headerShown: false }} />
         
         {/* Correction ici : PayementScreen avec les bonnes props */}
        <Stack.Screen name="Payement" options={{ title: 'Payement' }}>
          {(props) => (
            <PayementScreen
              {...props}
              onClose={() => props.navigation.goBack()}
              onPaymentSuccess={() => {
                // Exemple: après paiement réussi, retour à Home
                props.navigation.navigate('Home');
              }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="DailyDialogues" component={DailyDialoguesScreen} />
        <Stack.Screen name="Grammar" component={GrammarScreen} />
        <Stack.Screen name="Debates" component={DebatesScreen} />
        <Stack.Screen name="People" component={PeopleScreen} />
        <Stack.Screen name="Proverbs" component={ProverbsScreen} />
        <Stack.Screen name="Verbs" component={VerbsScreen} />
        <Stack.Screen name="AccentTraining" component={AccentTrainingScreen} />
        <Stack.Screen name="Presentation" component={PresentationScreen} />
        <Stack.Screen name="Vocabularies" component={VocabulariesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
