import { Outlet } from 'react-router-dom'
import { AppShell, Footer } from '@mantine/core';
import { AppHeader } from '@/ui/AppHeader';
import { AppFooter } from '@/ui/AppFooter';

export const MainLayout = () => {
  return (
    <AppShell
      padding="md"
      header={<AppHeader />}
      footer={<Footer height={60} p="xs"><AppFooter /></Footer>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Outlet />
    </AppShell>
  )
};