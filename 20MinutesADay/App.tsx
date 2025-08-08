import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, PaperProvider } from 'react-native-paper';

// Components
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';

// Screens
import GetStartedScreen from './src/screens/GetStarted/GetStartedScreen';
import VocabulariesScreen from './src/screens/Vocabularies/VocabulariesScreen';
import DailyDialoguesScreen from './src/screens/DailyDialogues/DailyDialoguesScreen';
import GrammarScreen from './src/screens/Grammar/GrammarScreen';
import DebatesScreen from './src/screens/Debates/DebatesScreen';
import PeopleScreen from './src/screens/People/PeopleScreen';
import ProverbsScreen from './src/screens/Proverbs/ProverbsScreen';
import AccentTrainingScreen from './src/screens/AccentTraining/AccentTrainingScreen';
import PresentationScreen from './src/screens/Presentation/PresentationScreen';
import VerbsScreen from './src/screens/Verbs/VerbsScreen';
import PaymentScreen from './src/screens/Payement/PayementScreen';
import DownloadedAudioScreen from './src/screens/DownloadedAudio/DownloadedAudioScreen';
import VerifyCodeScreen from './src/screens/VerifyCode/VerifyCodeScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';

// Contexts
import { SearchProvider } from './src/contexts/SearchContext';
import { PaymentProvider } from './src/contexts/PayementContext';
import { View } from 'react-native';

// Types
export type RootStackParamList = {
  GetStarted: undefined;
  Register: undefined;
  VerifyCode: { email: string }; // Définir explicitement les paramètres de route
  Home: undefined;
  Payment: undefined;
  Audio: undefined;
  DailyDialogues: undefined;
  Grammar: undefined;
  Debates: undefined;
  People: undefined;
  Proverbs: undefined;
  Verbs: undefined;
  AccentTraining: undefined;
  Presentation: undefined;
  Vocabularies: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>(); // Spécifier le type des paramètres

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const paymentStatus = await AsyncStorage.getItem('paymentStatus');
        if (paymentStatus) {
          const { hasPaid, expiryDate } = JSON.parse(paymentStatus);
          setHasPaid(hasPaid && new Date(expiryDate) > new Date());
        }
      } catch (error) {
        console.error('Error reading payment status', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkPaymentStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider>
      <PaymentProvider>
        <SearchProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName={hasPaid ? 'Home' : 'GetStarted'}>
              {/* Écran d'accueil */}
              <Stack.Screen
                name="GetStarted"
                component={GetStartedScreen}
                options={{ headerShown: false }}
              />

              {/* Écrans d'authentification */}
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              
              {/* Écran de vérification avec typage correct */}
              <Stack.Screen
                name="VerifyCode"
                component={VerifyCodeScreen}
                options={{ headerShown: false }}
              />

              {/* Menu principal */}
              <Stack.Screen
                name="Home"
                component={Sidebar}
                options={{ headerShown: false }}
              />
              
              {/* Écran de paiement */}
              <Stack.Screen
                name="Payment"
                options={{
                  header: () => <Header title="Abonnement Premium" />,
                }}
              >
                {(props) => (
                  <PaymentScreen
                    {...props}
                    amount={9.99}
                    onClose={() => props.navigation.goBack()}
                    onPaymentSuccess={(transactionId) => {
                      AsyncStorage.setItem('paymentStatus', JSON.stringify({
                        hasPaid: true,
                        transactionId,
                        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                      }));
                      props.navigation.navigate('Home');
                    }}
                  />
                )}
              </Stack.Screen>

              {/* Écran des audios téléchargés */}
              <Stack.Screen
                name="Audio"
                component={DownloadedAudioScreen}
                options={{
                  header: () => <Header title="Audio téléchargés" />,
                }}
              />

              {/* Autres écrans de l'application */}
              {[
                { name: 'DailyDialogues', title: 'Dialogues Quotidiens', component: DailyDialoguesScreen },
                { name: 'Grammar', title: 'Grammaire', component: GrammarScreen },
                { name: 'Debates', title: 'Débats', component: DebatesScreen },
                { name: 'People', title: 'Personnes', component: PeopleScreen },
                { name: 'Proverbs', title: 'Proverbes', component: ProverbsScreen },
                { name: 'Verbs', title: 'Verbes', component: VerbsScreen },
                { name: 'AccentTraining', title: 'Entraînement d\'Accent', component: AccentTrainingScreen },
                { name: 'Presentation', title: 'Présentation', component: PresentationScreen },
                { name: 'Vocabularies', title: 'Vocabulaire', component: VocabulariesScreen },
              ].map(({ name, title, component }) => (
                <Stack.Screen
                  key={name}
                  name={name as keyof RootStackParamList}
                  component={component}
                  options={{
                    header: () => <Header title={title} />,
                  }}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </SearchProvider>
      </PaymentProvider>
    </PaperProvider>
  );
}