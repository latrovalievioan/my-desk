import { Box } from '../styled/Box';
import styled from 'styled-components';
import { Cluster } from '../styled/Cluster';

export const Skills = () => {
  const SectionCluster = styled(Cluster)`
    gap: 4em;
    width: 90%;
    min-height: 75%;
  `;

  const Card = styled(Box)`
    border-radius: 4em;
    flex: 1 1 25%;
    text-align: left;
    align-items: flex-start;
    min-width: 400px;
  `;

  const GlassCard1 = styled(Card)`
    background: linear-gradient(
      180deg,
      rgba(115, 194, 211, 0.4) 0%,
      rgba(215, 188, 94, 0.4) 100%
    );
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 60px;
  `;

  const GlassCard2 = styled(Card)`
    background: linear-gradient(
      180deg,
      rgba(248, 70, 70, 0.4) 0%,
      rgba(94, 128, 215, 0.4) 100%
    );
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 60px;
  `;

  return (
    <Box>
      <SectionCluster>
        <GlassCard1></GlassCard1>
        <GlassCard2></GlassCard2>
      </SectionCluster>
    </Box>
  );
};
