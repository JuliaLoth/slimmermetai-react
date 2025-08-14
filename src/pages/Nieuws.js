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

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const NewsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
`;

const SubstackHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const SubstackTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const SubstackDescription = styled.p`
  opacity: 0.9;
  font-size: 1.1rem;
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const SubstackIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
`;

const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SidebarText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const NewsletterSignup = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
`;

const SignupButton = styled.a`
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #764ba2;
    transform: translateY(-2px);
  }
`;

const TopicsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TopicItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #555;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: "📖";
    margin-right: 0.5rem;
  }
`;

const Nieuws = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Nieuws & Inzichten</PageTitle>
          <PageSubtitle>
            Blijf op de hoogte van de laatste ontwikkelingen in AI, praktische tips, 
            en exclusieve inzichten over hoe je AI optimaal kunt benutten.
          </PageSubtitle>
        </PageHeader>

        <NewsContent>
          <MainContent>
            <SubstackHeader>
              <SubstackTitle>SlimmerMetAI Newsletter</SubstackTitle>
              <SubstackDescription>
                Wekelijkse updates, praktische AI tips en exclusieve content
              </SubstackDescription>
            </SubstackHeader>
            
            <IframeContainer>
              <SubstackIframe
                src="https://slimmermetai.substack.com/embed"
                title="SlimmerMetAI Substack"
                frameBorder="0"
                scrolling="auto"
              />
            </IframeContainer>
          </MainContent>

          <Sidebar>
            <SidebarCard>
              <SidebarTitle>📧 Nieuwsbrief</SidebarTitle>
              <SidebarText>
                Ontvang wekelijks praktische AI tips, de nieuwste ontwikkelingen 
                en exclusieve content direct in je inbox.
              </SidebarText>
              <NewsletterSignup>
                <SignupButton href="https://slimmermetai.substack.com" target="_blank" rel="noopener noreferrer">
                  Abonneer je Nu
                </SignupButton>
              </NewsletterSignup>
            </SidebarCard>

            <SidebarCard>
              <SidebarTitle>🔥 Populaire Onderwerpen</SidebarTitle>
              <TopicsList>
                <TopicItem>ChatGPT en Prompt Engineering</TopicItem>
                <TopicItem>AI voor Bedrijfsprocessen</TopicItem>
                <TopicItem>Automatisering Tips</TopicItem>
                <TopicItem>AI Tools Reviews</TopicItem>
                <TopicItem>Ethiek en AI</TopicItem>
                <TopicItem>Toekomst van Werk</TopicItem>
              </TopicsList>
            </SidebarCard>

            <SidebarCard>
              <SidebarTitle>💡 Wist je dat?</SidebarTitle>
              <SidebarText>
                AI kan je productiviteit met 40-60% verhogen als je de juiste 
                tools en technieken gebruikt. In onze nieuwsbrief delen we 
                praktische voorbeelden van hoe professionals AI succesvol inzetten.
              </SidebarText>
            </SidebarCard>
          </Sidebar>
        </NewsContent>
      </Container>
    </PageContainer>
  );
};

export default Nieuws;