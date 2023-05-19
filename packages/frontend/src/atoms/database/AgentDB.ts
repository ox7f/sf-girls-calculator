import { MiniDb } from 'jotai-minidb';
import { Agents } from '@sf-girls-calculator/calculator';

import { AgentItem } from '../types';
import { convertAgentItem } from '../utils';

const agentData: Record<string, AgentItem> = {};

Agents.Agents.forEach((agent, index) => {
  const convertedAgent = convertAgentItem(agent, index);
  agentData[agent.name] = convertedAgent;
});

export const AgentDB = new MiniDb<AgentItem>({
  name: 'agent-db',
  initialData: agentData,
  version: 1,
  migrations: {
    1: (agent) => {
      agent.options = {
        isFavorite: false,
        openModal: false,
        calculator: { isSelected: false },
        teamfinder: { isSelected: false }
      };
      return agent;
    }
  },
  onMigrationCompleted: () => {
    alert('AgentDB was updated. Page will be reloaded.');
    window.location.reload();
  }
});
