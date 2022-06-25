import { ActionIcon, Box, useMantineColorScheme } from "@mantine/core";
import { Icon } from "./Icon";

export const ThemeSwitcher = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <ActionIcon onClick={() => toggleColorScheme()}>
            <Icon icon={colorScheme === 'dark' ? 'sun' : 'moon'} />
        </ActionIcon>
    );
}