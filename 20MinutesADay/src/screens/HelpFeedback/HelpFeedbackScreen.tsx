import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List, Button, Dialog, Portal, TextInput } from 'react-native-paper';

const HelpFeedbackScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [feedbackDialogVisible, setFeedbackDialogVisible] = useState(false);
  const [usageDialogVisible, setUsageDialogVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handlePress = (panel: string) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const openFeedbackDialog = () => setFeedbackDialogVisible(true);
  const closeFeedbackDialog = () => {
    setFeedbackDialogVisible(false);
    setFeedbackMessage('');
  };

  const openUsageDialog = () => setUsageDialogVisible(true);
  const closeUsageDialog = () => setUsageDialogVisible(false);

  const handleSendFeedback = () => {
    console.log('Feedback envoyé:', feedbackMessage);
    closeFeedbackDialog();
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Help & Feedback" />
        <Card.Content>
          <List.Section>
            {/* How to Use the App */}
            <List.Accordion
              title="How to Use the App"
              left={props => (
                <List.Icon 
                  {...props} 
                  icon="help-circle" 
                  color={expanded === 'usage' ? '#2541b2' : props.color}
                />
              )}
              expanded={expanded === 'usage'}
              onPress={() => handlePress('usage')}
              titleStyle={{
                color: expanded === 'usage' ? '#2541b2' : '#000',
                fontWeight: expanded === 'usage' ? 'bold' : 'normal',
              }}
            >
              <Button
                mode="contained"
                onPress={openUsageDialog}
                style={styles.button}
                buttonColor="#2541b2"
              >
                Learn How to Use
              </Button>
            </List.Accordion>

            {/* Send Feedback */}
            <List.Accordion
              title="Send Feedback"
              left={props => (
                <List.Icon 
                  {...props} 
                  icon="email" 
                  color={expanded === 'feedback' ? '#2541b2' : props.color}
                />
              )}
              expanded={expanded === 'feedback'}
              onPress={() => handlePress('feedback')}
              titleStyle={{
                color: expanded === 'feedback' ? '#2541b2' : '#000',
                fontWeight: expanded === 'feedback' ? 'bold' : 'normal',
              }}
            >
              <Button
                mode="contained"
                onPress={openFeedbackDialog}
                style={styles.button}
                buttonColor="#2541b2"
              >
                Write Feedback
              </Button>
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      {/* Dialog for Usage Information */}
      <Portal>
        <Dialog visible={usageDialogVisible} onDismiss={closeUsageDialog}>
          <Dialog.Title>How to Use the App</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              Welcome! Navigate through the modules to improve your English daily. 
              Each module offers exercises, quizzes, and lessons designed to help 
              you learn quickly and effectively. Don't forget to track your progress!
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={closeUsageDialog}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Dialog for Sending Feedback */}
      <Portal>
        <Dialog visible={feedbackDialogVisible} onDismiss={closeFeedbackDialog}>
          <Dialog.Title>Send Feedback</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Your Message"
              value={feedbackMessage}
              onChangeText={text => setFeedbackMessage(text)}
              multiline
              numberOfLines={4}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={closeFeedbackDialog}>Cancel</Button>
            <Button onPress={handleSendFeedback}>Send</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  dialogText: {
    fontSize: 16,
    color: '#555',
  },
});

export default HelpFeedbackScreen;
