import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 3rem 0 2rem;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-family: 'Neue Montreal', sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLink = styled(Link)`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Neue Montreal', sans-serif;
  font-size: 1rem;
  
  &:hover {
    color: #5852f2;
  }
`;

const ExternalLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Neue Montreal', sans-serif;
  font-size: 1rem;
  
  &:hover {
    color: #5852f2;
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
  color: #6b7280;
  margin-bottom: 0.5rem;
  
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f3f4f6;
  color: #4b5563;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background-color: #5852f2;
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Slimmer met AI</FooterTitle>
            <FooterText>
              AI-begeleiding die past bij hoe jij werkt. Werk slimmer, niet harder - ontdek wat mogelijk is voor jouw bedrijf.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/julialoth" target="_blank" rel="noopener noreferrer">
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
              <FooterLink to="/trainingen-advies">Trainingen & advies</FooterLink>
              <FooterLink to="/cases">Cases</FooterLink>
              <FooterLink to="/nieuws">Nieuws</FooterLink>
              <FooterLink to="/over-mij">Over mij</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact#faq">FAQ</FooterLink>
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
              <ContactItem icon="🌍">
                Remote service, heel Nederland
              </ContactItem>
              <ContactItem icon="💼">
                <ExternalLink href="https://www.linkedin.com/in/julialoth" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profiel
                </ExternalLink>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>&copy; {currentYear} Slimmer met AI. Alle rechten voorbehouden.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;