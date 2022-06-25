// import { Container, Box, Text, Button, Title } from "@mantine/core";
import resumeUrl from "@/static/Resume_Raz_Friman.pdf";
import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ActionIcon,
} from '@mantine/core';
import { Icon } from "@/ui/Icon";

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][1],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export const Home = () => {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi, I'm <span className={classes.highlight}>Raz</span>
          </Title>
          <Text color="dimmed" mt="md">
            I'm a full-stack developer with experience in .NET, Java, Angular, and React.
            <br />
            I'm also an aerial photographer and a VR enthusiast.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
          >
            <List.Item icon={<Icon icon="work" />}>
              Senior Software Engineer at <b>Canva</b>
            </List.Item>
            <List.Item icon={<Icon icon="work" />}>
              Software Engineer II at <b>SpaceX</b>
            </List.Item>
            <List.Item icon={<Icon icon="work" />}>
              Software Engineer at <b>In-Com Data Systems</b>
            </List.Item>
            <List.Item icon={<Icon icon="game" />}>
              Creator of <b>RazTracker</b> <ActionIcon size={20} component="a" href="https://raztracker.com" target="_blank" sx={{
                display: "inline-flex",
                verticalAlign: "middle"
              }}  >
                <Icon icon="share" />
              </ActionIcon>
              <br />
              <small>Fortnite Stats Tracker and Match Analytics</small>
            </List.Item>
            <List.Item icon={<Icon icon="tesla" />}>
              Creator of <b>TeslaLib</b>  <ActionIcon size={20} component="a" href="https://github.com/razfriman/TeslaLib" target="_blank" sx={{
                display: "inline-flex",
                verticalAlign: "middle"
              }}  >
                <Icon icon="share" />
              </ActionIcon>
              <br />
              <small>C# wrapper for Tesla Model S API</small>
            </List.Item>
          </List>

          <Group mt={30}>
            <Button component="a" href={resumeUrl} target="_blank" color="inherit" radius="xl" size="md">
              Download Résumé
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}