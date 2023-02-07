import { Agents as AgentsData } from 'sf-girls-calculator-calculator';
import { Agent } from './index';

import { useSetAtom } from 'jotai';
import { selectedAgentsAtom } from './atoms';

const Agents: React.FC = () => {
  const setSelectedAgents = useSetAtom(selectedAgentsAtom);
  const agents = [];

  for (const [key, values] of Object.entries(AgentsData)) {
    agents.push({ key, values });
  }

  const reset = () => {
    setSelectedAgents([]);
  };

  return (
    <article>
      <button type="submit" className="secondary outline" onClick={reset}>
        Reset
      </button>

      {agents.map((agent) => (
        <Agent key={agent.key} {...agent.values} />
      ))}
    </article>
  );
};

export default Agents;
