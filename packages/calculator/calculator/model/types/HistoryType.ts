import { ActionType } from '../types';

export type HistoryType = {
  actions: ActionType[];
  time: number;
  totalDamage: number;
};
