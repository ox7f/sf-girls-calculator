import { atomWithReset } from 'jotai/utils';
import { Agents } from 'sf-girls-calculator-calculator';
import { SelectFilterType } from './types';

const FilteredAgentsAtom = atomWithReset<SelectFilterType>({
  calculator: Agents.Agents.map((agent) => agent.name),
  teamfinder: Agents.Agents.map((agent) => agent.name)
});

export default FilteredAgentsAtom;
