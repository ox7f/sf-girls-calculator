import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeaderBrand from './HeaderBrand';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Calculator', to: 'calculator' },
    { name: 'Teamfinder', to: 'teamfinder' }
  ];

  return (
    <div id="header" className="header header-animated header-fixed unselectable">
      <HeaderBrand toggle={toggleHamburger} />

      <div id="header-menu" className={`header-nav ${isOpen ? 'active' : ''}`}>
        <div className="nav-left">
          <div className="nav-item">
            <a href="https://github.com/ox7f/sf-girls-calculator" target="_blank">
              <span className="icon">
                <FaGithub />
              </span>
            </a>
          </div>

          {menuItems.map((menuItem) => (
            <div className="nav-item" key={menuItem.name}>
              <Link to={menuItem.to}>
                <span>{menuItem.name}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="nav-right">
          <div className="nav-item u-justify-flex-end">
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
