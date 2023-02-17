const Home: React.FC = () => {
  return (
    <main>
      <article className="u-center u-text-center w-60p">
        <h3 className="uppercase">Hello Commander</h3>
        <p>
          This website provides a powerful and easy-to-use calculator for the game{' '}
          <a href="https://www.nutaku.net/games/sf-girls" target="_blank">
            SF Girls
          </a>
          ! This website is dedicated to helping you maximize your gameplay potential by offering accurate damage
          calculations based on your agents stats. To use the calculator, simply enter the stats of your agents after
          navigating tp the agents page. Once your stats are entered, navigate to the calculator page where you can
          select your agents and target. With a simple click, you'll receive a detailed damage report. This website also
          offers a teamfinder feature. With the teamfinder, you can select up to 20 agents and our website will
          calculate the strongest team for you. With our user-friendly interface and powerful algorithms, you'll be able
          to find the perfect team in no time!
        </p>

        <p>
          We strive to provide up-to-date information and accurate calculations to help you improve your gameplay. If
          you have any feedback or suggestions, please don't hesitate to contact us. We're always here to help you make
          the most out of your gaming experience.
        </p>
      </article>
    </main>
  );
};

export default Home;
