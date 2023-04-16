import { Agent } from '@sf-girls-calculator/calculator';
import { useAtomValue } from 'jotai';

import { Search } from '../common';
import { ViewName, agentIsSelected } from '../utils';
import { FilteredAgentListAtom, SelectedAgentListAtom } from '../../atoms';
import { AgentListAtom } from '../../atoms/atoms';

interface Props {
  viewName: ViewName;
  select: (agent: Agent) => void;
}

export const AgentMenu: React.FC<Props> = ({ viewName, select }) => {
  const allAgents = useAtomValue(AgentListAtom);
  const filteredAgents = useAtomValue(FilteredAgentListAtom)[viewName] || [];
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];
  const agents = filteredAgents.map((name) => allAgents.find((agent) => agent.name === name)).filter(Boolean);

  const renderAgents = () => {
    if (agents.length === 0) {
      return (
        <li className="menu-item mr-1">
          <a>No results...</a>
        </li>
      );
    }

    return agents.map((agent) => {
      if (!agent) {
        return null;
      }

      const className = `menu-item ${agentIsSelected(selectedAgents, agent.name) ? 'selected' : ''}`;

      return (
        <li key={agent.name} className={className} onClick={() => select(agent)}>
          <a>{agent.name}</a>
        </li>
      );
    });
  };

  return (
    <ul className="menu mb-3">
      <li className="menu-item u-sticky u-top-0">
        <Search viewName="calculator" />
      </li>
      {renderAgents()}
    </ul>
  );
};
