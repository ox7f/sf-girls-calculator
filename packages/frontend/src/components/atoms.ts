import { atom } from 'jotai';
import { Agents, NewAgent, NewTarget, ResultType, Targets } from 'sf-girls-calculator-calculator';

export interface AgentAtomInterface {
  name: string;
  attack_speed: number;
  normal_attack: number;
  skill_damage: number;
  critical_rate: number;
  critical_damage: number;
  [key: string]: string | number;
}

const atomWithLocalStorage = (key: string, initialValue = null) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return initialValue;
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
};

// TODO: work with types for atomWithLocalStorage and replace the shit down below

const agents: NewAgent[] = [];
let modifiedAgents: AgentAtomInterface[] = [];
const targets: NewTarget[] = [];

for (const [, values] of Object.entries(Agents)) {
  agents.push(values);
  modifiedAgents.push(transformAgentToModifiedAgent(values));
}

for (const [, values] of Object.entries(Targets)) {
  targets.push(values);
}

const localStorageAgents = localStorage.getItem('modified_agents');

if (localStorageAgents) {
  for (const storageAgent of JSON.parse(localStorageAgents)) {
    modifiedAgents = modifiedAgents.map((agent) => {
      if (storageAgent.name === agent.name) {
        return storageAgent;
      }
      return agent;
    });
  }
}

export const AgentsAtom = atom<NewAgent[]>(agents);
export const ModifiedAgentsAtom = atom<AgentAtomInterface[]>(modifiedAgents);
export const SelectedAgentsAtom = atom<NewAgent[]>([]);
export const EditingAgent = atomWithLocalStorage('editing_agent', null);

export const TargetsAtom = atom<NewTarget[]>(targets);
export const SelectedTargetAtom = atom<NewTarget | null>(null);

export const ResultAtom = atom<ResultType | null>(null);
export const TotalDamageAtom = atom(0);

export function transformAgentToModifiedAgent(agent: NewAgent): AgentAtomInterface {
  return {
    name: agent.name,
    attack_speed: agent.attack_speed,
    normal_attack: agent.normal_attack,
    skill_damage: agent.skill_damage,
    critical_rate: agent.critical_rate,
    critical_damage: agent.critical_damage
  };
}

export function transformModifiedAgentToAgent(agent: NewAgent, modifiedAgent: AgentAtomInterface): NewAgent {
  return {
    ...agent,
    attack_speed: modifiedAgent.attack_speed,
    normal_attack: modifiedAgent.normal_attack,
    skill_damage: modifiedAgent.skill_damage,
    critical_rate: modifiedAgent.critical_rate,
    critical_damage: modifiedAgent.critical_damage
  };
}
