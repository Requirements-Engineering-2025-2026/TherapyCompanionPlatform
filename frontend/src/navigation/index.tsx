import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MENU_SCREENS} from './config';
import { STACK_SCREENS } from './consts';
import { LoginScreen, SignUpScreen } from '../screens';
import MainLayout from '../components/MainLayout';

export const AppNavigator = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${STACK_SCREENS.LOGIN}`} replace />}
        />

        <Route path={`/${STACK_SCREENS.LOGIN}`} element={<LoginScreen />} />
        <Route path={`/${STACK_SCREENS.SIGN_UP}`} element={<SignUpScreen />} />

        <Route element={<MainLayout />}>
          {MENU_SCREENS.map(({ name, component: Component }) => (
            <Route
              key={name}
              path={`/${name}`}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
