import { ActionIcon, Box, Tooltip } from "@mantine/core";
import { Icon } from "./Icon";

export const AppFooter = () => {
  return (
    <Box sx={{
      gap: "20px",
      display: "flex",
      justifyContent: "center"
    }}>
      <Tooltip label="LinkedIn" allowPointerEvents={true}>
        <ActionIcon component="a" href="https://www.linkedin.com/in/razfriman"
          target="_blank">
          <Icon icon="linkedin" />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="GitHub" allowPointerEvents={true}>
        <ActionIcon component="a" href="https://github.com/razfriman"
          target="_blank">
          <Icon icon="github" />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Email" allowPointerEvents={true}>
        <ActionIcon component="a" href="mailto:raz.friman@razfriman.com"
          target="_blank">
          <Icon icon="email" />
        </ActionIcon>
      </Tooltip>
    </Box>
  );
};
