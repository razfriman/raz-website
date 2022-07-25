import { AppFooter } from '@/ui/AppFooter';
import { AppHeader } from '@/ui/AppHeader';
import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <AppShell
      fixed
      header={<AppHeader />}
      footer={<AppFooter />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};
