import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const appVersion = '1.1.0'; // Define the version here
import HomeScreen from '../screens/Home/HomeScreen';
import ActivateAppScreen from '../screens/ActivateApp/ActivateAppScreen'; 
import AboutScreen from '../screens/About/AboutScreen'; // Import the AboutScreen component

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  

  const handleActivateApp = () => {
    props.navigation.navigate('ActivateApp');
  };

  const handleLogout = () => {
    console.log('Déconnexion...');
    // Ajouter ici la logique pour la déconnexion
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Titre de l'application */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>20 Minutes A Day</Text>
          <Text style={styles.subTitle}>Améliorez votre vocabulaire chaque jour</Text>
          <Text style={styles.subTitle}>Avec Rene Fulgence Tovondrainy</Text>
        </View>
      </View>

      {/* Contenu du Drawer */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
        <TouchableOpacity style={styles.versionContainer}>
          <Text style={styles.versionText}>Version {appVersion}</Text>
        </TouchableOpacity>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const Sidebar = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color='#bb3e03' />
          ),
        }}
      />

<Drawer.Screen 
  name="About" 
  component={AboutScreen} 
  options={{
    drawerIcon: ({ color }) => (
      <Ionicons name="information-circle" size={25} color='#bb3e03' />
    ),
  }} 
/>

      
      <Drawer.Screen 
        name="Activate application" 
        component={ActivateAppScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="key" size={25} color='#bb3e03' />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 29,
    backgroundColor: '#8da9c4',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  footer: {
    padding: 17,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  activateButton: {
    backgroundColor: '#8da9c4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  activateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  versionContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#777',
  },
});

export default Sidebar;
