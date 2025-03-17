// src/components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 20Minutes-a-Day. All rights reserved.</Text>
      <TouchableOpacity onPress={() => alert('Navigating to Settings')}>
        <Text style={styles.link}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  link: {
    color: '#FFD700',
    fontSize: 16,
    marginTop: 5,
  },
});

export default Footer;
