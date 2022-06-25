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
        <ActionIcon component="a" href="https://www.linkedin.com/in/razfriman" aria-label="LinkedIn link"
          target="_blank">
          <Icon icon="linkedin" />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="GitHub" allowPointerEvents={true}>
        <ActionIcon component="a" href="https://github.com/razfriman" aria-label="Github link"
          target="_blank">
          <Icon icon="github" />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Email" allowPointerEvents={true}>
        <ActionIcon component="a" href="mailto:raz.friman@razfriman.com" aria-label="Email link"
          target="_blank">
          <Icon icon="email" />
        </ActionIcon>
      </Tooltip>
    </Box>
  );
};
