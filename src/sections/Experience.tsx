import styled from 'styled-components';
import React from 'react';
import { Section } from '../styled/Section';

const TimelineWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  margin-top: 70px;
`;

const TimelineColumn = styled.div<{ border: 'right' | 'left' }>`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ border }) => 'border-' + border + ': 1px solid white;'}
`;

const TimelineCell = styled.div<{
  justify: 'start' | 'end';
  isVisible: boolean;
}>`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0,0,0);
  transform: translateZ(0);
  will-change: opacity;

  width: 100%;
  height: 100px;
  display: flex;
  justify-content: ${({ justify }) => (justify ? 'flex-' + justify : 'center')};
  align-items: center;
  gap: 10px;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: 0.1s;
`;

const TimelineItem = styled.div`
  // // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0,0,0);
  transform: translateZ(0);

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  background: rgb(41, 59, 98);
  background: -moz-linear-gradient(90deg, rgba(41,59,98,1) 0%, rgba(73,59,88,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(41,59,98,1) 0%, rgba(73,59,88,1) 100%);
  background: linear-gradient(
    90deg,
    rgba(41, 59, 98, 0.6) 0%,
    rgba(73, 59, 88, 0.6) 100%
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

const Arrow = styled.div<{ pseudoPosition: 'right' | 'left' }>`
  height: 1px;
  width: 90px;
  border: 1px solid white;
  position: relative;

  &:after {
    content: '';
    width: 16px;
    height: 16px;
    background-color: white;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    ${({ pseudoPosition }) => pseudoPosition + ': -10px;'}
  }
`;

const Date = styled.div`
  padding: 28px;
`;

const DateText = styled.p`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 8px;
  transform: translate3d(0, 0, 0);
-ms-transform: translate3d(0, 0, 0);
`;

const arr = [
  {
    id: '1',
    text: 'Started my developer journey.',
    date: '05/2020 - still learning',
  },
  {
    id: '2',
    text: 'Programming Fundamentals with Python @SoftUni.',
    date: '05/2020 - 06/2020',
  },
  {
    id: '3',
    text: 'Started working with JavaScript, Html5, CSS and learning data-structures and algorithms.',
    date: '06/2020',
  },
  {
    id: '4',
    text: 'Game Development @Booost.',
    date: '02/2021 - 05/2021',
  },
  {
    id: '5',
    text: 'Started working with React, Redux and Typescript.',
    date: '05/2021',
  },
  {
    id: '6',
    text: 'Landed my first job as a web developer @Smule Inc.',
    date: '08/2021 - present',
  },
  {
    id: '7',
    text: 'The Complete Junior to Senior Web Developer Roadmap @Zero To Mastery Academy.',
    date: '10/2021 - 12/2021',
  },
];

const options = {
  root: document.body,
  rootMargin: '20px',
  threshold: 1.0,
};

export const Experience = () => {
  let leftItems: any[] = [];
  let rightItems: any[] = [];

  const textsRef = React.useRef<Record<string, HTMLElement | null>>(Object.fromEntries(arr.map(({ id }) => [id, null])));

  const [isVisible, setIsVisible] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const x = Object.fromEntries(entries.map(e => [e.target.id, e.isIntersecting]))
      requestAnimationFrame(() => setIsVisible(v => ({ ...v, ...x })))
    }, options);
    Object.values(textsRef.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, Object.values(textsRef.current));

  arr.forEach((el, i) => {
    if (i % 2 === 0) {
      leftItems.push(
        <TimelineCell
          id={el.id}
          justify="end"
          ref={(x) => x && (textsRef.current[el.id] = x)}
          key={`left${i}`}
          isVisible={isVisible[el.id]}
        >
          <TimelineItem>{el.text}</TimelineItem>
          <Arrow pseudoPosition="right" />
        </TimelineCell>
      );
      rightItems.push(
        <TimelineCell
          justify="start"
          key={`right${i}`}
          isVisible={true}
        >
          <Date>
            <DateText>{el.date}</DateText>
          </Date>
        </TimelineCell>
      );
    } else {
      leftItems.push(
        <TimelineCell
          justify="end"
          key={`left${i}`}
          isVisible={true}
        >
          <Date>
            <DateText>{el.date}</DateText>
          </Date>
        </TimelineCell>
      );
      rightItems.push(
        <TimelineCell
          id={el.id}
          ref={x => x && (textsRef.current[el.id] = x)}
          justify="start"
          key={`right${i}`}
          isVisible={isVisible[el.id]}
        >
          <Arrow pseudoPosition="left" />
          <TimelineItem>{el.text}</TimelineItem>
        </TimelineCell>
      );
    }
  });

  return (
    <Section>
      <h1>EXPERIENCE & EDUCATION</h1>
      <TimelineWrapper>
        <TimelineColumn border="right">{leftItems}</TimelineColumn>
        <TimelineColumn border="left">{rightItems}</TimelineColumn>
      </TimelineWrapper>
    </Section>
  );
};
