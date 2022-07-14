import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Icon } from './Icons/Icon';

export const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon onClick={() => toggleColorScheme()} aria-label='switch theme button'>
      <Icon icon={colorScheme === 'dark' ? 'sun' : 'moon'} />
    </ActionIcon>
  );
};
