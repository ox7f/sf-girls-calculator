import { EffectFunctionType, DamageEffectFunctionType } from '../types';
import { EffectEnum } from '../../enums';

export interface NewEffect {
  type: EffectEnum;
  apply: EffectFunctionType;
  remove: EffectFunctionType;
  duration: number;
}

export interface NewDamageEffect {
  type: EffectEnum;
  damage: DamageEffectFunctionType;
}

export interface NewDOTEffect {
  type: EffectEnum;
  duration: number;
  interval: number;
  damage: DamageEffectFunctionType;
}
