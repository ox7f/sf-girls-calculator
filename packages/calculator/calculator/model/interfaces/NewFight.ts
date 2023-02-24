import { Agent, Target } from '../classes/index.js';

export interface NewFight {
  team: Agent[];
  target: Target;
}
