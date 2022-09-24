import React, { forwardRef } from 'react';
import './Home.css';
import PointDownIcon from './icons/PointDownIcon';

export const Home = forwardRef(({ ...props }, ref: any) => {
  return (
    <div id="home" className="dot">
      <div id="homeWrapper">
        <div id="welcome">Welcome to</div>
        <div id="title">IOAN'S DESK</div>
      </div>
      <div id="scrollHelper" ref={ref}>
        scroll to see some magic
        <PointDownIcon />
      </div>
    </div>
  );
});
