import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// 👉 Définition des props
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>(''); // État pour gérer la recherche

  // Fonction pour gérer la modification de la recherche
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.header}>
      {/* Bouton de retour si possible */}
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Titre */}
      <Text style={styles.title}>{title}</Text>

      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher..."
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#2fa292',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 9,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    marginBottom: 2,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  icon: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', // Positionner la barre de recherche à droite
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 35,
    width: 200, // Largeur de la barre de recherche
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default Header;
