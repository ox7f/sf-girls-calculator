import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { Agents, ClassEnum, ResultType, Targets } from '@sf-girls-calculator/calculator';

export const CurrentViewAtom = atomWithReset<'calculator' | 'teamfinder'>('calculator');

export const FilteredAgentListAtom = atomWithReset<string[]>(Agents.Agents.map((agent) => agent.name));
export const FilteredTargetListAtom = atomWithReset<string[]>(Targets.Targets.map((target) => target.name));

type ResultListType = {
  calculator: ResultType[];
  teamfinder: ResultType[];
};

export const ResultListAtom = atom<ResultListType>({
  calculator: [],
  teamfinder: []
});

export const ResultListHistoryAtom = atom<ResultType[]>([]);

type FilterType = {
  calculator: {
    class: ClassEnum[];
    sort: string;
    sortParam: string;
  };
  teamfinder: {
    class: ClassEnum[];
    sort: string;
    sortParam: string;
  };
};

export const FilterAtom = atom<FilterType>({
  calculator: {
    class: [],
    sort: 'ascending',
    sortParam: 'name'
  },
  teamfinder: {
    class: [],
    sort: 'ascending',
    sortParam: 'name'
  }
});
