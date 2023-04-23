import { AttackModeEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../../enums';
import { Agent, AbstractEffect, EffectFunction, Fight, NewEffect } from '../../../model';

export class Effect extends AbstractEffect {
  begin: number;
  duration: number;
  isStackable: boolean;
  type: EffectTypeEnum;
  apply: EffectFunction;
  remove: EffectFunction;

  constructor({ type, duration, apply, remove, begin = 0, isStackable = false }: NewEffect) {
    super();
    this.begin = begin;
    this.duration = duration * 1000; // seconds to ms
    this.type = type;
    this.isStackable = isStackable;
    this.apply = apply;
    this.remove = remove;
  }

  add(agent: Agent, fight: Fight) {
    const { target, team, time } = fight;
    const newEffect = new Effect({ ...this, duration: this.duration / 1000, begin: time });

    newEffect.apply({ agent, team, target });
    agent.activeEffects.push(newEffect);

    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.type,
      type: HistoryActionTypeEnum.USE_SKILL
    });
  }

  activate(agent: Agent, fight: Fight) {
    if (this.isStackable) {
      return this.add(agent, fight);
    }

    const old = this.findExisting(agent);

    if (old) {
      old.deactivate(agent, fight);
    }

    this.add(agent, fight);
  }

  deactivate(agent: Agent, fight: Fight) {
    const { target, team, time } = fight;
    const index = agent.activeEffects.indexOf(this);

    if (index >= 0) {
      agent.activeEffects.splice(index, 1);
      agent.log(time, {
        attackMode: AttackModeEnum.NONE,
        damage: 0,
        effectType: this.type,
        type: HistoryActionTypeEnum.REMOVE
      });
    }

    this.remove({ agent, team, target });
  }

  manage(agent: Agent, fight: Fight) {
    const { time } = fight;

    if (this.isExpired(time)) {
      this.deactivate(agent, fight);
    }
  }

  findExisting(agent: Agent) {
    return agent.activeEffects.find(
      (appliedEffect) => appliedEffect instanceof Effect && appliedEffect.apply === this.apply
    );
  }

  private isExpired(time: number) {
    return time <= this.begin - this.duration;
  }
}
