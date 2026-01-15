import { Outlet } from 'react-router-dom';
import BottomNavigator from '../BottomNavigator';
import Header from '../Header';

const MainLayout = () => {
  return (
    <div style={{ paddingBottom: 70 }}>
      <Header />
      <Outlet />
      <BottomNavigator />
    </div>
  );
};

export default MainLayout;
