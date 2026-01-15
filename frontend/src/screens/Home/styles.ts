import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#fff',
  },
  infoText: {
    fontSize: 16,
    color: 'green',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  centeredCardContent: {
  flex: 1,
  minHeight: 200,
  justifyContent: 'center',
  alignItems: 'center',
},

confirmEmoji: {
  fontSize: 48,
  marginBottom: 12,
},
confirmScore: {
  marginTop: 6,
  fontSize: 16,
  fontWeight: '600',
  color: '#555',
},
confirmText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#333',
},
  /* SCALE */
  scaleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scaleItem: {
    width: '18%',
    margin: '1%',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  scaleSelected: {
    backgroundColor: COLORS.DARKBLUE,
    borderColor: COLORS.GRAY,
  },
  scaleText: {
    fontSize: 16,
  },
  scaleTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },

  /* EMOJI */
  emojiContainer: {
    flexDirection: 'row',
  },
  emojiItem: {
    marginRight: 12,
    padding: 8,
    borderRadius: 8,
  },
  emojiSelected: {
    backgroundColor: '#eee',
  },
  emoji: {
    fontSize: 28,
  },

  /* INPUT */
  input: {
    borderWidth: 1,
    color: '#000',
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    minHeight: 80,
    textAlignVertical: 'top',
  },

  /* SAVE */
  saveButton: {
    backgroundColor:COLORS.DARKBLUE,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 16,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
export default styles;