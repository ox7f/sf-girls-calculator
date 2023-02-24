import { Agent } from 'sf-girls-calculator-calculator';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAtomValue } from 'jotai';
import { ResultAtom } from './index';

type AgentData = {
  name: string;
  damage: number;
  time: number;
};

const ResultGraph: React.FC = () => {
  const result = useAtomValue(ResultAtom);
  const data: Array<AgentData[]> = [];

  if (!result) return null;

  let highestDamage = 0;

  for (const agent of result.team) {
    const index = result.team.indexOf(agent);
    data[index] = [];

    for (const event of agent.history) {
      data[index].push({
        name: agent.name,
        damage: event.total_damage,
        time: event.time / 1000
      });

      if (event.total_damage > highestDamage) highestDamage = event.total_damage;
    }
  }

  const getRandomColor = (str: string) => {
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

  const getWidth = (): number => {
    return highestDamage < 1000000 ? 60 : highestDamage < 10000000 ? 70 : highestDamage < 100000000 ? 80 : 90;
  };

  // TODO: have action type in tooltip
  return (
    <div style={{ height: '50vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDuplicatedCategory={false} dataKey="time" type="number" name="Time" unit="s" />
          <YAxis dataKey="damage" type="number" name="Damage" width={getWidth()} />
          <Tooltip label="name" />
          <Legend />
          {result.team.map((agent: Agent, index: number) => (
            <Line
              key={index}
              name={agent.name}
              data={data[index]}
              type="basisOpen"
              dataKey="damage"
              stroke={getRandomColor(agent.name)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultGraph;
