import { Footer, Header } from './components/UI';
import { Agents, Targets, Result } from './components';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <div className="container">
        <main>
          <Result />
          <Targets />
          <Agents />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default App;
