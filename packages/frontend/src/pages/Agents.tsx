import { Agents } from '../components';
import { AgentsAtom, FilteredAgentsAtom } from '../components/atoms';
import { SearchBar } from '../components/UI';

const AgentsPage: React.FC = () => {
  return (
    <main>
      <SearchBar atom={FilteredAgentsAtom} sourceAtom={AgentsAtom} />
      <Agents />
    </main>
  );
};

export default AgentsPage;
