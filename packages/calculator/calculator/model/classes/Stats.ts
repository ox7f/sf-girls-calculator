import { NewStats } from '../interfaces';

export class Stats {
  attackSpeed: number;
  normalAttack: number;
  criticalRate: number;
  criticalDamage: number;
  skillDamage: number;
  baseSkillDamage: number;
  projectileNumber: number;
  castTime: number;

  attackCounter = 0;
  lastAttackTime = 0;
  lastCastTime = 0;
  totalDamage = 0;

  constructor({
    attackSpeed,
    normalAttack,
    criticalRate,
    criticalDamage,
    skillDamage,
    baseSkillDamage,
    projectileNumber = 1,
    castTime = 1
  }: NewStats) {
    this.attackSpeed = attackSpeed;
    this.normalAttack = normalAttack;
    this.criticalRate = criticalRate;
    this.criticalDamage = criticalDamage;
    this.skillDamage = skillDamage;
    this.baseSkillDamage = baseSkillDamage;
    this.projectileNumber = projectileNumber;
    this.castTime = castTime * 1000; // seconds to ms
  }
}
