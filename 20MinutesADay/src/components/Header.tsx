import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const searchWidth = useRef(new Animated.Value(0)).current;

  // Ouvrir la barre de recherche
  const handleOpenSearch = () => {
    setIsSearching(true);
    Animated.timing(searchWidth, {
      toValue: 250, // Largeur cible
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
      {/* Icône retour si possible */}
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Titre centré */}
      {!isSearching && (
        <Text style={styles.title}>{title}</Text>
      )}

      {/* Barre de recherche animée */}
      {isSearching && (
        <Animated.View style={[styles.searchContainer, { width: searchWidth }]}>
          <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true}
          />
          <TouchableOpacity onPress={handleCloseSearch}>
            <Ionicons name="close" size={20} color="#000" />
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* Icône recherche */}
      {!isSearching && (
        <TouchableOpacity onPress={handleOpenSearch} style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
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
    textAlign: 'center',
    flex: 1,
    position: 'absolute',
    left: 50,
    right: 50,
  },
  icon: {
    padding: 10,
    zIndex: 2,
  },
  searchButton: {
    padding: 10,
    zIndex: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 35,
    position: 'absolute',
    right: 10,
    zIndex: 3,
    overflow: 'hidden',
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
});

export default Header;
