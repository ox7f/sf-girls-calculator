import { Agents, Targets } from '../data';
// import { NameEnum } from "../enums";
import { Agent, Fight, ResultType, Target } from '../model';

export function calculateAgentsIndividually() {
  // let agents = transformAgents();
  const results: ResultType[] = [];

  // agents.forEach((a) => {
  // if (a.name === NameEnum.Yuki) {
  const target = new Target(Targets.Dummy_Stage_4);
  const agent = new Agent(Agents.Yuki);
  const team = [agent]; // new Agent(Agents.Coco)
  const fightCalculator = new Fight({ target, team });
  const result = fightCalculator.run();
  results.push(result);
  // }
  // });
}

// function transformAgents() {
//   const allAgents: AllAgents<NewAgent> = Agents;
//   return Object.keys(allAgents).map((key) => allAgents[key]);
// }

// interface AllAgents<T> {
//   [index: string]: T;
// }
