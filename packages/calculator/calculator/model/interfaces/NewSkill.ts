import { NewEffect, NewDamageEffect, NewDOTEffect } from './index';

export interface NewSkill {
  name: string;
  description: string;
  effects: Array<NewEffect | NewDOTEffect | NewDamageEffect>;
  is_stackable?: boolean;
  cooldown: number;
}
