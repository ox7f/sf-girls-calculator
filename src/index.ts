import { FightCalculator } from "./model/classes";
import { Neve } from "./data/Agents";
import { Dummy_Stage_1 } from "./data/Targets";

const fightCalculator = new FightCalculator();

const result = fightCalculator.calculate_damage_agent_individually(
  Neve,
  Dummy_Stage_1
);

console.log(result);
