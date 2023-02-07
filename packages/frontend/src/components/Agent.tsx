import { NewAgent } from 'sf-girls-calculator-calculator';
import { Card } from './UI';

import { useAtom } from 'jotai';
import { selectedAgentsAtom } from './atoms';

const Agent: React.FC<NewAgent> = (agent: NewAgent) => {
  const [selectedAgents, setSelectedAgents] = useAtom(selectedAgentsAtom);
  const checked = selectedAgents.filter((a) => a.name === agent.name).length > 0;
  const disabled = selectedAgents.length > 5 && !checked;

  const selectAgent = (agent: NewAgent) => {
    if (checked) {
      setSelectedAgents([...selectedAgents.filter((a) => a.name !== agent.name)]);
    } else {
      setSelectedAgents([...selectedAgents, agent]);
    }
  };

  return (
    <Card
      header={agent.name}
      body={`${agent.skill.name}: ${agent.skill.description}`}
      footer={agent.class}
      checked={checked}
      disabled={disabled}
      onChange={() => selectAgent(agent)}
    />
  );
};

export default Agent;
