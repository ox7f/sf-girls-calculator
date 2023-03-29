import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Agent, ResultType } from '@sf-girls-calculator/calculator';

import { getColorFromString, prepareGraphData } from '../../../utils/Results';
import { CustomTooltip } from './index';

interface GraphProp {
  result: ResultType;
}

const Graph: React.FC<GraphProp> = ({ result }) => {
  const data = prepareGraphData(result);

  return (
    <div style={{ height: '500px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDuplicatedCategory={false} dataKey="time" type="number" name="Time" unit="s" reversed />
          <YAxis dataKey="total_damage" type="number" name="Damage" mirror />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {result.team.map((agent: Agent, index: number) => (
            <Line
              connectNulls
              dot={false}
              key={index}
              name={agent.name}
              data={data[index]}
              type="basis"
              dataKey="total_damage"
              stroke={getColorFromString(agent.name)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
