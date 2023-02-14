import { Agents, Targets } from '../data';
import { NewAgent, NewTarget } from '../model';

export function transformAgents() {
  const allAgents: AllObjects<NewAgent> = Agents;
  return Object.keys(allAgents).map((key) => allAgents[key]);
}

export function transformTargets() {
  const allTargets: AllObjects<NewTarget> = Targets;
  return Object.keys(allTargets).map((key) => allTargets[key]);
}

interface AllObjects<T> {
  [index: string]: T;
}
