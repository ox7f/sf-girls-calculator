import { Agent, Target } from './index';
import { NewFight } from '../interfaces';
import { ResultType } from '../types';
import { handle_attack, handle_skill } from '../../helper';

export class Fight {
  team: Agent[] = [];
  target: Target;
  time = 0;

  constructor({ team, target }: NewFight) {
    this.team = team;
    this.target = target;
  }

  run(): ResultType {
    while (this.time < this.target.duration && this.target.current_health > 0) {
      handle_skill(this);
      handle_attack(this);
      this.time += globalThis.Interval;
    }

    return {
      team: this.team,
      time: this.time,
      target: this.target
    };
  }
}
