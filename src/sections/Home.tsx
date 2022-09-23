import React from 'react';
import './Home.css';
import PointDownIcon from './icons/PointDownIcon';

export const Home = () => {
  const arrowRef = React.useRef<any>();

  return (
    <div style={{ height: '100vh', border: '1px solid red' }}>
      <div id="home" className="dot">
        <div id="homeWrapper">
          <div id="welcome">Welcome to</div>
          <div id="title">IOAN'S DESK</div>
        </div>
        <div id="scrollHelper" ref={arrowRef}>
          scroll to see some magic
          <PointDownIcon />
        </div>
      </div>
    </div>
  );
};
