import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { AppHeader } from '@/ui/AppHeader';
import { AppFooter } from '@/ui/AppFooter';

export const MainLayout = () => {
  return (
    <AppShell
      padding='md'
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
