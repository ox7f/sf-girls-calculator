import { FightCalculator } from "./model/classes";
import { Coco, Yuki } from "./data/Agents";
import { Dummy_Stage_1 } from "./data/Targets";

const fightCalculator = new FightCalculator({
  team: [Yuki, Coco],
  target: Dummy_Stage_1,
  duration: 30,
});

const startTime = performance.now();
fightCalculator.fight();
const endTime = performance.now();

// check performance
console.log(`execution time: ${endTime - startTime} milliseconds`);
