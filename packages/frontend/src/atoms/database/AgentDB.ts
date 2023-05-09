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
  initialData: agentData
});
