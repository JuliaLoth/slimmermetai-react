import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Aggressive code splitting with smaller chunks
const Home = React.lazy(() => import(/* webpackChunkName: "page-home", webpackPrefetch: true */ './pages/Home'));
const TrainingenAdvies = React.lazy(() => import(/* webpackChunkName: "page-trainingen" */ './pages/TrainingenAdvies'));
const Nieuws = React.lazy(() => import(/* webpackChunkName: "page-nieuws" */ './pages/Nieuws'));
const OverMij = React.lazy(() => import(/* webpackChunkName: "page-over-mij" */ './pages/OverMij'));
const Cases = React.lazy(() => import(/* webpackChunkName: "page-cases" */ './pages/Cases'));
const Contact = React.lazy(() => import(/* webpackChunkName: "page-contact" */ './pages/Contact'));

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
  margin-bottom: 320px;
  contain: layout;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #5852f2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #666;
  font-family: 'Neue Montreal', sans-serif;
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
          <Suspense fallback={
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>Pagina laden...</LoadingText>
            </LoadingContainer>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trainingen-advies" element={<TrainingenAdvies />} />
              <Route path="/hoe-ik-werk" element={<TrainingenAdvies />} />
              <Route path="/nieuws" element={<Nieuws />} />
              <Route path="/over-mij" element={<OverMij />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;