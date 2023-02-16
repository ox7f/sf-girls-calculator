import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAtomValue } from 'jotai';
import { ResultAtom } from '../atoms';

type AgentData = {
  name: string;
  damage: number;
  time: number;
};

const Graph: React.FC = () => {
  const result = useAtomValue(ResultAtom);
  const data: Array<AgentData[]> = [];

  if (!result) return null;

  for (const agent of result.team) {
    const index = result.team.indexOf(agent);
    data[index] = [];

    for (const event of agent.history) {
      data[index].push({
        name: agent.name,
        damage: event.total_damage,
        time: event.time / 1000
      });
    }
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="u-center" style={{ height: '500px', width: '90%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDuplicatedCategory={false} dataKey="time" type="number" name="Time" unit="s" />
          <YAxis dataKey="damage" type="number" name="Damage" width={100} />
          <Tooltip label="name" />
          <Legend />
          {result.team.map((agent, index) => (
            <Line
              key={index}
              name={agent.name}
              data={data[index]}
              type="basisOpen"
              dataKey="damage"
              stroke={getRandomColor()}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
