import { Effect, NewEffect } from "./index";

export interface NewSkill {
  effects: NewEffect[];
  cooldown: number;
}

export class Skill {
  effects: Effect[];
  cooldown: number; // cooldown of skill

  constructor({ effects, cooldown }: NewSkill) {
    this.effects = effects.map((effect) => new Effect(effect));
    this.cooldown = cooldown * 1000; // seconds to ms
  }
}
