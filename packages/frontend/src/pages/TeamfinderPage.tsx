import { useSetAtom } from 'jotai';
import { FC, useEffect } from 'react';

import { CurrentViewAtom } from '../atoms';
import { Agents } from '../components/agent';
import { Search } from '../components/common';

const viewName = 'teamfinder';

export const TeamfinderPage: FC = () => {
  const setViewName = useSetAtom(CurrentViewAtom);

  useEffect(() => {
    setViewName(viewName);
  }, []);

  return (
    <div className="mx-1">
      {/* TODO: show selected agents with mini-cards? */}
      {/* <TargetSelect /> */}

      <div className="default-layout tree-nav-body mx-auto mb-0">
        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main>
            <Search />

            {/* <Results /> */}
            <Agents />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TeamfinderPage;
