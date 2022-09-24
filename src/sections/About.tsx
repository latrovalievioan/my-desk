import './About.css';

export const About = () => {
  return (
    <div id="about" className="dot">
      <div id="aboutWrapper">
        <div id="aboutTitleWrapper">
          <h1>ABOUT</h1>
        </div>
        <div id="aboutInfoWrapper">
          <div id="aboutInfoCard" className="glassMorphic">
            <h1>
              Hello, my name is Ioan <br /> Latrovaliev{' '}
            </h1>
            <p>
              I'm a 26-year-old web developer who enjoys creating things for the web.
            </p>
            <p>
              I'm a developer who loves to learn and experiment. Despite my preference for the front end, I enjoy solving algorithmic tasks in my spare time. I'm also one of those oddballs who use VIM.
            </p>
            <p>
              When I'm not at the computer, you can find me playing jazz on my violin.
            </p>
            <p>
              I am currently employed as a web engineer at Smule, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
