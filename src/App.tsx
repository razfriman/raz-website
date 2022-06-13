import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import avatarUrl from "./static/avatar.webp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { Videos } from "./pages/Videos";
import { Contact } from "./pages/Contact";

const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};
export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <Box sx={{ display: 'flex' }}>
                <Avatar alt="Raz Friman" src={avatarUrl} />
                <Typography variant="h6">Raz Friman</Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
            <Box sx={{ display: 'flex' }}>
              <Button href="/" color="inherit">
                Home
              </Button>
              <Button href="/about" color="inherit">
                About
              </Button>
              <Button href="/projects" color="inherit">
                Projects
              </Button>
              <Button href="/videos" color="inherit">
                Videos
              </Button>
              <Button href="/contact" color="inherit">
                Contact
              </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <IconButton href="https://google.com" target="_blank" color="inherit">
          <HomeIcon />
        </IconButton>
        <IconButton href="https://google.com" target="_blank" color="inherit">
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export const Content = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <BasicGrid></BasicGrid>
      Copy
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </Button>
    </Box>
  );
};

export const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};
