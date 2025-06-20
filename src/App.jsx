import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ResourcesPage from './pages/ResourcesPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        {/* Additional routes can be added here */}
      </Routes>
      <Analytics />
    </ThemeProvider>
  );
}

export default App
