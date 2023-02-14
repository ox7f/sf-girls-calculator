import { ActionType } from './index';

export type HistoryType = {
  time: number;
  damage: number;
  total_damage: number;
  action: ActionType;
};
