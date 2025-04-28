import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/Home/HomeScreen';
import ActivateAppScreen from '../screens/ActivateApp/ActivateAppScreen'; 
import AboutScreen from '../screens/About/AboutScreen';
import GetStartedScreen from '../screens/GetStarted/GetStartedScreen'; // Assure-toi que ce fichier existe

const appVersion = '1.1.0';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const handleLogout = () => {
    props.navigation.navigate('GetStarted');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Logo and Titles */}
      <View style={styles.header}>
        {/*<Image
          source={require('../assets/logo.png')} // Mets ici le chemin correct de ton logo
          style={styles.logo}
          resizeMode="contain"
        />*/}
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>20 Minutes A Day</Text>
          <Text style={styles.subTitle}>Improve your vocabulary every day</Text>
          <Text style={styles.subTitle}>With Rene Fulgence Tovondrainy</Text>
        </View>
      </View>

      {/* Drawer Content */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* App Version */}
        <TouchableOpacity style={styles.versionContainer}>
          <Text style={styles.versionText}>Version {appVersion}</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#bb3e03" />
          <Text style={styles.logoutText}>Logout</Text>
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
            <Ionicons name="home" size={24} color="#bb3e03" />
          ),
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle" size={25} color="#bb3e03" />
          ),
        }} 
      />
      <Drawer.Screen 
        name="ActivateApp" 
        component={ActivateAppScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="key" size={25} color="#bb3e03" />
          ),
        }} 
      />
      {/* Ajoute GetStartedScreen dans ta navigation principale, pas ici dans Drawer */}
    </Drawer.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#8da9c4',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 2,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
  },  
  versionContainer: {
    justifyContent: 'center',
  },  
  versionText: {
    fontSize: 14,
    color: '#777',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#bb3e03',
    fontWeight: 'bold',
  },
});

export default Sidebar;
