import { Agents, Targets } from '../data/index.js';
import { NewAgent, NewTarget } from '../model/index.js';

interface AllObjects<T> {
  [index: string]: T;
}

export const transformAgents = () => {
  const allAgents: AllObjects<NewAgent> = Agents;
  return Object.keys(allAgents).map((key) => allAgents[key]);
};

export const transformTargets = () => {
  const allTargets: AllObjects<NewTarget> = Targets;
  return Object.keys(allTargets).map((key) => allTargets[key]);
};
