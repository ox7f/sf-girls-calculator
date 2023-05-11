import { FC, Suspense, lazy } from 'react';
import { Spinner } from '../components/common';

export { ErrorBoundary } from './ErrorBoundary';

const HomePage = lazy(() => import('./HomePage'));
const CalculatorPage = lazy(() => import('./CalculatorPage'));
const TeamfinderPage = lazy(() => import('./TeamfinderPage'));

export const Home: FC = () => (
  <Suspense fallback={<Spinner />}>
    <HomePage />
  </Suspense>
);

export const Calculator: FC = () => (
  <Suspense fallback={<Spinner />}>
    <CalculatorPage />
  </Suspense>
);

export const Teamfinder: FC = () => (
  <Suspense fallback={<Spinner />}>
    <TeamfinderPage />
  </Suspense>
);
