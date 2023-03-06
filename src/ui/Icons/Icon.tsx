import { createStyles, DefaultProps, MantineColor, MantineNumberSize } from '@mantine/core';
import { IconName } from './IconName';
import { iconMapping } from './Icons';

const useStyles = createStyles((theme, params: { color?: MantineColor; size?: number }) => {
  const getFill = (color?: MantineColor) => {
    return !color
      ? 'currentcolor'
      : color in theme.colors
      ? theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7]
      : color;
  };
  return {
    root: {
      fill: getFill(params.color),
      verticalAlign: 'middle',
      width: params.size,
      height: params.size,
    },
  };
});

export interface IconProps extends DefaultProps {
  icon: IconName;
  color?: MantineColor;
  size?: MantineNumberSize;
}

export const Icon = ({ icon, color, size = 'md' }: IconProps) => {
  const { classes } = useStyles({ color, size });
  return (
    <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' className={classes.root}>
      {iconMapping[icon]}
    </svg>
  );
};
