import { can_use_skill } from './handleSkill.js';
import { has_expired } from './handleEffect.js';
import { Agent, Fight } from '../../model/index.js';

export const handle_attack = (fight: Fight) => {
  const { team, target, time } = fight;

  team.forEach((agent) => {
    const time_to_attack = Math.round((1000 / agent.attack_speed) * 1000);
    const can_attack = time - agent.last_attack_time >= time_to_attack;
    const in_animation = agent.has_animation ? is_in_animation(agent) : false;
    const used_skill = can_use_skill({ agent, fight }) || has_expired({ agent, fight });

    if (can_attack && !in_animation && !used_skill) agent.attack(target, time);
  });
};

export const is_in_animation = (agent: Agent) => {
  const { apply_skill_remaining_time, remove_skill_remaining_time } = agent;

  if (apply_skill_remaining_time === 0 && remove_skill_remaining_time === 0) return;
  if (apply_skill_remaining_time > 0) agent.apply_skill_remaining_time -= globalThis.Interval;
  if (remove_skill_remaining_time > 0) agent.remove_skill_remaining_time -= globalThis.Interval;

  return apply_skill_remaining_time > 0 || remove_skill_remaining_time > 0;
};
