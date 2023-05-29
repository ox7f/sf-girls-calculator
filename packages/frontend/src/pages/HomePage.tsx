import { FC } from 'react';
import { Showcase } from '../components/common';

const items = [
  {
    title: 'Hello Commander',
    description: (
      <>
        Here you'll find an easy-to-use calculator that is designed to make experimenting with different teams in
        <a href="https://www.nutaku.net/games/sf-girls" target="_blank">
          {' SF Girls '}
        </a>
        easy and accessible.
        <br />
        <br />
        Our user-friendly calculator allows you to enter your agent's stats and instantly receive accurate results based
        on your selections. With our user-friendly interface and powerful algorithms, finding the perfect team is just a
        few clicks away!
        <br />
        <br />
        We strive to provide up-to-date information and accurate calculations. If you have any feedback or suggestions,
        please don't hesitate to contact us.
      </>
    )
  },
  {
    title: 'Info',
    description: (
      <>
        Please note that this calculator is designed to provide an estimate of damage output in the game. It takes into
        account various factors such as skills that apply self or team buffs, debuffs, damage and damage over time
        effects, number of projectiles per attack, skill cast time and projectile speed. However, it does not include
        seekers, runes, and other game mechanics.
        <br />
        <br />
        Finally, please note that specific data on most agents and game mechanics may not be available or accurate. As
        such, the results provided should be taken as a rough guide.
      </>
    )
  },
  {
    title: 'Disclaimer',
    description: (
      <>
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
        <br />
        This website is client-sided, meaning we don't save any data on a server or collect personal information from
        users. Our website is for informational and educational purposes only and doesn't provide any professional
        advice or services. If you believe any image has been used without proper attribution, please contact us to
        rectify the situation.
      </>
    )
  },
  {
    title: 'Changelog',
    description: (
      <>
        <ul className="no-bullets">
          <li>
            <strong>
              <time dateTime="2023-05-15">{new Date(2023, 4, 15).toLocaleDateString()}</time>
            </strong>
            : Release Version 0.0.1
          </li>
          <li>
            <strong>
              <time dateTime="2023-05-31">{new Date(2023, 4, 31).toLocaleDateString()}</time>
            </strong>
            : Includes now Sora X, Yukako X and Sally
            <br />
            Shows results, including the increase or decrease compared to the previous result
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Upcoming Features',
    description: (
      <>
        <ul className="no-bullets">
          <li>New Target: Ditto</li>
          <li>Seekers</li>
          <li>Runes</li>
          <li>Rune-Finder Tool (Helps you find the best rune-sets)</li>
          <li>Editable Skill</li>
        </ul>
      </>
    )
  }
];

export const HomePage: FC = () => {
  return (
    <main>
      <div
        className="hero fullscreen hero-img parallax-img"
        style={{
          opacity: 0.15,
          backgroundColor: 'rgb(229, 229, 247)',
          backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, white 1px)',
          backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
          backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
        }}
      />

      <div className="u-absolute u-z-0 hero fullscreen hero-img parallax-img">
        <div className="hero-body animated fadeIn">
          <div className="content u-text-center">
            <Showcase items={items} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
