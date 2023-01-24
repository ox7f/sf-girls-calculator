import { FightCalculator } from "./model";
import { Yuki } from "./data/Agents";
import { Dummy } from "./data/Targets";

const fightCalculator = new FightCalculator();

const result = fightCalculator.calculate_damage_agent_individually(Yuki, Dummy);
console.log(result);
