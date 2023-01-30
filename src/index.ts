import { calculateAgentsIndividually } from "./helper";

const startTime = performance.now();
calculateAgentsIndividually();
const endTime = performance.now();

// check performance
console.log(`execution time: ${(endTime - startTime).toFixed(3)} ms`);
