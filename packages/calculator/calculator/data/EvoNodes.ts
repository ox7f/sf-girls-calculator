import { ClassEnum } from '../enums';
import { ApplyParams, EvoNode, NewEvoNode } from '../model';

/** Helper Functions */

const get_SR_Increase = (node: EvoNode, baseValue: number) => {
  const damage_increase = baseValue * node.level;
  return { normalAttack: damage_increase, skillDamage: damage_increase };
};

const get_SCR_Increase = (node: EvoNode, baseValue: number) => {
  const criticalRateIncrease = baseValue * node.level;
  return { critical_rate: criticalRateIncrease };
};

/** Global Nodes */

// Skill Romance

export const SK_III = { name: 'Skill Romance III' } as NewEvoNode;
export const SK_II = { name: 'Skill Romance II', children: [SK_III] } as NewEvoNode;
export const SK_I = { name: 'Skill Romance I', children: [SK_II] } as NewEvoNode;

// Attack Romance

export const AR_III = { name: 'Attack Romance III' } as NewEvoNode;
export const AR_II = { name: 'Attack Romance II', children: [AR_III] } as NewEvoNode;
export const AR_I = { name: 'Attack Romance I', children: [AR_II] } as NewEvoNode;

// Passive Income

export const PI_IV = { name: 'Passive Income IV' };
export const PI_III = { name: 'Passive Income III', children: [PI_IV] } as NewEvoNode;
export const PI_II = { name: 'Passive Income II', children: [PI_III] } as NewEvoNode;
export const PI_I = { name: 'Passive Income I', children: [SK_I, AR_I, PI_II] } as NewEvoNode;

/** Artillery Nodes */

// Artillery Normal Attack Up

export const AH = {
  name: 'Artillery Heat',
  apply: (params: ApplyParams) => ({ dotDamage: 0.02 * params.node.level })
} as NewEvoNode;
export const AFR = { name: 'Artillery Fast Reload', children: [AH] } as NewEvoNode;
export const ANA_Up = { name: 'Artillery Normal Attack Up', children: [AFR] } as NewEvoNode;

// Artillery Gel Injection

export const AGI_III = { name: 'Artillery Gel Injection III' } as NewEvoNode;
export const AGI_II = { name: 'Artillery Gel Injection II', children: [AGI_III] } as NewEvoNode;
export const AGI_I = { name: 'Artillery Gel Injection I', children: [AGI_II] } as NewEvoNode;

// Artillery Headshot

export const AHS_IV = {
  name: 'Artillery Headshot IV',
  apply: (params: ApplyParams) => ({ doubleDamage: 0.003 * params.node.level })
} as NewEvoNode;
export const AHS_III = {
  name: 'Artillery Headshot III',
  children: [AHS_IV],
  apply: (params: ApplyParams) => ({ doubleDamage: 0.003 * params.node.level })
} as NewEvoNode;
export const AHS_II = {
  name: 'Artillery Headshot II',
  children: [AHS_III],
  apply: (params: ApplyParams) => ({ doubleDamage: 0.003 * params.node.level })
} as NewEvoNode;
export const AHS_I = {
  name: 'Artillery Headshot I',
  children: [ANA_Up, AHS_II, AGI_I],
  apply: (params: ApplyParams) => ({ doubleDamage: 0.003 * params.node.level })
} as NewEvoNode;

/** Gunner Nodes */

// Gunner Faster Reload

export const GIR = {
  name: 'Gunner Instant Reload',
  apply: (params: ApplyParams) => ({
    doubleHit: params.node.level === 0 ? 0 : (2 + params.node.level) / 100
  })
} as NewEvoNode;
export const GFR_II = { name: 'Gunner Faster Reload II', children: [GIR] } as NewEvoNode;
export const GFR_I = { name: 'Gunner Faster Reload I', children: [GFR_II] } as NewEvoNode;

// Gunner Shockwave

export const GSW_III = { name: 'Gunner Shockwave III' } as NewEvoNode;
export const GSW_II = { name: 'Gunner Shockwave II', children: [GSW_III] } as NewEvoNode;
export const GSW_I = { name: 'Gunner Shockwave I', children: [GSW_II] } as NewEvoNode;

// Gunner Basic Training

export const GBT_IV = { name: 'Gunner Basic Training IV' } as NewEvoNode;
export const GBT_III = { name: 'Gunner Basic Training III', children: [GBT_IV] } as NewEvoNode;
export const GBT_II = { name: 'Gunner Basic Training II', children: [GBT_III] } as NewEvoNode;
export const GBT_I = { name: 'Gunner Basic Training I', children: [GFR_I, GBT_II, GSW_I] } as NewEvoNode;

/** Striker Nodes */

// Striker Damage Enhancer

export const STE_III = { name: 'Striker Damage Enhancer III' } as NewEvoNode;
export const STE_II = { name: 'Striker Damage Enhancer II', children: [STE_III] } as NewEvoNode;
export const STE_I = { name: 'Striker Damage Enhancer I', children: [STE_II] } as NewEvoNode;

// Striker Critical Rage

export const SCR_III = {
  name: 'Striker Critical Rage III',
  apply: (params: ApplyParams) => get_SCR_Increase(params.node, 0.0012)
} as NewEvoNode;
export const SCR_II = {
  name: 'Striker Critical Rage II',
  children: [SCR_III],
  apply: (params: ApplyParams) => get_SCR_Increase(params.node, 0.0008)
} as NewEvoNode;
export const SCR_I = {
  name: 'Striker Critical Rage I',
  children: [SCR_II],
  apply: (params: ApplyParams) => get_SCR_Increase(params.node, 0.0004)
} as NewEvoNode;

// Striker Rage

export const SR_IV = {
  name: 'Striker Rage IV',
  apply: (params: ApplyParams) => get_SR_Increase(params.node, 0.001)
} as NewEvoNode;
export const SR_III = {
  name: 'Striker Rage III',
  children: [SR_IV],
  apply: (params: ApplyParams) => get_SR_Increase(params.node, 0.0008)
} as NewEvoNode;
export const SR_II = {
  name: 'Striker Rage II',
  children: [SR_III],
  apply: (params: ApplyParams) => get_SR_Increase(params.node, 0.0006)
} as NewEvoNode;
export const SR_I = {
  name: 'Striker Rage I',
  children: [STE_I, SCR_I, SR_II],
  apply: (params: ApplyParams) => get_SR_Increase(params.node, 0.0004)
} as NewEvoNode;

/** Support Nodes */

// Support Gunner Booster

export const SGB_III = {
  name: 'Support Gunner Booster III',
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.GUNNER)
      .forEach((agent) => {
        const bonus = 1 + 0.003 * params.node.level;
        agent.stats.skillDamage *= bonus;
      });
    return {};
  }
} as NewEvoNode;
export const SGB_II = {
  name: 'Support Gunner Booster II',
  children: [SGB_III],
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.GUNNER)
      .forEach((agent) => {
        const bonus = 1 + 0.0015 * params.node.level;
        agent.stats.attackSpeed *= bonus;
      });
    return {};
  }
} as NewEvoNode;
export const SGB_I = {
  name: 'Support Gunner Booster I',
  children: [SGB_II],
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.GUNNER)
      .forEach((agent) => {
        const na_bonus = 1 + 0.005 * params.node.level;
        const sk_bonus = 1 + 0.005 * params.node.level;
        agent.stats.normalAttack *= na_bonus;
        agent.stats.skillDamage *= sk_bonus;
      });
    return {};
  }
} as NewEvoNode;

// Support Artillery Booster

export const SAB_III = {
  name: 'Support Artillery Booster III',
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.ARTILLERY)
      .forEach((agent) => {
        const bonus = 1 + 0.003 * params.node.level;
        agent.stats.skillDamage *= bonus;
      });
    return {};
  }
} as NewEvoNode;
export const SAB_II = {
  name: 'Support Artillery Booster II',
  children: [SAB_III],
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.ARTILLERY)
      .forEach((agent) => {
        const bonus = 1 + 0.0015 * params.node.level;
        agent.stats.attackSpeed *= bonus;
      });
    return {};
  }
} as NewEvoNode;
export const SAB_I = {
  name: 'Support Artillery Booster I',
  children: [SAB_II],
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.ARTILLERY)
      .forEach((agent) => {
        const na_bonus = 1 + 0.005 * params.node.level;
        const sk_bonus = 1 + 0.005 * params.node.level;
        agent.stats.normalAttack *= na_bonus;
        agent.stats.skillDamage *= sk_bonus;
      });
    return {};
  }
} as NewEvoNode;

// Support Striker Booster

export const SSB_III = {
  name: 'Support Striker Booster III',
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.STRIKER)
      .forEach((agent) => {
        const bonus = 1 + 0.003 * params.node.level;
        agent.stats.skillDamage *= bonus;
      });
    return {};
  }
} as NewEvoNode;
export const SSB_II = {
  name: 'Support Striker Booster II',
  children: [SSB_III],
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.STRIKER)
      .forEach((agent) => {
        const bonus = 1 + 0.0015 * params.node.level;
        agent.stats.attackSpeed *= bonus;
      });
    return {};
  }
} as NewEvoNode;
export const SSB_I = {
  name: 'Support Striker Booster I',
  children: [SSB_II],
  apply: (params: ApplyParams) => {
    params.fight.team
      .filter((agent) => agent.class === ClassEnum.STRIKER)
      .forEach((agent) => {
        const na_bonus = 1 + 0.005 * params.node.level;
        const sk_bonus = 1 + 0.005 * params.node.level;
        agent.stats.normalAttack *= na_bonus;
        agent.stats.skillDamage *= sk_bonus;
      });
    return {};
  }
} as NewEvoNode;

// Support Damage Amplify

export const SDA_I = {
  name: 'Support Damage Amplify I',
  children: [SGB_I, SAB_I, SSB_I],
  apply: (params: ApplyParams) => {
    params.fight.team.forEach((agent) => {
      const na_bonus = 1 + 0.001 * params.node.level;
      const sk_bonus = 1 + 0.001 * params.node.level;
      agent.stats.normalAttack *= na_bonus;
      agent.stats.skillDamage *= sk_bonus;
    });
    return {};
  }
} as NewEvoNode;

/** PVP Nodes */

// Instinct

export const I_III = { name: 'Instinct III' } as NewEvoNode;
export const I_II = { name: 'Instinct II', children: [I_III] } as NewEvoNode;
export const I_I = { name: 'Instinct I', children: [I_II] } as NewEvoNode;

// Mortal Strike

export const MS_III = { name: 'Mortal Strike III' } as NewEvoNode;
export const MS_II = { name: 'Mortal Strike II', children: [MS_III] } as NewEvoNode;
export const MS_I = { name: 'Mortal Strike I', children: [MS_II] } as NewEvoNode;

// Life Steal

export const LS_III = { name: 'Life Steal III' } as NewEvoNode;
export const LS_II = { name: 'Life Steal II', children: [LS_III] } as NewEvoNode;
export const LS_I = { name: 'Life Steal I', children: [LS_II] } as NewEvoNode;

// Damage Boost

export const DB = {
  name: 'Damage Boost',
  children: [I_I, MS_I, LS_I],
  apply: (params: ApplyParams) => {
    const { agent, fight, node } = params;

    // TODO: better check? like instanceof Ditto / ! instanceof Target
    if (fight.target.name !== 'Ditto') {
      return {};
    }

    const na_bonus = 1 + 0.01 * node.level;
    const sk_bonus = 1 + 0.01 * node.level;
    agent.stats.normalAttack *= na_bonus;
    agent.stats.skillDamage *= sk_bonus;
    return {};
  }
} as NewEvoNode;

// Support Shutdown

export const SSD_III = { name: 'Support Shutdown III' } as NewEvoNode;
export const SSD_II = { name: 'Support Shutdown II', children: [SSD_III] } as NewEvoNode;
export const SSD_I = { name: 'Support Shutdown I', children: [SSD_II] } as NewEvoNode;

// Support Power Break

export const SPB_III = { name: 'Support Power Break III' } as NewEvoNode;
export const SPB_II = { name: 'Support Power Break II', children: [SPB_III] } as NewEvoNode;
export const SPB_I = { name: 'Support Power Break I', children: [SPB_II] } as NewEvoNode;

// Support Shield Amplify

export const SSA_IV = { name: 'Support Shield Amplify IV' } as NewEvoNode;
export const SSA_III = { name: 'Support Shield Amplify III', children: [SSA_IV] } as NewEvoNode;
export const SSA_II = { name: 'Support Shield Amplify II', children: [SSA_III] } as NewEvoNode;
export const SSA_I = { name: 'Support Shield Amplify I', children: [SSD_I, SSA_II, SPB_I] } as NewEvoNode;

export const EvoNodes = [
  // Global
  PI_I,
  PI_II,
  PI_III,
  PI_IV,
  SK_I,
  SK_II,
  SK_III,
  AR_I,
  AR_II,
  AR_III,
  // Artillery
  AHS_I,
  AHS_II,
  AHS_III,
  AHS_IV,
  ANA_Up,
  AFR,
  AH,
  AGI_I,
  AGI_II,
  AGI_III,
  // Gunner
  GBT_I,
  GBT_II,
  GBT_III,
  GBT_IV,
  GFR_I,
  GFR_II,
  GIR,
  GSW_I,
  GSW_II,
  GSW_III,
  // Striker
  SR_I,
  SR_II,
  SR_III,
  SR_IV,
  SCR_I,
  SCR_II,
  SCR_III,
  STE_I,
  STE_II,
  STE_III,
  // Support
  SDA_I,
  SAB_I,
  SAB_II,
  SAB_III,
  SGB_I,
  SGB_II,
  SGB_III,
  SSB_I,
  SSB_II,
  SSB_III,
  // PVP Artillery|Gunner|Striker
  DB,
  I_I,
  I_II,
  I_III,
  MS_I,
  MS_II,
  MS_III,
  LS_I,
  LS_II,
  LS_III,
  // PVP Support
  SSA_I,
  SSA_II,
  SSA_III,
  SSA_IV,
  SSD_I,
  SSD_II,
  SSD_III,
  SPB_I,
  SPB_II,
  SPB_III
] as NewEvoNode[];

export const Artillery_Nodes = [PI_I, AHS_I, DB] as NewEvoNode[];
export const Gunner_Nodes = [PI_I, GBT_I, DB] as NewEvoNode[];
export const Striker_Nodes = [PI_I, SR_I, DB] as NewEvoNode[];
export const Support_Nodes = [PI_I, SDA_I, SSA_I] as NewEvoNode[];
