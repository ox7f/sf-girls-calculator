import { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { auth } from '../../firebase';

const menuItems = [
  { name: 'Calculator', to: '/calculator' },
  { name: 'Teamfinder', to: '/teamfinder' }
];

export const Header: React.FC = () => {
  const user = true;
  // const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => setIsOpen(!isOpen);

  return (
    <div id="header" className="header header-animated header-fixed unselectable">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <Link to="/">
            <h6 className="title">SF Girls Calculator</h6>
          </Link>
        </div>

        <div className="nav-item nav-btn" id="header-btn" onClick={toggleHamburger}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="header-menu" className={`header-nav ${isOpen ? 'active' : ''}`}>
        <div className="nav-left">
          <div className="nav-item">
            <Link to="https://github.com/ox7f/sf-girls-calculator" target="_blank">
              <span className="icon">
                <FaGithub />
              </span>
            </Link>
          </div>

          {user &&
            menuItems.map((menuItem) => (
              <div className="nav-item" key={menuItem.name}>
                <Link to={menuItem.to}>
                  <span>{menuItem.name}</span>
                </Link>
              </div>
            ))}
        </div>

        <div className="nav-right">
          {/* <div className="nav-item u-justify-flex-end">
            {user ? (
              <a className="sign-out" onClick={() => auth.signOut()}>
                Sign out
              </a>
            ) : (
              <Link to="/authenticate">
                <span>Sign in</span>
              </Link>
            )}
          </div> */}

          <div className="nav-item u-justify-flex-end no-hover">
            <a href="https://www.buymeacoffee.com/ox7f" target="_blank">
              <img src="/buymeacoffee.png" alt="Buy Me A Coffee" style={{ height: '36px', width: '130px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
