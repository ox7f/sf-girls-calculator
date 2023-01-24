import { Agent, Target } from "../index";

export class FightCalculator {
  calculate_damage_agent_individually(
    agent: Agent,
    target: Target,
    duration: number = 30000
  ) {
    let starting_health = target.health;
    let run_time = 0;

    while (run_time <= duration && target.health > 0) {
      if (run_time % agent.skill.cooldown === 0) {
        const effects = agent.activate_skill(run_time, target);
      }

      agent.attack(target, run_time);

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
