globalThis.Interval = 1;

import * as EverythingData from './data';
import * as EverythingHelper from './helper';

export const { Agents, EvoNodes, Targets } = EverythingData;
export const { bruteforceTeam, calculateAgentTarget, calculateTeam, findBestRuneSets } = EverythingHelper;

export {
  BonusEnum,
  ClassEnum,
  CupSizeEnum,
  EffectTypeEnum,
  HistoryActionTypeEnum,
  OrganizationEnum,
  RarityEnum
} from './enums';

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
