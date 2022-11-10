import styled from 'styled-components';
import { Section } from '../styled/Section';
import { Timeline } from './components/Timeline';

const ExtendedSection = styled(Section)`
  height: 100vh;
`;

export const Skills = () => {
  return (
    <ExtendedSection>
      <Timeline></Timeline>
    </ExtendedSection>
  );
};
