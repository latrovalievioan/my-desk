import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Box } from '../styled/Box';
import { Cluster } from '../styled/Cluster';
import { Stack } from '../styled/Stack';
import { Title } from '../styled/Title';
import { ProjectCard } from './components/ProjectCard';

export const Projects = forwardRef(({ ...props }, ref: any) => {
  const ProjectsCluster = styled(Cluster)`
    margin-top: 2em;
    gap: 2em;
  `;

  const ProjectsStack = styled(Stack)`
    align-items: flex-start;
    padding: 0;
  `;

  const Button = styled.a`
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 1.5em;
    padding: 20px;
    margin-top: 2em;
    background-color: rgba(255, 165, 0, 0.5);
    width: 300px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 165, 0, 0.7);
    }
  `;

  return (
    <Box>
      <ProjectsStack>
        <Title>PROJECTS</Title>
        <ProjectsCluster>
          <ProjectCard cardStyle={1} />
          <ProjectCard cardStyle={2} />
          <ProjectCard cardStyle={3} />
        </ProjectsCluster>
        <Button href="https://github.com/latrovalievioan">View all my projects on GitHub</Button>
      </ProjectsStack>
    </Box>
  );
});
