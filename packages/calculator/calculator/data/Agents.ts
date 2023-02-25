import { NewAgent, NewDamageEffect, NewDOTEffect, NewEffect, NewSkill } from '../model/index.js';
import { AttackModeEnum, ClassEnum, EffectEnum, NameEnum, OrganizationEnum, SizeEnum } from '../enums/index.js';
import { EffectParamType } from '../model/types/index.js';

export const Yuki = {
  name: NameEnum.Yuki,
  title: 'Valkyrie',
  bio: "Despite her warm beauty and natural youthfulness, Yuki is otherwise a very cold individual. She takes her job very seriously in the WIO, and refuses to let social interaction get in hte way of her duty. A fact she'll bluntly tell you.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.C,
  class: ClassEnum.Striker,
  attack_speed: 0.5,
  normal_attack: 975,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 927,
  base_skill_damage: 927,
  skill: {
    name: 'Precision Assault',
    description: 'increases the damage to 1500% and attack speed to 220% for 4 seconds. cooldown: 8',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 4
      } as NewEffect
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Neve = {
  name: NameEnum.Neve,
  title: 'Frostbite',
  bio: "A literal 'ice queen', Neve wants this war business to be done and over with already. Impatient and cruel, even to her commanding officer, she has few friends and many enemies. There's no denying she's beautiful, but most are too wary of that poisonous tongue to try getting to know her.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.D,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 601,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 569,
  base_skill_damage: 569,
  skill: {
    name: 'Absolute Zero',
    description: 'summons an iceberg dealing 26428 damage and slows down enemies to 50% for 5 seconds. cooldown: 17',
    effects: [{ type: EffectEnum.Damage, damage: () => 26428 } as NewDamageEffect],
    cooldown: 17
  } as NewSkill
} as NewAgent;

export const Ayu = {
  name: NameEnum.Ayu,
  title: 'Spectre',
  bio: "Trained in advanced weaponry, Ayu should naturally be a very tough individual. However, despite being skilled at her craft, she's incredibly naive and impressionable, often times not realizing the gravity of a situation without help from her peers.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.E,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 461,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 379,
  base_skill_damage: 379,
  skill: {
    name: 'Raining Bullets',
    description: 'shoots a piercing laser beam dealing 45536 damage. cooldown: 9',
    effects: [{ type: EffectEnum.Damage, damage: () => 45536 } as NewDamageEffect],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Mika = {
  name: NameEnum.Mika,
  title: 'Maelstrom',
  bio: "Mika is a naturally kind individual. She hasn't let the horrors of war change her personality, and remains one of the cheeriest members of the SF alliance. Soldiers love being put in a team with her, simply because of how happy and bubbly she is.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.G,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 487,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 463,
  base_skill_damage: 463,
  skill: {
    name: "Ocean's Torrent",
    description: 'smashes the ground and creates 4 sword-quakes each dealing 11422 damage. cooldown: 11',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 11422 } as NewDamageEffect],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Sora = {
  name: NameEnum.Sora,
  title: 'Harpy',
  bio: "Sora was originally turned away from the SF for being too young, but after a quick display of her skills, they were eager to have her join the Earth defense. Timid by nature, her indecisiveness makes her look to the Commander for constant validation, but she'll do whatever it takes to keep her fellow humans safe.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.E,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 461,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 379,
  base_skill_damage: 379,
  skill: {
    name: 'Death From Above',
    description: 'shoots two electric bullets, each dealing 27891 damage. cooldown: 8',
    effects: [{ type: EffectEnum.Damage, damage: () => 2 * 27891 } as NewDamageEffect],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Ember = {
  name: NameEnum.Ember,
  title: 'The Maniac',
  bio: "For the most part, people just try to stay out of Ember's way. A destructive force all her own, she gets off on the thrill of destroying her enemies. Sometimes it seems like she's having too much fun-this is a war after all-but at least she's pointing her guns in the right direction.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.E,
  class: ClassEnum.Artillery,
  attack_speed: 2.2,
  normal_attack: 399,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 362,
  base_skill_damage: 362,
  skill: {
    name: 'Dance of Death',
    description: 'shoots 4 enhanced bullets, each dealing 13991 damage cooldown: 8',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 13991 } as NewDamageEffect],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Chiharu = {
  name: NameEnum.Chiharu,
  title: 'Corsair',
  bio: "The military normally wouldn't employ the likes of space pirates or other outlaws to fight alongside their drafted soldiers, but with a situation this dire they couldn't afford to be picky. Chiharu is one of the most renown pirates to occupy Human space. For as wary as the soldiers are fo trusting someone who should technically be their enemy, there's an undeniable charm and wit about her that makes her very likable.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.J,
  class: ClassEnum.Artillery,
  attack_speed: 1.1,
  normal_attack: 1248,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1131,
  base_skill_damage: 1131,
  skill: {
    name: "Dead Man's Curse",
    description: 'shoots a powerful bullet at the monster with the highest health, dealing 65165 damage. cooldown: 9',
    effects: [{ type: EffectEnum.Damage, damage: () => 65165 } as NewDamageEffect],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Irina = {
  name: NameEnum.Irina,
  title: 'Honeybee',
  bio: "Irina wasn't supposed to be a part of the war effort at all, until someone had the brilliant idea of strapping a missile launcher up to a girl on roller skates. Now, she's the fastest unit they've got on the force, and with her giant weaponry, she's also one of the most deadly.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.A,
  class: ClassEnum.Artillery,
  attack_speed: 2.2,
  normal_attack: 627,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 569,
  base_skill_damage: 569,
  skill: {
    name: 'Rocket Ricochet',
    description: 'fires 4 missiles at target, each dealing 14230 damage. cooldown: 6',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 14230 } as NewDamageEffect],
    cooldown: 6
  } as NewSkill
} as NewAgent;

export const Yuuha = {
  name: NameEnum.Yuuha,
  title: 'Lotus',
  bio: "War is no place for a pacifist, yet Yuuha remains in the SF alliance anyway. Fighting goes against everything she believes in, but unlike others, she understands that sometimes, there's no logical alternative.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.C,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 733,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 604,
  base_skill_damage: 604,
  skill: {
    name: 'Dance of the Lotus',
    description: 'deals 26563 damage and knockbacks all monsters by 1.6 unit distances. cooldown: 16',
    effects: [{ type: EffectEnum.Damage, damage: () => 26563 } as NewDamageEffect],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Uzu = {
  name: NameEnum.Uzu,
  title: 'Abyss',
  bio: "Previously employed in aquatic biological and technological research, Uzu saw the SF Alliance as a way to expand her skills. More interested in the benefits of war than the war effort itself, most soldiers don't respect her too much. But she could care less what other people think.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.J,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 1865,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1766,
  base_skill_damage: 1766,
  skill: {
    name: 'Crushing Embrace',
    description:
      'releases her tentacles and deals 57490 damage to the surrounding units, knockbacks enemy for 1 unit distance and applies a 1 second mini-stun. cooldown: 16',
    effects: [{ type: EffectEnum.Damage, damage: () => 57490 } as NewDamageEffect],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Denka = {
  name: NameEnum.Denka,
  title: 'Groundhog',
  bio: "Coming from a family of wealthy investors, Denka begged her parents to let her join the SF. Though she's equipped with the finest weapons and armor money can buy, she's far too cocky for her own good. Her intentions may be pure but people are wary that she's only there to further her family's reputation.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.E,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 760,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 723,
  base_skill_damage: 723,
  skill: {
    name: 'Devastating Pincer Strike',
    description: 'shoots 3 electric drills, each dealing 24214 damage. cooldown: 9',
    effects: [{ type: EffectEnum.Damage, damage: () => 3 * 24214 } as NewDamageEffect],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Reika = {
  name: NameEnum.Reika,
  title: 'Iris',
  bio: "As the Commander's secretary, Reika has a very stressful and important job to do. Being the right-hand woman of one of the most prominent military figures in the war isn't a small feat. Sometimes she gets flustered and is naturally very shy, but when it comes to her duty she sets her own insecurities aside to protect those she cherishes.",
  organization: OrganizationEnum.NDS,
  cup_size: SizeEnum.I,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 733,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 604,
  base_skill_damage: 604,
  skill: {
    name: 'Might of the Alliance',
    description: 'launches a rocket towards the target, dealing 86932 damage. cooldown: 9',
    effects: [{ type: EffectEnum.Damage, damage: () => 86932 } as NewDamageEffect],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Noa = {
  name: NameEnum.Noa,
  title: 'The Professor',
  bio: "A brilliant student in the tech industry, Noa seems only able to function after a dozen cups of coffee or energy drinks. Somewhat sleepy at all times, she is surprisingly alert and ready-for-action at any given moment. People can't believe she's able to create such innovative and efficient technologies for the war effort, but she still manages it somehow.",
  organization: OrganizationEnum.NDS,
  cup_size: SizeEnum.D,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 929,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 880,
  base_skill_damage: 880,
  skill: {
    name: 'Enhanced Plasma Cannon',
    description:
      'releases a drone dealing 50922 damage to the target area and slow down to 60% for 6 seconds. cooldown: 15',
    effects: [{ type: EffectEnum.Damage, damage: () => 50922 } as NewDamageEffect],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Neugena = {
  name: NameEnum.Neugena,
  title: 'bucktail',
  bio: "No one's really sure where Neugena came from. Nor are they certain of how she became so skilled at hunting. But one's asking questions, especially when she talks about killing for sport so often. No one wants to become her next prey.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.D,
  class: ClassEnum.Gunner,
  attack_speed: 4.4,
  normal_attack: 356,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 293,
  base_skill_damage: 293,
  skill: {
    name: "Hunter's Sense",
    description:
      'releases a blasting arrow, dealing (default skill damage * 0.00020)% of enemies current hp in a small area (minimum damage = skill damage). cooldown: 20',
    effects: [
      {
        type: EffectEnum.Damage,
        damage: (params: EffectParamType) => {
          const { agent, target } = params;
          let damage = agent.base_skill_damage * target.current_health * 0.0002;

          if (damage < agent.base_skill_damage) {
            damage = agent.skill_damage;
          }

          return damage;
        }
      } as NewDamageEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Larisa = {
  name: NameEnum.Larisa,
  title: 'Katyusha',
  bio: "The creation of the SF brought together soldiers of all flocks, including those like Larisa. Her home country naturally does things a little differently than the rest of the world, and she's got an attitude to match. Unconcerned with rules and regulations, sometimes it can be a challenge keeping her in line with your orders.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.G,
  class: ClassEnum.Artillery,
  attack_speed: 1.1,
  normal_attack: 1711,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1552,
  base_skill_damage: 1552,
  skill: {
    name: 'Guardian of the Motherland',
    description: 'fires a high explosive missile at target locations dealing 69856 damage. cooldown: 11',
    effects: [{ type: EffectEnum.Damage, damage: () => 69856 } as NewDamageEffect],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Rui = {
  name: NameEnum.Rui,
  title: 'Femme Fatale',
  bio: "Rui refused to be given a projectile weapon for the war, instead insisting on wielding her spiked mace. According to her it 'made things a lot more fun'. Her commanding officers weren't too sure what that meant, but as long as she's doing damage, they aren't complaining. Not to mention, her flirty personality is impossible for men to resist.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.D,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1014,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 964,
  base_skill_damage: 964,
  skill: {
    name: "Devil's Contract",
    description:
      'enters demonic mode which increases her attack damage to 16382.6, attack range and area for 10 seconds. cooldown: 17',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 10
      } as NewEffect
    ],
    cooldown: 17
  } as NewSkill
} as NewAgent;

export const Kotora = {
  name: NameEnum.Kotora,
  title: 'Tiger',
  bio: "It's not uncommon for other soldiers to report concerns regarding Kotora's behavior. She's mischievous and playful, almost exaggerating at times. But despite her to-the-wind philosophy, she enjoys the thrill of the hunt. And luckily for Earth, Kotora considers the invaders the perfect prey.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.J,
  class: ClassEnum.Artillery,
  attack_speed: 2.2,
  normal_attack: 832,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 754,
  base_skill_damage: 754,
  skill: {
    name: 'Roar of the Beast',
    description:
      'launches an artillery shell towards the target location, which splits into 4 shells, each dealing 16404 damage. cooldown: 11',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 16404 } as NewDamageEffect],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Vanessa = {
  name: NameEnum.Vanessa,
  title: 'Belle',
  bio: "Vanessa is from a deep underwater city which hasn't quite caught up to the rest of the world's cultural benchmark. Other soldiers often think of her as old-fashioned and out-dated, but an overall sweet gal. Sometimes she can have a hard time feeling at home with the widely-accepted social standard, despite knowing people have the best intentions.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.K,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 1267,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 1200,
  base_skill_damage: 1200,
  skill: {
    name: 'Banishment of the Beast',
    description: 'creates an electric cage, stunning enemies for 8 seconds. cooldown: 34',
    effects: [],
    cooldown: 34
  } as NewSkill
} as NewAgent;

export const Aoi = {
  name: NameEnum.Aoi,
  title: 'Astro',
  bio: "When it comes to Aoi, what you see is what you get. She's cute and fun-loving, and extremely curious. That sort of personality comes in handy when you're in the business of gathering information. But sometimes she can go a bit too far, prying into things she shouldn't, like the personal lives and secrets of her fellow soldiers.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.B,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 1275,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1207,
  base_skill_damage: 1207,
  skill: {
    name: 'Gamma Blaster',
    description: 'randomly picks 6 agent(s), add 25% critical rate for 6 seconds. cooldown: 9',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team.forEach((agent) => (agent.critical_rate += 0.25));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team.forEach((agent) => (agent.critical_rate -= 0.25));
        },
        duration: 6
      } as NewEffect
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Sara = {
  name: NameEnum.Sara,
  title: 'Medusa',
  bio: "Sara has always thought that she had the charm and beauty to sway anyone to do what she wanted. She's seen other women do it, after all, why couldn't she? What she fails to accept is that she is more aptly described as cute rather than sexy, so her attempts at flirtation tend to be seen as humorous, which only pisses her off more.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.C,
  class: ClassEnum.Support,
  attack_speed: 3.1,
  normal_attack: 856,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 811,
  base_skill_damage: 811,
  skill: {
    name: 'Paralyzing Stare',
    description: 'shoots a gigantic snake dealing 56213 damage. cooldown: 11',
    effects: [{ type: EffectEnum.Damage, damage: () => 56213 } as NewDamageEffect],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Mai = {
  name: NameEnum.Mai,
  title: 'White Lion',
  bio: "In the face of hardship, Mai finds herself keeping a cool head. Rational and calm under pressure, some units have found that Mai is the glue that holds them together, keeping the mission as a primary focus until it is complete. That's also helped by the fact that sheÄs so cute, too. Her trusty lazer-shooting cat also helps too.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.B,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 984,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 811,
  base_skill_damage: 811,
  skill: {
    name: "Soldier's Will",
    description: 'shoots bullets rapidly. enemies that were hit wil take 85121 damage once. cooldown: 13',
    effects: [{ type: EffectEnum.Damage, damage: () => 85121 } as NewDamageEffect],
    cooldown: 13
  } as NewSkill
} as NewAgent;

export const Tsukiko = {
  name: NameEnum.Tsukiko,
  title: 'Arsenal',
  bio: "SF wanted to experiment to see just how much weaponry you could attach to a soldier before it becomes a liability rather than an asset. Their answer was Tsukiko. She's loaded to the brim with knives, guns and weapons of all kinds, ready for any situation the war throws at her. Of course, the experiment was only partially successful, because Tsukiko is the only soldier in the force capable of working with that much firepower at once.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.F,
  class: ClassEnum.Artillery,
  attack_speed: 1.1,
  normal_attack: 1711,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1552,
  base_skill_damage: 1552,
  skill: {
    name: 'Bulletstorm',
    description:
      'shoots out a devastating sound wave dealing 23285 damage and increases the damage enemies receive by 35% for 9 seconds. cooldown: 38',
    effects: [
      {
        type: EffectEnum.Debuff,
        apply: (params: EffectParamType) => {
          const { target } = params;
          target.damage_taken_multiplier *= 1.35;
        },
        remove: (params: EffectParamType) => {
          const { target } = params;
          target.damage_taken_multiplier /= 1.35;
        },
        duration: 9
      } as NewEffect,
      {
        type: EffectEnum.Damage,
        damage: () => 23285
      } as NewDamageEffect
    ],
    cooldown: 38
  } as NewSkill
} as NewAgent;

export const Yukako = {
  name: NameEnum.Yukako,
  title: 'The Ghost',
  bio: 'Primarily in charge of the tech supplied by the Department of Orbital Defense, Yukako is used to working alone. Her quick wits and handy knowledge of electronics have gotten her far by herself, so working in a team like yours can sometimes catch her off guard.',
  organization: OrganizationEnum.NDS,
  cup_size: SizeEnum.A,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 984,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 811,
  base_skill_damage: 811,
  skill: {
    name: "Spirit's Lethal Kiss",
    description: 'increases the damage of all gunner agents to 150% for 12 seconds. cooldown: 25',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.normal_attack *= 1.5;
              agent.skill_damage *= 1.5;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.normal_attack /= 1.5;
              agent.skill_damage /= 1.5;
            });
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 25
  } as NewSkill
} as NewAgent;

export const Coco = {
  name: NameEnum.Coco,
  title: 'Bearclaw',
  bio: "Coco want nothing to do with this war business, preferring to spend her time gorging on tea and cookies, but when Zeth destroyed her favorite bakery, she couldn't sit by and let it happen. She won't stop until her favorite bakery has been avenged, and will use the money to help rebuild it.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.B,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 2531,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 2398,
  base_skill_damage: 2398,
  skill: {
    name: 'Thrashing Paws',
    description:
      'she will encourage enemies run 200% faster for 1.5 seconds. and if coco is the only support in the team, she will increases 433% damage of all friendly agents in the team for 7 seconds. cooldown: 6',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const not_valid = team.filter((agent) => agent.class === ClassEnum.Support).length > 1;

          if (not_valid) {
            return;
          }

          team.forEach((agent) => {
            agent.normal_attack *= 4.33;
            agent.skill_damage *= 4.33;
          });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          const not_valid = team.filter((agent) => agent.class === ClassEnum.Support).length > 1;

          if (not_valid) {
            return;
          }

          team.forEach((agent) => {
            agent.normal_attack /= 4.33;
            agent.skill_damage /= 4.33;
          });
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 6
  } as NewSkill
} as NewAgent;

export const Pan = {
  name: NameEnum.Pan,
  title: 'Liberty',
  bio: "Pan is a cop without a purpose. Her precinct took her off her most important case after things got heated, and now she's agreed to help you with the war effort.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.G,
  class: ClassEnum.Gunner,
  attack_speed: 4.4,
  normal_attack: 503,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 414,
  base_skill_damage: 414,
  skill: {
    name: 'Triple-Tap',
    description:
      'cast a non-is_stackable buff on all friendly gunner agents. increases critical rate to 20% and critical damage to 120% for 12 seconds. cooldown: 25',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.critical_rate += 0.2;
              agent.critical_damage += 1.2;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.critical_rate -= 0.2;
              agent.critical_damage -= 1.2;
            });
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 25
  } as NewSkill
} as NewAgent;

export const Hitomi = {
  name: NameEnum.Hitomi,
  title: 'Kairos',
  bio: "A resident of Sohle, Hitomi joined the SF hoping to help protect the citizens of the world in any way she can. Despite having lost her mother and sister in the initial attack, she is surprisingly positive, using her uplifting demeanor to keep her fellow soldiers' morale high.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.D,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 1603,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1518,
  base_skill_damage: 1518,
  skill: {
    name: 'Cycle of Eternal Pain',
    description: 'increases the attack speed of all agents to 220% for 7 seconds. cooldown: 19',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team.forEach((agent) => (agent.attack_speed *= 2.2));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team.forEach((agent) => (agent.attack_speed /= 2.2));
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 19
  } as NewSkill
} as NewAgent;

export const Cadence = {
  name: NameEnum.Cadence,
  title: 'Cerberus',
  bio: "Cadence has been in the military for a long time, and is a stickler for the rules and traditions that come with it. As happens often to long-time soldiers, she can come across as overly formal, and sometimes her personality is a bit overbearing. But in a war setting, she's guaranteed to do a job well done.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.D,
  class: ClassEnum.Artillery,
  attack_speed: 2.2,
  normal_attack: 1084,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 983,
  base_skill_damage: 983,
  skill: {
    name: 'Armament Strike',
    description: 'calls in laser barrage and deals 68821 damage to all monsters. cooldown: 10',
    effects: [{ type: EffectEnum.Damage, damage: () => 68821 } as NewDamageEffect],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Uni = {
  name: NameEnum.Uni,
  title: 'Cupid',
  bio: "Hiding behind Uni's heavenly and virtuous appearance is an arrogant personality one wouldn't expect. But since her long-ranged combat skills are so impeccable, no one's going to openly complain about it. No one's brave enough to say it out loud, but it's a common rumor that Uni is only in SF to display her own superiority.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.K,
  class: ClassEnum.Support,
  attack_speed: 4,
  normal_attack: 797,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 754,
  base_skill_damage: 754,
  skill: {
    name: "Archer's Judgement",
    description: 'casts an arrow barrage to deal 86411 damage and stuns for 6 seconds. cooldown: 20',
    effects: [{ type: EffectEnum.Damage, damage: () => 86411 } as NewDamageEffect],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Sizuko = {
  name: NameEnum.Sizuko,
  title: 'Reaper',
  bio: "Before joining SF, Sizuko worked mostly alone in the city's morgue, handling the deceased. Now that she's in the company of many other soldiers who are very much alive, her demeanor can come across as macabre and morbid sometimes. She doesn't mean to be, but everyone considers her a little strange.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.K,
  class: ClassEnum.Striker,
  attack_speed: 2,
  normal_attack: 619,
  critical_rate: 0.59,
  critical_damage: 2.018,
  skill_damage: 587,
  base_skill_damage: 587,
  skill: {
    name: "Mortician's Touch",
    description:
      'throws a soul-scythe, after it attach on the enemy will split into 4 souls, each dealing 35211 damage and inducing fear to the enemy for 4 seconds. cooldown: 18',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 35211 } as NewDamageEffect],
    cooldown: 18
  } as NewSkill
} as NewAgent;

export const Chihiro = {
  name: NameEnum.Chihiro,
  title: 'Thresher',
  bio: "At first glance, Chihiro seems like a sweet little girl. But she's got a mouth like a sailor and the personality to macht someone rough, tough, and hardcore. She's truly a perfect example not to judge a book by its cover... Little girls are very capable of causing extreme mayhem.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.C,
  class: ClassEnum.Artillery,
  attack_speed: 0.5,
  normal_attack: 4297,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 3898,
  base_skill_damage: 3898,
  skill: {
    name: 'Shark Bite',
    description:
      'bullets will now penetrate targets. increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 5
      } as NewEffect
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Mei = {
  name: NameEnum.Mei,
  title: 'Amethyst',
  bio: "One of the newest cadets in the program, Mei is all too eager to please her superiors as best she can, sometimes even going further than her comfort zone to do so. She's desperately afraid of failure, and will stop at nothing to make sure she does everything right. When your team is labeled traitors of the government, she's all too happy to bring you in.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.G,
  class: ClassEnum.Striker,
  attack_speed: 1.5,
  normal_attack: 858,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 815,
  base_skill_damage: 815,
  skill: {
    name: 'Ringlets of Death',
    description: 'throws out a chakram, ricocheting onto 4 enemies, dealing 24463 damage to each enemy. cooldown: 12',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 24463 } as NewDamageEffect],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const Riho = {
  name: NameEnum.Riho,
  title: 'Artemis',
  bio: "Riho was already training for the GSR before the aliens attacked. Part of her worried it would end up being a boring job, but now she has a reason to use her skills on actual enemies. She's keen on showing the world--and the aliens-- what she can do, no matter how small she might be.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.C,
  class: ClassEnum.Gunner,
  attack_speed: 2.2,
  normal_attack: 1235,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1018,
  base_skill_damage: 1018,
  skill: {
    name: 'Furious Flurry',
    description:
      'summons a group of giant redhounds at the target location, dealing 76324 damage over 2 seconds. cooldown: 9',
    effects: [{ type: EffectEnum.Damage, damage: () => 76324 } as NewDamageEffect],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Mitsu = {
  name: NameEnum.Mitsu,
  title: 'Delta',
  bio: "Mitsu has looked up to Sky Fleet for a long time, and always dreamed of joining the program. Through diligent studying and keeping herself in perfect condition, she eventually found a place in the Airspace Defense Bureau. Now living her dream, she's determined to be seen as a hero to everyone in her home town, and does everything possible to get her name out there.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.D,
  class: ClassEnum.Artillery,
  attack_speed: 1.1,
  normal_attack: 2149,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1949,
  base_skill_damage: 1949,
  skill: {
    name: 'Soaring Strike',
    description: 'shoots mega laser beams dealing 77963 damage. cooldown: 14',
    effects: [{ type: EffectEnum.Damage, damage: () => 77963 } as NewDamageEffect],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Akina = {
  name: NameEnum.Akina,
  title: 'The Dragon',
  bio: "The very moment they destroyed her pyrotechnic temple, Akina hated the aliens with all of her being. Hellbent on destroying all foreign lifeforms she see - and backed with the firepower to do it - this deity won't rest until every last one of them is destroyed or repelled.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.H,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1287,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 1223,
  base_skill_damage: 1223,
  skill: {
    name: 'Vengeance of the Sun',
    description:
      'punches out a fire-fist dealing 80727 damage to an area and ignites the enemy for 5 seconds, dealing 1903 damage every seconds. cooldown 9',
    effects: [
      { type: EffectEnum.Damage, damage: () => 80727 } as NewDamageEffect,
      { type: EffectEnum.DOT, duration: 5, interval: 1, damage: () => 1903 } as NewDOTEffect
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Akari = {
  name: NameEnum.Akari,
  title: 'Tinker',
  bio: "Akari is a small girl with a loud and abrasive mouth. She's crude and undignified, but she gets the job done. One of the best mechanics Starfleet has at their disposal, she's too valuable of an asset to really let go of...",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.C,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 2697,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 2697,
  base_skill_damage: 2697,
  skill: {
    name: 'Riposte',
    description:
      'summons a damage circle under her feet dealing total 53935 damage in 1 second, then will turn into a healing circle, heal friendly units for total (default skill damage * 7000%) in 3 seconds. cooldown: 7',
    effects: [{ type: EffectEnum.DOT, duration: 1, interval: 1, damage: () => 53935 } as NewDOTEffect],
    cooldown: 7
  } as NewSkill
} as NewAgent;

export const Sayaka = {
  name: NameEnum.Sayaka,
  title: 'Crow',
  bio: "Sayaka never really wanted to fight. The thought of other getting hurt made her anxious, especially her closest friends and loved ones. But when the call to arms was made, she couldn't help but feel she needed to use her skills to defend the Earth from annihilation.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.H,
  class: ClassEnum.Striker,
  attack_speed: 1.8,
  normal_attack: 721,
  critical_rate: 0.84,
  critical_damage: 2.038,
  skill_damage: 686,
  base_skill_damage: 686,
  skill: {
    name: 'Omen of Dread',
    description: 'summons 4 lightning birds, each dealing 30682 damage. cooldown: 11',
    effects: [{ type: EffectEnum.Damage, damage: () => 4 * 30682 } as NewDamageEffect],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Momoko = {
  name: NameEnum.Momoko,
  title: 'Mouse',
  bio: 'Despite her youthful appearance, Momoko is actually a highly trained fighter and pilot. She enlisted at a young age for the military, and jumped at the chance to be part of SF. More than anything, she just likes being part of the team.',
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.A,
  class: ClassEnum.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  base_skill_damage: 2160,
  skill: {
    name: 'Piercing Bullet',
    description:
      'increases self attack speed to 530% for 4 seconds. bullet adds a penetration and charming effect, which will scare enemy away for 2 seconds. cooldown: 15',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 5.3;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 5.3;
        },
        duration: 4
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Meteli = {
  name: NameEnum.Meteli,
  title: 'Nebula',
  bio: "The military normally calls ofr mature individuals into action, but Meteli is an exception. Childish by nature but extremely skilled at her craft, this soldier is quite the opposite of who'd you'd expect to be in the middle of a war. She doesn't let the fighting get to her by distracting herself with cute and fluffy things.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.E,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: 'Meteorite Missile',
    description:
      'summons a choo-choo train to knock back and deal 78451 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Damage,
        damage: (params: EffectParamType) => {
          const { agent } = params;

          if (Math.random() < 0.7) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 10 * 1000; // seconds to ms
          }

          return 78451;
        }
      } as NewDamageEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Hoshiko = {
  name: NameEnum.Hoshiko,
  title: 'Zircon',
  bio: "Hoshiko's father is a decorated general in the military, so it was only natural of her to follow in his footsteps and join the fight for Earth. But it's difficult to distinguish herself as an individual when her father is so well-known. She wishes her fellow soldiers would just respect her for her own deeds and not those of her father.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.M,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 1613,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1613,
  base_skill_damage: 1613,
  skill: {
    name: 'Crystalline Kaleidoscope Strike',
    description:
      'cast a is_stackable buff on all striker agents, each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Striker)
            .forEach((agent) => {
              agent.attack_speed *= 1.2;
              agent.normal_attack *= 1.4;
              agent.skill_damage *= 1.4;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Striker)
            .forEach((agent) => {
              agent.attack_speed /= 1.2;
              agent.normal_attack /= 1.4;
              agent.skill_damage /= 1.4;
            });
        },
        duration: 24
      } as NewEffect
    ],
    is_stackable: true,
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Feme = {
  name: NameEnum.Feme,
  title: 'Jackal',
  bio: "If there's any agent that you should watch yourself around, it's Feme. A sadist at heart, she's only holding herself back so as not to cause too much collateral damage to SF's own troops. Incredibly, some troops even feel bad for the aliens when they see her fight against them. War might be hell for an average human, bust she's found herself at the world's biggest playground.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.G,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Requiem of Pain',
    description:
      'shoot 2 energy bolts from the ancient sphinx cannon, deals normal attack damage with aoe. increases self damage to 460% and critical rate to 1160% for 12 seconds. cooldown: 15',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 4.6;
          agent.skill_damage *= 4.6;
          agent.critical_rate *= 11.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 4.6;
          agent.skill_damage /= 4.6;
          agent.critical_rate /= 11.6;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const NeveX = {
  name: NameEnum.NeveX,
  title: 'Frostbite: Alpha',
  bio: "Sky Fleet Medics treated Neve after a critical injury in battle. The operation went fine, but it is secretly rumored something the monsters did changed the agent in ways that medicine can't fix. She might have been arrogant and cold before, but no one's ever seen her as ruthless or unforgiving as she is now. Some say that the creatures changed her DNA on a fundamental level, increasing her power, but twisting her personality...",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.L,
  class: ClassEnum.Support,
  attack_speed: 0.5,
  normal_attack: 6467,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 6467,
  base_skill_damage: 6467,
  skill: {
    name: 'Avalanche',
    description:
      'deal 10993 damage to all enemies, and slow down to 40% for 3 seconds. all artillery agents critical damage gains an additional 190% for 14 seconds. cooldown: 20',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery)
            .forEach((agent) => (agent.critical_damage += 1.9));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery)
            .forEach((agent) => (agent.critical_damage -= 1.9));
        },
        duration: 14
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 10993 } as NewDamageEffect
    ],
    is_stackable: true,
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Eiko = {
  name: NameEnum.Eiko,
  title: 'Cottontail',
  bio: "Though Eiko's skills are matched only by the best of the best agents in sky fleet, she can't help but feel jealous of others. She wants to remain in the spotlight, or at least be recognized for her actions constantly. Some would describe her as high maintenance, but to her, it's essential to stay like by everyone around her.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.F,
  class: ClassEnum.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  base_skill_damage: 2160,
  skill: {
    name: 'Volley of the Beast',
    description: 'summon an extraterrestrial attack, dealing 58548 damage over 1.5 seconds. cooldown: 9',
    effects: [{ type: EffectEnum.DOT, duration: 1.5, interval: 0.5, damage: () => 58548 } as NewDOTEffect],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Goi = {
  name: NameEnum.Goi,
  title: 'Ruiner',
  bio: "Goi has the best intentions, truly she does. But things don't always work out in her favor. In training, she flunked out on tests of knowledge. But her skills rapidly excelled when she got to the firearms and explosives part of the program. Somehow her bad luck only enhances her destructive power in combat. Set Goi up on a path to destruction and she'll take out many as collateral damage.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.G,
  class: ClassEnum.Artillery,
  attack_speed: 1.5,
  normal_attack: 1394,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1394,
  base_skill_damage: 1394,
  skill: {
    name: 'Napalm Massacre',
    description:
      'launch 3 grenades in a straight line each dealing 25098 damage and mini stuns for 0.2 seconds. cooldown: 10',
    effects: [{ type: EffectEnum.Damage, damage: () => 3 * 25098 } as NewDamageEffect],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const RihoX = {
  name: NameEnum.RihoX,
  title: 'Artemis: Alpha',
  bio: "After a year of service under the Commander, Riho has grown and matured as a person. They've grown closer together and despite still being teased all the time for her short stature, Riho finds that she doesn't mind all that much anymore. She's just happy to be in Sky Fleet with her comrades. the new Riho has certainly become much kinder.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.C,
  class: ClassEnum.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1057,
  base_skill_damage: 1057,
  skill: {
    name: "Hunter's Shot",
    description:
      'summons dozens of the giant redhounds, dealing 9515 damage to all enemies, and increases self attack damage to 189% and attack speed to 276% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectEnum.Self,
        duration: 12,
        apply: (params: EffectParamType) => {
          const { agent } = params;

          agent.attack_speed *= 2.76;
          agent.normal_attack *= 1.89;
          agent.skill_damage *= 1.89;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 2.76;
          agent.normal_attack /= 1.89;
          agent.skill_damage /= 1.89;
        }
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 9515 } as NewDamageEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Setsuna = {
  name: NameEnum.Setsuna,
  title: 'Sabotage',
  bio: "Nobody quite knows how Setsuna joined the SF coalition. She just showed up one day saying she was from the Global Soldier Reserve, and no one questioned her about it. She doesn't talk too much and keeps mostly to herself, but she contributes a great deal when it comes to straight combat. Some say she was trained in a secret ninja facility in another country.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.D,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: "Blade's Whisper",
    description:
      'listen to the whisper in 7 seconds. self buff 1000% damage. consistently swing out 5 blade beams and ignite enemies for 3310 burn damage every seconds. cooldown: 9',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 10;
          agent.skill_damage *= 10;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 10;
          agent.skill_damage /= 10;
        },
        duration: 7
      } as NewEffect,
      { type: EffectEnum.DOT, duration: 7, interval: 1, damage: () => 3310 } as NewDOTEffect
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Hami = {
  name: NameEnum.Hami,
  title: 'Sting',
  bio: "Hami could be described as sweet as honey, with the sting of a wasp when angered. Stay on her good side and she'll be your favorite companion. But cross her and she'll vow to be your worst nightmare. When you're marked as a traitor by your own people, she doesn't ask questions and puts you on her hit list.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.C,
  class: ClassEnum.Gunner,
  attack_speed: 0.8,
  normal_attack: 2727,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2727,
  base_skill_damage: 2727,
  skill: {
    name: "Hornet's Vengeance",
    description:
      'summon 2 giant bumblebees, each of them shoots out laser beam horizontally to the target dealing 55912 damage to any enemies it hits. cooldown: 8',
    effects: [{ type: EffectEnum.Damage, damage: () => 2 * 55912 } as NewDamageEffect],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const O = {
  name: NameEnum.O,
  title: 'Andromeda',
  bio: "O was an assistant in a research facility before being selected for a secret government experiment. After months of being exposed to Alpha energy, she somehow was given the ability to manipulate energy and particles just using her mind. With her newfound abilities, and the desire to learn as much information as she possibly can, she's set out to help people from the threat of the monsters and find justice for the prisoners and herself who underwent the experiment.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.C,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Celestial Judgement',
    description:
      'blast out pure energy to any enemies in an area, dealing 79768 damage to any enemies it hits, and increases her critical chance to 16% and critical damage to 64% for 10 seconds. cooldown 11',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.critical_rate += 0.16;
          agent.critical_damage += 0.64;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.critical_rate -= 0.16;
          agent.critical_damage -= 0.64;
        },
        duration: 10
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 79768 } as NewDamageEffect
    ],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const GaiGai = {
  name: NameEnum.GaiGai,
  title: 'Panda',
  bio: "Fiercely independent and proud, Gai Gai isn't going to let anyone stand in the way of what she wants. She's learned to put herself first and foremost, even to her superiors. She's confident in her ability and combat prowess, and won't let anyone take that, or her position in the Division of Orbital Defense, away from her. Once you've been marked a traitor, she feels like she could do the job alone.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.D,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: 'Banishing Blade',
    description: 'cross slash in large area, dealing 147095 damage to any enemies nearby. cooldown: 10',
    effects: [{ type: EffectEnum.Damage, damage: () => 147095 } as NewDamageEffect],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Rosalie = {
  name: NameEnum.Rosalie,
  title: 'Lust',
  bio: "Rosalie could only be described as a hopeless romantic, desperately trying to search for her soulmate even as war wages around her. She's afraid that if she doesn't mee her match soon, she'll die in combat and never be able to lay eyes on her one true love. As such, the male agents try to steer clear of her, put off by her extremely pushy advances.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.E,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 3264,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 3264,
  base_skill_damage: 3264,
  skill: {
    name: 'Wrath of the Rose',
    description:
      'cast a stackable buff on all artillery agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery)
            .forEach((agent) => {
              agent.attack_speed *= 1.2;
              agent.normal_attack *= 1.4;
              agent.skill_damage *= 1.4;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery)
            .forEach((agent) => {
              agent.attack_speed /= 1.2;
              agent.normal_attack /= 1.4;
              agent.skill_damage /= 1.4;
            });
        },
        duration: 24
      } as NewEffect
    ],
    is_stackable: true,
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Toki = {
  name: NameEnum.Toki,
  title: 'The Witch',
  bio: "It can be difficult to talk to Toki. Not because she's unintelligent, but because she is continuously sarcastic and insincere. You can never tell if she's telling you how she feels or actually just kidding around. She's attractive, but most agents aren't too eager to play her word games and confusing statements. No one can deny her ability to fight, however.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.D,
  class: ClassEnum.Support,
  attack_speed: 2,
  normal_attack: 1624,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1624,
  base_skill_damage: 1624,
  skill: {
    name: "Witch's Curse",
    description:
      'cast a stackable buff on all gunner agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.attack_speed *= 1.2;
              agent.normal_attack *= 1.4;
              agent.skill_damage *= 1.4;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.attack_speed /= 1.2;
              agent.normal_attack /= 1.4;
              agent.skill_damage /= 1.4;
            });
        },
        duration: 24
      } as NewEffect
    ],
    is_stackable: true,
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Wu = {
  name: NameEnum.Wu,
  title: 'Emperor',
  bio: "Wu grew up on the outskirts of Sohle, where she learned to live and thrive in the back alleys and tougher streets of the city. one thing nobody expected of the toughened street kid was that she'd developed an extremely perverted personality. She tends to make others uncomfortable, added to by her up close and personal attitude.",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.G,
  class: ClassEnum.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 613,
  base_skill_damage: 613,
  skill: {
    name: 'Jungle Drums',
    description:
      'release the jungle emperor power, attack will explode with 5 small aoe and increases self normal attack damage to 1035% for 11 seconds. also all striker agents critical rate gains an additional 30% for 4 seconds. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 10.35;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 10.35;
        },
        duration: 11
      } as NewEffect,
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team.filter((agent) => agent.class === ClassEnum.Striker).forEach((agent) => (agent.critical_rate += 0.3));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team.filter((agent) => agent.class === ClassEnum.Striker).forEach((agent) => (agent.critical_rate -= 0.3));
        },
        duration: 4
      } as NewEffect
      // {
      //   // TODO: attack will explode with 5 small aoe => huh?
      // }
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const ZiLong = {
  name: NameEnum.ZiLong,
  title: 'Leviathan',
  bio: "Zi Long isn't exactly a rude person, she just knows what the wants and won't allow anything to get in the way of that. Whether it be a battle plan or just a seat in the ship's mess hall, she's not going to let others interfere with what she feels she deserves. Mercy on anyone who tries to tell her no. And once the government tells her you're a threat. You're next on the list.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.I,
  class: ClassEnum.Gunner,
  attack_speed: 2,
  normal_attack: 1126,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1088,
  base_skill_damage: 1088,
  skill: {
    name: "Dragon's Claw",
    description:
      'enters true dragon form which increases self attack speed to 520% for 11 seconds. also increases normal damage to 133% for all gunner agents in the team for 15 seconds. cooldown: 14',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed *= 5.2;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_speed /= 5.2;
        },
        duration: 11
      } as NewEffect,
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team.filter((agent) => agent.class === ClassEnum.Gunner).forEach((agent) => (agent.normal_attack *= 1.33));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team.filter((agent) => agent.class === ClassEnum.Gunner).forEach((agent) => (agent.normal_attack /= 1.33));
        },
        duration: 15
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Ari = {
  name: NameEnum.Ari,
  title: 'Blood Lizard',
  bio: "If there's one thing in the world Ari hates most, it's Shiko. They'd been close allies during the genetic enhancement program in the Sohle labs, but something between them went sour, and they've since sworn vengeance against each other. She'll tolerate working together in Zeth as long as she gets to kill things. Extremely skilled in violence and combat, Ari enjoys doing things the unconventional way, unafraid of getting things messy along the way.",
  organization: OrganizationEnum.ZETH,
  cup_size: SizeEnum.K,
  class: ClassEnum.Artillery,
  attack_speed: 2,
  normal_attack: 1050,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1050,
  base_skill_damage: 1050,
  skill: {
    name: 'Song of the Demon',
    description:
      'Throw out 4 of her lizard swords, each deals 4724 damage to the enemy increases self damage to (1 + any agents on the battlefield, except support) * 34% for 15 seconds. cooldown: 14',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent, team } = params;
          const non_support_num = team.filter((agent) => agent.class !== ClassEnum.Support).length;
          agent.normal_attack *= 1 + non_support_num * 0.34;
          agent.skill_damage *= 1 + non_support_num * 0.34;
        },
        remove: (params: EffectParamType) => {
          const { agent, team } = params;
          const non_support_num = team.filter((agent) => agent.class !== ClassEnum.Support).length;
          agent.normal_attack /= 1 + non_support_num * 0.34;
          agent.skill_damage /= 1 + non_support_num * 0.34;
        },
        duration: 15
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 4 * 4724 } as NewDamageEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Chia = {
  name: NameEnum.Chia,
  title: 'Nora Kun',
  bio: 'A normal feral cat at early 21st century. It got infected with the plague, but nothing happened to their species. When the virus variate to chi, some of their species began to develop intelligence, growing super huge in size. Some of them even began to name each other. One gigantic size of them evolved a skill to fish from void, allowing it ot feed its whole species. They named her Chia, marking the end of virus. After numerous years passed, Chia was found to be staying in the old world. The SF team desperately want to recruit her for no reason.',
  organization: OrganizationEnum.MEOW,
  cup_size: SizeEnum.H, // healthy?
  class: ClassEnum.Gunner,
  attack_speed: 1.1,
  normal_attack: 2236,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  base_skill_damage: 2160,
  skill: {
    name: 'Fishing of the void',
    description:
      'concentrate on fishing for 10 seconds, continuously catching whales and smash that to the enemies face in small area that deals skill damage. increases self damage to 750%, increases gunner attack rate to 130% and damage to 170%. cooldown: 13',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Skill;
          agent.normal_attack *= 7.5;
          agent.skill_damage *= 7.5;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Normal;
          agent.normal_attack /= 7.5;
          agent.skill_damage /= 7.5;
        },
        duration: 10
      } as NewEffect,
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.attack_speed *= 1.3;
              agent.normal_attack *= 1.7;
              agent.skill_damage *= 1.7;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Gunner)
            .forEach((agent) => {
              agent.attack_speed /= 1.3;
              agent.normal_attack /= 1.7;
              agent.skill_damage /= 1.7;
            });
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 13
  } as NewSkill
} as NewAgent;

export const Shiko = {
  name: NameEnum.Shiko,
  title: 'Dragonfly',
  bio: "Shiko was one of two successful projects created by the labs in Sohle. Genetically manipulated to be the perfect agent, she's unmatched in intelligence and strategy and flaunts it well. Ari was supposed to have been her combat partner, but things went awry and they went separate ways, vowing to put an end to one another. However, they worked together once more in Zeth, as she feels that she is too smart for the human race to accept.",
  organization: OrganizationEnum.ZETH,
  cup_size: SizeEnum.L,
  class: ClassEnum.Striker,
  attack_speed: 0.5,
  normal_attack: 2434,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2434,
  base_skill_damage: 2434,
  skill: {
    name: 'Atomic Prowess: Sword Strike',
    description: 'increases self attack speed to 450% and damage to 230% for 11 seconds. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 11
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Kaja = {
  name: NameEnum.Kaja,
  title: 'Shepherd',
  bio: "There's none more effective at infiltration and information gathering than Kaja. Although rather youthful, she's been able to put her young and innocent appearance to good use, often times tricking enemies into believing she is a simple civilian. And while she can be as sweet as she looks everyone is wary that she is an adept liar.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.A,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 1144,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1144,
  base_skill_damage: 1144,
  skill: {
    name: "Shepherd's Call",
    description:
      'summon all of her 16 little lambs, the lambs will charge forward as triangulate formation, deals 82354 damage and stun the enemies for 3 seconds. cooldown: 15',
    effects: [{ type: EffectEnum.Damage, damage: () => 82354 } as NewDamageEffect],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Bia = {
  name: NameEnum.Bia,
  title: 'Halo',
  bio: "Bia was raised in a deeply religious family, and followed a strict set of moral rules all her life. When she joined Sky Fleet, her values didn't change, leading to a highly stringent agent who refuses to follow orders that contradict with her beliefs. Commanding officers find it difficult to work with her, as she is dull and doesn't like change. But with her strength and power, it's hard to turn her away.",
  organization: OrganizationEnum.DOD,
  cup_size: SizeEnum.K,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1160,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 1160,
  base_skill_damage: 1160,
  skill: {
    name: "Fate's Hand: Retribution",
    description:
      "trigger the fate's hand for 6 seconds, increases self skill damage to 2400% and eject all of her daggers. cooldown: 10",
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.skill_damage *= 24;
          agent.attack_mode = AttackModeEnum.None;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.skill_damage /= 24;
          agent.attack_mode = AttackModeEnum.Normal;
        },
        duration: 6
      } as NewEffect,
      { type: EffectEnum.DOT, duration: 6, interval: 0.125, damage: () => 155 } as NewDOTEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Eri = {
  name: NameEnum.Eri,
  title: 'Phaze',
  bio: "It's no question that Eri is a genius. At a young age she was a technological prodigy, surpassing the IQ's of university-level professors all over the world. Now drafted in a war environment, Eri can't help but try to teach her fellow agents what she knows. Too bad half the time they can't understand what she's saying.",
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.F,
  class: ClassEnum.Gunner,
  attack_speed: 1.5,
  normal_attack: 1440,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1440,
  base_skill_damage: 1440,
  skill: {
    name: "It's all in the science",
    description: 'fire a total of 9 piercing bullets in a wide arc, each dealing 10298 damage. cooldown: 14',
    effects: [{ type: EffectEnum.Damage, damage: () => 9 * 10298 } as NewDamageEffect],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Kiyomi = {
  name: NameEnum.Kiyomi,
  title: 'Shimmer',
  bio: "If you ever need a straight answer or opinion, it's a good idea to ask Kiyomi. She's blunt, transparent, and honest beyond what most people would be comfortable with. She feels it's a waste of time to feel shameful for any of her opinions, and will tell you what she thinks at any given moment. No need to wonder what's going through her head.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.G,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: 'Transparency: Crystal Lance',
    description:
      'summon a self buff for 12 seconds, increases self attack speed by 580% and self critical rate by 210%, also apply knockback and slow effect on normal attack. cooldown: 20',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 12
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Musuna = {
  name: NameEnum.Musuna,
  title: 'Ruby',
  bio: "Musuna isn't used to being directly on a battlefield. Her main purpose was for infiltration and stealth missions, but now that the war wages across the whole planet, she's forced into a position where battle is inevitable. She's quite skittish, and most people see her as weak and useless in combat. But when cornered with no other options, she fights for her life with everything she's got.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.A,
  class: ClassEnum.Gunner,
  attack_speed: 1,
  normal_attack: 2191,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  base_skill_damage: 2160,
  skill: {
    name: 'Shuriken Strike',
    description:
      'increases self attack speed to 635% and attack damage to 260% for 3 seconds. bullet adds a penetration, slow and burn effect, slow enemy to 80% and ignite the enemy for 4 seconds, dealing 4537 burn damage every seconds. cooldown: 15',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
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
        duration: 3
      } as NewEffect,
      { type: EffectEnum.DOT, duration: 4, interval: 1, damage: () => 4537 } as NewDOTEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Windy = {
  name: NameEnum.Windy,
  title: 'Death Wing',
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.K,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2085,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2085,
  base_skill_damage: 2085,
  skill: {
    name: 'Shuriken Strike',
    description:
      'bullets will now penetrate targets and deals skill damage. increases attack speed to 200% and increases damage to 380% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Skill;
          agent.attack_speed *= 2;
          agent.normal_attack *= 3.8;
          agent.skill_damage *= 3.8;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Normal;
          agent.attack_speed /= 2;
          agent.normal_attack /= 3.8;
          agent.skill_damage /= 3.8;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Kotaru = {
  name: NameEnum.Kotaru,
  title: 'Fire Fly',
  bio: "As someone who came from a poor family, Kotaru doesn't like the thought of money going to waste. Nor does she tolerate being taken advantage of or working for less than she's worth. Sure, the world is in danger and if they fail, lots of people will die... but what sort of payment does that entail? Not only is she money-minded, but her own pleasure is also very important to her too. Almost a bit too important...",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.I,
  class: ClassEnum.Gunner,
  attack_speed: 1,
  normal_attack: 2160,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2160,
  base_skill_damage: 2160,
  skill: {
    name: 'Blistering Heat Wave',
    description:
      'enter request pay raise mode, doing more kick than usual. increase self normal attack damage to 480% and critical rate to 1160% for 13 seconds. cooldown: 23',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 13
      } as NewEffect
    ],
    cooldown: 23
  } as NewSkill
} as NewAgent;

export const Karry = {
  name: NameEnum.Karry,
  title: 'Stardust',
  bio: "Karry is a native of Phobo, another planet where Sky Fleet travels. She loves nature but hates humans, and uses her magic to help the environment. She's incredibly angry when Zeth intends to dump large amount of the Alpha energy onto her planet, and she'll do whatever it takes to stop them.",
  organization: OrganizationEnum.NONE,
  cup_size: SizeEnum.C,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 1144,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1144,
  base_skill_damage: 1144,
  skill: {
    name: "Nature's Call",
    description:
      'increase skill damage to all agents with D cup breast size or smaller to 120% for 4 seconds. also flings out 16 penetrating meteor hearts in anti-clockwise pattern, each deal 2144.6 damage. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team.filter((agent) => agent.cup_size <= SizeEnum.D).forEach((agent) => (agent.skill_damage *= 1.2));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team.filter((agent) => agent.cup_size <= SizeEnum.D).forEach((agent) => (agent.skill_damage /= 1.2));
        },
        duration: 4
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 16 * 2145 } as NewDamageEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Sato = {
  name: NameEnum.Sato,
  title: 'Chimera',
  organization: OrganizationEnum.ZETH,
  cup_size: SizeEnum.G,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: 'Heretic Shredder',
    description:
      'each Zeth member give 33% of damage to every Zeth member for 6 seconds. her heretic shoots out 9 lazer beams, each beam deals 25107 damage. cooldown: 12',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const zeth_member = team.filter((agent) => agent.organization === OrganizationEnum.ZETH);
          const zeth_member_num = zeth_member.length;
          zeth_member.forEach((agent) => {
            agent.normal_attack *= 1 + 0.33 * zeth_member_num;
            agent.skill_damage *= 1 + 0.33 * zeth_member_num;
          });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          const zeth_member = team.filter((agent) => agent.organization === OrganizationEnum.ZETH);
          const zeth_member_num = zeth_member.length;
          zeth_member.forEach((agent) => {
            agent.normal_attack /= 1 + 0.33 * zeth_member_num;
            agent.skill_damage /= 1 + 0.33 * zeth_member_num;
          });
        },
        duration: 6
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 9 * 25107 } as NewDamageEffect
    ],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const Victoria = {
  name: NameEnum.Victoria,
  title: 'Vampire',
  bio: "Throughout her childhood, Victoria was experimented on by cruel scientists looking to create a superhuman. However, their research failed after she was unsuccessfully mutated and killed all of the researchers. Angry with what the world had made her, she joined Kura's team hoping to kill as many people as she can.",
  organization: OrganizationEnum.ZETH,
  cup_size: SizeEnum.H,
  class: ClassEnum.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 613,
  base_skill_damage: 613,
  skill: {
    name: "Dracula's Wrath",
    description:
      'swing a cross scythe that deals 98063 damage on the target area for 16 seconds. increase the damage of all striker agents to 15% (+5% for each support on the battlefield) for 7 seconds. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          const support_num = team.filter((agent) => agent.class === ClassEnum.Support).length;
          team
            .filter((agent) => agent.class === ClassEnum.Striker)
            .forEach((agent) => {
              agent.normal_attack *= 0.15 + support_num * 0.05;
              agent.skill_damage *= 0.15 + support_num * 0.05;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          const support_num = team.filter((agent) => agent.class === ClassEnum.Support).length;
          team
            .filter((agent) => agent.class === ClassEnum.Striker)
            .forEach((agent) => {
              agent.normal_attack /= 0.15 + support_num * 0.05;
              agent.skill_damage /= 0.15 + support_num * 0.05;
            });
        },
        duration: 7
      } as NewEffect,
      { type: EffectEnum.DOT, duration: 16, interval: 1, damage: () => 98063 / 16 } as NewDOTEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Laura = {
  name: NameEnum.Laura,
  title: 'Tempest',
  organization: OrganizationEnum.ADB,
  cup_size: SizeEnum.C,
  class: ClassEnum.Striker,
  attack_speed: 2,
  normal_attack: 613,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 680,
  base_skill_damage: 680,
  skill: {
    name: 'Defensive Anchor: Ultimate Shielding',
    description:
      'enter the ultimate mode, increases self skill damage to 1200% for 11 seconds. everytime Laura enter the ultimate mode, she will cast a global stackable protection to the team which block normal attack for (base skill damage * 13%) times. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Skill;
          agent.skill_damage *= 12;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Normal;
          agent.skill_damage /= 12;
        },
        duration: 11
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Kura = {
  name: NameEnum.Kura,
  title: 'Imp',
  bio: 'Tired of being disappointed by life as a regular agent, Kura put together a team of other strong and dissatisfied warriors to help her steal the Alpha Stone. They want to use it to make themselves gods, or if that fails to work, destroy the world and everyone in it. She only cares about herself and no one else. Teammates are expendable to her.',
  organization: OrganizationEnum.ZETH,
  cup_size: SizeEnum.G,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: "Hell's Gate: Alpha Enhanced",
    description: 'summons three thunder beams from her trident for 8 seconds, total dealing 25190 damage. cooldown: 3',
    effects: [{ type: EffectEnum.DOT, duration: 8, interval: 1, damage: () => 25190 / 8 } as NewDOTEffect],
    cooldown: 3
  } as NewSkill
} as NewAgent;

export const Ne = {
  name: NameEnum.Ne,
  title: 'Berserk',
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.E,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1226,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: "Berserker's Fury",
    description:
      'release all of the fury, dive into the berserker mode and throw out all of her axe to deal skill damage. increase self attack speed to 200%, damage to 900% and enlarger her attack range 2.5 for 10 seconds. cooldown: 20',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Skill;
          agent.attack_speed *= 2;
          agent.normal_attack *= 9;
          agent.skill_damage *= 9;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.attack_mode = AttackModeEnum.Normal;
          agent.attack_speed /= 2;
          agent.normal_attack /= 9;
          agent.skill_damage /= 9;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Uta = {
  name: NameEnum.Uta,
  title: 'Cathedral',
  bio: "Uta claims that she has never felt emotions ever in her life. A lot of people don't believe her, for various reasons. The only emotion she does display is anger, and she uses that to fuel her strength in battle. A lot of agents in the organization don't like being around her, because she is always negative, but I'm sure that deep down, she's got a heart.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.E,
  class: ClassEnum.Striker,
  attack_speed: 0.5,
  normal_attack: 2452,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2452,
  base_skill_damage: 2452,
  skill: {
    name: 'Aura of Light',
    description:
      'go into holy light mode for 10 seconds, increase self attack rate to 500% and critical damage to 1000%. begin to smash the ground around herself with skill damage. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 10
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Midori = {
  name: NameEnum.Midori,
  title: 'Hopper',
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.J,
  class: ClassEnum.Gunner,
  attack_speed: 1,
  normal_attack: 2145,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2145,
  base_skill_damage: 2145,
  skill: {
    name: 'Lashing Tongue',
    description:
      'shift her phase from electron world and release all of her electron to enemy that deals skill damage. increase self attack speed to 200%, damage to 500% for 7 seconds. cooldown: 15',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 7
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Sera = {
  name: NameEnum.Sera,
  title: 'Zephyr',
  bio: "Partial to pranks and tricks, Sera is a local terror in her city of Celestis. Many of the locals just think she's a nuisance, but she genuinely does care about those around her. Even humans, who aren't well liked on her planet. She's determined to save her planet from Kura and Zeth.",
  organization: OrganizationEnum.NONE,
  cup_size: SizeEnum.D,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 3264,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 3264,
  base_skill_damage: 3264,
  skill: {
    name: 'Breath of the Wind',
    description:
      'cast a non-stackable buff on all friendly agents. add (Sera skill damage * 25%) damage on each hits for 14 seconds. cooldown: 20',
    effects: [
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { agent: Sera, team } = params;
          team
            .filter((agent) => agent.name !== NameEnum.Sera)
            .forEach((agent) => {
              agent.normal_attack += Sera.skill_damage * 0.25;
              agent.skill_damage += Sera.skill_damage * 0.25;
            });
        },
        remove: (params: EffectParamType) => {
          const { agent: Sera, team } = params;
          team
            .filter((agent) => agent.name !== NameEnum.Sera)
            .forEach((agent) => {
              agent.normal_attack -= Sera.skill_damage * 0.25;
              agent.skill_damage -= Sera.skill_damage * 0.25;
            });
        },
        duration: 14
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Livia = {
  name: NameEnum.Livia,
  title: 'Majesty',
  bio: "Nevermind the fact that Livia is a whale, her skills as a strategist and combat veteran makes her invaluable to the war effort. Ok, yeah it's a little strange, but she isn't going to let the quiet discrimination against her species get the way of protecting people. She takes the different treatment in stride, never letting the ultimate goal out of her sight.",
  organization: OrganizationEnum.WIO,
  cup_size: SizeEnum.J,
  class: ClassEnum.Gunner,
  attack_speed: 1,
  normal_attack: 2145,
  critical_rate: 0.69,
  critical_damage: 2.018,
  skill_damage: 2145,
  base_skill_damage: 2145,
  skill: {
    name: 'Call of the Whale',
    description:
      'shoot out a transonic tsunami wave towards to enemies dealing 85815 damage. having a 75% chance to reset the skill cooldown to 2 seconds everytime this skill casts. cooldown: 14',
    effects: [
      {
        type: EffectEnum.Damage,
        damage: (params: EffectParamType) => {
          const { agent } = params;

          if (Math.random() < 0.75) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 14 * 1000; // seconds to ms
          }

          return 85815;
        }
      } as NewDamageEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const ReiJK = {
  name: NameEnum.ReiJK,
  title: 'Sabertooth: Beta',
  bio: 'Rei, even as a young woman, as always smart and charm. Nothing ever seemed to phase her. The younger Rei still holds respect even among her senior agents. Everyone knows not to think they are above her. She always proves them wrong.',
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.I,
  class: ClassEnum.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1057,
  base_skill_damage: 1057,
  skill: {
    name: 'Vanquishing school bag',
    description:
      'enters jk rage mode, school bag will explode with small aeo and increases self normal attack damage to 660% for 12 seconds. also increases critical rate by 40% for all artillery agents in the team for 5 seconds. cooldown: 15',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 6.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 6.6;
        },
        duration: 12
      } as NewEffect,
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery && agent.name !== NameEnum.ReiJK)
            .forEach((agent) => (agent.critical_rate += 0.4));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery && agent.name !== NameEnum.ReiJK)
            .forEach((agent) => (agent.critical_rate -= 0.4));
        },
        duration: 5
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Rei = {
  name: NameEnum.Rei,
  title: 'Sabertooth',
  bio: "An officer of the Global Soldier Reserve (GSR), Rei is all business, rarely cracking a smile, and is severely impatient. She isn't too thrilled with the fact that you're not a seasoned Commander, either. The only thing she's here to do is end this war once and for all, and you seem more like a liability than an asset.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.I,
  class: ClassEnum.Artillery,
  attack_speed: 2,
  normal_attack: 1057,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1057,
  base_skill_damage: 1057,
  skill: {
    name: 'Bite of the Sabertooth',
    description: 'shoots multiple laser beams dealing 25373.9 damage. cooldown: 10',
    effects: [{ type: EffectEnum.Damage, damage: () => 25374 } as NewDamageEffect],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Amikam = {
  name: NameEnum.Amikam,
  title: 'Penance',
  bio: "Kicked out of her convent for being too 'naughty'. Amikam is looking for a good cause to put her services to. She's quick with a gun and a compliment, and promises to give any sinners she finds a proper punishment...",
  organization: OrganizationEnum.GAA,
  cup_size: SizeEnum.E,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Vanquish The Sinners',
    description:
      'attack rapidly, penetrate targets and disperse in a narrow angle. also increases self attack damage to 262%, attack speed to 200%  and critical rate to 37% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 2.62;
          agent.skill_damage *= 2.62;
          agent.attack_speed *= 2;
          agent.critical_rate *= 1.37;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 2.62;
          agent.skill_damage /= 2.62;
          agent.attack_speed /= 2;
          agent.critical_rate /= 1.37;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Iizuna = {
  name: NameEnum.Iizuna,
  title: 'Kitsune',
  bio: "Iizuna tries her very best to be an obedient Fujo, but honestly it's hard some days. This war is the perfect distraction! Maybe getting all the non-fujo things out of her system will maker her a better one once all this fighting is over with.",
  organization: OrganizationEnum.GSR,
  cup_size: SizeEnum.F,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Fox Fire: Inferno',
    description:
      'cast jujutsu for 10 seconds, throw the knife quadruple than usual, deals with skill damage, increase critical rate and critical damage to 30% for all artillery agents in the team and increase self damage to 860%. cooldown: 15',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 8.6;
          agent.skill_damage *= 8.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 8.6;
          agent.skill_damage /= 8.6;
        },
        duration: 10
      } as NewEffect,
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery)
            .forEach((agent) => (agent.critical_damage += 0.3));
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery)
            .forEach((agent) => (agent.critical_damage -= 0.3));
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Tsurumi = {
  name: NameEnum.Tsurumi,
  title: 'Bakoninnin',
  organization: OrganizationEnum.RSA,
  cup_size: SizeEnum.A,
  class: ClassEnum.Gunner,
  attack_speed: 0.5,
  normal_attack: 4336,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 4336,
  base_skill_damage: 4336,
  skill: {
    name: 'Ninjutsu of crane: Thousand Scythe',
    description:
      'increases self attack speed to 400% and attack damage to 121% for 10 seconds. sickle will penetrate through enemy. cooldown: 13',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 10
      } as NewEffect
    ],
    cooldown: 13
  } as NewSkill
} as NewAgent;

export const Mora = {
  name: NameEnum.Mora,
  title: 'Eureka',
  organization: OrganizationEnum.DAB,
  cup_size: SizeEnum.F,
  class: ClassEnum.Support,
  attack_speed: 1,
  normal_attack: 3592,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 3264,
  base_skill_damage: 3264,
  skill: {
    name: 'Nanobot Catalyst',
    description:
      'anything in contract with the nanobot catalyst will expose their weakness for 0.5 seconds. spread out nanobot catalyst around herself for 20 seconds. withing that first 7 seconds, Mora will throw nanobot catalyst more frequently and increase damage to 4200%. cooldown: 20',
    effects: [
      {
        type: EffectEnum.Debuff,
        apply: (params: EffectParamType) => {
          const { target } = params;
          target.weakness_multiplier *= 1.75;
        },
        remove: (params: EffectParamType) => {
          const { target } = params;
          target.weakness_multiplier /= 1.75;
        },
        duration: 20
      } as NewEffect,
      {
        type: EffectEnum.Self,
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
        duration: 7
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Masamune = {
  name: NameEnum.Masamune,
  title: 'Bontenmaru',
  organization: OrganizationEnum.RSA,
  cup_size: SizeEnum.H,
  class: ClassEnum.Striker,
  attack_speed: 1,
  normal_attack: 1395,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 1226,
  base_skill_damage: 1226,
  skill: {
    name: 'Seven blades',
    description:
      'pull out all of her blades in a flash for 10 seconds. enlarge her attack range 2.5, increase her damage to 1800%. cooldown: 20',
    effects: [
      {
        type: EffectEnum.Self,
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
        }
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Chloe = {
  name: NameEnum.Chloe,
  title: 'Dunkel Segnen',
  organization: OrganizationEnum.RSA,
  cup_size: SizeEnum.G,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.028,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Abyssal Pilgrimage',
    description:
      'dive into darkness, bring it with the deepest power. cast a stackable buff, increase damage to 200% and increase all artillery agents damage to 110% for 24 seconds. cooldown: 10',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 2;
          agent.skill_damage *= 2;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 2;
          agent.skill_damage /= 2;
        },
        duration: 24
      } as NewEffect,
      {
        type: EffectEnum.Team,
        apply: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery && agent.name !== NameEnum.Chloe)
            .forEach((agent) => {
              agent.normal_attack *= 1.1;
              agent.skill_damage *= 1.1;
            });
        },
        remove: (params: EffectParamType) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.Artillery && agent.name !== NameEnum.Chloe)
            .forEach((agent) => {
              agent.normal_attack /= 1.1;
              agent.skill_damage /= 1.1;
            });
        },
        duration: 24
      } as NewEffect
    ],
    is_stackable: true,
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Tyrla = {
  name: NameEnum.Tyrla,
  title: 'Armstrong',
  organization: OrganizationEnum.TAP,
  cup_size: SizeEnum.A,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Kuchipudi',
    description:
      'Tyrla begin the kuchipudi dance, increase self damage to 530% and attack speed to 240% for 12 seconds. she bursts out whatever she got from her arm mech while dancing. cooldown: 16',
    effects: [
      {
        type: EffectEnum.Self,
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
        duration: 12
      } as NewEffect
    ],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Seina = {
  name: NameEnum.Seina,
  title: 'Black Hawk',
  organization: OrganizationEnum.TAP,
  cup_size: SizeEnum.E,
  class: ClassEnum.Artillery,
  attack_speed: 1,
  normal_attack: 2099,
  critical_rate: 0.94,
  critical_damage: 2.038,
  skill_damage: 2099,
  base_skill_damage: 2099,
  skill: {
    name: 'Aerial Armageddon',
    description:
      'increase damage to 460 % for 8 seconds. launch out all type of her missiles, her aerosol missiles deals total 29178 over 6 seconds and her guided rockets each deals 7294. cooldown: 12',
    effects: [
      {
        type: EffectEnum.Self,
        apply: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack *= 4.6;
          agent.skill_damage *= 4.6;
        },
        remove: (params: EffectParamType) => {
          const { agent } = params;
          agent.normal_attack /= 4.6;
          agent.skill_damage /= 4.6;
        },
        duration: 8
      } as NewEffect,
      { type: EffectEnum.Damage, damage: () => 8 * 7294 } as NewDamageEffect,
      { type: EffectEnum.DOT, duration: 6, interval: 1, damage: () => 29178 / 6 } as NewDOTEffect
    ],
    cooldown: 12
  } as NewSkill
} as NewAgent;
