import { Agent, Target } from "../classes";

export interface NewFight {
  team: Agent[];
  target: Target;
  duration: number;
}
