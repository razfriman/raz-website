import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { MantineThemeOverride, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Projects } from './pages/Projects'
import { useColorScheme } from '@mantine/hooks'

export const App = () => {
    const defaultColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme);
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    const theme: MantineThemeOverride = {
        colorScheme: colorScheme,
        primaryColor: 'blue',
        defaultRadius: 0,
    };

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route path="" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>);
}
