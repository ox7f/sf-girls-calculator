import { MiniDb } from 'jotai-minidb';
import { Agents } from 'sf-girls-calculator-calculator';
import { AgentItem } from '../types';

const initialAgentData: Record<string, AgentItem> = {};

Agents.Agents.forEach((agent) => {
  initialAgentData[agent.name] = {
    ...agent.stats,
    name: agent.name,
    projectile_number: agent.stats.projectile_number ?? 1,
    cast_time: agent.stats.cast_time ?? 0
  };
});

const AgentDB = new MiniDb<AgentItem>({ name: 'agent-db', initialData: initialAgentData });

export default AgentDB;
