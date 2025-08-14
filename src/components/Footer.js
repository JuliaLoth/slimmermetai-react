import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ecf0f1;
`;

const FooterText = styled.p`
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const ExternalLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  color: #bdc3c7;
  
  &:before {
    content: "${props => props.icon}";
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #bdc3c7;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>SlimmerMetAI</FooterTitle>
            <FooterText>
              Ontdek de kracht van Artificial Intelligence voor jouw persoonlijke 
              en professionele groei. Van praktische trainingen tot strategisch advies.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://linkedin.com/in/julia-loth" target="_blank" rel="noopener noreferrer">
                📧
              </SocialLink>
              <SocialLink href="https://slimmermetai.substack.com" target="_blank" rel="noopener noreferrer">
                📰
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Navigatie</FooterTitle>
            <FooterNav>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/trainingen-advies">Trainingen & Advies</FooterLink>
              <FooterLink to="/nieuws">Nieuws</FooterLink>
              <FooterLink to="/over-mij">Over Mij</FooterLink>
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Services</FooterTitle>
            <FooterNav>
              <FooterLink to="/trainingen-advies">AI Trainingen</FooterLink>
              <FooterLink to="/trainingen-advies">Strategisch Advies</FooterLink>
              <FooterLink to="/trainingen-advies">Persoonlijke Coaching</FooterLink>
              <ExternalLink href="https://slimmermetai.substack.com" target="_blank" rel="noopener noreferrer">
                Nieuwsbrief
              </ExternalLink>
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <ContactInfo>
              <ContactItem icon="📧">
                <ExternalLink href="mailto:julia@loth.nl">
                  julia@loth.nl
                </ExternalLink>
              </ContactItem>
              <ContactItem icon="🌐">
                Nederland
              </ContactItem>
              <ContactItem icon="💼">
                <ExternalLink href="https://linkedin.com/in/julia-loth" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profiel
                </ExternalLink>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>&copy; {currentYear} SlimmerMetAI. Alle rechten voorbehouden.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;