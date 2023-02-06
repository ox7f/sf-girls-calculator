globalThis.Interval = 10;

import * as EverythingData from './data';
import * as EverythingHelper from './helper';

export const { Agents, Targets } = EverythingData;
export const { calculate_team } = EverythingHelper;

export { Agent, Effect, Fight, Skill, Target } from './model';
export { NewAgent, NewEffect, NewDamageEffect, NewDOTEffect, NewFight, NewSkill, NewTarget } from './model';
export { DamageEffectFunctionType, EffectFunctionType, EffectParamType, ResultType } from './model';
export { AttackModeEnum, ClassEnum, EffectEnum, NameEnum, OrganizationEnum, SizeEnum } from './enums';
