import { Agent, Fight } from '../model';

export function handle_attack(fight: Fight) {
  const { team, target, time } = fight;

  team.forEach((agent) => {
    const time_to_attack = Math.round((1000 / agent.attack_speed) * 1000);
    const can_attack = time - agent.last_attack_time >= time_to_attack;
    const in_animation = agent.has_animation ? is_in_animation(agent) : false;

    if (can_attack && !in_animation) {
      agent.attack(target, time);
    }
  });
}

export function is_in_animation(agent: Agent): boolean {
  const { apply_skill_remaining_time, remove_skill_remaining_time } = agent;

  if (apply_skill_remaining_time === 0 && remove_skill_remaining_time === 0) {
    return false;
  }

  if (apply_skill_remaining_time > 0) {
    agent.apply_skill_remaining_time -= globalThis.Interval;
  }

  if (remove_skill_remaining_time > 0) {
    agent.remove_skill_remaining_time -= globalThis.Interval;
  }

  if (apply_skill_remaining_time > 0 || remove_skill_remaining_time > 0) {
    return true;
  } else {
    return false;
  }
}
