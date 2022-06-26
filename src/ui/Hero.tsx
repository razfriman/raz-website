import { createStyles, Stack, Text, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
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
}));

export const Hero = ({
  title,
  subTitle,
}: {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
}) => {
  const { classes } = useStyles();
  return (
    <Stack>
      <Title className={classes.title}>{title}</Title>
      {subTitle && (
        <Text color='dimmed' mt='md'>
          {subTitle}
        </Text>
      )}
    </Stack>
  );
};
