import styled from "styled-components";
import { Section } from "../styled/Section";
import CssIcon from "./icons/CssIcon";
import FigmaIcon from "./icons/FigmaIcon";
import GitIcon from "./icons/GitIcon";
import JiraIcon from "./icons/JiraIcon";
import NestIcon from "./icons/NestIcon";
import NodeIcon from "./icons/NodeIcon";
import ReactIcon from "./icons/ReactIcon";
import ReduxIcon from "./icons/ReduxIcon";
import StyledIcon from "./icons/StyledIcon";
import TypescriptIcon from "./icons/TypeScriptIcon";
import Tilt from "react-parallax-tilt";
import TailwindIcon from "./icons/TailwindIcon";
import NeovimIcon from "./icons/NeovimIcon";
import GoIcon from "./icons/GoIcon";

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Tilt)`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  transform: translateZ(0);

  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  gap: 30px;
  padding: 30px;
  border-radius: 40px;
`;

export const Skills = () => {
  return (
    <Section>
      <h1>TOOLS & TECH-STACK</h1>
      <Wrapper tiltReverse tiltMaxAngleX={6} tiltMaxAngleY={6}>
        <Row>
          <Technology>
            <TypescriptIcon />
            TypeScript
          </Technology>
          <Technology>
            <ReactIcon />
            React
          </Technology>
          <Technology>
            <ReduxIcon />
            Redux
          </Technology>
          <Technology>
            <NestIcon />
            NestJS
          </Technology>
          <Technology>
            <NodeIcon />
            Node.js
          </Technology>
          <Technology>
            <GoIcon />
            Go (beginner)
          </Technology>
        </Row>
        <Row>
          <Technology>
            <CssIcon />
            CSS
          </Technology>
          <Technology>
            <StyledIcon />
            Styled-Components
          </Technology>
          <Technology>
            <TailwindIcon />
            Tailwind CSS
          </Technology>
        </Row>
        <Row>
          <Technology>
            <NeovimIcon />
            Neovim
          </Technology>
          <Technology>
            <GitIcon />
            Git
          </Technology>
          <Technology>
            <JiraIcon />
            Jira
          </Technology>
          <Technology>
            <FigmaIcon />
            Figma
          </Technology>
        </Row>
      </Wrapper>
    </Section>
  );
};
