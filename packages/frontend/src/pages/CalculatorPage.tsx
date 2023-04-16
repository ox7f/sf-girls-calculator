import { useSetAtom } from 'jotai';

import { CurrentViewAtom } from '../atoms';
import { Agents } from '../components/agent';
import { TargetSelect } from '../components/target';
import { Results } from '../components/result';

export const CalculatorPage: React.FC = () => {
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
