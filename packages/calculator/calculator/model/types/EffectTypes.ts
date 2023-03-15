import { Agent, Target } from '../classes/index';

export type EffectParamType = {
  agent: Agent;
  team: Agent[];
  target: Target;
};

export type EffectFunctionType = (params: EffectParamType) => void;

export type DamageEffectFunctionType = (params: EffectParamType) => number;
