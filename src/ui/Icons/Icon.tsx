import {
  createStyles,
  DefaultProps,
  getSize,
  MantineColor,
  MantineNumberSize,
  rem,
} from '@mantine/core';
import { IconName } from './IconName';
import { iconMapping } from './Icons';

const sizes = {
  xs: rem(12),
  sm: rem(16),
  md: rem(20),
  lg: rem(32),
  xl: rem(40),
};

const useStyles = createStyles(
  (theme, params: { color?: MantineColor; size: MantineNumberSize }) => {
    const getFill = (color?: MantineColor) => {
      if (!color) {
        return 'currentcolor';
      }
      const [colorName, colorVariant] = color.split('.');
      const colorIndex = colorVariant
        ? parseInt(colorVariant)
        : theme.colorScheme === 'dark'
        ? 8
        : 7;
      return colorName in theme.colors ? theme.colors[colorName][colorIndex] : color;
    };
    const iconSize = getSize({ size: params.size, sizes });
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

const defaultProps: Partial<IconProps> = {
  size: 'md',
};

export const Icon = ({ icon, color, size = 'md' }: IconProps) => {
  const { classes } = useStyles({ color, size });
  return (
    <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' className={classes.root}>
      {iconMapping[icon]}
    </svg>
  );
};
