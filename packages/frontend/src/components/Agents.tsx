import { Agents as AgentsData } from 'sf-girls-calculator-calculator';
import { Agent } from './index';

const Agents: React.FC = () => {
  const agents = [];

  for (const [key, values] of Object.entries(AgentsData)) {
    agents.push({ key, values });
  }

  return (
    <article>
      <div className="row u-center">
        {agents.map((agent) => (
          <Agent key={agent.key} {...agent.values} />
        ))}
      </div>
    </article>
  );
};

export default Agents;
