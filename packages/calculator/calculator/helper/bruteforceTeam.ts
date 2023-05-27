import { calculateTeam } from './calculateTeam';
import { NewAgent, NewTarget } from '../model';

const maxCombinationSize = 6;

export function bruteforceTeam(agents: NewAgent[], target: NewTarget, limit?: number) {
  const combinationSize = Math.min(maxCombinationSize, agents.length);
  const combinations = generateCombinations(agents, combinationSize);
  const results = combinations.map((combination) => calculateTeam(combination, target));
  results.sort((a, b) => b.totalDamage - a.totalDamage);
  return limit ? results.slice(0, limit) : results;
}

function generateCombinations(agents: NewAgent[], size: number) {
  const combinations: NewAgent[][] = [];

  function backtrack(startIndex: number, combination: NewAgent[]) {
    if (combination.length === size) {
      combinations.push([...combination]);
      return;
    }

    for (let i = startIndex; i < agents.length; i++) {
      const currentAgent = agents[i];
      combination.push(currentAgent);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(0, []);
  return combinations;
}
