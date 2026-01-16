import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

const API_URL = 'http://localhost:3003';

type Entry = {
  id: string;
  text: string;
  date: string;
};

const LS_ENTRIES = 'journalEntries';
const LS_DAY_KEY = 'journalDayKey';

const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem('authToken');
  } catch {
    return null;
  }
};

const todayKey = () => new Date().toDateString();

const JournalScreen = () => {
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);
  const [hasEntryToday, setHasEntryToday] = useState(false);

  // ✅ restore from localStorage on mount
  useEffect(() => {
    try {
      const savedDay = localStorage.getItem(LS_DAY_KEY);
      const savedEntriesRaw = localStorage.getItem(LS_ENTRIES);

      const t = todayKey();

      // If day changed, reset the "one per day" lock
      if (savedDay !== t) {
        localStorage.setItem(LS_DAY_KEY, t);
        localStorage.setItem(LS_ENTRIES, JSON.stringify([]));
        setEntries([]);
        setHasEntryToday(false);
        return;
      }

      const savedEntries = savedEntriesRaw ? (JSON.parse(savedEntriesRaw) as Entry[]) : [];
      setEntries(savedEntries);
      setHasEntryToday(savedEntries.some(e => e.date === t));
    } catch {
      // if localStorage is blocked or JSON is bad, just start fresh
      setEntries([]);
      setHasEntryToday(false);
    }
  }, []);

  // ✅ persist entries whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(LS_ENTRIES, JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries]);

  const handleAddEntry = async () => {
    const content = entryText.trim();
    if (!content || hasEntryToday) return;

    const t = todayKey();

    // ✅ FRONTEND: add immediately & lock for today
    const newEntry: Entry = {
      id: Date.now().toString(),
      text: content,
      date: t,
    };

    setEntries(prev => [newEntry, ...prev]);
    setEntryText('');
    setHasEntryToday(true);

    // ✅ persist the day key
    try {
      localStorage.setItem(LS_DAY_KEY, t);
    } catch {}

    // 🔌 BACKEND CALL (best-effort)
    try {
      const token = getAuthToken();
      if (!token) return;

      await fetch(`${API_URL}/journal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });
    } catch {
      // intentionally ignored for now
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCard}>
        <Text style={styles.title}>Write in your journal</Text>

        {hasEntryToday && (
          <Text style={styles.emptyText}>
            You already added a journal entry today.
          </Text>
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Write your thoughts here..."
          placeholderTextColor="#999"
          multiline
          value={entryText}
          onChangeText={setEntryText}
          editable={!hasEntryToday}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddEntry}
          disabled={hasEntryToday}
        >
          <Text style={styles.addButtonText}>Add Entry</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.entriesContainer}>
        {entries.length === 0 ? (
          <Text style={styles.emptyText}>No journal entries yet.</Text>
        ) : (
          entries.map(entry => (
            <View key={entry.id} style={styles.entryCard}>
              <Text style={styles.entryDate}>{entry.date}</Text>
              <Text style={styles.entryText}>{entry.text}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default JournalScreen;