import { NewSkill } from "../interfaces";
import { Effect } from "./index";

export class Skill {
  effects: Effect[];
  cooldown: number; // cooldown of skill

  constructor({ effects, cooldown }: NewSkill) {
    this.effects = effects.map((e) => new Effect(e));
    this.cooldown = cooldown * 1000; // seconds to ms
  }
}
