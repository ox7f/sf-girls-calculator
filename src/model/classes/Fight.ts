import { NewFight } from "../interfaces";
import { ResultType } from "../types";
import { Agent, Effect, Target } from "./index";

export class FightCalculator {
  team: Agent[] = [];
  target: Target;
  time: number = 0;

  constructor({ team, target }: NewFight) {
    this.team = team;
    this.target = target;
  }

  run(): ResultType {
    while (this.time < this.target.duration && this.target.current_health > 0) {
      this.handle_skill();
      this.handle_attack();
      this.time += 10;
    }

    return {
      team: this.team,
      time: this.time,
      target: this.target,
    };
  }

  handle_attack() {
    this.team.forEach((agent) => {
      let time_to_attack =
        Math.round(((1000 / agent.attack_speed) * 1000) / 10) * 10;

      // check if the agent can attack
      if (this.time - agent.last_attack_time >= time_to_attack) {
        agent.attack(this.target, this.time);
      }
    });
  }

  handle_skill() {
    this.team.forEach((agent) => {
      // check if the skill can be used
      if (this.time % agent.skill.cooldown === 0) {
        this.add_effect(agent);
      }
      this.remove_effect(agent);
    });
  }

  add_effect(agent: Agent) {
    agent.skill.effects.forEach((effect) => {
      if (agent.skill.is_stackable) {
        this.apply_stackable_effect(effect, agent);
      } else {
        this.apply_non_stackable_effect(effect, agent);
      }
    });
  }

  apply_stackable_effect(effect: Effect, agent: Agent) {
    this.apply_effect(agent, effect);
  }

  apply_non_stackable_effect(effect: Effect, agent: Agent) {
    const old_effect = agent.applied_effects.find(
      (e) => e.apply === effect.apply
    );

    if (old_effect) {
      old_effect.begin = this.time;
    } else {
      this.apply_effect(agent, effect);
    }
  }

  apply_effect(agent: Agent, effect: Effect) {
    const { team, target, time } = this;
    effect.apply({ agent, team, target });
    agent.applied_effects.push({ ...effect, begin: time });
  }

  remove_effect(agent: Agent) {
    agent.applied_effects = agent.applied_effects.filter((effect) => {
      if (this.time === effect.duration + effect.begin) {
        this.remove_expired_effect(effect, agent);
        return false;
      }
      return true;
    });
  }

  remove_expired_effect(effect: Effect, agent: Agent) {
    const { team, target } = this;
    effect.remove({ agent, team, target });
  }
}
