import styled from 'styled-components';
import { Section } from '../styled/Section';

const Card = styled.div`
  background: linear-gradient(90deg, rgba(45, 41, 232, 0.4) 0%, rgba(94, 193, 215, 0.4) 100%);
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 50px;
  width: 700px;
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 400px;
  gap: 20px;
`;

const CardTitle = styled.h2`
  border-bottom: 3px solid white;
`;

export const About = () => {
  return (
    <Section>
      <ContentStack>
        <h1>ABOUT</h1>
        <Card>
          <CardTitle>
            Hello, my name is <br/> Ioan Latrovaliev{' '}
          </CardTitle>
          <p>
            I'm a 26-year-old web developer who enjoys creating things for the
            web.
          </p>
          <p>
            I'm a developer who loves to learn and experiment. Despite my
            preference for the front end, I enjoy solving algorithmic tasks in
            my spare time. I'm also one of those oddballs who use VIM.
          </p>
          <p>
            When I'm not at the computer, you can find me playing jazz on my
            violin.
          </p>
          <p>I am currently employed as a web engineer at Smule, Inc.</p>
        </Card>
      </ContentStack>
    </Section>
  );
};
