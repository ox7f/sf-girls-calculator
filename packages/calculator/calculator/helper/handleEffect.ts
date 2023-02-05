import { get_critical_damage, set_skill_remove_animation_time } from './index';
import { Agent, DamageEffect, DOTEffect, Effect, Fight } from '../model';

export function handle_effect(agent: Agent, fight: Fight) {
  agent.skill.effects.forEach((effect) => {
    if (effect instanceof Effect) {
      add_effect(agent, effect, fight);
    } else if (effect instanceof DamageEffect) {
      add_damage_effect(agent, effect, fight);
    } else if (effect instanceof DOTEffect) {
      add_dot_effect(agent, effect, fight);
    }
  });
}

export function add_effect(agent: Agent, effect: Effect, fight: Fight) {
  const addMethod = agent.skill.is_stackable ? apply_stackable_effect : apply_non_stackable_effect;

  addMethod(effect, agent, fight);
}

export function add_damage_effect(agent: Agent, effect: DamageEffect | DOTEffect, fight: Fight) {
  const { team, target } = fight;
  const multiplier = effect.damage({ agent, team, target }) / agent.base_skill_damage;
  const critical_rate = agent.critical_rate - target.critical_resistance;

  let dealt_damage = multiplier * agent.skill_damage;
  dealt_damage = get_critical_damage(dealt_damage, critical_rate, agent.critical_damage);
  target.takeDamage(dealt_damage, agent);

  console.count('test');
}

export function handle_dot_effect(agent: Agent, fight: Fight) {
  // TODO:
  const { time } = fight;

  agent.skill.effects.forEach((effect) => {
    if (effect instanceof DOTEffect) {
      if (is_dot_active(effect, time) && time % effect.interval === 0) {
        add_damage_effect(agent, effect, fight);
      }

      if (time >= effect.begin + effect.duration) {
        effect.begin = 0;
      }
    }
  });
}

export function add_dot_effect(agent: Agent, effect: DOTEffect, fight: Fight) {
  const { time } = fight;
  effect.begin = time;
  console.log(agent);
}

export function is_dot_active(effect: DOTEffect, time: number) {
  return time >= effect.begin + effect.duration;
}

export function apply_stackable_effect(effect: Effect, agent: Agent, fight: Fight) {
  apply_effect(agent, effect, fight);
}

export function apply_non_stackable_effect(effect: Effect, agent: Agent, fight: Fight) {
  const oldEffect = find_existing_effect(effect, agent);
  if (oldEffect) {
    update_effect_start_time(oldEffect, fight.time);
  } else {
    apply_effect(agent, effect, fight);
  }
}

export function apply_effect(agent: Agent, effect: Effect, fight: Fight) {
  const { team, target, time } = fight;
  effect.apply({ agent, team, target });
  add_applied_effect(agent, { ...effect, begin: time });
}

export function add_applied_effect(agent: Agent, effect: Effect) {
  agent.applied_effects.push(effect);
}

export function remove_expired_effect(agent: Agent, fight: Fight) {
  const { time } = fight;
  agent.applied_effects = agent.applied_effects.filter((effect) => {
    if (is_effect_expired(effect, time)) {
      set_skill_remove_animation_time(agent);
      remove_effect(effect, agent, fight);
      return false;
    }
    return true;
  });
}

export function remove_effect(effect: Effect, agent: Agent, fight: Fight) {
  const { team, target } = fight;
  effect.remove({ agent, team, target });
}

export function is_effect_expired(effect: Effect, time: number): boolean {
  return time >= effect.duration + effect.begin;
}

export function find_existing_effect(effect: Effect, agent: Agent) {
  return agent.applied_effects.find((e) => e.apply === effect.apply);
}

export function update_effect_start_time(effect: Effect, time: number) {
  effect.begin = time;
}
