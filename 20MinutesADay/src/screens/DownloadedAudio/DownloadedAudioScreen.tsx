import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';

const AUDIO_DIR = FileSystem.documentDirectory + 'assets/audio';

const DownloadedAudioScreen: React.FC = () => {
  const [audioFiles, setAudioFiles] = useState<string[]>([]); // audioFiles est un tableau de string

  const loadAudios = async () => {
    try {
      const dirInfo = await FileSystem.readDirectoryAsync(AUDIO_DIR);
      setAudioFiles(dirInfo);
    } catch (error) {
      console.error('Erreur lecture audios:', error);
    }
  };

  const playAudio = async (fileName: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: AUDIO_DIR + fileName });
      await sound.playAsync();

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error('Erreur lecture audio:', error);
    }
  };

  useEffect(() => {
    loadAudios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audios téléchargés</Text>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => playAudio(item)}
            style={styles.item}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>Aucun audio téléchargé.</Text>}
      />
    </View>
  );
};

export default DownloadedAudioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
