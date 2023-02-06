import { Effect, DamageEffect, DOTEffect, NewDamageEffect, NewDOTEffect, NewEffect, NewSkill } from '../../model';
import { EffectEnum } from '../../enums';

export class Skill {
  name: string;
  description: string;
  effects: Array<Effect | DamageEffect | DOTEffect>;
  is_stackable: boolean; // determines if skill is stackable
  cooldown: number; // cooldown of skill

  constructor({ name, description, effects, is_stackable, cooldown }: NewSkill) {
    this.name = name;
    this.description = description;
    this.is_stackable = is_stackable;
    this.cooldown = cooldown * 1000; // seconds to ms

    this.effects = effects.map((effect) => {
      switch (effect.type) {
        case EffectEnum.Self:
        case EffectEnum.Team:
        case EffectEnum.Debuff:
          return new Effect(effect as NewEffect);
        case EffectEnum.Damage:
          return new DamageEffect(effect as NewDamageEffect);
        case EffectEnum.DOT:
          return new DOTEffect(effect as NewDOTEffect);
      }
    });
  }
}
