import { ActionEnum, AttackModeEnum, EffectEnum } from '../../enums';

export type ActionType = {
  type: ActionEnum;
  skill_type: EffectEnum
  attack_mode: AttackModeEnum;
};
