import { FC, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Calculator', to: '/calculator' },
  { name: 'Teamfinder', to: '/teamfinder' }
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div id="header" className="header header-animated u-unselectable u-sticky u-top-0">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h6 className="title">SF Girls Calculator</h6>
          </Link>
        </div>

        <div className="nav-item nav-btn" id="header-btn" onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="header-menu" className={`header-nav ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="nav-left">
          <div className="nav-item">
            <Link to="https://github.com/ox7f/sf-girls-calculator" target="_blank">
              <span className="icon">
                <FaGithub />
              </span>
            </Link>
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
          <div className="nav-item ">
            <Link to="https://www.buymeacoffee.com/ox7f" target="_blank">
              <img src="/buymeacoffee.png" alt="Buy Me A Coffee" style={{ height: '36px', width: '130px' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
