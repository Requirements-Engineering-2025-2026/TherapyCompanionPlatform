import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { typography } from '../../utils/constants/fonts';

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        alignItems: 'center',
    },
    text: {
        color: COLORS.WHITE,
        ...typography.bodyMBold,
    },
});

export default styles;
