import { NewSkill } from "../interfaces";
import { Effect } from "./index";

export class Skill {
  name: string;
  effects: Effect[];
  is_stackable: boolean; // determines if skill is stackable
  cooldown: number; // cooldown of skill

  constructor({ name, effects, is_stackable, cooldown }: NewSkill) {
    this.name = name;
    this.effects = effects.map((e) => new Effect(e));
    this.is_stackable = is_stackable;
    this.cooldown = cooldown * 1000; // seconds to ms
  }
}
