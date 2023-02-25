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

export const can_use_skill = ({ agent, fight }: HandleParam) => {
  const { apply_skill_time, skill } = agent;
  const { time } = fight;

  if (time < skill.cooldown) return time === apply_skill_time;
  return time % (skill.cooldown + apply_skill_time) === 0;
};

export const handle_skill = (fight: Fight) => {
  const { team } = fight;

  team.forEach((agent) => {
    const param = { agent, fight };

    if (can_use_skill(param)) {
      use_skill(param);
      agent.apply_skill_remaining_time = agent.apply_skill_time;
    }

    if (has_dot_effect(agent)) handle_dot(param);
    if (has_expired(param)) remove_expired(param);
  });
};

export const use_skill = ({ agent, fight }: HandleParam) => {
  const { time } = fight;
  const { total_damage } = agent;

  agent.last_attack_time = time;

  agent.skill.effects.forEach((effect) => {
    const params = { agent, effect, fight };
    const type = effect.type.toString();
    const action = { type: ActionEnum.Apply, skill_type: effect.type, attack_mode: AttackModeEnum.None };

    agent.history.push({ time, damage: 0, total_damage, action });

    if (['Debuff', 'Self Buff', 'Team Buff'].includes(type)) add_effect(params);
    else if (type === 'Damage Over Time') add_dot_effect(params);
    else if (type === 'Damage') add_damage(params);
  });
};
