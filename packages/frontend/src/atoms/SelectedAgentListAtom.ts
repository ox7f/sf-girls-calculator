import { atomWithReset } from 'jotai/utils';
import { SelectFilterType } from './types';

export const SelectedAgentListAtom = atomWithReset<SelectFilterType>({
  calculator: [],
  teamfinder: []
});
