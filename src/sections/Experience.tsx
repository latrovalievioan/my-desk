import styled from "styled-components";
import { Section } from "../styled/Section";
import Tilt from "react-parallax-tilt";

const WorkPlace = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 50px;
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
  border-radius: 40px;
  padding: 30px;
  width: 374px;

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

const WorkTitleAndSubtitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Experience = () => {
  return (
    <Section>
      <h1>WORK EXPERIENCE</h1>
      <WorkPlace>
        <WorkTitleAndSubtitle>
          <h2>
            Smule
            <br />
            Web Developer
          </h2>
          <br />
          08/2021 - Present
        </WorkTitleAndSubtitle>
        <Card>
          Migrated legacy JavaScript, Angular and Backbone code to a moden SPA
          using React, Redux and Typescript.
          <br />
          <br />
          Migrated legacy Ruby on Rails backend to a modern NestJS one.
        </Card>
        <Card>
          Improved Typescript usage by introducing concepts like type guards,
          type inference, const assertions, union types, conditional types, type
          intersections, `unknown` type usage and getting rid of most of the
          `any` type usage
        </Card>
        <Card>
          Led a Git training by explaining commit ammends, interractive rebase,
          reflog and merges
        </Card>
        <Card>
          Prepared a style-guide and followed up by implementing the usage of
          Prettier in the SPA and the backend projects
        </Card>
      </WorkPlace>
    </Section>
  );
};
