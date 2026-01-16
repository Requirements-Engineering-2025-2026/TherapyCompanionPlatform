import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },

  inputCard: {
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },

  textInput: {
    minHeight: 120,
    borderRadius: 10,
    backgroundColor: '#2a2a2a',
    color: '#fff',
    padding: 12,
    textAlignVertical: 'top',
  },

  addButton: {
    backgroundColor: COLORS.DARKBLUE,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  entriesContainer: {
    paddingBottom: 80,
  },

  emptyText: {
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },

  entryCard: {
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  entryDate: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 6,
  },

  entryText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },

  deleteButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  deleteText: {
    color: '#FF3B30',
    fontWeight: '600',
  },
});
export default styles;