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
    background: linear-gradient(135deg, rgba(88, 82, 242, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%);
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
  background: rgba(255, 255, 255, 0.95);
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
  background: linear-gradient(135deg, #5852f2 0%, #db2777 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  font-family: 'Glacial Indifference', sans-serif;
  
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
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  transition: transform 0.5s ease;
  
  ${ProfileImageContainer}:hover & {
    transform: scale(1.08);
  }
`;

const AboutHeroContent = styled.div``;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Glacial Indifference', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  
  &.highlight {
    font-style: italic;
    color: #764ba2;
    margin: 1.5rem 0;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Glacial Indifference', sans-serif;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const ContentCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Glacial Indifference', sans-serif;
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.6;
  text-align: center;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, background 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  }
`;

const SkillTitle = styled.h4`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-family: 'Glacial Indifference', sans-serif;
`;

const SkillDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
`;

const QuoteSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  margin: 4rem 0;
`;

const Quote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QuoteAuthor = styled.p`
  opacity: 0.9;
  font-weight: 600;
`;

const OverMij = () => {
  return (
    <PageContainer>
      <PageHero>
        <Container>
          <HeroContent>
            <PageTitle>Van innovator naar AI-expert</PageTitle>
            <PageSubtitle>
              Herkenbaar? Je weet dat AI enorme kansen biedt, maar tussen alle buzzwords en technische termen vraag je je af: hoe vertaal ik dit concreet naar mijn dagelijkse werk? Precies daar ligt mijn expertise.
            </PageSubtitle>
          </HeroContent>
        </Container>
      </PageHero>
      
      <ContentSection>
        <Container>
          <HeroSection>
            <ProfileImageContainer>
              <ProfileImage 
                src="/images/Profiel foto Julia.svg"
                alt="Julia Loth - AI Training & Advies Specialist"
              />
            </ProfileImageContainer>
            
            <AboutHeroContent>
              <HeroTitle>Over mijzelf</HeroTitle>
              <HeroSubtitle>Als innovator vertaal ik complexe vraagstukken naar concrete oplossingen</HeroSubtitle>
              <HeroDescription>
                Met mijn hands-on mentaliteit breng ik communicatie, concept en techniek samen om vernieuwing te realiseren die écht werkt in de praktijk.
              </HeroDescription>
              <HeroDescription>
                In mijn professionele reis heb ik me gespecialiseerd in het toegankelijk maken van geavanceerde technologie. Ik geloof in:
              </HeroDescription>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '1.5rem 0',
                color: '#666',
                textAlign: 'left'
              }}>
                <li style={{marginBottom: '0.5rem'}}>• Praktische AI-toepassingen die direct implementeerbaar zijn</li>
                <li style={{marginBottom: '0.5rem'}}>• Meetbare resultaten in plaats van vage beloftes</li>
                <li style={{marginBottom: '0.5rem'}}>• Technologie als versterker van menselijke creativiteit en productiviteit</li>
                <li style={{marginBottom: '0.5rem'}}>• Kennisdeling die professionals op elk niveau helpt mee te komen</li>
              </ul>
              <ContactButton href="mailto:julia@loth.nl">
                Laten we koffie drinken ☕
              </ContactButton>
            </AboutHeroContent>
          </HeroSection>

          <SectionTitle>Mijn Aanpak</SectionTitle>
          
          <ContentGrid>
            <ContentCard>
              <CardIcon>🎯</CardIcon>
              <CardTitle>AI zonder de Bullshit</CardTitle>
              <CardText>
                Geen jargon, geen buzzwords, geen "paradigma shifts". 
                Gewoon praktische tools die je morgen kunt gebruiken. 
                Want AI is geen raketwetenschap - het is gewoon heel handig gereedschap.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>🚀</CardIcon>
              <CardTitle>Van "Oh shit" naar "Oh, dat was makkelijk"</CardTitle>
              <CardText>
                Herinner je je die keer dat je 4 uur bezig was met een rapport 
                dat ChatGPT in 10 minuten had kunnen maken? Ja, ik ook. 
                Laten we zorgen dat dat niet meer gebeurt.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>🤝</CardIcon>
              <CardTitle>Ik Snap Je Struggles</CardTitle>
              <CardText>
                Als iemand die ooit een belangrijke deadline miste door een 
                verdwaald bestand (true story), snap ik de chaos. Daarom help 
                ik je systemen te bouwen die zelfs op je slechtste dag werken.
              </CardText>
            </ContentCard>
          </ContentGrid>

          <QuoteSection>
            <Quote>
              "De beste manier om productief te zijn? 
              Wees strategisch lui en laat AI het zware werk doen."
            </Quote>
            <QuoteAuthor>- Julia Loth (professional luiwammes)</QuoteAuthor>
          </QuoteSection>

          <SectionTitle>Wat Kan Ik Voor Je Betekenen?</SectionTitle>
          
          <SkillsList>
            <SkillCard>
              <SkillTitle>Prompt Engineering</SkillTitle>
              <SkillDescription>
                "De kunst van het precies de juiste vragen stellen (en ja, dat kun je leren)"
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Business Automatisering</SkillTitle>
              <SkillDescription>
                "Voor als je liever koffie drinkt dan Excel-sheets invullen"
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Content Strategie</SkillTitle>
              <SkillDescription>
                "Schrijf 1x, gebruik 100x - mijn favoriete strategie"
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Training & Coaching</SkillTitle>
              <SkillDescription>
                "Zonder wollig gedoe, gewoon doen wat werkt"
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Digitale Transformatie</SkillTitle>
              <SkillDescription>
                "Fancy woorden voor: we gaan het makkelijker maken"
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Change Management</SkillTitle>
              <SkillDescription>
                "Je team overtuigen dat AI geen boeman is"
              </SkillDescription>
            </SkillCard>
          </SkillsList>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default OverMij;