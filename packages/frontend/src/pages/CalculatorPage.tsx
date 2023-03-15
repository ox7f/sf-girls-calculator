import { Agents, Results, TargetSelect } from '../components';

const CalculatorPage: React.FC = () => {
  return (
    <div>
      <div className="mx-1 pt-10">
        <TargetSelect viewName="calculator" />
      </div>

      <div className="default-layout tree-nav-body mx-auto mb-0">
        <Agents viewName="calculator" />

        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main className="page-layout">
            <Results viewName="calculator" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
