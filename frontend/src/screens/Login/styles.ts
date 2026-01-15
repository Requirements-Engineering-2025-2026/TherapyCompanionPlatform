import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';
import { typography } from '../../utils/constants/fonts';
import gStyles from '../../utils/gStyles.ts';


const styles = StyleSheet.create({
    contentContainer: gStyles.contentContainer,
    titleText:{
        ...typography.pageTitleBold,
        color:COLORS.WHITE,
        alignSelf:'center',
        marginBottom:20,
    },
    logo: {
        marginTop: 104,
        alignSelf: 'center',
    },
    inputContainer: {
        marginTop: 24,
    },
    userIcon: {
        marginBottom: 10,
    },
    errorTextContainer: {
        height: 20,
    },
    title: gStyles.title,
    textBoxContainer: { ...gStyles.textBoxContainer, marginTop: 0 },
    textBoxInput: gStyles.textBoxInput,

    errorText: {
        color: COLORS.WHITE,
        marginLeft: 40,
        marginTop: 0.5,
        ...typography.bodyXsRegular,
    },

    signInButton: {
        ...gStyles.primaryButton,
        marginTop: 30,
    },
    signInButtonText: gStyles.primaryButtonText,

    forgotPasswordText: gStyles.textButton,

    notMemberContainer: {
        ...gStyles.bottomSectionContainer,
        marginTop: 130,
    },
    notMemberText: gStyles.bottomSectionText,

    signUpButton: gStyles.secondaryButton,
    signUpButtonText: gStyles.secondaryButtonText,
});

export default styles;
