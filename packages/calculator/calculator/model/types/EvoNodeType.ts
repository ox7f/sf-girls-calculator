import { Agent, EvoNode, Fight } from '../classes';

export type EvoNodeParamType = {
  agent: Agent;
  node: EvoNode;
  fight: Fight;
};

export type EvoNodeFunctionType = (params: EvoNodeParamType) => number;
