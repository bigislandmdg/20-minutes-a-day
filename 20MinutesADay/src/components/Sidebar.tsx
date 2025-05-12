import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../screens/Home/HomeScreen';
import ActivateAppScreen from '../screens/ActivateApp/ActivateAppScreen'; 
import AboutScreen from '../screens/About/AboutScreen';
import GetStartedScreen from '../screens/GetStarted/GetStartedScreen';
import PayementScreen from '../screens/Payement/PayementScreen';
import DownloadedAudioScreen from '../screens/DownloadedAudio/DownloadedAudioScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import HelpFeedbackScreen from '../screens/HelpFeedback/HelpFeedbackScreen';

const appVersion = '1.1.0';

const Drawer = createDrawerNavigator();

// Composant intermédiaire pour vérifier le paiement
const ActivateAppScreenWrapper = () => {
  const [hasPaid, setHasPaid] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('hasPaid');
        setHasPaid(value === 'true');
      } catch (error) {
        console.error('Error fetching payment status:', error);
        setHasPaid(false);
      }
    };
    checkPaymentStatus();
  }, []);

  if (hasPaid === null) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2541b2" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return hasPaid ? (
    <ActivateAppScreen />
  ) : (
    <PayementScreen 
      onClose={() => console.log('Payment screen closed')} 
      onPaymentSuccess={() => setHasPaid(true)} 
    />
  );
};

// Custom Drawer Content
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
          <Text style={styles.subTitle}>With Réné Fulgence Tovondrainy</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerContentScrollView {...props}>
        {/* Section 1 - General */}
        <Text style={styles.sectionTitle}>General</Text>
        {props.state.routes.slice(0, 4).map((route: any, index: number) => (
          <View key={route.key}>
            {index === 3 && <View style={styles.divider} />}
            <DrawerItem
              label={({ color }) => (
                <Text style={{ color }}>{props.descriptors[route.key]?.options?.drawerLabel ?? route.name}</Text>
              )}
              icon={({ color, size }) =>
                props.descriptors[route.key]?.options?.drawerIcon?.({ color, size })
              }
              onPress={() => props.navigation.navigate(route.name)}
            />
          </View>
        ))}

        <View style={styles.divider} />

        {/* Section 2 - Settings & Help */}
        <Text style={styles.sectionTitle}>Settings & Help</Text>
        {props.state.routes.slice(4).map((route: any) => (
          <DrawerItem
            key={route.key}
            label={({ color }) => (
              <Text style={{ color }}>{props.descriptors[route.key]?.options?.drawerLabel ?? route.name}</Text>
            )}
            icon={({ color, size }) =>
              props.descriptors[route.key]?.options?.drawerIcon?.({ color, size })
            }
            onPress={() => props.navigation.navigate(route.name)}
          />
        ))}
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
          drawerLabel: 'Home',
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons 
              name="home" 
              size={25} 
              color={focused ? 'red' : color} 
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={{
          drawerLabel: 'About',
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons name="information-circle" size={25} 
            color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="ActivateApp" 
        component={ActivateAppScreenWrapper}
        options={{
          drawerLabel: 'Activate App',
          drawerIcon: ({ color }) => (
            <Ionicons name="key" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Audio Downloaded" 
        component={DownloadedAudioScreen}
        options={{
          drawerLabel: 'Audio Downloaded',
          drawerIcon: ({ color }) => (
            <Ionicons name="download" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Help & Feedback" 
        component={HelpFeedbackScreen} 
        options={{
          drawerLabel: 'Help & Feedback',
          drawerIcon: ({ color }) => (
            <Ionicons name="help-circle" size={24} color={color} />
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
    backgroundColor: '#004e98',
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
    marginTop: 5,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
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
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  sectionTitle: {
    paddingVertical: 10,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Sidebar;
