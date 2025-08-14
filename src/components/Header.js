import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  height: 80px;
`;

const LogoContainer = styled(Link)`
  display: flex !important;
  align-items: center !important;
  text-decoration: none !important;
  color: #1f2937 !important;
  font-weight: 600 !important;
  font-family: 'Glacial Indifference', 'Inter', sans-serif !important;
  transition: all 0.3s ease !important;
  
  &:hover {
    transform: scale(1.05) !important;
  }
`;

const LogoImg = styled.img`
  margin-right: 12px !important;
  border-radius: 10px !important;
  transition: all 0.3s ease !important;
  width: 55px !important;
  height: auto !important;
`;

const LogoText = styled.span`
  font-size: 1.6rem !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  color: #1f2937 !important;
  
  ${LogoContainer}:hover & {
    color: #db2777 !important;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem;
    z-index: 1005;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    margin: 0;
  }
`;

const NavLink = styled(Link)`
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.6rem 0;
  font-family: 'Glacial Indifference', 'Inter', sans-serif;
  
  &:hover {
    color: #5852f2;
  }
  
  ${props => props.active && `
    color: #5852f2;
    font-weight: 600;
  `}
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #5852f2 0%, #db2777 100%);
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  ${props => props.active && '&::after'} {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1010;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: #4b5563;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
  
  ${props => props.isOpen && props.line === 1 && `
    transform: rotate(45deg) translate(5px, 5px);
  `}
  
  ${props => props.isOpen && props.line === 2 && `
    opacity: 0;
  `}
  
  ${props => props.isOpen && props.line === 3 && `
    transform: rotate(-45deg) translate(7px, -6px);
  `}
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      <Container>
        <Navbar>
          <LogoContainer to="/">
            <LogoImg src="/images/Logo.svg" alt="Slimmer Met AI Logo" />
            <LogoText>Slimmer met AI</LogoText>
          </LogoContainer>
          
          <Nav isOpen={isMenuOpen}>
            <NavLink 
              to="/" 
              active={location.pathname === '/'}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/trainingen-advies" 
              active={location.pathname === '/trainingen-advies'}
              onClick={() => setIsMenuOpen(false)}
            >
              Trainingen & Advies
            </NavLink>
            <NavLink 
              to="/nieuws" 
              active={location.pathname === '/nieuws'}
              onClick={() => setIsMenuOpen(false)}
            >
              Nieuws
            </NavLink>
            <NavLink 
              to="/over-mij" 
              active={location.pathname === '/over-mij'}
              onClick={() => setIsMenuOpen(false)}
            >
              Over Mij
            </NavLink>
          </Nav>
          
          <MobileMenuButton onClick={toggleMenu} aria-expanded={isMenuOpen}>
            <MenuLine isOpen={isMenuOpen} line={1} />
            <MenuLine isOpen={isMenuOpen} line={2} />
            <MenuLine isOpen={isMenuOpen} line={3} />
          </MobileMenuButton>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;