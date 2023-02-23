import { calculate_critical_damage, set_skill_remove_animation_time } from '../index';
import { ActionEnum, AttackModeEnum } from '../../enums';
import { DamageEffect, DOTEffect, Effect, HandleParam } from '../../model';

export const add_effect = ({ agent, effect, fight }: HandleParam) => {
  const applyMethod = agent.skill.is_stackable ? apply_stackable : apply_non_stackable;
  applyMethod({ effect, agent, fight });
};

export const add_damage = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof Effect || !effect) return;

  const action = { skill_type: effect.type, attack_mode: AttackModeEnum.Skill };
  const damage = calculate_damage({ agent, effect, fight });
  const { total_damage } = agent;

  agent.history.push({ time: fight.time, damage, total_damage, action });
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

export const apply_stackable = ({ agent, effect, fight }: HandleParam) => apply({ agent, effect, fight });

export const apply_non_stackable = ({ agent, effect, fight }: HandleParam) => {
  const old = find_existing({ agent, effect, fight });

  if (old) old.begin = fight.time;
  else apply({ agent, effect, fight });
};

export const apply = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof DamageEffect || effect instanceof DOTEffect || !effect) return;

  const { team, target, time } = fight;
  const newEffect = new Effect({ ...effect, duration: effect.duration / 1000 });

  newEffect.begin = time;
  newEffect.apply({ agent, team, target });

  agent.applied_effects.push(newEffect);
};

export const remove_expired = ({ agent, fight }: HandleParam) => {
  agent.applied_effects = agent.applied_effects.filter((effect: Effect | DOTEffect) => {
    const params = { agent, effect, fight };
    const expired = is_expired(params);

    if (expired) remove_effect(params, effect);

    return !expired;
  });
};

export const has_expired = ({ agent, fight }: HandleParam) => {
  let has_expired_effect = false;

  agent.applied_effects.forEach((effect: Effect | DOTEffect) => {
    if (!has_expired_effect && is_expired({ agent, effect, fight })) has_expired_effect = true;
  });

  return has_expired_effect;
};

export const remove_effect = (params: HandleParam, effect: Effect | DOTEffect) => {
  const { agent, fight } = params;

  if (effect instanceof Effect) {
    set_skill_remove_animation_time(params);
    remove(params);
  }

  const { total_damage } = agent;
  const { type: skill_type } = effect;
  const action = { type: ActionEnum.Remove, skill_type, attack_mode: AttackModeEnum.None };

  agent.history.push({ time: fight.time, damage: 0, total_damage, action });
};

export const remove = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof DamageEffect || effect instanceof DOTEffect || !effect) return;
  effect.remove({ agent, team: fight.team, target: fight.target });
};

export const is_expired = ({ effect, fight }: HandleParam) => {
  if (effect instanceof DamageEffect || !effect) return;
  return fight.time >= effect.duration + effect.begin;
};

export const find_existing = ({ agent, effect }: HandleParam) => {
  if (effect instanceof DamageEffect || effect instanceof DOTEffect || !effect) return;
  return agent.applied_effects.find((e: Effect | DOTEffect) => e instanceof Effect && e.apply === effect.apply);
};
