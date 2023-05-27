import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { ClassEnum, ResultType } from '@sf-girls-calculator/calculator';

export const CurrentViewAtom = atomWithReset<'calculator' | 'teamfinder'>('calculator');

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
