import { showResults } from "./showResult";
import { Agents, Targets } from "../data";
import { Agent, FightCalculator, NewAgent, ResultType, Target } from "../model";

export function calculateAgentsIndividually() {
  let agents = transformAgents();
  let results: ResultType[] = [];

  agents.forEach((a) => {
    const target = new Target(Targets.Dummy_Stage_4);
    const team = [new Agent(a)];
    const fightCalculator = new FightCalculator({ target, team });
    let result = fightCalculator.run();
    results.push(result);
  });

  showResults(results);
}

function transformAgents() {
  const allAgents: AllAgents<NewAgent> = Agents;
  return Object.keys(allAgents).map((key) => allAgents[key]);
}

interface AllAgents<T> {
  [index: string]: T;
}
