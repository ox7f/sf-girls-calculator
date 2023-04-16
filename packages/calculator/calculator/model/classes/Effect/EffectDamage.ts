import { AttackModeEnum, BonusEnum, HistoryActionTypeEnum } from '../../../enums';
import { Agent, AbstractEffect, Fight, NewEffectDamage } from '../../../model';

export class EffectDamage extends AbstractEffect {
  constructor(private readonly config: NewEffectDamage) {
    super();
  }

  activate(agent: Agent, fight: Fight) {
    const { time } = fight;
    const { type } = this.config;
    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: type,
      type: HistoryActionTypeEnum.USE_SKILL
    });
    this.dealDamage(agent, fight);
  }

  add() {
    console.log('implement logic to add effect');
  }

  deactivate() {
    console.log('implement logic to deactivate effect');
  }

  private dealDamage(agent: Agent, fight: Fight) {
    const {
      target,
      target: { criticalResistance },
      time
    } = fight;

    const { attack_counter, skillDamage, baseSkillDamage, criticalRate, criticalDamage } = agent.stats;
    const {
      criticalRate: criticalRateEffect = 0,
      doubleDamage: doubleDamageChance = 0,
      doubleHit: doubleAttackChance = 0
    } = agent.nodeEffects;

    const limitedAttackCounter = Math.min(attack_counter, 10);
    const criticalRateWithEffect = criticalRate + criticalRateEffect * limitedAttackCounter - criticalResistance;

    const bonus: BonusEnum[] = [];
    const baseDamage = this.config.damage({ agent, target, team: fight.team }) / baseSkillDamage;
    let damage = baseDamage * skillDamage;

    if (Math.random() < criticalRateWithEffect) {
      damage *= criticalDamage;
      bonus.push(BonusEnum.CRITICAL);
    }

    if (Math.random() < doubleDamageChance) {
      damage *= 2;
      bonus.push(BonusEnum.HEADSHOT);
    }

    if (Math.random() < doubleAttackChance) {
      this.dealDamage(agent, fight);
      bonus.push(BonusEnum.RELOAD);
    }

    const damageDealt = target.takeDamage(damage);
    agent.stats.totalDamage += damageDealt;
    agent.log(time - globalThis.damageDelay, {
      attackMode: AttackModeEnum.SKILL,
      bonus,
      damage: damageDealt,
      effectType: this.config.type,
      type: HistoryActionTypeEnum.ATTACK
    });
  }

  manage() {
    console.log('implement logic to manage effect');
  }
}
