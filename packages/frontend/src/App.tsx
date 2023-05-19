import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AgentModal } from './components/agent';
import { Footer, Header } from './components/layout';

export const App: FC = () => {
  return (
    <div className="container">
      <AgentModal />
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
