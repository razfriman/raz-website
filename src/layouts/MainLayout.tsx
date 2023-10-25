import { AppFooter } from '@/ui/AppFooter';
import { AppHeader } from '@/ui/AppHeader';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
};
