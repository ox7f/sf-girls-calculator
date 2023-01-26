import { ClassName, Name, Organization, Size } from "../enums";
import { Agent } from "../model/classes";
import { EffectParamType } from "../model/types";

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
    // increases the damage to 1500% and attack speed to 220% for 4 seconds. cooldown: 8
    effect: {
      duration: 4,
      apply: (params: EffectParamType) => {
        const { agent } = params;

        agent.attack_speed *= 2.2;
        agent.normal_attack *= 15;
        agent.skill_damage *= 15;
      },
      remove: (params: EffectParamType) => {
        const { agent } = params;

        agent.attack_speed /= 2.2;
        agent.normal_attack /= 15;
        agent.skill_damage /= 15;
      },
    },
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
  critical_damage: 2.028,
  skill_damage: 569,
  skill: {
    // summons an iceberg dealing 26296.9 damage and slows down enemies to 50% for 5 seconds. cooldown: 17
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 26296.9;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
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
    // shoots a piercing laser beam dealing 45535.8 damage. cooldown: 9
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 26296.9;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 9,
  },
});

export const Mika = new Agent({
  name: Name.Mika,
  organization: Organization.GAA,
  cup_size: Size.G,
  className: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 487,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 463,
  skill: {
    // smashes the ground and creates 4 sword-quakes each dealing 10010.1 damage. cooldown: 11
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 4 * 10010.1;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 11,
  },
});

export const Sora = new Agent({
  name: Name.Sora,
  organization: Organization.GSR,
  cup_size: Size.E,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 461,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 379,
  skill: {
    // shoots two electric bullets, each dealing 27890.7 damage. cooldown: 8
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 2 * 27890.7;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 8,
  },
});

export const Ember = new Agent({
  name: Name.Ember,
  organization: Organization.GAA,
  cup_size: Size.E,
  className: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 399,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 362,
  skill: {
    // shoots 4 enhanced bullets, each dealing 13990.6 damage cooldown: 8
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 4 * 13990.6;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 8,
  },
});

export const Chiharu = new Agent({
  name: Name.Chiharu,
  organization: Organization.GAA,
  cup_size: Size.J,
  className: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 1248,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1131,
  skill: {
    // shoots a powerful bullet at the monster with the highest health, dealing 65164.8 damage. cooldown: 9
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 65164.8;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 9,
  },
});

export const Irina = new Agent({
  name: Name.Irina,
  organization: Organization.DOD,
  cup_size: Size.A,
  className: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 627,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 569,
  skill: {
    // fires 4 missiles at target, each dealing 14229.9 damage. cooldown: 6
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 4 * 14229.9;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 6,
  },
});

export const Yuuha = new Agent({
  name: Name.Yuuha,
  organization: Organization.WIO,
  cup_size: Size.C,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 733,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 604,
  skill: {
    // deals 26562.6 damage and knockbacks all monsters by 1.6 unit distances. cooldown: 16
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 26562.6;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 16,
  },
});

export const Uzu = new Agent({
  name: Name.Uzu,
  organization: Organization.ADB,
  cup_size: Size.J,
  className: ClassName.Support,
  attack_speed: 1,
  normal_attack: 1865,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1766,
  skill: {
    // releases her tentacles and deals 57204.3 damage to the surrounding units, knockbacks enemy for 1 unit distance and applies a 1 second mini-stun. cooldown: 16
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 57204.3;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 16,
  },
});

export const Denka = new Agent({
  name: Name.Denka,
  organization: Organization.WIO,
  cup_size: Size.E,
  className: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 760,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 723,
  skill: {
    // shoots 3 electric drills, each dealing 24213.7 damage. cooldown: 9
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 3 * 24213.7;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 9,
  },
});

export const Reika = new Agent({
  name: Name.Reika,
  organization: Organization.NDS,
  cup_size: Size.I,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 733,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 604,
  skill: {
    // launches a rocket towards the target, dealing 86932 damage. cooldown: 9
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 86932;

        if (agent) {
          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage *= agent.skill_damage????
        }

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 9,
  },
});

export const Noa = new Agent({
  name: Name.Noa,
  organization: Organization.NDS,
  cup_size: Size.D,
  className: ClassName.Support,
  attack_speed: 2,
  normal_attack: 929,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 880,
  skill: {
    // releases a drone dealing 50668.9 damage to the target area and slow down to 60% for 6 seconds. cooldown: 15
    effect: {
      duration: 6,
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 50668.9;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 15,
  },
});

export const Neugena = new Agent({
  name: Name.Neugena,
  organization: Organization.GSR,
  cup_size: Size.D,
  className: ClassName.Gunner,
  attack_speed: 4.4,
  normal_attack: 356,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 293,
  skill: {
    // releases a blasting arrow, dealing (default skill damage * 0.00020)% of enemies current hp in a small area (minimum damage = skill damage). cooldown: 20
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = agent.skill_damage * target.health * 0.0002;

        if (damage < agent.skill_damage) {
          damage = agent.skill_damage;
        }

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 20,
  },
});

export const Larisa = new Agent({
  name: Name.Larisa,
  organization: Organization.ADB,
  cup_size: Size.G,
  className: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 1711,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1552,
  skill: {
    // fires a high explosive missile at target locations dealing 69856 damage. cooldown: 11
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 69856;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 11,
  },
});

export const Rui = new Agent({
  name: Name.Rui,
  organization: Organization.GSR,
  cup_size: Size.D,
  className: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1014,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 964,
  skill: {
    // enters demonic mode which increases her attack damage to 16382.6, attack range and area for 10 seconds. cooldown: 17
    effect: {
      duration: 10,
      apply: (params: EffectParamType) => {
        const { agent } = params;
        agent.normal_attack += 16382.8;
      },
      remove: (params: EffectParamType) => {
        const { agent } = params;
        agent.normal_attack += 16382.8;
      },
    },
    cooldown: 17,
  },
});

export const Kotora = new Agent({
  name: Name.Kotora,
  organization: Organization.GSR,
  cup_size: Size.J,
  className: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 832,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 754,
  skill: {
    // launches an artillery shell towards the target location, which splits into 4 shells, each dealing 16404.3 damage. cooldown: 11
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 4 * 16404.3;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 11,
  },
});

export const Vanessa = new Agent({
  name: Name.Vanessa,
  organization: Organization.DOD,
  cup_size: Size.K,
  className: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1267,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1200,
  skill: {
    // creates an electric cage, stunning enemies for 8 seconds. cooldown: 34
    effect: {
      duration: 8,
      apply: () => {},
      remove: () => {},
    },
    cooldown: 34,
  },
});

export const Aoi = new Agent({
  name: Name.Aoi,
  organization: Organization.WIO,
  cup_size: Size.B,
  className: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1275,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 1207,
  skill: {
    // randomly picks 6 agent(s), add 25% critical rate for 6 seconds. cooldown: 9
    effect: {
      duration: 6,
      apply: (params: EffectParamType) => {
        const { team } = params;
        team.forEach((a) => (a.critical_rate += 0.25));
      },
      remove: (params: EffectParamType) => {
        const { team } = params;
        team.forEach((a) => (a.critical_rate -= 0.25));
      },
    },
    cooldown: 9,
  },
});

export const Sara = new Agent({
  name: Name.Sara,
  organization: Organization.GSR,
  cup_size: Size.C,
  className: ClassName.Support,
  attack_speed: 3.1,
  normal_attack: 856,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 811,
  skill: {
    // shoots a gigantic snake dealing 55936.6 damage. cooldown: 11
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 55936.6;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 11,
  },
});

export const Mai = new Agent({
  name: Name.Mai,
  organization: Organization.DOD,
  cup_size: Size.B,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 984,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 811,
  skill: {
    // shoots bullets rapidly. enemies that were hit wil take 85120.9 damage once. cooldown: 13
    effect: {
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 85120.9;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.takeDamage(damage);
      },
      remove: () => {},
    },
    cooldown: 13,
  },
});

export const Tsukiko = new Agent({
  name: Name.Tsukiko,
  organization: Organization.ADB,
  cup_size: Size.F,
  className: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 1711,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1552,
  skill: {
    // shoots out a devastating sound wave dealing 23285.3 damage and increases the damage enemies receive by 35% for 9 seconds. cooldown: 38
    effect: {
      duration: 9,
      apply: (params: EffectParamType) => {
        const { agent, target } = params;
        let damage = 23285.3;

        // TODO: calculate skill damage (how does skill damage multiply the damage)
        // damage *= agent.skill_damage????

        target.received_damage_multiplier *= 1.35;
        target.takeDamage(damage);
      },
      remove: (params: EffectParamType) => {
        const { target } = params;
        target.received_damage_multiplier /= 1.35;
      },
    },
    cooldown: 38,
  },
});

export const Yukako = new Agent({
  name: Name.Yukako,
  organization: Organization.NDS,
  cup_size: Size.A,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 984,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 811,
  skill: {
    // increases the damage of all gunner agents to 150% for 12 seconds. cooldown: 25
    effect: {
      duration: 12,
      apply: (params: EffectParamType) => {
        const { team } = params;
        team
          .filter((a) => a.className === ClassName.Gunner)
          .forEach((a) => {
            a.skill_damage *= 1.5;
            a.normal_attack *= 1.5;
          });
      },
      remove: (params: EffectParamType) => {
        const { team } = params;
        team
          .filter((a) => a.className === ClassName.Gunner)
          .forEach((a) => {
            a.skill_damage /= 1.5;
            a.normal_attack /= 1.5;
          });
      },
    },
    cooldown: 25,
  },
});

export const Coco = new Agent({
  name: Name.Coco,
  organization: Organization.DOD,
  cup_size: Size.B,
  className: ClassName.Support,
  attack_speed: 1,
  normal_attack: 2531,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 2398,
  skill: {
    // she will encourage enemies run 200% faster for 1.5 seconds. and if coco is the only support in the team, she will increases 433% damage of all friendly agents in the team for 7 seconds. cooldown: 6
    effect: {
      duration: 7,
      apply: (params: EffectParamType) => {
        const { team } = params;
        const is_valid =
          team.filter((a) => a.className === ClassName.Support).length !== 1;

        if (is_valid) {
          return;
        }

        team.forEach((a) => {
          a.skill_damage *= 4.33;
          a.normal_attack *= 4.33;
        });
      },
      remove: (params: EffectParamType) => {
        const { team } = params;
        const is_valid =
          team.filter((a) => a.className === ClassName.Support).length !== 1;

        if (is_valid) {
          return;
        }

        team.forEach((a) => {
          a.skill_damage /= 4.33;
          a.normal_attack /= 4.33;
        });
      },
    },
    cooldown: 6,
  },
});

export const Pan = new Agent({
  name: Name.Pan,
  organization: Organization.WIO,
  cup_size: Size.G,
  className: ClassName.Gunner,
  attack_speed: 4.4,
  normal_attack: 503,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 414,
  skill: {
    // cast a non-stackable buff on all friendly gunner agents. increases critical rate to 20% and critical damage to 120% for 12 seconds. cooldown: 25
    effect: {
      duration: 12,
      apply: (params: EffectParamType) => {
        const { team } = params;
        team
          .filter((a) => a.className === ClassName.Gunner)
          .forEach((a) => {
            a.critical_damage *= 1.2;
            a.critical_damage *= 1.2;
          });
      },
      remove: (params: EffectParamType) => {
        const { team } = params;
        team
          .filter((a) => a.className === ClassName.Gunner)
          .forEach((a) => {
            a.critical_damage /= 1.2;
            a.critical_damage /= 1.2;
          });
      },
    },
    cooldown: 25,
  },
});

export const Hitomi = new Agent({
  name: Name.Hitomi,
  organization: Organization.GAA,
  cup_size: Size.D,
  className: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1603,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 1518,
  skill: {
    // increases the attack speed of all agents to 220% for 7 seconds. cooldown: 19
    effect: {
      duration: 7,
      apply: (params: EffectParamType) => {
        const { team } = params;
        team.forEach((a) => (a.attack_speed *= 2.2));
      },
      remove: (params: EffectParamType) => {
        const { team } = params;
        team.forEach((a) => (a.attack_speed /= 2.2));
      },
    },
    cooldown: 19,
  },
});

// export const Cadence = new Agent({
//   name: Name.Cadence,
//   organization: Organization.ADB,
//   cup_size: Size.D,
//   className: ClassName.Artillery,
//   attack_speed: 2.2,
//   normal_attack: 1084,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 983,
//   skill: {
//     // calls in laser barrage and deals 68821.1 damage to all monsters. cooldown: 10
//     effects: [{ damage: () => 68821.1 }],
//     cooldown: 10,
//   },
// });

// export const Uni = new Agent({
//   name: Name.Uni,
//   organization: Organization.DOD,
//   cup_size: Size.K,
//   className: ClassName.Support,
//   attack_speed: 4,
//   normal_attack: 797,
//   critical_rate: 0.59,
//   critical_damage: 2.018,
//   skill_damage: 754,
//   skill: {
//     // casts an arrow barrage to deal 85981.3 damage and stuns for 6 seconds. cooldown: 20
//     effects: [{ damage: () => 85981.3 }],
//     cooldown: 20,
//   },
// });

// export const Sizuko = new Agent({
//   name: Name.Sizuko,
//   organization: Organization.GAA,
//   cup_size: Size.K,
//   className: ClassName.Striker,
//   attack_speed: 2,
//   normal_attack: 616,
//   critical_rate: 0.59,
//   critical_damage: 2.018,
//   skill_damage: 584,
//   skill: {
//     // throws a soul-scythe, after it attach on the enemy will split into 4 souls, each dealing 35211.1 damage and inducing fear to the enemy for 4 seconds. cooldown: 18
//     effects: [{ damage: () => 4 * 35211.1 }],
//     cooldown: 18,
//   },
// });

// export const Chihiro = new Agent({
//   name: Name.Chihiro,
//   organization: Organization.ADB,
//   cup_size: Size.C,
//   className: ClassName.Artillery,
//   attack_speed: 0.6,
//   normal_attack: 4297,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 3898,
//   skill: {
//     // bullets will now penetrate targets. increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 7.15,
//           damage: () => 1.14,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Chihiro,
//         duration: 5,
//       },
//     ],
//     cooldown: 8,
//   },
// });

// export const Mei = new Agent({
//   name: Name.Mei,
//   organization: Organization.ADB,
//   cup_size: Size.G,
//   className: ClassName.Striker,
//   attack_speed: 1.5,
//   normal_attack: 858,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 815,
//   skill: {
//     // throws out a chakram, ricocheting onto 4 enemies, dealing 24462.8 damage to each enemy. cooldown: 12
//     effects: [{ damage: () => 97851.2 }],
//     cooldown: 12,
//   },
// });

// export const Riho = new Agent({
//   name: Name.Riho,
//   organization: Organization.ADB,
//   cup_size: Size.C,
//   className: ClassName.Gunner,
//   attack_speed: 2.2,
//   normal_attack: 1235,
//   critical_rate: 0.74,
//   critical_damage: 2.028,
//   skill_damage: 1018,
//   skill: {
//     // summons a group of giant redhounds at the target location, dealing 76324.4 damage over 2 seconds. cooldown: 9
//     effects: [{ damage: () => 76324.4 }],
//     cooldown: 9,
//   },
// });

// export const Mitsu = new Agent({
//   name: Name.Mitsu,
//   organization: Organization.ADB,
//   cup_size: Size.D,
//   className: ClassName.Artillery,
//   attack_speed: 1.1,
//   normal_attack: 2149,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 1949,
//   skill: {
//     // shoots mega laser beams dealing 77962.8 damage. cooldown: 14
//     effects: [{ damage: () => 77962.8 }],
//     cooldown: 14,
//   },
// });

// export const Akina = new Agent({
//   name: Name.Akina,
//   organization: Organization.DOD,
//   cup_size: Size.H,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1287,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 1223,
//   skill: {
//     // punches out a fire-fist dealing 80727.2 damage to an area and ignites the enemy for 5 seconds, dealing 1902.6 damage every seconds. cooldown 9
//     effects: [{ damage: () => 80727.2 }], // TODO: implement damage over time
//     cooldown: 9,
//   },
// });

// export const Akari = new Agent({
//   name: Name.Akari,
//   organization: Organization.ADB,
//   cup_size: Size.C,
//   className: ClassName.Support,
//   attack_speed: 1,
//   normal_attack: 2697,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 2697,
//   skill: {
//     // summons a damage circle under her feet dealing total 53934.9 damage in 1 second, then will turn into a healing circle, heal friendly units for total (default skill damage * 7000%) in 3 seconds. cooldown: 7
//     effects: [{ damage: () => 53934.9 }],
//     cooldown: 7,
//   },
// });

// export const Sayaka = new Agent({
//   name: Name.Sayaka,
//   organization: Organization.ADB,
//   cup_size: Size.H,
//   className: ClassName.Striker,
//   attack_speed: 1.8,
//   normal_attack: 721,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 686,
//   skill: {
//     // summons 4 lightning birds, each dealing 26913.7 damage. cooldown: 11
//     effects: [{ damage: (a) => 4 * 26913.7 }],
//     cooldown: 11,
//   },
// });

// export const Momoko = new Agent({
//   name: Name.Momoko,
//   organization: Organization.DOD,
//   cup_size: Size.A,
//   className: ClassName.Gunner,
//   attack_speed: 1,
//   normal_attack: 2160,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 2160,
//   skill: {
//     // increases self attack speed to 530% for 4 seconds. bullet adds a penetration and charming effect, which will scare enemy away for 2 seconds. cooldown: 15
//     effects: [
//       {
//         multiplier: () => ({ attack_speed: () => 5.3 }),
//         is_valid: (a: Agent) => a.name === Name.Momoko,
//         duration: 4,
//       },
//     ],
//     cooldown: 15,
//   },
// });

// export const Meteli = new Agent({
//   name: Name.Meteli,
//   organization: Organization.WIO,
//   cup_size: Size.E,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1226,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1226,
//   skill: {
//     // summons a choo-choo train to knock back and deal 78450.7 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10
//     effects: [{ damage: () => 78450.7 }], // TODO: implement reset functionality
//     cooldown: 10,
//   },
// });

// export const Hoshiko = new Agent({
//   name: Name.Hoshiko,
//   organization: Organization.GSR,
//   cup_size: Size.M,
//   className: ClassName.Support,
//   attack_speed: 2,
//   normal_attack: 1613,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 1613,
//   skill: {
//     // cast a stackable buff on all striker agents, each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 5.3,
//           damage: () => 1.4,
//         }),
//         is_valid: (a: Agent) => a.className === ClassName.Striker,
//         duration: 24,
//       },
//     ],
//     cooldown: 5,
//   },
// });

// export const Feme = new Agent({
//   name: Name.Feme,
//   organization: Organization.GAA,
//   cup_size: Size.G,
//   className: ClassName.Artillery,
//   attack_speed: 1,
//   normal_attack: 2099,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 2099,
//   skill: {
//     // TODO: update skill description
//     // increases self damage by 460% and critical rate by 1160% for 12 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           damage: () => 4.6,
//           critical_rate: () => 11.6,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Feme,
//         duration: 12,
//       },
//     ],
//     cooldown: 15,
//   },
// });

// export const NeveX = new Agent({
//   name: Name.NeveX,
//   organization: Organization.GSR,
//   cup_size: Size.L,
//   className: ClassName.Support,
//   attack_speed: 0.5,
//   normal_attack: 6467,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 6467,
//   skill: {
//     // deals 10993.1 damage
//     // all artillery agents in your team get a critical damage gain of 190% for 14 seconds // TODO: multiplier or fixed?
//     effects: [
//       { damage: () => 10993.1 },
//       {
//         multiplier: () => ({ critical_damage: () => 1.9 }),
//         is_valid: (a: Agent) => a.className === ClassName.Artillery,
//         duration: 14,
//       },
//     ],
//     cooldown: 20,
//   },
// });

// export const Eiko = new Agent({
//   name: Name.Eiko,
//   organization: Organization.GSR,
//   cup_size: Size.F,
//   className: ClassName.Gunner,
//   attack_speed: 1,
//   normal_attack: 2160,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 2160,
//   skill: {
//     // deals 58548.4 damage
//     effects: [{ damage: () => 58548.4 }],
//     cooldown: 9,
//   },
// });

// export const Goi = new Agent({
//   name: Name.Goi,
//   organization: Organization.GAA,
//   cup_size: Size.G,
//   className: ClassName.Artillery,
//   attack_speed: 1.5,
//   normal_attack: 1394,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 1394,
//   skill: {
//     // deals 75294.3 damage
//     effects: [{ damage: () => 75294.3 }],
//     cooldown: 10,
//   },
// });

// export const RihoX = new Agent({
//   name: Name.RihoX,
//   organization: Organization.ADB,
//   cup_size: Size.C,
//   className: ClassName.Artillery,
//   attack_speed: 2,
//   normal_attack: 1057,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1057,
//   skill: {
//     // deals dozens (X * 9515.2) damage // TODO: get number of X
//     // increases damage by 189% and attack speed by 276% for 12 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 1.89,
//           damage: () => 2.76,
//         }),
//         is_valid: (a: Agent) => a.name === Name.RihoX,
//         duration: 12,
//       },
//       { damage: () => 9515.2 * 12 },
//     ],
//     cooldown: 14,
//   },
// });

// export const Setsuna = new Agent({
//   name: Name.Setsuna,
//   organization: Organization.GSR,
//   cup_size: Size.D,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1226,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1226,
//   skill: {
//     // deals 16548 damage
//     // increases damage by 1000% for 7 seconds
//     effects: [
//       {
//         multiplier: () => ({ damage: () => 10 }),
//         is_valid: (a: Agent) => a.name === Name.Setsuna,
//         duration: 7,
//       },
//       { damage: () => 16548 },
//     ],
//     cooldown: 9,
//   },
// });

// export const Hami = new Agent({
//   name: Name.Hami,
//   organization: Organization.DOD,
//   cup_size: Size.C,
//   className: ClassName.Gunner,
//   attack_speed: 0.8,
//   normal_attack: 2727,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 2727,
//   skill: {
//     // deals 111823 damage
//     effects: [{ damage: () => 111823 }],
//     cooldown: 8,
//   },
// });

// export const O = new Agent({
//   name: Name.O,
//   organization: Organization.GSR,
//   cup_size: Size.C,
//   className: ClassName.Artillery,
//   attack_speed: 1,
//   normal_attack: 2099,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 2099,
//   skill: {
//     // deals 79768.4 damage
//     // increases critical rate by 16% and critical damage by 64% for 10 seconds // TODO: multiplier or fixed?
//     effects: [
//       {
//         multiplier: () => ({
//           critical_rate: () => 1.16,
//           critical_damage: () => 1.64,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Setsuna,
//         duration: 10,
//       },
//       { damage: () => 79768.4 },
//     ],
//     cooldown: 11,
//   },
// });

// export const GaiGai = new Agent({
//   name: Name.GaiGai,
//   organization: Organization.DOD,
//   cup_size: Size.D,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1226,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1226,
//   skill: {
//     // deals 147095 damage
//     effects: [{ damage: () => 147095 }],
//     cooldown: 10,
//   },
// });

// export const Rosalie = new Agent({
//   name: Name.Rosalie,
//   organization: Organization.ADB,
//   cup_size: Size.E,
//   className: ClassName.Support,
//   attack_speed: 1,
//   normal_attack: 3264,
//   critical_rate: 0.74, // TODO:
//   critical_damage: 2.018,
//   skill_damage: 3264,
//   skill: {
//     // increases all artillery agents attack speed by 110% and damage by 140% for 24 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 1.1,
//           damage: () => 1.4,
//         }),
//         is_valid: (a: Agent) => a.className === ClassName.Artillery,
//         duration: 24,
//       },
//     ],
//     cooldown: 5,
//   },
// });

// export const Toki = new Agent({
//   name: Name.Toki,
//   organization: Organization.DOD,
//   cup_size: Size.D,
//   className: ClassName.Support,
//   attack_speed: 2,
//   normal_attack: 1624,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 1624,
//   skill: {
//     // increases all gunner agents attack speed by 110% and damage by 140% for 24 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 1.1,
//           damage: () => 1.4,
//         }),
//         is_valid: (a: Agent) => a.className === ClassName.Gunner,
//         duration: 24,
//       },
//     ],
//     cooldown: 5,
//   },
// });

// export const Wu = new Agent({
//   name: Name.Wu,
//   organization: Organization.GAA,
//   cup_size: Size.G,
//   className: ClassName.Striker,
//   attack_speed: 2,
//   normal_attack: 613,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 613,
//   skill: {
//     effects: [
//       // increases self normal attack damage by 1035% for 11 seconds
//       {
//         multiplier: () => ({ damage: () => 10.35 }),
//         is_valid: (a: Agent) => a.name === Name.Wu,
//         duration: 11,
//       },
//       // increasers strikers critical rate by 30% for 4 seconds
//       {
//         fixed: () => ({ critical_rate: () => 0.3 }),
//         is_valid: (a: Agent) => a.className === ClassName.Striker,
//         duration: 4,
//       },
//     ],
//     cooldown: 10,
//   },
// });

// export const ZiLong = new Agent({
//   name: Name.ZiLong,
//   organization: Organization.DOD,
//   cup_size: Size.I,
//   className: ClassName.Gunner,
//   attack_speed: 2.2,
//   normal_attack: 1088,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 1088,
//   skill: {
//     // increases attack speed by 520% for 11 seconds
//     // increases gunner agents normal attack damage by 133% for 15 seconds
//     effects: [
//       {
//         fixed: () => ({ attack_speed: () => 5.2 }),
//         is_valid: (a: Agent) => a.name === Name.ZiLong,
//         duration: 11,
//       },
//       {
//         fixed: () => ({ normal_attack: () => 1.33 }),
//         is_valid: (a: Agent) => a.className === ClassName.Gunner,
//         duration: 15,
//       },
//     ],
//     cooldown: 14,
//   },
// });

// export const Ari = new Agent({
//   name: Name.Ari,
//   organization: Organization.ZETH,
//   cup_size: Size.K,
//   className: ClassName.Artillery,
//   attack_speed: 2,
//   normal_attack: 1050,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 1050,
//   skill: {
//     // deals 18897.6 damage
//     // increases damage by (1 + any agent on the field, except Support) * 34% for 15 seconds // TODO: including enemy team?
//     effects: [
//       {
//         fixed: (a: Agent, t: Target, team?: Agent[]) => ({
//           damage: () => {
//             if (team) {
//               return team.filter(
//                 (agent) => agent.className !== ClassName.Support
//               ).length;
//             }
//             return 0;
//           },
//         }),
//         is_valid: (a: Agent) => a.name === Name.Ari,
//         duration: 15,
//       },
//       { damage: () => 18897.6 },
//     ],
//     cooldown: 14,
//   },
// });

// export const Chia = new Agent({
//   name: Name.Chia,
//   organization: Organization.MEOW,
//   cup_size: Size.H, // healthy?
//   className: ClassName.Gunner,
//   attack_speed: 1.1,
//   normal_attack: 2236,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 2160,
//   skill: {
//     // increases self damage by 750% and increases all Gunner agents in your team attack rate by 130% and damage by 170% for 10 seconds.
//     effects: [
//       {
//         multiplier: () => ({ damage: () => 7.5 }),
//         is_valid: (a: Agent) => a.name === Name.Chia,
//         duration: 10,
//       },
//       {
//         multiplier: () => ({
//           attack_speed: () => 1.3,
//           damage: () => 1.7,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Chia,
//         duration: 10,
//       },
//     ],
//     cooldown: 13,
//   },
// });

// export const Shiko = new Agent({
//   name: Name.Shiko,
//   organization: Organization.ZETH,
//   cup_size: Size.L,
//   className: ClassName.Striker,
//   attack_speed: 0.5,
//   normal_attack: 2434,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 2434,
//   skill: {
//     // increases self attack speed by 450% and damage by 230% for 11 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 4.5,
//           damage: () => 2.3,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Shiko,
//         duration: 11,
//       },
//     ],
//     cooldown: 10,
//   },
// });

// export const Kaja = new Agent({
//   name: Name.Kaja,
//   organization: Organization.WIO,
//   cup_size: Size.A,
//   className: ClassName.Support,
//   attack_speed: 1,
//   normal_attack: 1144,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1144,
//   skill: {
//     // deals 82354.3 damage
//     effects: [{ damage: () => 82354.3 }],
//     cooldown: 15,
//   },
// });

// export const Bia = new Agent({
//   name: Name.Bia,
//   organization: Organization.DOD,
//   cup_size: Size.K,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1160,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 1160,
//   skill: {
//     // increases self skill damage by 2400% for 6 seconds
//     effects: [
//       {
//         multiplier: () => ({ skill_damage: () => 24 }),
//         is_valid: (a: Agent) => a.name === Name.Bia,
//         duration: 6,
//       },
//     ],
//     cooldown: 10,
//   },
// });

// export const Eri = new Agent({
//   name: Name.Eri,
//   organization: Organization.ADB,
//   cup_size: Size.F,
//   className: ClassName.Gunner,
//   attack_speed: 1.5,
//   normal_attack: 1440,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 1440,
//   skill: {
//     // deals 92683.8 damage
//     effects: [{ damage: () => 92683.8 }],
//     cooldown: 14,
//   },
// });

// export const Kiyomi = new Agent({
//   name: Name.Kiyomi,
//   organization: Organization.WIO,
//   cup_size: Size.G,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1226,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 1226,
//   skill: {
//     // increase attack speed by 580% and critical rate by 210% for 12 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 5.8,
//           critical_rate: () => 2.1,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Kiyomi,
//         duration: 12,
//       },
//     ],
//     cooldown: 20,
//   },
// });

// export const Musuna = new Agent({
//   name: Name.Musuna,
//   organization: Organization.WIO,
//   cup_size: Size.A,
//   className: ClassName.Gunner,
//   attack_speed: 1,
//   normal_attack: 2191,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 2160,
//   skill: {
//     // increases attack speed by 635% and damage by 260% for 3 seconds
//     // deals 4537 damage each second for 4 seconds // TODO: implement damage over time
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 6.35,
//           damage: () => 2.6,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Musuna,
//         duration: 3,
//       },
//       { damage: () => 4537 * 4 },
//     ],
//     cooldown: 15,
//   },
// });

// export const Windy = new Agent({
//   name: Name.Windy,
//   organization: Organization.GAA,
//   cup_size: Size.K,
//   className: ClassName.Artillery,
//   attack_speed: 1,
//   normal_attack: 2085,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 2085,
//   skill: {
//     // increases attack speed by 200% and increases damage by 380% for 12 seconds
//     // attacks deal also skill damage // TODO: implement attack_mode? attacks deal: (normal_attack | skill_damage | both) damage
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 2,
//           damage: () => 3.8,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Windy,
//         duration: 12,
//       },
//     ],
//     cooldown: 14,
//   },
// });

// export const Kotaru = new Agent({
//   name: Name.Kotaru,
//   organization: Organization.WIO,
//   cup_size: Size.I,
//   className: ClassName.Gunner,
//   attack_speed: 1,
//   normal_attack: 2160,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 2160,
//   skill: {
//     // increases normal attack damage by 480% and critical rate by 1160% for 13 seconds
//     effects: [
//       {
//         multiplier: () => ({
//           normal_attack: () => 4.8,
//           critical_rate: () => 11.6,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Kotaru,
//         duration: 13,
//       },
//     ],
//     cooldown: 23,
//   },
// });

// export const Karry = new Agent({
//   name: Name.Karry,
//   organization: Organization.NONE,
//   cup_size: Size.C,
//   className: ClassName.Support,
//   attack_speed: 1,
//   normal_attack: 1144,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1144,
//   skill: {
//     // increases skill damage for agents with <= D cup breast size by 120% for 4 seconds
//     // deals 34313.6 damage
//     effects: [
//       {
//         multiplier: () => ({ skill_damage: () => 1.2 }),
//         is_valid: (a: Agent) => a.cup_size <= Size.D,
//         duration: 4,
//       },
//       { damage: () => 34313.6 },
//     ],
//     cooldown: 10,
//   },
// });

// export const Sato = new Agent({
//   name: Name.Sato,
//   organization: Organization.ZETH,
//   cup_size: Size.G,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1226,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 1226,
//   skill: {
//     // ZETH member give each other 33% damage for 6 seconds // TODO: implement this
//     // deals 169894.8 damage
//     effects: [
//       {
//         multiplier: () => ({ damage: () => 1.33 }),
//         is_valid: (a: Agent) => a.cup_size <= Size.D,
//         duration: 6,
//       },
//       { damage: () => 169894.8 },
//     ],
//     cooldown: 12,
//   },
// });

// export const Victoria = new Agent({
//   name: Name.Victoria,
//   organization: Organization.ZETH,
//   cup_size: Size.H,
//   className: ClassName.Striker,
//   attack_speed: 2,
//   normal_attack: 613,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 613,
//   skill: {
//     // deals 98063.4 damage over 16 seconds
//     // increase striker agents damage by 15 + (5% for every support agent) for 7 seconds
//     effects: [
//       {
//         multiplier: (a: Agent, t: Target, team?: Agent[]) => ({
//           damage: () => {
//             if (team) {
//               return (
//                 1.15 +
//                 0.05 *
//                   team.filter((a) => a.className === ClassName.Support).length
//               );
//             }
//             return 1;
//           },
//         }),
//         is_valid: (a: Agent) => a.className === ClassName.Striker,
//         duration: 7,
//       },
//       { damage: () => 98063.4 },
//     ],
//     cooldown: 10,
//   },
// });

// export const Laura = new Agent({
//   name: Name.Laura,
//   organization: Organization.ADB,
//   cup_size: Size.C,
//   className: ClassName.Striker,
//   attack_speed: 2,
//   normal_attack: 613,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 680,
//   skill: {
//     // increases skill damage by 1200% for 11 seconds
//     effects: [
//       {
//         multiplier: () => ({ skill_damage: () => 12 }),
//         is_valid: (a: Agent) => a.name === Name.Laura,
//         duration: 11,
//       },
//     ],
//     cooldown: 10,
//   },
// });

// export const Kura = new Agent({
//   name: Name.Kura,
//   organization: Organization.ZETH,
//   cup_size: Size.G,
//   className: ClassName.Artillery,
//   attack_speed: 1,
//   normal_attack: 2099,
//   critical_rate: 0.94,
//   critical_damage: 2.028,
//   skill_damage: 2099,
//   skill: {
//     // deals 25190 damage
//     effects: [{ damage: () => 25190 }],
//     cooldown: 3,
//   },
// });

// export const Ne = new Agent({
//   name: Name.Ne,
//   organization: Organization.GAA,
//   cup_size: Size.E,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1226,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 1226,
//   skill: {
//     // increases attack speed by 200% and damage by 900% for 10 seconds
//     // deals skill damage // TODO: implement this: attack_mode
//     effects: [
//       {
//         multiplier: () => ({ attack_speed: () => 2, damage: () => 9 }),
//         is_valid: (a: Agent) => a.name === Name.Ne,
//         duration: 10,
//       },
//     ],
//     cooldown: 20,
//   },
// });

// export const Uta = new Agent({
//   name: Name.Uta,
//   organization: Organization.WIO,
//   cup_size: Size.E,
//   className: ClassName.Striker,
//   attack_speed: 0.5,
//   normal_attack: 2452,
//   critical_rate: 0.84,
//   critical_damage: 2.018,
//   skill_damage: 2452,
//   skill: {
//     // increases attack speed by 500% and critical damage by 1000% for 10 seconds
//     // deals skill damage // TODO: implement this: attack_mode
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 5,
//           critical_damage: () => 10,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Uta,
//         duration: 10,
//       },
//     ],
//     cooldown: 10,
//   },
// });

// export const Midori = new Agent({
//   name: Name.Midori,
//   organization: Organization.WIO,
//   cup_size: Size.J,
//   className: ClassName.Gunner,
//   attack_speed: 1,
//   normal_attack: 2145,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 2145,
//   skill: {
//     // increases self attack speed by 200% and damage by 500% for 7 seconds
//     // deals skill damage // TODO: implement this: attack_mode
//     effects: [
//       {
//         multiplier: () => ({
//           attack_speed: () => 2,
//           damage: () => 5,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Midori,
//         duration: 7,
//       },
//     ],
//     cooldown: 15,
//   },
// });

// export const Sera = new Agent({
//   name: Name.Sera,
//   organization: Organization.NONE,
//   cup_size: Size.D,
//   className: ClassName.Support,
//   attack_speed: 1,
//   normal_attack: 1144,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 1144,
//   skill: {
//     // adds on all agents (her skill damage * 25%)% damage on each hit for 14 seconds // TODO: what the fuck does that mean
//     effects: [
//       {
//         multiplier: (a: Agent) => ({ damage: () => a.skill_damage * 0.25 }),
//         is_valid: (a: Agent) => a.name !== Name.Sera,
//         duration: 7,
//       },
//     ],
//     cooldown: 20,
//   },
// });

// export const Livia = new Agent({
//   name: Name.Livia,
//   organization: Organization.WIO,
//   cup_size: Size.J,
//   className: ClassName.Gunner,
//   attack_speed: 1,
//   normal_attack: 752,
//   critical_rate: 0.69,
//   critical_damage: 2.018,
//   skill_damage: 752,
//   skill: {
//     // deals 30075.3 damage
//     // 75% chance to reset the skill cooldown to 2 seconds // TODO: implement reset skill cooldown
//     effects: [{ damage: () => 30075.3 }],
//     cooldown: 14,
//   },
// });

// export const ReiJK = new Agent({
//   name: Name.ReiJK,
//   organization: Organization.GSR,
//   cup_size: Size.I,
//   className: ClassName.Artillery,
//   attack_speed: 2,
//   normal_attack: 1057,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 1057,
//   skill: {
//     // increases normal attack damage by 660% for 12 seconds
//     // increases critical rate by 40% for artillery agents for 5 seconds
//     effects: [
//       {
//         multiplier: (a: Agent) => ({ normal_attack: () => 6.6 }),
//         is_valid: (a: Agent) => a.name === Name.ReiJK,
//         duration: 12,
//       },
//       {
//         multiplier: (a: Agent) => ({ critical_rate: () => 1.4 }),
//         is_valid: (a: Agent) => a.className === ClassName.Artillery,
//         duration: 5,
//       },
//     ],
//     cooldown: 15,
//   },
// });

// export const Rei = new Agent({
//   name: Name.Rei,
//   organization: Organization.GSR,
//   cup_size: Size.I,
//   className: ClassName.Artillery,
//   attack_speed: 2,
//   normal_attack: 371,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 371,
//   skill: {
//     // deals 8892.7 damage
//     effects: [{ damage: () => 8892.7 }],
//     cooldown: 10,
//   },
// });

// export const Amikam = new Agent({
//   name: Name.Amikam,
//   organization: Organization.GAA,
//   cup_size: Size.E,
//   className: ClassName.Artillery,
//   attack_speed: 1.7,
//   normal_attack: 2099,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 2099,
//   skill: {
//     // "increases damage by 262%, attack speed by 200% and critical rate by 37% for 12 seconds. ",
//     effects: [
//       {
//         multiplier: (a: Agent) => ({
//           damage: () => 2.62,
//           attack_speed: () => 2,
//           critical_rate: () => 1.37,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Amikam,
//         duration: 12,
//       },
//     ],
//     cooldown: 14,
//   },
// });

// export const Iizuna = new Agent({
//   name: Name.Iizuna,
//   organization: Organization.GSR,
//   cup_size: Size.F,
//   className: ClassName.Artillery,
//   attack_speed: 1.5,
//   normal_attack: 1440,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 1440,
//   skill: {
//     // TODO: missing skill info
//     // increases damage by 800% for 10 seconds
//     // increases critical rate and critical damage by 30% for artillery agents in the team
//     effects: [
//       {
//         multiplier: (a: Agent) => ({ damage: () => 8 }),
//         is_valid: (a: Agent) => a.name === Name.Iizuna,
//         duration: 10,
//       },
//       {
//         fixed: (a: Agent) => ({
//           critical_damage: () => 0.3,
//           critical_rate: () => 0.3,
//         }),
//         is_valid: (a: Agent) => a.className === ClassName.Artillery,
//         duration: 10,
//       },
//     ],
//     cooldown: 15,
//   },
// });

// export const Tsurumi = new Agent({
//   name: Name.Tsurumi,
//   organization: Organization.RSA,
//   cup_size: Size.A,
//   className: ClassName.Gunner,
//   attack_speed: 0.5,
//   normal_attack: 4336,
//   critical_rate: 0.74,
//   critical_damage: 2.018,
//   skill_damage: 4336,
//   skill: {
//     // increases attack speed by 400% and damage by 121% for 10 seconds
//     effects: [
//       {
//         multiplier: (a: Agent) => ({
//           attack_speed: () => 4,
//           damage: () => 1.21,
//         }),
//         is_valid: (a: Agent) => a.name === Name.Tsurumi,
//         duration: 10,
//       },
//     ],
//     cooldown: 13,
//   },
// });

// export const Mora = new Agent({
//   name: Name.Mora,
//   organization: Organization.DAB,
//   cup_size: Size.F,
//   className: ClassName.Support,
//   attack_speed: 1,
//   normal_attack: 3592,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 3264,
//   skill: {
//     // increases damage by 4200% for 7 seconds
//     // exposes enemy weak spot for 7 seconds // TODO: implement this
//     effects: [
//       {
//         multiplier: (a: Agent) => ({ damage: () => 42 }),
//         is_valid: (a: Agent) => a.name === Name.Mora,
//         duration: 7,
//       },
//     ],
//     cooldown: 20,
//   },
// });

// export const Masamune = new Agent({
//   name: Name.Masamune,
//   organization: Organization.RSA,
//   cup_size: Size.H,
//   className: ClassName.Striker,
//   attack_speed: 1,
//   normal_attack: 1395,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 1226,
//   skill: {
//     // increases damage by 1800% for 10 seconds
//     effects: [
//       {
//         multiplier: (a: Agent) => ({ damage: () => 18 }),
//         is_valid: (a: Agent) => a.name === Name.Masamune,
//         duration: 10,
//       },
//     ],
//     cooldown: 20,
//   },
// });

// export const Chloe = new Agent({
//   name: Name.Chloe,
//   organization: Organization.RSA,
//   cup_size: Size.G,
//   className: ClassName.Artillery,
//   attack_speed: 1,
//   normal_attack: 2099,
//   critical_rate: 0.84,
//   critical_damage: 2.028,
//   skill_damage: 2099,
//   skill: {
//     // increases damage by 200% for 24 seconds
//     // increases artillery agents damage by 110% for 24 seconds
//     effects: [
//       {
//         multiplier: (a: Agent) => ({ damage: () => 2 }),
//         is_valid: (a: Agent) => a.name === Name.Masamune,
//         duration: 24,
//       },
//       {
//         multiplier: (a: Agent) => ({ damage: () => 1.1 }),
//         is_valid: (a: Agent) => a.className === ClassName.Artillery,
//         duration: 24,
//       },
//     ],
//     cooldown: 10,
//   },
// });
