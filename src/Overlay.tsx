import { forwardRef } from 'react';
import { Home } from './sections/Home';
const Overlay = forwardRef(({ scroll }: { scroll: any }, ref: any) => (
  <div
    ref={ref}
    onScroll={(e: any) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
    }}
    className="scroll"
  >
    <Home />
    <div style={{ height: '100vh', border: '1px solid red' }}>
      <div className="dot">
        <h1>About</h1>
      </div>
    </div>
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
  </div>
));

export default Overlay;
