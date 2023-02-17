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
      <article>
        <div className="mx-1 u-center">
          <Search atom={FilteredAgentsAtom} sourceAtom={AgentsAtom} />
        </div>
        <Agents />
      </article>
    </main>
  );
};

export default AgentsPage;
