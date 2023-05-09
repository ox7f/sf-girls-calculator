import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { Agent, Agents, ResultType, Target, Targets } from '@sf-girls-calculator/calculator';

const initializedAgents = Agents.Agents.map((agent) => new Agent(agent));
const initializedTargets = Targets.Targets.map((target) => new Target(target));

export const AgentListAtom = atom<Agent[]>(initializedAgents);
export const TargetListAtom = atom<Target[]>(initializedTargets);

export const AgentNameAtom = atomWithReset('');
export const TargetNameAtom = atomWithReset('');

export const CurrentViewAtom = atomWithReset<'calculator' | 'teamfinder'>('calculator');

type SelectFilterType = {
  calculator: string[];
  teamfinder: string[];
};

export const FilteredAgentListAtom = atomWithReset<SelectFilterType>({
  calculator: Agents.Agents.map((agent) => agent.name),
  teamfinder: Agents.Agents.map((agent) => agent.name)
});

export const FilteredTargetListAtom = atomWithReset<SelectFilterType>({
  calculator: Targets.Targets.map((target) => target.name),
  teamfinder: Targets.Targets.map((target) => target.name)
});

export const SelectedAgentListAtom = atomWithReset<SelectFilterType>({
  calculator: [],
  teamfinder: []
});

export const SelectedTargetListAtom = atomWithReset<SelectFilterType>({
  calculator: [Targets.Dummy_Stage_4.name],
  teamfinder: [Targets.Dummy_Stage_4.name]
});

type ResultListType = {
  calculator: ResultType[];
  teamfinder: ResultType[];
};

export const ResultListAtom = atom<ResultListType>({
  calculator: [],
  teamfinder: []
});
