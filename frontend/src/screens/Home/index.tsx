import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const emojis = ['😞', '😐', '🙂', '😊', '😁'];

const Home = () => {
  const [moodScore, setMoodScore] = useState<number | null>(null);
  const [moodText, setMoodText] = useState('');
  const [emoji, setEmoji] = useState<string | null>(null);
  const [hasMoodToday, setHasMoodToday] = useState(false);
  
  const getAuthToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch {
    return null;
  }
};


  const handleSaveMood = async () => {
  if (!emoji || !moodScore) return;
  
  const token = await getAuthToken();
  if (!token) {
    console.error('No auth token found');
    return;
  }
  console.log(moodText,moodScore,emoji)
  try {
    console.log('SENDING BODY:', {
  content: moodText,
  scale: moodScore,
  emoji,
});

    await fetch('http://localhost:3003/mood', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    content: moodText.trim(),     
    scale: moodScore,      
    emoji,                 
  }),
});

   
    

    setHasMoodToday(true);
  } catch (error) {
    console.error('Failed to save mood', error);
  }
};


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>How are you feeling today?</Text>

        <View style={styles.card}>
          {hasMoodToday ? (
            <View style={styles.centeredCardContent}>
              <Text style={styles.confirmEmoji}>{emoji}</Text>
              <Text style={styles.confirmText}>
                Mood set for today
              </Text>
            </View>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Mood (1–10)</Text>
              <View style={styles.scaleContainer}>
                {[...Array(10)].map((_, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.scaleItem,
                      moodScore === i + 1 && styles.scaleSelected,
                    ]}
                    onPress={() => setMoodScore(i + 1)}
                  >
                    <Text
                      style={[
                        styles.scaleText,
                        moodScore === i + 1 &&
                          styles.scaleTextSelected,
                      ]}
                    >
                      {i + 1}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.sectionTitle}>Choose an emoji</Text>
              <View style={styles.emojiContainer}>
                {emojis.map(e => (
                  <TouchableOpacity
                    key={e}
                    style={[
                      styles.emojiItem,
                      emoji === e && styles.emojiSelected,
                    ]}
                    onPress={() => setEmoji(e)}
                  >
                    <Text style={styles.emoji}>{e}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.sectionTitle}>Write a few words</Text>
              <TextInput
                style={styles.input}
                placeholder="What’s on your mind?"
                multiline
                value={moodText}
                onChangeText={setMoodText}
              />

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveMood}
              >
                <Text style={styles.saveText}>Save Mood</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
