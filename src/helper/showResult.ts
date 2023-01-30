import { ResultType } from "../model";

export function showResults(results: ResultType[]) {
  const sortedResults = results.map((result) => ({
    name: result.team.map((agent) => agent.name).join(", "),
    damage: Number(
      result.team
        .map((agent) => agent.dealt_damage)
        .reduce((partialSum, x) => partialSum + x, 0)
        .toFixed(2)
    ),
  }));
  // .sort((a, b) => a.damage - b.damage);

  console.table(sortedResults, ["name", "damage", "game"]);
}
