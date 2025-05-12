import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { useSearch } from '../contexts/SearchContext'; // <-- adapte bien le chemin selon ton projet

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const { searchTerm, setSearchTerm } = useSearch(); // <-- utiliser setSearchTerm
  const [isSearching, setIsSearching] = useState(false);
  const searchWidth = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const handleOpenSearch = () => {
    setIsSearching(true);
    Animated.parallel([
      Animated.timing(searchWidth, {
        toValue: 250,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      })
    ]).start();
  };

  const handleCloseSearch = () => {
    Animated.parallel([
      Animated.timing(searchWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      })
    ]).start(() => {
      setIsSearching(false);
      setSearchTerm(''); // <-- mettre à jour le terme de recherche dans le contexte
    });
  };

  return (
    <View style={styles.headerWrapper}>
      {isSearching && (
        <BlurView intensity={30} tint="light" style={StyleSheet.absoluteFill} />
      )}

      <View style={styles.header}>
        {/* Icone de retour */}
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        )}

        {/* Titre */}
        {!isSearching && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}

        {/* Barre de recherche */}
        <Animated.View style={[styles.searchContainer, { width: searchWidth, opacity }]}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher..."
            placeholderTextColor="#666"
            value={searchTerm} // <-- utiliser searchTerm
            onChangeText={setSearchTerm} // <-- mettre à jour via contexte
            autoFocus={isSearching}
          />
          <TouchableOpacity onPress={handleCloseSearch}>
            <Ionicons name="close" size={20} color="#666" />
          </TouchableOpacity>
        </Animated.View>

        {/* Bouton pour ouvrir la recherche */}
        {!isSearching && (
          <TouchableOpacity onPress={handleOpenSearch} style={styles.searchButton}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    height: 70,
    backgroundColor: '#004e98',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 70,
  },
  icon: {
    padding: 5,
    top: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 1,
    right: 1,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 10,
    top: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 500,
    position: 'absolute',
    right: 10,
    overflow: 'hidden',
    zIndex: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 2,
    fontSize: 16,
    width: 290,
    height: 40,
    paddingVertical: 0,
    color: '#000',
  },
});

export default Header;
