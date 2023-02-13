import { NewAgent } from 'sf-girls-calculator-calculator';
import { useAtom, useAtomValue } from 'jotai';
import {
  AgentsAtom,
  EditingAgent,
  ModifiedAgentsAtom,
  SelectedAgentsAtom,
  transformModifiedAgentToAgent
} from './atoms';
import { Agent, AgentModal } from './index';

const Agents: React.FC = () => {
  const agents = useAtomValue(AgentsAtom);
  const [modifiedAgents, setModifiedAgents] = useAtom(ModifiedAgentsAtom);
  const [editAgent, setEditAgent] = useAtom(EditingAgent);
  const [selectedAgents, setSelectedAgents] = useAtom(SelectedAgentsAtom);

  const select = (agent: NewAgent) => {
    setSelectedAgents((prev) => {
      if (prev.map((p) => p.name).includes(agent.name)) {
        return prev.filter((a) => a.name !== agent.name);
      }

      return [...prev, agent];
    });
  };

  const startEditing = (name = '') => {
    const agent = modifiedAgents.find((a) => a.name === name) ?? null;
    setEditAgent(agent);
  };

  const save = () => {
    const newModifiedAgents = modifiedAgents.map((p) => {
      if (p.name === editAgent?.name) {
        return editAgent;
      }
      return p;
    });

    const newSelectedAgents = selectedAgents.map((p) => {
      if (p.name === editAgent?.name) {
        return transformModifiedAgentToAgent(p, editAgent);
      }
      return p;
    });

    setSelectedAgents(newSelectedAgents);
    setModifiedAgents(newModifiedAgents);

    localStorage.setItem('modified_agents', JSON.stringify(newModifiedAgents));

    startEditing();
  };

  const cancel = () => {
    startEditing();
  };

  const isSelectedList = agents.map((agent) => {
    return selectedAgents.filter((a) => a.name === agent.name).length !== 0;
  });

  const isDisabledList = agents.map((agent, index) => {
    return selectedAgents.length > 5 && !isSelectedList[index];
  });

  return (
    <article>
      <AgentModal cancel={cancel} save={save} />

      <div className="row u-center">
        {agents.map((agent, index) => (
          <Agent
            key={index}
            agent={agent}
            isSelected={isSelectedList[index]}
            isDisabled={isDisabledList[index]}
            select={() => select(agent)}
            edit={() => startEditing(agent.name)}
          />
        ))}
      </div>
    </article>
  );
};

export default Agents;
