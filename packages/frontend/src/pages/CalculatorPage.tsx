import { useSetAtom } from 'jotai';
import { FC, useEffect } from 'react';

import { CurrentViewAtom } from '../atoms';
import { TargetSelect } from '../components/target';
import { Agents } from '../components/agent';
import { History, Results } from '../components/result';

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
              <div className="u-center m-o" style={{ display: 'block', paddingTop: '0.75rem' }}>
                <TargetSelect />
              </div>
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
