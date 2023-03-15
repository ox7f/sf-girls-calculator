import { EffectTypeEnum } from '../../enums/index';
import {
  Effect,
  EffectDamage,
  EffectDOT,
  NewDamageEffect,
  NewDOTEffect,
  NewEffect,
  NewSkill,
  Fight,
  Agent
} from '../../model';

export class Skill {
  name: string;
  description: string;
  is_stackable: boolean;
  cooldown: number;
  effects: Array<Effect | EffectDamage | EffectDOT>;

  constructor({ name, description, effects, is_stackable = false, cooldown }: NewSkill) {
    this.name = name;
    this.description = description;
    this.is_stackable = is_stackable;
    this.cooldown = cooldown * 1000; // seconds to ms

    this.effects = effects.map((effect) => {
      let init_effect;

      if (effect.type === EffectTypeEnum.DOT) {
        init_effect = new EffectDOT(effect as NewDOTEffect);
      } else if (effect.type === EffectTypeEnum.Damage) {
        init_effect = new EffectDamage(effect as NewDamageEffect);
      } else {
        init_effect = new Effect(effect as NewEffect);
      }

      return init_effect;
    });
  }

  cast(agent: Agent, fight: Fight) {
    this.effects.forEach((effect) => effect.activate(agent, fight));
  }
}
