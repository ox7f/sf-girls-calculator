import { NewTarget } from "../interfaces";
import { Agent } from "./Agent";

export class Target {
  health: number;
  current_health: number;
  critical_resistance: number;
  damage_taken_multiplier: number = 1;
  weakness_multiplier: number = 1;
  duration: number;

  constructor({ health, critical_resistance, duration }: NewTarget) {
    this.health = health;
    this.current_health = health;
    this.duration = duration * 1000; // seconds to ms
    this.critical_resistance = critical_resistance ?? 0;
  }

  takeDamage(attack_damage: number, agent: Agent): void {
    const dealt_damage =
      attack_damage * this.damage_taken_multiplier * this.weakness_multiplier;
    agent.dealt_damage += dealt_damage;
    this.current_health -= dealt_damage;
  }
}
