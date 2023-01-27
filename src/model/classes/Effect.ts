import { NewEffect } from "../interfaces";
import { EffectFunctionType } from "../types";

export class Effect {
  begin: number = 0; // timestamp when the effect was applied
  duration: number = 0; // effect duration
  apply: EffectFunctionType;
  remove: EffectFunctionType;

  constructor(effect: NewEffect) {
    this.duration = effect.duration ? effect.duration * 1000 : 0; // seconds to ms
    this.apply = effect.apply;
    this.remove = effect.remove;
  }
}
