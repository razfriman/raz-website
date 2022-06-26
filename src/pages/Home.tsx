import resumeUrl from '@/static/Resume_Raz_Friman.pdf';
import { Hero } from '@/ui/Hero';
import { Highlight } from '@/ui/Highlight';
import { Icon } from '@/ui/Icon';
import { ActionIcon, Button, Container, Group, List, Stack } from '@mantine/core';

export const Home = () => {
  return (
    <Container size='xs' px='xs'>
      <Stack spacing={32}>
        <Hero
          title={
            <>
              Hi, I&apos;m <Highlight>Raz</Highlight>
            </>
          }
          subTitle={
            <>
              I&apos;m a Full-Stack Software Engineer with experience in .NET, Java, Angular, and
              React.
              <br />
              I&apos;m also an aerial photographer and a VR enthusiast.
            </>
          }
        />

        <List spacing='sm' size='sm'>
          <List.Item icon={<Icon icon='work' />}>
            Senior Software Engineer at <b>Canva</b>
          </List.Item>
          <List.Item icon={<Icon icon='work' />}>
            Software Engineer II at <b>SpaceX</b>
          </List.Item>
          <List.Item icon={<Icon icon='work' />}>
            Software Engineer at <b>In-Com Data Systems</b>
          </List.Item>
          <List.Item icon={<Icon icon='game' />}>
            Creator of <b>RazTracker</b>&nbsp;
            <ActionIcon
              size={20}
              component='a'
              href='https://raztracker.com'
              target='_blank'
              sx={{
                display: 'inline-flex',
                verticalAlign: 'middle',
              }}
            >
              <Icon icon='share' />
            </ActionIcon>
            <br />
            <small>Fortnite Stats Tracker and Match Analytics</small>
          </List.Item>
          <List.Item icon={<Icon icon='tesla' />}>
            Creator of <b>TeslaLib</b>&nbsp;
            <ActionIcon
              size={20}
              component='a'
              href='https://github.com/razfriman/TeslaLib'
              target='_blank'
              sx={{
                display: 'inline-flex',
                verticalAlign: 'middle',
              }}
            >
              <Icon icon='share' />
            </ActionIcon>
            <br />
            <small>C# wrapper for Tesla Model S API</small>
          </List.Item>
        </List>

        <Group>
          <Button
            component='a'
            href={resumeUrl}
            target='_blank'
            color='inherit'
            radius='xl'
            size='md'
          >
            Download Résumé
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};
