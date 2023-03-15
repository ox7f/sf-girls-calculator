import { ResultType } from 'sf-girls-calculator-calculator';

export type AgentItem = {
  name: string;
  attack_speed: number;
  normal_attack: number;
  skill_damage: number;
  critical_rate: number;
  critical_damage: number;
  projectile_number: number;
  cast_time: number;
  [key: string]: string | number;
};

export type TargetItem = {
  name: string;
  health: number;
  critical_resistance: number;
  duration: number;
  [key: string]: string | number;
};

export type ResultsType = { calculator: ResultType[]; teamfinder: ResultType[] };
export type SelectFilterType = { calculator: string[]; teamfinder: string[] };
