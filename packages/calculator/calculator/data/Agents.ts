import { AttackModeEnum, ClassEnum, CupSizeEnum, EffectTypeEnum, OrganizationEnum } from '../enums';
import { EffectParams, NewAgent, NewEffectDamage, NewEffectDOT, NewEffect, NewSkill, NewStats } from '../model';
import { EvoNodes } from '../data';

export const Yuki = {
  index: 1,
  name: 'Yuki',
  title: 'Valkyrie',
  bio: "Despite her warm beauty and natural youthfulness, Yuki is otherwise a very cold individual. She takes her job very seriously in the WIO, and refuses to let social interaction get in the way of her duty. A fact she'll bluntly tell you.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 975,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 927,
    baseSkillDamage: 927,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Precision Assault',
    description: 'increases the damage to 1500% and attack speed to 220% for 4 seconds. cooldown: 8',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2.2;
          agent.stats.normalAttack *= 15;
          agent.stats.skillDamage *= 15;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2.2;
          agent.stats.normalAttack /= 15;
          agent.stats.skillDamage /= 15;
        },
        duration: 4
      } as NewEffect
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Neve = {
  index: 2,
  name: 'Neve',
  title: 'Frostbite',
  bio: "A literal 'ice queen', Neve wants this war business to be done and over with already. Impatient and cruel, even to her commanding officer, she has few friends and many enemies. There's no denying she's beautiful, but most are too wary of that poisonous tongue to try getting to know her.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 601,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 569,
    baseSkillDamage: 569,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Absolute Zero',
    description: 'summons an iceberg dealing 26428 damage and slows down enemies to 50% for 5 seconds. cooldown: 17',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 26428 } as NewEffectDamage],
    cooldown: 17
  } as NewSkill
} as NewAgent;

export const Ayu = {
  index: 3,
  name: 'Ayu',
  title: 'Spectre',
  bio: "Trained in advanced weaponry, Ayu should naturally be a very tough individual. However, despite being skilled at her craft, she's incredibly naive and impressionable, often times not realizing the gravity of a situation without help from her peers.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 461,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 379,
    baseSkillDamage: 379
  } as NewStats,
  skill: {
    name: 'Raining Bullets',
    description: 'shoots a piercing laser beam dealing 45536 damage. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 45536 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Mika = {
  index: 4,
  name: 'Mika',
  title: 'Maelstrom',
  bio: "Mika is a naturally kind individual. She hasn't let the horrors of war change her personality, and remains one of the cheeriest members of the SF alliance. Soldiers love being put in a team with her, simply because of how happy and bubbly she is.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 487,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 463,
    baseSkillDamage: 463
  } as NewStats,
  skill: {
    name: "Ocean's Torrent",
    description: 'smashes the ground and creates 4 sword-quakes each dealing 11422 damage. cooldown: 11',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 11422 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 11422 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 11422 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 11422 } as NewEffectDamage
    ],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Sora = {
  index: 5,
  name: 'Sora',
  title: 'Harpy',
  bio: "Sora was originally turned away from the SF for being too young, but after a quick display of her skills, they were eager to have her join the Earth defense. Timid by nature, her indecisiveness makes her look to the Commander for constant validation, but she'll do whatever it takes to keep her fellow humans safe.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 461,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 379,
    baseSkillDamage: 379,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Death From Above',
    description: 'shoots two electric bullets, each dealing 27891 damage. cooldown: 8',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 27891 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 27891 } as NewEffectDamage
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Ember = {
  index: 6,
  name: 'Ember',
  title: 'The Maniac',
  bio: "For the most part, people just try to stay out of Ember's way. A destructive force all her own, she gets off on the thrill of destroying her enemies. Sometimes it seems like she's having too much fun-this is a war after all-but at least she's pointing her guns in the right direction.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 399,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 362,
    baseSkillDamage: 362,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Dance of Death',
    description: 'shoots 4 enhanced bullets, each dealing 13991 damage cooldown: 8',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 13991 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 13991 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 13991 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 13991 } as NewEffectDamage
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Chiharu = {
  index: 7,
  name: 'Chiharu',
  title: 'Corsair',
  bio: "The military normally wouldn't employ the likes of space pirates or other outlaws to fight alongside their drafted soldiers, but with a situation this dire they couldn't afford to be picky. Chiharu is one of the most renown pirates to occupy Human space. For as wary as the soldiers are fo trusting someone who should technically be their enemy, there's an undeniable charm and wit about her that makes her very likable.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 1248,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 1131,
    baseSkillDamage: 1131
  } as NewStats,
  skill: {
    name: "Dead Man's Curse",
    description: 'shoots a powerful bullet at the monster with the highest health, dealing 65165 damage. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 65165 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Irina = {
  index: 8,
  name: 'Irina',
  title: 'Honeybee',
  bio: "Irina wasn't supposed to be a part of the war effort at all, until someone had the brilliant idea of strapping a missile launcher up to a girl on roller skates. Now, she's the fastest unit they've got on the force, and with her giant weaponry, she's also one of the most deadly.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 627,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 569,
    baseSkillDamage: 569
  } as NewStats,
  skill: {
    name: 'Rocket Ricochet',
    description: 'fires 4 missiles at target, each dealing 14230 damage. cooldown: 6',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 14230 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 14230 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 14230 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 14230 } as NewEffectDamage
    ],
    cooldown: 6
  } as NewSkill
} as NewAgent;

export const Yuuha = {
  index: 9,
  name: 'Yuuha',
  title: 'Lotus',
  bio: "War is no place for a pacifist, yet Yuuha remains in the SF alliance anyway. Fighting goes against everything she believes in, but unlike others, she understands that sometimes, there's no logical alternative.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 733,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 604,
    baseSkillDamage: 604,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Dance of the Lotus',
    description: 'deals 26563 damage and knockbacks all monsters by 1.6 unit distances. cooldown: 16',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 26563 } as NewEffectDamage],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Uzu = {
  index: 10,
  name: 'Uzu',
  title: 'Abyss',
  bio: "Previously employed in aquatic biological and technological research, Uzu saw the SF Alliance as a way to expand her skills. More interested in the benefits of war than the war effort itself, most soldiers don't respect her too much. But she could care less what other people think.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1865,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 1766,
    baseSkillDamage: 1766
  } as NewStats,
  skill: {
    name: 'Crushing Embrace',
    description:
      'releases her tentacles and deals 57490 damage to the surrounding units, knockbacks enemy for 1 unit distance and applies a 1 second mini-stun. cooldown: 16',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 57490 } as NewEffectDamage],
    cooldown: 16
  } as NewSkill
} as NewAgent;

// TODO:
export const Denka = {
  index: 11,
  name: 'Denka',
  title: 'Groundhog',
  bio: "Coming from a family of wealthy investors, Denka begged her parents to let her join the SF. Though she's equipped with the finest weapons and armor money can buy, she's far too cocky for her own good. Her intentions may be pure but people are wary that she's only there to further her family's reputation.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 760,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 723,
    baseSkillDamage: 723
  } as NewStats,
  skill: {
    name: 'Devastating Pincer Strike',
    description: 'shoots 3 electric drills, each dealing 24214 damage. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1, interval: 0.3, damage: () => 24892 } as NewEffectDOT],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Reika = {
  index: 12,
  name: 'Reika',
  title: 'Iris',
  bio: "As the Commander's secretary, Reika has a very stressful and important job to do. Being the right-hand woman of one of the most prominent military figures in the war isn't a small feat. Sometimes she gets flustered and is naturally very shy, but when it comes to her duty she sets her own insecurities aside to protect those she cherishes.",
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 733,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 604,
    baseSkillDamage: 604
  } as NewStats,
  skill: {
    name: 'Might of the Alliance',
    description: 'launches a rocket towards the target, dealing 86932 damage. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1, interval: 1, damage: () => 86932 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

// TODO:
export const Noa = {
  index: 13,
  name: 'Noa',
  title: 'The Professor',
  bio: "A brilliant student in the tech industry, Noa seems only able to function after a dozen cups of coffee or energy drinks. Somewhat sleepy at all times, she is surprisingly alert and ready-for-action at any given moment. People can't believe she's able to create such innovative and efficient technologies for the war effort, but she still manages it somehow.",
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 929,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 880,
    baseSkillDamage: 880,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Enhanced Plasma Cannon',
    description:
      'releases a drone dealing 50922 damage to the target area and slow down to 60% for 6 seconds. cooldown: 15',
    effects: [{ type: EffectTypeEnum.DOT, duration: 6, interval: 0.24, damage: () => 50922 / 25 } as NewEffectDamage],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Neugena = {
  index: 14,
  name: 'Neugena',
  title: 'bucktail',
  bio: "No one's really sure where Neugena came from. Nor are they certain of how she became so skilled at hunting. But one's asking questions, especially when she talks about killing for sport so often. No one wants to become her next prey.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 4.4,
    normalAttack: 356,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 293,
    baseSkillDamage: 293
  } as NewStats,
  skill: {
    name: "Hunter's Sense",
    description:
      'releases a blasting arrow, dealing (default skill damage * 0.00020)% of enemies current hp in a small area (minimum damage = skill damage). cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.DAMAGE,
        damage: (params: EffectParams) => {
          const { agent, target } = params;
          let damage = agent.stats.baseSkillDamage * target.currentHealth * 0.0002;

          if (damage < agent.stats.baseSkillDamage) {
            damage = agent.stats.skillDamage;
          }

          return damage;
        }
      } as NewEffectDamage
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Larisa = {
  index: 15,
  name: 'Larisa',
  title: 'Katyusha',
  bio: "The creation of the SF brought together soldiers of all flocks, including those like Larisa. Her home country naturally does things a little differently than the rest of the world, and she's got an attitude to match. Unconcerned with rules and regulations, sometimes it can be a challenge keeping her in line with your orders.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 1711,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1552,
    baseSkillDamage: 1552,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Guardian of the Motherland',
    description: 'fires a high explosive missile at target locations dealing 69856 damage. cooldown: 11',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 69856 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Rui = {
  index: 16,
  name: 'Rui',
  title: 'Femme Fatale',
  bio: "Rui refused to be given a projectile weapon for the war, instead insisting on wielding her spiked mace. According to her it 'made things a lot more fun'. Her commanding officers weren't too sure what that meant, but as long as she's doing damage, they aren't complaining. Not to mention, her flirty personality is impossible for men to resist.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1014,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 964,
    baseSkillDamage: 964
  } as NewStats,
  skill: {
    name: "Devil's Contract",
    description:
      'enters demonic mode which increases her attack damage to 16382.6, attack range and area for 10 seconds. cooldown: 17',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack += 16382.8;
          agent.stats.skillDamage += 16382.8;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack -= 16382.8;
          agent.stats.skillDamage -= 16382.8;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 17
  } as NewSkill
} as NewAgent;

export const Kotora = {
  index: 17,
  name: 'Kotora',
  title: 'Tiger',
  bio: "It's not uncommon for other soldiers to report concerns regarding Kotora's behavior. She's mischievous and playful, almost exaggerating at times. But despite her to-the-wind philosophy, she enjoys the thrill of the hunt. And luckily for Earth, Kotora considers the invaders the perfect prey.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 832,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 754,
    baseSkillDamage: 754
  } as NewStats,
  skill: {
    name: 'Roar of the Beast',
    description:
      'launches an artillery shell towards the target location, which splits into 4 shells, each dealing 16404 damage. cooldown: 11',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 16404 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 16404 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 16404 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 16404 } as NewEffectDamage
    ],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Vanessa = {
  index: 18,
  name: 'Vanessa',
  title: 'Belle',
  bio: "Vanessa is from a deep underwater city which hasn't quite caught up to the rest of the world's cultural benchmark. Other soldiers often think of her as old-fashioned and out-dated, but an overall sweet gal. Sometimes she can have a hard time feeling at home with the widely-accepted social standard, despite knowing people have the best intentions.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1267,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 1200,
    baseSkillDamage: 1200
  } as NewStats,
  skill: {
    name: 'Banishment of the Beast',
    description: 'creates an electric cage, stunning enemies for 8 seconds. cooldown: 34',
    effects: [],
    cooldown: 34
  } as NewSkill
} as NewAgent;

export const Aoi = {
  index: 19,
  name: 'Aoi',
  title: 'Astro',
  bio: "When it comes to Aoi, what you see is what you get. She's cute and fun-loving, and extremely curious. That sort of personality comes in handy when you're in the business of gathering information. But sometimes she can go a bit too far, prying into things she shouldn't, like the personal lives and secrets of her fellow soldiers.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1275,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1207,
    baseSkillDamage: 1207
  } as NewStats,
  skill: {
    name: 'Gamma Blaster',
    description: 'randomly picks 6 agent(s), add 25% critical rate for 6 seconds. cooldown: 9',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.criticalRate += 0.25));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.criticalRate -= 0.25));
        },
        duration: 6
      } as NewEffect
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Sara = {
  index: 20,
  name: 'Sara',
  title: 'Medusa',
  bio: "Sara has always thought that she had the charm and beauty to sway anyone to do what she wanted. She's seen other women do it, after all, why couldn't she? What she fails to accept is that she is more aptly described as cute rather than sexy, so her attempts at flirtation tend to be seen as humorous, which only pisses her off more.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 3.1,
    normalAttack: 856,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 811,
    baseSkillDamage: 811,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Paralyzing Stare',
    description: 'shoots a gigantic snake dealing 56213 damage. cooldown: 11',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 56213 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Mai = {
  index: 21,
  name: 'Mai',
  title: 'White Lion',
  bio: "In the face of hardship, Mai finds herself keeping a cool head. Rational and calm under pressure, some units have found that Mai is the glue that holds them together, keeping the mission as a primary focus until it is complete. That's also helped by the fact that sheÄs so cute, too. Her trusty lazer-shooting cat also helps too.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 984,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 811,
    baseSkillDamage: 811,
    castTime: 1
  } as NewStats,
  skill: {
    name: "Soldier's Will",
    description: 'shoots bullets rapidly. enemies that were hit wil take 85121 damage once. cooldown: 13',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 85121 } as NewEffectDamage],
    cooldown: 13
  } as NewSkill
} as NewAgent;

// TODO:
export const Tsukiko = {
  index: 22,
  name: 'Tsukiko',
  title: 'Arsenal',
  bio: "SF wanted to experiment to see just how much weaponry you could attach to a soldier before it becomes a liability rather than an asset. Their answer was Tsukiko. She's loaded to the brim with knives, guns and weapons of all kinds, ready for any situation the war throws at her. Of course, the experiment was only partially successful, because Tsukiko is the only soldier in the force capable of working with that much firepower at once.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 1711,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1552,
    baseSkillDamage: 1552,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Bulletstorm',
    description:
      'shoots out a devastating sound wave dealing 23285 damage and increases the damage enemies receive by 35% for 9 seconds. cooldown: 38',
    effects: [
      {
        type: EffectTypeEnum.DEBUFF,
        apply: (params: EffectParams) => {
          const { target } = params;
          target.damageTakenMultiplier *= 1.35;
        },
        remove: (params: EffectParams) => {
          const { target } = params;
          target.damageTakenMultiplier /= 1.35;
        },
        duration: 9
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 4, interval: 1 / 4, damage: () => 1450 } as NewEffectDamage
    ],
    cooldown: 38
  } as NewSkill
} as NewAgent;

export const Yukako = {
  index: 23,
  name: 'Yukako',
  title: 'The Ghost',
  bio: 'Primarily in charge of the tech supplied by the Department of Orbital Defense, Yukako is used to working alone. Her quick wits and handy knowledge of electronics have gotten her far by herself, so working in a team like yours can sometimes catch her off guard.',
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 984,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 811,
    baseSkillDamage: 811
  } as NewStats,
  skill: {
    name: "Spirit's Lethal Kiss",
    description: 'increases the damage of all gunner agents to 150% for 12 seconds. cooldown: 25',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.normalAttack *= 1.5;
              agent.stats.skillDamage *= 1.5;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.normalAttack /= 1.5;
              agent.stats.skillDamage /= 1.5;
            });
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 25
  } as NewSkill
} as NewAgent;

export const Coco = {
  index: 24,
  name: 'Coco',
  title: 'Bearclaw',
  bio: "Coco want nothing to do with this war business, preferring to spend her time gorging on tea and cookies, but when Zeth destroyed her favorite bakery, she couldn't sit by and let it happen. She won't stop until her favorite bakery has been avenged, and will use the money to help rebuild it.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2531,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 2398,
    baseSkillDamage: 2398,
    projectileNumber: 3
  } as NewStats,
  skill: {
    name: 'Thrashing Paws',
    description:
      'she will encourage enemies run 200% faster for 1.5 seconds. and if coco is the only support in the team, she will increases 433% damage of all friendly agents in the team for 7 seconds. cooldown: 6',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          const not_valid = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length > 1;

          if (not_valid) {
            return;
          }

          team.forEach((agent) => {
            agent.stats.normalAttack *= 4.33;
            agent.stats.skillDamage *= 4.33;
          });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          const not_valid = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length > 1;

          if (not_valid) {
            return;
          }

          team.forEach((agent) => {
            agent.stats.normalAttack /= 4.33;
            agent.stats.skillDamage /= 4.33;
          });
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 6
  } as NewSkill
} as NewAgent;

export const Pan = {
  index: 25,
  name: 'Pan',
  title: 'Liberty',
  bio: "Pan is a cop without a purpose. Her precinct took her off her most important case after things got heated, and now she's agreed to help you with the war effort.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 4.4,
    normalAttack: 503,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 414,
    baseSkillDamage: 414,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Triple-Tap',
    description:
      'cast a non-isStackable buff on all friendly gunner agents. increases critical rate to 20% and critical damage to 120% for 12 seconds. cooldown: 25',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.criticalRate += 0.2;
              agent.stats.criticalDamage += 1.2;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.criticalRate -= 0.2;
              agent.stats.criticalDamage -= 1.2;
            });
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 25
  } as NewSkill
} as NewAgent;

export const Hitomi = {
  index: 26,
  name: 'Hitomi',
  title: 'Kairos',
  bio: "A resident of Sohle, Hitomi joined the SF hoping to help protect the citizens of the world in any way she can. Despite having lost her mother and sister in the initial attack, she is surprisingly positive, using her uplifting demeanor to keep her fellow soldiers' morale high.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1603,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1518,
    baseSkillDamage: 1518,
    castTime: 2
  } as NewStats,
  skill: {
    name: 'Cycle of Eternal Pain',
    description: 'increases the attack speed of all agents to 220% for 7 seconds. cooldown: 19',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.attackSpeed *= 2.2));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.attackSpeed /= 2.2));
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 19
  } as NewSkill
} as NewAgent;

export const Cadence = {
  index: 27,
  name: 'Cadence',
  title: 'Cerberus',
  bio: "Cadence has been in the military for a long time, and is a stickler for the rules and traditions that come with it. As happens often to long-time soldiers, she can come across as overly formal, and sometimes her personality is a bit overbearing. But in a war setting, she's guaranteed to do a job well done.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 1084,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 983,
    baseSkillDamage: 983
  } as NewStats,
  skill: {
    name: 'Armament Strike',
    description: 'calls in laser barrage and deals 68821 damage to all monsters. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DOT, duration: 0.8, interval: 0.1, damage: () => 8603 } as NewEffectDamage],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Uni = {
  index: 28,
  name: 'Uni',
  title: 'Cupid',
  bio: "Hiding behind Uni's heavenly and virtuous appearance is an arrogant personality one wouldn't expect. But since her long-ranged combat skills are so impeccable, no one's going to openly complain about it. No one's brave enough to say it out loud, but it's a common rumor that Uni is only in SF to display her own superiority.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 4,
    normalAttack: 797,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 754,
    baseSkillDamage: 754,
    castTime: 1
  } as NewStats,
  skill: {
    name: "Archer's Judgement",
    description: 'casts an arrow barrage to deal 86411 damage and stuns for 6 seconds. cooldown: 20',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 86411 } as NewEffectDamage],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Sizuko = {
  index: 29,
  name: 'Sizuko',
  title: 'Reaper',
  bio: "Before joining SF, Sizuko worked mostly alone in the city's morgue, handling the deceased. Now that she's in the company of many other soldiers who are very much alive, her demeanor can come across as macabre and morbid sometimes. She doesn't mean to be, but everyone considers her a little strange.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 627,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 595,
    baseSkillDamage: 595
  } as NewStats,
  skill: {
    name: "Mortician's Touch",
    description:
      'throws a soul-scythe, after it attach on the enemy will split into 4 souls, each dealing 35211 damage and inducing fear to the enemy for 4 seconds. cooldown: 18',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 4 * 35211 } as NewEffectDamage], // 126,980
    cooldown: 18
  } as NewSkill
} as NewAgent;

export const Chihiro = {
  index: 30,
  name: 'Chihiro',
  title: 'Thresher',
  bio: "At first glance, Chihiro seems like a sweet little girl. But she's got a mouth like a sailor and the personality to macht someone rough, tough, and hardcore. She's truly a perfect example not to judge a book by its cover... Little girls are very capable of causing extreme mayhem.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 4297,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 3898,
    baseSkillDamage: 3898,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: 'Shark Bite',
    description:
      'bullets will now penetrate targets. increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 7.15;
          agent.stats.normalAttack *= 1.14;
          agent.stats.skillDamage *= 1.14;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 7.15;
          agent.stats.normalAttack /= 1.14;
          agent.stats.skillDamage /= 1.14;
        },
        duration: 5
      } as NewEffect
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Mei = {
  index: 31,
  name: 'Mei',
  title: 'Amethyst',
  bio: "One of the newest cadets in the program, Mei is all too eager to please her superiors as best she can, sometimes even going further than her comfort zone to do so. She's desperately afraid of failure, and will stop at nothing to make sure she does everything right. When your team is labeled traitors of the government, she's all too happy to bring you in.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1.5,
    normalAttack: 858,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 815,
    baseSkillDamage: 815
  } as NewStats,
  skill: {
    name: 'Ringlets of Death',
    description: 'throws out a chakram, ricocheting onto 4 enemies, dealing 24463 damage to each enemy. cooldown: 12',
    effects: [{ type: EffectTypeEnum.DOT, duration: 0.4, interval: 0.1, damage: () => 24463 } as NewEffectDamage],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const Riho = {
  index: 32,
  name: 'Riho',
  title: 'Artemis',
  bio: "Riho was already training for the GSR before the aliens attacked. Part of her worried it would end up being a boring job, but now she has a reason to use her skills on actual enemies. She's keen on showing the world--and the aliens-- what she can do, no matter how small she might be.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 1235,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1018,
    baseSkillDamage: 1018,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Furious Flurry',
    description:
      'summons a group of giant redhounds at the target location, dealing 76324 damage over 2 seconds. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DOT, duration: 2, interval: 1 / 4, damage: () => 9541 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Mitsu = {
  index: 33,
  name: 'Mitsu',
  title: 'Delta',
  bio: "Mitsu has looked up to Sky Fleet for a long time, and always dreamed of joining the program. Through diligent studying and keeping herself in perfect condition, she eventually found a place in the Airspace Defense Bureau. Now living her dream, she's determined to be seen as a hero to everyone in her home town, and does everything possible to get her name out there.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 2149,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1949,
    baseSkillDamage: 1949,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: 'Soaring Strike',
    description: 'shoots mega laser beams dealing 77963 damage. cooldown: 14',
    effects: [{ type: EffectTypeEnum.DOT, duration: 2, interval: 1 / 8, damage: () => 4873 } as NewEffectDamage],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Akina = {
  index: 34,
  name: 'Akina',
  title: 'The Dragon',
  bio: "The very moment they destroyed her pyrotechnic temple, Akina hated the aliens with all of her being. Hellbent on destroying all foreign lifeforms she see - and backed with the firepower to do it - this deity won't rest until every last one of them is destroyed or repelled.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1287,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1223,
    baseSkillDamage: 1223
  } as NewStats,
  skill: {
    name: 'Vengeance of the Sun',
    description:
      'punches out a fire-fist dealing 80727 damage to an area and ignites the enemy for 5 seconds, dealing 1903 damage every seconds. cooldown 9',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 80727 } as NewEffectDamage,
      { type: EffectTypeEnum.DOT, duration: 5, interval: 1, damage: () => 1903 } as NewEffectDOT
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

// TODO:
export const Akari = {
  index: 35,
  name: 'Akari',
  title: 'Tinker',
  bio: "Akari is a small girl with a loud and abrasive mouth. She's crude and undignified, but she gets the job done. One of the best mechanics Starfleet has at their disposal, she's too valuable of an asset to really let go of...",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2710,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 2697,
    baseSkillDamage: 2697
  } as NewStats,
  skill: {
    name: 'Riposte',
    description:
      'Summons a damaging circle beneath her feet that inflicts a total of "x" damage in a single second. Afterward, the circle transforms into a healing circle that restores the health of friendly units for an amount equivalent to the default skill damage multiplied by 7000% over a period of three seconds. This skill has a cooldown time of seven seconds. Note that the damage and cooldown time may vary depending on the agent\'s level.',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 8, damage: () => 6776 } as NewEffectDOT],
    cooldown: 7
  } as NewSkill
} as NewAgent;

export const Sayaka = {
  index: 36,
  name: 'Sayaka',
  title: 'Crow',
  bio: "Sayaka never really wanted to fight. The thought of other getting hurt made her anxious, especially her closest friends and loved ones. But when the call to arms was made, she couldn't help but feel she needed to use her skills to defend the Earth from annihilation.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1.8,
    normalAttack: 721,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 686,
    baseSkillDamage: 686
  } as NewStats,
  skill: {
    name: 'Omen of Dread',
    description: 'summons 4 lightning birds, each dealing 30682 damage. cooldown: 11',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 30682 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 30682 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 30682 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 30682 } as NewEffectDamage
    ],
    cooldown: 11
  } as NewSkill
} as NewAgent;

// TODO:
export const Momoko = {
  index: 37,
  name: 'Momoko',
  title: 'Mouse',
  bio: 'Despite her youthful appearance, Momoko is actually a highly trained fighter and pilot. She enlisted at a young age for the military, and jumped at the chance to be part of SF. More than anything, she just likes being part of the team.',
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2160,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160,
    castTime: 1,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Piercing Bullet',
    description:
      'increases self attack speed to 530% for 4 seconds. bullet adds a penetration and charming effect, which will scare enemy away for 2 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 5.3;
          agent.attackMode = AttackModeEnum.NONE;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 5.3;
          agent.attackMode = AttackModeEnum.NORMAL;
        },
        duration: 4
      } as NewEffect,
      // TODO:
      { type: EffectTypeEnum.DOT, duration: 4, interval: 0.04, damage: () => 432 } as NewEffectDOT
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Meteli = {
  index: 38,
  name: 'Meteli',
  title: 'Nebula',
  bio: "The military normally calls ofr mature individuals into action, but Meteli is an exception. Childish by nature but extremely skilled at her craft, this soldier is quite the opposite of who'd you'd expect to be in the middle of a war. She doesn't let the fighting get to her by distracting herself with cute and fluffy things.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1359,
    baseSkillDamage: 1359,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Meteorite Missile',
    description:
      'summons a choo-choo train to knock back and deal 78451 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.DAMAGE,
        damage: (params: EffectParams) => {
          const { agent } = params;

          if (Math.random() < 0.7) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 10 * 1000; // seconds to ms
          }

          return 86997;
        }
      } as NewEffectDamage
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO:
export const Hoshiko = {
  index: 39,
  name: 'Hoshiko',
  title: 'Zircon',
  bio: "Hoshiko's father is a decorated general in the military, so it was only natural of her to follow in his footsteps and join the fight for Earth. But it's difficult to distinguish herself as an individual when her father is so well-known. She wishes her fellow soldiers would just respect her for her own deeds and not those of her father.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.M,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1613,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 1613,
    baseSkillDamage: 1613,
    castTime: 2
  } as NewStats,
  skill: {
    name: 'Crystalline Kaleidoscope Strike',
    description:
      'cast a isStackable buff on all striker agents, each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.1;
              agent.stats.normalAttack *= 1.4;
              agent.stats.skillDamage *= 1.4;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.1;
              agent.stats.normalAttack /= 1.4;
              agent.stats.skillDamage /= 1.4;
            });
        },
        duration: 24
      } as NewEffect
    ],
    isStackable: true,
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Feme = {
  index: 40,
  name: 'Feme',
  title: 'Jackal',
  bio: "If there's any agent that you should watch yourself around, it's Feme. A sadist at heart, she's only holding herself back so as not to cause too much collateral damage to SF's own troops. Incredibly, some troops even feel bad for the aliens when they see her fight against them. War might be hell for an average human, bust she's found herself at the world's biggest playground.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Requiem of Pain',
    description:
      'shoot 2 energy bolts from the ancient sphinx cannon, deals normal attack damage with aoe. increases self damage to 460% and critical rate to 1160% for 12 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 4.6;
          agent.stats.skillDamage *= 4.6;
          agent.stats.criticalRate *= 11.6;
          agent.stats.projectileNumber = 2;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 4.6;
          agent.stats.skillDamage /= 4.6;
          agent.stats.criticalRate /= 11.6;
          agent.stats.projectileNumber = 1;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

// TODO:
export const NeveX = {
  index: 41,
  name: 'Neve X',
  title: 'Frostbite: Alpha',
  bio: "Sky Fleet Medics treated Neve after a critical injury in battle. The operation went fine, but it is secretly rumored something the monsters did changed the agent in ways that medicine can't fix. She might have been arrogant and cold before, but no one's ever seen her as ruthless or unforgiving as she is now. Some say that the creatures changed her DNA on a fundamental level, increasing her power, but twisting her personality...",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.L,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 6467,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 6467,
    baseSkillDamage: 6467
  } as NewStats,
  skill: {
    name: 'Avalanche',
    description:
      'deal 10993 damage to all enemies, and slow down to 40% for 3 seconds. all artillery agents critical damage gains an additional 190% for 14 seconds. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalDamage += 1.9));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalDamage -= 1.9));
        },
        duration: 14
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 3, interval: 1 / 8, damage: () => 691 } as NewEffectDOT
    ],
    isStackable: true,
    cooldown: 20
  } as NewSkill
} as NewAgent;

// TODO:
export const Eiko = {
  index: 42,
  name: 'Eiko',
  title: 'Cottontail',
  bio: "Though Eiko's skills are matched only by the best of the best agents in sky fleet, she can't help but feel jealous of others. She wants to remain in the spotlight, or at least be recognized for her actions constantly. Some would describe her as high maintenance, but to her, it's essential to stay like by everyone around her.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2160,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Volley of the Beast',
    description: 'summon an extraterrestrial attack, dealing 58548 damage over 1.5 seconds. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1.5, interval: 1 / 8, damage: () => 2898 } as NewEffectDOT],
    cooldown: 9
  } as NewSkill
} as NewAgent;

// TODO:
export const Goi = {
  index: 43,
  name: 'Goi',
  title: 'Ruiner',
  bio: "Goi has the best intentions, truly she does. But things don't always work out in her favor. In training, she flunked out on tests of knowledge. But her skills rapidly excelled when she got to the firearms and explosives part of the program. Somehow her bad luck only enhances her destructive power in combat. Set Goi up on a path to destruction and she'll take out many as collateral damage.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.5,
    normalAttack: 1394,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1394,
    baseSkillDamage: 1394,
    castTime: 1,
    projectileNumber: 3
  } as NewStats,
  skill: {
    name: 'Napalm Massacre',
    description:
      'launch 3 grenades in a straight line each dealing 25098 damage and mini stuns for 0.2 seconds. cooldown: 10',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 25098 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 25098 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 25098 } as NewEffectDamage
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO:
export const RihoX = {
  index: 44,
  name: 'Riho X',
  title: 'Artemis: Alpha',
  bio: "After a year of service under the Commander, Riho has grown and matured as a person. They've grown closer together and despite still being teased all the time for her short stature, Riho finds that she doesn't mind all that much anymore. She's just happy to be in Sky Fleet with her comrades. the new Riho has certainly become much kinder.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1057,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1057,
    baseSkillDamage: 1057,
    castTime: 1,
    projectileNumber: 5
  } as NewStats,
  skill: {
    name: "Hunter's Shot",
    description:
      'summons dozens of the giant redhounds, dealing 9515 damage to all enemies, and increases self attack damage to 189% and attack speed to 276% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        duration: 12,
        apply: (params: EffectParams) => {
          const { agent } = params;

          agent.stats.attackSpeed *= 2.76;
          agent.stats.normalAttack *= 1.89;
          agent.stats.skillDamage *= 1.89;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2.76;
          agent.stats.normalAttack /= 1.89;
          agent.stats.skillDamage /= 1.89;
        }
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 2, interval: 1 / 8, damage: () => 315 } as NewEffectDOT
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

// TODO:
export const Setsuna = {
  index: 45,
  name: 'Setsuna',
  title: 'Sabotage',
  bio: "Nobody quite knows how Setsuna joined the SF coalition. She just showed up one day saying she was from the Global Soldier Reserve, and no one questioned her about it. She doesn't talk too much and keeps mostly to herself, but she contributes a great deal when it comes to straight combat. Some say she was trained in a secret ninja facility in another country.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226,
    castTime: 1
  } as NewStats,
  skill: {
    name: "Blade's Whisper",
    description:
      'listen to the whisper in 7 seconds. self buff 1000% damage. consistently swing out 5 blade beams and ignite enemies for 3310 burn damage every seconds. cooldown: 9',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 10;
          agent.stats.skillDamage *= 10;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 10;
          agent.stats.skillDamage /= 10;
        },
        duration: 7
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 7, interval: 1, damage: () => 3310 } as NewEffectDOT
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

// TODO:
export const Hami = {
  index: 46,
  name: 'Hami',
  title: 'Sting',
  bio: "Hami could be described as sweet as honey, with the sting of a wasp when angered. Stay on her good side and she'll be your favorite companion. But cross her and she'll vow to be your worst nightmare. When you're marked as a traitor by your own people, she doesn't ask questions and puts you on her hit list.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 0.8,
    normalAttack: 2727,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2727,
    baseSkillDamage: 2727,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: "Hornet's Vengeance",
    description:
      'summon 2 giant bumblebees, each of them shoots out laser beam horizontally to the target dealing 55912 damage to any enemies it hits. cooldown: 8',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 55912 } as NewEffectDamage,
      { type: EffectTypeEnum.DAMAGE, damage: () => 55912 } as NewEffectDamage
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const O = {
  index: 47,
  name: 'O',
  title: 'Andromeda',
  bio: "O was an assistant in a research facility before being selected for a secret government experiment. After months of being exposed to Alpha energy, she somehow was given the ability to manipulate energy and particles just using her mind. With her newfound abilities, and the desire to learn as much information as she possibly can, she's set out to help people from the threat of the monsters and find justice for the prisoners and herself who underwent the experiment.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099,
    castTime: 1,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: 'Celestial Judgement',
    description:
      'blast out pure energy to any enemies in an area, dealing 79768 damage to any enemies it hits, and increases her critical chance to 16% and critical damage to 64% for 10 seconds. cooldown 11',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.criticalRate += 0.16;
          agent.stats.criticalDamage += 0.64;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.criticalRate -= 0.16;
          agent.stats.criticalDamage -= 0.64;
        },
        duration: 10
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 8, damage: () => 9971 } as NewEffectDamage
    ],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const GaiGai = {
  index: 48,
  name: 'Gai Gai',
  title: 'Panda',
  bio: "Fiercely independent and proud, Gai Gai isn't going to let anyone stand in the way of what she wants. She's learned to put herself first and foremost, even to her superiors. She's confident in her ability and combat prowess, and won't let anyone take that, or her position in the Division of Orbital Defense, away from her. Once you've been marked a traitor, she feels like she could do the job alone.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1308,
    baseSkillDamage: 1308,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Banishing Blade',
    description: 'cross slash in large area, dealing 147095 damage to any enemies nearby. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 147095 } as NewEffectDamage],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO:
export const Rosalie = {
  index: 49,
  name: 'Rosalie',
  title: 'Lust',
  bio: "Rosalie could only be described as a hopeless romantic, desperately trying to search for her soulmate even as war wages around her. She's afraid that if she doesn't mee her match soon, she'll die in combat and never be able to lay eyes on her one true love. As such, the male agents try to steer clear of her, put off by her extremely pushy advances.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: 'Wrath of the Rose',
    description:
      'cast a stackable buff on all artillery agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.1;
              agent.stats.normalAttack *= 1.4;
              agent.stats.skillDamage *= 1.4;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.1;
              agent.stats.normalAttack /= 1.4;
              agent.stats.skillDamage /= 1.4;
            });
        },
        duration: 24
      } as NewEffect
    ],
    isStackable: true,
    cooldown: 5
  } as NewSkill
} as NewAgent;

// TODO:
export const Toki = {
  index: 50,
  name: 'Toki',
  title: 'The Witch',
  bio: "It can be difficult to talk to Toki. Not because she's unintelligent, but because she is continuously sarcastic and insincere. You can never tell if she's telling you how she feels or actually just kidding around. She's attractive, but most agents aren't too eager to play her word games and confusing statements. No one can deny her ability to fight, however.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1624,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1624,
    baseSkillDamage: 1624
  } as NewStats,
  skill: {
    name: "Witch's Curse",
    description:
      'cast a stackable buff on all gunner agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.1;
              agent.stats.normalAttack *= 1.4;
              agent.stats.skillDamage *= 1.4;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.1;
              agent.stats.normalAttack /= 1.4;
              agent.stats.skillDamage /= 1.4;
            });
        },
        duration: 24
      } as NewEffect
    ],
    isStackable: true,
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Wu = {
  index: 51,
  name: 'Wu',
  title: 'Emperor',
  bio: "Wu grew up on the outskirts of Sohle, where she learned to live and thrive in the back alleys and tougher streets of the city. one thing nobody expected of the toughened street kid was that she'd developed an extremely perverted personality. She tends to make others uncomfortable, added to by her up close and personal attitude.",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 613,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 613,
    baseSkillDamage: 613,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Jungle Drums',
    description:
      'release the jungle emperor power, attack will explode with 5 small aoe and increases self normal attack damage to 1035% for 11 seconds. also all striker agents critical rate gains an additional 30% for 4 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 10.35;
          agent.stats.projectileNumber = 5;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 10.35;
          agent.stats.projectileNumber = 1;
        },
        duration: 11
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => (agent.stats.criticalRate += 0.3));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => (agent.stats.criticalRate -= 0.3));
        },
        duration: 4
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO:
export const ZiLong = {
  index: 52,
  name: 'Zi Long',
  title: 'Leviathan',
  bio: "Zi Long isn't exactly a rude person, she just knows what the wants and won't allow anything to get in the way of that. Whether it be a battle plan or just a seat in the ship's mess hall, she's not going to let others interfere with what she feels she deserves. Mercy on anyone who tries to tell her no. And once the government tells her you're a threat. You're next on the list.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.1,
    normalAttack: 1149,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1088,
    baseSkillDamage: 1088,
    castTime: 1,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: "Dragon's Claw",
    description:
      'enters true dragon form which increases self attack speed to 520% for 11 seconds. also increases normal damage to 133% for all gunner agents in the team for 15 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 5.2;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 5.2;
        },
        duration: 11
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => (agent.stats.normalAttack *= 1.33));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => (agent.stats.normalAttack /= 1.33));
        },
        duration: 15
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

// TODO:
export const Ari = {
  index: 53,
  name: 'Ari',
  title: 'Blood Lizard',
  bio: "If there's one thing in the world Ari hates most, it's Shiko. They'd been close allies during the genetic enhancement program in the Sohle labs, but something between them went sour, and they've since sworn vengeance against each other. She'll tolerate working together in Zeth as long as she gets to kill things. Extremely skilled in violence and combat, Ari enjoys doing things the unconventional way, unafraid of getting things messy along the way.",
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1050,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 1050,
    baseSkillDamage: 1050
  } as NewStats,
  skill: {
    name: 'Song of the Demon',
    description:
      'Throw out 4 of her lizard swords, each deals 4724 damage to the enemy increases self damage to (1 + any agents on the battlefield, except support) * 34% for 15 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent, team } = params;
          const non_support_num = team.filter((agent) => agent.class !== ClassEnum.SUPPORT).length;
          agent.stats.normalAttack *= 1 + non_support_num * 0.34;
          agent.stats.skillDamage *= 1 + non_support_num * 0.34;
        },
        remove: (params: EffectParams) => {
          const { agent, team } = params;
          const non_support_num = team.filter((agent) => agent.class !== ClassEnum.SUPPORT).length;
          agent.stats.normalAttack /= 1 + non_support_num * 0.34;
          agent.stats.skillDamage /= 1 + non_support_num * 0.34;
        },
        duration: 15
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 4, damage: () => 4724 } as NewEffectDamage
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Chia = {
  index: 54,
  name: 'Chia',
  title: 'Nora Kun',
  bio: 'A normal feral cat at early 21st century. It got infected with the plague, but nothing happened to their species. When the virus variate to chi, some of their species began to develop intelligence, growing super huge in size. Some of them even began to name each other. One gigantic size of them evolved a skill to fish from void, allowing it ot feed its whole species. They named her Chia, marking the end of virus. After numerous years passed, Chia was found to be staying in the old world. The SF team desperately want to recruit her for no reason.',
  organization: OrganizationEnum.MEOW,
  cupSize: CupSizeEnum.H, // healthy?
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2236,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Fishing of the void',
    description:
      'concentrate on fishing for 10 seconds, continuously catching whales and smash that to the enemies face in small area that deals skill damage. increases self damage to 750%, increases gunner attack rate to 130% and damage to 170%. cooldown: 13',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.normalAttack *= 7.5;
          agent.stats.skillDamage *= 7.5;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.normalAttack /= 7.5;
          agent.stats.skillDamage /= 7.5;
        },
        duration: 10
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.3;
              agent.stats.normalAttack *= 1.7;
              agent.stats.skillDamage *= 1.7;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.3;
              agent.stats.normalAttack /= 1.7;
              agent.stats.skillDamage /= 1.7;
            });
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 13
  } as NewSkill
} as NewAgent;

// TODO:
export const Shiko = {
  index: 55,
  name: 'Shiko',
  title: 'Dragonfly',
  bio: "Shiko was one of two successful projects created by the labs in Sohle. Genetically manipulated to be the perfect agent, she's unmatched in intelligence and strategy and flaunts it well. Ari was supposed to have been her combat partner, but things went awry and they went separate ways, vowing to put an end to one another. However, they worked together once more in Zeth, as she feels that she is too smart for the human race to accept.",
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.L,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 2434,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2434,
    baseSkillDamage: 2434,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Atomic Prowess: Sword Strike',
    description: 'increases self attack speed to 450% and damage to 230% for 11 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 4.5;
          agent.stats.normalAttack *= 2.3;
          agent.stats.skillDamage *= 2.3;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 4.5;
          agent.stats.normalAttack /= 2.3;
          agent.stats.skillDamage /= 2.3;
        },
        duration: 11
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO:
export const Kaja = {
  index: 56,
  name: 'Kaja',
  title: 'Shepherd',
  bio: "There's none more effective at infiltration and information gathering than Kaja. Although rather youthful, she's been able to put her young and innocent appearance to good use, often times tricking enemies into believing she is a simple civilian. And while she can be as sweet as she looks everyone is wary that she is an adept liar.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264,
    castTime: 1,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: "Shepherd's Call",
    description:
      'summon all of her 16 little lambs, the lambs will charge forward as triangulate formation, deals 82354 damage and stun the enemies for 3 seconds. cooldown: 15',
    effects: [{ type: EffectTypeEnum.DOT, duration: 0.48, interval: 0.03, damage: () => 14613 } as NewEffectDOT],
    cooldown: 15
  } as NewSkill
} as NewAgent;

// TODO:
export const Bia = {
  index: 57,
  name: 'Bia',
  title: 'Halo',
  bio: "Bia was raised in a deeply religious family, and followed a strict set of moral rules all her life. When she joined Sky Fleet, her values didn't change, leading to a highly stringent agent who refuses to follow orders that contradict with her beliefs. Commanding officers find it difficult to work with her, as she is dull and doesn't like change. But with her strength and power, it's hard to turn her away.",
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1160,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 1160,
    baseSkillDamage: 1160,
    castTime: 1
  } as NewStats,
  skill: {
    name: "Fate's Hand: Retribution",
    description:
      "trigger the fate's hand for 6 seconds, increases self skill damage to 2400% and eject all of her daggers. cooldown: 10",
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.skillDamage *= 24;
          agent.attackMode = AttackModeEnum.NONE;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.skillDamage /= 24;
          agent.attackMode = AttackModeEnum.NORMAL;
        },
        duration: 6
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 6, interval: 1 / 8, damage: () => 155.2 } as NewEffectDOT
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Eri = {
  index: 58,
  name: 'Eri',
  title: 'Phaze',
  bio: "It's no question that Eri is a genius. At a young age she was a technological prodigy, surpassing the IQ's of university-level professors all over the world. Now drafted in a war environment, Eri can't help but try to teach her fellow agents what she knows. Too bad half the time they can't understand what she's saying.",
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1.5,
    normalAttack: 1440,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1440,
    baseSkillDamage: 1440
  } as NewStats,
  skill: {
    name: "It's all in the science",
    description: 'fire a total of 9 piercing bullets in a wide arc, each dealing 10298 damage. cooldown: 14',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 9 * 10298 } as NewEffectDamage],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Kiyomi = {
  index: 59,
  name: 'Kiyomi',
  title: 'Shimmer',
  bio: "If you ever need a straight answer or opinion, it's a good idea to ask Kiyomi. She's blunt, transparent, and honest beyond what most people would be comfortable with. She feels it's a waste of time to feel shameful for any of her opinions, and will tell you what she thinks at any given moment. No need to wonder what's going through her head.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: 'Transparency: Crystal Lance',
    description:
      'summon a self buff for 12 seconds, increases self attack speed by 580% and self critical rate by 210%, also apply knockback and slow effect on normal attack. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 5.8;
          agent.stats.criticalRate *= 2.1;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 5.8;
          agent.stats.criticalRate /= 2.1;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

// TODO:
export const Musuna = {
  index: 60,
  name: 'Musuna',
  title: 'Ruby',
  bio: "Musuna isn't used to being directly on a battlefield. Her main purpose was for infiltration and stealth missions, but now that the war wages across the whole planet, she's forced into a position where battle is inevitable. She's quite skittish, and most people see her as weak and useless in combat. But when cornered with no other options, she fights for her life with everything she's got.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2236,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160
  } as NewStats,
  skill: {
    name: 'Shuriken Strike',
    description:
      'increases self attack speed to 635% and attack damage to 260% for 3 seconds. bullet adds a penetration, slow and burn effect, slow enemy to 80% and ignite the enemy for 4 seconds, dealing 4537 burn damage every seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 6.35;
          agent.stats.normalAttack *= 2.6;
          agent.stats.skillDamage *= 2.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 6.35;
          agent.stats.normalAttack /= 2.6;
          agent.stats.skillDamage /= 2.6;
        },
        duration: 3
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 4, interval: 1, damage: () => 4537 } as NewEffectDOT
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Windy = {
  index: 61,
  name: 'Windy',
  title: 'Death Wing',
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2085,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2085,
    baseSkillDamage: 2085,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Shuriken Strike',
    description:
      'bullets will now penetrate targets and deals skill damage. increases attack speed to 200% and increases damage to 380% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.attackSpeed *= 2;
          agent.stats.normalAttack *= 3.8;
          agent.stats.skillDamage *= 3.8;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.attackSpeed /= 2;
          agent.stats.normalAttack /= 3.8;
          agent.stats.skillDamage /= 3.8;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Kotaru = {
  index: 62,
  name: 'Kotaru',
  title: 'Fire Fly',
  bio: "As someone who came from a poor family, Kotaru doesn't like the thought of money going to waste. Nor does she tolerate being taken advantage of or working for less than she's worth. Sure, the world is in danger and if they fail, lots of people will die... but what sort of payment does that entail? Not only is she money-minded, but her own pleasure is also very important to her too. Almost a bit too important...",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2160,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Blistering Heat Wave',
    description:
      'enter request pay raise mode, doing more kick than usual. increase self normal attack damage to 480% and critical rate to 1160% for 13 seconds. cooldown: 23',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 4.8;
          agent.stats.criticalRate *= 11.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 4.8;
          agent.stats.criticalRate /= 11.6;
        },
        duration: 13
      } as NewEffect
    ],
    cooldown: 23
  } as NewSkill
} as NewAgent;

export const Karry = {
  index: 63,
  name: 'Karry',
  title: 'Stardust',
  bio: "Karry is a native of Phobo, another planet where Sky Fleet travels. She loves nature but hates humans, and uses her magic to help the environment. She's incredibly angry when Zeth intends to dump large amount of the Alpha energy onto her planet, and she'll do whatever it takes to stop them.",
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264,
    castTime: 1
  } as NewStats,
  skill: {
    name: "Nature's Call",
    description:
      'increase skill damage to all agents with D cup breast size or smaller to 120% for 4 seconds. also flings out 16 penetrating meteor hearts in anti-clockwise pattern, each deal 2144.6 damage. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team.filter((agent) => agent.cupSize <= CupSizeEnum.D).forEach((agent) => (agent.stats.skillDamage *= 1.2));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team.filter((agent) => agent.cupSize <= CupSizeEnum.D).forEach((agent) => (agent.stats.skillDamage /= 1.2));
        },
        duration: 4
      } as NewEffect,
      { type: EffectTypeEnum.DAMAGE, damage: () => 16 * 6120 } as NewEffectDamage
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Sato = {
  index: 64,
  name: 'Sato',
  title: 'Chimera',
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Heretic Shredder',
    description:
      'each Zeth member give 33% of damage to every Zeth member for 6 seconds. her heretic shoots out 9 lazer beams, each beam deals 25107 damage. cooldown: 12',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          const zeth_member = team.filter((agent) => agent.organization === OrganizationEnum.ZETH);
          const zeth_member_num = zeth_member.length;
          zeth_member.forEach((agent) => {
            agent.stats.normalAttack *= 1 + 0.33 * zeth_member_num;
            agent.stats.skillDamage *= 1 + 0.33 * zeth_member_num;
          });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          const zeth_member = team.filter((agent) => agent.organization === OrganizationEnum.ZETH);
          const zeth_member_num = zeth_member.length;
          zeth_member.forEach((agent) => {
            agent.stats.normalAttack /= 1 + 0.33 * zeth_member_num;
            agent.stats.skillDamage /= 1 + 0.33 * zeth_member_num;
          });
        },
        duration: 6
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 3, interval: 1, damage: () => 3 * 18877.5 } as NewEffectDamage
    ],
    cooldown: 12
  } as NewSkill
} as NewAgent;

// TODO:
export const Victoria = {
  index: 65,
  name: 'Victoria',
  title: 'Vampire',
  bio: "Throughout her childhood, Victoria was experimented on by cruel scientists looking to create a superhuman. However, their research failed after she was unsuccessfully mutated and killed all of the researchers. Angry with what the world had made her, she joined Kura's team hoping to kill as many people as she can.",
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 613,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 613,
    baseSkillDamage: 613
  } as NewStats,
  skill: {
    name: "Dracula's Wrath",
    description:
      'swing a cross scythe that deals 98063 damage on the target area for 16 seconds. increase the damage of all striker agents to 15% (+5% for each support on the battlefield) for 7 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          const support_num = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length;
          const damage_buff = 1.15 + support_num * 0.05;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.normalAttack *= damage_buff;
              agent.stats.skillDamage *= damage_buff;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          const support_num = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length;
          const damage_buff = 1.15 + support_num * 0.05;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.normalAttack /= damage_buff;
              agent.stats.skillDamage /= damage_buff;
            });
        },
        duration: 7
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 16, interval: 0.38, damage: () => 2451.3 } as NewEffectDOT
    ],
    isStackable: true,
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Laura = {
  index: 66,
  name: 'Laura',
  title: 'Tempest',
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 613,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 680,
    baseSkillDamage: 680,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Defensive Anchor: Ultimate Shielding',
    description:
      'enter the ultimate mode, increases self skill damage to 1200% for 11 seconds. everytime Laura enter the ultimate mode, she will cast a global stackable protection to the team which block normal attack for (base skill damage * 13%) times. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.skillDamage *= 12;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.skillDamage /= 12;
        },
        duration: 11
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO:
export const Kura = {
  index: 67,
  name: 'Kura',
  title: 'Imp',
  bio: 'Tired of being disappointed by life as a regular agent, Kura put together a team of other strong and dissatisfied warriors to help her steal the Alpha Stone. They want to use it to make themselves gods, or if that fails to work, destroy the world and everyone in it. She only cares about herself and no one else. Teammates are expendable to her.',
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: "Hell's Gate: Alpha Enhanced",
    description: 'summons three thunder beams from her trident for 8 seconds, total dealing 25190 damage. cooldown: 3',
    effects: [{ type: EffectTypeEnum.DOT, duration: 8, interval: 1, damage: () => 25190 / 8 } as NewEffectDOT],
    cooldown: 3
  } as NewSkill
} as NewAgent;

export const Ne = {
  index: 68,
  name: 'Ne',
  title: 'Berserk',
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: "Berserker's Fury",
    description:
      'release all of the fury, dive into the berserker mode and throw out all of her axe to deal skill damage. increase self attack speed to 200%, damage to 900% and enlarger her attack range 2.5 for 10 seconds. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.attackSpeed *= 2;
          agent.stats.normalAttack *= 9;
          agent.stats.skillDamage *= 9;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.attackSpeed /= 2;
          agent.stats.normalAttack /= 9;
          agent.stats.skillDamage /= 9;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Uta = {
  index: 69,
  name: 'Uta',
  title: 'Cathedral',
  bio: "Uta claims that she has never felt emotions ever in her life. A lot of people don't believe her, for various reasons. The only emotion she does display is anger, and she uses that to fuel her strength in battle. A lot of agents in the organization don't like being around her, because she is always negative, but I'm sure that deep down, she's got a heart.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 2452,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2452,
    baseSkillDamage: 2452
  } as NewStats,
  skill: {
    name: 'Aura of Light',
    description:
      'go into holy light mode for 10 seconds, increase self attack rate to 500% and critical damage to 1000%. begin to smash the ground around herself with skill damage. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.attackSpeed *= 5;
          agent.stats.criticalDamage *= 10;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.attackSpeed /= 5;
          agent.stats.criticalDamage /= 10;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Midori = {
  index: 70,
  name: 'Midori',
  title: 'Hopper',
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2145,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2145,
    baseSkillDamage: 2145
  } as NewStats,
  skill: {
    name: 'Lashing Tongue',
    description:
      'shift her phase from electron world and release all of her electron to enemy that deals skill damage. increase self attack speed to 200%, damage to 500% for 7 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2;
          agent.stats.normalAttack *= 5;
          agent.stats.skillDamage *= 5;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2;
          agent.stats.normalAttack /= 5;
          agent.stats.skillDamage /= 5;
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Sera = {
  index: 71,
  name: 'Sera',
  title: 'Zephyr',
  bio: "Partial to pranks and tricks, Sera is a local terror in her city of Celestis. Many of the locals just think she's a nuisance, but she genuinely does care about those around her. Even humans, who aren't well liked on her planet. She's determined to save her planet from Kura and Zeth.",
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: 'Breath of the Wind',
    description:
      'cast a non-stackable buff on all friendly agents. add (Sera skill damage * 25%) damage on each hits for 14 seconds. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { agent: Sera, team } = params;
          team
            .filter((agent) => agent.name !== 'Sera')
            .forEach((agent) => {
              agent.stats.normalAttack += Sera.stats.skillDamage * 0.25;
              agent.stats.skillDamage += Sera.stats.skillDamage * 0.25;
            });
        },
        remove: (params: EffectParams) => {
          const { agent: Sera, team } = params;
          team
            .filter((agent) => agent.name !== 'Sera')
            .forEach((agent) => {
              agent.stats.normalAttack -= Sera.stats.skillDamage * 0.25;
              agent.stats.skillDamage -= Sera.stats.skillDamage * 0.25;
            });
        },
        duration: 14
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Livia = {
  index: 72,
  name: 'Livia',
  title: 'Majesty',
  bio: "Nevermind the fact that Livia is a whale, her skills as a strategist and combat veteran makes her invaluable to the war effort. Ok, yeah it's a little strange, but she isn't going to let the quiet discrimination against her species get the way of protecting people. She takes the different treatment in stride, never letting the ultimate goal out of her sight.",
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2145,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2145,
    baseSkillDamage: 2145,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Call of the Whale',
    description:
      'shoot out a transonic tsunami wave towards to enemies dealing 85815 damage. having a 75% chance to reset the skill cooldown to 2 seconds everytime this skill casts. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.DAMAGE,
        damage: (params: EffectParams) => {
          const { agent } = params;

          if (Math.random() < 0.75) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 14 * 1000; // seconds to ms
          }

          return 85815;
        }
      } as NewEffectDamage
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const ReiJK = {
  index: 73,
  name: 'Rei JK',
  title: 'Sabertooth: Beta',
  bio: 'Rei, even as a young woman, as always smart and charm. Nothing ever seemed to phase her. The younger Rei still holds respect even among her senior agents. Everyone knows not to think they are above her. She always proves them wrong.',
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1057,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1057,
    baseSkillDamage: 1057,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Vanquishing school bag',
    description:
      'enters jk rage mode, school bag will explode with small aeo and increases self normal attack damage to 660% for 12 seconds. also increases critical rate by 40% for all artillery agents in the team for 5 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 6.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 6.6;
        },
        duration: 12
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalRate += 0.4));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalRate -= 0.4));
        },
        duration: 5
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Rei = {
  index: 74,
  name: 'Rei',
  title: 'Sabertooth',
  bio: "An officer of the Global Soldier Reserve (GSR), Rei is all business, rarely cracking a smile, and is severely impatient. She isn't too thrilled with the fact that you're not a seasoned Commander, either. The only thing she's here to do is end this war once and for all, and you seem more like a liability than an asset.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1057,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1057,
    baseSkillDamage: 1057
  } as NewStats,
  skill: {
    name: 'Bite of the Sabertooth',
    description: 'shoots multiple laser beams dealing 25373.9 damage. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 25374 } as NewEffectDamage],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Amikam = {
  index: 75,
  name: 'Amikam',
  title: 'Penance',
  bio: "Kicked out of her convent for being too 'naughty'. Amikam is looking for a good cause to put her services to. She's quick with a gun and a compliment, and promises to give any sinners she finds a proper punishment...",
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Vanquish The Sinners',
    description:
      'attack rapidly, penetrate targets and disperse in a narrow angle. also increases self attack damage to 262%, attack speed to 200%  and critical rate to 37% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2;
          agent.stats.criticalRate += 0.37;
          agent.stats.normalAttack *= 2.62;
          agent.stats.skillDamage *= 2.62;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2;
          agent.stats.criticalRate -= 0.37;
          agent.stats.normalAttack /= 2.62;
          agent.stats.skillDamage /= 2.62;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

// TODO:
export const Iizuna = {
  index: 76,
  name: 'Iizuna',
  title: 'Kitsune',
  bio: "Iizuna tries her very best to be an obedient Fujo, but honestly it's hard some days. This war is the perfect distraction! Maybe getting all the non-fujo things out of her system will maker her a better one once all this fighting is over with.",
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Fox Fire: Inferno',
    description:
      'cast jujutsu for 10 seconds, throw the knife quadruple than usual, deals with skill damage, increase critical rate and critical damage to 30% for all artillery agents in the team and increase self damage to 860%. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NONE;
          agent.stats.normalAttack *= 8.6;
          agent.stats.skillDamage *= 8.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.normalAttack /= 8.6;
          agent.stats.skillDamage /= 8.6;
        },
        duration: 10
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.criticalRate += 0.3;
              agent.stats.criticalDamage += 0.3;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.criticalRate -= 0.3;
              agent.stats.criticalDamage -= 0.3;
            });
        },
        duration: 10
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 9, interval: 1 / 8, damage: () => 524.7 } as NewEffectDOT // TODO: 10 seconds but 1 sec animation
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Tsurumi = {
  index: 77,
  name: 'Tsurumi',
  title: 'Bakoninnin',
  organization: OrganizationEnum.RSA,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 4336,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 4336,
    baseSkillDamage: 4336
  } as NewStats,
  skill: {
    name: 'Ninjutsu of crane: Thousand Scythe',
    description:
      'increases self attack speed to 400% and attack damage to 121% for 10 seconds. sickle will penetrate through enemy. cooldown: 13',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 4;
          agent.stats.normalAttack *= 1.21;
          agent.stats.skillDamage *= 1.21;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 4;
          agent.stats.normalAttack /= 1.21;
          agent.stats.skillDamage /= 1.21;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 13
  } as NewSkill
} as NewAgent;

// TODO:
export const Mora = {
  index: 78,
  name: 'Mora',
  title: 'Eureka',
  organization: OrganizationEnum.DAB,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    // attackSpeed: 1,
    // normalAttack: 3592,
    // criticalRate: 0.94,
    // criticalDamage: 2.038,
    // skillDamage: 3264,
    // baseSkillDamage: 3264,
    attackSpeed: 1.7,
    normalAttack: 7449,
    criticalRate: 1.364,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Nanobot Catalyst',
    description:
      'anything in contract with the nanobot catalyst will expose their weakness for 0.5 seconds. spread out nanobot catalyst around herself for 20 seconds. withing that first 7 seconds, Mora will throw nanobot catalyst more frequently and increase damage to 4200%. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.DEBUFF,
        apply: (params: EffectParams) => {
          const { target } = params;
          target.weaknessMultiplier *= 1.75;
        },
        remove: (params: EffectParams) => {
          const { target } = params;
          target.weaknessMultiplier /= 1.75;
        },
        duration: 20
      } as NewEffect,
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 42;
          agent.stats.skillDamage *= 42;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 42;
          agent.stats.skillDamage /= 42;
        },
        duration: 7
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 20, interval: 1 / 2, damage: () => 1.5 } as NewEffectDOT,
      { type: EffectTypeEnum.DOT, duration: 20, interval: 1, damage: () => 86.5 } as NewEffectDOT
      // { type: EffectTypeEnum.DOT, duration: 7, interval: 1 / 4, damage: () => 909 } as NewEffectDOT
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Masamune = {
  index: 79,
  name: 'Masamune',
  title: 'Bontenmaru',
  organization: OrganizationEnum.RSA,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1411,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: 'Seven blades',
    description:
      'pull out all of her blades in a flash for 10 seconds. enlarge her attack range 2.5, increase her damage to 1800%. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        duration: 10,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 18;
          agent.stats.skillDamage *= 18;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 18;
          agent.stats.skillDamage /= 18;
        }
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

// TODO:
export const Chloe = {
  index: 80,
  name: 'Chloe',
  title: 'Dunkel Segnen',
  organization: OrganizationEnum.RSA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.028,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Abyssal Pilgrimage',
    description:
      'dive into darkness, bring it with the deepest power. cast a stackable buff, increase damage to 200% and increase all artillery agents damage to 110% for 24 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 2;
          agent.stats.skillDamage *= 2;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 2;
          agent.stats.skillDamage /= 2;
        },
        duration: 24
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.normalAttack *= 1.1;
              agent.stats.skillDamage *= 1.1;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.normalAttack /= 1.1;
              agent.stats.skillDamage /= 1.1;
            });
        },
        duration: 24
      } as NewEffect
    ],
    isStackable: true,
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Tyrla = {
  index: 81,
  name: 'Tyrla',
  title: 'Armstrong',
  organization: OrganizationEnum.TAP,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099,
    castTime: 1
  } as NewStats,
  skill: {
    name: 'Kuchipudi',
    description:
      'Tyrla begin the kuchipudi dance, increase self damage to 530% and attack speed to 240% for 12 seconds. she bursts out whatever she got from her arm mech while dancing. cooldown: 16',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2.4;
          agent.stats.normalAttack *= 5.3;
          agent.stats.skillDamage *= 5.3;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2.4;
          agent.stats.normalAttack /= 5.3;
          agent.stats.skillDamage /= 5.3;
        },
        duration: 12
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 8, damage: () => 263.5 } as NewEffectDOT
    ],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Seina = {
  index: 82,
  name: 'Seina',
  title: 'Black Hawk',
  organization: OrganizationEnum.TAP,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Aerial Armageddon',
    description:
      'increase damage to 460 % for 8 seconds. launch out all type of her missiles, her aerosol missiles deals total 29178 over 6 seconds and her guided rockets each deals 7294. cooldown: 12',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 4.6;
          agent.stats.skillDamage *= 4.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 4.6;
          agent.stats.skillDamage /= 4.6;
        },
        duration: 8
      } as NewEffect,
      { type: EffectTypeEnum.DAMAGE, damage: () => 4 * 7294 } as NewEffectDamage,
      { type: EffectTypeEnum.DOT, duration: 6, interval: 1, damage: () => 29178 / 6 } as NewEffectDOT
    ],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const Agents = [
  Akari,
  Akina,
  Amikam,
  Aoi,
  Ari,
  Ayu,
  Bia,
  Cadence,
  Chia,
  Chiharu,
  Chihiro,
  Chloe,
  Coco,
  Denka,
  Eiko,
  Ember,
  Eri,
  Feme,
  GaiGai,
  Goi,
  Hami,
  Hitomi,
  Hoshiko,
  Iizuna,
  Irina,
  Kaja,
  Karry,
  Kiyomi,
  Kotaru,
  Kotora,
  Kura,
  Larisa,
  Livia,
  Laura,
  Mai,
  Masamune,
  Mei,
  Meteli,
  Midori,
  Mika,
  Mitsu,
  Momoko,
  Mora,
  Musuna,
  Ne,
  Neugena,
  Neve,
  NeveX,
  Noa,
  O,
  Pan,
  Rei,
  ReiJK,
  Reika,
  Riho,
  RihoX,
  Rosalie,
  Rui,
  Sara,
  Sato,
  Sayaka,
  Sera,
  Seina,
  Setsuna,
  Shiko,
  Sizuko,
  Sora,
  Toki,
  Tsukiko,
  Tsurumi,
  Tyrla,
  Uni,
  Uta,
  Uzu,
  Vanessa,
  Victoria,
  Windy,
  Wu,
  Yukako,
  Yuki,
  Yuuha,
  ZiLong
] as NewAgent[];
