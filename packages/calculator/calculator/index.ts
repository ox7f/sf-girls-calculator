globalThis.Interval = 1;
globalThis.damageDelay = 100;
globalThis.projectileSpeed = 100;
globalThis.projectileInterval = 100;

import * as EverythingData from './data';
import * as EverythingHelper from './helper';

export const { Agents, EvoNodes, Targets } = EverythingData;
export const { bruteforceTeam, calculateAgentTarget, calculateTeam, findBestRuneSets } = EverythingHelper;

export { HistoryActionTypeEnum, BonusEnum, ClassEnum, EffectTypeEnum, OrganizationEnum, CupSizeEnum } from './enums';

export {
  ActionType,
  DamageEffectFunction,
  EffectFunction,
  EffectParams,
  ApplyParams,
  ApplyFunction,
  HistoryType,
  ResultType,
  Rune,
  RuneData,
  RuneSet
} from './model/types';

export {
  NewAgent,
  NewEffect,
  NewEffectDamage,
  NewEffectDOT,
  NewEvoNode,
  NewFight,
  NewSkill,
  NewStats,
  NewTarget
} from './model/interfaces';

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
} from './model/classes';
