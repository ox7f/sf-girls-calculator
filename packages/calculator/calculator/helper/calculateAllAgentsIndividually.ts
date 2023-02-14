import { calculate_team, transformAgents, transformTargets } from './index';
import { ResultType } from '../model';

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
