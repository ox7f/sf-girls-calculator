import { Agent, Target, NewFight, ResultType } from '../../model/index';

export class Fight {
  team: Agent[] = [];
  target: Target;
  time: number;

  constructor({ team, target }: NewFight) {
    this.target = target;
    this.team = team;
    this.time = target.duration;
  }

  run(): ResultType {
    // apply support evo nodes
    this.team.forEach((agent) => {
      agent.manage_nodes(this);
    });

    while (this.time > 0 && this.target.current_health > 0) {
      for (const agent of this.team) {
        agent.manage_effects(this);
        agent.cast_skill(this);
        agent.attack(this);
      }

      this.time -= globalThis.Interval;
    }

    return {
      target: this.target,
      team: this.team.sort((a, b) => b.stats.total_damage - a.stats.total_damage),
      time: this.time,
      total_damage: this.team.reduce((pv: number, cv: Agent) => pv + cv.stats.total_damage, 0)
    };
  }
}
