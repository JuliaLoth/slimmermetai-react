import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 120px);
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
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

const ContactSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  color: white;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.3);
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
`;

const TrainingenAdvies = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Trainingen & Advies</PageTitle>
          <PageSubtitle>
            Persoonlijke begeleiding en praktische trainingen om AI optimaal in te zetten 
            voor jouw specifieke doelen en uitdagingen.
          </PageSubtitle>
        </PageHeader>

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

        <ContactSection>
          <ContactTitle>Klaar om aan de slag te gaan?</ContactTitle>
          <ContactText>
            Neem contact op voor een vrijblijvend gesprek over hoe AI jouw doelen kan ondersteunen.
          </ContactText>
          <ContactButton href="mailto:julia@loth.nl">
            Plan een Gesprek
          </ContactButton>
        </ContactSection>
      </Container>
    </PageContainer>
  );
};

export default TrainingenAdvies;