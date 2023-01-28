import { NewTarget } from "../interfaces";
import { Agent } from "./Agent";

export class Target {
  health: number;
  current_health: number;
  critical_resistance: number = 0;
  damage_taken_multiplier: number = 1;

  constructor({ health }: NewTarget) {
    this.health = health;
    this.current_health = health;
  }

  takeDamage(damage: number, agent: Agent): void {
    agent.dealt_damage += damage;
    this.current_health -= damage * this.damage_taken_multiplier;
  }
}
