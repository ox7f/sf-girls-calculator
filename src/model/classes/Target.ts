import { NewTarget } from "../interfaces";
import { Agent } from "./Agent";

export class Target {
  health: number;
  critical_resistance: number = 0;
  received_damage_multiplier: number = 1;

  constructor({ health }: NewTarget) {
    this.health = health;
  }

  takeDamage(damage: number, agent: Agent): void {
    agent.dealt_damage += damage;
    this.health -= damage * this.received_damage_multiplier;
  }
}
