import { Footer, Header } from './components/UI';
import { Agents, Targets, Result } from './components';

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="container" style={{ paddingTop: '5rem' }}>
        <main>
          <Result />
          <Targets />
          <Agents />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
