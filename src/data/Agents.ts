import { AttackMode, ClassName, Name, Organization, Size } from "../enums";
import { EffectParamType } from "../model/types";

type DamageCalcType = {
  damage: number;
  skill_damage: number;
  params: EffectParamType;
};

const applySkillDamage = ({ damage, skill_damage, params }: DamageCalcType) => {
  const { agent, target } = params;
  const multiplier = damage / skill_damage;

  let critical_rate = agent.critical_rate - target.critical_resistance / 100;
  let dealt_damage = multiplier * agent.skill_damage;

  if (Math.random() < critical_rate) {
    dealt_damage *= agent.critical_damage;
  }

  target.takeDamage(dealt_damage, agent);
};

// TODO: result 793,609 (calc: 978,875)
export const Yuki = {
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
};

// result 323,310 (calc: 355,063) (calculate uses skill 1 more time than game)
export const Neve = {
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
    // summons an iceberg dealing 26428 damage and slows down enemies to 50% for 5 seconds. cooldown: 17
    name: "Absolute Zero",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 26428, skill_damage: 569, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 17,
  },
};

// result 753,133 (calc: 760,130)
export const Ayu = {
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
    // shoots a piercing laser beam dealing 45536 damage. cooldown: 9
    name: "Raining Bullets",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 45536, skill_damage: 379, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 560,942 (calc: 560,521)
export const Mika = {
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
    // smashes the ground and creates 4 sword-quakes each dealing 11422 damage. cooldown: 11
    name: "Ocean's Torrent",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 11422, skill_damage: 463, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
};

// result 979,315 (calc: 959,356)
export const Sora = {
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
    // shoots two electric bullets, each dealing 27891 damage. cooldown: 8
    name: "Death From Above",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 2 * 27891, skill_damage: 379, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
};

// result 953,958 (calc: 945,594)
export const Ember = {
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
    // shoots 4 enhanced bullets, each dealing 13991 damage cooldown: 8
    name: "Dance of Death",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 13991, skill_damage: 362, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
};

// result 1,021,678 (calc: 1,075,798)
export const Chiharu = {
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
    // shoots a powerful bullet at the monster with the highest health,
    // dealing 65165 damage. cooldown: 9
    name: "Dead Man's Curse",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 65165, skill_damage: 1131, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 1,374,045 (calc: 1,305,182)
export const Irina = {
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
    // fires 4 missiles at target, each dealing 14230 damage. cooldown: 6
    name: "Rocket Ricochet",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 14230, skill_damage: 569, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 6,
  },
};

// result 407,450 (calc: 407,482)
export const Yuuha = {
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
    // deals 26563 damage and knockbacks all monsters by 1.6 unit distances. cooldown: 16
    name: "Dance of the Lotus",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 26563, skill_damage: 604, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 16,
  },
};

// result 673,566 (calc: 681,855)
export const Uzu = {
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
    // releases her tentacles and deals 57490 damage to the surrounding units,
    // knockbacks enemy for 1 unit distance and applies a 1 second mini-stun. cooldown: 16
    name: "Crushing Embrace",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 57490, skill_damage: 1766, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 16,
  },
};

// result 1,081,595 (calc: 1,107,428)
export const Denka = {
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
    // shoots 3 electric drills, each dealing 24214 damage. cooldown: 9
    name: "Devastating Pincer Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 3 * 24214, skill_damage: 723, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 1,319,200 (calc: 1,412,026)
export const Reika = {
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
          applySkillDamage({ damage: 86932, skill_damage: 604, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 619,265 (calc: 629,407)
export const Noa = {
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
    // releases a drone dealing 50922 damage to the target area and
    // slow down to 60% for 6 seconds. cooldown: 15
    name: "Enhanced Plasma Cannon",
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 50922, skill_damage: 880, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
};

// result 26,470,866 (calc: 26,421,006)
export const Neugena = {
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
    // releases a blasting arrow, dealing (default skill damage * 0.00020)%
    // of enemies current hp in a small area (minimum damage = skill damage). cooldown: 20
    name: "Hunter's Sense",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = agent.skill_damage * target.current_health * 0.0002;

          if (damage < agent.skill_damage) {
            damage = agent.skill_damage;
          }

          applySkillDamage({ damage, skill_damage: 293, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// result 1,001,945 (calc: 992,557)
export const Larisa = {
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
          applySkillDamage({ damage: 69856, skill_damage: 1552, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
};

// result 1,290,039 (calc: 1,267,462)
export const Rui = {
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
    // enters demonic mode which increases her attack damage to 16382.6,
    // attack range and area for 10 seconds. cooldown: 17
    name: "Devil's Contract",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack += 16382.8;
          agent.skill_damage += 16382.8;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack -= 16382.8;
          agent.skill_damage -= 16382.8;
        },
      },
    ],
    is_stackable: false,
    cooldown: 17,
  },
};

// result 939,069 (calc: 943,088)
export const Kotora = {
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
    // launches an artillery shell towards the target location,
    // which splits into 4 shells, each dealing 16404 damage. cooldown: 11
    name: "Roar of the Beast",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 16404, skill_damage: 754, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
};

// result 296,759 (calc: 302,813)
export const Vanessa = {
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
    effects: [],
    is_stackable: false,
    cooldown: 34,
  },
};

// result 278,015 (calc: 304,725)
export const Aoi = {
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
};

// result 903,967 (calc: 938,487)
export const Sara = {
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
    // shoots a gigantic snake dealing 56213 damage. cooldown: 11
    name: "Paralyzing Stare",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 56213, skill_damage: 811, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
};

// result 1,018,042 (calc: 1,112,954)
export const Mai = {
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
    // shoots bullets rapidly. enemies that were hit wil take 85121 damage once. cooldown: 13
    name: "Soldier's Will",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 85121, skill_damage: 811, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 13,
  },
};

// result  394,080 (calc: 370,839)
export const Tsukiko = {
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
    // shoots out a devastating sound wave dealing 23285 damage and
    // increases the damage enemies receive by 35% for 9 seconds. cooldown: 38
    name: "Bulletstorm",
    effects: [
      {
        duration: 9,
        apply: (params: EffectParamType) => {
          const { target } = params;
          target.damage_taken_multiplier *= 1.35;
          applySkillDamage({ damage: 23285, skill_damage: 1552, params });
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
};

// result  331,667 (calc: 326,688)
export const Yukako = {
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
};

// TODO: result 1,117,403 (calc: 1,304,148.37)
export const Coco = {
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
    // she will encourage enemies run 200% faster for 1.5 seconds.
    // and if coco is the only support in the team,
    // she will increases 433% damage of all friendly agents in the team for 7 seconds. cooldown: 6
    name: "Thrashing Paws",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const not_valid =
            team.filter((a) => a.class === ClassName.Support).length > 1;

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
            team.filter((a) => a.class === ClassName.Support).length > 1;

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
};

// result 284,640 (calc: 281,200)
export const Pan = {
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
    // cast a non-is_stackable buff on all friendly gunner agents.
    // increases critical rate to 20% and critical damage to 120% for 12 seconds. cooldown: 25
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
};

// result 517,009 (calc: 564,256)
export const Hitomi = {
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
};

// result 1,159,211 (calc: 1,114,196)
export const Cadence = {
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
    // calls in laser barrage and deals 68821 damage to all monsters. cooldown: 10
    name: "Armament Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 68821, skill_damage: 983, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// result 885,927 (calc: 900,229)
export const Uni = {
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
    // casts an arrow barrage to deal 86411 damage and stuns for 6 seconds. cooldown: 20
    name: "Archer's Judgement",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 86411, skill_damage: 754, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// result 1,199,265 (calc: 1,138,913)
export const Sizuko = {
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
    // throws a soul-scythe, after it attach on the enemy will split into 4 souls,
    // each dealing 35211 damage and inducing fear to the enemy for 4 seconds. cooldown: 18
    name: "Mortician's Touch",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 35211, skill_damage: 584, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 18,
  },
};

// result 1,405,733 (calc: 1,382,173)
export const Chihiro = {
  name: Name.Chihiro,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Artillery,
  attack_speed: 0.5,
  normal_attack: 4297,
  critical_rate: 0.74,
  critical_damage: 2.028,
  skill_damage: 3898,
  skill: {
    // bullets will now penetrate targets.
    // increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8
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
};

// result 1,270,533 (calc: 1,132,094)
export const Mei = {
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
    // throws out a chakram, ricocheting onto 4 enemies,
    // dealing 24463 damage to each enemy. cooldown: 12
    name: "Ringlets of Death",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 24463, skill_damage: 815, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 12,
  },
};

// result 1,376,158 (calc: 1,397,051)
export const Riho = {
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
    // summons a group of giant redhounds at the target location,
    // dealing 76324 damage over 2 seconds. cooldown: 9
    name: "Furious Flurry",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          // TODO: implement damage over time
          applySkillDamage({ damage: 76324, skill_damage: 1018, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 971,076 (calc: 983,184)
export const Mitsu = {
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
    // shoots mega laser beams dealing 77963 damage. cooldown: 14
    name: "Soaring Strike",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 77963, skill_damage: 1949, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// result 1,338,793 (calc: 1,416,515)
export const Akina = {
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
    // punches out a fire-fist dealing 80727 damage to an area and
    // ignites the enemy for 5 seconds, dealing 1903 damage every seconds. cooldown 9
    name: "Vengeance of the Sun",
    effects: [
      {
        apply: (params: EffectParamType) => {
          // TODO: implement damage over time
          applySkillDamage({
            damage: 80727 + 5 * 1903,
            skill_damage: 1223,
            params,
          });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 1,100,353 (calc: 1,291,771) (calculate uses skill 1 more time than game)
export const Akari = {
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
    // summons a damage circle under her feet dealing total 53935 damage in 1 second,
    // then will turn into a healing circle,
    // heal friendly units for total (default skill damage * 7000%) in 3 seconds. cooldown: 7
    name: "Riposte",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 53935, skill_damage: 2697, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 7,
  },
};

// result 1,505,468 (calc: 1,504,302)
export const Sayaka = {
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
    // summons 4 lightning birds, each dealing 30682 damage. cooldown: 11
    name: "Omen of Dread",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 4 * 30682, skill_damage: 686, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 11,
  },
};

// TODO: result 483,943 (calc: 552,960)
export const Momoko = {
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
    // increases self attack speed to 530% for 4 seconds.
    // bullet adds a penetration and charming effect,
    // which will scare enemy away for 2 seconds. cooldown: 15
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
};

// TODO: result 1,674,653 (calc: 2,028,718)
export const Meteli = {
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
    // summons a choo-choo train to knock back and deal 78451 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10
    name: "Meteorite Missile",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent } = params;

          if (Math.random() < 0.7) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 10 * 1000;
          }

          applySkillDamage({ damage: 78451, skill_damage: 1226, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// TODO: result 319,317 (calc: 385,507)
export const Hoshiko = {
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
    // cast a is_stackable buff on all striker agents,
    // each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
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
};

// TODO: result 1,777,564 (calc: 2,074,244)
export const Feme = {
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
    // shoot 2 energy bolts from the ancient sphinx cannon, deals normal attack damage with aoe.
    // increases self damage to 460% and critical rate to 1160% for 12 seconds. cooldown: 15
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
};

// result 456,221 (calc: 447,511)
export const NeveX = {
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
    // deal 10993 damage to all enemies, and slow down to 40% for 3 seconds.
    // all artillery agents critical damage gains an additional 190% for 14 seconds. cooldown: 20
    name: "Avalanche",
    effects: [
      {
        duration: 14,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => (a.critical_damage += 1.9));

          applySkillDamage({ damage: 10993, skill_damage: 6467, params });
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
};

// TODO: result 515,872 (calc: 1,076,717.6)
export const Eiko = {
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
    // summon an extraterrestrial attack, dealing 58548 damage over 1.5 seconds. cooldown: 9
    name: "Volley of the Beast",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 58548, skill_damage: 2160, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 9,
  },
};

// result 1,131,294 (calc: 1,153,054)
export const Goi = {
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
    // Launch 3 grenades in a straight line each dealing 25098 damage
    // and mini stuns for 0.2 seconds. cooldown: 10
    name: "Napalm Massacre",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 3 * 25098, skill_damage: 1394, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// result 1,138,915 (calc: 1,348,364)
export const RihoX = {
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
    // summons dozens of the giant redhounds, dealing 9515 damage to all enemies,
    // and increases self attack damage to 189% and attack speed to 276% for 12 seconds. cooldown: 14
    name: "Hunter's Shot",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;

          agent.attack_speed *= 2.76;
          agent.normal_attack *= 1.89;
          agent.skill_damage *= 1.89;

          applySkillDamage({ damage: 9515, skill_damage: 1057, params });
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
};

// result 3,418,071 (calc: 3,489,056)
export const Setsuna = {
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
    // listen to the whisper in 7 seconds. self buff 1000% damage.
    // consistently swing out 5 blade beams and ignite enemies
    // for 3310 burn damage every seconds. cooldown: 9
    name: "Blade's Whisper",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 10;
          agent.skill_damage *= 10;

          // TODO: implement damage over time
          applySkillDamage({
            damage: 5 * 3310,
            skill_damage: 1226,
            params,
          });
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
};

// result 1,917,358 (calc: 1,936,425)
export const Hami = {
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
    // summon 2 giant bumblebees, each of them shoots out laser beam horizontally
    // to the target dealing 55912 damage to any enemies it hits. cooldown: 8
    name: "Hornet's Vengeance",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 2 * 55912, skill_damage: 2727, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 8,
  },
};

// result 1,032,790 (calc: 1,127,229)
export const O = {
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
    // blast out pure energy to any enemies in an area,
    // dealing 79768 damage to any enemies it hits,
    // and increases her critical chance to 16% and
    // critical damage to 64% for 10 seconds. cooldown 11
    name: "Celestial Judgement",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.critical_rate += 0.16;
          agent.critical_damage += 0.64;
          applySkillDamage({ damage: 79768, skill_damage: 2099, params });
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
};

// result 1,754,107 (calc: 1,911,034)
export const GaiGai = {
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
          applySkillDamage({ damage: 147095, skill_damage: 1226, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// result 331,279 (calc: 388,416)
export const Rosalie = {
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
    // cast a stackable buff on all artillery agents.
    // each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
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
};

// result 388,136 (calc: 388,136)
export const Toki = {
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
    // cast a stackable buff on all gunner agents.
    // each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5
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
};

// result 1,494,177 (calc: 1,516,348)
export const Wu = {
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
    // release the jungle emperor power, attack will explode with 5 small aoe and increases self normal attack damage to 1035% for 11 seconds.
    // also all striker agents critical rate gains an additional 30% for 4 seconds. cooldown: 10
    name: "Jungle Drums",
    effects: [
      {
        duration: 11,
        apply: (params: EffectParamType) => {
          const { agent, target } = params;
          agent.normal_attack *= 10.35;
          // TODO: attack will explode with 5 small aoe => huh?
        },
        remove: (params: EffectParamType) => {
          const { agent, target } = params;
          agent.normal_attack /= 10.35;
        },
      },
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Striker)
            .forEach((a) => (a.critical_rate += 0.3));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Striker)
            .forEach((a) => (a.critical_rate -= 0.3));
        },
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// result 1,436,450 (calc: 1,508,063)
export const ZiLong = {
  name: Name.ZiLong,
  organization: Organization.DOD,
  cup_size: Size.I,
  class: ClassName.Gunner,
  attack_speed: 2,
  normal_attack: 1126,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1088,
  skill: {
    // enters true dragon form which increases self attack speed to 520% for 11 seconds.
    // also increases normal damage to 133% for all gunner agents in the team for 15 seconds. cooldown: 14
    name: "Dragon's Claw",
    effects: [
      {
        duration: 11,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 5.2;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 5.2;
        },
      },
      {
        duration: 15,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => (a.normal_attack *= 1.33));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => (a.normal_attack /= 1.33));
        },
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// TODO: result 275,862 (calc: 183,495)
export const Ari = {
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
    // Throw out 4 of her lizard swords, each deals 4724 damage to the enemy
    // increases self damage to (1 + any agents on the battlefield, except support) * 34% for 15 seconds. cooldown: 14
    name: "Song of the Demon",
    effects: [
      {
        duration: 15,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          const non_support_num = team.filter(
            (a) => a.class !== ClassName.Support
          ).length;

          agent.normal_attack *= (1 + non_support_num) * 0.34;
          agent.skill_damage *= (1 + non_support_num) * 0.34;

          applySkillDamage({ damage: 4 * 4724, skill_damage: 1050, params });
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;
          const non_support_num = team.filter(
            (a) => a.class !== ClassName.Support
          ).length;

          agent.normal_attack /= (1 + non_support_num) * 0.34;
          agent.skill_damage /= (1 + non_support_num) * 0.34;
        },
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// TODO: result 3,057,000 (calc: 3,830,268)
export const Chia = {
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
    // concentrate on fishing for 10 seconds, continuously catching whales and smash that to the
    // enemies face in small area that deals skill damage.
    // increases self damage to 750%, increases gunner attack rate to 130% and damage to 170%. cooldown: 13
    name: "Fishing of the void",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;

          agent.normal_attack *= 7.5;
          agent.skill_damage *= 7.5;

          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.attack_speed *= 1.3;
              a.normal_attack *= 1.7;
              a.skill_damage *= 1.7;
            });
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;

          agent.normal_attack /= 7.5;
          agent.skill_damage /= 7.5;

          team
            .filter((a) => a.class === ClassName.Gunner)
            .forEach((a) => {
              a.attack_speed /= 1.3;
              a.normal_attack /= 1.7;
              a.skill_damage /= 1.7;
            });
        },
      },
    ],
    is_stackable: false,
    cooldown: 13,
  },
};

// TODO: result 1,363,055 (calc: 1,489,121)
export const Shiko = {
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
        duration: 11,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 4.5;
          agent.normal_attack *= 2.3;
          agent.skill_damage *= 2.3;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 4.5;
          agent.normal_attack /= 2.3;
          agent.skill_damage /= 2.3;
        },
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// result 748,049 (calc: 794,968)
export const Kaja = {
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
    // Summon all of her 16 little lambs, the lambs will charge forward as triangulate formation, deals 82354 damage
    // and stun the enemies for 3 seconds. cooldown: 15
    name: "Shepherd's Call",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 82354, skill_damage: 1144, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
};

// TODO: result 1,785,396 (calc: 2,810,680)
export const Bia = {
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
    // trigger the fate's hand for 6 seconds,
    // increases self skill damage to 2400% and eject all of her daggers. cooldown: 10
    name: "Fate's Hand: Retribution",
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          // TODO: implement damage over time
          const { agent } = params;
          agent.skill_damage *= 24;
          applySkillDamage({ damage: 8 * 1160, skill_damage: 1160, params });
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.skill_damage /= 24;
        },
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// result 1,082,432 (calc: 1,091,898)
export const Eri = {
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
    // Fire a total of 9 piercing bullets in a wide arc, each dealing 10298 damage. cooldown: 14
    name: "It's all in the science",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 9 * 10298, skill_damage: 1440, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// result 1,040,481 (calc: 1,101,752)
export const Kiyomi = {
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
    // summon a self buff for 12 seconds, increases self attack speed by 580% and self critical rate by 210%,
    // also apply knockback and slow effect on normal attack. cooldown: 20
    name: "Transparency: Crystal Lance",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 5.8;
          agent.critical_rate *= 2.1;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 5.8;
          agent.critical_rate /= 2.1;
        },
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// TODO: result 1,376,219 (calc: 1,059,129)
export const Musuna = {
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
    // increases self attack speed to 635% and attack damage to 260% for 3 seconds.
    // bullet adds a penetration, slow and burn effect, slow enemy to 80% and ignite the enemy for 4 seconds,
    // dealing 4537 burn damage every seconds. cooldown: 15
    name: "Shuriken Strike",
    effects: [
      {
        duration: 3,
        apply: (params: EffectParamType) => {
          // TODO: implement damave over time
          const { agent } = params;
          agent.attack_speed *= 6.35;
          agent.normal_attack *= 2.6;
          agent.skill_damage *= 2.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 6.35;
          agent.normal_attack /= 2.6;
          agent.skill_damage /= 2.6;
        },
      },
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          // TODO: implement damage over time
          const { agent, target } = params;
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
};

// TODO: result 1,494,406 (calc: 1,673,421)
export const Windy = {
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
    // bullets will now penetrate targets and deals skill damage.
    // increases attack speed to 200% and increases damage to 380% for 12 seconds. cooldown: 14
    name: "Shuriken Strike",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackMode.Skill;
          agent.attack_speed *= 2;
          agent.normal_attack *= 3.8;
          agent.skill_damage *= 3.8;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackMode.Normal;
          agent.attack_speed /= 2;
          agent.normal_attack /= 3.8;
          agent.skill_damage /= 3.8;
        },
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// TODO: result 1,393,460 (calc: 1,565,969)
export const Kotaru = {
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
    // enter request pay raise mode, doing more kick than usual.
    // increase self normal attack damage to 480% and critical rate to 1160% for 13 seconds. cooldown: 23
    name: "Blistering Heat Wave",
    effects: [
      {
        duration: 13,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 4.8;
          agent.critical_rate *= 11.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 4.8;
          agent.critical_rate /= 11.6;
        },
      },
    ],
    is_stackable: false,
    cooldown: 23,
  },
};

// TODO: result 587,457 (calc: 630,344)
export const Karry = {
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
    // increase skill damage to all agents with D cup breast size or smaller to 120% for 4 seconds.
    // also flings out 16 penetrating meteor hearts in anti-clockwise pattern, each deal 2144.6 damage. cooldown: 10
    name: "Nature's Call",
    effects: [
      {
        duration: 4,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.cup_size <= Size.D)
            .forEach((a) => (a.skill_damage *= 1.2));
          applySkillDamage({ damage: 16 * 2145, skill_damage: 1144, params });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((a) => a.cup_size <= Size.D)
            .forEach((a) => (a.skill_damage /= 1.2));
        },
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// TODO: result 2,340,578 (calc: 1,844,824)
export const Sato = {
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
    // each Zeth member give 33% of damage to every Zeth member for 6 seconds.
    // her heretic shoots out 9 lazer beams, each beam deals 18877 damage. cooldown: 12
    name: "Heretic Shredder",
    effects: [
      {
        duration: 6,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const zeth_member = team.filter(
            (a) => a.organization === Organization.ZETH
          );

          zeth_member.forEach((za) => {
            zeth_member
              // .filter((a) => a.name !== za.name)
              .forEach((zam) => {
                zam.normal_attack += 0.33;
                zam.skill_damage += 0.33;
              });
          });

          applySkillDamage({ damage: 9 * 18877, skill_damage: 1226, params });
        },
        remove: (params: EffectParamType) => {
          const { agent, team, target } = params;
          const zeth_member = team.filter(
            (a) => a.organization === Organization.ZETH
          );

          zeth_member.forEach((za) => {
            zeth_member
              .filter((a) => a.name !== za.name)
              .forEach((zam) => {
                zam.normal_attack -= 0.33;
                zam.skill_damage -= 0.33;
              });
          });
        },
      },
    ],
    is_stackable: false,
    cooldown: 12,
  },
};

// TODO: result 1,410,767 (calc: 236,005)
export const Victoria = {
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
    // swing a cross scythe that deals 98063 damage on the
    // target area for 16 seconds. increase the damage of all striker agents to
    // 15% (+5% for each support on the battlefield) for 7 seconds. cooldown: 10
    name: "Dracula's Wrath",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const support_num = team.filter(
            (a) => a.class === ClassName.Support
          ).length;
          team
            .filter((a) => a.class === ClassName.Striker)
            .forEach((a) => {
              a.normal_attack *= 0.15 + support_num * 0.05;
              a.skill_damage *= 0.15 + support_num * 0.05;
            });
          // TODO: implement damage over time
          applySkillDamage({ damage: 98063, skill_damage: 613, params });
        },
        remove: (params: EffectParamType) => {
          const { agent, team, target } = params;
          const support_num = team.filter(
            (a) => a.class === ClassName.Support
          ).length;
          team
            .filter((a) => a.class === ClassName.Striker)
            .forEach((a) => {
              a.normal_attack /= 0.15 + support_num * 0.05;
              a.skill_damage /= 0.15 + support_num * 0.05;
            });
        },
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// TODO: result 1,771,689 (calc: 2,430,654)
export const Laura = {
  name: Name.Laura,
  organization: Organization.ADB,
  cup_size: Size.C,
  class: ClassName.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 680,
  skill: {
    // enter the ultimate mode, increases self skill damage to 1200% for 11 seconds.
    // everytime Laura enter the ultimate mode, she will cast a global stackable protection to the team
    // which block normal attack for (base skill damage * 13%) times. cooldown: 10
    name: "Defensive Anchor: Ultimate Shielding",
    effects: [
      {
        duration: 11,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackMode.Skill;
          agent.skill_damage *= 12;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackMode.Normal;
          agent.skill_damage /= 12;
        },
      },
    ],
    is_stackable: true,
    cooldown: 10,
  },
};

// TODO: result 928,459 (calc: 1,257,381)
export const Kura = {
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
    // summons three thunder beams from her trident for 8 seconds,
    // total dealing 25190 damage. cooldown: 3
    name: "Hell's Gate: Alpha Enhanced",
    effects: [
      {
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 25190, skill_damage: 2099, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 3,
  },
};

// result 1,329,982 (calc: 1,386,606)
export const Ne = {
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
    // release all of the fury, dive into the
    // berserker mode and throw out all of her axe to deal skill damage.
    // increase self attack speed to 200%, damage to 900%
    // and enlarger her attack range 2.5 for 10 seconds. cooldown: 20
    name: "Berserker's Fury",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackMode.Skill;
          agent.attack_speed *= 2;
          agent.normal_attack *= 9;
          agent.skill_damage *= 9;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackMode.Normal;
          agent.attack_speed /= 2;
          agent.normal_attack /= 9;
          agent.skill_damage /= 9;
        },
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// TODO: result 671,734 (calc: 733,148)
export const Uta = {
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
    // go into holy light mode for 10 seconds,
    // increase self attack rate to 500% and critical damage to 1000%.
    // begin to smash the ground around herself with skill damage. cooldown: 10
    name: "Aura of Light",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 5;
          agent.critical_damage *= 10;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 5;
          agent.critical_damage /= 10;
        },
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// TODO: result 1,246,460 (calc: 1,327,755)
export const Midori = {
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
    // shift her phase from electron world and release all of her electron to enemy that deals skill damage.
    // increase self attack speed to 200%, damage to 500% for 7 seconds. cooldown: 15
    name: "Lashing Tongue",
    effects: [
      {
        duration: 7,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 2;
          agent.normal_attack *= 5;
          agent.skill_damage *= 5;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 2;
          agent.normal_attack /= 5;
          agent.skill_damage /= 5;
        },
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
};

// result 132,682 (calc: 136,136)
export const Sera = {
  name: Name.Sera,
  organization: Organization.NONE,
  cup_size: Size.D,
  class: ClassName.Support,
  attack_speed: 1,
  normal_attack: 1144,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 1144,
  skill: {
    // cast a non-stackable buff on all friendly agents.
    // add (Sera skill damage * 25%) damage on each hits for 14 seconds. cooldown: 20
    name: "Breath of the Wind",
    effects: [
      {
        duration: 14,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          team
            .filter((a) => a.name !== agent.name)
            .forEach((a) => {
              a.normal_attack *= agent.skill_damage * 0.25;
              a.skill_damage *= agent.skill_damage * 0.25;
            });
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;
          team
            .filter((a) => a.name !== agent.name)
            .forEach((a) => {
              a.normal_attack /= agent.skill_damage * 0.25;
              a.skill_damage /= agent.skill_damage * 0.25;
            });
        },
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// result 648,122 (calc: 720,853)
export const Livia = {
  name: Name.Livia,
  organization: Organization.WIO,
  cup_size: Size.J,
  class: ClassName.Gunner,
  attack_speed: 1,
  normal_attack: 752,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 752,
  skill: {
    // shoot out a transonic tsunami wave towards to enemies dealing 30065 damage.
    // having a 75% chance to reset the skill cooldown to 2 seconds everytime this skill casts. cooldown: 14
    name: "Call of the Whale",
    effects: [
      {
        apply: (params: EffectParamType) => {
          const { agent } = params;

          if (Math.random() < 0.75) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 14 * 1000;
          }

          applySkillDamage({ damage: 30065, skill_damage: 752, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// TODO: result 1,471,659 (calc: 1,383,190)
export const ReiJK = {
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
    // enters jk rage mode, school bag will explode with small aeo and
    // increases self normal attack damage to 660% for 12 seconds.
    // also increases critical rate by 40% for all artillery agents in the team for 5 seconds. cooldown: 15
    name: "Vanquishing school bag",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 6.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 6.6;
        },
      },
      {
        duration: 5,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          team
            .filter(
              (a) => a.class === ClassName.Artillery && a.name !== agent.name
            )
            .forEach((a) => (a.critical_rate += 0.4));
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;
          team
            .filter(
              (a) => a.class === ClassName.Artillery && a.name !== agent.name
            )
            .forEach((a) => (a.critical_rate -= 0.4));
        },
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
};

// result 536,025 (calc: 557,111)
export const Rei = {
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
        apply: (params: EffectParamType) => {
          applySkillDamage({ damage: 25374, skill_damage: 1057, params });
        },
        remove: () => {},
      },
    ],
    is_stackable: false,
    cooldown: 10,
  },
};

// TODO: result 1,265,655 (calc: 2,348,896)
export const Amikam = {
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
    // attack rapidly, penetrate targets and disperse in a narrow angle.
    // also increases self attack damage to 262%, attack speed to 200%
    // and critical rate to 37% for 12 seconds. cooldown: 14
    name: "Vanquish The Sinners",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 2;
          agent.normal_attack *= 2.62;
          agent.skill_damage *= 2.62;
          agent.critical_rate += 0.37;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 2;
          agent.normal_attack /= 2.62;
          agent.skill_damage /= 2.62;
          agent.critical_rate -= 0.37;
        },
      },
    ],
    is_stackable: false,
    cooldown: 14,
  },
};

// TODO: result 1,770,875 (calc: 1,009,638)
export const Iizuna = {
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
    // cast jujutsu for 10 seconds, throw the knife quadruple than usual, deals with skill damage,
    // increase critical rate and critical damage to 30% for all artillery agents in the team
    // and increase self damage to 860%. cooldown: 15
    name: "Fox Fire: Inferno",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          agent.normal_attack *= 8.6;
          agent.skill_damage *= 8.6;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => (a.critical_damage += 0.3));
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;
          agent.normal_attack /= 8.6;
          agent.skill_damage /= 8.6;
          team
            .filter((a) => a.class === ClassName.Artillery)
            .forEach((a) => (a.critical_damage -= 0.3));
        },
      },
    ],
    is_stackable: false,
    cooldown: 15,
  },
};

// TODO: result 976,415 (calc: 1,297,182)
export const Tsurumi = {
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
    // increases self attack speed to 400% and attack damage to 121% for 10 seconds.
    // sickle will penetrate through enemy. cooldown: 13
    name: "Ninjutsu of crane: Thousand Scythe",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 4;
          agent.normal_attack *= 1.21;
          agent.skill_damage *= 1.21;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 4;
          agent.normal_attack /= 1.21;
          agent.skill_damage /= 1.21;
        },
      },
    ],
    is_stackable: false,
    cooldown: 13,
  },
};

// TODO: result 10,441,705 (calc: 11,314,800)
export const Mora = {
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
    // anything in contract with the nanobot catalyst will expose their weakness for 0.5 seconds.
    // spread out nanobot catalyst around herself for 20 seconds. withing that first 7 seconds,
    // Mora will throw nanobot catalyst more frequently and increase damage to 4200%. cooldown: 20
    name: "Nanobot Catalyst",
    effects: [
      {
        duration: 20,
        apply: (params: EffectParamType) => {
          const { target } = params;
          target.weakness_multiplier *= 1.75;
        },
        remove: (params: EffectParamType) => {
          const { target } = params;
          target.weakness_multiplier /= 1.75;
        },
      },
      {
        // increase damage
        duration: 7,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 42;
          agent.skill_damage *= 42;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 42;
          agent.skill_damage /= 42;
        },
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// TODO: result 1,442,717 (calc: 1,565,190)
export const Masamune = {
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
    // pull out all of her blades in a flash for 10 seconds.
    // enlarge her attack range 2.5, increase her damage to 1800%. cooldown: 20
    name: "Seven blades",
    effects: [
      {
        duration: 10,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 18;
          agent.skill_damage *= 18;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 18;
          agent.skill_damage /= 18;
        },
      },
    ],
    is_stackable: false,
    cooldown: 20,
  },
};

// result 1,275,676 (calc: 1,297,182)
export const Chloe = {
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
    // dive into darkness, bring it with the deepest power.
    // cast a stackable buff, increase damage to 200%
    // and increase all artillery agents damage to 110% for 24 seconds. cooldown: 10
    name: "Abyssal Pilgrimage",
    effects: [
      {
        duration: 24,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          agent.normal_attack *= 2;
          agent.skill_damage *= 2;
          team
            .filter(
              (a) => a.class === ClassName.Artillery && a.name !== Name.Chloe
            )
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
            .filter(
              (a) => a.class === ClassName.Artillery && a.name !== Name.Chloe
            )
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
};

// TODO: result 2,256,230 (calc: 2,495,081)
export const Tyrla = {
  name: Name.Tyrla,
  organization: Organization.TAP,
  cup_size: Size.A,
  class: ClassName.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.84,
  critical_damage: 2.028,
  skill_damage: 2099,
  skill: {
    // Tyrla begin the kuchipudi dance, increase self damage to 530%
    // and attack speed to 240% for 12 seconds.
    // she bursts out whatever she got from her arm mech while dancing. cooldown: 16
    name: "Kuchipudi",
    effects: [
      {
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 5.3;
          agent.skill_damage *= 5.3;
          agent.attack_speed *= 2.4;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 5.3;
          agent.skill_damage /= 5.3;
          agent.attack_speed /= 2.4;
        },
      },
    ],
    is_stackable: false,
    cooldown: 16,
  },
};
