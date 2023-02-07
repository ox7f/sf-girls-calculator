import { atom } from 'jotai';
import { NewAgent, NewTarget } from 'sf-girls-calculator-calculator';

export const selectedAgentsAtom = atom<NewAgent[]>([]);
export const selectedTargetAtom = atom<NewTarget | null>(null);
