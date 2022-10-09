import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* user-select: none; */
    overflow: hidden;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    overflow: auto;
  }

  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    background-color: #0c030c;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 45px;
    letter-spacing: 0.39em;
    font-weight: 400;
  }
  h2 {
    font-weight: 800;
    font-size: 45px;
    border-bottom: 3px solid white;
  }
  
  h3 {
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
    border-bottom: 2px solid white;
  }

  h4 {
    font-weight: 800;
    font-size: 25px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }
`;
