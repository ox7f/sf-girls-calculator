import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { Agents } from '../components';
import { AgentsAtom, FilteredAgentsAtom } from '../components/atoms';
import { Search } from '../components/UI';

const AgentsPage: React.FC = () => {
  const allAgents = useAtomValue(AgentsAtom);
  const setFilteredAgents = useSetAtom(FilteredAgentsAtom);

  useEffect(() => () => setFilteredAgents(allAgents), []);

  return (
    <main>
      <div className="fullscreen mx-2 pt-10">
        <div className="mx-1 pb-2">
          <Search atom={FilteredAgentsAtom} sourceAtom={AgentsAtom} />
        </div>
        <Agents />
      </div>
    </main>
  );
};

export default AgentsPage;
