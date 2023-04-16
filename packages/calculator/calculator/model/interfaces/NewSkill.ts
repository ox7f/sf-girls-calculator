import { NewEffect, NewEffectDamage, NewEffectDOT } from '../interfaces';

export interface NewSkill {
  name: string;
  description: string;
  effects: Array<NewEffect | NewEffectDOT | NewEffectDamage>;
  isStackable?: boolean;
  cooldown: number;
}
