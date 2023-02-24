import { ActionType } from './index.js';

export type HistoryType = {
  time: number;
  damage: number;
  total_damage: number;
  action: ActionType;
};
