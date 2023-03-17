import { NewTarget } from '../../model/index';

export class Target {
  name: string;
  health: number;
  current_health: number;
  critical_resistance: number;
  damage_taken_multiplier = 1;
  weakness_multiplier = 1;
  duration: number;

  constructor({ name, health, critical_resistance, duration }: NewTarget) {
    this.name = name;
    this.health = health;
    this.current_health = health;
    this.duration = duration * 1000; // seconds to ms
    this.critical_resistance = critical_resistance;
  }

  take_damage(time: number, agent_damage: number) {
    if (time <= 0) return 0;

    const damage = Math.round(agent_damage * this.damage_taken_multiplier * this.weakness_multiplier);
    this.current_health -= damage;

    return damage;
  }
}
