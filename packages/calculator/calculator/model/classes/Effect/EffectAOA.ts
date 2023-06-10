import { AttackModeEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../../enums';
import { AbstractEffect, EffectFunction, NewEffectAOA, EffectParams } from '../../../model';

export class EffectAOA extends AbstractEffect {
  begin: number;
  duration: number;
  type: EffectTypeEnum;
  apply: EffectFunction;

  constructor({ type, duration, apply, begin = 0 }: NewEffectAOA) {
    super();
    this.begin = begin;
    this.duration = duration * 1000; // seconds to ms
    this.type = type;
    this.apply = apply;
  }

  activate(params: EffectParams) {
    const old = this.findExisting(params);

    if (old) {
      old.deactivate(params);
    }

    this.add(params);
  }

  add(params: EffectParams) {
    const { agent, time } = params;

    const newEffect = new EffectAOA({
      ...this,
      duration: this.duration / 1000,
      begin: time
    });

    agent.activeEffects.push(newEffect);

    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.type,
      type: HistoryActionTypeEnum.USE_SKILL
    });
  }

  deactivate(params: EffectParams) {
    const { agent, time } = params;
    const index = agent.activeEffects.indexOf(this);

    if (index === -1) {
      return;
    }

    agent.activeEffects.splice(index, 1);
    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.type,
      type: HistoryActionTypeEnum.REMOVE
    });
  }

  manage(params: EffectParams) {
    if (this.isExpired(params)) {
      this.deactivate(params);
    }
  }

  private findExisting(params: EffectParams) {
    const { agent } = params;

    const oldEffect = agent.activeEffects.find(
      (activeEffect) => activeEffect instanceof EffectAOA && activeEffect.apply === this.apply
    );

    return oldEffect;
  }

  private isExpired(params: EffectParams) {
    return params.time <= this.begin - this.duration;
  }
}
