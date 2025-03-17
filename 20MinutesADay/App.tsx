import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Import des écrans
import GetStartedScreen from './src/screens/GetStarted/GetStartedScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import VocabulariesScreen from './src/screens/Vocabularies/VocabulariesScreen';
import DailyDialoguesScreen from './src/screens/DailyDialogues/DailyDialoguesScreen';
import GrammarScreen from './src/screens/Grammar/GrammarScreen';
import DebatesScreen from './src/screens/Debates/DebatesScreen';
import PeopleScreen from './src/screens/People/PeopleScreen';
import ProverbsScreen from './src/screens/Proverbs/ProverbsScreen';
import AccentTrainingScreen from './src/screens/AccentTraining/AccentTrainingScreen';
import PresentationScreen from './src/screens/Presentation/PresentationScreen';
import VerbsScreen from './src/screens/Verbs/VerbsScreen';

// Création des navigateurs
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator pour les modules
const ModulesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vocabularies" component={VocabulariesScreen} options={{ title: 'Vocabularies' }} />
      <Stack.Screen name="Daily Dialogues" component={DailyDialoguesScreen} options={{ title: 'Daily Dialogues' }} />
      <Stack.Screen name="Grammar" component={GrammarScreen} options={{ title: 'Grammar' }} />
      <Stack.Screen name="Debates" component={DebatesScreen} options={{ title: 'Debates' }} />
      <Stack.Screen name="People" component={PeopleScreen} options={{ title: 'People' }} />

      {/* 🚀 Nouveaux écrans */}
      <Stack.Screen name="Proverbs" component={ProverbsScreen} options={{ title: 'Proverbs' }} />
      <Stack.Screen name="Verbs" component={VerbsScreen} options={{ title: 'Verbs' }} />
      <Stack.Screen name="Accent Training" component={AccentTrainingScreen} options={{ title: 'Accent Training' }} />
      <Stack.Screen name="Presentation" component={PresentationScreen} options={{ title: 'Presentation' }} />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';

          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Modules') {
            iconName = 'apps';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#777',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Modules" component={ModulesStack} />
      <Tab.Screen name="Accueil" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
