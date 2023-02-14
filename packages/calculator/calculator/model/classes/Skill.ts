import { Effect, DamageEffect, DOTEffect, NewDamageEffect, NewDOTEffect, NewEffect, NewSkill } from '../../model';
import { EffectEnum } from '../../enums';

export class Skill {
  name: string;
  description: string;
  effects: Array<Effect | DamageEffect | DOTEffect>;
  is_stackable: boolean; // determines if skill is stackable
  cooldown: number; // cooldown of skill

  constructor({ name, description, effects, is_stackable = false, cooldown }: NewSkill) {
    this.name = name;
    this.description = description;
    this.is_stackable = is_stackable;
    this.cooldown = cooldown * 1000; // seconds to ms

    this.effects = effects.map((effect) => {
      let new_effect;

      if (effect.type === EffectEnum.DOT) {
        new_effect = new DOTEffect(effect as NewDOTEffect);
      } else if (effect.type === EffectEnum.Damage) {
        new_effect = new DamageEffect(effect as NewDamageEffect);
      } else {
        new_effect = new Effect(effect as NewEffect);
      }

      return new_effect;
    });
  }
}
