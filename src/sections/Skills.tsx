import styled from 'styled-components';
import { Section } from '../styled/Section';

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsCard = styled.div`
  background: linear-gradient(
    90deg,
    rgba(41, 163, 232, 0.4) 0%,
    rgba(104, 215, 94, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 30px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
`;

const SkillTitle = styled.h3`
  border-bottom: 3px solid white;
`;

export const Skills = () => {
  return (
    <Section>
      <ContentStack>
        <h1>SKILLS</h1>
        <SkillsCard>
          <SkillTitle>Front end</SkillTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas ligula id turpis molestie accumsan. Praesent et porttitor
            velit. Vivamus in purus luctus, porta purus in, porta nibh.
          </p>
          <SkillTitle>Version control</SkillTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas ligula id turpis molestie accumsan. Praesent et porttitor
            velit. Vivamus in purus luctus, porta purus in, porta nibh.
          </p>
          <SkillTitle>Problem solving</SkillTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas ligula id turpis molestie accumsan. Praesent et porttitor
            velit. Vivamus in purus luctus, porta purus in, porta nibh.
          </p>
          <SkillTitle>Back end</SkillTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas ligula id turpis molestie accumsan. Praesent et porttitor
            velit. Vivamus in purus luctus, porta purus in, porta nibh.
          </p>
        </SkillsCard>
      </ContentStack>
    </Section>
  );
};
