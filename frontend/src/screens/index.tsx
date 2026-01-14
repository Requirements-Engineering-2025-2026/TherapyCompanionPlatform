import LoadingScreen from '../components/LoadingScreen';
import { lazyScreen } from '../utils/lazyScreen';

export const HomeScreen = lazyScreen(() => import('./Home'), {
    fallback: <LoadingScreen />,
});

export const LoginScreen = lazyScreen(() => import('./Login'), {
    fallback: <LoadingScreen />,
});

export const SignUpScreen = lazyScreen(() => import('./SignUp'), {
    fallback: <LoadingScreen />,
});

export const SplashScreen = lazyScreen(() => import('./Splash'), {
    fallback: <LoadingScreen />,
});

