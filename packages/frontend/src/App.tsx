import { Footer, Header } from './components/UI';
import { Agents, Targets, Result } from './components';

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <Header />

      <main>
        <Result />
        <Targets />
        <Agents />
      </main>

      <Footer />
    </div>
  );
};

export default App;
