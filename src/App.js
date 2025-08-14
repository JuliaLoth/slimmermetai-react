import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TrainingenAdvies from './pages/TrainingenAdvies';
import Nieuws from './pages/Nieuws';
import OverMij from './pages/OverMij';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
`;

function App() {
  useEffect(() => {
    // Try to add background image, but don't fail if it doesn't exist
    // The background image path should work in production
    try {
      const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/Website background.svg`;
      
      // Create a test image to check if it exists
      const img = new Image();
      img.onload = () => {
        // Image loaded successfully, apply it
        document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';
      };
      img.onerror = () => {
        // Image failed to load, use gradient fallback from CSS
        console.log('Background image not found, using gradient fallback');
      };
      img.src = backgroundImageUrl;
    } catch (error) {
      // If there's any error, just use the CSS fallback
      console.log('Using default gradient background');
    }
    
    // Cleanup function
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainingen-advies" element={<TrainingenAdvies />} />
            <Route path="/nieuws" element={<Nieuws />} />
            <Route path="/over-mij" element={<OverMij />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;