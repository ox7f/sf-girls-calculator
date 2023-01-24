export interface NewTarget {
  health: number;
  // critical_resistance: number;
  // shield: number;
}

export class Target {
  health: number;

  constructor({ health }: NewTarget) {
    this.health = health;
  }
}
