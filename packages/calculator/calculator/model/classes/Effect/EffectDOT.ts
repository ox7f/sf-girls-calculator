import { AttackModeEnum, BonusEnum, HistoryActionTypeEnum } from '../../../enums';
import { Agent, AbstractEffect, Fight, NewEffectDOT } from '../../../model';

export class EffectDOT extends AbstractEffect {
  private lastDot: number;

  constructor(private readonly config: NewEffectDOT) {
    super();
    this.lastDot = this.config.begin ?? 0;
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

    this.lastDot = time;
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
    const { attackCounter, skillDamage, baseSkillDamage, criticalRate, criticalDamage } = agent.stats;
    const { skillDamage: skillDamageEffect = 0, criticalRate: criticalRateEffect = 0 } = agent.nodeEffects;

    const limitedAttackCounter = Math.min(attackCounter, 10);
    const criticalRateWithEffect = criticalRate + criticalRateEffect * limitedAttackCounter - target.criticalResistance;
    const skillAttackEffect = skillDamage * skillDamageEffect * limitedAttackCounter;
    const totalSkillAttack = skillDamage + skillAttackEffect;

    const bonus: BonusEnum[] = [];
    const baseDamage = this.config.damage({ agent, target, team }) / baseSkillDamage;
    let damage = baseDamage * totalSkillAttack;

    if (Math.random() < criticalRateWithEffect) {
      damage *= criticalDamage;
      bonus.push(BonusEnum.CRITICAL);
    }

    return { damage, bonus };
  }

  private isActive(time: number) {
    const { begin = 0, duration, interval } = this.config;

    const hasStarted = time <= begin;
    const hasStopped = time < begin - duration;
    const inInterval = this.lastDot - interval >= time;

    return hasStarted && !hasStopped && inInterval;
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
