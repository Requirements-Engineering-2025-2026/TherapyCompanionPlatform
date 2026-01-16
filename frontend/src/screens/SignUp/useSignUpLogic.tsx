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
        setRegisterError('');

        try {
            const response = await fetch('http://localhost:3003/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: name.trim(),
                email: email.trim(),
                password,
                type: 'patient',
            }),
            });


            if (!response.ok) {
                const err = await response.json().catch(() => null);
                const msg =
                    (typeof err?.message === 'string' && err.message) ||
                    (Array.isArray(err?.message) && err.message.join(', ')) ||
                    'Error signing up.';
                setRegisterError(msg);
                return;
            }

            // Some backends return token/user, some return just success.
            // We don't need the response for navigation, so just proceed.
            navigate('/login');
        } catch {
            setRegisterError('Something went wrong, please try again.');
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
