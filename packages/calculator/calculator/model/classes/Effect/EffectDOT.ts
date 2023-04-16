import { AttackModeEnum, BonusEnum, HistoryActionTypeEnum } from '../../../enums';
import { Agent, AbstractEffect, Fight, NewEffectDOT } from '../../../model';

export class EffectDOT extends AbstractEffect {
  private last_dot: number;

  constructor(private readonly config: NewEffectDOT) {
    super();
    this.last_dot = this.config.begin ?? 0;
  }

  activate(agent: Agent, fight: Fight) {
    this.add(agent, fight);
    agent.log(fight.time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.config.type,
      type: HistoryActionTypeEnum.USE_SKILL
    });
  }

  add(agent: Agent, fight: Fight) {
    const { time } = fight;
    const { duration, interval } = this.config;

    agent.activeEffects.push(
      new EffectDOT({
        ...this.config,
        duration: duration / 1000,
        interval: interval / 1000,
        begin: time
      })
    );
  }

  deactivate(agent: Agent, fight: Fight) {
    const index = agent.activeEffects.indexOf(this);

    if (index === -1) {
      return;
    }

    agent.activeEffects.splice(index, 1);
    agent.log(fight.time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.config.type,
      type: HistoryActionTypeEnum.REMOVE
    });
  }

  private dealDamage(agent: Agent, fight: Fight) {
    const { target, time } = fight;
    const { damage, bonus } = this.getDamage(agent, fight);
    const damageDealt = target.takeDamage(damage);

    this.last_dot = time;
    agent.stats.totalDamage += damageDealt;
    agent.log(time, {
      attackMode: AttackModeEnum.SKILL,
      bonus,
      damage: damageDealt,
      effectType: this.config.type,
      type: HistoryActionTypeEnum.ATTACK
    });
  }

  private getDamage(agent: Agent, fight: Fight) {
    const { target, team } = fight;
    const { attack_counter, skillDamage, baseSkillDamage, criticalRate, criticalDamage } = agent.stats;
    const { criticalRate: criticalRateEffect = 0 } = agent.nodeEffects;

    const limitedAttackCounter = Math.min(attack_counter, 10);
    const criticalRateWithEffect = criticalRate + criticalRateEffect * limitedAttackCounter - target.criticalResistance;

    const bonus: BonusEnum[] = [];
    const baseDamage = this.config.damage({ agent, target, team }) / baseSkillDamage;
    let damage = baseDamage * skillDamage;

    if (Math.random() < criticalRateWithEffect) {
      damage *= criticalDamage;
      bonus.push(BonusEnum.CRITICAL);
    }

    return { damage, bonus };
  }

  private isActive(time: number) {
    const { begin = 0, duration, interval } = this.config;

    const has_started = time <= begin;
    const has_stopped = time < begin - duration;
    const in_interval = this.last_dot - interval >= time;

    return has_started && !has_stopped && in_interval;
  }

  private isExpired(time: number) {
    const { begin = 0, duration } = this.config;
    return time <= begin - duration;
  }

  manage(agent: Agent, fight: Fight) {
    const { time } = fight;

    if (this.isActive(time)) {
      this.dealDamage(agent, fight);
    }

    if (this.isExpired(time)) {
      this.deactivate(agent, fight);
    }
  }
}
