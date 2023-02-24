import { ActionEnum, AttackModeEnum, EffectEnum } from '../../enums';

export type ActionType = {
  skill_type: EffectEnum;
  attack_mode: AttackModeEnum;
  type?: ActionEnum;
};
