import { NewTarget } from '../../model/index.js';

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
    this.critical_resistance = critical_resistance ?? 0;
  }

  take_damage(agent_damage: number): void {
    const damage = agent_damage * this.damage_taken_multiplier * this.weakness_multiplier;
    this.current_health -= damage;
  }
}
