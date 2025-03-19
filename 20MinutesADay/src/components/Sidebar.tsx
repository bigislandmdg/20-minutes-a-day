import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/HomeScreen';
import ActivateAppScreen from '../screens/ActivateApp/ActivateAppScreen'; 

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const [searchText, setSearchText] = useState('');

  const handleActivateApp = () => {
    // Naviguer vers l'écran ActivateAppScreen
    props.navigation.navigate('ActivateApp');
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

       

      {/* Barre de recherche */}
      

      {/* Contenu du Drawer */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        
      </DrawerContentScrollView>
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
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen 
        name="Activer l'application" 
        component={ActivateAppScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="key" size={22} color={color} />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 25,
    backgroundColor: '#3a86ff',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  activateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 25,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  activateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Sidebar;
