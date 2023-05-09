import { useAtomValue, useSetAtom } from 'jotai';
import { FC } from 'react';
import { Agent } from '@sf-girls-calculator/calculator';

import { AgentGallery } from './AgentGallery';
import { AgentList } from './AgentList';
import { addAgentToSelectedList, agentIsSelected, removeAgentFromSelectedList } from '../utils';
import { CurrentViewAtom, SelectedAgentListAtom } from '../../atoms';

const AGENT_COMPONENTS = {
  calculator: AgentList,
  teamfinder: AgentGallery
};

export const Agents: FC = () => {
  const setSelectedAgents = useSetAtom(SelectedAgentListAtom);
  const viewName = useAtomValue(CurrentViewAtom);
  const AgentComponent = AGENT_COMPONENTS[viewName];

  const onAgentSelect = (selectedAgent: Agent) =>
    setSelectedAgents((prev) => {
      const selectedAgents = agentIsSelected(prev[viewName], selectedAgent.name)
        ? removeAgentFromSelectedList(prev[viewName], selectedAgent.name)
        : addAgentToSelectedList(viewName, prev[viewName], selectedAgent.name);
      return { ...prev, [viewName]: selectedAgents };
    });

  return <AgentComponent select={onAgentSelect} />;
};
