import { ClassEnum, RarityEnum, ResultType } from '@sf-girls-calculator/calculator';

export type ResultListType = {
  calculator: ResultType[];
  teamfinder: ResultType[];
};

export type FilterType = {
  calculator: {
    class: ClassEnum[];
    rarity: RarityEnum[];
    searchParam: string;
    sort: string;
    sortParam: string;
  };
  teamfinder: {
    class: ClassEnum[];
    rarity: RarityEnum[];
    searchParam: string;
    sort: string;
    sortParam: string;
  };
};

export type ViewOption = {
  openModal: boolean;
  isFavorite: boolean;
  calculator: {
    isSelected: boolean;
  };
  teamfinder: {
    isSelected: boolean;
  };
};

export type AgentItem = {
  index: number;
  name: string;
  stats: AgentStats;
  nodes: AgentNode[];
  options: ViewOption;
  [key: string]: string | number | AgentStats | AgentNode[] | ViewOption;
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
  options: ViewOption;
  [key: string]: string | number | ViewOption;
};
