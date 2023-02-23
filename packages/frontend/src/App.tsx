import { Outlet } from 'react-router-dom';
import { AgentModal, Footer, Header } from './components';

const App: React.FC = () => {
  return (
    <div className="container">
      <AgentModal />

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
