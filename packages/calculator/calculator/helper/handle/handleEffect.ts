import { apply_stackable, apply_non_stackable, calculate_critical_damage } from '../index.js';
import { AttackModeEnum } from '../../enums/index.js';
import { DamageEffect, DOTEffect, Effect, HandleParam } from '../../model/index.js';

export const add_damage = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof Effect || !effect) return;

  const action = { skill_type: effect.type, attack_mode: AttackModeEnum.Skill };
  const damage = calculate_damage({ agent, effect, fight });
  const { total_damage } = agent;

  agent.history.push({ time: fight.time, damage, total_damage, action });
};

export const add_effect = ({ agent, effect, fight }: HandleParam) => {
  const applyMethod = agent.skill.is_stackable ? apply_stackable : apply_non_stackable;
  applyMethod({ effect, agent, fight });
};

export const calculate_damage = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof Effect || !effect) return 0;

  const { base_skill_damage, skill_damage, critical_rate, critical_damage } = agent;
  const { team, target } = fight;

  const critical_chance = critical_rate - target.critical_resistance;
  const multiplier = effect.damage({ agent, team, target }) / base_skill_damage;
  const damage = calculate_critical_damage(multiplier * skill_damage, critical_chance, critical_damage);

  target.take_damage(damage);
  agent.total_damage += damage;

  return damage;
};

export const find_existing = ({ agent, effect }: HandleParam) => {
  if (effect instanceof DamageEffect || effect instanceof DOTEffect || !effect) return;
  return agent.applied_effects.find((e: Effect | DOTEffect) => e instanceof Effect && e.apply === effect.apply);
};

export const has_expired = ({ agent, fight }: HandleParam) => {
  let has_expired_effect = false;

  agent.applied_effects.forEach((effect: Effect | DOTEffect) => {
    if (!has_expired_effect && is_expired({ agent, effect, fight })) has_expired_effect = true;
  });

  return has_expired_effect;
};

export const is_expired = ({ effect, fight }: HandleParam) => {
  if (effect instanceof DamageEffect || !effect) return;
  return fight.time >= effect.duration + effect.begin;
};
