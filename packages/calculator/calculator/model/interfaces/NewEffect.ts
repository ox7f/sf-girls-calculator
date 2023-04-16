import { DamageEffectFunction, EffectFunction } from '../types';
import { EffectTypeEnum } from '../../enums';

interface NewAbstractEffect {
  type: EffectTypeEnum;
}

export interface NewEffect extends NewAbstractEffect {
  apply: EffectFunction;
  remove: EffectFunction;
  duration: number;
  begin?: number;
}

export interface NewEffectDamage extends NewAbstractEffect {
  damage: DamageEffectFunction;
}

export interface NewEffectDOT extends NewAbstractEffect {
  duration: number;
  interval: number;
  damage: DamageEffectFunction;
  begin?: number;
}
