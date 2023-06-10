import { AttackModeEnum, BonusEnum, EffectTypeEnum, HistoryActionTypeEnum } from '../../../enums';
import { AbstractEffect, NewEffectDamage, DamageEffectFunction, EffectParams } from '../../../model';

export class EffectDamage extends AbstractEffect {
  type: EffectTypeEnum;
  numberOfHits: number;
  damage: DamageEffectFunction;

  constructor({ type, damage, numberOfHits = 1 }: NewEffectDamage) {
    super();
    this.type = type;
    this.numberOfHits = numberOfHits;
    this.damage = damage;
  }

  activate(params: EffectParams) {
    const { agent, time } = params;

    agent.log(time, {
      attackMode: AttackModeEnum.NONE,
      damage: 0,
      effectType: this.type,
      type: HistoryActionTypeEnum.USE_SKILL
    });

    this.dealDamage(params);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(_params: EffectParams) {
    // empty
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deactivate(_params: EffectParams) {
    // empty
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  manage(_params: EffectParams) {
    // empty
  }

  private dealDamage(params: EffectParams) {
    const {
      agent,
      target,
      target: { criticalResistance },
      time
    } = params;

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

    for (let i = 0; i < this.numberOfHits; i++) {
      const bonus: BonusEnum[] = [];
      const baseDamage = this.damage(params) / baseSkillDamage;
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
        this.dealDamage(params);
        bonus.push(BonusEnum.RELOAD);
      }

      const damageDealt = target.takeDamage(damage);
      agent.stats.totalDamage += damageDealt;

      agent.log(time - 50, {
        attackMode: AttackModeEnum.SKILL,
        bonus,
        damage: damageDealt,
        effectType: this.type,
        type: HistoryActionTypeEnum.ATTACK
      });
    }
  }
}
