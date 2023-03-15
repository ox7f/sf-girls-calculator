import { NewStats } from '../interfaces/index';

export class Stats {
  attack_speed: number;
  normal_attack: number;
  critical_rate: number;
  critical_damage: number;
  skill_damage: number;
  base_skill_damage: number;
  projectile_number: number;
  cast_time: number;

  attack_counter = 0;
  last_attack_time = 0;
  last_cast_time = 0;
  total_damage = 0;

  constructor({
    attack_speed,
    normal_attack,
    critical_rate,
    critical_damage,
    skill_damage,
    base_skill_damage,
    projectile_number = 1,
    cast_time = 0
  }: NewStats) {
    this.attack_speed = attack_speed;
    this.normal_attack = normal_attack;
    this.critical_rate = critical_rate;
    this.critical_damage = critical_damage;
    this.skill_damage = skill_damage;
    this.base_skill_damage = base_skill_damage;
    this.projectile_number = projectile_number;
    this.cast_time = cast_time * 1000; // seconds to ms
  }
}
