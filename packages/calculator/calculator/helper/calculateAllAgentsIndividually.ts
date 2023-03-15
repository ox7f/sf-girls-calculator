import { calculate_team } from './index';
import { NewAgent, NewTarget, ResultType } from '../model/index';
import { Agents, Targets } from '../data/index';

export const calculate_agents_individually = () => {
  const agents = Agents.Agents;
  const targets = Targets.Targets;
  const results: ResultType[] = [];

  agents.forEach((a: NewAgent) => {
    targets.forEach((t: NewTarget) => {
      results.push(calculate_team([a], t));
    });
  });

  return results;
};
