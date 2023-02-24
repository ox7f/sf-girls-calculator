import { ActionEnum, AttackModeEnum, EffectEnum } from '../../enums/index.js';

export type ActionType = {
  skill_type: EffectEnum;
  attack_mode: AttackModeEnum;
  type?: ActionEnum;
};
