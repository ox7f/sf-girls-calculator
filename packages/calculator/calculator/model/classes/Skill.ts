import { EffectTypeEnum } from '../../enums';
import {
  Effect,
  EffectAOA,
  EffectDamage,
  EffectDOT,
  NewEffectAOA,
  NewEffectDamage,
  NewEffectDOT,
  NewEffect,
  NewSkill,
  EffectParams
} from '../../model';

export class Skill {
  name: string;
  description: string;
  cooldown: number;
  effects: (Effect | EffectDamage | EffectDOT | EffectAOA)[];

  constructor({ name, description, effects, cooldown }: NewSkill) {
    this.name = name;
    this.description = description;
    this.cooldown = cooldown * 1000; // seconds to ms
    this.effects = this.initializeEffects(effects);
  }

  private initializeEffects(effects: (NewEffect | NewEffectDamage | NewEffectDOT | NewEffectAOA)[]) {
    return effects.map((effect) => {
      switch (effect.type) {
        case EffectTypeEnum.AOA:
          return new EffectAOA(effect as NewEffectAOA);
        case EffectTypeEnum.DAMAGE:
          return new EffectDamage(effect as NewEffectDamage);
        case EffectTypeEnum.DOT:
          return new EffectDOT(effect as NewEffectDOT);
        default:
          return new Effect(effect as NewEffect);
      }
    });
  }

  cast(params: EffectParams) {
    this.effects.forEach((effect) => effect.activate(params));
  }
}
