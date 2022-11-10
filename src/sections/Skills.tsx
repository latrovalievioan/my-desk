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

const Wrapper = styled(Tilt)`
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
          <TypescriptIcon />
          <ReactIcon />
          <NestIcon />
          <ReduxIcon />
          <StyledIcon />
          <WebpackIcon/>
          <GitIcon />
        </Row>
        <Row>
          <JavaScriptIcon />
          <HtmlIcon />
          <CssIcon />
          <NodeIcon />
          <JiraIcon />
          <FigmaIcon />
        </Row>
      </Wrapper>
    </Section>
  );
};
