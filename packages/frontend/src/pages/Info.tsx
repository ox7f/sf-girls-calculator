const Info: React.FC = () => {
  return (
    <main>
      <article className="u-center u-text-center w-60p">
        <h3 className="uppercase">DISCLAIMER:</h3>
        <p>
          We do not claim ownership of any of the images used on this website. All images have been sourced from the{' '}
          <a href="https://sfgirls.fandom.com/wiki/SFGirls_Wiki" target="_blank">
            Game Wiki
          </a>{' '}
          which is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0
          </a>
          ). We have complied with the terms of this license and give proper attribution to the original creator of each
          image. If you are the owner of any of the images used on this website and believe that it has been used
          without proper attribution, please contact us immediately and we will rectify the situation. The use of these
          images on our website is solely for non-commercial purposes and is meant to enhance the content and user
          experience of the website.
        </p>

        <p>
          Additionally, please note that this website is purely a frontend and does not save any data on a server. We do
          not collect or store any personal information from users. The use of this website is solely for informational
          and educational purposes and is not intended to provide any professional advice or services.
        </p>
      </article>
    </main>
  );
};

export default Info;
