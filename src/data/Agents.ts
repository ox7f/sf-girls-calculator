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
    effects: [
      {
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
  critical_damage: 2.028,
  skill_damage: 569,
  skill: {
    // summons an iceberg dealing 26296.9 damage and slows down enemies to 50% for 5 seconds. cooldown: 17
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 26296.9;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 26296.9;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 10010.1;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 2 * 27890.7;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 13990.6;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 65164.8;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 14229.9;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 26562.6;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 57204.3;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 3 * 24213.7;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 86932;

          if (agent) {
            // TODO: calculate skill damage (how does skill damage multiply the damage)
            // damage = (damage / agent.base_skill_damage) * agent.skill_damage
          }

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 50668.9;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
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
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 69856;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
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
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 16404.3;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        duration: 8,
        apply: () => {},
        remove: () => {},
      },
    ],
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
    effects: [
      {
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
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 55936.6;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 85120.9;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
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
    effects: [
      {
        duration: 9,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 23285.3;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.received_damage_multiplier *= 1.35;
          target.takeDamage(damage);
        },
        remove: (params: EffectParamType) => {
          const { target } = params;
          target.received_damage_multiplier /= 1.35;
        },
      },
    ],
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
    effects: [
      {
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
    ],
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
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const not_valid =
            team.filter((a) => a.className === ClassName.Support).length !== 1;

          if (not_valid) {
            return;
          }

          team.forEach((a) => {
            a.skill_damage *= 4.33;
            a.normal_attack *= 4.33;
          });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          const not_valid =
            team.filter((a) => a.className === ClassName.Support).length !== 1;

          if (not_valid) {
            return;
          }

          team.forEach((a) => {
            a.skill_damage /= 4.33;
            a.normal_attack /= 4.33;
          });
        },
      },
    ],
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
    effects: [
      {
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
    ],
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
    effects: [
      {
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
    ],
    cooldown: 19,
  },
});

export const Cadence = new Agent({
  name: Name.Cadence,
  organization: Organization.ADB,
  cup_size: Size.D,
  className: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 1084,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 983,
  skill: {
    // calls in laser barrage and deals 68821.1 damage to all monsters. cooldown: 10
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 68821.1;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 10,
  },
});

export const Uni = new Agent({
  name: Name.Uni,
  organization: Organization.DOD,
  cup_size: Size.K,
  className: ClassName.Support,
  attack_speed: 4,
  normal_attack: 797,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 754,
  skill: {
    // casts an arrow barrage to deal 85981.3 damage and stuns for 6 seconds. cooldown: 20
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 85981.3;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 20,
  },
});

export const Sizuko = new Agent({
  name: Name.Sizuko,
  organization: Organization.GAA,
  cup_size: Size.K,
  className: ClassName.Striker,
  attack_speed: 2,
  normal_attack: 616,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 584,
  skill: {
    // throws a soul-scythe, after it attach on the enemy will split into 4 souls, each dealing 35211.1 damage and inducing fear to the enemy for 4 seconds. cooldown: 18
    effects: [
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 35211.1;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 18,
  },
});

export const Chihiro = new Agent({
  name: Name.Chihiro,
  organization: Organization.ADB,
  cup_size: Size.C,
  className: ClassName.Artillery,
  attack_speed: 0.6,
  normal_attack: 4297,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 3898,
  skill: {
    // bullets will now penetrate targets. increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8
    effects: [
      {
        duration: 5,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 7.15;
          agent.skill_damage *= 1.14;
          agent.normal_attack *= 1.14;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 7.15;
          agent.skill_damage /= 1.14;
          agent.normal_attack /= 1.14;
        },
      },
    ],
    cooldown: 8,
  },
});

export const Mei = new Agent({
  name: Name.Mei,
  organization: Organization.ADB,
  cup_size: Size.G,
  className: ClassName.Striker,
  attack_speed: 1.5,
  normal_attack: 858,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 815,
  skill: {
    // throws out a chakram, ricocheting onto 4 enemies, dealing 24462.8 damage to each enemy. cooldown: 12
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 24462.8;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 12,
  },
});

export const Riho = new Agent({
  name: Name.Riho,
  organization: Organization.ADB,
  cup_size: Size.C,
  className: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 1235,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 1018,
  skill: {
    // summons a group of giant redhounds at the target location, dealing 76324.4 damage over 2 seconds. cooldown: 9
    effects: [
      {
        duration: 2,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 76324.4;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 9,
  },
});

export const Mitsu = new Agent({
  name: Name.Mitsu,
  organization: Organization.ADB,
  cup_size: Size.D,
  className: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 2149,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 1949,
  skill: {
    // shoots mega laser beams dealing 77962.8 damage. cooldown: 14
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 77962.8;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 14,
  },
});

export const Akina = new Agent({
  name: Name.Akina,
  organization: Organization.DOD,
  cup_size: Size.H,
  className: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1287,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1223,
  skill: {
    // punches out a fire-fist dealing 80727.2 damage to an area and ignites the enemy for 5 seconds, dealing 1902.6 damage every seconds. cooldown 9
    effects: [
      {
        duration: 5,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 80727.2 + 5 * 1902.6;

          // TODO: implement damage over time
          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 9,
  },
});

export const Akari = new Agent({
  name: Name.Akari,
  organization: Organization.ADB,
  cup_size: Size.C,
  className: ClassName.Support,
  attack_speed: 1,
  normal_attack: 2697,
  critical_rate: 0.74,
  critical_damage: 2.018,
  skill_damage: 2697,
  skill: {
    // summons a damage circle under her feet dealing total 53934.9 damage in 1 second, then will turn into a healing circle, heal friendly units for total (default skill damage * 7000%) in 3 seconds. cooldown: 7
    effects: [
      {
        duration: 1,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 53934.9;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 7,
  },
});

export const Sayaka = new Agent({
  name: Name.Sayaka,
  organization: Organization.ADB,
  cup_size: Size.H,
  className: ClassName.Striker,
  attack_speed: 1.8,
  normal_attack: 721,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 686,
  skill: {
    // summons 4 lightning birds, each dealing 26913.7 damage. cooldown: 11
    effects: [
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 4 * 26813.7;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 11,
  },
});

export const Momoko = new Agent({
  name: Name.Momoko,
  organization: Organization.DOD,
  cup_size: Size.A,
  className: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.84,
  critical_damage: 2.018,
  skill_damage: 2160,
  skill: {
    // increases self attack speed to 530% for 4 seconds. bullet adds a penetration and charming effect, which will scare enemy away for 2 seconds. cooldown: 15
    effects: [
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 5.3;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 5.3;
        },
      },
    ],
    cooldown: 15,
  },
});

export const Meteli = new Agent({
  name: Name.Meteli,
  organization: Organization.WIO,
  cup_size: Size.E,
  className: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.84,
  critical_damage: 2.018,
  skill_damage: 1226,
  skill: {
    // summons a choo-choo train to knock back and deal 78450.7 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const num = Math.random();
          let damage = 78450.7;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          if (num < 0.7) {
            agent.skill.cooldown = 2;
          } else {
            agent.skill.cooldown = 10;
          }

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 10,
  },
});

export const Hoshiko = new Agent({
  name: Name.Hoshiko,
  organization: Organization.GSR,
  cup_size: Size.M,
  className: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1613,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1613,
  skill: {
    // cast a stackable buff on all striker agents, each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
    effects: [
      {
        duration: 24,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team.forEach((a) => {
            a.attack_speed *= 1.2;
            a.normal_attack *= 1.4;
            a.skill_damage *= 1.4;
          });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team.forEach((a) => {
            a.attack_speed /= 1.2;
            a.normal_attack /= 1.4;
            a.skill_damage /= 1.4;
          });
        },
      },
    ],
    cooldown: 5,
  },
});

export const Feme = new Agent({
  name: Name.Feme,
  organization: Organization.GAA,
  cup_size: Size.G,
  className: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.028,
  skill_damage: 2099,
  skill: {
    // shoot 2 energy bolts from the ancient sphinx cannon, deals normal attack damage with aoe. increases self damage to 460% and critical rate to 1160% for 12 seconds. cooldown: 15
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          agent.normal_attack *= 4.6;
          agent.skill_damage *= 4.6;
          agent.critical_rate *= 11.6;
          target.takeDamage(agent.normal_attack * 2);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 4.6;
          agent.skill_damage /= 4.6;
          agent.critical_rate /= 11.6;
        },
      },
    ],
    cooldown: 15,
  },
});

export const NeveX = new Agent({
  name: Name.NeveX,
  organization: Organization.GSR,
  cup_size: Size.L,
  className: ClassName.Support,
  attack_speed: 0.5,
  normal_attack: 6467,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 6467,
  skill: {
    // deal 10993.1 damage to all enemies, and slow down to 40% for 3 seconds. all artillery agents critical damage gains an additional 190% for 14 seconds. cooldown: 20
    effects: [
      {
        duration: 14,
        apply: (params: EffectParamType) => {
          const { team, target } = params;
          team
            .filter((a) => a.className === ClassName.Artillery)
            .forEach((a) => (a.critical_damage += 1.9)); // gain => multiply or fixed?

          let damage = 10993.1;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.className === ClassName.Artillery)
            .forEach((a) => (a.critical_damage -= 1.9));
        },
      },
    ],
    cooldown: 20,
  },
});

export const Eiko = new Agent({
  name: Name.Eiko,
  organization: Organization.GSR,
  cup_size: Size.F,
  className: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.94,
  critical_damage: 2.028,
  skill_damage: 2160,
  skill: {
    // summon an extraterrestrial attack, dealing 58548.4 damage over 1.5 seconds. cooldown: 9
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 58548.4;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 9,
  },
});

export const Goi = new Agent({
  name: Name.Goi,
  organization: Organization.GAA,
  cup_size: Size.G,
  className: ClassName.Artillery,
  attack_speed: 1.5,
  normal_attack: 1394,
  critical_rate: 0.94,
  critical_damage: 2.028,
  skill_damage: 1394,
  skill: {
    // Launch 3 grenades in a straight line each dealing 25098.1 damage and mini stuns for 0.2 seconds. cooldown: 10
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = 3 * 25098.1;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: () => {},
      },
    ],
    cooldown: 10,
  },
});

export const RihoX = new Agent({
  name: Name.RihoX,
  organization: Organization.ADB,
  cup_size: Size.C,
  className: ClassName.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.84,
  critical_damage: 2.018,
  skill_damage: 1057,
  skill: {
    // summons dozens of the giant redhounds, dealing 9515.2 damage to all enemies, and increases self attack damage to 189% and attack speed to 276% for 12 seconds. cooldown: 14
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;

          agent.attack_speed *= 2.76;
          agent.normal_attack *= 1.89;
          agent.skill_damage *= 1.89;

          let damage = 9515.2;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;

          agent.attack_speed /= 2.76;
          agent.normal_attack /= 1.89;
          agent.skill_damage /= 1.89;
        },
      },
    ],
    cooldown: 14,
  },
});

export const Setsuna = new Agent({
  name: Name.Setsuna,
  organization: Organization.GSR,
  cup_size: Size.D,
  className: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.84,
  critical_damage: 2.018,
  skill_damage: 1226,
  skill: {
    // listen to the whisper in 7 seconds. self buff 1000% damage. consistently swing out 5 blade beams and ignite enemies for 3309.6 burn damage every seconds. cooldown: 9
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;

          agent.normal_attack *= 10;
          agent.skill_damage *= 10;

          let damage = 5 * 3309.6 * 7;

          // TODO: calculate skill damage (how does skill damage multiply the damage)
          // damage = (damage / agent.base_skill_damage) * agent.skill_damage

          target.takeDamage(damage);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 10;
          agent.skill_damage /= 10;
        },
      },
    ],
    cooldown: 9,
  },
});

// TODO:
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
//     cooldown: 10,
//   },
// });
