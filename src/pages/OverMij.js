import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 120px);
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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

const ProfileImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
`;

const HeroContent = styled.div``;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
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
  margin-bottom: 2rem;
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

const ContentSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
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
`;

const SkillTitle = styled.h4`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const SkillDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
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
      <Container>
        <HeroSection>
          <ProfileImageContainer>
            <ProfileImage>
              👩‍💼
            </ProfileImage>
          </ProfileImageContainer>
          
          <HeroContent>
            <HeroTitle>Julia Loth</HeroTitle>
            <HeroSubtitle>AI Training & Advies Specialist</HeroSubtitle>
            <HeroDescription>
              Ik help professionals en bedrijven om de kracht van Artificial Intelligence 
              te benutten voor productiviteit, innovatie en groei. Met praktische training 
              en strategisch advies maak ik AI toegankelijk voor iedereen.
            </HeroDescription>
            <ContactButton href="mailto:julia@loth.nl">
              Neem Contact Op
            </ContactButton>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <SectionTitle>Mijn Missie</SectionTitle>
          
          <ContentGrid>
            <ContentCard>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Toegankelijke AI</CardTitle>
              <CardText>
                AI hoeft niet complex te zijn. Ik maak geavanceerde technologie 
                begrijpelijk en toepasbaar voor professionals in elke sector.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>🚀</CardIcon>
              <CardTitle>Praktische Resultaten</CardTitle>
              <CardText>
                Geen theoretische verhalen, maar concrete tools en technieken 
                die je direct kunt toepassen in je dagelijkse werk.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>🤝</CardIcon>
              <CardTitle>Persoonlijke Begeleiding</CardTitle>
              <CardText>
                Elke persoon en organisatie is uniek. Daarom bied ik 
                maatwerk training en advies aangepast aan jouw specifieke situatie.
              </CardText>
            </ContentCard>
          </ContentGrid>
        </ContentSection>

        <QuoteSection>
          <Quote>
            "De toekomst behoort toe aan degenen die AI niet zien als vervanging, 
            maar als een krachtige partner in hun groei en succes."
          </Quote>
          <QuoteAuthor>- Julia Loth</QuoteAuthor>
        </QuoteSection>

        <ContentSection>
          <SectionTitle>Expertise & Specialisaties</SectionTitle>
          
          <SkillsList>
            <SkillCard>
              <SkillTitle>Prompt Engineering</SkillTitle>
              <SkillDescription>
                Optimale communicatie met AI tools voor betere resultaten
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Business Automatisering</SkillTitle>
              <SkillDescription>
                Processen stroomlijnen met AI-gedreven oplossingen
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Content Strategie</SkillTitle>
              <SkillDescription>
                AI inzetten voor efficiënte en effectieve content creatie
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Training & Coaching</SkillTitle>
              <SkillDescription>
                Praktijkgerichte workshops en persoonlijke begeleiding
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Digitale Transformatie</SkillTitle>
              <SkillDescription>
                Strategische implementatie van AI in bedrijfsprocessen
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Change Management</SkillTitle>
              <SkillDescription>
                Teams begeleiden bij de adoptie van nieuwe AI tools
              </SkillDescription>
            </SkillCard>
          </SkillsList>
        </ContentSection>
      </Container>
    </PageContainer>
  );
};

export default OverMij;