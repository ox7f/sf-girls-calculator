import { ActionEnum, ClassEnum, EffectTypeEnum, OrganizationEnum, CupSizeEnum } from '../../enums/index';
import { ActionType, Effect, EffectDOT, Fight, HistoryType, NewAgent, Skill, Stats } from '../../model/index';

export class Agent {
  index: number;
  name: string;
  organization: OrganizationEnum;
  cup_size: CupSizeEnum;
  class: ClassEnum;
  stats: Stats;
  skill: Skill;

  attack_mode = 'Normal'; // Normal | Skill | None
  applied_effects: Array<Effect | EffectDOT> = [];
  casting_skill = false;
  history: HistoryType[] = [];

  logging_enabled: boolean;

  constructor({ index, name, organization, cup_size, class: _class, stats, skill }: NewAgent, logging_enabled = false) {
    this.index = index;
    this.name = name;
    this.organization = organization;
    this.cup_size = cup_size;
    this.class = _class;
    this.stats = new Stats(stats);
    this.skill = new Skill(skill);
    this.logging_enabled = logging_enabled;
  }

  attack(fight: Fight) {
    if (!this.can_attack(fight)) return;

    this.deal_damage(fight);

    this.stats.last_attack_time = fight.time;
    this.stats.attack_counter++;
  }

  can_attack(fight: Fight) {
    const time_to_attack = (1 / this.stats.attack_speed) * 1000;
    const is_first = fight.target.duration - fight.time === time_to_attack;
    const can_attack = this.stats.last_attack_time - fight.time >= time_to_attack || is_first;

    return can_attack && !this.casting_skill;
  }

  get_damage(fight: Fight): number {
    let damage = 0;

    switch (this.attack_mode) {
      case 'Normal':
        damage = this.stats.normal_attack / this.stats.projectile_number;
        break;
      case 'Skill':
        damage = this.stats.skill_damage / this.stats.projectile_number;
        break;
    }

    if (Math.random() < this.stats.critical_rate - fight.target.critical_resistance) {
      damage *= this.stats.critical_damage;
    }

    return damage;
  }

  deal_damage(fight: Fight) {
    const projectile_time = globalThis.projectileInterval * this.stats.projectile_number;

    for (let i = 1; i <= this.stats.projectile_number; i++) {
      const log_time = fight.time - (projectile_time - projectile_time / i); // - globalThis.projectileSpeed;
      const agent_damage = this.get_damage(fight);
      const damage = fight.target.take_damage(log_time, agent_damage);

      this.stats.total_damage += damage;

      this.log(log_time, {
        attack_mode: this.attack_mode,
        damage,
        effect_type: EffectTypeEnum.None,
        type: ActionEnum.Attack
      });
    }
  }

  cast_skill(fight: Fight) {
    if (!this.can_cast_skill(fight) || this.casting_skill) return;

    this.stats.last_cast_time = fight.time;
    this.stats.last_attack_time = fight.time;

    this.skill.cast(this, fight);
  }

  can_cast_skill(fight: Fight) {
    const is_first = fight.target.duration - fight.time === 2000 + this.stats.cast_time;
    const can_cast = fight.time <= this.stats.last_cast_time - this.skill.cooldown || is_first;
    const cast_begin = this.stats.last_cast_time - this.skill.cooldown;
    const cast_end = cast_begin - this.stats.cast_time;

    this.casting_skill = fight.time <= cast_begin && fight.time > cast_end;

    return can_cast || fight.time === fight.target.duration - 2000 - this.stats.cast_time;
  }

  manage_effects(fight: Fight) {
    if (this.applied_effects.length === 0) return;

    this.applied_effects.forEach((effect) => {
      effect.manage(this, fight);
    });
  }

  log(time: number, action: ActionType) {
    if (!this.logging_enabled || time <= 0) return;

    // TODO: remove duplicates Cast | Remove Skill Effect

    const existingEntry = this.history.find((entry) => entry.time === time);

    if (existingEntry) {
      existingEntry.actions.push(action);
    } else {
      this.history.push({ time, total_damage: this.stats.total_damage, actions: [action] });
    }
  }
}
