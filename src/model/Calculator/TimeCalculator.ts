import { Agent } from "../index";

export class TimeCalculator {
  public calculateTimeToAttack(a: Agent): number {
    return (1000 / a.attack_speed) * 1000;
  }
}
