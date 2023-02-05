import { Effect, Skill, Target } from './index';
import { NewAgent } from '../interfaces';
import { AttackModeEnum, ClassEnum, NameEnum, OrganizationEnum, SizeEnum } from '../../enums';
import { get_critical_damage } from '../../helper';

export class Agent {
  name: NameEnum;
  organization: OrganizationEnum;
  cup_size: SizeEnum;
  class: ClassEnum;
  attack_speed: number; // number of attacks per second
  normal_attack: number; // damage of a "normal" attack (when projectile or weapon hits target)
  critical_rate: number; // probability that a attack will be critical attack
  critical_damage: number; // multiplier of damage for a critical attack
  skill_damage: number; // determines the damage of a skill
  base_skill_damage = 0;
  skill: Skill;

  apply_skill_time: number; // time to cast a skill (unable to attack during this time)
  apply_skill_remaining_time = 0; // remaining skill cast time
  remove_skill_time: number; // time to remove a skill (unable to attack during this time)
  remove_skill_remaining_time = 0; // remaining skill remove time
  has_animation: boolean; // determines if agent has skill cast animation

  applied_effects: Effect[] = []; // list of applied (skill) effects
  attack_mode: AttackModeEnum = AttackModeEnum.Normal; // determines attribute that is used for damage calculation
  last_attack_time = 0; // timestamp of the last attack
  attack_counter = 0; // number of attacks
  dealt_damage = 0; // damage dealt during fight

  constructor(agent: NewAgent) {
    this.name = agent.name;
    this.organization = agent.organization;
    this.cup_size = agent.cup_size;
    this.class = agent.class;
    this.attack_speed = agent.attack_speed * 1000; // seconds to ms
    this.normal_attack = agent.normal_attack;
    this.critical_rate = agent.critical_rate;
    this.critical_damage = agent.critical_damage;
    this.skill_damage = agent.skill_damage;
    this.base_skill_damage = agent.skill_damage;
    this.skill = new Skill(agent.skill);
    this.apply_skill_time = agent.apply_skill_time
      ? agent.apply_skill_time * 1000 // seconds to ms
      : 0;
    this.remove_skill_time = agent.remove_skill_time
      ? agent.remove_skill_time * 1000 // seconds to ms
      : 0;

    this.has_animation = this.apply_skill_time > 0 || this.remove_skill_time > 0;
  }

  attack(target: Target, time: number) {
    const total_damage = this.calculate_damage(target);

    this.last_attack_time = time;
    this.attack_counter++;

    target.takeDamage(total_damage, this);
  }

  calculate_damage(target: Target): number {
    const critical_rate = this.critical_rate - target.critical_resistance;
    let damage = 0;

    switch (this.attack_mode) {
      case AttackModeEnum.Normal:
        damage = this.normal_attack;
        break;
      case AttackModeEnum.Skill:
        damage = this.skill_damage;
        break;
      case AttackModeEnum.Both:
        damage = this.normal_attack + this.skill_damage;
    }

    return get_critical_damage(damage, critical_rate, this.critical_damage);
  }
}
