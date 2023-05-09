import { RuneData, RuneSet } from '../model';

export const data = {
  type_1: [
    { stat_1: 'AS: +22%', stat_2: 'AS: +10%', stat_3: 'NA: +29.5%' },
    { stat_1: 'NA: +36%', stat_2: 'CD: +18.1%', stat_3: 'NA: +29%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +18%', stat_3: 'AS: +17.2%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +27.1%', stat_3: 'AS: +11.4%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +20.2%', stat_3: 'AS: +14.6%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +30.4%', stat_3: 'AS: +12.6%' },
    { stat_1: 'AS: +12.8%', stat_2: 'NA: +36%', stat_3: 'NA: +25.9%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12%', stat_3: 'NA: +25.9%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +14.9%', stat_3: 'NA: +23.4%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +30.1%', stat_3: 'AS: +10%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +13%', stat_3: 'NA: +24.2%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +10%', stat_3: 'NA: +32.1%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +13.7%', stat_3: 'NA: +23%' },
    { stat_1: 'AS: +22%', stat_2: 'CR: +17.6%', stat_3: 'AS: +15.6%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.4%', stat_3: 'NA: +25.9%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +13%', stat_3: 'NA: +29%' }
  ],
  type_2: [
    { stat_1: 'AS: +22%', stat_2: 'AS: +10%', stat_3: 'NA: +31.1%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +20.2%', stat_3: 'AS: +15.9%' },
    { stat_1: 'NA: +25.9%', stat_2: 'NA: +36%', stat_3: 'CD: +12.8%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +22.3%', stat_3: 'AS: +15.6%' },
    { stat_1: 'NA: +36%', stat_2: 'AS: +15.4%', stat_3: 'NA: +20.2%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +14.6%', stat_3: 'CD: +11.8%' },
    { stat_1: 'NA: +36%', stat_2: 'CR: +22.2%', stat_3: 'NA: +20.5%' },
    { stat_1: 'AS: +22%', stat_2: 'CR: +15.7%', stat_3: 'AS: +15.1%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.6%', stat_3: 'NA: +28.1%' },
    { stat_1: 'NA: +36%', stat_2: 'AS: +11.4%', stat_3: 'NA: +25.5%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.6%', stat_3: 'CD: +14.3%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +27.7%', stat_3: 'CR: +17.6%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +20.2%', stat_3: 'AS: +14.1%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +29%', stat_3: 'CR: +18.2%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +25.4%', stat_3: 'CR: +17.1%' },
    { stat_1: 'AS: +22%', stat_2: 'CR: +14%', stat_3: 'AS: +14.6%' },
    { stat_1: 'NA: +36%', stat_2: 'AS: +12.6%', stat_3: 'NA: +25.5%' }
  ],
  type_3: [
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.6%', stat_3: 'NA: +25.8%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +10%', stat_3: 'NA: +35.9%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.8%', stat_3: 'CR: +20.1%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +26.2%', stat_3: 'CR: +18.2%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.4%', stat_3: 'NA: +29%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +12.6%', stat_3: 'NA: +29%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +10%', stat_3: 'CR: +24.2%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +14%', stat_3: 'CR: +14%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +10%', stat_3: 'NA: +30.9%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +11.6%', stat_3: 'NA: +22.6%' },
    { stat_1: 'NA: +36%', stat_2: 'NA: +28.6%', stat_3: 'CR: +16.8%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +14.1%', stat_3: 'NA: +20.2%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +28.5%', stat_3: 'AS: +11.2%' },
    { stat_1: 'AS: +22%', stat_2: 'NA: +27.1%', stat_3: 'AS: +12.8%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +11.2%', stat_3: 'NA: +29%' },
    { stat_1: 'NA: +36%', stat_2: 'AS: +17.5%', stat_3: 'NA: +18%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +16.9%', stat_3: 'NA: +22.3%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +14.2%', stat_3: 'NA: +22.3%' },
    { stat_1: 'AS: +22%', stat_2: 'AS: +11.4%', stat_3: 'NA: +25.4%' },
    { stat_1: 'AS: +10%', stat_2: 'NA: +36%', stat_3: 'NA: +35.4%' }
  ]
};

export function findBestRuneSets(data: RuneData, bestSets: RuneSet[] = []) {
  let bestScore = 0;
  let bestSet = null;

  const sets = generateAllValidRuneSets(data);

  for (const set of sets) {
    const score = calculateTotalScore(set);
    if (score > bestScore) {
      bestSet = set;
      bestScore = score;
    }
  }

  if (bestSet !== null) {
    bestSets.push(bestSet);
    const remainingRunes = removeUsedRunesFromData(data, bestSet);
    findBestRuneSets(remainingRunes, bestSets);
  }

  return bestSets;
}

export function generateAllValidRuneSets(data: RuneData): RuneSet[] {
  const runeSets = [];
  const type1 = data['type_1'];
  const type2 = data['type_2'];
  const type3 = data['type_3'];

  for (let i = 0; i < type1.length; i++) {
    for (let j = 0; j < type2.length; j++) {
      for (let k = 0; k < type3.length; k++) {
        const set = { type_1: type1[i], type_2: type2[j], type_3: type3[k] };

        if (isValid(set)) {
          runeSets.push(set);
        }
      }
    }
  }

  return runeSets;
}

export function removeUsedRunesFromData(data: RuneData, runeSet: RuneSet) {
  const newData: RuneData = { ...data };

  for (const type in newData) {
    newData[type] = newData[type].filter((r) => r !== runeSet[type]);
  }

  return newData;
}

export function isValid(runeSet: RuneSet) {
  let attackSpeedCount = 0;
  let normalAttackCount = 0;

  for (const rune of Object.values(runeSet)) {
    const stats = Object.values(rune);

    for (const stat of stats) {
      if (stat.includes('AS')) {
        attackSpeedCount++;
      } else if (stat.includes('NA')) {
        normalAttackCount++;
      }
    }
  }

  const isAttackSpeedSet =
    attackSpeedCount <= 5 && attackSpeedCount >= 4 && normalAttackCount <= 4 && normalAttackCount >= 2;

  const isNormalAttackSet =
    normalAttackCount <= 5 && normalAttackCount >= 4 && attackSpeedCount <= 4 && attackSpeedCount >= 2;

  return isAttackSpeedSet || isNormalAttackSet;
}

export function calculateTotalScore(runeSet: RuneSet) {
  const attackSpeedRunes = [];
  const criticalDamageRunes = [];
  const criticalRateRunes = [];
  const normalAttackRunes = [];

  for (const rune of Object.values(runeSet)) {
    const stats = Object.values(rune);

    for (const stat of stats) {
      if (stat.includes('AS')) {
        attackSpeedRunes.push(parseStat(stat) * 1.25);
      } else if (stat.includes('CD')) {
        criticalDamageRunes.push(parseStat(stat));
      } else if (stat.includes('CR')) {
        // criticalRateRunes.push(parseStat(stat) * 1.05);
        criticalRateRunes.push(parseStat(stat));
      } else if (stat.includes('NA')) {
        normalAttackRunes.push(parseStat(stat));
      }
    }
  }

  return (
    calculateScore(attackSpeedRunes) +
    calculateScore(normalAttackRunes) +
    calculateScore(criticalDamageRunes) +
    calculateScore(criticalRateRunes)
  );
}

export function calculateScore(stats: number[]) {
  const sortedStats = stats.sort((a, b) => b - a);
  const totalScore = sortedStats.reduce((total, current) => total + current, 0);
  return totalScore;
}

export function parseStat(stat: string) {
  const [attribute, value] = stat.split(': +');
  const statValue = parseFloat(value.slice(0, -1));

  const maxValue = {
    AS: 22,
    CD: 28.6,
    CR: 28.6,
    NA: 36
  }[attribute];

  return statValue / (maxValue || 1);
}
