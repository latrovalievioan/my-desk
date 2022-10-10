import React, { forwardRef } from 'react';
import { ScrollTooltip } from '../styled/ScrollTooltip';
import PointDownIcon from './icons/PointDownIcon';
import styled from 'styled-components';
import { Section } from '../styled/Section';

const TitleStack = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-start;
  margin-bottom: 250px;
  line-height: 20px;
`;

export const Home = forwardRef(({ ...props }, ref: any) => {
  return (
    <Section>
      <TitleStack>
        <h5>Welcome to</h5>
        <h2>IOAN'S DESK</h2>
      </TitleStack>
      <ScrollTooltip ref={ref}>
         scroll down
        <PointDownIcon />
      </ScrollTooltip>
    </Section>
  );
});
