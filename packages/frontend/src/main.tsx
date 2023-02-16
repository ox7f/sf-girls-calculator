import 'cirrus-ui';

import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { AboutPage, AgentsPage, CalculatorPage, ErrorPage, HomePage, TeamfinderPage } from './pages';

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
        path: 'about',
        element: <AboutPage />
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
