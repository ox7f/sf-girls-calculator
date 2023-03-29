import { atomWithReset } from 'jotai/utils';

export const CurrentViewAtom = atomWithReset<'calculator' | 'teamfinder'>('calculator');
