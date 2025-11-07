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
    background: linear-gradient(135deg, rgba(88, 82, 242, 0.1) 0%, rgba(239, 73, 242, 0.1) 100%);
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
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
  text-align: center;

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
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Neue Montreal', sans-serif;
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
  display: inline-block;
  background: #5852f2;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(88, 82, 242, 0.3);

  &:hover {
    background: #ef49f2;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(239, 73, 242, 0.4);
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 60px;
  margin-top: 1rem;
  contain: layout;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    min-height: 120px;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Neue Montreal', sans-serif;
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
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
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

const ServiceIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  opacity: 0.8;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Neue Montreal', sans-serif;
  transition: color 0.3s ease;
  
  ${ServiceCard}:hover & {
    color: #5852f2;
  }
`;

const InlineSectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #333;
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Neue Montreal', sans-serif;
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
    background: linear-gradient(135deg, rgba(88, 82, 242, 0.02) 0%, rgba(239, 73, 242, 0.02) 100%);
  }
`;

const ProcessContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: nowrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProcessCard = styled(ServiceCard)`
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProcessArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
`;

const ArrowIcon = styled.div`
  font-size: 2rem;
  color: #5852f2;
  font-weight: bold;
`;


const Home = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.75rem',
              fontFamily: 'Neue Montreal, sans-serif',
              lineHeight: '1.2'
            }}>
              Werk slimmer, niet harder
            </div>
            <HeroTitle className="hero-title" style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#5852f2', background: 'none', WebkitTextFillColor: '#5852f2'}}>Maak jouw bedrijf beter met AI</HeroTitle>
            <HeroSubtitle className="hero-subtitle">Met advies op maat zorg ik dat AI jouw bedrijfsvoering versterkt, zodat je meer tijd krijgt voor wat echt telt.</HeroSubtitle>
            <CTAContainer>
              <CTAButton as="a" href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer">
                Kennismaken?
              </CTAButton>
              <CTAButton to="/trainingen-advies">
                Bekijk hoe ik werk
              </CTAButton>
            </CTAContainer>
          </HeroContent>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <SectionTitle>Van AI-chaos naar AI-controle</SectionTitle>
          <div style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Je kent het vast wel: overal hoor je over AI, maar niemand legt uit hoe het écht gaat helpen in jouw bedrijf. ChatGPT of Copilot? Gratis of betaald? De toptool van vandaag is morgen misschien alweer achterhaald.
            Ik ben geen gewone AI-trainer die theorie verkondigt. Als strategische innovator met 10 jaar ervaring in complexe
            organisaties help ik jou AI te integreren op de manier die aansluit hoe jij en je collega's al werken.
          </div>
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceContent>
                <ServiceIcon src="/images/Icon_enthousiast.png" alt="Enthousiast" />
                <ServiceTitle>Enthousiaste begeleiding</ServiceTitle>
                <ServiceDescription>
                  Ik laat je de lol van AI ontdekken in plaats van je te overweldigen
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceContent>
                <ServiceIcon src="/images/Icon_praktisch.png" alt="Praktisch" />
                <ServiceTitle>Praktische integratie</ServiceTitle>
                <ServiceDescription>
                  Geen theorie, maar hands-on werken met jouw eigen documenten
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceContent>
                <ServiceIcon src="/images/Icon_creatief.png" alt="Creatief" />
                <ServiceTitle>Creatieve oplossingen</ServiceTitle>
                <ServiceDescription>
                  Ik vind altijd wel een manier die past bij jouw situatie
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard>
              <ServiceContent>
                <ServiceIcon src="/images/Icon_mensgericht.png" alt="Mensgericht" />
                <ServiceTitle>Mensgerichte aanpak</ServiceTitle>
                <ServiceDescription>
                  AI dient jou, niet andersom
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <ServicesSection style={{background: 'rgba(248, 250, 252, 0.8)'}}>
        <Container>
          <SectionTitle>Ontdek wat AI voor jou kan doen</SectionTitle>
          
          <ProcessContainer>
            <ProcessCard>
              <ServiceContent>
                <div style={{
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1.5rem',
                  fontWeight: 'bold'
                }}>1</div>
                <ServiceTitle>Kennismaking en analyse</ServiceTitle>
                <ServiceDescription>
                  We beginnen met jouw huidige werkwijze. Geen standaard oplossingen, 
                  maar maatwerk dat past bij hoe jij denkt en werkt.
                </ServiceDescription>
              </ServiceContent>
            </ProcessCard>

            <ProcessArrow>
              <ArrowIcon>→</ArrowIcon>
            </ProcessArrow>

            <ProcessCard>
              <ServiceContent>
                <div style={{
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1.5rem',
                  fontWeight: 'bold'
                }}>2</div>
                <ServiceTitle>Hands-on integratie</ServiceTitle>
                <ServiceDescription>
                  Een halve dag praktische training met jouw eigen documenten. 
                  Een beetje theorie, daarna direct aan de slag.
                </ServiceDescription>
              </ServiceContent>
            </ProcessCard>

            <ProcessArrow>
              <ArrowIcon>→</ArrowIcon>
            </ProcessArrow>

            <ProcessCard>
              <ServiceContent>
                <div style={{
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1.5rem',
                  fontWeight: 'bold'
                }}>3</div>
                <ServiceTitle>Doorlopende begeleiding</ServiceTitle>
                <ServiceDescription>
                  Via jouw strippenkaart blijf ik beschikbaar voor vragen, nieuwe tools en optimalisaties.
                  Zoals jij je klanten begeleidt, help ik jou groeien.
                </ServiceDescription>
              </ServiceContent>
            </ProcessCard>
          </ProcessContainer>
          
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            borderRadius: '15px'
          }}>
            <strong style={{fontSize: '1.2rem', color: '#333'}}>
              Resultaat: AI-workflows die blijven werken en je écht tijd opleveren.
            </strong>
          </div>
        </Container>
      </ServicesSection>

      <ServicesSection style={{background: 'rgba(255, 255, 255, 0.8)'}}>
        <Container>
          <SectionTitle>Wat klanten zeggen</SectionTitle>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
          }}>
            <div style={{
              background: 'rgba(102, 126, 234, 0.1)',
              padding: '2.5rem',
              borderRadius: '15px',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              lineHeight: '1.7',
              color: '#333',
              borderLeft: '4px solid #5852f2',
              marginBottom: '1.5rem'
            }}>
              "Super handig en inzichtelijk. Had ik dit maar eerder gedaan. Julia heeft het ook mooi gepersonaliseerd,
              dus echt gekeken naar wat ik nodig heb. Ze is heel kundig hierin - ze weet veel en kan goed helpen."
            </div>
            <div style={{
              textAlign: 'right',
              fontWeight: '600',
              color: '#5852f2',
              fontSize: '1.1rem',
              marginBottom: '2rem'
            }}>
              — Bart, agile coach
            </div>
            <div style={{textAlign: 'center'}}>
              <CTAButton to="/cases/agile-coach-ai-onderneming" style={{
                background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                color: 'white'
              }}>
                Lees Bart's volledige verhaal
              </CTAButton>
            </div>
          </div>
        </Container>
      </ServicesSection>

      <ServicesSection>
        <Container>
          <div style={{
            padding: '4rem 0',
            textAlign: 'center'
          }}>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '3rem',
              background: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '20px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
            }}>
              <InlineSectionTitle>
                Meer dan alleen ChatGPT-training
              </InlineSectionTitle>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '2rem',
                margin: '3rem 0'
              }}>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#5852f2'}}>80%</div>
                  <div style={{color: '#666'}}>kostenbesparing bij startup branding</div>
                </div>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#5852f2'}}>15+</div>
                  <div style={{color: '#666'}}>bedrijven geholpen in complexe veranderingen</div>
                </div>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#5852f2'}}>10 jaar</div>
                  <div style={{color: '#666'}}>innovatie-ervaring</div>
                </div>
              </div>
              
              <div style={{
                background: 'rgba(102, 126, 234, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                marginTop: '2rem',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: '#333',
                borderLeft: '4px solid #5852f2'
              }}>
                "Creativiteit, humor, out-of-the-box denken en weigeren genoegen te nemen met 'nee' staan centraal
                in mijn werkwijze. Deze eigenschappen neem ik mee naar elke samenwerking."
              </div>
              
              <div style={{marginTop: '3rem'}}>
                <CTAButton to="/cases" style={{
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  color: 'white',
                  marginRight: '1rem'
                }}>
                  Bekijk Cases
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </ServicesSection>

      <ServicesSection style={{background: 'rgba(248, 250, 252, 0.8)'}}>
        <Container>
          <SectionTitle>Klaar om slimmer te werken?</SectionTitle>
          <div style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6b7280',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Laten we kijken hoe AI jouw bedrijf kan versterken. In een kort gesprek ontdekken we samen 
            welke mogelijkheden het beste passen bij jouw manier van werken.
          </div>
          
          <div style={{textAlign: 'center'}}>
            <CTAButton as="a" href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer">
              Plan gratis kennismaking (30 min)
            </CTAButton>
          </div>
        </Container>
      </ServicesSection>
    </PageContainer>
  );
};

export default Home;