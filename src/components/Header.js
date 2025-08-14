import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: inherit;
    flex-direction: column;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  ${props => props.active && `
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
  `}
  
  &:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      <Container>
        <Logo to="/">SlimmerMetAI</Logo>
        
        <Nav isOpen={isMenuOpen}>
          <NavLink 
            to="/" 
            active={location.pathname === '/' ? 'true' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/trainingen-advies" 
            active={location.pathname === '/trainingen-advies' ? 'true' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Trainingen & Advies
          </NavLink>
          <NavLink 
            to="/nieuws" 
            active={location.pathname === '/nieuws' ? 'true' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Nieuws
          </NavLink>
          <NavLink 
            to="/over-mij" 
            active={location.pathname === '/over-mij' ? 'true' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            Over Mij
          </NavLink>
        </Nav>
        
        <MobileMenuButton onClick={toggleMenu}>
          ☰
        </MobileMenuButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;