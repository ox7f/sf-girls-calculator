import { NewSkill } from "./index";
import { ClassName, Name, Organization, Size } from "../../enums";

export interface NewAgent {
  name: Name;
  organization: Organization;
  cup_size: Size;
  class: ClassName;
  attack_speed: number;
  normal_attack: number;
  critical_rate: number;
  critical_damage: number;
  skill_damage: number;
  skill: NewSkill;
  apply_skill_time?: number;
  remove_skill_time?: number;
}
