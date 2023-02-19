import { AgentsSelect, Options, Result } from '../components';

const Calculator: React.FC = () => {
  return (
    <>
      <div className="mx-1 pt-10">
        <Options />
      </div>

      <div className="default-layout tree-nav-body mx-auto mb-0">
        <AgentsSelect />

        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main className="page-layout">
            <Result />
          </main>
        </div>
      </div>
    </>
  );
};

export default Calculator;
