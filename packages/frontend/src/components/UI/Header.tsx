import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const visitHome = () => {
    navigate('/');
  };

  const menuItems = [
    {
      to: 'agents',
      name: 'Agents'
    },
    {
      to: 'calculator',
      name: 'Calculator'
    },
    {
      to: 'teamfinder',
      name: 'Teamfinder'
    }
  ];

  return (
    <header>
      <div className="header header-fixed u-unselectable header-animated">
        <div className="header-brand">
          <div className="nav-item no-hover">
            <a onClick={visitHome}>
              <h6 className="title">SF Girls Calculator</h6>
            </a>
          </div>

          <div className="nav-item nav-btn" id="header-btn" onClick={toggleHamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`header-nav ${isOpen ? 'active' : ''}`} id="header-menu">
          <div className="nav-left">
            <div className="nav-item text-center">
              <a href="https://github.com/ox7f/sf-girls-calculator" target="_blank">
                <span className="icon">
                  <FaGithub />
                </span>
              </a>
            </div>

            {menuItems.map((menuItem, index) => (
              <div className="nav-item text-center" key={index}>
                <Link to={menuItem.to} key={menuItem.name}>
                  <span>{menuItem.name}</span>
                </Link>
              </div>
            ))}
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
    </header>
  );
};

export default Header;
