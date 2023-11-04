import React from "react";

function TailwindIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <defs>
        <linearGradient
          id="A"
          x1="0"
          x2="64"
          y1="-21.333"
          y2="85.333"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2383ae"></stop>
          <stop offset="100%" stopColor="#6dd7b9"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#A)"
        fillRule="evenodd"
        d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
      ></path>
    </svg>
  );
}

export default TailwindIcon;
