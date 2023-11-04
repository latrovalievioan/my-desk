import styled from "styled-components";
import { Section } from "../styled/Section";
import Tilt from "react-parallax-tilt";

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

  background: rgba(61, 61, 91, 0.6);
  background: -moz-linear-gradient(
    135deg,
    rgba(61, 61, 91, 0.5) 0%,
    rgba(73, 115, 126, 0.5) 100%
  );
  background: -webkit-linear-gradient(
    135deg,
    rgba(61, 61, 91, 0.5) 0%,
    rgba(73, 115, 126, 0.5) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(61, 61, 91, 0.5) 0%,
    rgba(73, 115, 126, 0.5) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 48px;
`;

const Credit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const Subject = styled.div`
  text-align: right;
  font-weight: bold;
  flex: 1;
`;

const Names = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.li`
  text-align: left;
  list-style-type: none;
`;

export const Credits = () => {
  return (
    <Section>
      <h1>CREDITS</h1>
      <Card tiltReverse tiltMaxAngleX={6} tiltMaxAngleY={6}>
        <Credit>
          <Subject>DEVELOPMENT</Subject>
          <Names>
            <Name>Ioan Latrovaliev</Name>
          </Names>
        </Credit>
        <Credit>
          <Subject>UI/UX ADVISING</Subject>
          <Names>
            <Name>Aneliya Kirkova</Name>
          </Names>
        </Credit>
        <Credit>
          <Subject>SCENE & ANIMATION</Subject>
          <Names>
            <Name>Aneliya Kirkova</Name>
            <Name>Ioan Latrovaliev</Name>
          </Names>
        </Credit>
        <Credit>
          <Subject>INSPIRATION</Subject>
          <Names>
            <Name>Jesse Zhou</Name>
          </Names>
        </Credit>
        <Credit>
          Special thanks to Konstantin Simeonov for being the best mentor!
        </Credit>
      </Card>
    </Section>
  );
};
