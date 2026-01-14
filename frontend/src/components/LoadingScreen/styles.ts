import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';


const loadingScreenStyles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
    },
});

export default loadingScreenStyles;
