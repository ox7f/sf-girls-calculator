import { Agent, DamageEffect, DOTEffect, Effect, Fight } from '../classes';

export type HandleParam = {
  agent: Agent;
  effect?: DamageEffect | DOTEffect | Effect;
  fight: Fight;
};
