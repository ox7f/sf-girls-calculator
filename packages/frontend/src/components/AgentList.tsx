import { useSetAtom, useAtomValue } from 'jotai';
import { AgentCard, EditingAgentAtom, FilteredAgentsAtom, ModifiedAgentsAtom } from './index';

const AgentList: React.FC = () => {
  const setEditAgent = useSetAtom(EditingAgentAtom);
  const modifiedAgents = useAtomValue(ModifiedAgentsAtom);
  const filteredAgents = useAtomValue(FilteredAgentsAtom);

  const startEditing = (name = '') => {
    const agent = modifiedAgents.find((a) => a.name === name) ?? null;
    setEditAgent(agent);
  };

  return (
    <div>
      <div className="row u-center">
        {filteredAgents.map((agent, index) => (
          <AgentCard key={index} agent={agent} edit={startEditing} />
        ))}
      </div>
    </div>
  );
};

export default AgentList;
