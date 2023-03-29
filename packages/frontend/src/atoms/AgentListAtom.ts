import { atom } from 'jotai';
import { Agent, Agents, EvoNode } from '@sf-girls-calculator/calculator';
import { getClassEvoNodes } from './utils';

const initializedAgents = Agents.Agents.map((agent) => {
  agent.nodes = getClassEvoNodes(agent.class).map((node) => new EvoNode(node));
  return new Agent(agent);
});

export const AgentListAtom = atom<Agent[]>(initializedAgents);
