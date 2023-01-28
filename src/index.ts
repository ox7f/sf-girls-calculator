import { FightCalculator } from "./model/classes";
// import * as agents from "./data/Agents";
import { Ayu, Coco, Sora } from "./data/Agents";
import { Dummy_Stage_1 } from "./data/Targets";

const fightCalculator = new FightCalculator({
  team: [Coco, Sora],
  target: Dummy_Stage_1,
  duration: 30,
});

const startTime = performance.now();
fightCalculator.run();
const endTime = performance.now();

// check performance
console.log(`execution time: ${endTime - startTime} milliseconds`);
