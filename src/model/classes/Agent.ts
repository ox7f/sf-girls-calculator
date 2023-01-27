import { Skill, Target } from "./index";
import { NewAgent } from "../interfaces";
import { AttackMode, ClassName, Name, Organization, Size } from "../../enums";

export class Agent {
  name: Name;
  organization: Organization;
  cup_size: Size;
  className: ClassName;
  attack_speed: number; // number of attacks per second
  normal_attack: number; // damage of a "normal" attack (when projectile or weapon hits target)
  critical_rate: number; // probability that a attack will be critical attack
  critical_damage: number; // multiplier of damage for a critical attack
  skill_damage: number; // determines the damage of a skill
  skill: Skill;

  attack_mode: AttackMode = AttackMode.Normal; // attribute that is used for damage calculation
  last_attack_time: number = 0; // timestamp of the last attack
  attack_counter: number = 0; // number of attacks
  dealt_damage: number = 0; // damage dealt during fight

  constructor(agent: NewAgent) {
    this.name = agent.name;
    this.organization = agent.organization;
    this.cup_size = agent.cup_size;
    this.className = agent.className;
    this.attack_speed = agent.attack_speed * 1000; // seconds to ms
    this.normal_attack = agent.normal_attack;
    this.critical_rate = agent.critical_rate;
    this.critical_damage = agent.critical_damage;
    this.skill_damage = agent.skill_damage;
    this.skill = new Skill(agent.skill);
  }

  attack(target: Target, time: number) {
    let total_damage = this.calculate_damage();

    this.last_attack_time = time;
    this.attack_counter++;

    target.takeDamage(total_damage, this);
  }

  calculate_damage(): number {
    switch (this.attack_mode) {
      case AttackMode.Normal:
        return this.normal_attack * this.critical_rate * this.critical_damage;
      case AttackMode.Skill:
        return this.skill_damage * this.critical_rate * this.critical_damage;
      case AttackMode.Both:
        return (
          (this.normal_attack + this.skill_damage) *
          this.critical_rate *
          this.critical_damage
        );
      default:
        return 0;
    }
  }
}
