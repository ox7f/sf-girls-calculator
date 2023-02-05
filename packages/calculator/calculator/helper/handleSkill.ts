import { handle_dot_effect, handle_effect, remove_expired_effect } from './index';
import { Agent, Fight } from '../model';
import { EffectEnum } from '../enums';

export function handle_skill(fight: Fight) {
  const { team, time } = fight;

  team.forEach((agent) => {
    if (can_use_skill(time, agent)) {
      handle_effect(agent, fight);
      set_skill_apply_animation_time(agent);
    }

    if (has_dot_effect(agent)) {
      handle_dot_effect(agent, fight);
    }

    remove_expired_effect(agent, fight);
  });
}

export function can_use_skill(time: number, agent: Agent): boolean {
  return time % agent.skill.cooldown === 0;
}

export function has_dot_effect(agent: Agent): boolean {
  return agent.skill.effects.filter((effect) => effect.type === EffectEnum.DOT).length > 0;
}

export function set_skill_apply_animation_time(agent: Agent) {
  agent.apply_skill_remaining_time = agent.apply_skill_time;
}

export function set_skill_remove_animation_time(agent: Agent) {
  agent.remove_skill_remaining_time = agent.remove_skill_time;
}
