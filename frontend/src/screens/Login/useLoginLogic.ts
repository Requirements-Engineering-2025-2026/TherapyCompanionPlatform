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

    // keep your current validation behavior
    if (!isEmailValid || !isPasswordValid) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3003/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      if (!response.ok) {
        // Nest often returns { message: string | string[] }
        const err = await response.json().catch(() => null);
        const msg =
          (typeof err?.message === 'string' && err.message) ||
          (Array.isArray(err?.message) && err.message.join(', ')) ||
          'Email or password is incorrect.';
        setLoginError(msg);
        return;
      }

      const data = await response.json();

      // expect { access_token: "..." } (adjust if your backend uses a different key)
      const token = data?.access_token;
      if (!token) {
        setLoginError('Login response missing access token.');
        return;
      }

      await setValueInLocalStorage('authToken', token);
      navigate('/home');
    } catch {
      setLoginError('Email or password is incorrect.');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, navigate, isEmailValid, isPasswordValid]);

  const handleLogout = useCallback(async () => {
    await deleteValueFromLocalStorage('authToken');
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
