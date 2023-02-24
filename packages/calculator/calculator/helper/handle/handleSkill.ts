import {
  add_damage,
  add_dot_effect,
  add_effect,
  handle_dot,
  has_dot_effect,
  has_expired,
  remove_expired
} from './index.js';
import { ActionEnum, AttackModeEnum } from '../../enums/index.js';
import { Fight, HandleParam } from '../../model/index.js';

export const handle_skill = (fight: Fight) => {
  const { team } = fight;

  team.forEach((agent) => {
    const param = { agent, fight };

    if (can_use_skill(param)) {
      set_skill_apply_animation_time(param);
      use_skill(param);
    }

    if (has_dot_effect(agent)) handle_dot(param);
    if (has_expired(param)) remove_expired(param);
  });
};

export const can_use_skill = ({ agent, fight }: HandleParam) => {
  const { apply_skill_time, skill } = agent;
  const { time } = fight;

  return (time % skill.cooldown) + apply_skill_time === 0;
};

export const use_skill = ({ agent, fight }: HandleParam) => {
  const { time } = fight;
  const { total_damage } = agent;

  agent.last_attack_time = time;

  agent.skill.effects.forEach((effect) => {
    const params = { agent, effect, fight };
    const type = effect.constructor.name;
    const action = { type: ActionEnum.Apply, skill_type: effect.type, attack_mode: AttackModeEnum.None };

    agent.history.push({ time, damage: 0, total_damage, action });

    if (type === 'Effect') add_effect(params);
    else if (type === 'DOTEffect') add_dot_effect(params);
    else if (type === 'DamageEffect') add_damage(params);
  });
};

export const set_skill_apply_animation_time = ({ agent }: HandleParam) =>
  (agent.apply_skill_remaining_time = agent.apply_skill_time);

export const set_skill_remove_animation_time = ({ agent }: HandleParam) =>
  (agent.remove_skill_remaining_time = agent.remove_skill_time);
