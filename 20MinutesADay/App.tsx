import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import des composants
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';

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
import PayementScreen from './src/screens/Payement/PayementScreen';
import DownloadedAudioScreen from './src/screens/DownloadedAudio/DownloadedAudioScreen';
import { SearchProvider } from './src/contexts/SearchContext';
import { PaperProvider } from 'react-native-paper';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('hasPaid');
        setHasPaid(value === 'true');
      } catch (error) {
        console.error('Error reading payment status', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkPaymentStatus();
  }, []);

  if (isLoading) {
    return null; // Tu peux afficher un écran de loading ici si tu veux
  }

  return (
    <PaperProvider>
    <NavigationContainer>
        <SearchProvider>
        <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Sidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Audio"
          component={DownloadedAudioScreen}
          options={{
            header: () => <Header title="Audio téléchargés" />,
          }}
        />
        <Stack.Screen
          name="Payement"
          options={{
            header: () => <Header title="Payement" />,
          }}
        >
          {(props) => (
            <PayementScreen
              {...props}
              onClose={() => props.navigation.goBack()}
              onPaymentSuccess={() => props.navigation.navigate('Home')}
            />
          )}
        </Stack.Screen>
        {/* Écrans avec Header vide pour plus de personnalisation */}
        {[
          { name: 'DailyDialogues', component: DailyDialoguesScreen },
          { name: 'Grammar', component: GrammarScreen },
          { name: 'Debates', component: DebatesScreen },
          { name: 'People', component: PeopleScreen },
          { name: 'Proverbs', component: ProverbsScreen },
          { name: 'Verbs', component: VerbsScreen },
          { name: 'AccentTraining', component: AccentTrainingScreen },
          { name: 'Presentation', component: PresentationScreen },
          { name: 'Vocabularies', component: VocabulariesScreen },
        ].map(({ name, component }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              header: () => <Header title="" />,
            }}
          />
        ))}
      </Stack.Navigator>
        </SearchProvider>  
    </NavigationContainer>
    </PaperProvider>
  );
}
