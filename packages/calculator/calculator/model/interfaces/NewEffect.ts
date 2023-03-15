import { EffectTypeEnum } from '../../enums/index';
import { EffectFunctionType, DamageEffectFunctionType } from '../types/index';

interface NewAbstractEffect {
  type: EffectTypeEnum;
}

export interface NewEffect extends NewAbstractEffect {
  apply: EffectFunctionType;
  remove: EffectFunctionType;
  duration: number;
  begin?: number;
}

export interface NewDamageEffect extends NewAbstractEffect {
  damage: DamageEffectFunctionType;
}

export interface NewDOTEffect extends NewAbstractEffect {
  duration: number;
  interval: number;
  damage: DamageEffectFunctionType;
  begin?: number;
}
