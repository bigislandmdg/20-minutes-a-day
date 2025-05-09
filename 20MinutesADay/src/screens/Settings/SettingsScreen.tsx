import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List, Switch } from 'react-native-paper';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const handlePress = (panel: string) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Settings" />
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Preferences"
              left={props => (
                <List.Icon 
                  {...props} 
                  icon="cog" 
                  color={expanded === 'preferences' ? '#2541b2' : props.color}
                />
              )}
              expanded={expanded === 'preferences'}
              onPress={() => handlePress('preferences')}
              titleStyle={{
                color: expanded === 'preferences' ? '#2541b2' : '#000',
                fontWeight: expanded === 'preferences' ? 'bold' : 'normal',
              }}
            >
              <List.Item
                title="Enable Notifications"
                right={() => (
                  <Switch
                    value={notificationsEnabled}
                    onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                )}
              />
              <List.Item
                title="Dark Mode"
                right={() => (
                  <Switch
                    value={darkModeEnabled}
                    onValueChange={() => setDarkModeEnabled(!darkModeEnabled)}
                  />
                )}
              />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    backgroundColor: '#ffffff',
    shadowRadius: 2,
  },
});

export default SettingsScreen;
