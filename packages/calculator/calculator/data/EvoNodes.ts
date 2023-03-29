import { ClassEnum, EffectTypeEnum } from '../enums/index';
import { EffectDOT, EvoNode, EvoNodeParamType, NewEvoNode } from '../model/index';

/** Helper Functions */

const get_all_children = (node: EvoNode) => {
  let children = node.children || [];
  for (const child of children) {
    children = [...children, ...get_all_children(child)];
  }
  return children;
};

const get_rate = (node: EvoNode) => {
  const nodes = get_all_children(node);
  const activation_chance = nodes.reduce((pv, cv) => pv + cv.level * node.rate, 0);

  return activation_chance;
};

const apply_artillery_headshot = (params: EvoNodeParamType) => {
  const { node } = params;
  if (Math.random() < get_rate(node)) {
    return 2;
  }

  return 0;
};

const apply_striker_rage = (params: EvoNodeParamType) => {
  const { agent, node } = params;
  const damage_increase = 1 + get_rate(node) * agent.stats.attack_counter > 10 ? 10 : agent.stats.attack_counter;

  return damage_increase;
};

/** Global Nodes */

// Skill Romance

export const Skill_Romance_III = {
  name: 'Skill Romance III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Skill Romance II' || node.level < 5
} as NewEvoNode;

export const Skill_Romance_II = {
  name: 'Skill Romance II',
  affects: 'none',
  children: [Skill_Romance_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Skill Romance I' || node.level < 5
} as NewEvoNode;

export const Skill_Romance_I = {
  name: 'Skill Romance I',
  affects: 'none',
  children: [Skill_Romance_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Passive Income I' || node.level < 5
} as NewEvoNode;

// Attack Romance

export const Attack_Romance_III = {
  name: 'Attack Romance III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Attack Romance II' || node.level < 5
} as NewEvoNode;

export const Attack_Romance_II = {
  name: 'Attack Romance II',
  affects: 'none',
  children: [Attack_Romance_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Attack Romance I' || node.level < 5
} as NewEvoNode;

export const Attack_Romance_I = {
  name: 'Attack Romance I',
  affects: 'none',
  children: [Attack_Romance_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Passive Income I' || node.level < 5
} as NewEvoNode;

// Passive Income

export const Passive_Income_IV = {
  name: 'Passive Income IV',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  locked: (node: NewEvoNode) => node.name !== 'Passive Income III' || node.level < 5,
  apply: () => 0
} as NewEvoNode;

export const Passive_Income_III = {
  name: 'Passive Income III',
  affects: 'none',
  children: [Passive_Income_IV],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Passive Income II' || node.level < 5
} as NewEvoNode;

export const Passive_Income_II = {
  name: 'Passive Income II',
  affects: 'none',
  children: [Passive_Income_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Passive Income I' || node.level < 5
} as NewEvoNode;

export const Passive_Income_I = {
  name: 'Passive Income I',
  affects: 'none',
  children: [Skill_Romance_I, Attack_Romance_I, Passive_Income_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => false
} as NewEvoNode;

/** Artillery Nodes */

// Artillery Normal Attack Up

export const Artillery_Heat = {
  name: 'Artillery Heat',
  affects: 'damage',
  children: [],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const {
      agent,
      node,
      fight: { time }
    } = params;

    agent.applied_effects.push(
      new EffectDOT({
        type: EffectTypeEnum.DOT,
        begin: time,
        duration: 1,
        interval: 1,
        damage: () => agent.stats.normal_attack * 0.02 * node.level
      })
    );

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Artillery Headshot I' || node.level < 5
} as NewEvoNode;

export const Artillery_Fast_Reload = {
  name: 'Artillery Fast Reload',
  affects: 'none',
  children: [Artillery_Heat],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Artillery Normal Attack Up' || node.level < 5
} as NewEvoNode;

export const Artillery_Normal_Attack_Up = {
  name: 'Artillery Normal Attack Up',
  affects: 'none',
  children: [Artillery_Fast_Reload],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Artillery Headshot I' || node.level < 5
} as NewEvoNode;

// Artillery Gel Injection

export const Artillery_Gel_Injection_III = {
  name: 'Artillery Gel Injection III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

export const Artillery_Gel_Injection_II = {
  name: 'Artillery Gel Injection II',
  affects: 'none',
  children: [Artillery_Gel_Injection_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

export const Artillery_Gel_Injection_I = {
  name: 'Artillery Gel Injection I',
  affects: 'none',
  children: [Artillery_Gel_Injection_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

// Artiller Headshot

export const Artillery_Headshot_IV = {
  name: 'Artillery Headshot IV',
  affects: 'damage',
  children: [],
  level: 0,
  rate: 0.3,
  apply: apply_artillery_headshot,
  locked: (node: NewEvoNode) => node.name !== 'Artillery Headshot III' || node.level < 5
} as NewEvoNode;

export const Artillery_Headshot_III = {
  name: 'Artillery Headshot III',
  affects: 'damage',
  children: [Artillery_Headshot_IV],
  level: 0,
  rate: 0.3,
  apply: apply_artillery_headshot,
  locked: (node: NewEvoNode) => node.name !== 'Artillery Headshot II' || node.level < 5
} as NewEvoNode;

export const Artillery_Headshot_II = {
  name: 'Artillery Headshot II',
  affects: 'damage',
  children: [Artillery_Headshot_III],
  level: 0,
  rate: 0.3,
  apply: apply_artillery_headshot,
  locked: (node: NewEvoNode) => node.name !== 'Artillery Headshot I' || node.level < 5
} as NewEvoNode;

export const Artillery_Headshot_I = {
  name: 'Artillery Headshot I',
  affects: 'damage',
  children: [Artillery_Normal_Attack_Up, Artillery_Headshot_II, Artillery_Gel_Injection_I],
  level: 0,
  rate: 0.3,
  apply: apply_artillery_headshot,
  locked: () => false
} as NewEvoNode;

/** Gunner Nodes */

// Gunner Faster Reload

export const Gunner_Instant_Reload = {
  name: 'Gunner Instant Reload',
  affects: 'damage',
  children: [],
  level: 0,
  rate: 0.02,
  apply: (params: EvoNodeParamType) => {
    const { node } = params;
    const activation_chance = 2 + node.level;

    if (Math.random() < activation_chance) {
      return 2;
    }

    return 0;
  },
  locked: (node: NewEvoNode) => node.name !== 'Gunner Faster Reload II' || node.level < 5
} as NewEvoNode;

export const Gunner_Faster_Reload_II = {
  name: 'Gunner Faster Reload II',
  affects: 'none',
  children: [Gunner_Instant_Reload],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

export const Gunner_Faster_Reload_I = {
  name: 'Gunner Faster Reload I',
  affects: 'none',
  children: [Gunner_Faster_Reload_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

// Gunner Shockwave

export const Gunner_Shockwave_III = {
  name: 'Gunner Shockwave III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Gunner Shockwave II' || node.level < 5
} as NewEvoNode;

export const Gunner_Shockwave_II = {
  name: 'Gunner Shockwave II',
  affects: 'none',
  children: [Gunner_Shockwave_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Gunner Shockwave I' || node.level < 5
} as NewEvoNode;

export const Gunner_Shockwave_I = {
  name: 'Gunner Shockwave I',
  affects: 'none',
  children: [Gunner_Shockwave_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Gunner Basic Training I' || node.level < 5
} as NewEvoNode;

// Gunner Basic Training

export const Gunner_Basic_Training_IV = {
  name: 'Gunner Basic Training IV',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

export const Gunner_Basic_Training_III = {
  name: 'Gunner Basic Training III',
  affects: 'none',
  children: [Gunner_Basic_Training_IV],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

export const Gunner_Basic_Training_II = {
  name: 'Gunner Basic Training II',
  affects: 'none',
  children: [Gunner_Basic_Training_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

export const Gunner_Basic_Training_I = {
  name: 'Gunner Basic Training I',
  affects: 'none',
  children: [Gunner_Faster_Reload_I, Gunner_Basic_Training_II, Gunner_Shockwave_I],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => true
} as NewEvoNode;

/** Striker Nodes */

// Striker Damage Enhancer

export const Striker_Damage_Enhancer_III = {
  name: 'Striker Damage Enhancer III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Striker Damage Enhancer II' || node.level < 5
} as NewEvoNode;

export const Striker_Damage_Enhancer_II = {
  name: 'Striker Damage Enhancer II',
  affects: 'none',
  children: [Striker_Damage_Enhancer_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Striker Damage Enhancer I' || node.level < 5
} as NewEvoNode;

export const Striker_Damage_Enhancer_I = {
  name: 'Striker Damage Enhancer I',
  affects: 'none',
  children: [Striker_Damage_Enhancer_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage I' || node.level < 5
} as NewEvoNode;

// Striker Critical Rage

export const Striker_Critical_Rage_III = {
  name: 'Striker Critical Rage III',
  affects: 'damage',
  children: [],
  level: 0,
  rate: 0.12,
  apply: apply_striker_rage,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage I' || node.level < 5
} as NewEvoNode;

export const Striker_Critical_Rage_II = {
  name: 'Striker Critical Rage II',
  affects: 'damage',
  children: [Striker_Critical_Rage_III],
  level: 0,
  rate: 0.08,
  apply: apply_striker_rage,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage I' || node.level < 5
} as NewEvoNode;

export const Striker_Critical_Rage_I = {
  name: 'Striker Critical Rage I',
  affects: 'damage',
  children: [Striker_Critical_Rage_II],
  level: 0,
  rate: 0.04,
  apply: apply_striker_rage,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage I' || node.level < 5
} as NewEvoNode;

// Striker Rage

export const Striker_Rage_IV = {
  name: 'Striker Rage IV',
  affects: 'damage',
  children: [],
  level: 0,
  rate: 0.1,
  apply: apply_striker_rage,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage III' || node.level < 5
} as NewEvoNode;

export const Striker_Rage_III = {
  name: 'Striker Rage III',
  affects: 'damage',
  children: [Striker_Rage_IV],
  level: 0,
  rate: 0.08,
  apply: apply_striker_rage,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage II' || node.level < 5
} as NewEvoNode;

export const Striker_Rage_II = {
  name: 'Striker Rage II',
  affects: 'damage',
  children: [Striker_Rage_III],
  level: 0,
  rate: 0.06,
  apply: apply_striker_rage,
  locked: (node: NewEvoNode) => node.name !== 'Striker Rage I' || node.level < 5
} as NewEvoNode;

export const Striker_Rage_I = {
  name: 'Striker Rage I',
  affects: 'damage',
  children: [Striker_Damage_Enhancer_I, Striker_Critical_Rage_I, Striker_Rage_II],
  level: 0,
  rate: 0.04,
  apply: apply_striker_rage,
  locked: () => false
} as NewEvoNode;

/** Support Nodes */

// Support Gunner Booster

export const Support_Gunner_Booster_III = {
  name: 'Support Gunner Booster III',
  affects: 'stats',
  children: [],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.3 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Gunner)
      .forEach((agent) => {
        agent.stats.skill_damage *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Gunner Booster II' || node.level < 5
} as NewEvoNode;

export const Support_Gunner_Booster_II = {
  name: 'Support Gunner Booster II',
  affects: 'stats',
  children: [Support_Gunner_Booster_III],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.15 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Gunner)
      .forEach((agent) => {
        agent.stats.attack_speed *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Gunner Booster I' || node.level < 5
} as NewEvoNode;

export const Support_Gunner_Booster_I = {
  name: 'Support Gunner Booster I',
  affects: 'stats',
  children: [Support_Gunner_Booster_II],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.5 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Gunner)
      .forEach((agent) => {
        agent.stats.normal_attack *= multiplier;
        agent.stats.skill_damage *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Damage Amplify I' || node.level < 5
} as NewEvoNode;

// Support Artillery Booster

export const Support_Artillery_Booster_III = {
  name: 'Support Artillery Booster III',
  affects: 'stats',
  children: [],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.3 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Artillery)
      .forEach((agent) => {
        agent.stats.skill_damage *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Artillery Booster II' || node.level < 5
} as NewEvoNode;

export const Support_Artillery_Booster_II = {
  name: 'Support Artillery Booster II',
  affects: 'stats',
  children: [Support_Artillery_Booster_III],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.15 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Artillery)
      .forEach((agent) => {
        agent.stats.attack_speed *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Artillery Booster I' || node.level < 5
} as NewEvoNode;

export const Support_Artillery_Booster_I = {
  name: 'Support Artillery Booster I',
  affects: 'stats',
  children: [Support_Artillery_Booster_II],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.5 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Artillery)
      .forEach((agent) => {
        agent.stats.normal_attack *= multiplier;
        agent.stats.skill_damage *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Damage Amplify I' || node.level < 5
} as NewEvoNode;

// Support Striker Booster

export const Support_Striker_Booster_III = {
  name: 'Support Striker Booster III',
  affects: 'stats',
  children: [],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.3 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Striker)
      .forEach((agent) => {
        agent.stats.skill_damage *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Striker Booster II' || node.level < 5
} as NewEvoNode;

export const Support_Striker_Booster_II = {
  name: 'Support Striker Booster II',
  affects: 'stats',
  children: [Support_Striker_Booster_III],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.15 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Striker)
      .forEach((agent) => {
        agent.stats.attack_speed *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Striker Booster I' || node.level < 5
} as NewEvoNode;

export const Support_Striker_Booster_I = {
  name: 'Support Striker Booster I',
  affects: 'stats',
  children: [Support_Striker_Booster_II],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.5 * node.level;

    fight.team
      .filter((agent) => agent.class === ClassEnum.Striker)
      .forEach((agent) => {
        agent.stats.normal_attack *= multiplier;
        agent.stats.skill_damage *= multiplier;
      });

    return 1;
  },
  locked: (node: NewEvoNode) => node.name !== 'Support Damage Amplify I' || node.level < 5
} as NewEvoNode;

// Support Damage Amplify

export const Support_Damage_Amplify_I = {
  name: 'Support Damage Amplify I',
  affects: 'stats',
  children: [Support_Gunner_Booster_I, Support_Artillery_Booster_I, Support_Striker_Booster_I],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { fight, node } = params;
    const multiplier = 1 + 0.1 * node.level;

    fight.team.forEach((agent) => {
      agent.stats.normal_attack *= multiplier;
      agent.stats.skill_damage *= multiplier;
    });

    return 1;
  },
  locked: () => false
} as NewEvoNode;

/** PVP Nodes */

// Instinct

export const Instinct_III = {
  name: 'Instinct III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Instinct II' || node.level < 5
} as NewEvoNode;

export const Instinct_II = {
  name: 'Instinct II',
  affects: 'none',
  children: [Instinct_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Instinct I' || node.level < 5
} as NewEvoNode;

export const Instinct_I = {
  name: 'Instinct I',
  affects: 'none',
  children: [Instinct_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Damage Boost' || node.level < 5
} as NewEvoNode;

// Mortal Strike

export const Mortal_Strike_III = {
  name: 'Mortal Strike III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Mortal Strike II' || node.level < 5
} as NewEvoNode;

export const Mortal_Strike_II = {
  name: 'Mortal Strike II',
  affects: 'none',
  children: [Mortal_Strike_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Mortal Strike I' || node.level < 5
} as NewEvoNode;

export const Mortal_Strike_I = {
  name: 'Mortal Strike I',
  affects: 'none',
  children: [Mortal_Strike_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Damage Boost' || node.level < 5
} as NewEvoNode;

// Life Steal

export const Life_Steal_III = {
  name: 'Life Steal III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Life Steal II' || node.level < 5
} as NewEvoNode;

export const Life_Steal_II = {
  name: 'Life Steal II',
  affects: 'none',
  children: [Life_Steal_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Life Steal I' || node.level < 5
} as NewEvoNode;

export const Life_Steal_I = {
  name: 'Life Steal I',
  affects: 'none',
  children: [Life_Steal_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Damage Boost' || node.level < 5
} as NewEvoNode;

// Damage Boost

export const Damage_Boost = {
  name: 'Damage Boost',
  affects: 'stats',
  children: [Instinct_I, Mortal_Strike_I, Life_Steal_I],
  level: 0,
  rate: 0,
  apply: (params: EvoNodeParamType) => {
    const { agent, node } = params;
    const multiplier = 1 + 0.01 * node.level;

    agent.stats.normal_attack *= multiplier;
    agent.stats.skill_damage *= multiplier;

    return 1;
  },
  locked: () => false
} as NewEvoNode;

// Support Shutdown

export const Support_Shutdown_III = {
  name: 'Support Shutdown III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shutdown II' || node.level < 5
} as NewEvoNode;

export const Support_Shutdown_II = {
  name: 'Support Shutdown II',
  affects: 'none',
  children: [Support_Shutdown_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shutdown I' || node.level < 5
} as NewEvoNode;

export const Support_Shutdown_I = {
  name: 'Support Shutdown I',
  affects: 'none',
  children: [Support_Shutdown_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shield Amplify I' || node.level < 5
} as NewEvoNode;

// Support Power Break

export const Support_Power_Break_III = {
  name: 'Support Power Break III',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Power Break II' || node.level < 5
} as NewEvoNode;

export const Support_Power_Break_II = {
  name: 'Support Power Break II',
  affects: 'none',
  children: [Support_Power_Break_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Power Break I' || node.level < 5
} as NewEvoNode;

export const Support_Power_Break_I = {
  name: 'Support Power Break I',
  affects: 'none',
  children: [Support_Power_Break_II],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shield Amplify I' || node.level < 5
} as NewEvoNode;

// Support Shield Amplify

export const Support_Shield_Amplify_IV = {
  name: 'Support Shield Amplify IV',
  affects: 'none',
  children: [],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shield Amplify III' || node.level < 5
} as NewEvoNode;

export const Support_Shield_Amplify_III = {
  name: 'Support Shield Amplify III',
  affects: 'none',
  children: [Support_Shield_Amplify_IV],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shield Amplify II' || node.level < 5
} as NewEvoNode;

export const Support_Shield_Amplify_II = {
  name: 'Support Shield Amplify II',
  affects: 'none',
  children: [Support_Shield_Amplify_III],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: (node: NewEvoNode) => node.name !== 'Support Shield Amplify I' || node.level < 5
} as NewEvoNode;

export const Support_Shield_Amplify_I = {
  name: 'Support Shield Amplify I',
  affects: 'none',
  children: [Support_Shutdown_I, Support_Shield_Amplify_II, Support_Power_Break_I],
  level: 0,
  rate: 0,
  apply: () => 0,
  locked: () => false
} as NewEvoNode;

export const EvoNodes = [
  // Global
  Passive_Income_I,
  Passive_Income_II,
  Passive_Income_III,
  Passive_Income_IV,
  Skill_Romance_I,
  Skill_Romance_II,
  Skill_Romance_III,
  Attack_Romance_I,
  Attack_Romance_II,
  Attack_Romance_III,
  // Artillery
  Artillery_Headshot_I,
  Artillery_Headshot_II,
  Artillery_Headshot_III,
  Artillery_Headshot_IV,
  Artillery_Normal_Attack_Up,
  Artillery_Fast_Reload,
  Artillery_Heat,
  Artillery_Gel_Injection_I,
  Artillery_Gel_Injection_II,
  Artillery_Gel_Injection_III,
  // Gunner
  Gunner_Basic_Training_I,
  Gunner_Basic_Training_II,
  Gunner_Basic_Training_III,
  Gunner_Basic_Training_IV,
  Gunner_Faster_Reload_I,
  Gunner_Faster_Reload_II,
  Gunner_Instant_Reload,
  Gunner_Shockwave_I,
  Gunner_Shockwave_II,
  Gunner_Shockwave_III,
  // Striker
  Striker_Rage_I,
  Striker_Rage_II,
  Striker_Rage_III,
  Striker_Rage_IV,
  Striker_Critical_Rage_I,
  Striker_Critical_Rage_II,
  Striker_Critical_Rage_III,
  Striker_Damage_Enhancer_I,
  Striker_Damage_Enhancer_II,
  Striker_Damage_Enhancer_III,
  // Support
  Support_Damage_Amplify_I,
  Support_Artillery_Booster_I,
  Support_Artillery_Booster_II,
  Support_Artillery_Booster_III,
  Support_Gunner_Booster_I,
  Support_Gunner_Booster_II,
  Support_Gunner_Booster_III,
  Support_Striker_Booster_I,
  Support_Striker_Booster_II,
  Support_Striker_Booster_III,
  // PVP Artillery|Gunner|Striker
  Damage_Boost,
  Instinct_I,
  Instinct_II,
  Instinct_III,
  Mortal_Strike_I,
  Mortal_Strike_II,
  Mortal_Strike_III,
  Life_Steal_I,
  Life_Steal_II,
  Life_Steal_III,
  // PVP Support
  Support_Shield_Amplify_I,
  Support_Shield_Amplify_II,
  Support_Shield_Amplify_III,
  Support_Shield_Amplify_IV,
  Support_Shutdown_I,
  Support_Shutdown_II,
  Support_Shutdown_III,
  Support_Power_Break_I,
  Support_Power_Break_II,
  Support_Power_Break_III
];

export const Artillery_Nodes = [Passive_Income_I, Artillery_Headshot_I, Damage_Boost];
export const Gunner_Nodes = [Passive_Income_I, Gunner_Basic_Training_I, Damage_Boost];
export const Striker_Nodes = [Passive_Income_I, Striker_Rage_I, Damage_Boost];
export const Support_Nodes = [Passive_Income_I, Support_Damage_Amplify_I, Support_Shield_Amplify_I];
