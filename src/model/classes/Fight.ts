import { Agent, Target } from "./index";

export class FightCalculator {
  calculate_damage_agent_individually(
    agent: Agent,
    target: Target,
    duration: number = 30000
  ) {
    let starting_health = target.health;
    let run_time = 0;

    while (run_time <= duration && target.health > 0) {
      let time_to_attack = (1000 / agent.attack_speed) * 1000;

      // check if the skill can be used
      if (run_time % agent.skill.cooldown === 0) {
        agent.skill.effects.forEach((e) => {
          e.apply({
            agent,
            team: [agent],
            target,
          });
          e.begin = run_time;
        });
      }

      // remove skill after effect duration
      agent.skill.effects.forEach((e) => {
        if (run_time === e.duration + e.begin) {
          e.remove({
            agent,
            team: [agent],
            target,
          });
        }
      });

      // check if the agent can attack
      if (run_time - agent.last_attack_time >= time_to_attack) {
        agent.attack(target, run_time);
      }

      run_time += 10;
    }

    return {
      name: agent.name,
      attack_counter: agent.attack_counter,
      health: target.health,
      damage: starting_health - target.health,
    };
  }

  calculate_damage_team(
    team: Agent[],
    target: Target,
    duration: number = 30000
  ) {
    // TODO: implement this method
    console.log("implement me");
  }
}
