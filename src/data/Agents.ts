import { ClassName, Name, Organization, Size } from "../enums";
import { Agent } from "../model/classes";
import { EffectParamType } from "../model/types";

const calculateSkillDamage = (
  descriptionDamage: number,
  baseSkillDamage: number,
  agent: Agent
): number => {
  const multiplier = descriptionDamage / baseSkillDamage;
  let damage = multiplier * agent.skill_damage;

  if (Math.random() < agent.critical_rate) {
    damage *= agent.critical_damage;
  }

  return damage;
};

export const Yuki = new Agent({
  name: Name.Yuki,
  organization: Organization.WIO,
  cup_size: Size.C,
  class: ClassName.Striker,
  attack_speed: 0.5,
  normal_attack: 975,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 927,
  skill: {
    // increases the damage to 1500% and attack speed to 220% for 4 seconds. cooldown: 8
    name: "Precision Assault",
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
    is_stackable: false,
    cooldown: 8,
  },
});

export const Neve = new Agent({
  name: Name.Neve,
  organization: Organization.GSR,
  cup_size: Size.D,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 601,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 569,
  skill: {
    // summons an iceberg dealing 26296.9 damage and slows down enemies to 50% for 5 seconds. cooldown: 17
    name: "Absolute Zero",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(26296.9, 569, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 17,
  },
});

export const Ayu = new Agent({
  name: Name.Ayu,
  organization: Organization.WIO,
  cup_size: Size.E,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 461,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 379,
  skill: {
    // shoots a piercing laser beam dealing 45535.8 damage. cooldown: 9
    name: "Raining Bullets",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(45535.8, 379, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Mika = new Agent({
  name: Name.Mika,
  organization: Organization.GAA,
  cup_size: Size.G,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 487,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 463,
  skill: {
    // smashes the ground and creates 4 sword-quakes each dealing 10010.1 damage. cooldown: 11
    name: "Ocean's Torrent",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(4 * 10010.1, 463, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
});

export const Sora = new Agent({
  name: Name.Sora,
  organization: Organization.GSR,
  cup_size: Size.E,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 461,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 379,
  skill: {
    // shoots two electric bullets, each dealing 27890.7 damage. cooldown: 8
    name: "Death From Above",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(2 * 27890.7, 379, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
});

export const Ember = new Agent({
  name: Name.Ember,
  organization: Organization.GAA,
  cup_size: Size.E,
  class: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 399,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 362,
  skill: {
    // shoots 4 enhanced bullets, each dealing 13990.6 damage cooldown: 8
    name: "Dance of Death",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(4 * 13990.6, 362, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
});

export const Chiharu = new Agent({
  name: Name.Chiharu,
  organization: Organization.GAA,
  cup_size: Size.J,
  class: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 1248,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1131,
  skill: {
    // shoots a powerful bullet at the monster with the highest health, dealing 65164.8 damage. cooldown: 9
    name: "Dead Man's Curse",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(65164.8, 1131, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Irina = new Agent({
  name: Name.Irina,
  organization: Organization.DOD,
  cup_size: Size.A,
  class: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 627,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 569,
  skill: {
    // fires 4 missiles at target, each dealing 14229.9 damage. cooldown: 6
    name: "Rocket Ricochet",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(4 * 14229.9, 569, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 6,
  },
});

export const Yuuha = new Agent({
  name: Name.Yuuha,
  organization: Organization.WIO,
  cup_size: Size.C,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 733,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 604,
  skill: {
    // deals 26562.6 damage and knockbacks all monsters by 1.6 unit distances. cooldown: 16
    name: "Dance of the Lotus",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(26562.6, 604, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 16,
  },
});

export const Uzu = new Agent({
  name: Name.Uzu,
  organization: Organization.ADB,
  cup_size: Size.J,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 1865,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1766,
  skill: {
    // releases her tentacles and deals 57204.3 damage to the surrounding units, knockbacks enemy for 1 unit distance and applies a 1 second mini-stun. cooldown: 16
    name: "Crushing Embrace",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(57204.3, 1766, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 16,
  },
});

export const Denka = new Agent({
  name: Name.Denka,
  organization: Organization.WIO,
  cup_size: Size.E,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 760,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 723,
  skill: {
    // shoots 3 electric drills, each dealing 24213.7 damage. cooldown: 9
    name: "Devastating Pincer Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(3 * 24213.7, 723, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Reika = new Agent({
  name: Name.Reika,
  organization: Organization.NDS,
  cup_size: Size.I,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 733,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 604,
  skill: {
    // launches a rocket towards the target, dealing 86932 damage. cooldown: 9
    name: "Might of the Alliance",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(86932, 604, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Noa = new Agent({
  name: Name.Noa,
  organization: Organization.NDS,
  cup_size: Size.D,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 929,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 880,
  skill: {
    // releases a drone dealing 50668.9 damage to the target area and slow down to 60% for 6 seconds. cooldown: 15
    name: "Enhanced Plasma Cannon",
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(50668.9, 880, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const Neugena = new Agent({
  name: Name.Neugena,
  organization: Organization.GSR,
  cup_size: Size.D,
  class: ClassName.Gunner,
  attack_speed: 4.4,
  normal_attack: 356,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 293,
  skill: {
    // releases a blasting arrow, dealing (default skill damage * 0.00020)% of enemies current hp in a small area (minimum damage = skill damage). cooldown: 20
    name: "Hunter's Sense",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = agent.skill_damage * target.current_health * 0.0002;

          if (damage < agent.skill_damage) {
            damage = agent.skill_damage;
          }

          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});

export const Larisa = new Agent({
  name: Name.Larisa,
  organization: Organization.ADB,
  cup_size: Size.G,
  class: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 1711,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1552,
  skill: {
    // fires a high explosive missile at target locations dealing 69856 damage. cooldown: 11
    name: "Guardian of the Motherland",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(69856, 1552, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
});

export const Rui = new Agent({
  name: Name.Rui,
  organization: Organization.GSR,
  cup_size: Size.D,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1014,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 964,
  skill: {
    // enters demonic mode which increases her attack damage to 16382.6, attack range and area for 10 seconds. cooldown: 17
    name: "Devil's Contract",
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
    is_stackable: false,
    cooldown: 17,
  },
});

export const Kotora = new Agent({
  name: Name.Kotora,
  organization: Organization.GSR,
  cup_size: Size.J,
  class: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 832,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 754,
  skill: {
    // launches an artillery shell towards the target location, which splits into 4 shells, each dealing 16404.3 damage. cooldown: 11
    name: "Roar of the Beast",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(4 * 16404.3, 754, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
});

export const Vanessa = new Agent({
  name: Name.Vanessa,
  organization: Organization.DOD,
  cup_size: Size.K,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1267,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1200,
  skill: {
    // creates an electric cage, stunning enemies for 8 seconds. cooldown: 34
    name: "Banishment of the Beast",
    effects: [
      {
        duration: 8,
        apply: () => {},
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 34,
  },
});

export const Aoi = new Agent({
  name: Name.Aoi,
  organization: Organization.WIO,
  cup_size: Size.B,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1275,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 1207,
  skill: {
    // randomly picks 6 agent(s), add 25% critical rate for 6 seconds. cooldown: 9
    name: "Gamma Blaster",
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
    is_stackable: false,
    cooldown: 9,
  },
});

export const Sara = new Agent({
  name: Name.Sara,
  organization: Organization.GSR,
  cup_size: Size.C,
  class: ClassName.Support,
  attack_speed: 3.1,
  normal_attack: 856,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 811,
  skill: {
    // shoots a gigantic snake dealing 55936.6 damage. cooldown: 11
    name: "Paralyzing Stare",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(55936.6, 811, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
});

export const Mai = new Agent({
  name: Name.Mai,
  organization: Organization.DOD,
  cup_size: Size.B,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 984,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 811,
  skill: {
    // shoots bullets rapidly. enemies that were hit wil take 85120.9 damage once. cooldown: 13
    name: "Soldier's Will",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(85120.9, 811, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 13,
  },
});

export const Tsukiko = new Agent({
  name: Name.Tsukiko,
  organization: Organization.ADB,
  cup_size: Size.F,
  class: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 1711,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1552,
  skill: {
    // shoots out a devastating sound wave dealing 23285.3 damage and increases the damage enemies receive by 35% for 9 seconds. cooldown: 38
    name: "Bulletstorm",
    effects: [
      {
        duration: 9,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(23285.3, 1552, agent);
          target.damage_taken_multiplier *= 1.35;
          target.takeDamage(damage, agent);
        },
        remove: (params: EffectParamType) => {
          const { target } = params;
          target.damage_taken_multiplier /= 1.35;
        },
      },
    ],
    is_stackable: false,
    cooldown: 38,
  },
});

export const Yukako = new Agent({
  name: Name.Yukako,
  organization: Organization.NDS,
  cup_size: Size.A,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 984,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 811,
  skill: {
    // increases the damage of all gunner agents to 150% for 12 seconds. cooldown: 25
    name: "Spirit's Lethal Kiss",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.normal_attack *= 1.5;
              a.skill_damage *= 1.5;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.normal_attack /= 1.5;
              a.skill_damage /= 1.5;
            });
        },
      },
    ],
    is_stackable: false,
    cooldown: 25,
  },
});

export const Coco = new Agent({
  name: Name.Coco,
  organization: Organization.DOD,
  cup_size: Size.B,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 2531,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 2398,
  skill: {
    // she will encourage enemies run 200% faster for 1.5 seconds. and if coco is the only support in the team, she will increases 433% damage of all friendly agents in the team for 7 seconds. cooldown: 6
    name: "Thrashing Paws",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const not_valid =
            team.filter((a) => a.class === ClassName.Support).length !== 1;

          if (not_valid) {
            return;
          }

          team.forEach((a) => {
            a.normal_attack *= 4.33;
            a.skill_damage *= 4.33;
          });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          const not_valid =
            team.filter((a) => a.class === ClassName.Support).length !== 1;

          if (not_valid) {
            return;
          }

          team.forEach((a) => {
            a.normal_attack /= 4.33;
            a.skill_damage /= 4.33;
          });
        },
      },
    ],
    is_stackable: false,
    cooldown: 6,
  },
});

export const Pan = new Agent({
  name: Name.Pan,
  organization: Organization.WIO,
  cup_size: Size.G,
  class: ClassName.Gunner,
  attack_speed: 4.4,
  normal_attack: 503,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 414,
  skill: {
    // cast a non-is_stackable buff on all friendly gunner agents. increases critical rate to 20% and critical damage to 120% for 12 seconds. cooldown: 25
    name: "Triple-Tap",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.critical_rate += 0.2;
              a.critical_damage += 1.2;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.critical_rate -= 0.2;
              a.critical_damage -= 1.2;
            });
        },
      },
    ],
    is_stackable: false,
    cooldown: 25,
  },
});

export const Hitomi = new Agent({
  name: Name.Hitomi,
  organization: Organization.GAA,
  cup_size: Size.D,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1603,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 1518,
  skill: {
    // increases the attack speed of all agents to 220% for 7 seconds. cooldown: 19
    name: "Cycle of Eternal Pain",
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
    is_stackable: false,
    cooldown: 19,
  },
});

export const Cadence = new Agent({
  name: Name.Cadence,
  organization: Organization.ADB,
  cup_size: Size.D,
  class: ClassName.Artillery,
  attack_speed: 2.2,
  normal_attack: 1084,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 983,
  skill: {
    // calls in laser barrage and deals 68821.1 damage to all monsters. cooldown: 10
    name: "Armament Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(68821.1, 983, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Uni = new Agent({
  name: Name.Uni,
  organization: Organization.DOD,
  cup_size: Size.K,
  class: ClassName.Support,
  attack_speed: 4,
  normal_attack: 797,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 754,
  skill: {
    // casts an arrow barrage to deal 85981.3 damage and stuns for 6 seconds. cooldown: 20
    name: "Archer's Judgement",
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = calculateSkillDamage(85981.3, 754, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});

export const Sizuko = new Agent({
  name: Name.Sizuko,
  organization: Organization.GAA,
  cup_size: Size.K,
  class: ClassName.Striker,
  attack_speed: 2,
  normal_attack: 619,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 587,
  skill: {
    // throws a soul-scythe, after it attach on the enemy will split into 4 souls, each dealing 35211.1 damage and inducing fear to the enemy for 4 seconds. cooldown: 18
    name: "Mortician's Touch",
    effects: [
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(4 * 35211.1, 584, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 18,
  },
});

export const Chihiro = new Agent({
  name: Name.Chihiro,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Artillery,
  attack_speed: 0.6,
  normal_attack: 4297,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 3898,
  skill: {
    // bullets will now penetrate targets. increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8
    name: "Shark Bite",
    effects: [
      {
        duration: 5,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 7.15;
          agent.normal_attack *= 1.14;
          agent.skill_damage *= 1.14;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 7.15;
          agent.normal_attack /= 1.14;
          agent.skill_damage /= 1.14;
        },
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
});

export const Mei = new Agent({
  name: Name.Mei,
  organization: Organization.ADB,
  cup_size: Size.G,
  class: ClassName.Striker,
  attack_speed: 1.5,
  normal_attack: 858,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 815,
  skill: {
    // throws out a chakram, ricocheting onto 4 enemies, dealing 24462.8 damage to each enemy. cooldown: 12
    name: "Ringlets of Death",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(4 * 24462.8, 815, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 12,
  },
});

export const Riho = new Agent({
  name: Name.Riho,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 1235,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 1018,
  skill: {
    // summons a group of giant redhounds at the target location, dealing 76324.4 damage over 2 seconds. cooldown: 9
    name: "Furious Flurry",
    effects: [
      {
        duration: 2,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(76324.4, 1018, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Mitsu = new Agent({
  name: Name.Mitsu,
  organization: Organization.ADB,
  cup_size: Size.D,
  class: ClassName.Artillery,
  attack_speed: 1.1,
  normal_attack: 2149,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 1949,
  skill: {
    // shoots mega laser beams dealing 77962.8 damage. cooldown: 14
    name: "Soaring Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(77962.8, 1949, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Akina = new Agent({
  name: Name.Akina,
  organization: Organization.DOD,
  cup_size: Size.H,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1287,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1223,
  skill: {
    // punches out a fire-fist dealing 80727.2 damage to an area and ignites the enemy for 5 seconds, dealing 1902.6 damage every seconds. cooldown 9
    name: "Vengeance of the Sun",
    effects: [
      {
        duration: 5,
        apply: (params: EffectParamType) => {
          // TODO: implement damage over time
          const { agent, target } = params;
          const damage = calculateSkillDamage(
            80727.2 + 5 * 1902.6,
            1223,
            agent
          );
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Akari = new Agent({
  name: Name.Akari,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 2697,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 2697,
  skill: {
    // summons a damage circle under her feet dealing total 53934.9 damage in 1 second, then will turn into a healing circle, heal friendly units for total (default skill damage * 7000%) in 3 seconds. cooldown: 7
    name: "Riposte",
    effects: [
      {
        duration: 1,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(53934.9, 2697, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 7,
  },
});

export const Sayaka = new Agent({
  name: Name.Sayaka,
  organization: Organization.ADB,
  cup_size: Size.H,
  class: ClassName.Striker,
  attack_speed: 1.8,
  normal_attack: 721,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 686,
  skill: {
    // summons 4 lightning birds, each dealing 26913.7 damage. cooldown: 11
    name: "Omen of Dread",
    effects: [
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(4 * 26813.7, 686, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
});

export const Momoko = new Agent({
  name: Name.Momoko,
  organization: Organization.DOD,
  cup_size: Size.A,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2160,
  skill: {
    // increases self attack speed to 530% for 4 seconds. bullet adds a penetration and charming effect, which will scare enemy away for 2 seconds. cooldown: 15
    name: "Piercing Bullet",
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
    is_stackable: false,
    cooldown: 15,
  },
});

export const Meteli = new Agent({
  name: Name.Meteli,
  organization: Organization.WIO,
  cup_size: Size.E,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1226,
  skill: {
    // summons a choo-choo train to knock back and deal 78450.7 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10
    name: "Meteorite Missile",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(78450.7, 1226, agent);
          const num = Math.random();

          if (num < 0.7) {
            agent.skill.cooldown = 2;
          } else {
            agent.skill.cooldown = 10;
          }

          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Hoshiko = new Agent({
  name: Name.Hoshiko,
  organization: Organization.GSR,
  cup_size: Size.M,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1613,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1613,
  skill: {
    // cast a is_stackable buff on all striker agents, each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
    name: "Crystalline Kaleidoscope Strike",
    effects: [
      {
        duration: 24,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Striker)
            .forEach((a) => {
              a.attack_speed *= 1.2;
              a.normal_attack *= 1.4;
              a.skill_damage *= 1.4;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Striker)
            .forEach((a) => {
              a.attack_speed /= 1.2;
              a.normal_attack /= 1.4;
              a.skill_damage /= 1.4;
            });
        },
      },
    ],
    is_stackable: true,
    cooldown: 5,
  },
});

export const Feme = new Agent({
  name: Name.Feme,
  organization: Organization.GAA,
  cup_size: Size.G,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  skill: {
    // shoot 2 energy bolts from the ancient sphinx cannon, deals normal attack damage with aoe. increases self damage to 460% and critical rate to 1160% for 12 seconds. cooldown: 15
    name: "Requiem of Pain",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          agent.normal_attack *= 4.6;
          agent.skill_damage *= 4.6;
          agent.critical_rate *= 11.6;
          target.takeDamage(agent.normal_attack * 2, agent);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 4.6;
          agent.skill_damage /= 4.6;
          agent.critical_rate /= 11.6;
        },
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const NeveX = new Agent({
  name: Name.NeveX,
  organization: Organization.GSR,
  cup_size: Size.L,
  class: ClassName.Support,
  attack_speed: 0.5,
  normal_attack: 6467,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 6467,
  skill: {
    // deal 10993.1 damage to all enemies, and slow down to 40% for 3 seconds. all artillery agents critical damage gains an additional 190% for 14 seconds. cooldown: 20
    name: "Avalanche",
    effects: [
      {
        duration: 14,
        apply: (params: EffectParamType) => {
          const { agent, team, target } = params;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => (a.critical_damage += 1.9));

          const damage = calculateSkillDamage(10993.1, 6467, agent);
          target.takeDamage(damage, agent);
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => (a.critical_damage -= 1.9));
        },
      },
    ],
    is_stackable: true,
    cooldown: 20,
  },
});

export const Eiko = new Agent({
  name: Name.Eiko,
  organization: Organization.GSR,
  cup_size: Size.F,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  skill: {
    // summon an extraterrestrial attack, dealing 58548.4 damage over 1.5 seconds. cooldown: 9
    name: "Volley of the Beast",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(58548.4, 2160, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Goi = new Agent({
  name: Name.Goi,
  organization: Organization.GAA,
  cup_size: Size.G,
  class: ClassName.Artillery,
  attack_speed: 1.5,
  normal_attack: 1394,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1394,
  skill: {
    // Launch 3 grenades in a straight line each dealing 25098.1 damage and mini stuns for 0.2 seconds. cooldown: 10
    name: "Napalm Massacre",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(3 * 25098.1, 1394, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const RihoX = new Agent({
  name: Name.RihoX,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1057,
  skill: {
    // summons dozens of the giant redhounds, dealing 9515.2 damage to all enemies, and increases self attack damage to 189% and attack speed to 276% for 12 seconds. cooldown: 14
    name: "Hunter's Shot",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;

          agent.attack_speed *= 2.76;
          agent.normal_attack *= 1.89;
          agent.skill_damage *= 1.89;

          const damage = calculateSkillDamage(9515.2, 1057, agent);
          target.takeDamage(damage, agent);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 2.76;
          agent.normal_attack /= 1.89;
          agent.skill_damage /= 1.89;
        },
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Setsuna = new Agent({
  name: Name.Setsuna,
  organization: Organization.GSR,
  cup_size: Size.D,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1226,
  skill: {
    // listen to the whisper in 7 seconds. self buff 1000% damage. consistently swing out 5 blade beams and ignite enemies for 3309.6 burn damage every seconds. cooldown: 9
    name: "Blade's Whisper",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          agent.normal_attack *= 10;
          agent.skill_damage *= 10;

          const damage = calculateSkillDamage(5 * 3309.6 * 7, 1226, agent);
          target.takeDamage(damage, agent);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 10;
          agent.skill_damage /= 10;
        },
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
});

export const Hami = new Agent({
  name: Name.Hami,
  organization: Organization.DOD,
  cup_size: Size.C,
  class: ClassName.Gunner,
  attack_speed: 0.8,
  normal_attack: 2727,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2727,
  skill: {
    // summon 2 giant bumblebees, each of them shoots out laser beam horizontally to the target dealing 55911.5 damage to any enemies it hits. cooldown: 8
    name: "Hornet's Vengeance",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          const damage = calculateSkillDamage(2 * 55911.5, 2727, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
});

export const O = new Agent({
  name: Name.O,
  organization: Organization.GSR,
  cup_size: Size.C,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2099,
  skill: {
    // blast out pure energy to any enemies in an area, dealing 79768.4 damage to any enemies it hits, and increases her critical change to 16% and critical damage to 64% for 10 seconds. cooldown 11
    name: "Celestial Judgement",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          agent.critical_rate += 0.16;
          agent.critical_damage += 0.64;

          const damage = calculateSkillDamage(79768.4, 2099, agent);
          target.takeDamage(damage, agent);
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.critical_rate -= 0.16;
          agent.critical_damage -= 0.64;
        },
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
});

export const GaiGai = new Agent({
  name: Name.GaiGai,
  organization: Organization.DOD,
  cup_size: Size.D,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1226,
  skill: {
    // cross slash in large area, dealing 147095 damage to any enemies nearby. cooldown: 10
    name: "Banishing Blade",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;

          const damage = calculateSkillDamage(147095, 1226, agent);
          target.takeDamage(damage, agent);
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Rosalie = new Agent({
  name: Name.Rosalie,
  organization: Organization.ADB,
  cup_size: Size.E,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 3264,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 3264,
  skill: {
    // cast a stackable buff on all artillery agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
    name: "Wrath of the Rose",
    effects: [
      {
        duration: 24,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => {
              a.attack_speed *= 1.2;
              a.normal_attack *= 1.4;
              a.skill_damage *= 1.4;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => {
              a.attack_speed /= 1.2;
              a.normal_attack /= 1.4;
              a.skill_damage /= 1.4;
            });
        },
      },
    ],
    is_stackable: true,
    cooldown: 5,
  },
});

export const Toki = new Agent({
  name: Name.Toki,
  organization: Organization.DOD,
  cup_size: Size.D,
  class: ClassName.Support,
  attack_speed: 2,
  normal_attack: 1624,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1624,
  skill: {
    // cast a stackable buff on all gunner agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
    name: "Witch's Curse",
    effects: [
      {
        duration: 24,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.attack_speed *= 1.2;
              a.normal_attack *= 1.4;
              a.skill_damage *= 1.4;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.attack_speed /= 1.2;
              a.normal_attack /= 1.4;
              a.skill_damage /= 1.4;
            });
        },
      },
    ],
    is_stackable: true,
    cooldown: 5,
  },
});

// TODO: agents below me need some logic in their skill
export const Wu = new Agent({
  name: Name.Wu,
  organization: Organization.GAA,
  cup_size: Size.G,
  class: ClassName.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 613,
  skill: {
    // release the jungle emperor power, attack will explode with 5 small aoe and increases self normal attack damage to 1035% for 11 seconds. also all striker agents critical rate gains an additional 30% for 4 seconds. cooldown: 10
    name: "Jungle Drums",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const ZiLong = new Agent({
  name: Name.ZiLong,
  organization: Organization.DOD,
  cup_size: Size.I,
  class: ClassName.Gunner,
  attack_speed: 2.2,
  normal_attack: 1088,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1088,
  skill: {
    // enters true dragon form which increases self attack speed to 520% for 11 seconds. also increases normal damage to 133% for all gunner agents in the team for 15 seconds. cooldown: 14
    name: "Dragon's Claw",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Ari = new Agent({
  name: Name.Ari,
  organization: Organization.ZETH,
  cup_size: Size.K,
  class: ClassName.Artillery,
  attack_speed: 2,
  normal_attack: 1050,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1050,
  skill: {
    // Throw out 4 of her lizard swords, each deals 4724.4 damage to the enemy. increases self damage to (1 + any agents on the battlefield, except support) * 34% for 15 seconds. cooldown: 14
    name: "Song of the Demon",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Chia = new Agent({
  name: Name.Chia,
  organization: Organization.MEOW,
  cup_size: Size.H, // healthy?
  class: ClassName.Gunner,
  attack_speed: 1.1,
  normal_attack: 2236,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  skill: {
    // concentrate on fishing for 10 seconds, continuously catching whales and smash that to the enemies face in small area that deals skill damage. increases self damage to 750%, increases gunner attack rate to 130% and damage to 170%. cooldown: 13
    name: "Fishing of the void",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 13,
  },
});

export const Shiko = new Agent({
  name: Name.Shiko,
  organization: Organization.ZETH,
  cup_size: Size.L,
  class: ClassName.Striker,
  attack_speed: 0.5,
  normal_attack: 2434,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2434,
  skill: {
    // increases self attack speed to 450% and damage to 230% for 11 seconds. cooldown: 11
    name: "Atomic Prowess: Sword Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Kaja = new Agent({
  name: Name.Kaja,
  organization: Organization.WIO,
  cup_size: Size.A,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 1144,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1144,
  skill: {
    // Summon all of her 16 little lambs, the lambs will charge forward as triangulate formation, deals 82354.3 damage and stun the enemies for 3 seconds. cooldown: 15
    name: "Shepherd's Call",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const Bia = new Agent({
  name: Name.Bia,
  organization: Organization.DOD,
  cup_size: Size.K,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1160,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1160,
  skill: {
    // trigger the fate's hand for 6 seconds, increases self skill damage to 2400% and eject all of her daggers. cooldown: 10
    name: "Fate's Hand: Retribution",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Eri = new Agent({
  name: Name.Eri,
  organization: Organization.ADB,
  cup_size: Size.F,
  class: ClassName.Gunner,
  attack_speed: 1.5,
  normal_attack: 1440,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1440,
  skill: {
    // Fire a total of 9 piercing bullets in a wide arc, each dealing 10298.2 damage. cooldown: 14
    name: "It's all in the science",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Kiyomi = new Agent({
  name: Name.Kiyomi,
  organization: Organization.WIO,
  cup_size: Size.G,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  skill: {
    // summon a self buff for 12 seconds, increases self attack speed by 580% and self critical rate by 210%, also apply knockback and slow effect on normal attack. cooldown: 20
    name: "Transparency: Crystal Lance",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});

export const Musuna = new Agent({
  name: Name.Musuna,
  organization: Organization.WIO,
  cup_size: Size.A,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2191,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2160,
  skill: {
    // increases self attack speed to 635% and attack damage to 260% for 3 seconds. bullet adds a penetration, slow and burn effect, slow enemy to 80% and ignite the enemy for 4 seconds, dealing 4537 burn damage every seconds. cooldown: 15
    name: "Shuriken Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const Windy = new Agent({
  name: Name.Windy,
  organization: Organization.GAA,
  cup_size: Size.K,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2085,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2085,
  skill: {
    // bullets will now penetrate targets and deals skill damage. increases attack speed to 200% and increases damage to 380% for 12 seconds. cooldown: 14
    name: "Shuriken Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Kotaru = new Agent({
  name: Name.Kotaru,
  organization: Organization.WIO,
  cup_size: Size.I,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  skill: {
    // enter request pay raise mode, doing more kick than usual. increase self normal attack damage to 480% and critical rate to 1160% for 13 seconds. cooldown: 23
    name: "Blistering Heat Wave",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 23,
  },
});

export const Karry = new Agent({
  name: Name.Karry,
  organization: Organization.NONE,
  cup_size: Size.C,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 1144,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1144,
  skill: {
    // increase skill damage to all agents with D cup breast size or smaller to 120% for 4 seconds. also flings out 16 penetrating meteor hearts in anti-clockwise pattern, each deal 2144.6 damage. cooldown: 10
    name: "Nature's Call",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Sato = new Agent({
  name: Name.Sato,
  organization: Organization.ZETH,
  cup_size: Size.G,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  skill: {
    // each Zeth member give 33% of damage to every zeth member for 6 seconds her heretic shoots out 9 lazer beams, each beam deals 18877.2 damage. cooldown: 12
    name: "Heretic Shredder",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 12,
  },
});

export const Victoria = new Agent({
  name: Name.Victoria,
  organization: Organization.ZETH,
  cup_size: Size.H,
  class: ClassName.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 613,
  skill: {
    // swing a cross scythe that deals 98063.4 damage on the target area for 16 seconds. increase the damage of all striker agents to 15% (+5% for each support on the battlefield) for 7 seconds. cooldown: 10
    name: "Dracula's Wrath",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Laura = new Agent({
  name: Name.Laura,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 613,
  skill: {
    // enter the ultimate mode, increases self skill damage to 1200% for 11 seconds. everytime Laura enter the ultimate mode, she will cast a global stackable protection to the team which block normal attack for (base skill damage * 13%) times. cooldown: 10
    name: "Defensive Anchor: Ultimate Shielding",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: true,
    cooldown: 10,
  },
});

export const Kura = new Agent({
  name: Name.Kura,
  organization: Organization.ZETH,
  cup_size: Size.G,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  skill: {
    // summons three thunder beams from her trident for 8 seconds, total dealing 25190 damage. cooldown: 3
    name: "Hell's Gate: Alpha Enhanced",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 3,
  },
});

export const Ne = new Agent({
  name: Name.Ne,
  organization: Organization.GAA,
  cup_size: Size.E,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1226,
  skill: {
    // release all of the fury, dive into the berserker mode and throw out all of her axe to deal skill damage. increase self attack speed to 200%, damage to 900% and enlarger her attack range 2.5 for 10 seconds. cooldown: 20
    name: "Berserker's Fury",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});

export const Uta = new Agent({
  name: Name.Uta,
  organization: Organization.WIO,
  cup_size: Size.E,
  class: ClassName.Striker,
  attack_speed: 0.5,
  normal_attack: 2452,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2452,
  skill: {
    // go into holy light mode for 10 seconds, increase self attack rate to 500% and critical damage to 1000%. begin to smash the ground around herself with skill damage. cooldown: 10
    name: "Aura of Light",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Midori = new Agent({
  name: Name.Midori,
  organization: Organization.WIO,
  cup_size: Size.J,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 2145,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2145,
  skill: {
    // shift her phase from electron world and release all of her electron to enemy that deals skill damage. increase self attack speed to 200%, damage to 500% for 7 seconds. cooldown: 15
    name: "Lashing Tongue",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const Sera = new Agent({
  name: Name.Sera,
  organization: Organization.NONE,
  cup_size: Size.D,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 1144,
  critical_rate: 0.83,
  critical_damage: 2.018,
  skill_damage: 1144,
  skill: {
    // cast a non-stackable buff on all friendly agents. add (Sera skill damage * 25%) damage on each hits for 14 seconds. cooldown: 20
    name: "Breath of the Wind",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});

export const Livia = new Agent({
  name: Name.Livia,
  organization: Organization.WIO,
  cup_size: Size.J,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 752,
  critical_rate: 0.68,
  critical_damage: 2.008,
  skill_damage: 752,
  skill: {
    // shoot out a transonic tsunami wave towards to enemies dealing 30065.3 damage. having a 75% chance to reset the skill cooldown to 2 seconds everytime this skill casts. cooldown: 14
    name: "Call of the Whale",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const ReiJK = new Agent({
  name: Name.ReiJK,
  organization: Organization.GSR,
  cup_size: Size.I,
  class: ClassName.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1057,
  skill: {
    // enters jk rage mode, school bag will explode with small aeo and increases self normal attack damage to 660% for 12 seconds. also increases critical rate by 40% for all artillery agents in the team for 5 seconds. cooldown: 15
    name: "Vanquishing school bag",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const Rei = new Agent({
  name: Name.Rei,
  organization: Organization.GSR,
  cup_size: Size.I,
  class: ClassName.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1057,
  skill: {
    // shoots multiple laser beams dealing 25373.9 damage. cooldown: 10
    name: "Bite of the Sabertooth",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
});

export const Amikam = new Agent({
  name: Name.Amikam,
  organization: Organization.GAA,
  cup_size: Size.E,
  class: ClassName.Artillery,
  attack_speed: 1.7,
  normal_attack: 2099,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2099,
  skill: {
    // attack rapidly, penetrate targets and disperse in a narrow angle. also increases self attack damage to 262%, attack speed to 200% and critical rate to 37% for 12 seconds. cooldown: 14
    name: "Vanquish The Sinners",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
});

export const Iizuna = new Agent({
  name: Name.Iizuna,
  organization: Organization.GSR,
  cup_size: Size.F,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  skill: {
    // cast jujutsu for 10 seconds, throw the knife quadruple than usual, deals with skill damage, increase critical rate and critical damage to 30% for all artillery agents in the team and increase self damage to 860%. cooldown: 15
    name: "Fox Fire: Inferno",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
});

export const Tsurumi = new Agent({
  name: Name.Tsurumi,
  organization: Organization.RSA,
  cup_size: Size.A,
  class: ClassName.Gunner,
  attack_speed: 0.5,
  normal_attack: 4336,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 4336,
  skill: {
    // increases self attack speed to 400% and attack damage to 121% for 10 seconds. sickle will penetrate through enemy. cooldown: 13
    name: "Ninjutsu of crane: Thousand Scythe",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 13,
  },
});

export const Mora = new Agent({
  name: Name.Mora,
  organization: Organization.DAB,
  cup_size: Size.F,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 3592,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 3264,
  skill: {
    // anything in contract with the nanobot catalyst will expose their weakness for 0.5 seconds. spread out nanobot catalyst around herself for 20 seconds. withing that first 7 seconds, Mora will throw nanobot catalyst more frequently and increase damage to 4200%. cooldown: 20
    name: "Nanobot Catalyst",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});

export const Masamune = new Agent({
  name: Name.Masamune,
  organization: Organization.RSA,
  cup_size: Size.H,
  class: ClassName.Striker,
  attack_speed: 1,
  normal_attack: 1395,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  skill: {
    // pull out all of her blades in a flash for 10 seconds. enlarge her attack range 2.5, increase her damage to 1800%. cooldown: 20
    name: "Seven blades",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
});
// TODO: agents above me need some logic in their skill

export const Chloe = new Agent({
  name: Name.Chloe,
  organization: Organization.RSA,
  cup_size: Size.G,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.028,
  skill_damage: 2099,
  skill: {
    // dive into darkness, bring it with the deepest power. cast a stackable buff, increase damage to 200% and increase all artillery agents damage to 110% for 24 seconds. cooldown: 10
    name: "Abyssal Pilgrimage",
    effects: [
      {
        duration: 24,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          agent.normal_attack *= 2;
          agent.skill_damage *= 2;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => {
              a.normal_attack *= 1.1;
              a.skill_damage *= 1.1;
            });
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;
          agent.normal_attack /= 2;
          agent.skill_damage /= 2;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => {
              a.normal_attack /= 1.1;
              a.skill_damage /= 1.1;
            });
        },
      },
    ],
    is_stackable: true,
    cooldown: 10,
  },
});

// TODO: max agent + evo
export const Tyrla = new Agent({
  name: Name.Tyrla,
  organization: Organization.TAP,
  cup_size: Size.A,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 1,
  critical_rate: 1,
  critical_damage: 1,
  skill_damage: 1,
  skill: {
    // Tyrla begin the kuchipudi dance, increase self damage to 530% and attack speed to 240% for 12 seconds. she bursts out whatever she got from her arm mech while dancing. cooldown: 16
    name: "Kuchipudi",
    effects: [
      {
        apply: (params: EffectParamType) => {},
        remove: (params: EffectParamType) => {},
      },
    ],
    is_stackable: false,
    cooldown: 16,
  },
});
