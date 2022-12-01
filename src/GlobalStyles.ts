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
    margin: 0;
  }
  h2 {
    font-weight: 800;
    font-size: 40px;
    margin: 0;
  }
  
  h3 {
    font-weight: 800;
    font-size: 25px;
    line-height: 40px;
    margin: 0;
  }

  h4 {
    font-weight: 800;
    font-size: 25px;
    margin: 0;
  }

  h5 {
    font-weight: 600;
    font-size: 25px;
    line-height: 40px;
    margin: 0;
  }

  h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin: 0;
  }

  p {
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
  }
`;
