import React from "react";

function NeovimIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <defs>
        <linearGradient
          id="A"
          x1="22.625"
          x2="22.625"
          y1="-0.173"
          y2="211.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#16b0ed" stopOpacity="0.8"></stop>
          <stop offset="100%" stopColor="#0f59b2" stopOpacity="0.837"></stop>
        </linearGradient>
        <linearGradient
          id="B"
          x1="152.09"
          x2="152.09"
          y1="-0.148"
          y2="211.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7db643"></stop>
          <stop offset="100%" stopColor="#367533"></stop>
        </linearGradient>
        <linearGradient
          id="C"
          x1="87.475"
          x2="87.475"
          y1="-0.137"
          y2="212.054"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#88c649" stopOpacity="0.8"></stop>
          <stop offset="100%" stopColor="#439240" stopOpacity="0.84"></stop>
        </linearGradient>
      </defs>
      <g fillRule="evenodd">
        <path
          fill="url(#A)"
          d="M.027 45.46L45.224-.173v212.17L.027 166.894z"
          transform="matrix(.30156 0 0 .30156 5.613 .052)"
        ></path>
        <path
          fill="url(#B)"
          d="M129.337 45.89L175.152-.148l-.93 212.147-45.197-45.104z"
          transform="matrix(.30156 0 0 .30156 5.613 .052) matrix(-1 0 0 1 304 0)"
        ></path>
        <path
          fill="url(#C)"
          d="M45.194-.137l117.506 179.3-32.882 32.88L12.25 33.14z"
          transform="matrix(.30156 0 0 .30156 5.613 .052)"
        ></path>
        <path
          fillOpacity="0.13"
          d="M45.234 83.032l-.062 7.063L8.89 36.532l3.36-3.422z"
          transform="matrix(.30156 0 0 .30156 5.613 .052)"
        ></path>
      </g>
    </svg>
  );
}

export default NeovimIcon;
