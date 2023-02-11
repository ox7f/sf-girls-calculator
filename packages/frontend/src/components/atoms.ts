import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { NewAgent, NewTarget } from 'sf-girls-calculator-calculator';

export const SelectedAgentsAtom = atom<NewAgent[]>([]);
export const SelectedTargetAtom = atom<NewTarget | null>(null);

export type AgentAtomType = {
  name: string;
  bio?: string;
  title?: string;
  class?: string;
  attack_speed?: number;
  normal_attack?: number;
  skill_damage?: number;
  critical_rate?: number;
  critical_damage?: number;
};

export const AgentsAtomFamily = atomFamily(
  (agent: AgentAtomType) => atom(agent),
  (a: AgentAtomType, b: AgentAtomType) => a.name === b.name
);
