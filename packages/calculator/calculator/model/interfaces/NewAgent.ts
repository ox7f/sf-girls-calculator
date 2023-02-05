import { NewSkill } from './index';
import { ClassEnum, NameEnum, OrganizationEnum, SizeEnum } from '../../enums';

export interface NewAgent {
  name: NameEnum;
  organization: OrganizationEnum;
  cup_size: SizeEnum;
  class: ClassEnum;
  attack_speed: number;
  normal_attack: number;
  critical_rate: number;
  critical_damage: number;
  skill_damage: number;
  skill: NewSkill;
  apply_skill_time?: number;
  remove_skill_time?: number;
}
