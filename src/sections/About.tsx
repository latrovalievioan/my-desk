import styled from 'styled-components';
import { Section } from '../styled/Section';
import Tilt from 'react-parallax-tilt';

const Card = styled(Tilt)`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0,0,0);
  transform: translateZ(0);

  background: rgba(61,61,91, 0.6);
  background: -moz-linear-gradient(135deg, rgba(61,61,91,0.5) 0%, rgba(73,115,126,0.5) 100%);
  background: -webkit-linear-gradient(135deg, rgba(61,61,91,0.5) 0%, rgba(73,115,126,0.5) 100%);
  background: linear-gradient(135deg, rgba(61,61,91,0.5) 0%, rgba(73,115,126,0.5) 100%);
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

export const About = () => {
  return (
    <Section>
      <ContentStack>
        <h1>ABOUT</h1>
        <Card tiltReverse tiltMaxAngleX={6} tiltMaxAngleY={6}>
            <h2>
              Hello, my name is <br/> Ioan Latrovaliev{' '}
            </h2>
          <p>
            I'm a 26-year-old web developer who enjoys creating unique and value-packed websites.
          </p>
          <p>
            I'm a developer who loves to learn and experiment. Despite my
            preference for the front-end, I enjoy solving algorithmic tasks in
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
