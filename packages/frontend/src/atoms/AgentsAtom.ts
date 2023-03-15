import { atom } from 'jotai';
import { Agents, NewAgent } from 'sf-girls-calculator-calculator';

const AgentsAtom = atom<NewAgent[]>(Agents.Agents);

export default AgentsAtom;
