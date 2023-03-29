import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

export const withAuth = (Component: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const [user] = useAuthState(auth);

    // Redirect unauthenticated users to the authentication page
    if (!user) {
      return <Navigate to="/authenticate" replace />;
    }

    // Render the component for authenticated users
    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};
