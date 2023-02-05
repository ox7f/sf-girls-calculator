import { Agent, Fight, Target } from '../model';

type paramType = {
  target: Target;
  team: Agent[];
};

export function calculateTeam({ target, team }: paramType) {
  const fightCalculator = new Fight({ target, team });
  const result = fightCalculator.run();
  return result;
}
