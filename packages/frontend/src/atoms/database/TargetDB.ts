import { MiniDb } from 'jotai-minidb';
import { Targets } from '@sf-girls-calculator/calculator';
import { TargetItem } from '../types';

const initialTargetData: Record<string, TargetItem> = {};

Targets.Targets.forEach((target) => {
  initialTargetData[target.name] = { ...target };
});

export const TargetDB = new MiniDb<TargetItem>({ name: 'target-db', initialData: initialTargetData });
