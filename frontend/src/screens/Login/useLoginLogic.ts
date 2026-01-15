import { useCallback, useState } from 'react';
import { emailRegex, passwordRegex } from '../../utils/constants/regex';
import {
    deleteValueFromLocalStorage,
    setValueInLocalStorage,
} from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
// import AuthService from '../../services/authService';

export const useLoginLogic = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const isPasswordValid = passwordRegex.test(password);
    const isEmailValid = emailRegex.test(email);

    const handleSignIn = useCallback(async () => {
        setIsLoading(true);
        setLoginError('');
        setSubmitAttempted(true);

        try {
            // ===== Commented AuthService login =====
            // const result = await AuthService.signIn({ email, password });
            //
            // if (result.success && result.user) {
            //     const token = await result.user.getIdToken();
            //     await setValueInLocalStorage('authToken', token);
            //     navigate('/home'); // React Router navigation
            // } else {
            //     setLoginError('Email or password is incorrect.');
            // }

            // ===== Temporary fake success =====
            await setValueInLocalStorage('authToken', 'fake-token');
            navigate('/home'); // React Router navigation
        } catch {
            setLoginError('Email or password is incorrect.');
        } finally {
            setIsLoading(false);
        }
    }, [email, password, navigate]);

    const handleLogout = useCallback(async () => {
        await deleteValueFromLocalStorage('authToken');

        // ===== Commented AuthService / navigation =====
        // navigate('/login');

        // ===== Temporary fake navigation =====
        navigate('/login');
    }, [navigate]);

    const handleForgotPassword = useCallback(() => {
        if (!isEmailValid) return;

        // ===== Commented AuthService reset =====
        // try {
        //     const result = await AuthService.resetPassword(email);
        //     if (result.success) {
        //         setLoginError('Password reset email sent.');
        //     }
        // } catch {}

        // ===== Temporary fake success =====
        setLoginError('Password reset email sent.');
    }, [isEmailValid, email]);

    const handleSignUp = useCallback(() => {
        // ===== Commented navigation =====
        // navigate('/signup');

        // ===== Temporary fake navigation =====
        navigate('/signup');
    }, [navigate]);

    return {
        email,
        password,
        isLoading,
        isEmailValid,
        isPasswordValid,
        loginError,
        submitAttempted,

        setEmail,
        setPassword,
        handleSignIn,
        handleForgotPassword,
        handleSignUp,
        handleLogout,
    };
};
