import React from 'react';
import styled from 'styled-components';
import GoogleCalendarButton from '../components/GoogleCalendarButton';

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
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Neue Montreal', sans-serif;
`;

const ContactDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  
  li {
    margin-bottom: 1rem;
    color: #666;
    font-size: 1rem;
    
    &:before {
      content: "✓";
      color: #28a745;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactInfoCard = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
`;

const ContactInfoTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-family: 'Neue Montreal', sans-serif;
`;

const ContactInfoText = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

const ContactInfoLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    color: #764ba2;
  }
`;

const FAQSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
`;

const FAQTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  font-family: 'Neue Montreal', sans-serif;
`;

const FAQItem = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const FAQQuestion = styled.h4`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const FAQAnswer = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const Contact = () => {
  return (
    <PageContainer>
      <PageHero>
        <Container>
          <HeroContent>
            <PageTitle>Laten we kijken wat AI voor jou kan betekenen</PageTitle>
            <PageSubtitle>
              Geen verplichtingen, geen standaard verhaal. Gewoon een eerlijk gesprek over jouw uitdagingen en hoe AI daarbij kan helpen.
            </PageSubtitle>
          </HeroContent>
        </Container>
      </PageHero>
      
      <ContentSection>
        <Container>
          <ContactGrid>
            <ContactCard>
              <ContactTitle>Gratis kennismaking</ContactTitle>
              <ContactDescription>
                <strong>Duur:</strong> 30 minuten (video call)<br/>
                <strong>Kosten:</strong> Gratis, geen verplichtingen
              </ContactDescription>
              
              <ContactList>
                <li>Jouw huidige werkwijze en grootste tijdvreters</li>
                <li>Welke AI-mogelijkheden het beste passen bij jouw bedrijf</li>
                <li>Concrete vervolgstappen die je morgen kunt zetten</li>
                <li>Of een samenwerking logisch is voor beiden</li>
              </ContactList>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <ContactButton as="a" href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer">
                  Plan Direct een Afspraak
                </ContactButton>
                <div style={{fontSize: '0.9rem', color: '#666', textAlign: 'center'}}>
                  Of stuur een email:
                </div>
                <ContactButton href="mailto:julia@loth.nl?subject=Gratis Kennismaking Aanvraag">
                  julia@loth.nl
                </ContactButton>
              </div>
            </ContactCard>
            
            <ContactCard>
              <ContactTitle>Andere manieren van contact</ContactTitle>
              <ContactDescription>
                Stel gerust vragen of deel je situatie. Ik reageer altijd binnen 1 werkdag.
              </ContactDescription>
              
              <ContactInfo>
                <ContactInfoCard>
                  <ContactInfoTitle>📧 Email</ContactInfoTitle>
                  <ContactInfoLink href="mailto:julia@loth.nl">
                    julia@loth.nl
                  </ContactInfoLink>
                </ContactInfoCard>
                
                <ContactInfoCard>
                  <ContactInfoTitle>💼 LinkedIn</ContactInfoTitle>
                  <ContactInfoLink href="https://linkedin.com/in/julia-loth" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profiel
                  </ContactInfoLink>
                </ContactInfoCard>
              </ContactInfo>
              
              <div style={{marginTop: '2rem'}}>
                <ContactInfoTitle>🌍 Werkgebied</ContactInfoTitle>
                <ContactInfoText>
                  <strong>Remote only:</strong> Ik woon op een zeilboot dus werk online, overal vandaan<br/>
                  <strong>Service:</strong> Heel Nederland (en daarbuiten)<br/>
                  <strong>Talen:</strong> Nederlands, Engels
                </ContactInfoText>
              </div>
            </ContactCard>
          </ContactGrid>

          <FAQSection>
            <FAQTitle>Veelgestelde vragen</FAQTitle>
            
            <FAQItem>
              <FAQQuestion>Q: Wat is het verschil tussen AI-training en AI-begeleiding?</FAQQuestion>
              <FAQAnswer>
                A: AI-training leer je specifieke tools gebruiken. AI-begeleiding helpt je AI integreren in jouw werkwijze. 
                Ik combineer beide: praktische training én strategische begeleiding via strippenkaart.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Q: Moet ik al AI-ervaring hebben?</FAQQuestion>
              <FAQAnswer>
                A: Nee, integendeel. Ik help het liefst mensen die nog geen AI gebruiken maar wel willen ontdekken wat mogelijk is.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Q: Wat als AI niet blijkt te passen bij mijn bedrijf?</FAQQuestion>
              <FAQAnswer>
                A: Dan ben je het snelst erachter gekomen dat het (nu) nog niet het juiste moment is. 
                Beter dan maanden proberen met verkeerde tools.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Q: Hoelang duurt het voordat ik resultaat zie?</FAQQuestion>
              <FAQAnswer>
                A: De eerste tijdwinst merk je meestal binnen een week. Voor één proces volledig geoptimaliseerd 
                rekenen we op 2-3 weken.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Q: Is dit alleen voor tech-bedrijven?</FAQQuestion>
              <FAQAnswer>
                A: Absoluut niet. Juist traditionele MKB-bedrijven hebben vaak de meeste tijdwinst te behalen.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Q: Hoe werkt de strippenkaart precies?</FAQQuestion>
              <FAQAnswer>
                A: Je koopt strips vooraf en gebruikt ze wanneer je vragen hebt. Geen abonnement, wel zekerheid. 
                Lagere drempel om hulp te vragen dan per uur afrekenen.
              </FAQAnswer>
            </FAQItem>
          </FAQSection>
          
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              fontFamily: 'Neue Montreal, sans-serif'
            }}>
              Werk slimmer, niet harder - ik help je ontdekken hoe.
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Klaar voor je eerste stap naar slimmere werkprocessen?
            </p>
            <ContactButton as="a" href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer" style={{
              background: 'white',
              color: '#667eea'
            }}>
              Start het Gesprek
            </ContactButton>
          </div>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Contact;