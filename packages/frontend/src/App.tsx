import { Outlet } from 'react-router-dom';
import { AgentModal } from './components/agent';
import { Footer, Header } from './components/layout';

export const App: React.FC = () => {
  return (
    <div className="container">
      <AgentModal />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
