import { Box } from '../styled/Box';
import styled from 'styled-components';
import { Title } from '../styled/Title';
import { Cluster } from '../styled/Cluster';
import { SmallestTitle } from '../styled/SmallestTitle';
import { Text } from '../styled/Text';

export const About = () => {
  const ColoredTitle = styled(Title)`
    background: linear-gradient(180deg, #ffffff 35.26%, #f5b478 77.84%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    flex: 1;
  `;

  const SectionCluster = styled(Cluster)`
    justify-content: center;
    width: 70%;
    justify-self: center;
    gap: 1vw;
  `;

  const GlassMorphicCard = styled(Box)`
    background: red;
    background: linear-gradient(
      180deg,
      rgba(248, 70, 70, 0.4) 0%,
      rgba(94, 128, 215, 0.4) 100%
    );
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(6px);
    border-radius: 4em;
    flex: 2;
    text-align: left;
    align-items: flex-start;
    padding: 2em;
    min-width: 400px;
  `;

  return (
    <Box>
      <SectionCluster>
        <ColoredTitle>ABOUT</ColoredTitle>
        <GlassMorphicCard>
          <SmallestTitle>
            Hello, my name is Ioan <br /> Latrovaliev{' '}
          </SmallestTitle>
          <Text>
            I'm a 26-year-old web developer who enjoys creating things for the
            web.
          </Text>
          <Text>
            I'm a developer who loves to learn and experiment. Despite my
            preference for the front end, I enjoy solving algorithmic tasks in
            my spare time. I'm also one of those oddballs who use VIM.
          </Text>
          <Text>
            When I'm not at the computer, you can find me playing jazz on my
            violin.
          </Text>
          <Text>I am currently employed as a web engineer at Smule, Inc.</Text>
        </GlassMorphicCard>
      </SectionCluster>
    </Box>
  );
};
