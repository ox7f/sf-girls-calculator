import { Agents, Targets } from '../data';
import { calculateTeam } from '../helper';
import { NewAgent, NewTarget, ResultType } from '../model';

export function calculateAgentTarget(): ResultType[] {
  const allAgents = Agents.Agents;
  const allTargets = Targets.Targets;

  const results = allAgents.flatMap((agent: NewAgent) =>
    allTargets.map((target: NewTarget) => calculateTeam([agent], target))
  );

  return results;
}
