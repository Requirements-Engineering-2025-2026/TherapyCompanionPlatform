import { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import COLORS from '../../constants/colors';
import gStyles from '../../utils/gStyles';
import styles from './styles';
import { useSignUpLogic } from './useSignUpLogic';
import BaseComponent from '../../components/BaseComponent';

const SignUpScreen = () => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const {
        name,
        email,
        password,
        confirmPassword,
        emailTouched,
        passwordTouched,
        isLoading,
        isEmailValid,
        isPasswordValid,
        doPasswordsMatch,
        setName,
        setEmail,
        registerError,
        setPassword,
        setConfirmPassword,
        handleSignUp: rawHandleSignUp,
        handleSignIn,
        handleEmailBlur,
        handlePasswordBlur,
    } = useSignUpLogic();

    const memoizedHandleSignUp = useMemo(
        () => (isLoading ? () => {} : rawHandleSignUp),
        [isLoading, rawHandleSignUp],
    );

    const confirmPasswordError = useMemo(() => {
        if (registerError) return registerError;
        if (confirmPassword.length > 0 && !doPasswordsMatch)
            return 'Passwords do not match';
        return '';
    }, [registerError, confirmPassword, doPasswordsMatch]);

    const alreadyMemberContainerStyle = useMemo(
        () =>
            isLandscape
                ? [
                      styles.alreadyMemberContainer,
                      { marginBottom: 32, marginTop: 32 },
                  ]
                : styles.alreadyMemberContainer,
        [isLandscape],
    );

    const emailInputStyle = useMemo(
        () => [
            styles.textBoxInput,
            emailTouched && !isEmailValid ? { color: COLORS.PRIMARY } : {},
        ],
        [emailTouched, isEmailValid],
    );

    const Content = (
        <>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{'Sign Up'}</Text>
                <View>
                    <TextBox
                        placeholder={'Full Name'}
                        containerStyle={styles.textBoxContainerName}
                        inputStyle={styles.textBoxInput}
                        keyboardType="default"
                        autoComplete="name"
                        autoCapitalize="words"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextBox
                        placeholder={'Email Address'}
                        containerStyle={styles.textBoxContainer}
                        inputStyle={emailInputStyle}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        onBlur={handleEmailBlur}
                    />
                    <View style={styles.errorTextContainer}>
                        {emailTouched && !isEmailValid && (
                            <Text style={styles.errorText}>{'Invalid email address'}</Text>
                        )}
                    </View>
                    <TextBox
                        placeholder={'Password'}
                        containerStyle={styles.textBoxContainer}
                        inputStyle={styles.textBoxInput}
                        secureTextEntry={true}
                        autoComplete="password"
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                        onBlur={handlePasswordBlur}
                    />
                    <View style={styles.errorTextContainer}>
                        {passwordTouched && password.length > 0 && !isPasswordValid && (
                            <Text style={styles.errorText}>{'Invalid password'}</Text>
                        )}
                    </View>
                    <TextBox
                        placeholder={'Confirm Password'}
                        containerStyle={styles.textBoxContainer}
                        inputStyle={styles.textBoxInput}
                        secureTextEntry={true}
                        autoComplete="password"
                        autoCapitalize="none"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <View style={styles.errorTextContainer}>
                        {confirmPasswordError !== '' && (
                            <Text style={styles.errorText}>{confirmPasswordError}</Text>
                        )}
                    </View>

                    <Button
                        style={styles.signUpButton}
                        textStyle={styles.signUpButtonText}
                        title={isLoading ? 'Creating Account...' : 'Sign Up'}
                        onPress={memoizedHandleSignUp}
                    />
                </View>

                <View style={alreadyMemberContainerStyle}>
                    <Text style={styles.alreadyMemberText}>{'Already have an account?'}</Text>
                    <Button
                        style={styles.signInButton}
                        textStyle={styles.signInButtonText}
                        title={'Sign In'}
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </>
    );

    return (
        <BaseComponent style={gStyles.container}>
            <KeyboardAvoidingView style={gStyles.container} keyboardVerticalOffset={0}>
                <ScrollView
                    contentContainerStyle={gStyles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {Content}
                </ScrollView>
            </KeyboardAvoidingView>
        </BaseComponent>
    );
};

export default SignUpScreen;
