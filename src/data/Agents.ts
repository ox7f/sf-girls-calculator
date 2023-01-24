import { ClassName, Name, Organization, Size } from "../enum";
import { Agent, NewAgent, Target } from "../model";

export const Yuki = new Agent({
  name: Name.Yuki,
  organization: Organization.WIO,
  cup_size: Size.C,
  className: ClassName.Striker,
  attack_speed: 0.5,
  normal_attack: 975,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 927,
  skill: {
    // increases damage by 1500% and attack speed by 220% for 4 seconds
    effects: [
      {
        multiplier: (a: Agent, t: Target) => ({
          attack_speed: () => 2.2,
          damage: () => 15,
        }),
        is_valid: (a: Agent) => a.name === Name.Yuki,
        duration: 4,
      },
    ],
    cooldown: 8,
  },
});

export const Neve = new Agent({
  name: Name.Neve,
  organization: Organization.GSR,
  cup_size: Size.D,
  className: ClassName.Support,
  attack_speed: 2,
  normal_attack: 601,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 569,
  skill: {
    // deals 26296.9 damage
    effects: [{ damage: (a: Agent, t: Target) => 26296.9 }],
    cooldown: 17,
  },
});

export const Ayu = new Agent({
  name: Name.Ayu,
  organization: Organization.WIO,
  cup_size: Size.E,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 461,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 379,
  skill: {
    // deals 45535.8 damage
    effects: [{ damage: (a: Agent, t: Target) => 45535.8 }],
    cooldown: 9,
  },
});
