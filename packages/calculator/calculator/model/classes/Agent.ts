import { DOTEffect, Effect, Skill, Target, NewAgent, HistoryType } from '../../model';
import { ActionEnum, AttackModeEnum, ClassEnum, EffectEnum, NameEnum, OrganizationEnum, SizeEnum } from '../../enums';
import { calculate_critical_damage } from '../../helper';

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
  base_skill_damage: number; //copy of skill_damage. used for skill damage calculation
  skill: Skill;

  applied_effects: Array<Effect | DOTEffect> = []; // list of applied effect s(self, team) and dot effects
  attack_mode: AttackModeEnum = AttackModeEnum.Normal; // determines attribute that is used for damage calculation

  apply_skill_time: number; // skill cast animation time (unable to attack during this time)
  remove_skill_time: number; // skill remove animation time (unable to attack during this time)
  apply_skill_remaining_time = 0; // remaining skill cast time
  remove_skill_remaining_time = 0; // remaining skill remove time
  has_animation: boolean; // determines if agent has skill cast animation

  last_attack_time = 0; // timestamp of the last attack
  attack_counter = 0; // number of attacks
  total_damage = 0; // damage dealt during fight
  history: HistoryType[] = []; // log of events in a fight

  constructor({
    name,
    organization,
    cup_size,
    class: className,
    attack_speed,
    normal_attack,
    critical_rate,
    critical_damage,
    skill_damage,
    base_skill_damage,
    skill,
    apply_skill_time = 0,
    remove_skill_time = 0
  }: NewAgent) {
    this.name = name;
    this.organization = organization;
    this.cup_size = cup_size;
    this.class = className;

    this.attack_speed = attack_speed * 1000; // seconds to ms
    this.normal_attack = normal_attack;
    this.critical_rate = critical_rate;
    this.critical_damage = critical_damage;
    this.skill_damage = skill_damage;
    this.base_skill_damage = base_skill_damage;
    this.skill = new Skill(skill);

    this.apply_skill_time = apply_skill_time * 1000; // seconds to ms
    this.remove_skill_time = remove_skill_time * 1000; // seconds to ms;
    this.has_animation = this.apply_skill_time > 0 || this.remove_skill_time > 0;
  }

  attack(target: Target, time: number) {
    const damage = this.calculate_damage(target);

    this.last_attack_time = time;
    this.total_damage += damage;
    this.attack_counter++;

    this.history.push({
      time,
      damage,
      total_damage: this.total_damage,
      action: {
        type: ActionEnum.Attack,
        skill_type: EffectEnum.None,
        attack_mode: this.attack_mode
      }
    });

    target.take_damage(damage);
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

    return calculate_critical_damage(damage, critical_rate, this.critical_damage);
  }
}
