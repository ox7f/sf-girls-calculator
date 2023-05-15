import 'cirrus-ui';
import './index.scss';

import { Provider } from 'jotai';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { inject } from '@vercel/analytics';

import { App } from './App';
import { Calculator, ErrorBoundary, Home, Teamfinder } from './pages';

inject();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/calculator', element: <Calculator /> },
      { path: '/teamfinder', element: <Teamfinder /> }
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
