import styled from 'styled-components';
import { Section } from '../styled/Section';
import CssIcon from './icons/CssIcon';
import FigmaIcon from './icons/FigmaIcon';
import GitIcon from './icons/GitIcon';
import HtmlIcon from './icons/HtmlIcon';
import JavaScriptIcon from './icons/JavaScript';
import JiraIcon from './icons/JiraIcon';
import NestIcon from './icons/NestIcon';
import NodeIcon from './icons/NodeIcon';
import ReactIcon from './icons/ReactIcon';
import ReduxIcon from './icons/ReduxIcon';
import StyledIcon from './icons/StyledIcon';
import TypescriptIcon from './icons/TypeScriptIcon';
import WebpackIcon from './icons/WebpackIcon';
import Tilt from 'react-parallax-tilt';

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled(Tilt)`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0,0,0);
  transform: translateZ(0);

  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, 0.5);
  backdrop-filter: blur(10px);
  gap: 20px;
  padding: 30px;
  border-radius: 40px;
`

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
            <NestIcon />
            NestJS
          </Technology>
          <Technology>
            <ReduxIcon />
            Redux
          </Technology>
          <Technology>
            <StyledIcon />
            Styled-Components
          </Technology>
          <Technology>
            <WebpackIcon/>
            Webpack
          </Technology>
          <Technology>
            <GitIcon />
            Git
          </Technology>
        </Row>
        <Row>
          <Technology>
            <JavaScriptIcon />
            JavaScript
          </Technology>
          <Technology>
            <HtmlIcon />
            Html5
          </Technology>
          <Technology>
            <CssIcon />
            CSS3
          </Technology>
          <Technology>
            <NodeIcon />
            Node.js
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
