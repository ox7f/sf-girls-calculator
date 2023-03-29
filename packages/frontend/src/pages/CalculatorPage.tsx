import { useSetAtom } from 'jotai';

import { CurrentViewAtom } from '../atoms';
import { Agents, Results, TargetSelect } from '../components';

const CalculatorPage: React.FC = () => {
  useSetAtom(CurrentViewAtom)('calculator');

  return (
    <div>
      <div className="mx-1 pt-10">
        <TargetSelect />
      </div>

      <div className="default-layout tree-nav-body mx-auto mb-0">
        <Agents viewName="calculator" />

        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main className="page-layout">
            <Results />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
