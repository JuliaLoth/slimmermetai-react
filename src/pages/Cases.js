import React from 'react';
import { Link } from 'react-router-dom';
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
  text-align: center;

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

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CaseCard = styled(Link)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const CaseTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Neue Montreal', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CaseSubtitle = styled.p`
  font-size: 1rem;
  color: #5852f2;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CaseExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  flex: 1;
`;

const ReadMoreButton = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;

  ${CaseCard}:hover & {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(88, 82, 242, 0.4);
  }
`;

const cases = [
  {
    id: 'agile-coach-ai-onderneming',
    title: 'Van startende agile coach naar AI-gedreven onderneming',
    subtitle: 'Slim beginnen met AI vanaf dag één',
    excerpt: 'Hoe een startende agile coach AI volledig integreerde in zijn bedrijfsvoering - van offerte tot workshop ontwerp. Geen legacy, geen inefficiëntie, gewoon direct slim werken.'
  },
  {
    id: 'overheidsaanbestedingen',
    title: 'AI voor overheids-<br />aanbestedingen',
    subtitle: 'Slimmer offertes schrijven bij complexe overheidsprojecten',
    excerpt: 'Hoe AI-tools kernteams van 2-3 mensen helpen om kwalitatieve voorstellen te schrijven met analyses, strategieën en creatieve concepten binnen krappe deadlines.'
  },
  {
    id: 'startup-branding',
    title: 'Startup branding - van idee naar identiteit',
    subtitle: 'Slim gebruik van AI voor betaalbare, professionele branding',
    excerpt: 'Complete merkidentiteit ontwikkelen met 80% kostenbesparing - hoe AI professionele branding toegankelijk maakt voor elk budget.'
  }
];

const Cases = () => {
  return (
    <PageContainer>
      <PageHero>
        <Container>
          <HeroContent>
            <PageTitle>Mijn eerdere AI-ervaring</PageTitle>
            <PageSubtitle>
              Van aanbestedingen tot branding - concrete resultaten met AI
            </PageSubtitle>
          </HeroContent>
        </Container>
      </PageHero>

      <ContentSection>
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
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#333',
                background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Neue Montreal, sans-serif'
              }}>
                Kwantificeerbare Impact
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                margin: '3rem 0'
              }}>
                <div>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#5852f2'}}>80%</div>
                  <div style={{color: '#666'}}>kostenbesparing bij startup branding</div>
                </div>
                <div>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#5852f2'}}>18+</div>
                  <div style={{color: '#666'}}>bedrijven geholpen met waardecreatie</div>
                </div>
              </div>
            </div>
          </div>

          <CasesGrid>
            {cases.map(caseItem => (
              <CaseCard key={caseItem.id} to={`/cases/${caseItem.id}`}>
                <CaseTitle dangerouslySetInnerHTML={{ __html: caseItem.title }} />
                <CaseSubtitle>{caseItem.subtitle}</CaseSubtitle>
                <CaseExcerpt>{caseItem.excerpt}</CaseExcerpt>
                <ReadMoreButton>Lees meer</ReadMoreButton>
              </CaseCard>
            ))}
          </CasesGrid>

          <div style={{
            padding: '4rem 0',
            textAlign: 'center'
          }}>
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '3rem',
              background: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '20px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#333',
                background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Neue Montreal, sans-serif'
              }}>
                Jouw Case
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#4b5563',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                Benieuwd hoe AI-adoptie eruitziet in jouw sector? In ons kennismakingsgesprek
                bespreken we concrete mogelijkheden die passen bij jouw werkwijze.
              </p>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                <a href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}>
                  Plan een Gratis Kennismaking
                </a>
                <div style={{marginTop: '1rem'}}>
                  <a href="mailto:julia@loth.nl" style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: '#5852f2',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    border: '1px solid #5852f2',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#5852f2';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#5852f2';
                  }}>
                    <img src="/images/Icon_email.png" alt="Email" style={{width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle'}} /> julia@loth.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Cases;