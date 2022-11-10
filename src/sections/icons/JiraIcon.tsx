function JiraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="70"
      height="70"
    >
      <defs>
        <linearGradient id="A" gradientUnits="userSpaceOnUse">
          <stop offset="0.18" stopColor="#0052cc"></stop>
          <stop offset="1" stopColor="#2684ff"></stop>
        </linearGradient>
        <linearGradient
          id="B"
          x1="42.023"
          x2="44.133"
          y1="35.232"
          y2="33.122"
          xlinkHref="#A"
        ></linearGradient>
        <linearGradient
          id="C"
          x1="41.464"
          x2="39.35"
          y1="29.159"
          y2="31.273"
          xlinkHref="#A"
        ></linearGradient>
      </defs>
      <path
        fill="#2684ff"
        d="M46.568 31.918l-4.834-4.834-4.834 4.834a.406.406 0 000 .573l4.834 4.834 4.834-4.834a.406.406 0 000-.573zm-4.834 1.8l-1.514-1.514 1.514-1.514 1.514 1.514z"
        transform="matrix(6.24959 0 0 6.24959 -228.821 -169.263)"
      ></path>
      <path
        fill="url(#C)"
        d="M41.734 30.7a2.549 2.549 0 01-.011-3.594L38.4 30.408l1.803 1.803z"
        transform="matrix(6.24959 0 0 6.24959 -228.821 -169.263)"
      ></path>
      <path
        fill="url(#B)"
        d="M43.252 32.2l-1.518 1.518a2.549 2.549 0 010 3.606l3.32-3.32z"
        transform="matrix(6.24959 0 0 6.24959 -228.821 -169.263)"
      ></path>
    </svg>
  );
}

export default JiraIcon;
