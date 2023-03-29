/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { openDB } from 'idb';
import { Agents, bruteforce_team, calculate_team, NewAgent, NewTarget, Targets } from '@sf-girls-calculator/calculator';
import { AgentItem, TargetItem } from '../atoms';
import { FunctionParams } from './types';

const MAX_RESULT_NUM = 5;

export const calculate = async ({ selectedAgents, selectedTargets }: FunctionParams, isMultiple = false) => {
  const db = await openDB('agent-db', 1);

  if (!db || selectedAgents.length === 0 || selectedTargets.length === 0) return null;

  const transaction = db.transaction('key-value', 'readwrite');
  const store = transaction.objectStore('key-value');
  const userAgents = await store.getAll();

  const targets = findTargets(selectedTargets, Targets.Targets, []);
  const agents = findAgents(selectedAgents, Agents.Agents, userAgents);

  const result = isMultiple ? bruteforce_team(agents, targets, MAX_RESULT_NUM) : [calculate_team(agents, targets[0])];

  return result;
};

export const findAgents = (names: string[], source: NewAgent[], userSource: AgentItem[]) => {
  const items = names.map((name) => {
    const item = source.find((item) => item.name === name)!;
    const userItem = userSource.find((item) => item.name === name)!;

    return {
      ...item,
      stats: {
        attack_speed: userItem.attack_speed,
        normal_attack: userItem.normal_attack,
        critical_rate: userItem.critical_rate,
        critical_damage: userItem.critical_damage,
        skill_damage: userItem.skill_damage,
        base_skill_damage: userItem.skill_damage,
        projectile_number: item.stats.projectile_number,
        cast_time: item.stats.cast_time
      }
    };
  });

  return items;
};

export const findTargets = (names: string[], source: NewTarget[], userSource: TargetItem[]) => {
  const items = names.map((name) => {
    const item = source.find((item) => item.name === name)!;
    const userItem = userSource.find((item) => item.name === name)!;

    return { ...item, userItem };
  });

  return items;
};
