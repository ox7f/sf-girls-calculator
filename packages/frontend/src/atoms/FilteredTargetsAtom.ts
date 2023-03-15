import { atomWithReset } from 'jotai/utils';
import { Targets } from 'sf-girls-calculator-calculator';
import { SelectFilterType } from './types';

const FilteredTargetAtom = atomWithReset<SelectFilterType>({
  calculator: Targets.Targets.map((target) => target.name),
  teamfinder: Targets.Targets.map((target) => target.name)
});

export default FilteredTargetAtom;
