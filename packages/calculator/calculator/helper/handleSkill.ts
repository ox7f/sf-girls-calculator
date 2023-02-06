import { handle_dot, use_skill, remove_expired } from './index';
import { Agent, DOTEffect, Fight } from '../model';

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

export function has_dot_effect(agent: Agent): boolean {
  return agent.skill.effects.filter((effect) => effect instanceof DOTEffect).length > 0;
}

export function set_skill_apply_animation_time(agent: Agent) {
  agent.apply_skill_remaining_time = agent.apply_skill_time;
}

export function set_skill_remove_animation_time(agent: Agent) {
  agent.remove_skill_remaining_time = agent.remove_skill_time;
}
