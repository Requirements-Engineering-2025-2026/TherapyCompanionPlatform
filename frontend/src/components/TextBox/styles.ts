import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { Fonts } from '../../utils/constants/fonts';
import { typography } from '../../utils/constants/fonts';
const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        height: 40,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 8,
        borderWidth: 0, // Remove border since container has it
        backgroundColor: 'transparent',
        fontFamily: Fonts.regular,
        textAlignVertical: 'center',
        includeFontPadding: false,
        paddingVertical: 0,
    },
    inputWithToggle: {
        paddingRight: 60, // Make space for the toggle button on the right
    },
    inputWithLeftIcon: {
        paddingLeft: 40, // Make space for the left icon
    },
    leftIconContainer: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleButton: {
        position: 'absolute',
        right: 8,
        zIndex: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    toggleText: {
        color: COLORS.PRIMARY,
        ...typography.bodyXsMedium,
    },
});

export default styles;
