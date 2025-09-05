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

const CaseCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 4rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const CaseTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Neue Montreal', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CaseSubtitle = styled.p`
  font-size: 1.2rem;
  color: #5852f2;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const CaseDescription = styled.div`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const CaseSection = styled.div`
  margin-bottom: 2rem;
`;

const CaseSectionTitle = styled.h4`
  color: #333;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const CaseList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    color: #666;
    
    &:before {
      content: "✓";
      color: #28a745;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const InsightBox = styled.div`
  background: rgba(102, 126, 234, 0.1);
  padding: 2rem;
  border-radius: 15px;
  font-style: italic;
  color: #333;
  border-left: 4px solid #5852f2;
  margin-top: 2rem;
`;



const CTAButton = styled.a`
  display: inline-block;
  background: white;
  color: #5852f2;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
  }
`;

const Cases = () => {
  return (
    <PageContainer>
      <PageHero>
        <Container>
          <HeroContent>
            <PageTitle>Bewezen resultaten uit de praktijk</PageTitle>
            <PageSubtitle>
              Ontdek hoe AI-integratie eruitziet in verschillende sectoren en situaties
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

          <CaseCard>
            <CaseTitle>Slimmer offertes schrijven voor overheidsaanbestedingen</CaseTitle>
            <CaseSubtitle>Senior communicatieadviseur en concepter bij complexe overheidsprojecten</CaseSubtitle>
            
            <CaseDescription>
              <strong>Situatie:</strong> Als Senior communicatieadviseur en concepter werkte ik mee aan complexe overheidsaanbestedingen 
              met strikte beoordelingscriteria en krappe deadlines.
            </CaseDescription>

            <CaseSection>
              <CaseSectionTitle>Uitdaging:</CaseSectionTitle>
              <CaseDescription>
                Kernteams van 2-3 mensen moesten snel kwalitatieve voorstellen schrijven met analyses, 
                strategieën en creatieve concepten.
              </CaseDescription>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Concrete AI-aanpak:</CaseSectionTitle>
              <CaseList>
                <li>Analyse versnellen: ChatGPT en Claude AI ingezet voor SWOT-analyses en stakeholder-mapping</li>
                <li>Strategische templates: AI-prompts ontwikkeld voor CASI-interventies en Factor C methodiek</li>
                <li>Content optimalisatie: Kernboodschappen en narratieven verfijnen met AI-ondersteuning</li>
                <li>Kwaliteitscontrole: AI-check tegen beoordelingscriteria voordat indienen</li>
              </CaseList>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Resultaat:</CaseSectionTitle>
              <CaseDescription>
                Snellere, consistentere voorstellen zonder kwaliteitsverlies. Kernteams kregen meer tijd voor 
                strategisch denken in plaats van schrijfwerk. <strong>Verhoogd gunningspercentage</strong> door betere kwaliteit.
              </CaseDescription>
            </CaseSection>

            <InsightBox>
              "AI nam de administratieve rompslomp weg zodat we ons konden focussen op het ontwikkelen van 
              creatieve strategieën die écht werken voor complexe overheidsvraagstukken."
            </InsightBox>
          </CaseCard>

          <CaseCard>
            <CaseTitle>Startup branding - van idee naar identiteit</CaseTitle>
            <CaseSubtitle>AI-gestuurde branding aanpak voor kostenefficiënte merkbouw</CaseSubtitle>
            
            <CaseDescription>
              <strong>Situatie:</strong> Tech startup had een sterk product maar geen budget voor duur branding bureau.
            </CaseDescription>

            <CaseSection>
              <CaseSectionTitle>Uitdaging:</CaseSectionTitle>
              <CaseDescription>
                Complete merkidentiteit ontwikkelen binnen beperkt budget en strakke timeline.
              </CaseDescription>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Concrete AI-aanpak:</CaseSectionTitle>
              <CaseList>
                <li>Merkstrategie: AI-analyse van concurrenten en merkpositionering</li>
                <li>Merkverhaal: AI-ondersteuning bij het ontwikkelen van overtuigende brand story</li>
                <li>Beeldbank: AI-gegenereerde beelden voor logo concepten en kleurenpaletten</li>
                <li>Content systeem: Geautomatiseerde brand guidelines en templates</li>
                <li>Implementatie: AI-gegenereerde marketing materialen en website content</li>
              </CaseList>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Resultaat:</CaseSectionTitle>
              <CaseDescription>
                <strong>80% kostenbesparing</strong> ten opzichte van traditioneel branding traject, 
                complete merkidentiteit professioneel opgeleverd.
              </CaseDescription>
            </CaseSection>

            <InsightBox>
              "Startups hoeven niet te kiezen tussen kwaliteit en kosten. AI maakt professionele branding 
              toegankelijk voor elk budget."
            </InsightBox>
          </CaseCard>


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
                <CTAButton as="a" href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer" style={{
                  background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
                  color: 'white'
                }}>
                  Plan een Gratis Kennismaking
                </CTAButton>
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
                    📧 julia@loth.nl
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