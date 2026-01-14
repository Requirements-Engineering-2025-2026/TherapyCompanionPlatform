import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { STACK_NAVIGATOR_SCREENS } from './config';
import { STACK_SCREENS } from './consts';

export const AppNavigator = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${STACK_SCREENS.LOGIN}`} replace />}
        />

        {STACK_NAVIGATOR_SCREENS.map(
          ({ name, component: Component }) => (
            <Route
              key={name}
              path={`/${name}`}
              element={<Component />}
            />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
};
