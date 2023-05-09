import {
  AttackModeEnum,
  BonusEnum,
  ClassEnum,
  CupSizeEnum,
  EffectTypeEnum,
  OrganizationEnum,
  HistoryActionTypeEnum
} from '../../enums';
import { Effect, EffectDOT, EvoNode, Fight, NewAgent, Skill, Stats } from '../../model';
import { ActionType, ApplyResult, HistoryType } from '../types';

export class Agent {
  index: number;
  name: string;
  title: string;
  bio: string;
  organization: OrganizationEnum;
  cupSize: CupSizeEnum;
  class: ClassEnum;
  stats: Stats;
  skill: Skill;
  nodes: EvoNode[];
  nodeEffects: ApplyResult = {};

  activeEffects: Array<Effect | EffectDOT> = [];
  attackMode = AttackModeEnum.NORMAL;
  castingSkill = false;
  history: HistoryType[] = [];

  loggingEnabled: boolean;

  constructor(
    { index, name, title, bio, organization, cupSize, class: _class, stats, skill, nodes = [] }: NewAgent,
    loggingEnabled = false
  ) {
    this.index = index;
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.organization = organization;
    this.cupSize = cupSize;
    this.class = _class;
    this.stats = new Stats(stats);
    this.skill = new Skill(skill);
    this.nodes = nodes.map((node) => new EvoNode(node));
    this.loggingEnabled = loggingEnabled;

    this.stats.firstAttackTime = this.stats.attackSpeed * 1000;
  }

  attack(fight: Fight) {
    if (!this.canAttack(fight) || this.castingSkill) {
      return;
    }

    const { time } = fight;

    this.stats.attackCounter++;
    this.stats.lastAttackTime = time;

    // TODO: special case for "Kagawa Matsu" => on each hit, chance to decrease skill cooldown by 2 seconds

    this.dealDamage(fight);
  }

  private canAttack(fight: Fight) {
    const { target, time } = fight;

    const time_to_attack = (1 / this.stats.attackSpeed) * 1000;
    const isFirst = target.duration - time === time_to_attack;
    const canAttack = this.stats.lastAttackTime - time >= time_to_attack || isFirst;

    return canAttack;
  }

  private canCastSkill(fight: Fight) {
    const { target, time } = fight;

    const isFirst = target.duration - time === 1000;
    const canCast = time <= this.stats.lastCastTime - this.skill.cooldown || isFirst;
    const castStart = this.stats.lastCastTime;
    const castEnd = castStart - this.stats.castTime;

    this.castingSkill = time <= castStart && time > castEnd;

    return canCast;
  }

  castSkill(fight: Fight) {
    if (!this.canCastSkill(fight) || this.castingSkill) {
      return;
    }

    const { time } = fight;

    this.stats.lastCastTime = time;
    this.stats.lastAttackTime = time;

    this.skill.cast(this, fight);
  }

  private dealDamage(fight: Fight) {
    const { target, time } = fight;
    const projectileTime = globalThis.projectileInterval * this.stats.projectileNumber;

    for (let i = 1; i <= this.stats.projectileNumber; i++) {
      const logTime = time - (projectileTime - projectileTime / i);
      const { damage, bonus } = this.getDamage(fight);
      const damageDealt = target.takeDamage(damage);

      this.stats.totalDamage += damageDealt;
      this.log(logTime, {
        attackMode: this.attackMode,
        bonus,
        damage: damageDealt,
        effectType: EffectTypeEnum.NONE,
        type: HistoryActionTypeEnum.ATTACK
      });
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

  manageEffects(fight: Fight) {
    if (this.activeEffects.length === 0) {
      return;
    }

    this.activeEffects.forEach((effect) => {
      effect.manage(this, fight);
    });
  }

  manageEvoTree(fight: Fight) {
    if (this.nodes.length === 0) {
      return;
    }

    this.nodes.forEach((node) => {
      const result = node.applyNodeEffects({ agent: this, fight, node });

      for (const [key, value] of Object.entries(result)) {
        this.nodeEffects[key] = (this.nodeEffects[key] || 0) + (value || 0);
      }
    });
  }

  log(time: number, action: ActionType) {
    if (!this.loggingEnabled) {
      return;
    }

    const existingEntry = this.history.find((entry) => entry.time === time);

    if (existingEntry) {
      existingEntry.actions.push(action);
    } else {
      this.history.push({ time, totalDamage: this.stats.totalDamage, actions: [action] });
    }
  }
}
