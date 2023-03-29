import { MiniDb } from 'jotai-minidb';
import { Agents } from '@sf-girls-calculator/calculator';
import { AgentEvoTreeItem } from '../types';
import { getClassEvoNodes, transformNodes } from '../utils';

const initialEvoNodeData: Record<string, AgentEvoTreeItem> = {};

Agents.Agents.forEach((agent) => {
  initialEvoNodeData[agent.name] = {
    name: agent.name,
    nodes: transformNodes(getClassEvoNodes(agent.class))
  };
});

export const AgentEvoTreeDB = new MiniDb<AgentEvoTreeItem>({ name: 'evo-tree-db', initialData: initialEvoNodeData });
