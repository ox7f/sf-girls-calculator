import { useSetAtom } from 'jotai';

import { CurrentViewAtom } from '../atoms';
import { Agents, /*Results,*/ Search, TargetSelect } from '../components';

const Teamfinder: React.FC = () => {
  useSetAtom(CurrentViewAtom)('teamfinder');

  return (
    <div>
      <div className="mx-1 pt-10">
        <mark>Work In Progress - does not work yet</mark>
        <TargetSelect />
      </div>

      <div className="default-layout tree-nav-body mx-auto mb-0">
        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main className="page-layout">
            <div className="mx-1 pb-2">
              <Search viewName="teamfinder" />
            </div>

            {/* <Results viewName="teamfinder" /> */}
            <Agents viewName="teamfinder" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Teamfinder;
