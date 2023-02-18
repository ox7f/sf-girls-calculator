import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
