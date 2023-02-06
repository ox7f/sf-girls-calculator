import { calculate_team } from './calculateTeam';
import { Agents, Targets } from '../data';
import { NewAgent, NewTarget, ResultType } from '../model';

export function calculate_agents_individually() {
  const agents = transformAgents();
  const targets = transformTargets();
  const results: ResultType[] = [];

  agents.forEach((a) => {
    targets.forEach((t) => {
      const result = calculate_team([a], t);
      results.push(result);
    });
  });

  return results;
}

function transformAgents() {
  const allAgents: AllObjects<NewAgent> = Agents;
  return Object.keys(allAgents).map((key) => allAgents[key]);
}

function transformTargets() {
  const allTargets: AllObjects<NewTarget> = Targets;
  return Object.keys(allTargets).map((key) => allTargets[key]);
}

interface AllObjects<T> {
  [index: string]: T;
}
