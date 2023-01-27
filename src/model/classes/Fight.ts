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

    while (run_time <= this.duration && this.target.health > 0) {
      this.team.forEach((agent) => {
        let time_to_attack = (1000 / agent.attack_speed) * 1000;

        // check if the skill can be used
        if (run_time % agent.skill.cooldown === 0) {
          agent.skill.effects.forEach((e) => {
            e.apply({
              agent,
              team: this.team,
              target: this.target,
            });
            e.begin = run_time;
          });
        }

        // remove skill after effect duration
        agent.skill.effects.forEach((e) => {
          if (run_time === e.duration + e.begin) {
            e.remove({
              agent,
              team: this.team,
              target: this.target,
            });
          }
        });

        // check if the agent can attack
        if (run_time - agent.last_attack_time >= time_to_attack) {
          agent.attack(this.target, run_time);
        }
      });

      run_time += 10;
    }

    console.log("result", {
      name: this.team.map((a) => a.name).join(", "),
      attack_counter: this.team.map((a) => a.attack_counter).join(", "),
      health: this.target.health,
      damage: starting_health - this.target.health,
    });
  }
}
