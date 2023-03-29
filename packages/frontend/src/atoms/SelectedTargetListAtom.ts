import { atomWithReset } from 'jotai/utils';
import { Targets } from '@sf-girls-calculator/calculator';
import { SelectFilterType } from './types';

export const SelectedTargetListAtom = atomWithReset<SelectFilterType>({
  calculator: [Targets.Dummy_Stage_4.name],
  teamfinder: [Targets.Dummy_Stage_4.name]
});
