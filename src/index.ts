import { FightCalculator } from "./model/classes";
import { Neve } from "./data/Agents";
import { Dummy_Stage_1 } from "./data/Targets";

const fightCalculator = new FightCalculator({
  team: [Neve],
  target: Dummy_Stage_1,
  duration: 30,
});

fightCalculator.fight();
