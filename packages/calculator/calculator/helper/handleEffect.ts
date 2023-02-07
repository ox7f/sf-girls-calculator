import { calculate_critical_damage, set_skill_remove_animation_time } from './index';
import { Agent, Effect, DamageEffect, DOTEffect, Fight } from '../model';

export function use_skill(agent: Agent, fight: Fight) {
  agent.skill.effects.forEach((effect) => {
    if (effect instanceof Effect) {
      add_effect(agent, effect, fight);
    } else if (effect instanceof DamageEffect) {
      add_damage(agent, effect, fight);
    } else if (effect instanceof DOTEffect) {
      add_dot(agent, effect, fight);
    }
  });
}

export function handle_dot(agent: Agent, fight: Fight) {
  const { time } = fight;
  const activeDots = get_active_dots(agent, time);
  activeDots.forEach((dot) => add_damage(agent, dot, fight));
}

export function add_effect(agent: Agent, effect: Effect, fight: Fight) {
  const { is_stackable } = agent.skill;
  const addMethod = is_stackable ? apply_stackable : apply_non_stackable;
  addMethod(effect, agent, fight);
}

export function add_damage(agent: Agent, effect: DamageEffect | DOTEffect, fight: Fight) {
  const { team, target } = fight;
  const { skill_damage, critical_rate, critical_damage, base_skill_damage } = agent;
  const multiplier = effect.damage({ agent, team, target }) / base_skill_damage;
  const critical_chance = critical_rate - target.critical_resistance;

  let damage = multiplier * skill_damage;
  damage = calculate_critical_damage(damage, critical_chance, critical_damage);
  damage = Math.round(damage);
  target.take_damage(damage, agent);
}

export function add_dot(agent: Agent, effect: DOTEffect, fight: Fight) {
  const { time } = fight;

  const new_dot_effect = new DOTEffect({
    ...effect,
    duration: effect.duration / 1000,
    interval: effect.interval / 1000
  });
  new_dot_effect.begin = time;

  agent.applied_effects.push(new_dot_effect);
}

export function get_active_dots(agent: Agent, time: number): DOTEffect[] {
  return agent.applied_effects.filter(
    (effect) => effect instanceof DOTEffect && is_dot_active(effect, time) && time % effect.interval === 0
  ) as DOTEffect[];
}

export function is_dot_active(effect: DOTEffect, time: number): boolean {
  return time > effect.begin && time <= effect.begin + effect.duration;
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
  const { team, target, time } = fight;
  effect.apply({ agent, team, target });

  const new_effect = new Effect({
    ...effect,
    duration: effect.duration / 1000
  });
  new_effect.begin = time;

  add_applied_effect(agent, new_effect);
}

export function add_applied_effect(agent: Agent, effect: Effect) {
  agent.applied_effects.push(effect);
}

export function remove_expired(agent: Agent, fight: Fight) {
  const { time } = fight;
  agent.applied_effects = agent.applied_effects.filter((effect) => {
    if (is_effect_expired(effect, time)) {
      if (effect instanceof Effect) {
        set_skill_remove_animation_time(agent);
        remove(effect as Effect, agent, fight);
      }
      return false;
    }
    return true;
  });
}

export function remove(effect: Effect, agent: Agent, fight: Fight) {
  const { team, target } = fight;
  effect.remove({ agent, team, target });
}

export function is_effect_expired(effect: Effect | DOTEffect, time: number): boolean {
  return time >= effect.duration + effect.begin;
}

export function find_existing(effect: Effect, agent: Agent) {
  return agent.applied_effects.find((e) => e instanceof Effect && e.apply === effect.apply);
}
