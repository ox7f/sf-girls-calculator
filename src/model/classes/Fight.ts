import { NewFight } from "../interfaces";
import { Agent, Target } from "./index";

export class FightCalculator {
  team: Agent[] = [];
  target: Target;
  duration: number; // fight length in seconds

  constructor({ team, target, duration }: NewFight) {
    this.team = team;
    this.target = target;
    this.duration = duration * 1000; // seconds to ms
  }

  fight() {
    let starting_health = this.target.health;
    let run_time = 0;

    while (run_time < this.duration && this.target.health > 0) {
      this.team.forEach((agent) => {
        let time_to_attack = (1000 / agent.attack_speed) * 1000;

        // check if the skill can be used
        if (run_time % agent.skill.cooldown === 0) {
          agent.skill.effects.forEach((e) => {
            if (agent.skill.is_stackable) {
              // stackable skill
              e.apply({ agent, team: this.team, target: this.target });
              agent.applied_effects.push({ ...e, begin: run_time });
            } else {
              // non-stackable skill
              const oldEffect = agent.applied_effects.find(
                (effect) => effect.apply === e.apply
              );

              if (oldEffect) {
                // refresh begin time of non-stackable effects
                oldEffect.begin = run_time;
              } else {
                // apply effect
                e.apply({ agent, team: this.team, target: this.target });
                agent.applied_effects.push({ ...e, begin: run_time });
              }
            }
          });
        }

        // remove skill after effect duration
        agent.applied_effects = agent.applied_effects.filter((e) => {
          if (run_time === e.duration + e.begin) {
            e.remove({ agent, team: this.team, target: this.target });
            return false;
          }
          return true;
        });

        // check if the agent can attack
        if (run_time - agent.last_attack_time >= time_to_attack) {
          agent.attack(this.target, run_time);
        }
      });

      run_time += 10;
    }

    const team_sorted_by_damage = this.team.sort(
      (a, b) => b.dealt_damage - a.dealt_damage
    );

    console.log("result:", {
      health: Number(this.target.health.toFixed(2)),
      damage: Number((starting_health - this.target.health).toFixed(2)),
      time: (this.duration - run_time) / 1000,
    });

    console.table(team_sorted_by_damage, [
      "name",
      "attack_counter",
      "dealt_damage",
    ]);
  }
}
