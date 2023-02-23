import { calculate_team, transformAgents, transformTargets } from './index';
import { ResultType } from '../model';

export const calculate_agents_individually = () => {
  const agents = transformAgents();
  const targets = transformTargets();
  const results: ResultType[] = [];

  agents.forEach((a) => {
    targets.forEach((t) => {
      results.push(calculate_team([a], t));
    });
  });

  return results;
};
