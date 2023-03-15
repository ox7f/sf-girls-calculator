import { Agent, Target } from '../classes/index';

export type ResultType = {
  team: Agent[];
  target: Target;
  time: number;
  total_damage: number;
};
