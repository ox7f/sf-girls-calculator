import { Agent, Fight, NewAgent, NewTarget, Target } from '../model';

export const calculate_team = (new_team: NewAgent[], new_target: NewTarget) => {
  const target = new Target(new_target);
  const team = new_team.map((agent: NewAgent) => new Agent(agent));

  const fightCalculator = new Fight({ target, team });
  const result = fightCalculator.run();

  return result;
};
