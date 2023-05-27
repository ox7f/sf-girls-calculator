import { Agent, Target } from '../classes';

export type ResultType = {
  id: string;
  team: Agent[];
  target: Target;
  time: number;
  totalDamage: number;
};
