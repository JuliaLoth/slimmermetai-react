import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #5852f2;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 3;

  &:hover {
    color: #ef49f2;
    transform: translateX(-5px);
  }

  &::before {
    content: '←';
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
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

const ContentSection = styled.section`
  padding: 5rem 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ContentCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  max-width: 900px;
  margin: 0 auto;
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

const CaseSectionTitle = styled.h3`
  color: #333;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-family: 'Neue Montreal', sans-serif;
`;

const CaseList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
    color: #666;
    line-height: 1.6;

    &:before {
      content: "✓";
      color: #28a745;
      font-weight: bold;
      margin-right: 0.75rem;
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
  line-height: 1.6;
`;

const caseData = {
  'overheidsaanbestedingen': {
    title: 'Slimmer offertes schrijven voor overheidsaanbestedingen',
    subtitle: 'Senior communicatieadviseur en concepter bij complexe overheidsprojecten',
    situatie: 'Als Senior communicatieadviseur en concepter werk ik mee aan complexe overheidsaanbestedingen met strikte beoordelingscriteria en krappe deadlines.',
    uitdaging: 'Kernteams van 2-3 mensen moesten snel kwalitatieve voorstellen schrijven met analyses, strategieën en creatieve concepten.',
    aanpak: [
      'Analyse versnellen: ChatGPT en Claude AI ingezet voor SWOT-analyses en stakeholder-mapping',
      'Strategische templates: AI-templates gemaakt voor budgetten, tijdlijnen en strategische werkwijzes',
      'Content optimalisatie: Kernboodschappen en narratieven verfijnen met AI-ondersteuning',
      'Kwaliteitscontrole: AI-check tegen beoordelingscriteria voorafgaand aan het indienen',
      'Teamtrainingen: AI-trainingen geven aan het team voor efficiënt gebruik van tools'
    ],
    resultaat: 'Snellere, consistentere voorstellen zonder kwaliteitsverlies. Kernteams kregen meer tijd voor strategisch denken in plaats van schrijfwerk. Verhoogd gunningspercentage door betere kwaliteit.',
    insight: '"AI nam de administratieve rompslomp weg zodat we ons konden focussen op het ontwikkelen van creatieve strategieën die écht werken voor complexe overheidsvraagstukken."'
  },
  'startup-branding': {
    title: 'Startup branding - van idee naar identiteit',
    subtitle: 'AI-gestuurde branding aanpak voor kostenefficiënte merkbouw',
    situatie: 'Tech startup had een sterk product maar geen budget voor duur branding bureau.',
    uitdaging: 'Complete merkidentiteit ontwikkelen binnen beperkt budget en strakke timeline.',
    aanpak: [
      'Merkstrategie: AI-analyse van concurrenten en merkpositionering',
      'Merkverhaal: AI-ondersteuning bij het ontwikkelen van overtuigende brand story',
      'Beeldbank: AI-gegenereerde beelden voor logo concepten en kleurenpaletten',
      'Content systeem: Geautomatiseerde brand guidelines en templates',
      'Implementatie: AI-gegenereerde marketing materialen en website content'
    ],
    resultaat: '80% kostenbesparing ten opzichte van traditioneel branding traject, complete merkidentiteit professioneel opgeleverd.',
    insight: '"Startups hoeven niet te kiezen tussen kwaliteit en kosten. AI maakt professionele branding toegankelijk voor elk budget."'
  }
};

const CaseDetail = () => {
  const { caseId } = useParams();
  const caseInfo = caseData[caseId];

  if (!caseInfo) {
    return (
      <PageContainer>
        <ContentSection>
          <Container>
            <BackLink to="/cases">Terug naar Cases</BackLink>
            <h2>Case niet gevonden</h2>
          </Container>
        </ContentSection>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHero>
        <Container>
          <BackLink to="/cases">Terug naar Cases</BackLink>
          <HeroContent>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #5852f2 0%, #ef49f2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.75rem',
              fontFamily: 'Neue Montreal, sans-serif',
              lineHeight: '1.2'
            }}>
              {caseInfo.title}
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#5852f2',
              marginBottom: '1rem'
            }}>
              {caseInfo.subtitle}
            </div>
          </HeroContent>
        </Container>
      </PageHero>

      <ContentSection>
        <Container>
          <ContentCard>
            <CaseSection>
              <CaseSectionTitle>Situatie:</CaseSectionTitle>
              <CaseDescription>
                {caseInfo.situatie}
              </CaseDescription>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Uitdaging:</CaseSectionTitle>
              <CaseDescription>
                {caseInfo.uitdaging}
              </CaseDescription>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Concrete AI-aanpak:</CaseSectionTitle>
              <CaseList>
                {caseInfo.aanpak.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </CaseList>
            </CaseSection>

            <CaseSection>
              <CaseSectionTitle>Resultaat:</CaseSectionTitle>
              <CaseDescription dangerouslySetInnerHTML={{ __html: caseInfo.resultaat }} />
            </CaseSection>

            <InsightBox>
              {caseInfo.insight}
            </InsightBox>
          </ContentCard>

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

export default CaseDetail;
