import styled from 'styled-components';
import React from 'react';
import {Section} from '../styled/Section';

const TimelineWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  margin-top: 70px;
`;

const TimelineColumn = styled.div<{border: 'right' | 'left'}>`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ border }) => 'border-' + border + ': 1px solid white;'}
`;

const TimelineCell = styled.div<{justify: 'start' | 'end', isVisible: boolean}>`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: ${({ justify }) => justify ? 'flex-' + justify : 'center'};
  align-items: center;
  gap: 10px;
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: 0.7s;
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    rgba(116, 205, 255, 0.6) 0%,
    rgba(255, 200, 58, 0.6) 100%
  );
  backdrop-filter: blur(10px);
  width: 600px;
  padding: 23px;
  font-weight: bold;
  font-size: 18px;
`;

const TimelineDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height: 80px;
  border: 1px solid green;
  width: 200px;
`;

const Arrow = styled.div<{pseudoPosition: 'right' | 'left'}>`
  height: 1px;
  width: 90px;
  border: 1px solid white;
  position: relative;

  &:after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: white;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    ${({ pseudoPosition }) => pseudoPosition + ": -10px;"}
  }
`;

const Date = styled.div`
  padding: 28px;
`;

const DateText = styled.p`
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 8px;
`;

export const Experience = () => {
  const arr = [
    {
      text: 'Started my developer journey.',
      date: '05/2020 - present'
    },
    {
      text: 'Programming Fundamentals with Python @SoftUni.',
      date: '05/2020 - 06/2020'
    },
    {
      text: 'Started learning JavaScript, Html5, CSS and algorithms.',
      date: '06/2020'
    },
    {
      text: 'Game Development @Booost.',
      date: '02/2021 - 05/2021'
    },
    {
      text: 'Started learning React, Redux and Typescript.',
      date: '05/2021'
    },
    {
      text: 'Landed my first job as a web developer @Smule Inc.',
      date: '08/2021 - present'
    },
    {
      text: 'The Complete Junior to Senior Web Developer Roadmap @Zero To Mastery Academy.',
      date: '10/2021 - 12/2021'
    },
  ]

  let leftItems:any[] = [];

  let rightItems:any[] = [];

  arr.forEach((el, i) => {
    const leftRef = React.useRef<any>(null);
    const rightRef = React.useRef<any>(null);

    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const callback = (entries: any[]) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting)
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    React.useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      if(leftRef.current) observer.observe(leftRef.current);
    }, [leftRef, options])

    if(i % 2 === 0) {
      leftItems.push(
        <TimelineCell justify='end' ref={leftRef} key={`left${i}`} isVisible={isVisible}>
          <TimelineItem>{el.text}</TimelineItem>
          <Arrow pseudoPosition='right'/>
        </TimelineCell>
      );
      rightItems.push(
        <TimelineCell ref={rightRef} justify='start' key={`right${i}`} isVisible={true}>
          <Date>
            <DateText>
              {el.date}
            </DateText>
          </Date>
        </TimelineCell>
      );
    } else {
      leftItems.push(
        <TimelineCell ref={leftRef} justify='end' key={`left${i}`} isVisible={true}>
          <Date>
            <DateText>
              {el.date}
            </DateText>
          </Date>
        </TimelineCell>
      );
      rightItems.push(
        <TimelineCell justify='start' ref={rightRef} key={`right${i}`} isVisible={isVisible}>
          <Arrow pseudoPosition='left'/>
          <TimelineItem>{el.text}</TimelineItem>
        </TimelineCell>
      );
    }
  })

  return (
    <Section>
      <h1>EXPERIENCE & EDUCATION</h1>
      <TimelineWrapper>
        <TimelineColumn border='right'>
          {leftItems}
        </TimelineColumn>
        <TimelineColumn border='left'>
          {rightItems}
        </TimelineColumn>
      </TimelineWrapper>
    </Section>
  );
};
