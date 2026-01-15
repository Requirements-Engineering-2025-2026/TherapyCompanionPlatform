import { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';

import PlainTextButton from '../../components/PlainTextButton';
import TextBox from '../../components/TextBox';
import gStyles from '../../utils/gStyles';
import { useLoginLogic } from './useLoginLogic';
import styles from './styles';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import BaseComponent from '../../components/BaseComponent';

const LoginScreen = () => {
    const {
        email,
        password,
        isLoading,
        isEmailValid,
        isPasswordValid,
        setEmail,
        setPassword,
        handleSignIn,
        handleForgotPassword,
        handleSignUp,
        loginError,
        submitAttempted,
    } = useLoginLogic();

    const emailInputStyle = useMemo(
        () => [
            styles.textBoxInput,
            email.length > 0 && submitAttempted && !isEmailValid
                ? { color: COLORS.PRIMARY }
                : {},
        ],
        [submitAttempted, isEmailValid, email.length],
    );

    const passwordError = useMemo(() => {
        if (loginError) return loginError;
        if (!isPasswordValid) return 'Invalid password'; 
        return '';
    }, [loginError, isPasswordValid]);

    const isSignInDisabled = !email?.trim().length || !password?.trim().length;

    const Content = (
        <>
            <View style={styles.contentContainer}>
               
                <Text style={styles.title}>{'Sign In'}</Text>

                <View style={styles.inputContainer}>
                    <TextBox
                        placeholder={'Email Address'}
                        containerStyle={styles.textBoxContainer}
                        inputStyle={emailInputStyle}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        required={true}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <View style={styles.errorTextContainer}>
                        {email.length > 0 && submitAttempted && !isEmailValid && (
                            <Text style={styles.errorText}>{'Invalid email address'}</Text>
                        )}
                    </View>

                    <TextBox
                        placeholder={'Password'}
                        containerStyle={styles.textBoxContainer}
                        inputStyle={styles.textBoxInput}
                        secureTextEntry={true}
                        autoComplete="password"
                        textContentType="password"
                        autoCapitalize="none"
                        required={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <View style={styles.errorTextContainer}>
                        {password.length > 0 && submitAttempted && (
                            <Text style={styles.errorText}>{passwordError}</Text>
                        )}
                    </View>

                    <Button
                        style={styles.signInButton}
                        textStyle={styles.signInButtonText}
                        title={isLoading ? 'Signing In...' : 'Sign In'}
                        onPress={handleSignIn}
                        disabled={isLoading || isSignInDisabled}
                    />

                    <PlainTextButton onPress={handleForgotPassword} style={styles.forgotPasswordText}>
                        {'Forgot Password?'}
                    </PlainTextButton>
                </View>

                <View style={styles.notMemberContainer}>
                    <Text style={styles.notMemberText}>{'Not a member?'}</Text>

                    <Button
                        style={styles.signUpButton}
                        textStyle={styles.signUpButtonText}
                        title={'Sign Up'}
                        onPress={handleSignUp}
                    />
                </View>
            </View>
        </>
    );

    return (
        <BaseComponent style={gStyles.container}>
                <ScrollView
                    contentContainerStyle={gStyles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {Content}
                </ScrollView>
        </BaseComponent>
    );
};

export default LoginScreen;
