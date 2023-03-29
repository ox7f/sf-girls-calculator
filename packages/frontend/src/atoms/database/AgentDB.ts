import { MiniDb } from 'jotai-minidb';
import { Agents } from '@sf-girls-calculator/calculator';
import { AgentItem } from '../types';

const initialAgentData: Record<string, AgentItem> = {};

Agents.Agents.forEach((agent) => {
  initialAgentData[agent.name] = {
    ...agent.stats,
    name: agent.name
  };
});

export const AgentDB = new MiniDb<AgentItem>({ name: 'agent-db', initialData: initialAgentData });
