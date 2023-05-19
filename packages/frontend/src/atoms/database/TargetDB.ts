import { MiniDb } from 'jotai-minidb';
import { Targets } from '@sf-girls-calculator/calculator';

import { TargetItem } from '../types';
import { convertTargetItem } from '../utils';

const targetData: Record<string, TargetItem> = {};

Targets.Targets.forEach((target, index) => {
  const convertedTarget = convertTargetItem(target, index);
  targetData[target.name] = convertedTarget;
});

export const TargetDB = new MiniDb<TargetItem>({
  name: 'target-db',
  initialData: targetData,
  version: 1,
  migrations: {
    1: (target) => {
      if (target.name === "Noa's Bootcamp Mission 4") {
        target.options = {
          isFavorite: false,
          openModal: false,
          calculator: { isSelected: true },
          teamfinder: { isSelected: true }
        };
      } else {
        target.options = {
          isFavorite: false,
          openModal: false,
          calculator: { isSelected: false },
          teamfinder: { isSelected: false }
        };
      }

      return target;
    }
  },
  onMigrationCompleted: () => {
    alert('TargetDB was updated. Page will be reloaded.');
    window.location.reload();
  }
});
