import { StyleSheet } from 'react-native';
import gStyles from '../../utils/gStyles';
import COLORS from '../../constants/colors';
export const styles = StyleSheet.create({
  headerContainer: { width: 1700, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomColor: '#fff', borderBottomWidth: 1, right:200 },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  /* MODAL */
  modalContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  modalContent: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  modalButton: gStyles.primaryButton,
  modalTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 8,
    lineHeight: 22,
  },
  closeText: {
    color: COLORS.DARKBLUE,
    fontSize: 16,
    fontWeight: '600',
  },
});
