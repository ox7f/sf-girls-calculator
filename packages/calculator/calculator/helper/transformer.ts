import { Agents, Targets } from '../data';
import { NewAgent, NewTarget } from '../model';

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
