import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Preload most important pages for better UX
const Home = React.lazy(() => import(/* webpackChunkName: "home", webpackPreload: true */ './pages/Home'));
const TrainingenAdvies = React.lazy(() => import(/* webpackChunkName: "trainingen", webpackPrefetch: true */ './pages/TrainingenAdvies'));
const OverMij = React.lazy(() => import(/* webpackChunkName: "over-mij", webpackPrefetch: true */ './pages/OverMij'));
const Contact = React.lazy(() => import(/* webpackChunkName: "contact", webpackPrefetch: true */ './pages/Contact'));
const Cases = React.lazy(() => import(/* webpackChunkName: "cases", webpackPrefetch: true */ './pages/Cases'));
const Nieuws = React.lazy(() => import(/* webpackChunkName: "nieuws" */ './pages/Nieuws'));

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
  contain: layout;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 160px);
  flex-direction: column;
  width: 100%;
  padding-top: 120px;
  contain: layout style;
  will-change: opacity;
`;

const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(88, 82, 242, 0.1);
  border-top: 2px solid #5852f2;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 0.5rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #888;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  opacity: 0.7;
`;

function App() {
  useEffect(() => {
    // Defer background image loading to reduce main thread blocking
    const loadBackgroundImage = () => {
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
    };
    
    // Defer to next tick to avoid blocking initial render
    setTimeout(loadBackgroundImage, 100);
    
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