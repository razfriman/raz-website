import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import avatarUrl from "./static/avatar.webp";
import { Spacer } from "./components/Spacer";

export const Header = () => {
  return (
    <Box flexGrow={1}>
      <AppBar color="primary" position="sticky">
        <Toolbar sx={{ display: "flex", "flex-wrap": "wrap" }}>
          <Box display="flex">
            <Avatar alt="Raz Friman" src={avatarUrl} />
            <Typography variant="h4" alignSelf="center" ml={3}>Raz Friman</Typography>
          </Box>
          <Spacer />
          <Box display="flex">
            <Button href="/" color="inherit">
              Home
            </Button>
            <Button href="/about" color="inherit">
              About
            </Button>
            <Button href="/projects" color="inherit">
              Projects
            </Button>
            <Button href="/contact" color="inherit">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
