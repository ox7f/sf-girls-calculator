import { atom } from 'jotai';
import { Target, Targets } from '@sf-girls-calculator/calculator';

const initializedTargets = Targets.Targets.map((target) => new Target(target));

export const TargetListAtom = atom<Target[]>(initializedTargets);
