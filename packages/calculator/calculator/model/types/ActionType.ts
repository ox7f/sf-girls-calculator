import { ActionEnum, BonusEnum, EffectTypeEnum } from '../../enums/index';

export type ActionType = {
  attack_mode: string;
  effect_type: EffectTypeEnum;
  damage: number;
  type: ActionEnum;
  bonus?: BonusEnum;
};
