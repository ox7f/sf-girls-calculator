import { EvoNode } from '../classes';
import { EvoNodeFunctionType } from '../types';

export interface NewEvoNode {
  name: string;
  level: number;
  affects: string;
  children: NewEvoNode[];
  rate: number;
  apply: EvoNodeFunctionType;
  locked: (node: EvoNode) => boolean;
}
