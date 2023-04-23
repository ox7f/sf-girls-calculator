import { EffectTypeEnum } from '../../enums';
import {
  Agent,
  Effect,
  EffectDamage,
  EffectDOT,
  Fight,
  NewEffectDamage,
  NewEffectDOT,
  NewEffect,
  NewSkill
} from '../../model';

export class Skill {
  name: string;
  description: string;
  cooldown: number;
  effects: (Effect | EffectDamage | EffectDOT)[];

  constructor({ name, description, effects, cooldown }: NewSkill) {
    this.name = name;
    this.description = description;
    this.cooldown = cooldown * 1000; // seconds to ms
    this.effects = this.initializeEffects(effects);
  }

  private initializeEffects(effects: (NewEffect | NewEffectDamage | NewEffectDOT)[]) {
    return effects.map((effect) => {
      switch (effect.type) {
        case EffectTypeEnum.DOT:
          return new EffectDOT(effect as NewEffectDOT);
        case EffectTypeEnum.DAMAGE:
          return new EffectDamage(effect as NewEffectDamage);
        default:
          return new Effect(effect as NewEffect);
      }
    });
  }

  cast(agent: Agent, fight: Fight) {
    this.effects.forEach((effect) => effect.activate(agent, fight));
  }
}
