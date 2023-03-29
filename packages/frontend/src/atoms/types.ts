import { ResultType } from '@sf-girls-calculator/calculator';

export type AgentItem = {
  name: string;
  attack_speed: number;
  normal_attack: number;
  skill_damage: number;
  critical_rate: number;
  critical_damage: number;
  [key: string]: string | number;
};

export type AgentEvoTreeItem = {
  name: string;
  nodes: EvoNodeItem[];
  [key: string]: string | EvoNodeItem[];
};

export type EvoNodeItem = {
  name: string;
  level: number;
  children: EvoNodeItem[];
};

export type TargetItem = {
  name: string;
  health: number;
  critical_resistance: number;
  duration: number;
  [key: string]: string | number;
};

export type ResultListType = {
  calculator: ResultType[];
  teamfinder: ResultType[];
};

export type SelectFilterType = {
  calculator: string[];
  teamfinder: string[];
};
