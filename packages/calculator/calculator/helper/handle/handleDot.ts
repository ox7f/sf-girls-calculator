import { add_damage } from './index';
import { Agent, DamageEffect, DOTEffect, Effect, HandleParam } from '../../model';

export const handle_dot = ({ agent, fight }: HandleParam) => {
  const activeDots = get_active_dots({ agent, fight });
  activeDots.forEach((effect) => add_damage({ agent, effect, fight }));
};

export const add_dot_effect = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof Effect || effect instanceof DamageEffect || !effect) return;

  const newEffect = new DOTEffect({ ...effect, duration: effect.duration / 1000, interval: effect.interval / 1000 });
  newEffect.begin = fight.time;

  agent.applied_effects.push(newEffect);
};

export const has_dot_effect = (agent: Agent) =>
  agent.skill.effects.filter((effect) => effect instanceof DOTEffect).length > 0;

export const is_dot_active = ({ effect, fight }: HandleParam) => {
  if (effect instanceof Effect || effect instanceof DamageEffect || !effect) return false;

  const { time } = fight;

  const has_started = time > effect.begin;
  const has_stopped = time > effect.begin + effect.duration;
  const in_interval = time % effect.interval === 0;

  return has_started && !has_stopped && in_interval;
};

export const get_active_dots = ({ agent, fight }: HandleParam) => {
  const active_dots: DOTEffect[] = [];

  agent.applied_effects.forEach((effect) => {
    if (effect instanceof DOTEffect && is_dot_active({ effect, agent, fight })) active_dots.push(effect);
  });

  return active_dots;
};
