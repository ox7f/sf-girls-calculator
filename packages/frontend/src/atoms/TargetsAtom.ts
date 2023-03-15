import { atom } from 'jotai';
import { Targets, NewTarget } from 'sf-girls-calculator-calculator';

const TargetsAtom = atom<NewTarget[]>(Targets.Targets);

export default TargetsAtom;
