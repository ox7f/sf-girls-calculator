import { Effect, NewSkill, Skill, Target, effectType } from "./index";
import { ClassName, Name, Organization, Size } from "../enum";

export interface NewAgent {
  name: Name;
  organization: Organization;
  cup_size: Size;
  className: ClassName;
  attack_speed: number;
  normal_attack: number;
  critical_rate: number;
  critical_damage: number;
  skill_damage: number;
  skill: NewSkill;
}

export class Agent {
  name: Name;
  organization: Organization;
  cup_size: Size;
  className: ClassName;
  attack_speed: number; // number of attacks per second
  normal_attack: number; // damage of a "normal" attack (when projectile or weapon hits target)
  critical_rate: number; // probability that a attack will be critical attack
  critical_damage: number; // multiplier of damage for a critical attack
  skill_damage: number; // determines the damage of a skill
  skill: Skill;

  applied_effects: Effect[] = []; // list of applied effects
  attack_counter: number = 0; // number of attacks
  last_attack_time: number = 0; // timestamp of last attack

  [key: string]: any;

  constructor(a: NewAgent) {
    this.name = a.name;
    this.organization = a.organization;
    this.cup_size = a.cup_size;
    this.className = a.className;
    this.attack_speed = a.attack_speed * 1000; // seconds to ms
    this.normal_attack = a.normal_attack;
    this.critical_rate = a.critical_rate;
    this.critical_damage = a.critical_damage;
    this.skill_damage = a.skill_damage;
    this.skill = new Skill(a.skill);
  }

  attack(t: Target, time: number) {
    this.remove_effect(time, t);

    if (time - this.last_attack_time >= (1000 / this.attack_speed) * 1000) {
      let total_damage =
        this.normal_attack /*+ this.skill_damage ?*/ *
        this.critical_rate *
        this.critical_damage;

      this.last_attack_time = time;
      this.attack_counter++;

      t.health -= total_damage;
    }
  }

  activate_skill(time: number, t: Target): Effect[] {
    const { effects } = this.skill;

    for (const e of effects) {
      e.begin = time;

      if (e.is_valid(this)) {
        // skill applies effect
        this.add_effect(e, t);
      } else {
        // skill deals damage
        t.health -=
          e.damage(this, t) * this.critical_rate * this.critical_damage;
      }
    }

    return effects;
  }

  add_effect(e: Effect, t: Target): void {
    if (!e.is_valid(this)) {
      return;
    }

    this.applied_effects.push(e);

    this.handle_effect(e.multiplier(this, t), t, multiply);
    this.handle_effect(e.fixed(this, t), t, add);
  }

  remove_effect(time: number, t: Target): void {
    this.applied_effects = this.applied_effects.filter((e) => {
      if (time >= e.begin + e.duration) {
        this.handle_effect(e.multiplier(this, t), t, divide);
        this.handle_effect(e.fixed(this, t), t, subtract);

        return false;
      }
      return true;
    });
  }

  handle_effect(values: effectType, t: Target, operator: mathType): void {
    Object.keys(values).map((key) => {
      if (key === "damage" && values["damage"]) {
        this["normal_attack"] = operator(
          this["normal_attack"],
          values["damage"](this, t)
        );
        this["skill_damage"] = operator(
          this["skill_damage"],
          values["damage"](this, t)
        );
      } else {
        this[key] = operator(this[key], values[key](this, t));
      }
    });
  }
}

type mathType = (x: number, y: number) => number;

function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}
