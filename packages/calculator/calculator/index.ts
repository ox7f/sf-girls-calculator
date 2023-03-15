globalThis.Interval = 1;
globalThis.damageDelay = 100;
globalThis.projectileSpeed = 100;
globalThis.projectileInterval = 100;

import * as EverythingData from './data/index';
import * as EverythingHelper from './helper/index';

export const { Agents, Targets } = EverythingData;
export const { calculate_team, bruteforce_team, calculate_agents_individually } = EverythingHelper;

export { ActionEnum, ClassEnum, EffectTypeEnum, OrganizationEnum, CupSizeEnum } from './enums/index';
export { Agent, Effect, Fight, Skill, Target } from './model/index';
export { NewAgent, NewEffect, NewDamageEffect, NewDOTEffect, NewFight, NewSkill, NewTarget } from './model/index';
export {
  ActionType,
  DamageEffectFunctionType,
  EffectFunctionType,
  EffectParamType,
  HistoryType,
  ResultType
} from './model/index';
