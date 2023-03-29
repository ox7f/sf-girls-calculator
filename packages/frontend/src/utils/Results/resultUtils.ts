import { HistoryType, ResultType } from '@sf-girls-calculator/calculator';

export const getColorFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

export const prepareGraphData = (result: ResultType) => {
  const data: Array<HistoryType[]> = [];

  for (const agent of result.team) {
    const index = result.team.indexOf(agent);
    data[index] = [];

    for (const event of agent.history) {
      data[index].push({ ...event, time: event.time / 1000 });
    }
  }

  return data;
};
