import { calculate_team } from './calculateTeam';
import { NewAgent, NewTarget } from '../model/index';

// TODO: iterate through targets
export const bruteforce_team = (agents: NewAgent[], targets: NewTarget[], limit?: number) => {
  const combinationSize = agents.length > 6 ? 6 : agents.length;
  const combinations = getCombinations(agents, combinationSize);

  const results = [];

  for (const combination of combinations) {
    const result = calculate_team(combination, targets[0]);
    results.push(result);
  }

  results.sort((a, b) => a.total_damage - b.total_damage);

  if (limit) {
    return results.slice(0, limit);
  }

  return results;
};

function getCombinations(arr: NewAgent[], size: number) {
  const combinations: NewAgent[][] = [];

  function backtrack(start: number, combination: NewAgent[]) {
    if (combination.length === size) {
      combinations.push([...combination]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(0, []);
  return combinations;
}
