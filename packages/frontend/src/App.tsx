import { signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';

import { AgentModal, ErrorMessage, Footer, Header, Spinner } from './components';
import { auth } from './firebase';

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  console.log('user', user);

  const initializeApp = async () => {
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

export default App;
