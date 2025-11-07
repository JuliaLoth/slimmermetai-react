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
  overflow: visible;
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
  color: white;
  background: rgba(88, 82, 242, 0.9);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 3;
  box-shadow: 0 4px 12px rgba(88, 82, 242, 0.3);

  &:hover {
    background: linear-gradient(135deg, #5852f2 0%, #ef49f2 100%);
    transform: translateX(-5px);
    box-shadow: 0 6px 16px rgba(88, 82, 242, 0.4);
  }

  &::before {
    content: '←';
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
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
  'agile-coach-ai-onderneming': {
    title: 'Van startende agile coach naar AI-gedreven onderneming',
    subtitle: 'Slim beginnen met AI vanaf dag één',
    situatie: 'Bart begon zijn onderneming als agile coach met een duidelijke visie. Dat gaf hem een unieke kans: zijn bedrijf meteen slim inrichten. Geen legacy systemen, geen ingesleten werkwijzen - gewoon direct efficiënt beginnen. Hij wilde AI volledig integreren in zijn werkwijze - van klantgesprek tot offerte, van workshop ontwerp tot content creatie.',
    uitdaging: 'Bart hoefde geen oude systemen om te bouwen, maar juist dat maakte de uitdaging interessant. Welke processen zet je op? De kernvraagstukken: efficiënt offreren (van call naar overtuigende offerte), kennisbeheer (templates toegankelijk houden), workshop ontwerp (creatieve werkvormen ontwikkelen), content strategie (LinkedIn zonder dat het ten koste gaat van klantwerk), en de juiste mindset (AI als collega die je moet inwerken).',
    aanpak: [
      'Kick-off: Via vragenlijst workflows, succesfactoren en planning in kaart gebracht',
      'Hands-on training: Halve dag basis leggen met juiste mindset en goed prompten',
      'Offerte workflow: Klantgesprekken opnemen, transcriberen en in offerte bot verwerken',
      'Google NotebookLM: Alle offertes, notities en templates in één centrale kennisbasis',
      'Workshop ontwerp: AI als sparringpartner voor creatieve werkvormen en draaiboeken',
      'Content strategie: Unieke invalshoeken voor LinkedIn gebaseerd op agile expertise',
      'Vier weken experimenteren: Praktijk boven theorie, AI gebruiken in echt werk',
      'Retrospective: Samen optimaliseren van workflow en aanpak bijstellen'
    ],
    resultaat: 'Bart heeft nu een bedrijfsvoering waarbij AI een natuurlijke rol speelt. Directe tijdwinst bij offertes en notities. Schaalbare processen die meegroeien. Belangrijkste: de juiste mindset - Bart snapt hoe AI werkt en hoe hij het moet inwerken.',
    insight: '"Super handig en inzichtelijk. Had ik dit maar eerder gedaan. Julia heeft het ook mooi gepersonaliseerd, dus echt gekeken naar wat ik nodig heb. Ze is heel kundig hierin - ze weet veel en kan goed helpen." — Bart, agile coach'
  },
  'overheidsaanbestedingen': {
    title: 'AI voor overheidsaanbestedingen',
    subtitle: 'Slimmer offertes schrijven bij complexe overheidsprojecten',
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
    subtitle: 'Slim gebruik van AI voor betaalbare, professionele branding',
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
        <PageHero>
          <BackLink to="/cases">Terug naar Cases</BackLink>
          <Container>
            <h2>Case niet gevonden</h2>
          </Container>
        </PageHero>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHero>
        <BackLink to="/cases">Terug naar Cases</BackLink>
        <Container>
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
                {caseId === 'agile-coach-ai-onderneming'
                  ? 'Herken je de uitdaging? Te weinig tijd, te veel repetitief werk? Plan een gratis kennismakingsgesprek. We ontdekken samen hoe AI jouw processen kan versterken.'
                  : 'Benieuwd hoe AI-adoptie eruitziet in jouw sector? In ons kennismakingsgesprek bespreken we concrete mogelijkheden die passen bij jouw werkwijze.'}
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
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(88, 82, 242, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(88, 82, 242, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(88, 82, 242, 0.3)';
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
