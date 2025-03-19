import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const searchWidth = new Animated.Value(0); // Animation pour la largeur de la barre de recherche

  // Fonction pour gérer l'ouverture de la barre de recherche
  const handleOpenSearch = () => {
    setIsSearching(true);
    Animated.timing(searchWidth, {
      toValue: 200, // Largeur finale de la barre
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Fonction pour gérer la fermeture de la barre de recherche
  const handleCloseSearch = () => {
    Animated.timing(searchWidth, {
      toValue: 0, // Réduire la largeur à 0
      duration: 300,
      useNativeDriver: false,
    }).start(() => setIsSearching(false));
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

      {/* Icône de recherche */}
      {!isSearching ? (
        <TouchableOpacity onPress={handleOpenSearch} style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <Animated.View style={[styles.searchContainer, { width: searchWidth }]}>
          <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            autoFocus // Pour ouvrir directement le clavier
          />
          <TouchableOpacity onPress={handleCloseSearch}>
            <Ionicons name="close" size={20} color="#aaa" />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#3a86ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // ✅ Équilibre l'espace entre les éléments
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // ✅ Centre le texte
    flex: 1, // ✅ Prend l'espace disponible pour permettre l'affichage des icônes
  },
  icon: {
    padding: 10,
  },
  searchButton: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 35,
    overflow: 'hidden',
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
