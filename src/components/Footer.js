import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 0;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
  width: 100%;
  overflow: visible;
  opacity: 0;
  animation: fadeInFooter 0.3s ease-in-out 3s forwards;
  z-index: 10;
  position: relative;
  margin-top: auto;
  
  @keyframes fadeInFooter {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 300px;
  min-width: 250px;
  
  @media (max-width: 768px) {
    max-width: none;
    min-width: auto;
  }
`;

const FooterTitle = styled.h3`
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
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  opacity: 0.7;
  transition: all 0.3s ease;
  
  ${SocialLink}:hover & {
    opacity: 1;
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
                <SocialIcon src="/images/Icon_linkedin.png" alt="LinkedIn" />
              </SocialLink>
              <SocialLink href="https://slimmermetai.substack.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon src="/images/Icon_nieuwsbrief.png" alt="Newsletter" />
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
            <FooterTitle>Nieuwsbrief</FooterTitle>
            <FooterText style={{fontSize: '0.95rem', marginBottom: '1rem'}}>
              Wekelijkse AI-tips direct in je inbox
            </FooterText>
            <iframe
              src="https://slimmermetai.substack.com/embed"
              width="100%"
              height="150"
              style={{border: '1px solid #EEE', background: 'white', borderRadius: '8px'}}
              frameBorder="0"
              scrolling="no"
              title="Subscribe to newsletter"
            ></iframe>
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