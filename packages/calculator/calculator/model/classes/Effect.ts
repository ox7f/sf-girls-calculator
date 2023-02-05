import { NewDamageEffect, NewDOTEffect, NewEffect } from '../interfaces';
import { DamageEffectFunctionType, EffectFunctionType } from '../types';
import { EffectEnum } from '../../enums';

export class Effect {
  type: EffectEnum;
  apply: EffectFunctionType;
  remove: EffectFunctionType;
  duration: number; // effect duration
  begin = 0; // timestamp when the effect was applied

  constructor({ type, duration, apply, remove }: NewEffect) {
    this.type = type;
    this.apply = apply;
    this.remove = remove;
    this.duration = duration * 1000; // seconds to ms
  }
}

export class DamageEffect {
  type: EffectEnum;
  damage: DamageEffectFunctionType;

  constructor({ type, damage }: NewDamageEffect) {
    this.type = type;
    this.damage = damage;
  }
}

export class DOTEffect {
  type: EffectEnum;
  duration = 0;
  interval = 0;
  damage: DamageEffectFunctionType;
  begin = 0;

  constructor({ type, duration, damage, interval }: NewDOTEffect) {
    this.type = type;
    this.duration = duration * 1000; // seconds to ms
    this.interval = interval * 1000; // seconds to ms
    this.damage = damage;
  }
}
