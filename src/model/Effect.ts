import { Agent, Target } from "./index";

// TODO: implement damage over time effect

export interface NewEffect {
  damage?: numberType;
  fixed?: calculateType;
  multiplier?: calculateType;
  is_valid?: conditionType;
  begin?: number;
  duration?: number;
}

export class Effect {
  damage: numberType;
  fixed: calculateType;
  multiplier: calculateType;
  is_valid: conditionType;
  begin: number;
  duration: number;

  constructor(effect: NewEffect) {
    this.damage = effect.damage ?? numberCb;
    this.fixed = effect.fixed ?? calculateCb;
    this.multiplier = effect.multiplier ?? calculateCb;
    this.is_valid = effect.is_valid ?? conditionCb;

    this.begin = effect.begin ?? 0;
    this.duration = effect.duration ? effect.duration * 1000 : 0;
  }
}

export interface numberType {
  (agent: Agent, target: Target): number;
}

export interface calculateType {
  (agent: Agent, target: Target, team?: Agent[]): effectType;
  [key: string]: any;
}

export interface conditionType {
  (agent: Agent): boolean;
}

export type effectType = {
  damage?: (agent?: Agent, target?: Target) => number;
  attack_speed?: (agent?: Agent, target?: Target) => number;
  normal_attack?: (agent?: Agent, target?: Target) => number;
  critical_rate?: (agent?: Agent, target?: Target) => number;
  critical_damage?: (agent?: Agent, target?: Target) => number;
  skill_damage?: (agent?: Agent, target?: Target) => number;
  [key: string]: any;
};

function calculateCb(
  agent: Agent,
  target: Target,
  team?: Agent[]
): effectType {
  return {};
}

function numberCb(agent: Agent, target: Target): number {
  return 0;
}

function conditionCb(agent: Agent): boolean {
  return false;
}
