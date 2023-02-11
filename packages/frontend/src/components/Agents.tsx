import { Agents as AgentsData, NewAgent } from 'sf-girls-calculator-calculator';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { AgentsAtomFamily, SelectedAgentsAtom } from './atoms';
import { Agent, AgentModal } from './index';

const Agents: React.FC = () => {
  const [editAgent, setEditAgent] = useState<NewAgent | null>(null);
  const setSelectedAgents = useSetAtom(SelectedAgentsAtom);
  const agents: NewAgent[] = [];

  for (const [, values] of Object.entries(AgentsData)) {
    agents.push(values);
    AgentsAtomFamily({
      name: values.name,
      attack_speed: values.attack_speed,
      normal_attack: values.normal_attack,
      skill_damage: values.skill_damage,
      critical_rate: values.critical_rate,
      critical_damage: values.critical_damage
    });
  }

  const select = (agent: NewAgent) => {
    setSelectedAgents((prev) => {
      if (prev.includes(agent)) {
        return prev.filter((a) => a.name !== agent.name);
      }

      return [...prev, agent];
    });
  };

  const edit = (agent: NewAgent | null) => {
    setEditAgent(agent);
  };

  return (
    <article>
      {editAgent && <AgentModal name={editAgent.name} cancel={() => edit(null)} />}

      <div className="row u-center">
        {agents.map((agent) => (
          <Agent key={agent.name} agent={agent} select={() => select(agent)} edit={() => edit(agent)} />
        ))}
      </div>
    </article>
  );
};

export default Agents;
