import { NewTarget } from "../interfaces";
import { Agent } from "./Agent";

export class Target {
  health: number;
  current_health: number;
  critical_resistance: number;
  damage_taken_multiplier: number = 1;

  constructor({ health, critical_resistance }: NewTarget) {
    this.health = health;
    this.current_health = health;
    this.critical_resistance = critical_resistance ?? 0;
  }

  takeDamage(damage: number, agent: Agent): void {
    agent.dealt_damage += damage;
    this.current_health -= damage * this.damage_taken_multiplier;
  }
}
