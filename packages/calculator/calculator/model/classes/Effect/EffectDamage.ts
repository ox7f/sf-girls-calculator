import { AttackModeEnum, BonusEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../../enums';
import { Agent, AbstractEffect, Fight, NewEffectDamage, DamageEffectFunction } from '../../../model';

export class EffectDamage extends AbstractEffect {
  type: EffectTypeEnum;
  damage: DamageEffectFunction;

  constructor({ type, damage }: NewEffectDamage) {
    super();
    this.type = type;
    this.damage = damage;
  }

  activate(agent: Agent, fight: Fight) {
    const { time } = fight;
    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.type,
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

    const { attackCounter, skillDamage, baseSkillDamage, criticalRate, criticalDamage } = agent.stats;
    const {
      skillDamage: skillDamageEffect = 0,
      criticalRate: criticalRateEffect = 0,
      doubleDamage: doubleDamageChance = 0,
      doubleHit: doubleAttackChance = 0
    } = agent.nodeEffects;

    const limitedAttackCounter = Math.min(attackCounter, 10);
    const criticalRateWithEffect = criticalRate + criticalRateEffect * limitedAttackCounter - criticalResistance;
    const skillAttackEffect = skillDamage * skillDamageEffect * limitedAttackCounter;
    const totalSkillAttack = skillDamage + skillAttackEffect;

    const bonus: BonusEnum[] = [];
    const baseDamage = this.damage({ agent, target, team: fight.team }) / baseSkillDamage;
    let damage = baseDamage * totalSkillAttack;

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
      effectType: this.type,
      type: HistoryActionTypeEnum.ATTACK
    });
  }

  manage() {
    console.log('implement logic to manage effect');
  }
}
