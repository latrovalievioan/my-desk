import styled, { keyframes } from 'styled-components';

export const Bar = styled.div`
  width: 200px;
  height: 20px;
  border: 2px solid white;
  border-radius: 2em;
  position: relative;
  overflow: hidden;
`;


const bounce = keyframes`
  0% {
    left: 0;
  }

  50% {
    left: calc(100% - 50px);
  }

  100% {
    left: 0;
  }
`;

export const Loader = styled.div`
  width: 50px;
  height: 100%;
  border: 1px solid black;
  border-radius: 1em;
  position: absolute;
  left: 0;
  
  animation: ${bounce} 2s ease-in-out infinite;
  background: white;
`;
