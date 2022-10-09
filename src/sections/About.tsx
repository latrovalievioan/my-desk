import {
  Columns,
  Cover,
  Column,
  PadBox,
  Stack,
} from '@bedrock-layout/primitives';
import styled from 'styled-components';

const GlassBox = styled(PadBox)`
  background: linear-gradient(90deg, rgba(45, 41, 232, 0.4) 0%, rgba(94, 193, 215, 0.4) 100%);
  backdrop-filter: blur(10px);
  border-radius: 60px;
`;

export const About = () => {
  return (
    <Cover minHeight="100vh">
      <PadBox padding="50px">
        <Columns columns={14} gutter="50px" switchAt="500px">
          <Column offsetStart={5} span={8}>
            <Stack gutter='20px'>
              <h1>ABOUT</h1>
              <GlassBox padding='50px'>
                <Stack gutter='20px'>
                  <h2>Hello, my name is <br/> Ioan Latrovaliev!</h2>
                  <p>
                    I’m a 26-year old web developer who enjoys creating things for
                    the web.
                  </p>
                  <p>
                    I'm a developer who loves to learn and experiment. Despite my
                    preference for the front end, I enjoy solving algorithmic
                    tasks in my spare time. I'm also one of those oddballs who use
                    VIM.
                  </p>
                  <p>
                    When I'm not at the computer, you can find me playing jazz on
                    my violin.
                  </p>
                  <p>I am currently employed as a web engineer at Smule, Inc.</p>
                </Stack>
              </GlassBox>
            </Stack>
          </Column>
        </Columns>
      </PadBox>
    </Cover>
  );
};
