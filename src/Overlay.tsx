import React, { forwardRef } from 'react';
import { Scroll } from './styled/Scroll';
import { LoadingBar } from './LoadingBar';
import {About} from './sections/About';
import {Skills} from './sections/Skills';

const Overlay = forwardRef(
  (
    { scroll, haveAssetsLoaded }: { scroll: any; haveAssetsLoaded: boolean },
    ref: any
  ) => {
    return (
      <Scroll
        ref={ref}
        onScroll={(e: any) => {
          scroll.current =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        }}
      >
        {haveAssetsLoaded ? (
          <>
            <div style={{ height: '100vh', border: '1px solid red' }}>
              <div className="dot">
                <h1>Contact</h1>
              </div>
            </div>
            <About/>
            <Skills/>
            <div style={{ height: '100vh', border: '1px solid red' }}>
              <div className="dot">
                <h1>Contact</h1>
              </div>
            </div>
            <div style={{ height: '100vh', border: '1px solid red' }}>
              <div className="dot">
                <h1>Contact</h1>
              </div>
            </div>
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
