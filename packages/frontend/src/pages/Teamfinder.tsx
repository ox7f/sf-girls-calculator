import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { AgentList, AgentsAtom, FilteredAgentsAtom, Search } from '../components';

const Teamfinder: React.FC = () => {
  const allAgents = useAtomValue(AgentsAtom);
  const setFilteredAgents = useSetAtom(FilteredAgentsAtom);

  useEffect(() => () => setFilteredAgents(allAgents), []);

  return (
    <main>
      <div className="fullscreen mx-2 pt-10">
        <mark>not implemented yet - nothing to see here</mark>
        <div className="mx-1 pb-2">
          <Search atom={FilteredAgentsAtom} sourceAtom={AgentsAtom} />
        </div>
        <AgentList />
      </div>
    </main>
  );
};

export default Teamfinder;
