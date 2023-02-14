import { calculate_critical_damage, set_skill_remove_animation_time } from './index';
import { Agent, Effect, DamageEffect, DOTEffect, Fight } from '../model';
import { ActionEnum, AttackModeEnum, EffectEnum } from '../enums';

export function handle_dot(agent: Agent, fight: Fight) {
  const { time } = fight;
  const activeDots = get_active_dots(agent, time);

  activeDots.forEach((dot) => {
    add_damage(agent, dot, fight);
  });
}

export function has_dot_effect(agent: Agent): boolean {
  return agent.skill.effects.filter((effect) => effect instanceof DOTEffect).length > 0;
}

export function get_active_dots(agent: Agent, time: number): DOTEffect[] {
  const active_dots: DOTEffect[] = [];

  agent.applied_effects.forEach((effect) => {
    if (effect instanceof DOTEffect && is_dot_active(effect, time)) {
      active_dots.push(effect);
    }
  });

  return active_dots;
}

export function is_dot_active(effect: DOTEffect, time: number): boolean {
  const has_started = time > effect.begin;
  const has_stopped = time >= effect.begin + effect.duration;
  const in_interval = time % effect.interval === 0;

  return has_started && !has_stopped && in_interval;
}

export function add_effect(agent: Agent, effect: Effect, fight: Fight) {
  const { is_stackable } = agent.skill;
  const addMethod = is_stackable ? apply_stackable : apply_non_stackable;
  addMethod(effect, agent, fight);
}

export function add_damage(agent: Agent, effect: DamageEffect | DOTEffect, fight: Fight) {
  const action_type = effect.type === EffectEnum.Damage ? ActionEnum.Damage : ActionEnum.DOT;

  const { team, target, time } = fight;
  const { skill_damage, critical_rate, critical_damage, base_skill_damage } = agent;

  const critical_chance = critical_rate - target.critical_resistance;
  const multiplier = effect.damage({ agent, team, target }) / base_skill_damage;

  const damage = calculate_critical_damage(multiplier * skill_damage, critical_chance, critical_damage);
  agent.total_damage += damage;
  target.take_damage(damage);

  agent.history.push({
    time,
    damage,
    total_damage: agent.total_damage,
    action: {
      type: action_type,
      skill_type: effect.type,
      attack_mode: AttackModeEnum.None
    }
  });
}

export function apply_stackable(effect: Effect, agent: Agent, fight: Fight) {
  apply(agent, effect, fight);
}

export function apply_non_stackable(effect: Effect, agent: Agent, fight: Fight) {
  const old = find_existing(effect, agent);
  if (old) {
    old.begin = fight.time;
  } else {
    apply(agent, effect, fight);
  }
}

export function apply(agent: Agent, effect: Effect, fight: Fight) {
  const { team, target } = fight;
  effect.apply({ agent, team, target });
  agent.applied_effects.push(effect);
}

export function remove_expired(agent: Agent, fight: Fight) {
  const { time } = fight;
  agent.applied_effects = agent.applied_effects.filter((effect) => {
    if (is_expired(effect, time)) {
      if (effect instanceof Effect) {
        set_skill_remove_animation_time(agent);
        remove(effect as Effect, agent, fight);
      }

      agent.history.push({
        time,
        damage: 0,
        total_damage: agent.total_damage,
        action: {
          type: ActionEnum.Expired,
          skill_type: effect.type,
          attack_mode: AttackModeEnum.None
        }
      });

      return false;
    }
    return true;
  });
}

export function remove(effect: Effect, agent: Agent, fight: Fight) {
  const { team, target } = fight;
  effect.remove({ agent, team, target });
}

export function is_expired(effect: Effect | DOTEffect, time: number): boolean {
  return time >= effect.duration + effect.begin;
}

export function find_existing(effect: Effect, agent: Agent) {
  return agent.applied_effects.find((e) => e instanceof Effect && e.apply === effect.apply);
}
