import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { ResultType } from '@sf-girls-calculator/calculator';

import { FilterType, ResultListType } from './types';
import { ViewName } from '../components/utils';

export const CurrentViewAtom = atomWithReset<ViewName>('calculator');

export const ResultListAtom = atom<ResultListType>({
  calculator: [],
  teamfinder: []
});

export const ResultListHistoryAtom = atom<ResultType[]>([]);

export const FilterAtom = atom<FilterType>({
  calculator: {
    class: [],
    rarity: [],
    searchParam: '',
    sort: 'ascending',
    sortParam: 'name'
  },
  teamfinder: {
    class: [],
    rarity: [],
    searchParam: '',
    sort: 'ascending',
    sortParam: 'name'
  }
});
