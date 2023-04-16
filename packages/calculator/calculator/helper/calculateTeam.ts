import { Agent, Fight, NewAgent, NewTarget, Target } from '../model';

export function calculateTeam(newAgents: NewAgent[], newTarget: NewTarget, loggingEnabled = true) {
  const target = new Target(newTarget);
  const team = newAgents.map((agent) => new Agent(agent, loggingEnabled));

  const fight = new Fight({ target, team });
  const result = fight.run();

  return result;
}
