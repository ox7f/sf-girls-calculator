import { ApplyFunction } from '../types';

export interface NewEvoNode {
  name: string;
  level?: number;
  children?: NewEvoNode[];
  apply?: ApplyFunction;
}
