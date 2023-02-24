import { EffectEnum } from '../../enums/index.js';
import { EffectFunctionType, DamageEffectFunctionType } from '../types/index.js';

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
