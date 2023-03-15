import { ActionEnum, EffectTypeEnum } from '../../../enums/index';
import { Agent, AbstractEffect, DamageEffectFunctionType, Fight, NewDamageEffect } from '../../index';

export class EffectDamage extends AbstractEffect {
  type: EffectTypeEnum;
  damage: DamageEffectFunctionType;

  constructor({ type, damage }: NewDamageEffect) {
    super();
    this.type = type;
    this.damage = damage;
  }

  activate(agent: Agent, fight: Fight) {
    agent.log(fight.time, { attack_mode: 'None', damage: 0, effect_type: this.type, type: ActionEnum.Apply });
    this.deal_damage(agent, fight);
  }

  deal_damage(agent: Agent, fight: Fight) {
    const { target, team, time } = fight;
    const { base_skill_damage, skill_damage } = agent.stats;

    const log_time = time - globalThis.damageDelay;
    const multiplier = this.damage({ agent, target, team }) / base_skill_damage;

    let agent_damage = multiplier * skill_damage;

    if (Math.random() < agent.stats.critical_rate - target.critical_resistance) {
      agent_damage *= agent.stats.critical_damage;
    }

    const damage = target.take_damage(log_time, agent_damage);

    agent.stats.total_damage += damage;
    agent.log(log_time, { attack_mode: 'Skill', damage, effect_type: this.type, type: ActionEnum.Attack });
  }
}
