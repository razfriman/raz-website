import { createStyles, DefaultProps, MantineColor, MantineNumberSize } from '@mantine/core';
import { IconName } from './IconName';
import { iconMapping } from './Icons';

const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 36,
};

const useStyles = createStyles(
  (theme, params: { color?: MantineColor; size: MantineNumberSize }) => {
    const getFill = (color?: MantineColor) => {
      return !color
        ? 'currentcolor'
        : color in theme.colors
        ? theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7]
        : color;
    };
    const iconSize = theme.fn.size({ size: params.size, sizes });
    return {
      root: {
        fill: getFill(params.color),
        verticalAlign: 'middle',
        width: iconSize,
        height: iconSize,
      },
    };
  },
);

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
