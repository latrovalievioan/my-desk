import styled from 'styled-components';
import Cv from './assets/Cv';
import GitHub from './assets/GitHub';
import LinkedIn from './assets/LinkedIn';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 16px;
  z-index: 1;
  gap: 8px;
  width: 40px;
  align-items: center;
`;

const Link = styled.a`
  cursor: pointer;
`;

export const Icons = () => {
  return (
    <Stack>
      <Cv />
      <Link href="https://github.com/latrovalievioan" target="_blank">
        <GitHub />
      </Link>
      <Link href="https://www.linkedin.com/in/latrovalievioan/" target="_blank">
        <LinkedIn />
      </Link>
    </Stack>
  );
};
