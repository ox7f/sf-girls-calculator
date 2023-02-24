import { Agent, DamageEffect, DOTEffect, Effect, Fight } from '../classes/index.js';

export type HandleParam = {
  agent: Agent;
  effect?: DamageEffect | DOTEffect | Effect;
  fight: Fight;
};
