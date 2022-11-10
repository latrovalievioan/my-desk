import React, { forwardRef } from 'react';
import { About } from './sections/About';
import { Home } from './sections/Home';
import { Scroll } from './styled/Scroll';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { LoadingBar } from './LoadingBar';
import { Contacts } from './sections/Contacts';
import { Icons } from './Icons';
import {Experience} from './sections/Experience';

const Overlay = forwardRef(
  (
    { scroll, haveAssetsLoaded }: { scroll: any; haveAssetsLoaded: boolean },
    ref: any
  ) => {
    const scrollHelperRef = React.useRef<any>();
    return (
      <Scroll
        ref={ref}
        onScroll={(e: any) => {
          scroll.current =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
          if (scrollHelperRef.current.getBoundingClientRect().y < 600)
            scrollHelperRef.current.style.opacity = '0';
          else scrollHelperRef.current.style.opacity = '1';
        }}
      >
        {haveAssetsLoaded ? (
          <>
            <Icons />
            <Home ref={scrollHelperRef} />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contacts />
            <div style={{ height: '100vh', border: '1px solid red' }}>
              <div className="dot">
                <h1>Credits</h1>
              </div>
            </div>
          </>
        ) : (
          <LoadingBar />
        )}
      </Scroll>
    );
  }
);

export default Overlay;
