import { AttackModeEnum, BonusEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../../enums';
import { AbstractEffect, NewEffectDOT, DamageEffectFunction, EffectParams } from '../../../model';

export class EffectDOT extends AbstractEffect {
  type: EffectTypeEnum;
  duration: number;
  interval: number;
  damage: DamageEffectFunction;
  begin: number;

  private lastDot: number;

  constructor({ type, duration, interval, damage, begin = 0 }: NewEffectDOT) {
    super();
    this.type = type;
    this.duration = duration * 1000; // seconds to ms
    this.interval = interval * 1000; // seconds to ms
    this.damage = damage;
    this.begin = begin;

    this.lastDot = this.begin;
  }

  activate(params: EffectParams) {
    const { agent, time } = params;

    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.type,
      type: HistoryActionTypeEnum.USE_SKILL
    });

    this.add(params);
  }

  add(params: EffectParams) {
    const { agent, time } = params;

    agent.activeEffects.push(
      new EffectDOT({
        ...this,
        duration: this.duration / 1000,
        interval: this.interval / 1000,
        begin: time
      })
    );
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
    if (this.isActive(params)) {
      this.dealDamage(params);
    }

    if (this.isExpired(params)) {
      this.deactivate(params);
    }
  }

  private dealDamage(params: EffectParams) {
    const { agent, target, time } = params;
    const { damage, bonus } = this.getDamage(params);
    const damageDealt = target.takeDamage(damage);

    this.lastDot = time;
    agent.stats.totalDamage += damageDealt;

    agent.log(time, {
      attackMode: AttackModeEnum.SKILL,
      bonus,
      damage: damageDealt,
      effectType: this.type,
      type: HistoryActionTypeEnum.ATTACK
    });
  }

  private getDamage(params: EffectParams) {
    const { agent, target } = params;
    const { attackCounter, skillDamage, baseSkillDamage, criticalRate, criticalDamage } = agent.stats;
    const { skillDamage: skillDamageEffect = 0, criticalRate: criticalRateEffect = 0 } = agent.nodeEffects;

    const limitedAttackCounter = Math.min(attackCounter, 10);
    const criticalRateWithEffect = criticalRate + criticalRateEffect * limitedAttackCounter - target.criticalResistance;
    const skillAttackEffect = skillDamage * skillDamageEffect * limitedAttackCounter;
    const totalSkillAttack = skillDamage + skillAttackEffect;

    const bonus: BonusEnum[] = [];
    const baseDamage = this.damage(params) / baseSkillDamage;
    let damage = baseDamage * totalSkillAttack;

    if (Math.random() < criticalRateWithEffect) {
      damage *= criticalDamage;
      bonus.push(BonusEnum.CRITICAL);
    }

    return { damage, bonus };
  }

  private isActive(params: EffectParams) {
    const { time } = params;
    const hasStarted = time <= this.begin;
    const hasStopped = time < this.begin - this.duration;
    const inInterval = this.lastDot - this.interval >= time;

    return hasStarted && !hasStopped && inInterval;
  }

  private isExpired(params: EffectParams) {
    return params.time <= this.begin - this.duration;
  }
}
