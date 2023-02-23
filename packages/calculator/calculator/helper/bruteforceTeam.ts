import { Targets } from '../data';
import { NewAgent } from '../model';
import { calculate_team } from './calculateTeam';
import { transformAgents } from './transformer';

export const bruteforce_team = (/* agents: NewAgents[] */) => {
  // TODO: adjust logic to make it possible to bruteforce more combinations
  const agents = transformAgents().slice(50, 70);
  const combinations = getCombinations(agents, 6);

  let strongestTeam;

  for (const combination of combinations) {
    const result = calculate_team(combination, Targets.Dummy_Stage_4);

    if (!strongestTeam) strongestTeam = result;

    if (strongestTeam) {
      const current_damage = result.target.health - result.target.current_health;
      const current_time = result.target.duration - result.time;

      const best_damage = strongestTeam.target.health - strongestTeam.target.current_health;
      const best_time = strongestTeam.target.duration - strongestTeam.time;

      if (current_time > best_time) {
        strongestTeam = result;

        console.log('NEW STRONGEST TEAM', {
          team: result.team.map((a) => a.name).join(', '),
          damage: current_damage,
          best_damage: best_damage,
          time: current_time,
          best_time: best_time
        });
      }
    }
  }

  console.log('STRONGEST TEAM', strongestTeam?.team.map((a) => a.name).join(','), strongestTeam?.team);
  console.log('SIMULATED ', combinations.length, ' FIGHTS');
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
