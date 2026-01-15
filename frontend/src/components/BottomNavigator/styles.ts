import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 22,
    color: '#777',
  },
  label: {
    fontSize: 12,
    color: '#fff',
  },
  active: {
    color: COLORS.RED,
    fontWeight: '700',
  },
});
export default styles;