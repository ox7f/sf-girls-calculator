import { useSetAtom } from 'jotai';
import { NewAgent } from 'sf-girls-calculator-calculator';

import { AgentGallery, AgentList } from './index';
import { SelectedAgentsAtom } from '../../atoms';
import { addToSelected, isLimitReached, isSelected, removeFromSelected } from '../../utils';

interface AgentsProps {
  viewName: 'calculator' | 'teamfinder';
}

const COMPONENTS = {
  calculator: AgentList,
  teamfinder: AgentGallery
};

const Agents: React.FC<AgentsProps> = ({ viewName }) => {
  const setSelectedAgents = useSetAtom(SelectedAgentsAtom);
  const Component = COMPONENTS[viewName];

  const select = (agent: NewAgent) => {
    setSelectedAgents((prev) => {
      const selected = prev[viewName];

      if (isSelected(selected, agent.name)) {
        return { ...prev, [viewName]: removeFromSelected(selected, agent.name) };
      }

      if (isLimitReached(viewName, selected.length)) {
        return prev;
      }

      return { ...prev, [viewName]: addToSelected(selected, agent.name) };
    });
  };

  return <Component viewName={viewName} select={select} />;
};

export default Agents;
