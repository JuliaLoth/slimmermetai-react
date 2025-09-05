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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  /* First card spans all columns */
  & > :first-child {
    grid-column: 1 / -1;
  }
`;

const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 0.75rem;
  font-family: 'Neue Montreal', sans-serif;
`;

const ContactDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 0.5rem;
  align-items: start;
  justify-items: center;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }
  
  li {
    margin-bottom: 0.75rem;
    color: #666;
    font-size: 0.95rem;
    width: 100%;
    
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
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
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
  color: #5852f2;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    color: #ef49f2;
  }
`;

const FAQSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  scroll-margin-top: 100px;
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

const CTASection = styled.div`
  padding: 4rem 0;
  text-align: center;
  margin-top: 4rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #333;
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Neue Montreal', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const CTAButtonStyled = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
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
              <ContactTitle>Contact</ContactTitle>
              <ContactDescription>
                Stel gerust vragen of deel je situatie.
              </ContactDescription>
              
              <ContactInfo>
                <ContactInfoCard>
                  <ContactInfoTitle>📧 Email</ContactInfoTitle>
                  <ContactInfoLink href="mailto:julia@loth.nl">
                    julia@loth.nl
                  </ContactInfoLink>
                </ContactInfoCard>
                
                <ContactInfoCard>
                  <ContactInfoTitle>📱 Telefoon</ContactInfoTitle>
                  <ContactInfoLink href="tel:+31624161016">
                    +31 6 2416 1016
                  </ContactInfoLink>
                </ContactInfoCard>
              </ContactInfo>
            </ContactCard>
            
            <ContactCard>
              <ContactTitle>Socials</ContactTitle>
              <ContactDescription>
                Volg mij voor de laatste updates en inzichten.
              </ContactDescription>
              
              <ContactInfo>
                <ContactInfoCard>
                  <ContactInfoTitle>💼 LinkedIn</ContactInfoTitle>
                  <ContactInfoLink href="https://www.linkedin.com/in/julialoth" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profiel
                  </ContactInfoLink>
                </ContactInfoCard>
                
                <ContactInfoCard>
                  <ContactInfoTitle>📰 Nieuwsbrief</ContactInfoTitle>
                  <ContactInfoLink href="https://slimmermetai.substack.com" target="_blank" rel="noopener noreferrer">
                    Substack Nieuws
                  </ContactInfoLink>
                </ContactInfoCard>
              </ContactInfo>
            </ContactCard>
            
            <ContactCard>
              <ContactTitle>Werkgebied</ContactTitle>
              <ContactDescription>
                Informatie over mijn werkgebied en beschikbaarheid.
              </ContactDescription>
              
              <ContactInfoText>
                <strong>Remote only:</strong> Ik woon op een zeilboot dus werk online, overal vandaan<br/>
                <strong>Talen:</strong> Nederlands, Engels
              </ContactInfoText>
            </ContactCard>
          </ContactGrid>

          <FAQSection id="faq">
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
          
          <CTASection>
            <CTAContainer>
              <CTATitle>
                Maak AI winstgevend voor jouw bedrijf
              </CTATitle>
              <CTADescription>
                Benieuwd hoe AI-adoptie eruitziet in jouw sector? In ons kennismakingsgesprek 
                bespreken we concrete mogelijkheden die passen bij jouw werkwijze.
              </CTADescription>
              <CTAButtonStyled href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer">
                Plan een Gratis Kennismaking
              </CTAButtonStyled>
            </CTAContainer>
          </CTASection>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Contact;