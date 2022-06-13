import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Content = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export const App = () => {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};
