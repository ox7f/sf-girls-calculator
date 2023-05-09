import { MiniDb } from 'jotai-minidb';
import { Targets } from '@sf-girls-calculator/calculator';

import { TargetItem } from '../types';

const targetData: Record<string, TargetItem> = {};

Targets.Targets.forEach((target, index) => {
  const targetItem: TargetItem = { ...target, index };
  targetData[target.name] = targetItem;
});

export const TargetDB = new MiniDb<TargetItem>({
  name: 'target-db',
  initialData: targetData
});
