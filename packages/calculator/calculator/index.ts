globalThis.Interval = 10;

import * as EverythingData from './data/index.js';
import * as EverythingHelper from './helper/index.js';

export const { Agents, Targets } = EverythingData;
export const { calculate_team, bruteforce_team, calculate_agents_individually } = EverythingHelper;

export { AttackModeEnum, ClassEnum, EffectEnum, NameEnum, OrganizationEnum, SizeEnum } from './enums/index.js';
export { Agent, Effect, Fight, Skill, Target } from './model/index.js';
export { NewAgent, NewEffect, NewDamageEffect, NewDOTEffect, NewFight, NewSkill, NewTarget } from './model/index.js';
export { DamageEffectFunctionType, EffectFunctionType, EffectParamType, ResultType } from './model/index.js';

// ----------------------------- ONLY FOR DEBUGGING -----------------------------
import { NameEnum } from './enums/index.js';

type tableType = {
  name: NameEnum;
  target: string;
  damage: number;
};

const table: tableType[] = [];

// *** for individual teams
const team = [Agents.Akari];
const target = Targets.Dummy_Stage_1;
const result = calculate_team(team, target);
result.team.forEach((agent) => {
  table.push({
    name: agent.name,
    target: result.target.name,
    damage: agent.total_damage
  });
});

// *** for all agents individual
// calculate_agents_individually().forEach((result) => {
//   table.push({
//     name: result.team[0].name,
//     target: result.target.name,
//     damage: result.team[0].total_damage
//   });
// });

console.table(table, ['name', 'target', 'damage']);

// *** bruteforce
// bruteforce_team();
