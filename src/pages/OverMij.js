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
  font-family: 'Neue Montreal', sans-serif;
  
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
  font-family: 'Neue Montreal', sans-serif;
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
  font-family: 'Neue Montreal', sans-serif;
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
  font-family: 'Neue Montreal', sans-serif;
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
            <PageTitle>Hi, ik ben Julia - jouw AI-begeleider</PageTitle>
            <PageSubtitle>
              Ik voel me thuis in complexe omgevingen en ben altijd bereid mijn handen uit de mouwen te steken. 
              Naast het begeleiden van trajecten van beleid naar uitvoering fungeer ik als spil tussen communicatie, 
              concept en techniek. Als innovator zorg ik voor vernieuwing die werkt in de praktijk.
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
              <HeroTitle>Van Datalab naar AI-begeleiding</HeroTitle>
              <HeroSubtitle>Mijn verhaal</HeroSubtitle>
              <HeroDescription>
                Als teamlead van het datalab bij Provincie Noord-Brabant heb ik ervaren hoe krachtig het is 
                wanneer mensen de lol ontdekken van nieuwe technologie. Ons team groeide in anderhalf jaar 
                van onbekend naar strategische sparringpartner - niet door techniek op te leggen, 
                maar door samen te experimenteren.
              </HeroDescription>
              <HeroDescription>
                <strong>Waarom ik "Slimmer met AI" oprichtte</strong><br/>
                Ik zie te vaak dat ondernemers vastzitten in repetitieve taken terwijl AI kan helpen. 
                Mijn missie: mensen laten ontdekken hoe AI hun leven makkelijker én leuker maakt. 
                Niet door een technische doos neer te zetten, maar door samen te ontdekken wat mogelijk is.
              </HeroDescription>
              <div style={{textAlign: 'center'}}>
                <ContactButton as="a" href="https://calendar.app.google/z5eJjn4wGVcXqvZq8" target="_blank" rel="noopener noreferrer">
                  Plan een gesprek
                </ContactButton>
                <div style={{marginTop: '1rem'}}>
                  <a href="mailto:julia@loth.nl" style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: '#667eea',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    border: '1px solid #667eea',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#667eea';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#667eea';
                  }}>
                    📧 julia@loth.nl
                  </a>
                </div>
              </div>
            </AboutHeroContent>
          </HeroSection>

          <SectionTitle>Mijn Expertise - 10 jaar innovatie-ervaring</SectionTitle>
          
          <ContentGrid>
            <ContentCard>
              <CardIcon>🎨</CardIcon>
              <CardTitle>Sr. Creative Consultant & AI lead</CardTitle>
              <CardText>
                AI-integratie voor creatieve projecten en complexe overheidsaanbestedingen.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>💼</CardIcon>
              <CardTitle>Strategisch informatieadviseur</CardTitle>
              <CardText>
                IT-transformaties begeleid bij ministeries en complexe organisaties.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>🔄</CardIcon>
              <CardTitle>Scrummaster & procesadviseur</CardTitle>
              <CardText>
                Teams geholpen optimale resultaten te behalen door proces-optimalisatie.
              </CardText>
            </ContentCard>

            <ContentCard>
              <CardIcon>🧪</CardIcon>
              <CardTitle>Opdrachnemer datalab</CardTitle>
              <CardText>
                Innovaties vertaald naar tastbare resultaten, van onbekend naar strategische partner.
              </CardText>
            </ContentCard>
          </ContentGrid>

          <div style={{
            padding: '3rem 0',
            textAlign: 'center'
          }}>
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '3rem',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
            }}>
              <div style={{
                background: 'rgba(102, 126, 234, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                color: '#333',
                borderLeft: '4px solid #667eea'
              }}>
                "Creativiteit, humor, out-of-the-box denken en weigeren genoegen te nemen met 'nee' 
                staan centraal in ons team. Deze waarden neem ik mee naar elke samenwerking."
              </div>
              <div style={{
                marginTop: '1rem',
                fontWeight: '600',
                fontStyle: 'normal',
                color: '#667eea'
              }}>
                - Julia Loth
              </div>
            </div>
          </div>

          <SectionTitle>Certificering & Studie</SectionTitle>
          
          <SkillsList>
            <SkillCard>
              <SkillTitle>PRINCE2 Foundation</SkillTitle>
              <SkillDescription>
                Project Management certificering
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>DevOps Foundation</SkillTitle>
              <SkillDescription>
                Technische samenwerking en procesoptimalisatie
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Agile leiderschapstraining</SkillTitle>
              <SkillDescription>
                Teams begeleiden in verandering
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Beeldend kunstenaar</SkillTitle>
              <SkillDescription>
                Nieuwe Akademie Utrecht - creativiteit en conceptdenken
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillTitle>Process & Information Management</SkillTitle>
              <SkillDescription>
                Bestuursacademie - strategische procesoptimalisatie
              </SkillDescription>
            </SkillCard>
          </SkillsList>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default OverMij;