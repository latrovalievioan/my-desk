import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    bottom 30px;
  }
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 30px;
  }
`;

export const ScrollTooltip = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${bounce} 1.3s ease-in-out infinite;
  transition: 0.1s;
`;
