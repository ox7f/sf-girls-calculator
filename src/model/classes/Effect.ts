import { NewEffect } from "../interfaces";
import { EffectFunctionType } from "../types";

export class Effect {
  begin: number = 0; // timestamp when the effect was applied
  duration: number = 0; // effect duration
  apply: EffectFunctionType;
  remove: EffectFunctionType;

  constructor({ duration, apply, remove }: NewEffect) {
    this.duration = duration ? duration * 1000 : 0; // seconds to ms
    this.apply = apply;
    this.remove = remove;
  }
}
