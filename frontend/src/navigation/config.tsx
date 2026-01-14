
import { HomeScreen, LoginScreen, SignUpScreen, SplashScreen } from "../screens";
import { STACK_SCREENS } from "./consts";

export const STACK_NAVIGATOR_SCREENS = [
    { name: STACK_SCREENS.SPLASH, component: SplashScreen },
    { name: STACK_SCREENS.LOGIN, component: LoginScreen },
    { name: STACK_SCREENS.SIGN_UP, component: SignUpScreen },
    {
        name: STACK_SCREENS.HOME,
        component: HomeScreen,
    },
];