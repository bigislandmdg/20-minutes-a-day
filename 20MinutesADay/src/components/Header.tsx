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
  const searchWidth = new Animated.Value(0);

  // Ouvrir la barre de recherche
  const handleOpenSearch = () => {
    setIsSearching(true);
    Animated.timing(searchWidth, {
      toValue: 250, // Largeur finale de la barre
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Fermer la barre de recherche
  const handleCloseSearch = () => {
    Animated.timing(searchWidth, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsSearching(false);
      setSearchQuery('');
    });
  };

  return (
    <View style={styles.header}>
      {/* Bouton de retour si possible */}
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Titre (centré) */}
      {!isSearching && (
        <Text style={styles.title}>{title}</Text>
      )}

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
            autoFocus
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute', // ✅ Fixe le titre pour le centrer indépendamment des autres éléments
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  icon: {
    padding: 10,
    zIndex: 1, // ✅ Pour s'assurer que l'icône reste au-dessus du titre
  },
  searchButton: {
    padding: 10,
    zIndex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 35,
    position: 'absolute',
    right: 10, // ✅ Place la barre de recherche à droite
    zIndex: 2, // ✅ Superpose la barre de recherche au-dessus du titre
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
