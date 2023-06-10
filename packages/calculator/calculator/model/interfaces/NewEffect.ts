import { DamageEffectFunction, EffectFunction } from '../types';
import { EffectTypeEnum } from '../../enums';

interface NewAbstractEffect {
  type: EffectTypeEnum;
}

export interface NewEffect extends NewAbstractEffect {
  duration: number;
  apply: EffectFunction;
  remove: EffectFunction;
  begin?: number;
  isStackable?: boolean;
}

export interface NewEffectDamage extends NewAbstractEffect {
  damage: DamageEffectFunction;
  numberOfHits?: number;
}

export interface NewEffectDOT extends NewAbstractEffect {
  duration: number;
  interval: number;
  damage: DamageEffectFunction;
  begin?: number;
}

export interface NewEffectAOA extends NewAbstractEffect {
  duration: number;
  apply: EffectFunction;
  begin?: number;
}
