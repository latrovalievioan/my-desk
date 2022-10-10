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
  max-width: 1000px;
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
          <SkillTitle>Front-end</SkillTitle>
          <p>
            As a front-end developer, I am pretty proficient in <b>JavaScript</b>,
            <b> HTML5</b>, and <b>CSS</b>. I have been in love with <b>TypeScript </b>ever since I
            discovered it. It's a pleasure to have static types! I am a <b>React </b>
            fan and try to learn more about it every day.
          </p>
          <SkillTitle>Version control</SkillTitle>
          <p>
            I am very knowledgeable about <b>Git</b>. And my branches are never a mess.
            I'm comfortable rebasing, using the 'reflog', cherry-picking
            commits, and anything you can think of. People often think of you as
            a wizard if you are good at Git. So git gut at Git!
          </p>
          <SkillTitle>Back-end</SkillTitle>
          <p>
            Although it is not my prime field, I've written some back-end APIs.
            My knowledge of <b>NestJS </b>and <b>Ruby on Rails</b> is relatively good.
          </p>
        </SkillsCard>
      </ContentStack>
    </Section>
  );
};
