import { atomWithReset } from 'jotai/utils';
import { SelectFilterType } from './types';

const SelectedAgentsAtom = atomWithReset<SelectFilterType>({
  calculator: [],
  teamfinder: []
});

export default SelectedAgentsAtom;
