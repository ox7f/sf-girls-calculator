import { NewSkill } from "./index";
import { ClassName, Name, Organization, Size } from "../../enums";

export interface NewAgent {
  name: Name;
  organization: Organization;
  cup_size: Size;
  className: ClassName;
  attack_speed: number;
  normal_attack: number;
  critical_rate: number;
  critical_damage: number;
  skill_damage: number;
  skill: NewSkill;
}
