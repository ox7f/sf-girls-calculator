import { ActionEnum, EffectTypeEnum } from '../../../enums/index';
import { Agent, AbstractEffect, EffectFunctionType, Fight, NewEffect } from '../../index';

export class Effect extends AbstractEffect {
  type: EffectTypeEnum;
  apply: EffectFunctionType;
  remove: EffectFunctionType;
  duration: number;
  begin: number;

  constructor({ type, duration, apply, remove, begin = 0 }: NewEffect) {
    super();
    this.type = type;
    this.apply = apply;
    this.remove = remove;
    this.duration = duration * 1000; // seconds to ms
    this.begin = begin;
  }

  add(agent: Agent, fight: Fight) {
    const { target, team, time } = fight;
    const newEffect = new Effect({
      ...this,
      duration: this.duration / 1000,
      begin: time
    });

    newEffect.apply({ agent, team, target });

    agent.applied_effects.push(newEffect);
    agent.log(time, { attack_mode: 'None', damage: 0, effect_type: this.type, type: ActionEnum.Apply });
  }

  activate(agent: Agent, fight: Fight) {
    if (agent.skill.is_stackable) {
      return this.add(agent, fight);
    }

    const old = this.find_existing(agent, this);

    if (old) old.deactivate(agent, fight);

    this.add(agent, fight);
  }

  deactivate(agent: Agent, fight: Fight) {
    const { target, team, time } = fight;
    const index = agent.applied_effects.indexOf(this);

    if (index >= 0) {
      agent.applied_effects.splice(index, 1);
      agent.log(time, { attack_mode: 'Skill', damage: 0, effect_type: this.type, type: ActionEnum.Remove });
    }

    this.remove({ agent, team, target });
  }

  manage(agent: Agent, fight: Fight) {
    const { time } = fight;

    if (this.is_expired(time)) {
      this.deactivate(agent, fight);
    }
  }

  find_existing(agent: Agent, effect: Effect) {
    return agent.applied_effects.find(
      (applied_effect) => applied_effect instanceof Effect && applied_effect.apply === effect.apply
    );
  }

  is_expired(time: number) {
    return time <= this.begin - this.duration;
  }
}
