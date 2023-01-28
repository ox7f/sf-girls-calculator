import { NewEffect } from "./index";

export interface NewSkill {
  effects: NewEffect[];
  cooldown: number;
  is_stackable: boolean;
  name: string;
}
