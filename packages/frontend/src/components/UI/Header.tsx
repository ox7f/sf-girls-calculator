import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const visitHome = () => {
    navigate('/');
  };

  return (
    <div className="header header-fixed u-unselectable header-animated">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <a onClick={visitHome}>
            <h6 className="title">SF Girls Calculator</h6>
          </a>
        </div>
      </div>

      <div className="header-nav" id="header-menu">
        <div className="nav-left">
          <div className="nav-item text-center">
            <a href="https://github.com/ox7f/sf-girls-calculator" target="_blank">
              <FaGithub />
              <span style={{ paddingLeft: '10px' }}>WIP</span>
            </a>
          </div>
          <div className="nav-item text-center">
            <Link to="about">
              <span>About</span>
            </Link>
          </div>
          <div className="nav-item text-center">
            <Link to="calculator">
              <span>Calculator</span>
            </Link>
          </div>
          <div className="nav-item text-center">
            <Link to="error">
              <span>Error</span>
            </Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <a href="https://www.buymeacoffee.com/ox7f" target="_blank">
              <img src="/buymeacoffee.png" alt="Buy Me A Coffee" style={{ height: '36px', width: '130px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
