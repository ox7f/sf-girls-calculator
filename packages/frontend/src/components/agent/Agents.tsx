import { useAtomValue, useSetAtom } from 'jotai';
import { FC, useCallback, useState } from 'react';

import { AgentGallery, AgentList } from './index';
import { AgentDB, AgentItem, CurrentViewAtom, ResultListAtom, ResultListHistoryAtom, TargetDB } from '../../atoms';
import { calculateWorker } from '../../webworker';

const AGENT_COMPONENTS = {
  calculator: AgentList,
  teamfinder: AgentGallery
};

const WORKER_CONFIG = {
  calculator: calculateWorker.calculateCalculator,
  teamfinder: calculateWorker.calculateTeamfinder
};

export const Agents: FC = () => {
  const [isLoading, setLoading] = useState(false);

  const viewName = useAtomValue(CurrentViewAtom);
  const agents = useAtomValue(AgentDB.values);
  const targets = useAtomValue(TargetDB.values);

  const setAgent = useSetAtom(AgentDB.set);
  const setResults = useSetAtom(ResultListAtom);
  const setHistory = useSetAtom(ResultListHistoryAtom);

  const selectedAgents = agents.filter((agent) => agent.options[viewName].isSelected).map((agent) => agent.name);
  const selectedTarget = targets.filter((target) => target.options[viewName].isSelected).map((target) => target.name);

  // TODO: sort by filter settings
  // agents.sort((a: AgentItem, b: AgentItem) =>
  //   a.isFavorite === b.isFavorite ? a.name.localeCompare(b.name) : a.isFavorite ? -1 : 1
  // );

  const workerCall = useCallback(
    async (selectedAgents: string[], selectedTargets: string[]) => {
      const newResults = await WORKER_CONFIG[viewName]({ selectedAgents, selectedTargets });
      return JSON.parse(newResults);
    },
    [viewName]
  );

  const calculate = async () => {
    setLoading(true);

    const newResults = await workerCall(selectedAgents, selectedTarget);

    if (newResults) {
      setResults((prev) => ({ ...prev, [viewName]: newResults }));
      setHistory((prev) => [...newResults, ...prev]);
    }

    setLoading(false);
  };

  const onAgentSelect = (agent: AgentItem) => {
    const selectedAgentsCount = agents.filter((agent) => agent.options[viewName]?.isSelected).length;

    if (viewName === 'teamfinder') {
      if (selectedAgentsCount === 20 && !agent.options[viewName]?.isSelected) {
        return;
      }
    }

    // TODO: individual limit for calculator (pve - 6/pvp - 7)
    if (viewName === 'calculator') {
      if (selectedAgentsCount === 7 && !agent.options[viewName]?.isSelected) {
        return;
      }
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

  const AgentComponent = AGENT_COMPONENTS[viewName];

  return (
    <AgentComponent
      agents={agents}
      loading={isLoading}
      calculate={calculate}
      favorite={onAgentToggleFavorite}
      toggleModal={onAgentToggleModal}
      select={onAgentSelect}
    />
  );
};
