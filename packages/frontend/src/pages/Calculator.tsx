import { AgentsSelect, Options, Result } from '../components';

const Calculator: React.FC = () => {
  return (
    <main>
      <article>
        <div className="grid u-gap-2">
          <div className="grid-c-12">
            <Options />
          </div>

          <div className="grid-c-2 grid-r-1">
            <AgentsSelect />
          </div>

          <div className="grid-c-10 grid-r-1">
            <Result />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Calculator;
