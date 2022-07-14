import { ActionIcon, Footer, Group } from '@mantine/core';
import { Icon } from './Icons/Icon';
import { IconName } from './Icons/IconName';

const links: { href: string; icon: IconName }[] = [
  {
    href: 'https://www.linkedin.com/in/razfriman',
    icon: 'linkedin',
  },
  {
    href: 'https://github.com/razfriman',
    icon: 'github',
  },
  {
    href: 'mailto:raz.friman@razfriman.com',
    icon: 'email',
  },
];

export const AppFooter = () => {
  const items = links.map((link) => {
    return (
      <ActionIcon
        component='a'
        href={link.href}
        key={link.href}
        aria-label={`${link.icon} link`}
        target='_blank'
      >
        <Icon icon={link.icon} />
      </ActionIcon>
    );
  });
  return (
    <Footer height={60} p='xs'>
      <Group position='center' spacing={20}>
        {items}
      </Group>
    </Footer>
  );
};
