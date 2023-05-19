import { useSetAtom } from 'jotai';
import { FC, useEffect } from 'react';

import { CurrentViewAtom } from '../atoms';
import { Agents } from '../components/agent';
import { History, Results } from '../components/result';
import { TargetSelect } from '../components/target';

const viewName = 'calculator';

export const CalculatorPage: FC = () => {
  const setViewName = useSetAtom(CurrentViewAtom);

  useEffect(() => {
    setViewName(viewName);
  }, []);

  return (
    <>
      <div className="default-layout tree-nav-body mx-auto">
        <Agents />

        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main className="page-layout u-center">
            <section>
              <TargetSelect />
              <Results />
            </section>

            <History />
          </main>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
