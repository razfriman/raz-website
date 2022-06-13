import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { EmailIcon } from "./icons/EmailIcon";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Footer = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} m={5}>
      <Box display="flex" justifyContent="center">
        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/razfriman"
            target="_blank"
            sx={{ color: "#007bb6" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/razfriman"
            target="_blank"
            sx={{ color: "#000000" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email">
          <IconButton
            href="mailto:raz.friman@razfriman.com"
            target="_blank"
            sx={{ color: "#a9a9a9" }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
