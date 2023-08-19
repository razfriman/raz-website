import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};
