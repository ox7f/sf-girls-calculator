import { atom } from 'jotai';
import { ResultsType } from './types';

const ResultsAtom = atom<ResultsType>({
  calculator: [],
  teamfinder: []
});

export default ResultsAtom;
