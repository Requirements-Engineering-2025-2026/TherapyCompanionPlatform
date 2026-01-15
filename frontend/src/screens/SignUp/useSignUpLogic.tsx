import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AuthService from '../../services/authService';

export const useSignUpLogic = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [registerError, setRegisterError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6;
    const doPasswordsMatch = password === confirmPassword;

    const handleSignUp = async () => {
        if (!isEmailValid || password.length < 6 || !doPasswordsMatch) {
            return;
        }

        setIsLoading(true);

        try {
            // ===== Commented AuthService logic =====
            /*
            const result = await AuthService.signUp({
                name: name.trim(),
                email: email.trim().toLowerCase(),
                password,
            });

            if (result.success) {
                navigate('/main'); // Replace 'MainTabs' with web route
            } else {
                setRegisterError('Error signing up.'); // replace t(errorSignup)
            }
            */

            // ===== Temporary fake signup for web =====
            await new Promise(resolve => setTimeout(resolve, 500)); // simulate network delay
            navigate('/main'); // successful signup redirects to main page
        } catch {
            setRegisterError('Something went wrong, please try again.'); // replace t(tryAgainSignup)
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    const handleEmailBlur = () => setEmailTouched(true);
    const handlePasswordBlur = () => setPasswordTouched(true);

    return {
        name,
        email,
        password,
        confirmPassword,
        subscribeToNewsletter,
        emailTouched,
        passwordTouched,
        isLoading,
        isEmailValid,
        isPasswordValid,
        doPasswordsMatch,
        registerError,

        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        setSubscribeToNewsletter,
        handleSignUp,
        handleSignIn,
        handleEmailBlur,
        handlePasswordBlur,
    };
};
