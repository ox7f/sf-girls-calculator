import 'cirrus-ui';

import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { AgentsPage, CalculatorPage, ErrorPage, HomePage, InfoPage, TeamfinderPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'info',
        element: <InfoPage />
      },
      {
        path: 'agents',
        element: <AgentsPage />
      },
      {
        path: 'calculator',
        element: <CalculatorPage />
      },
      {
        path: 'teamfinder',
        element: <TeamfinderPage />
      }
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
