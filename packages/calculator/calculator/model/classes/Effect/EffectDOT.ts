import { ActionEnum, EffectTypeEnum } from '../../../enums/index';
import { Agent, AbstractEffect, DamageEffectFunctionType, Fight, NewDOTEffect } from '../../index';

export class EffectDOT extends AbstractEffect {
  type: EffectTypeEnum;
  duration: number;
  interval: number;
  damage: DamageEffectFunctionType;
  begin: number;

  last_dot: number;

  constructor({ type, duration, damage, interval, begin = 0 }: NewDOTEffect) {
    super();
    this.type = type;
    this.duration = duration * 1000; // seconds to ms
    this.interval = interval * 1000; // seconds to ms
    this.damage = damage;
    this.begin = begin;
    this.last_dot = begin;
  }

  add(agent: Agent, fight: Fight) {
    const newDOTEffect = new EffectDOT({
      ...this,
      duration: this.duration / 1000,
      interval: this.interval / 1000,
      begin: fight.time
    });

    agent.applied_effects.push(newDOTEffect);
  }

  activate(agent: Agent, fight: Fight) {
    this.add(agent, fight);
    agent.log(fight.time, { attack_mode: 'None', damage: 0, effect_type: this.type, type: ActionEnum.Apply });
  }

  deactivate(agent: Agent, fight: Fight) {
    const index = agent.applied_effects.indexOf(this);

    if (index >= 0) {
      agent.applied_effects.splice(index, 1);
      agent.log(fight.time, { attack_mode: 'Skill', damage: 0, effect_type: this.type, type: ActionEnum.Remove });
    }
  }

  manage(agent: Agent, fight: Fight) {
    const { time } = fight;

    if (this.is_active(time)) {
      this.deal_damage(agent, fight);
    }

    if (this.is_expired(time)) {
      this.deactivate(agent, fight);
    }
  }

  deal_damage(agent: Agent, fight: Fight) {
    const { target, team, time } = fight;
    const { base_skill_damage, skill_damage } = agent.stats;
    const multiplier = this.damage({ agent, team, target }) / base_skill_damage;

    let agent_damage = multiplier * skill_damage;

    if (Math.random() < agent.stats.critical_rate - target.critical_resistance) {
      agent_damage *= agent.stats.critical_damage;
    }

    const damage = target.take_damage(time, agent_damage);

    agent.stats.total_damage += damage;
    agent.log(time, { attack_mode: 'Skill', damage, effect_type: this.type, type: ActionEnum.Attack });

    this.last_dot = time;
  }

  find_existing(agent: Agent, effect: EffectDOT) {
    return agent.applied_effects.find(
      (applied_effect) => applied_effect instanceof EffectDOT && applied_effect.damage === effect.damage
    );
  }

  is_active(time: number) {
    const has_started = time <= this.begin;
    const has_stopped = time < this.begin - this.duration;
    const in_interval = this.last_dot - this.interval >= time;

    return has_started && !has_stopped && in_interval;
  }

  is_expired(time: number) {
    return time <= this.begin - this.duration;
  }
}
