import React, { useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 80px);
`;

const PageHero = styled.section`
  background-image: url('/images/hero-background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(88, 82, 242, 0.1) 0%, rgba(239, 73, 242, 0.1) 100%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  font-family: 'Neue Montreal', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: #4b5563;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled.section`
  padding: 5rem 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const NewsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
`;




const SubstackFeedContainer = styled.div`
  min-height: 400px;
  width: 100%;
  border-radius: 10px;
`;


const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
`;

const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SidebarText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;


const SignupButton = styled.a`
  display: inline-block;
  background: #5852f2;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ef49f2;
    transform: translateY(-2px);
  }
`;


const Nieuws = () => {
  useEffect(() => {
    // Substack Feed Widget configuratie
    window.SubstackFeedWidget = {
      substackUrl: "slimmermetai.substack.com",
      posts: 3,
      filter: "top"
    };

    // Laad Substack feed script
    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script als component unmount
      const existingScript = document.querySelector('script[src="https://substackapi.com/embeds/feed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <PageContainer>
      <PageHero>
        <Container>
          <HeroContent>
            <PageTitle>Nieuws & Inzichten</PageTitle>
            <PageSubtitle>
              Blijf op de hoogte van de laatste ontwikkelingen in AI, praktische tips, 
              en exclusieve inzichten over hoe je AI optimaal kunt benutten.
            </PageSubtitle>
          </HeroContent>
        </Container>
      </PageHero>
      
      <ContentSection>
        <Container>

        <NewsContent>
          <MainContent>
            <div style={{
              padding: '3rem 0',
              textAlign: 'center'
            }}>
              <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#333',
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Neue Montreal, sans-serif'
                }}>
                  Meest gelezen artikelen
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#4b5563',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Ontdek de populairste artikelen uit de AI-nieuwsbrief met praktische tips en inzichten.
                </p>
              </div>
            </div>
            
            <div style={{padding: '2rem', textAlign: 'center'}}>
              <SubstackFeedContainer id="substack-feed-embed">
                {/* Substack feed widget wordt hier geladen */}
              </SubstackFeedContainer>
            </div>
          </MainContent>

          <Sidebar>
            <SidebarCard>
              <SidebarTitle>Wekelijkse AI-tips in je inbox</SidebarTitle>
              <SidebarText>
                Ontvang elke week praktische tips die je direct kunt toepassen in je werk. Geen theorie, gewoon tools en technieken die écht werken.
              </SidebarText>
              <SignupButton href="https://slimmermetai.substack.com" target="_blank" rel="noopener noreferrer">
                Abonneer je Nu
              </SignupButton>
            </SidebarCard>


            <SidebarCard>
              <SidebarTitle>💡 Wist je dat?</SidebarTitle>
              <SidebarText>
                AI kan je productiviteit met 40-60% verhogen als je de juiste 
                tools en technieken gebruikt. In onze nieuwsbrief delen we 
                praktische voorbeelden van hoe professionals AI succesvol inzetten.
              </SidebarText>
            </SidebarCard>
          </Sidebar>
        </NewsContent>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Nieuws;