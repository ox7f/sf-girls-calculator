import { Agent } from '@sf-girls-calculator/calculator';
import { useSetAtom } from 'jotai';

import { AgentGallery } from './Gallery';
import { AgentList } from './List';
import {
  ViewName,
  addAgentToSelectedList,
  agentIsSelected,
  isLimitOfSelectionReached,
  removeAgentFromSelectedList
} from '../utils';
import { SelectedAgentListAtom } from '../../atoms';

interface Props {
  viewName: ViewName;
}

const AGENT_COMPONENTS = {
  calculator: AgentList,
  teamfinder: AgentGallery
};

export const Agents: React.FC<Props> = ({ viewName }) => {
  const setSelectedAgents = useSetAtom(SelectedAgentListAtom);
  const AgentComponent = AGENT_COMPONENTS[viewName];

  const handleAgentSelection = (selectedAgent: Agent) =>
    setSelectedAgents((prev) => {
      const selected = prev[viewName];
      const selectedAgents = agentIsSelected(selected, selectedAgent.name)
        ? removeAgentFromSelectedList(selected, selectedAgent.name)
        : isLimitOfSelectionReached(viewName, selected.length)
        ? selected
        : addAgentToSelectedList(selected, selectedAgent.name);
      return { ...prev, [viewName]: selectedAgents };
    });

  return <AgentComponent viewName={viewName} select={handleAgentSelection} />;
};
