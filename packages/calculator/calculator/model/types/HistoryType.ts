import { ActionType } from './index';

export type HistoryType = {
  actions: ActionType[];
  time: number;
  total_damage: number;
};
