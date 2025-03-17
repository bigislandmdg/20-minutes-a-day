import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';

// 👉 Définir le type de navigation
type GetStartedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GetStarted'
>;

export default function GetStartedScreen() {
  const navigation = useNavigation<GetStartedScreenNavigationProp>();

  // 👉 Redirection automatique après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* 👉 Illustration */}
      {/* <Image source={require('../../../assets/started.jpg')} style={styles.illustration} /> */}

      {/* 👉 Texte principal */}
      <Text style={styles.title}>Welcome to 20Minutes-a-Day!</Text>

      {/* 👉 Sous-titre */}
      <Text style={styles.description}>
        Let's get started with your learning journey.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  illustration: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
});
