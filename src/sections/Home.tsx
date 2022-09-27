import React, { forwardRef } from 'react';
import { ScrollTooltip } from '../styled/ScrollTooltip';
import { SectionWrapper } from '../styled/SectionWrapper';
import { SmallestTitle } from '../styled/Subtitle';
import { Title } from '../styled/Title';
import PointDownIcon from './icons/PointDownIcon';
import styled from 'styled-components';

const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin-top: 20vh;
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
    <SectionWrapper>
      <TitlesWrapper>
        <SmallestTitle>Welcome to</SmallestTitle>
        <ColoredTitle>IOAN'S DESK</ColoredTitle>
      </TitlesWrapper>
      <ScrollTooltip ref={ref}>
        scroll down
        <PointDownIcon />
      </ScrollTooltip>
    </SectionWrapper>
  );
});
