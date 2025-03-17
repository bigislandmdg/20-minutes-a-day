import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import des écrans
import GetStartedScreen from '../screens/GetStarted/GetStartedScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import VocabulariesScreen from '../screens/Vocabularies/VocabulariesScreen';

// Création des navigateurs
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Liste des icônes valides pour Ionicons
type IconNames = 'home' | 'book';

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconNames | undefined;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Vocabularies') {
            iconName = 'book';
          }

          if (iconName) {
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          return null;
        },
        tabBarActiveTintColor: '#4CAF50', // Couleur de l'onglet actif
        tabBarInactiveTintColor: '#777', // Couleur de l'onglet inactif
        headerShown: false, // Masquer le header du `Tab.Navigator`
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vocabularies" component={VocabulariesScreen} />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {/* Écran de démarrage */}
        <Stack.Screen 
          name="GetStarted" 
          component={GetStartedScreen} 
          options={{ headerShown: false }} 
        />

        {/* Onglets principaux */}
        <Stack.Screen 
          name="Main" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />

        {/* L'écran Home doit être ajouté ici pour qu'il soit navigable */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
