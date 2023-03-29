import { atomWithReset } from 'jotai/utils';
import { Targets } from '@sf-girls-calculator/calculator';
import { SelectFilterType } from './types';

export const FilteredTargetListAtom = atomWithReset<SelectFilterType>({
  calculator: Targets.Targets.map((target) => target.name),
  teamfinder: Targets.Targets.map((target) => target.name)
});
