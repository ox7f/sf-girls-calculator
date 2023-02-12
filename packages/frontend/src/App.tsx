import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
