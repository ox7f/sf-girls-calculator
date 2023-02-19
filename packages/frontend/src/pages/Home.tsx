import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Home: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [fadeIn, setFadeIn] = useState(false);
  const [index, setIndex] = useState(0);
  const length = 2;
  const isMobile = width <= 768;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    animate();
  };

  const animate = () => {
    setFadeIn(true);
    setTimeout(() => setFadeIn(false), 500);
  };

  const getAbout = () => {
    return (
      <div>
        <h1 className="headline-3 title uppercase text-dark pt-10">Hello Commander</h1>
        <p className={`${isMobile ? 'text-md' : 'text-lg'} leading-looser-md tracking-looser-md pt-5 mx-10-md`}>
          Here you'll find an easy-to-use calculator for the game{' '}
          <a href="https://www.nutaku.net/games/sf-girls" target="_blank">
            SF Girls
          </a>{' '}
          that helps you maximize your gameplay potential by providing accurate damage calculations based on your
          agent's stats.
          <br />
          The calculator requires you to enter your agent's stats, select the agents and target, and with a click,
          you'll receive a detailed damage report. Additionally, our teamfinder feature allows you to select up to 20
          agents and it will calculate the strongest team for you. With our user-friendly interface and powerful
          algorithms, finding the perfect team is just a few clicks away!
          <br />
          We strive to provide up-to-date information and accurate calculations to help you improve your gameplay. If
          you have any feedback or suggestions, please don't hesitate to contact us.
        </p>
      </div>
    );
  };

  const getDisclaimer = () => {
    return (
      <div>
        <h1 className="headline-3 title uppercase text-dark pt-10">Disclaimer</h1>
        <p className={`${isMobile ? 'text-md' : 'text-lg'} leading-looser-md tracking-looser-md pt-5 mx-10-md`}>
          All images used on this website are sourced from the{' '}
          <a href="https://www.nutaku.net/games/sf-girls" target="_blank">
            Game
          </a>
          {' and '}
          <a href="https://sfgirls.fandom.com/wiki/SFGirls_Wiki" target="_blank">
            Wiki
          </a>{' '}
          under the{' '}
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0
          </a>{' '}
          license. We give proper attribution to the original creator of each image and only use them for non-commercial
          purposes to enhance the user experience.
          <br />
          This website is client-sided, meaning we don't save any data on a server or collect personal information from
          users. Our website is for informational and educational purposes only and doesn't provide any professional
          advice or services. If you believe any image has been used without proper attribution, please contact us to
          rectify the situation.
        </p>
      </div>
    );
  };

  return (
    <main>
      <div
        className="hero fullscreen hero-img parallax-img"
        style={{
          opacity: 0.1,
          backgroundColor: 'rgb(229, 229, 247)',
          backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, white 1px)',
          backgroundSize: '75px 75px, 75px 75px, 10px 10px, 10px 10px',
          backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px;'
        }}
      ></div>

      <div className="u-absolute u-z-0 hero fullscreen hero-img parallax-img">
        <div className="hero-body animated fadeIn">
          <div className={`content u-text-center ${fadeIn ? 'animated fadeIn' : ''}`}>
            {index === 0 ? getAbout() : getDisclaimer()}

            <button className="btn btn-transparent " onClick={handleNext}>
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
