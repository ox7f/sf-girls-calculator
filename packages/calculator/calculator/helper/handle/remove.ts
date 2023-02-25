import { is_expired } from '../index.js';
import { ActionEnum, AttackModeEnum } from '../../enums/index.js';
import { DamageEffect, DOTEffect, Effect, HandleParam } from '../../model/index.js';

export const remove = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof DamageEffect || effect instanceof DOTEffect || !effect) return;
  effect.remove({ agent, team: fight.team, target: fight.target });
};

export const remove_effect = (params: HandleParam, effect: Effect | DOTEffect) => {
  const { agent, fight } = params;

  if (effect instanceof Effect) remove(params);

  const { total_damage } = agent;
  const { type: skill_type } = effect;
  const action = { type: ActionEnum.Remove, skill_type, attack_mode: AttackModeEnum.None };

  agent.history.push({ time: fight.time, damage: 0, total_damage, action });
};

export const remove_expired = ({ agent, fight }: HandleParam) => {
  agent.applied_effects = agent.applied_effects.filter((effect: Effect | DOTEffect) => {
    const params = { agent, effect, fight };
    const expired = is_expired(params);

    if (expired) remove_effect(params, effect);

    return !expired;
  });
};
