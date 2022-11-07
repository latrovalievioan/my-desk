import styled from "styled-components"
import Cv from '../assets/Cv';
import GitHub from '../assets/GitHub';
import LinkedIn from '../assets/LinkedIn';

const Wrapper = styled.div`
background: -moz-linear-gradient(138deg, rgba(42,38,227,1) 0%, rgba(237,141,98,1) 48%, rgba(187,25,104,1) 100%);
background: -webkit-linear-gradient(138deg, rgba(42,38,227,1) 0%, rgba(237,141,98,1) 48%, rgba(187,25,104,1) 100%);
background: linear-gradient(138deg, rgba(42,38,227,1) 0%, rgba(237,141,98,1) 48%, rgba(187,25,104,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2a26e3",endColorstr="#bb1968",GradientType=1);1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  background-image: url('/profile.jpeg');
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 50%;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 50px;
`;

const Link = styled.a`
  cursor: pointer;
`;

export const Mobile = () => {
  return (
    <Wrapper>
      <ImageWrapper/>
      <h5>Ioan Latrovaliev</h5>
      <h6>Web Developer</h6>
      <IconsWrapper>
        <Cv />
        <Link href="https://github.com/latrovalievioan">
          <GitHub />
        </Link>
        <Link href="https://www.linkedin.com/in/latrovalievioan/">
          <LinkedIn />
        </Link>
      </IconsWrapper>
      <h6>Visit the page on a larger screen for the best experience.</h6>
    </Wrapper>
  )
}
