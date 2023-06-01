import { ActionType, ApplyResult, HistoryType } from '../types';
import {
  AttackModeEnum,
  BonusEnum,
  ClassEnum,
  CupSizeEnum,
  EffectTypeEnum,
  OrganizationEnum,
  HistoryActionTypeEnum,
  RarityEnum
} from '../../enums';
import { Effect, EffectAOA, EffectDOT, EvoNode, Fight, NewAgent, Skill, Stats } from '../../model';

export class Agent {
  index: number;
  name: string;
  title: string;
  bio: string;
  rarity: RarityEnum;
  organization: OrganizationEnum;
  cupSize: CupSizeEnum;
  class: ClassEnum;
  stats: Stats;
  skill: Skill;
  nodes: EvoNode[];
  nodeEffects: ApplyResult = {};

  activeEffects: Array<Effect | EffectDOT | EffectAOA> = [];
  attackMode = AttackModeEnum.NORMAL;
  castingSkill = false;
  history: HistoryType[] = [];

  loggingEnabled: boolean;

  constructor(
    { index, name, title, bio, rarity, organization, cupSize, class: _class, stats, skill, nodes = [] }: NewAgent,
    loggingEnabled = false
  ) {
    this.index = index;
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.rarity = rarity;
    this.organization = organization;
    this.cupSize = cupSize;
    this.class = _class;
    this.stats = new Stats(stats);
    this.skill = new Skill(skill);
    this.nodes = nodes.map((node) => new EvoNode(node));
    this.loggingEnabled = loggingEnabled;
  }

  attack(fight: Fight) {
    if (!this.canAttack(fight) || this.castingSkill) {
      return;
    }

    const { time } = fight;

    this.stats.attackCounter++;
    this.stats.lastAttackTime = time;

    if (this.hasEffectAOA()) {
      this.manageEffectAOA(fight);
    }

    this.dealDamage(fight);
  }

  private canAttack(fight: Fight) {
    const { target, time } = fight;

    const timeToAttack = (1 / this.stats.attackSpeed) * 1000;
    const isFirst = target.duration - time === timeToAttack;
    const canAttackNow = this.stats.lastAttackTime - time >= timeToAttack || isFirst;

    return canAttackNow;
  }

  private canCastSkill(fight: Fight) {
    const { target, time } = fight;

    const isFirst = target.duration - time === 1000;
    const canCastSkillNow = time <= this.stats.lastCastTime - this.skill.cooldown || isFirst;
    const castStart = this.stats.lastCastTime;
    const castEnd = castStart - this.stats.castTime;

    this.castingSkill = time <= castStart && time > castEnd;

    return canCastSkillNow;
  }

  castSkill(fight: Fight) {
    if (!this.canCastSkill(fight) || this.castingSkill) {
      return;
    }

    const { time } = fight;

    this.stats.lastCastTime = time;
    this.stats.lastAttackTime = time;

    this.skill.cast({ agent: this, ...fight });
  }

  private dealDamage(fight: Fight) {
    const projectileTime = globalThis.projectileInterval * this.stats.projectileNumber;

    for (let i = 1; i <= this.stats.projectileNumber; i++) {
      const logTime = fight.time - (projectileTime - projectileTime / i);
      const { damage, bonus } = this.getDamage(fight);
      const damageDealt = fight.target.takeDamage(damage);

      this.updateDamageStatsAndLog(logTime, this.attackMode, bonus, damageDealt);
    }
  }

  private getDamage = (fight: Fight) => {
    const { target, time } = fight;
    const { attackCounter, normalAttack, skillDamage, projectileNumber, criticalRate, criticalDamage } = this.stats;

    const {
      normalAttack: normalAttackEffect = 0,
      skillDamage: skillDamageEffect = 0,
      criticalRate: criticalRateEffect = 0,
      dotDamage: dotDamageEffect = 0,
      doubleDamage: doubleDamageChance = 0,
      doubleHit: doubleAttackChance = 0
    } = this.nodeEffects;

    const limitedAttackCounter = Math.min(attackCounter - 1, 10);
    const normalAttackWithEffect = normalAttack + normalAttack * normalAttackEffect * limitedAttackCounter;
    const totalNormalAttack = normalAttackWithEffect / projectileNumber;
    const skillAttackWithEffect = skillDamage + skillDamage * skillDamageEffect * limitedAttackCounter;
    const totalSkillAttack = skillAttackWithEffect / projectileNumber;

    const bonus: BonusEnum[] = [];
    let damage: number;

    switch (this.attackMode) {
      case AttackModeEnum.NORMAL:
        damage = totalNormalAttack;
        break;
      case AttackModeEnum.SKILL:
        damage = totalSkillAttack;
        break;
      default:
        damage = 0;
    }

    const criticalRateWithEffect = criticalRate + criticalRateEffect * limitedAttackCounter - target.criticalResistance;

    if (Math.random() < criticalRateWithEffect) {
      damage *= criticalDamage;
      bonus.push(BonusEnum.CRITICAL);
    }

    if (Math.random() < doubleDamageChance) {
      damage *= 2;
      bonus.push(BonusEnum.HEADSHOT);
    }

    if (dotDamageEffect) {
      const dotEffect = new EffectDOT({
        type: EffectTypeEnum.DOT,
        begin: time,
        duration: 1,
        interval: 0.25,
        damage: () => normalAttack * dotDamageEffect
      });

      if (Math.random() < doubleAttackChance) {
        this.attack(fight);
        bonus.push(BonusEnum.RELOAD);
      }

      this.activeEffects.push(dotEffect);
    }

    return { damage, bonus };
  };

  private hasEffectAOA(): boolean {
    return this.activeEffects.some((effect) => effect instanceof EffectAOA);
  }

  manageEffects(fight: Fight) {
    this.activeEffects.forEach((effect) => {
      effect.manage({ agent: this, ...fight });
    });
  }

  private manageEffectAOA(fight: Fight) {
    const { time } = fight;
    const AOAeffects = this.activeEffects.filter((effect) => effect instanceof EffectAOA) as EffectAOA[];

    AOAeffects.forEach((effect) => {
      effect.apply({ agent: this, ...fight });
      this.log(time, {
        attackMode: AttackModeEnum.NONE,
        damage: 0,
        effectType: effect.type,
        type: HistoryActionTypeEnum.USE_SKILL
      });
    });
  }

  manageEvoTree(fight: Fight) {
    this.nodes.forEach((node) => {
      const result = node.applyNodeEffects({ agent: this, fight, node });

      for (const [key, value] of Object.entries(result)) {
        this.nodeEffects[key] = (this.nodeEffects[key] || 0) + (value || 0);
      }
    });
  }

  private updateDamageStatsAndLog(logTime: number, attackMode: string, bonus: BonusEnum[], damage: number) {
    const type = HistoryActionTypeEnum.ATTACK;
    const effectType = EffectTypeEnum.NONE;

    this.stats.totalDamage += damage;
    this.log(logTime, { attackMode, bonus, damage, effectType, type });
  }

  log(time: number, action: ActionType) {
    if (!this.loggingEnabled) {
      return;
    }

    const existingEntry = this.history.find((entry) => entry.time === time);

    if (existingEntry) {
      existingEntry.actions.push(action);
    } else {
      const newEntry = { time, totalDamage: this.stats.totalDamage, actions: [action] };
      this.history.push(newEntry);
    }
  }
}
