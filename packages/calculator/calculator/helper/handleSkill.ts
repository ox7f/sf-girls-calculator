import { add_effect, add_damage, handle_dot, remove_expired, has_dot_effect } from './index';
import { Agent, Effect, Fight } from '../model';
import { ActionEnum, AttackModeEnum } from '../enums';

export function handle_skill(fight: Fight) {
  const { team, time } = fight;

  team.forEach((agent) => {
    if (can_use_skill(time, agent)) {
      use_skill(agent, fight);
      set_skill_apply_animation_time(agent);
    }

    if (has_dot_effect(agent)) {
      handle_dot(agent, fight);
    }

    remove_expired(agent, fight);
  });
}

export function can_use_skill(time: number, agent: Agent): boolean {
  return time % agent.skill.cooldown === 0;
}

export function set_skill_apply_animation_time(agent: Agent) {
  agent.apply_skill_remaining_time = agent.apply_skill_time;
}

export function set_skill_remove_animation_time(agent: Agent) {
  agent.remove_skill_remaining_time = agent.remove_skill_time;
}

export function use_skill(agent: Agent, fight: Fight) {
  const { time } = fight;

  agent.skill.effects.forEach((effect) => {
    agent.history.push({
      time,
      damage: 0,
      total_damage: agent.total_damage,
      action: {
        type: ActionEnum.Cast,
        skill_type: effect.type,
        attack_mode: AttackModeEnum.None
      }
    });

    if (effect instanceof Effect) {
      add_effect(agent, effect, fight);
    } else {
      // DamageEffect || DOTEffect
      add_damage(agent, effect, fight);
    }
  });
}
