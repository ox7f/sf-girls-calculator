import { useAtomValue, useSetAtom } from 'jotai';
import { FC } from 'react';

import { AgentGallery, AgentList } from './index';
import { AgentDB, AgentItem, CurrentViewAtom, FilteredAgentListAtom } from '../../atoms';

const AGENT_COMPONENTS = {
  calculator: AgentList,
  teamfinder: AgentGallery
};

export const Agents: FC = () => {
  const agentEntries = useAtomValue(AgentDB.values);
  const setAgent = useSetAtom(AgentDB.set);

  const viewName = useAtomValue(CurrentViewAtom);
  const filteredAgentNames = useAtomValue(FilteredAgentListAtom);
  const AgentComponent = AGENT_COMPONENTS[viewName];

  // TODO: sort by filter settings
  const filteredAgents = agentEntries.filter((agent) => filteredAgentNames.includes(agent.name));
  // .sort((a: AgentItem, b: AgentItem) =>
  //   a.isFavorite === b.isFavorite ? a.name.localeCompare(b.name) : a.isFavorite ? -1 : 1
  // );

  const onAgentSelect = (agent: AgentItem) => {
    const selectedAgentsCount = agentEntries.filter((agent) => agent.options[viewName]?.isSelected).length;

    // TODO: individual limit for calculator (pve - 6/pvp - 7) and teamfinder - 20
    if (selectedAgentsCount === 7 && !agent.options[viewName]?.isSelected) {
      return;
    }

    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        [viewName]: { ...agent.options[viewName], isSelected: !agent.options[viewName].isSelected }
      }
    });
  };

  const onAgentToggleModal = (agent: AgentItem) => {
    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        openModal: !agent.options.openModal
      }
    });
  };

  const onAgentToggleFavorite = (agent: AgentItem) => {
    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        isFavorite: !agent.options.isFavorite
      }
    });
  };

  return (
    <AgentComponent
      agents={filteredAgents}
      favorite={onAgentToggleFavorite}
      toggleModal={onAgentToggleModal}
      select={onAgentSelect}
      viewName={viewName}
    />
  );
};
