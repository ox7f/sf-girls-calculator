import { useSetAtom } from 'jotai';
import { FC, useEffect } from 'react';

import { CurrentViewAtom } from '../atoms';
import { Agents } from '../components/agent';

const viewName = 'calculator';

export const CalculatorPage: FC = () => {
  const setViewName = useSetAtom(CurrentViewAtom);

  useEffect(() => {
    setViewName(viewName);
  }, []);

  return (
    <div className="mx-1">
      <div className="default-layout tree-nav-body mx-auto">
        <Agents />
      </div>
    </div>
  );
};

export default CalculatorPage;
