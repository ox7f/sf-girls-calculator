import { Agents as AgentsData } from 'sf-girls-calculator-calculator';
import { Agent } from './index';

const Agents: React.FC = () => {
  const agents = [];

  for (const [key, values] of Object.entries(AgentsData)) {
    agents.push({ key, values });
  }

  return (
    <>
      {agents.map((agent) => (
        <Agent key={agent.key} {...agent.values} />
      ))}
    </>
  );
};

export default Agents;
