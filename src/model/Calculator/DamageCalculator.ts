import { Agent } from "../index";

export class DamageCalculator {
  public calculate(
    a: Agent,
    combatModifiers: number,
    weaknessModifiers: number
  ): number {
    return (
      combatModifiers *
      weaknessModifiers *
      a.normal_attack *
      a.critical_rate *
      a.critical_damage
    );
  }
}
