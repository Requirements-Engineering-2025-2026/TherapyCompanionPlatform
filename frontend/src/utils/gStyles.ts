import { StyleSheet } from 'react-native';



import COLORS from '../constants/colors';
import { typography } from './constants/fonts';

export const gStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        ...typography.bodyMBold,
        textAlign: 'center',
        color: COLORS.WHITE,
    },
    textBoxContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 32,
        height: 32,
    },
    textBoxInput: {
        width: 400,
        borderRadius: 20,
        textAlign: 'left',
        backgroundColor: COLORS.DARKBLUE,
        color: COLORS.GREY_PLACEHOLDER,
        borderWidth: 0,
        ...typography.bodyBaseRegular,
        textAlignVertical: 'center',
        includeFontPadding: false,
        paddingVertical: 0,
        lineHeight: 20,
    },
    primaryButton: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 30,
        height: 30,
        width: 170,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    primaryButtonText: {
        color: COLORS.DARKBLUE,
        ...typography.body_base_bold,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        height: 30,
        width: 170,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.WHITE,
        marginBottom: 10,
    },
    secondaryButtonText: {
        color: COLORS.WHITE,
        ...typography.bodyBaseRegular,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: 0,
        lineHeight: 20,
    },
    bottomSectionContainer: {
        marginTop: 70,
    },

    scrollContent: {
        flexGrow: 1,
    },
    bottomSectionText: {
        color: COLORS.WHITE,
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        ...typography.bodyBaseRegular,
    },
    textButton: {
        textDecorationLine: 'underline',
        color: COLORS.WHITE,
        marginTop: 10,
        textAlign: 'center',
        ...typography.bodyBaseRegular,
    },
    checkboxContainer: {
        marginTop: 5,
    },
});

export default gStyles;
