globalThis.Interval = 1;
globalThis.damageDelay = 100;
globalThis.projectileSpeed = 100;
globalThis.projectileInterval = 100;

import * as EverythingData from './data/index';
import * as EverythingHelper from './helper/index';

export const { Agents, EvoNodes, Targets } = EverythingData;
export const { bruteforce_team, calculate_agents_individually, calculate_team } = EverythingHelper;

export { ActionEnum, BonusEnum, ClassEnum, EffectTypeEnum, OrganizationEnum, CupSizeEnum } from './enums/index';
export {
  Agent,
  AbstractEffect,
  Effect,
  EffectDamage,
  EffectDOT,
  EvoNode,
  Skill,
  Stats,
  Target,
  Fight
} from './model/index';
export {
  NewAgent,
  NewEffect,
  NewDamageEffect,
  NewDOTEffect,
  NewEvoNode,
  NewFight,
  NewSkill,
  NewStats,
  NewTarget
} from './model/index';
export {
  ActionType,
  DamageEffectFunctionType,
  DamageReturnType,
  EffectFunctionType,
  EffectParamType,
  EvoNodeParamType,
  EvoNodeFunctionType,
  HistoryType,
  ResultType
} from './model/index';
