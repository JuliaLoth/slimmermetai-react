import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 80px);
`;

const HeroSection = styled.section`
  padding: 10rem 0 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  background-image: url('/images/hero-background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
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
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #333;
  background: linear-gradient(135deg, #5852f2 0%, #db2777 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Glacial Indifference', sans-serif;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(45deg, #5852f2, #8e88ff, #5852f2);
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 15px rgba(88, 82, 242, 0.2);
  font-family: 'Glacial Indifference', sans-serif;
  letter-spacing: 0.02em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background-position: right center;
    box-shadow: 0 7px 20px rgba(88, 82, 242, 0.4);
    transform: translateY(-2px);
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Glacial Indifference', sans-serif;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  will-change: transform;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    animation: cardBounce 2s infinite ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(88, 82, 242, 0.3);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  @keyframes cardBounce {
    0%, 100% { transform: translateY(-10px); }
    50% { transform: translateY(-15px); }
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Glacial Indifference', sans-serif;
  transition: color 0.3s ease;
  
  ${ServiceCard}:hover & {
    color: #5852f2;
  }
`;

const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
  transition: color 0.3s ease;
  
  ${ServiceCard}:hover & {
    opacity: 0.9;
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    background: linear-gradient(135deg, rgba(88, 82, 242, 0.02) 0%, rgba(219, 39, 119, 0.02) 100%);
  }
`;

const ServiceLink = styled(Link)`
  color: #5852f2;
  font-weight: 600;
  text-decoration: none;
  font-family: 'Glacial Indifference', sans-serif;
  transition: color 0.3s ease;
  margin-top: auto;
  
  &:hover {
    color: #db2777;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Slimmer met AI</HeroTitle>
            <HeroSubtitle>
              Ontdek hoe Artificial Intelligence jouw business en persoonlijke groei kan versnellen. 
              Van praktische trainingen tot strategisch advies.
            </HeroSubtitle>
            <CTAButton to="/trainingen-advies">
              Bekijk Onze Diensten
            </CTAButton>
          </HeroContent>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <SectionTitle>Wat Kunnen We Voor Je Doen?</SectionTitle>
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceContent>
                <ServiceIcon>🎯</ServiceIcon>
                <ServiceTitle>AI Trainingen</ServiceTitle>
                <ServiceDescription>
                  Praktische workshops en trainingen om AI tools effectief in te zetten 
                  in jouw dagelijkse werk en bedrijfsprocessen.
                </ServiceDescription>
                <ServiceLink to="/trainingen-advies">Meer Info →</ServiceLink>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceContent>
                <ServiceIcon>💡</ServiceIcon>
                <ServiceTitle>Strategisch Advies</ServiceTitle>
                <ServiceDescription>
                  Persoonlijk advies over AI implementatie, automatisering en 
                  digitale transformatie voor jouw specifieke situatie.
                </ServiceDescription>
                <ServiceLink to="/trainingen-advies">Meer Info →</ServiceLink>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceContent>
                <ServiceIcon>📈</ServiceIcon>
                <ServiceTitle>Business Optimalisatie</ServiceTitle>
                <ServiceDescription>
                  Ontdek hoe AI jouw bedrijfsprocessen kan verbeteren, kosten kan besparen 
                  en nieuwe kansen kan creëren.
                </ServiceDescription>
                <ServiceLink to="/trainingen-advies">Meer Info →</ServiceLink>
              </ServiceContent>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>
    </PageContainer>
  );
};

export default Home;