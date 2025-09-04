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
            <PageTitle>Trainingen & Advies</PageTitle>
            <PageSubtitle>
              Persoonlijke begeleiding en praktische trainingen om AI optimaal in te zetten 
              voor jouw specifieke doelen en uitdagingen.
            </PageSubtitle>
          </HeroContent>
        </Container>
      </PageHero>
      
      <ContentSection>
        <Container>

        <ServicesGrid>
          <ServiceSection>
            <ServiceHeader>
              <ServiceIcon>🎓</ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>AI Trainingen & Workshops</ServiceTitle>
                <ServiceTagline>Van beginner tot expert niveau</ServiceTagline>
              </ServiceInfo>
            </ServiceHeader>
            
            <ServiceDescription>
              Praktische, hands-on trainingen waarin je leert hoe je AI tools zoals ChatGPT, 
              Claude, en andere AI-platforms effectief kunt inzetten in jouw dagelijkse werk. 
              Alle trainingen zijn aangepast aan jouw niveau en specifieke behoeften.
            </ServiceDescription>
            
            <FeaturesList>
              <FeatureItem>Prompt engineering en optimalisatie</FeatureItem>
              <FeatureItem>AI tools voor productiviteit en creativiteit</FeatureItem>
              <FeatureItem>Automatisering van repetitieve taken</FeatureItem>
              <FeatureItem>AI voor content creatie en marketing</FeatureItem>
              <FeatureItem>Praktijkgericht met echte use cases</FeatureItem>
            </FeaturesList>
          </ServiceSection>

          <ServiceSection>
            <ServiceHeader>
              <ServiceIcon>💼</ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Strategisch AI Advies</ServiceTitle>
                <ServiceTagline>Implementatie en transformatie</ServiceTagline>
              </ServiceInfo>
            </ServiceHeader>
            
            <ServiceDescription>
              Persoonlijk advies over hoe AI jouw bedrijf of carrière naar het volgende niveau 
              kan tillen. Van strategie tot implementatie, we helpen je de juiste stappen te zetten.
            </ServiceDescription>
            
            <FeaturesList>
              <FeatureItem>AI readiness assessment</FeatureItem>
              <FeatureItem>Strategische implementatieplannen</FeatureItem>
              <FeatureItem>ROI analyse en business case ontwikkeling</FeatureItem>
              <FeatureItem>Change management en teamtraining</FeatureItem>
              <FeatureItem>Ongoing support en optimalisatie</FeatureItem>
            </FeaturesList>
          </ServiceSection>

          <ServiceSection>
            <ServiceHeader>
              <ServiceIcon>🚀</ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Persoonlijke Coaching</ServiceTitle>
                <ServiceTagline>One-on-one begeleiding</ServiceTagline>
              </ServiceInfo>
            </ServiceHeader>
            
            <ServiceDescription>
              Individuele coaching sessies waarin we samen jouw specifieke AI doelen en 
              uitdagingen aanpakken. Perfect voor professionals die snel vooruitgang willen boeken.
            </ServiceDescription>
            
            <FeaturesList>
              <FeatureItem>Gepersonaliseerde leertrajecten</FeatureItem>
              <FeatureItem>Directe feedback en optimalisatie</FeatureItem>
              <FeatureItem>Flexibele planning en locatie</FeatureItem>
              <FeatureItem>Focus op jouw specifieke doelen</FeatureItem>
              <FeatureItem>Praktische implementatie support</FeatureItem>
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
            <a href="mailto:julia@loth.nl" style={{
              display: 'inline-block',
              background: '#667eea',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
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
          </div>
        </div>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default TrainingenAdvies;