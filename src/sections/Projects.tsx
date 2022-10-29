import styled from 'styled-components';
import { Section } from '../styled/Section';

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CardsCluster = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Card = styled.div`
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 30px;
  width: 374px;
`;

const Project1 = styled(Card)`
  background: linear-gradient(
    90deg,
    rgba(41, 95, 232, 0.4) 0%,
    rgba(94, 215, 149, 0.4) 100%
  );
`;

const Project2 = styled(Card)`
  background: linear-gradient(
    180deg,
    rgba(153, 127, 62, 0.6) 0%,
    rgba(208, 59, 113, 0.6) 100%
  );
`;

const Project3 = styled(Card)`
  background: linear-gradient(
    180deg,
    rgba(153, 127, 62, 0.6) 0%,
    rgba(208, 59, 113, 0.6) 100%
  );
`;

const ProjectTitle = styled.h3`
  border-bottom: 3px solid white;
`;

const Button = styled.a`
  background: linear-gradient(
    90deg,
    rgba(255, 190, 115, 0.6) 0%,
    rgba(252, 183, 7, 0.6) 100%
  );
  backdrop-filter: blur(13.9919px);
  border-radius: 47px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 374px;
  padding: 16px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 190, 115, 0.8) 0%,
      rgba(252, 183, 7, 0.8) 100%
    );
  }
`;

export const Projects = () => {
  return (
    <Section>
      <ContentStack>
        <h1>PROJECTS</h1>
        <CardsCluster>
          <Project1>
            <ProjectTitle>my-desk</ProjectTitle>
            <p>
              This is the project that you are currently viewing. I took
              inspiration from similar personal dev websites built with
              THREE.js, so I was pretty excited to try it on my own.{' '}
            </p>
            <p>
              I've used <b>React</b> with <b>TypeScript</b>,{' '}
              <b>Styled Components</b>, and <b>React three fiber</b>. I've had to
              learn some basic <b>Blender</b> for the models too.
            </p>
          </Project1>
          <Project2>
            <ProjectTitle>ts-UwU</ProjectTitle>
            <p>
              This project is a space for experiments with <b>TypeScript</b>
              's type system. It's a pretty weird concept to grasp, but It's
              something like functional programming only using types.
            </p>
            <p>
              I did a presentation on the concept at a tech meeting,
              and it went pretty amazing.
            </p>
          </Project2>
          <Project3>
            <ProjectTitle>Smule's profile page</ProjectTitle>
            <p>
              This is a project that I single-handedly did at work. It's
              Smule's website profile page.
            </p>
            <p>
              This was one of my first big real-world challenges, and I
              learned a lot about <b>React</b>, <b>Redux</b>, and{' '}
              <b>Styled Components</b> in the process.
            </p>
          </Project3>
        </CardsCluster>
        <Button href="https://www.github.com/latrovalievioan" target="_blank">
          View all projects on GitHub
        </Button>
      </ContentStack>
    </Section>
  );
};
