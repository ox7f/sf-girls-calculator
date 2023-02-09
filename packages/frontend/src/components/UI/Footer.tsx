const Footer: React.FC = () => {
  return (
    <footer
      className="footer px-2"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(177,177,177,1) 100%)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <h6 className="footer__title uppercase">SF Girls Calculator</h6>
      <p className="subtitle">
        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website
        content is licensed{' '}
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0
        </a>
        .
      </p>
      Made with ❤️ by{' '}
      <a href="https://github.com/ox7f" target="_blank">
        Dalberg
      </a>
    </footer>
  );
};

export default Footer;
