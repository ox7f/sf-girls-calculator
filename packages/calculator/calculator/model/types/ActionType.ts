import { BonusEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../enums';

export type ActionType = {
  attackMode: string;
  effectType: EffectTypeEnum;
  damage: number;
  type: HistoryActionTypeEnum;
  bonus?: BonusEnum[];
};
