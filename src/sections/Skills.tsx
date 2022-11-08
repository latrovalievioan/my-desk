import styled from 'styled-components';
import { Section } from '../styled/Section';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Star from '../assets/Star';
import Study from '../assets/Study';

const ExtendedSection = styled(Section)`
  height: 200vh;
`;

export const Skills = () => {
  return (
    <ExtendedSection>
      <h1>EXPERIENCE & EDUCATION</h1>
      <VerticalTimeline animate>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="05/2020 - present"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Star />}
        >
          Started my developer journey.
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="05/2020 - 06/2020"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Study />}
        >
          Programming Fundamentals with Python @SoftUni.
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="06/2020"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Study />}
        >
          Started learning JavaScript, Html5, CSS and algorithms.
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="02/2021 - 05/2021"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Study />}
        >
          Game Development @Booost.
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="05/2021"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Study />}
        >
          Started learning React, Redux and Typescript.
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="08/2021 - present"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Star />}
        >
          Landed my first job as a web developer @Smule Inc.
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: 'white',
            borderRadius: '50px',
            background:
              'linear-gradient(90deg, rgba(116, 205, 255, 0.6) 0%, rgba(255, 200, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'none',
          }}
          date="10/2021 - 12/2021"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<Study />}
        >
          The Complete Junior to Senior Web Developer Roadmap @Zero To Mastery Academy.
        </VerticalTimelineElement>
      </VerticalTimeline>
    </ExtendedSection>
  );
};
