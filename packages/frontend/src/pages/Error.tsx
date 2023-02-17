import { useNavigate } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';
import { Button } from '../components/UI';

const Error: React.FC = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload();
  };

  const visitHome = () => {
    navigate('/');
  };

  return (
    <main>
      <article>
        <div className="placeholder u-overlay">
          <div className="u-center-alt">
            <div className="placeholder-icon">
              <span className="icon">
                <FaCoffee size="50" />
              </span>
            </div>

            <h6 className="placeholder-title">Oops!</h6>

            <div className="placeholder-subtitle">
              <p>Sorry, an unexpected error has occurred.</p>
            </div>

            <div className="placeholder-commands u-center">
              <div className="m-1" onClick={refreshPage}>
                <Button text="Refresh" type="btn-primary" />
              </div>
              <div className="m-1" onClick={visitHome}>
                <Button text="Home" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Error;
