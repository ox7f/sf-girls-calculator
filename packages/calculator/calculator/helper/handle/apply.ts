import { DamageEffect, DOTEffect, Effect, HandleParam } from '../../model/index.js';
import { find_existing } from './index.js';

export const apply = ({ agent, effect, fight }: HandleParam) => {
  if (effect instanceof DamageEffect || effect instanceof DOTEffect || !effect) return;

  const { team, target, time } = fight;
  const newEffect = new Effect({ ...effect, duration: effect.duration / 1000 });

  newEffect.begin = time;
  newEffect.apply({ agent, team, target });

  agent.applied_effects.push(newEffect);
};

export const apply_stackable = ({ agent, effect, fight }: HandleParam) => apply({ agent, effect, fight });

export const apply_non_stackable = ({ agent, effect, fight }: HandleParam) => {
  const old = find_existing({ agent, effect, fight });

  if (old) old.begin = fight.time;
  else apply({ agent, effect, fight });
};
