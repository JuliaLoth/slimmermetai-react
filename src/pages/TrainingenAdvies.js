import React from 'react';
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
    background: linear-gradient(135deg, rgba(88, 82, 242, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%);
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
  background: rgba(255, 255, 255, 0.95);
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
  background: linear-gradient(135deg, #5852f2 0%, #db2777 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  font-family: 'Glacial Indifference', sans-serif;
  
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
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 3rem;
  margin-bottom: 4rem;
`;

const ServiceSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ServiceIcon = styled.div`
  font-size: 4rem;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ServiceTagline = styled.p`
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #555;
  
  &:before {
    content: "✓";
    color: #28a745;
    font-weight: bold;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;





const TrainingenAdvies = () => {
  return (
    <PageContainer>
      <PageHero>
        <Container>
          <HeroContent>
            <PageTitle>Werk slimmer, niet harder - op jouw manier</PageTitle>
            <PageSubtitle>
              Vaak krijgen bedrijven een technische oplossing zonder goede begeleiding. Dan moeten zij hun 
              processen aanpassen naar de techniek. Ik draai dit om: ik help je AI integreren in je bestaande 
              werkwijze, zodat technologie jou versterkt in plaats van compliceert.
            </PageSubtitle>
          </HeroContent>
        </Container>
      </PageHero>
      
      <ContentSection>
        <Container>

        <ServicesGrid>
          <ServiceSection>
            <ServiceHeader>
              <ServiceIcon>🎯</ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>AI-Integratie Traject</ServiceTitle>
                <ServiceTagline>Voor ondernemers die AI willen adopteren maar niet weten waar te beginnen</ServiceTagline>
              </ServiceInfo>
            </ServiceHeader>
            
            <ServiceDescription>
              <strong>Duur:</strong> 1 dag hands-on + 4 weken begeleiding + retrospective<br/><br/>
              Een compleet traject van kennismaking tot werkende AI-workflows die je échte tijd opleveren.
            </ServiceDescription>
            
            <FeaturesList>
              <FeatureItem>Kick-off gesprek - Jouw workflows en uitdagingen in kaart</FeatureItem>
              <FeatureItem>Praktische training (halve dag) - Hands-on met jouw documenten</FeatureItem>
              <FeatureItem>Zelfstandig aan de slag - 4 weken experimenteren en toepassen</FeatureItem>
              <FeatureItem>Retrospective - Wat werkt, wat kan beter, hoe door?</FeatureItem>
              <FeatureItem>Resultaat: Werkende AI-workflows die je tijd opleveren</FeatureItem>
            </FeaturesList>
            
            <div style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              textAlign: 'center'
            }}>
              <strong>Investering:</strong> Op maat, afhankelijk van complexiteit
            </div>
          </ServiceSection>

          <ServiceSection>
            <ServiceHeader>
              <ServiceIcon>🎫</ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Strippenkaart Begeleiding</ServiceTitle>
                <ServiceTagline>Voor klanten die doorlopende AI-ondersteuning willen</ServiceTagline>
              </ServiceInfo>
            </ServiceHeader>
            
            <ServiceDescription>
              <strong>Hoe het werkt:</strong> Koop strips vooraf, gebruik wanneer je ze nodig hebt<br/><br/>
              Geen abonnement, wel zekerheid. Lagere drempel om hulp te vragen dan per uur afrekenen.
            </ServiceDescription>
            
            <FeaturesList>
              <FeatureItem>Nieuwe AI-tool evalueren</FeatureItem>
              <FeatureItem>Workflow optimaliseren</FeatureItem>
              <FeatureItem>Specifieke uitdaging oplossen</FeatureItem>
              <FeatureItem>Team trainen in AI-gebruik</FeatureItem>
              <FeatureItem>Strategische AI-vragen</FeatureItem>
            </FeaturesList>
            
            <div style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              textAlign: 'center'
            }}>
              <strong>Beschikbaar:</strong> Basis (5 strips) en Premium (10 strips)
            </div>
          </ServiceSection>

          <ServiceSection>
            <ServiceHeader>
              <ServiceIcon>🚀</ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Specifieke AI-Projecten</ServiceTitle>
                <ServiceTagline>Voor bedrijven met concrete AI-uitdagingen</ServiceTagline>
              </ServiceInfo>
            </ServiceHeader>
            
            <ServiceDescription>
              <strong>Aanpak:</strong> Per-project pricing voor maatwerk oplossingen<br/><br/>
              <strong>Proces:</strong> Analyse → Strategie → Hands-on integratie → Overdracht
            </ServiceDescription>
            
            <FeaturesList>
              <FeatureItem>Van gesprek tot offerte - Verkoopcalls automatisch omzetten naar overtuigende offertes</FeatureItem>
              <FeatureItem>Content strategie met AI - LinkedIn posts en blogs genereren vanuit expertise</FeatureItem>
              <FeatureItem>Kennisbeheer systeem - Google NotebookLM als "second brain" inrichten</FeatureItem>
              <FeatureItem>Training ontwerp - AI-gestuurde workshop en presentatie creatie</FeatureItem>
            </FeaturesList>
          </ServiceSection>
        </ServicesGrid>

        <div style={{
          padding: '3rem 0',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#333',
              background: 'linear-gradient(135deg, #5852f2 0%, #db2777 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Glacial Indifference, sans-serif'
            }}>
              Klaar om aan de slag te gaan?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Neem contact op voor een vrijblijvend gesprek over hoe AI jouw doelen kan ondersteunen.
            </p>
            <div style={{textAlign: 'center'}}>
              <a href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                background: '#667eea',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                marginBottom: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#764ba2';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#667eea';
                e.target.style.transform = 'translateY(0)';
              }}>
                Plan een Gesprek
              </a>
              <div style={{fontSize: '0.85rem', color: '#666', marginTop: '0.5rem'}}>
                Of email: <a href="mailto:julia@loth.nl" style={{color: '#667eea', textDecoration: 'none'}}>julia@loth.nl</a>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default TrainingenAdvies;