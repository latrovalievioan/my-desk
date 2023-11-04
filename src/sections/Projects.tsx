import styled from "styled-components";
import { Section } from "../styled/Section";
import Tilt from "react-parallax-tilt";
import LinkIcon from "../assets/Link";

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1300px) {
    width: 95%;
  }
`;

const CardsCluster = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Card = styled(Tilt)`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  transform: translateZ(0);

  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 30px;
  width: 374px;
`;

const Project1 = styled(Card)`
  background: rgba(159, 93, 106, 0.6);
  background: -moz-linear-gradient(
    100deg,
    rgba(159, 93, 106, 1) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
  background: -webkit-linear-gradient(
    100deg,
    rgba(159, 93, 106, 1) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
  background: linear-gradient(
    100deg,
    rgba(159, 93, 106, 0.6) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
`;

const Project2 = styled(Card)`
  background: rgba(159, 93, 106, 0.6);
  background: -moz-linear-gradient(
    0deg,
    rgba(159, 93, 106, 1) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(159, 93, 106, 1) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(159, 93, 106, 0.6) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
`;

const Project3 = styled(Card)`
  background: rgba(159, 93, 106, 0.6);
  background: -moz-linear-gradient(
    275deg,
    rgba(159, 93, 106, 1) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
  background: -webkit-linear-gradient(
    275deg,
    rgba(159, 93, 106, 1) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
  background: linear-gradient(
    275deg,
    rgba(159, 93, 106, 0.6) 0%,
    rgba(69, 116, 164, 0.6) 100%
  );
`;

const ProjectTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.a`
  background: #5185db;
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
    transition: 0.5s;
    background: rgba(0, 206, 158, 1);
  }
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;

export const Projects = () => {
  return (
    <Section>
      <ContentStack>
        <h1>PROJECTS</h1>
        <CardsCluster>
          <Project1 tiltReverse tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <ProjectTitle>
              my-desk
              <ProjectLink
                href="https://github.com/latrovalievioan/my-desk"
                target="_blank"
              >
                <LinkIcon />
              </ProjectLink>
            </ProjectTitle>
            <p>
              This is the project that you are currently viewing. My very own
              Frankenstein monster.
            </p>
            <p>
              I took inspiration from similar personal dev websites built with
              THREE.js, so I was pretty excited to try it on my own.
            </p>
            <p>
              I've used <b>React</b> with <b>TypeScript</b>,{" "}
              <b>Styled Components</b>, and <b>React three fiber</b>. I've had
              to learn some basic <b>Blender</b> for the models too.
            </p>
          </Project1>
          <Project2 tiltReverse tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <ProjectTitle>
              ts-UwU
              <ProjectLink
                href="https://github.com/latrovalievioan/ts-UwU"
                target="_blank"
              >
                <LinkIcon />
              </ProjectLink>
            </ProjectTitle>
            <p>
              This project is a <b>Typescript</b> metaprogramming attempt of
              mine. It's a pretty weird concept to grasp, but It's something
              like functional programming only using types.
            </p>
            <p>
              I did a presentation on the concept at a tech meeting, and it went
              pretty amazing.
            </p>
          </Project2>
          <Project3 tiltReverse tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <ProjectTitle>
              Smule's profile page
              <ProjectLink href="https://www.smule.com/Disney" target="_blank">
                <LinkIcon />
              </ProjectLink>
            </ProjectTitle>
            <p>
              Migrating big features from a legacy codebase (
              <b>Ruby on Rails</b> + <b>Javascript</b>) to a modern (
              <b>NestJS</b> + <b>Typescript</b> + <b>React</b>) is big part of
              my job at Smule.
            </p>
            <p>
              Building new endpoints on the backend, implementing new UI and
              managing large data transformations and state management were some
              of the challanges I've faced during this migrations.
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
