import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { typography } from '../../utils/constants/fonts';

const styles = StyleSheet.create({
    text: {
        color: COLORS.WHITE,
        ...typography.bodyMRegular,
    },
});

export default styles;
