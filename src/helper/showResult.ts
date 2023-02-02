import { ResultType } from "../model";

export function showResults(results: ResultType[]) {
  const sortedResults = results.map((result) => ({
    name: result.team.map((agent) => agent.name),
    total_damage: Number(
      result.team
        .map((agent) => Math.round(agent.dealt_damage))
        .reduce((partialSum, x) => partialSum + x, 0)
    ),
    damage: result.team.map((agent) => Math.round(agent.dealt_damage)),
    attacks: result.team.map((agent) => agent.attack_counter),
  }));
  // .sort((a, b) => a.damage - b.damage);

  console.table(sortedResults, ["name", "total_damage", "damage", "attacks"]);
}
