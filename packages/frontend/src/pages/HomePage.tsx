import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export const HomePage: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [fadeIn, setFadeIn] = useState(false);
  const [index, setIndex] = useState(0);

  const lastIndex = 4;
  const isMobile = width <= 768;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const animate = () => {
    setFadeIn(true);
    setTimeout(() => setFadeIn(false), 500);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= lastIndex ? 0 : newIndex);
    animate();
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const getAbout = () => {
    return (
      <div>
        <h1 className="headline-3 title uppercase text-dark pt-10">Hello Commander</h1>
        <p className={`${isMobile ? 'text-md' : 'text-lg'} leading-looser-md tracking-looser-md pt-5 mx-10-md`}>
          Here you'll find an easy-to-use calculator that is designed to make experimenting with different teams in
          <a href="https://www.nutaku.net/games/sf-girls" target="_blank">
            {' SF Girls '}
          </a>
          easy and accessible.
          <br />
          Our user-friendly calculator allows you to enter your agent's stats, select up to six agents, and a target,
          and instantly receive accurate results based on your selections. Additionally, our teamfinder feature allows
          you to select up to 20 agents and it will calculate the strongest team for you. With our user-friendly
          interface and powerful algorithms, finding the perfect team is just a few clicks away!
          <br />
          We strive to provide up-to-date information and accurate calculations to help you improve your gameplay. If
          you have any feedback or suggestions, please don't hesitate to contact us.
        </p>
      </div>
    );
  };

  const getInfo = () => {
    return (
      <div>
        <h1 className="headline-3 title uppercase text-dark pt-10">Info</h1>
        <p className={`${isMobile ? 'text-md' : 'text-lg'} leading-looser-md tracking-looser-md pt-5 mx-10-md`}>
          Please note that this calculator is designed to provide an estimate of damage output in the game. It takes
          into account various factors such as skills that apply self or team buffs, debuffs, damage and damage over
          time effects, number of projectiles per attack, skill cast time and projectile speed. However, it does not
          include seekers, runes, evo tree, and other game mechanics.
          <br />
          Finally, please note that specific data on most agents may not be available or accurate. As such, the results
          provided should be taken as a rough guide rather than an absolute measure of damage output.
        </p>
      </div>
    );
  };

  const getChangelog = () => {
    return (
      <div>
        <h1 className="headline-3 title uppercase text-dark pt-10">Changelog</h1>
        <p className={`${isMobile ? 'text-md' : 'text-lg'} leading-looser-md tracking-looser-md pt-5 mx-10-md`}>TODO</p>
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

  const getContent = () => {
    switch (index) {
      case 1:
        return getInfo();
      case 2:
        return getChangelog();
      case 3:
        return getDisclaimer();
      default:
        return getAbout();
    }
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
          backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
        }}
      ></div>

      <div className="u-absolute u-z-0 hero fullscreen hero-img parallax-img">
        <div className="hero-body animated fadeIn">
          <div className={`content u-text-center ${fadeIn ? 'animated fadeIn' : ''}`}>
            {getContent()}

            <button className="btn btn-transparent " onClick={handleNext}>
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
