import styled from 'styled-components';

// Shared styled components to reduce bundle duplication
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const PageTitle = styled.h1`
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

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #333;
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Neue Montreal', sans-serif;
  text-align: center;
`;

export const CTAButton = styled.a`
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