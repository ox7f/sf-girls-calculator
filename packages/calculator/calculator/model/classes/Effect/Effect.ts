import { AttackModeEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../../enums';
import { AbstractEffect, EffectFunction, NewEffect, EffectParams } from '../../../model';

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

  activate(params: EffectParams) {
    if (this.isStackable) {
      return this.add(params);
    }

    const oldEffect = this.findExisting(params);

    if (oldEffect) {
      oldEffect.deactivate(params);
    }

    this.add(params);
  }

  add(params: EffectParams) {
    const { agent, time } = params;
    const newEffect = new Effect({
      ...this,
      duration: this.duration / 1000,
      begin: time
    });

    newEffect.apply(params);
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

    this.remove(params);
  }

  manage(params: EffectParams) {
    if (this.isExpired(params)) {
      this.deactivate(params);
    }
  }

  private findExisting(params: EffectParams) {
    const { agent } = params;

    const oldEffect = agent.activeEffects.find(
      (activeEffect) => activeEffect instanceof Effect && activeEffect.apply === this.apply
    );

    return oldEffect;
  }

  private isExpired(params: EffectParams) {
    return params.time <= this.begin - this.duration;
  }
}
