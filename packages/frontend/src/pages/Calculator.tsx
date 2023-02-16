import { AgentsSelect, Options, Result } from '../components';

const Calculator: React.FC = () => {
  return (
    <main>
      <Options />

      <div className="row">
        <div className="col-2">
          <AgentsSelect />
        </div>

        <div className="col-10">
          <Result />
        </div>
      </div>
    </main>
  );
};

export default Calculator;
