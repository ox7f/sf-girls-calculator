import { Agent, Target } from '../classes';

export type EffectParams = {
  agent: Agent;
  target: Target;
  team: Agent[];
  time: number;
};

export type EffectFunction = (params: EffectParams) => void;

export type DamageEffectFunction = (params: EffectParams) => number;
