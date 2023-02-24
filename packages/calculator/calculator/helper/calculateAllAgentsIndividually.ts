import { calculate_team, transformAgents, transformTargets } from './index.js';
import { ResultType } from '../model/index.js';

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
