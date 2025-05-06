import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../screens/Home/HomeScreen';
import ActivateAppScreen from '../screens/ActivateApp/ActivateAppScreen'; 
import AboutScreen from '../screens/About/AboutScreen';
import GetStartedScreen from '../screens/GetStarted/GetStartedScreen';
import PayementScreen from '../screens/Payement/PayementScreen'; // <-- Ton PaymentScreen

const appVersion = '1.1.0';

const Drawer = createDrawerNavigator();

// ===> NOUVEAU : Composant intermédiaire
const ActivateAppScreenWrapper = () => {
  const [hasPaid, setHasPaid] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('hasPaid');
        if (value === 'true') {
          setHasPaid(true);
        } else {
          setHasPaid(false);
        }
      } catch (error) {
        console.error('Error fetching payment status:', error);
        setHasPaid(false);
      }
    };

    checkPaymentStatus();
  }, []);

  // Tu peux afficher un loading en attendant le statut
  if (hasPaid === null) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Rediriger selon paiement
  return hasPaid ? (
    <ActivateAppScreen />
  ) : (
    <PayementScreen 
      onClose={() => console.log('Payment screen closed')} 
      onPaymentSuccess={() => setHasPaid(true)} 
    />
  );
};

const CustomDrawerContent = (props: any) => {
  const handleLogout = () => {
    props.navigation.navigate('GetStarted');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>20 Minutes A Day</Text>
          <Text style={styles.subTitle}>Improve your vocabulary every day</Text>
          <Text style={styles.subTitle}>With Rene Fulgence Tovondrainy</Text>
        </View>
      </View>

      {/* Menu */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.versionContainer}>
          <Text style={styles.versionText}>Version {appVersion}</Text>
        </TouchableOpacity>

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
        component={ActivateAppScreenWrapper} // <== Utilise le composant intermédiaire
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="key" size={25} color="#bb3e03" />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#2541b2',
    alignItems: 'center',
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Sidebar;
