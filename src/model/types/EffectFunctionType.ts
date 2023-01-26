import { Agent, Target } from "../classes";

export type EffectParamType = {
  agent: Agent;
  team: Agent[];
  target: Target;
};

export type EffectFunctionType = (params: EffectParamType) => void;
