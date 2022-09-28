import React, { forwardRef } from 'react';
import { ScrollTooltip } from '../styled/ScrollTooltip';
import { Box } from '../styled/Box';
import { SmallestTitle } from '../styled/SmallestTitle';
import { Title } from '../styled/Title';
import PointDownIcon from './icons/PointDownIcon';
import styled from 'styled-components';
import { Stack } from '../styled/Stack';

const TitlesStack = styled(Stack)`
  justify-items: flex-start;
  margin-bottom: 30vh;
`;

const ColoredTitle = styled(Title)`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    169deg,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 145, 0, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Home = forwardRef(({ ...props }, ref: any) => {
  return (
    <Box>
      <TitlesStack>
        <SmallestTitle>Welcome to</SmallestTitle>
        <ColoredTitle>IOAN'S DESK</ColoredTitle>
      </TitlesStack>
      <ScrollTooltip ref={ref}>
        scroll down
        <PointDownIcon />
      </ScrollTooltip>
    </Box>
  );
});
