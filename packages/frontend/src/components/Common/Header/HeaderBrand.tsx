import { useNavigate } from 'react-router-dom';

interface BrandProps {
  toggle: () => void;
}

const HeaderBrand: React.FC<BrandProps> = ({ toggle }) => {
  const navigate = useNavigate();
  const visitHome = () => navigate('/');

  return (
    <div className="header-brand">
      <div className="nav-item no-hover">
        <a onClick={visitHome}>
          <h6 className="title">SF Girls Calculator</h6>
        </a>
      </div>

      <div className="nav-item nav-btn" id="header-btn" onClick={toggle}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default HeaderBrand;
