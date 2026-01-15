import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import gStyles from '../../utils/gStyles';
import { typography } from '../../utils/constants/fonts';

const styles = StyleSheet.create({
  contentContainer: {
    ...gStyles.contentContainer,
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },

  logo: {
    marginTop: 40,
    alignSelf: 'center',
  },

  inputContainer: {
    marginTop: 24,
    maxWidth: 400,
    alignSelf: 'center',
    width: 400,
  },

  userIcon: {
    marginBottom: 10,
    alignSelf: 'center',
  },

  errorTextContainer: {
    height: 20,
  },

  title: {
    ...gStyles.title,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },

  textBoxContainer: {
    ...gStyles.textBoxContainer,
    marginTop: 0,
    width: 400,
  },

  textBoxInput: {
    ...gStyles.textBoxInput,
  },

  errorText: {
    color: COLORS.WHITE,
    marginLeft: 0,
    marginTop: 2,
    ...typography.bodyXsRegular,
  },

  signInButton: {
    ...gStyles.primaryButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },

  signInButtonText: gStyles.primaryButtonText,

  forgotPasswordText: {
    ...gStyles.textButton,
    textAlign: 'center',
    marginTop: 10,
  },

  notMemberContainer: {
    marginTop: 40,
    alignItems: 'center',
  },

  notMemberText: {
    ...gStyles.bottomSectionText,
    marginBottom: 10,
    textAlign: 'center',
  },

  signUpButton: {
    ...gStyles.secondaryButton,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },

  signUpButtonText: gStyles.secondaryButtonText,
});

export default styles;
