import { ActionIcon, Box, Tooltip } from "@mantine/core";
import { Icon } from "./Icon";

export const AppFooter = () => {
  return (
    <Box>
      <Box>
        <Tooltip label="LinkedIn">
          <ActionIcon component="a" href="https://www.linkedin.com/in/razfriman"
            target="_blank"
            sx={{ color: "#007bb6" }}>
            <Icon icon="linkedin" />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="GitHub">
          <ActionIcon component="a" href="https://github.com/razfriman"
            target="_blank"
            sx={{ color: "#000000" }}>
            <Icon icon="github" />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Email">
          <ActionIcon component="a" href="mailto:raz.friman@razfriman.com"
            target="_blank"
            sx={{ color: "#a9a9a9" }}>
            <Icon icon="email" />
          </ActionIcon>
        </Tooltip>
      </Box>
    </Box>
  );
};
