import { signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';

import { auth } from './firebase';
import { AgentModal } from './components/agent';
import { ErrorMessage, Spinner } from './components/common';
import { Footer, Header } from './components/layout';

export const App: React.FC = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const initializeApp = async () => {
    return;
    if (!user) {
      try {
        await signInAnonymously(auth);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    initializeApp();
  }, [user]);

  return (
    <div className="container">
      {isLoading && <Spinner />}
      <ErrorMessage message={error} />

      {!isLoading && (
        <>
          <AgentModal />
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};
