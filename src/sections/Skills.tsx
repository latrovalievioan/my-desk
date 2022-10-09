import {
  Column,
  Columns,
  Cover,
  PadBox,
  Split,
  Stack,
} from '@bedrock-layout/primitives';
import styled from 'styled-components';

const GlassBox1 = styled(PadBox)`
  background: linear-gradient(
    90deg,
    rgba(41, 163, 232, 0.4) 0%,
    rgba(104, 215, 94, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 60px;
`;

const GlassBox2 = styled(PadBox)`
  background: linear-gradient(
    180deg,
    rgba(211, 132, 115, 0.4) 0%,
    rgba(215, 94, 210, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 40px;
`;

const GlassBox3 = styled(PadBox)`
  background: linear-gradient(
    180deg,
    rgba(56, 180, 207, 0.4) 0%,
    rgba(234, 202, 91, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 40px;
`;

const GlassBox4 = styled(PadBox)`
  background: linear-gradient(
    180deg,
    rgba(115, 211, 124, 0.4) 0%,
    rgba(94, 128, 215, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 40px;
`;
export const Skills = () => {
  return (
    <Cover minHeight="100vh">
      <PadBox padding="50px">
        <Columns columns={14} gutter="50px" switchAt="500px">
          <Column offsetStart={1} span={12}>
            <GlassBox1 padding={[30, 50, 30, 50]}>
              <Stack gutter={10}>
                <h3>Front end</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus egestas ligula id turpis molestie accumsan. Praesent
                  et porttitor velit. Vivamus in purus luctus, porta purus in,
                  porta nibh.
                </p>
                <h3>Version control</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus egestas ligula id turpis molestie accumsan. Praesent
                  et porttitor velit. Vivamus in purus luctus, porta purus in,
                  porta nibh.
                </p>
                <h3>Back end</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus egestas ligula id turpis molestie accumsan. Praesent
                  et porttitor velit. Vivamus in purus luctus, porta purus in,
                  porta nibh.
                </p>
              </Stack>
            </GlassBox1>
          </Column>
        </Columns>
      </PadBox>
    </Cover>
  );
};
