import React, { forwardRef } from 'react';
import { About } from './sections/About';
import { Home } from './sections/Home';
import { Scroll } from './styled/Scroll';
const Overlay = forwardRef(({ scroll }: { scroll: any }, ref: any) => {
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
      <Home ref={scrollHelperRef} />
      <About />
      <div style={{ height: '100vh', border: '1px solid red' }}>
        <div className="dot">
          <h1>Skills</h1>
        </div>
      </div>
      <div style={{ height: '100vh', border: '1px solid red' }}>
        <div className="dot">
          <h1>Projects</h1>
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
    </Scroll>
  );
});

export default Overlay;
