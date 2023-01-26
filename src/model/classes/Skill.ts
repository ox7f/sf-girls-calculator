import { NewSkill } from "../interfaces";
import { Effect } from "./index";

export class Skill {
  effect: Effect;
  cooldown: number; // cooldown of skill

  constructor({ effect, cooldown }: NewSkill) {
    this.effect = new Effect(effect);
    this.cooldown = cooldown * 1000; // seconds to ms
  }
}
