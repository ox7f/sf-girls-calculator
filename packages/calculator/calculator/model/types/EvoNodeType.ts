import { Agent, EvoNode, Fight } from '../classes';

export type ApplyParams = {
  agent: Agent;
  fight: Fight;
  node: EvoNode;
};

export type ApplyResult = {
  attackSpeed?: number;
  normalAttack?: number;
  criticalRate?: number;
  criticalDamage?: number;
  skillDamage?: number;
  dotDamage?: number;
  doubleDamage?: number;
  doubleHit?: number;
  [key: string]: number | undefined;
};

export type ApplyFunction = (params: ApplyParams) => ApplyResult;
