import { Agents } from '../data';
import { NewAgent } from '../model';

export function bruteforce_team() {
  // TODO:
  const agents = transformAgents();
  const combinations = getCombinations(agents, 6);
  console.log(combinations.length);
}

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

function transformAgents() {
  const allAgents: AllObjects<NewAgent> = Agents;
  return Object.keys(allAgents).map((key) => allAgents[key]);
}

interface AllObjects<T> {
  [index: string]: T;
}
