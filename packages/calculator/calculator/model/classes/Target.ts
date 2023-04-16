import { NewTarget } from '../../model';

export class Target {
  name: string;
  duration: number;
  health: number;
  currentHealth: number;
  criticalResistance: number;
  damageTakenMultiplier: number;
  weaknessMultiplier: number;

  constructor({ name, health, criticalResistance, duration }: NewTarget) {
    this.name = name;
    this.duration = duration * 1000; // seconds to ms
    this.health = health;
    this.currentHealth = health;
    this.criticalResistance = criticalResistance;
    this.damageTakenMultiplier = 1;
    this.weaknessMultiplier = 1;
  }

  takeDamage(agentDamage: number) {
    const damage = Math.round(agentDamage * this.damageTakenMultiplier * this.weaknessMultiplier);
    this.currentHealth -= damage;
    return damage;
  }
}
