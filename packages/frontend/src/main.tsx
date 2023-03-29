import 'cirrus-ui';

import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { AuthPage, CalculatorPage, ErrorPage, HomePage, TeamfinderPage } from './pages';
import { withAuth } from './withAuth';

const ProtectedCalculator = withAuth(CalculatorPage);
const ProtectedTeamfinder = withAuth(TeamfinderPage);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/authenticate', element: <AuthPage /> },
      { path: '/calculator', element: <ProtectedCalculator /> },
      { path: '/teamfinder', element: <ProtectedTeamfinder /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
