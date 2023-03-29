import { atom } from 'jotai';
import { ResultListType } from './types';

export const ResultListAtom = atom<ResultListType>({
  calculator: [],
  teamfinder: []
});
