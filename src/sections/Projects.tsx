import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Box } from '../styled/Box';
import { Cluster } from '../styled/Cluster';
import { Stack } from '../styled/Stack';
import { Title } from '../styled/Title';

export const Projects = forwardRef(({ ...props }, ref: any) => {
  const ProjectsCluster = styled(Cluster)`
    margin-top: 2em;
    gap: 2em;
  `;

  const ProjectsStack = styled(Stack)`
    align-items: flex-start;
    padding: 0;
  `;

  const Card = styled(Box)`
    flex: 1 1 33%;
    text-align: left;
    align-items: flex-start;
    min-width: 300px;
    max-width: 300px;
    width: 300px;
    height: 300px;
  `;

  const GlassCard1 = styled(Card)`
    background: linear-gradient(
      180deg,
      rgba(135, 255, 190, 0.4) 0%,
      rgba(255, 239, 152, 0.4) 100%
    );
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);

    border-radius: 2em;
  `;

  const GlassCard2 = styled(Card)`
    background: linear-gradient(
      180deg,
      rgba(255, 233, 153, 0.4) 0%,
      rgba(255, 122, 154, 0.4) 100%
    );
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 2em;
  `;

  const GlassCard3 = styled(Card)`
    background: linear-gradient(
      180deg,
      rgba(255, 163, 163, 0.4) 0%,
      rgba(136, 225, 244, 0.4) 100%
    );
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);

    border-radius: 2em;
  `;

  return (
    <Box>
      <ProjectsStack>
        <Title>Projects</Title>
        <ProjectsCluster>
          <GlassCard1></GlassCard1>
          <GlassCard2></GlassCard2>
          <GlassCard3></GlassCard3>
        </ProjectsCluster>
      </ProjectsStack>
    </Box>
  );
});
