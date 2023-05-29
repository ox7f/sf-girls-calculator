import { generateUUID } from '../../helper';
import { Agent, NewFight, ResultType, Target } from '../../model';

export class Fight {
  team: Agent[];
  target: Target;
  time: number;

  constructor({ team, target }: NewFight) {
    this.target = target;
    this.team = team;
    this.time = target.duration;
  }

  run(): ResultType {
    this.applyAgentEvoTree();

    while (this.time > 0 && this.target.currentHealth > 0) {
      for (const agent of this.team) {
        agent.manageEffects(this);
        agent.castSkill(this);
        agent.attack(this);
      }

      this.time -= globalThis.Interval;
    }

    const sortedTeam = this.team.sort((a: Agent, b: Agent) => b.stats.totalDamage - a.stats.totalDamage);
    const totalDamage = sortedTeam.reduce((pv: number, cv: Agent) => pv + cv.stats.totalDamage, 0);

    return {
      id: generateUUID(),
      target: this.target,
      team: sortedTeam,
      time: this.time,
      totalDamage
    };
  }

  private applyAgentEvoTree() {
    this.team.forEach((agent: Agent) => agent.manageEvoTree(this));
  }
}
