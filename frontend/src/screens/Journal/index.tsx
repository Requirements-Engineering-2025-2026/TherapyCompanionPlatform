import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
const JournalScreen = () => {
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState<
    { id: string; text: string; date: string }[]
  >([]);

  const handleAddEntry = () => {
    if (!entryText.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      text: entryText,
      date: new Date().toLocaleDateString(),
    };

    setEntries([newEntry, ...entries]);
    setEntryText('');
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* INPUT AREA */}
      <View style={styles.inputCard}>
        <Text style={styles.title}>Write in your journal</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Write your thoughts here..."
          placeholderTextColor="#999"
          multiline
          value={entryText}
          onChangeText={setEntryText}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddEntry}>
          <Text style={styles.addButtonText}>Add Entry</Text>
        </TouchableOpacity>
      </View>

      {/* ENTRIES */}
      <ScrollView contentContainerStyle={styles.entriesContainer}>
        {entries.length === 0 ? (
          <Text style={styles.emptyText}>No journal entries yet.</Text>
        ) : (
          entries.map(entry => (
            <View key={entry.id} style={styles.entryCard}>
              <Text style={styles.entryDate}>{entry.date}</Text>
              <Text style={styles.entryText}>{entry.text}</Text>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteEntry(entry.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default JournalScreen;
