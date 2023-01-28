import { NewFight } from "../interfaces";
import { Agent, Effect, Target } from "./index";

export class FightCalculator {
  duration: number; // fight length in seconds
  team: Agent[] = [];
  target: Target;
  time: number = 0;

  constructor({ team, target, duration }: NewFight) {
    this.duration = duration * 1000; // seconds to ms
    this.team = team;
    this.target = target;
  }

  run() {
    // preparations
    this.team.forEach((agent) => {
      agent.critical_rate -= this.target.critical_resistance / 100;
    });

    while (this.time < this.duration && this.target.current_health > 0) {
      this.handle_skills();
      this.handle_attacks();
      this.time += 10;
    }

    this.show_results();
  }

  show_results() {
    const team_sort_by_damage = this.team.sort(
      (a, b) => b.dealt_damage - a.dealt_damage
    );

    console.log(`result:
      health: ${this.target.current_health}
      damage: ${this.target.health - this.target.current_health}
      time:   ${(this.duration - this.time) / 1000},
    `);

    console.table(team_sort_by_damage, [
      "name",
      "attack_counter",
      "dealt_damage",
    ]);
  }

  handle_attacks() {
    this.team.forEach((agent) => {
      let time_to_attack = (1000 / agent.attack_speed) * 1000;

      // check if the agent can attack
      if (this.time - agent.last_attack_time >= time_to_attack) {
        agent.attack(this.target, this.time);
      }
    });
  }

  handle_skills() {
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
    effect.apply({ agent, team: this.team, target: this.target });
    agent.applied_effects.push({ ...effect, begin: this.time });
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
