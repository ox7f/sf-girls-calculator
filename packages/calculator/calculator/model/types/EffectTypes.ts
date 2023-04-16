import { Agent, Target } from '../classes';

export type EffectParams = {
  agent: Agent;
  team: Agent[];
  target: Target;
};

export type EffectFunction = (params: EffectParams) => void;

export type DamageEffectFunction = (params: EffectParams) => number;
