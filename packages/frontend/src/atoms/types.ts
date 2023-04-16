export type AgentItem = {
  index: number;
  name: string;
  stats: AgentStats;
  nodes: AgentNode[];
  [key: string]: string | number | AgentStats | AgentNode[];
};

export type AgentNode = {
  name: string;
  level: number;
  [key: string]: string | number;
};

export type AgentStats = {
  attackSpeed: number;
  normalAttack: number;
  criticalRate: number;
  criticalDamage: number;
  skillDamage: number;
  [key: string]: number;
};

export type TargetItem = {
  index: number;
  name: string;
  health: number;
  criticalResistance: number;
  duration: number;
  [key: string]: string | number;
};
