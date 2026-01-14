import {
    createNavigationContainerRef,
    DefaultTheme
} from '@react-navigation/native';
import COLORS from '../constants/colors';

export const navigationRef = createNavigationContainerRef();

export const STACK_SCREENS = {
    SPLASH: 'Splash',
    LOGIN: 'Login',
    SIGN_UP: 'SignUp',
    HOME: 'Home',
} as const;

export type STACK_SCREENS = typeof STACK_SCREENS[keyof typeof STACK_SCREENS];


export const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        backgroundColor: COLORS.DARKBLUE,
    },
};