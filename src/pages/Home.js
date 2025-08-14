import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 120px);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
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

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled(Link)`
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    color: #764ba2;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroTitle>Slimmer Met AI</HeroTitle>
          <HeroSubtitle>
            Ontdek hoe Artificial Intelligence jouw business en persoonlijke groei kan versnellen. 
            Van praktische trainingen tot strategisch advies.
          </HeroSubtitle>
          <CTAButton to="/trainingen-advies">
            Bekijk Onze Diensten
          </CTAButton>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <SectionTitle>Wat Kunnen We Voor Je Doen?</SectionTitle>
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🎯</ServiceIcon>
              <ServiceTitle>AI Trainingen</ServiceTitle>
              <ServiceDescription>
                Praktische workshops en trainingen om AI tools effectief in te zetten 
                in jouw dagelijkse werk en bedrijfsprocessen.
              </ServiceDescription>
              <ServiceLink to="/trainingen-advies">Meer Info →</ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>💡</ServiceIcon>
              <ServiceTitle>Strategisch Advies</ServiceTitle>
              <ServiceDescription>
                Persoonlijk advies over AI implementatie, automatisering en 
                digitale transformatie voor jouw specifieke situatie.
              </ServiceDescription>
              <ServiceLink to="/trainingen-advies">Meer Info →</ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>📈</ServiceIcon>
              <ServiceTitle>Business Optimalisatie</ServiceTitle>
              <ServiceDescription>
                Ontdek hoe AI jouw bedrijfsprocessen kan verbeteren, kosten kan besparen 
                en nieuwe kansen kan creëren.
              </ServiceDescription>
              <ServiceLink to="/trainingen-advies">Meer Info →</ServiceLink>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>
    </PageContainer>
  );
};

export default Home;