import { FightCalculator } from "./model/classes";
// import * as agents from "./data/Agents";
import { Ayu, Coco, Sora } from "./data/Agents";
import { Dummy_Stage_4 } from "./data/Targets";

const fightCalculator = new FightCalculator({
  team: [Ayu, Coco, Sora],
  target: Dummy_Stage_4,
  duration: 120,
});

const startTime = performance.now();
fightCalculator.run();
const endTime = performance.now();

// check performance
console.log(`execution time: ${endTime - startTime} milliseconds`);
