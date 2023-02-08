const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ paddingTop: 0, paddingBottom: 10 }}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <ul className="no-bullets">
            <a href="https://github.com/ox7f/sf-girls-calculator" className="secondary">
              <li className="footer__list-item">Source code</li>
            </a>
          </ul>
        </div>
      </div>
      <p className="subtitle">stayin' alive since 2023.</p>
    </footer>
  );
};

export default Footer;
