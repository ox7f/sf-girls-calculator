import { useNavigate } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

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
      <div className="placeholder u-overlay">
        <div className="u-center-alt">
          <div className="placeholder-icon">
            <span className="icon">
              <FaCoffee size="50" />
            </span>
          </div>
          <h6 className="placeholder-title">Oops!</h6>
          <div className="placeholder-subtitle">Sorry, an unexpected error has occurred.</div>
          <div className="placeholder-commands u-center">
            <div className="m-1" onClick={refreshPage}>
              <button className="btn-primary">Refresh</button>
            </div>
            <div className="m-1" onClick={visitHome}>
              <button>Home</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
