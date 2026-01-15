import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';
import { typography } from '../../utils/constants/fonts';
import gStyles from '../../utils/gStyles.ts';


const styles = StyleSheet.create({
    contentContainer: gStyles.contentContainer,

    logo: {
        marginTop: 104,
        alignSelf: 'center',
    },

    userIcon: {
        marginBottom: 10,
    },
    errorTextContainer: {
        height: 22,
    },
    title: gStyles.title,
    textBoxContainerName: {
        ...gStyles.textBoxContainer,
        marginBottom: 28,
    },
    textBoxContainer: { ...gStyles.textBoxContainer, marginTop: 0 },
    textBoxInput: gStyles.textBoxInput,

    errorText: {
        color: COLORS.WHITE,
        marginLeft: 40,
        marginTop: 0.5,
        ...typography.bodyXsRegular,
    },
    checkboxContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
  marginBottom: 20,
},
checkboxButton: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  paddingVertical: 8,
  borderRadius: 4,
  marginHorizontal: 5,
  alignItems: 'center',
  backgroundColor: '#fff',
},
checkboxSelected: {
  backgroundColor: COLORS.DARKBLUE,
},
checkboxText: {
  fontSize: 16,
  color: '#333',
  fontWeight: '600',
},
checkboxTextSelected: {
  color: '#fff',
}
,
    checkBoxText: gStyles.checkboxContainer,

    signUpButton: gStyles.primaryButton,
    signUpButtonText: gStyles.primaryButtonText,

    alreadyMemberContainer: gStyles.bottomSectionContainer,
    alreadyMemberText: gStyles.bottomSectionText,

    signInButton: gStyles.secondaryButton,
    signInButtonText: gStyles.secondaryButtonText,
});

export default styles;
