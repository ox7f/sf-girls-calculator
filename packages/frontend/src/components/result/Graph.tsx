import { FC, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  LegendProps,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Agent, ResultType } from '@sf-girls-calculator/calculator';

import { CustomTooltip } from './index';
import { getColorFromString, prepareGraphData } from '../utils';

export const Graph: FC<{ result: ResultType }> = ({ result }) => {
  const { team } = result;

  const data = prepareGraphData(result);
  const [currentHover, setCurrentHover] = useState('');

  const handleMouseEnter: LegendProps['onMouseEnter'] = (data) => {
    setCurrentHover(data.value);
  };

  const handleMouseLeave = () => {
    setCurrentHover('');
  };

  // TODO: show crit / evo bonus not in tooltip but as icon on line
  return (
    <ResponsiveContainer>
      <LineChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis allowDuplicatedCategory={false} dataKey="time" type="number" name="Time" unit="s" reversed />
        <YAxis dataKey="totalDamage" type="number" name="Damage" mirror />
        <Tooltip content={<CustomTooltip />} />
        <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        {team.map((agent: Agent, index: number) => (
          <Line
            connectNulls
            data={data[index]}
            dataKey="totalDamage"
            dot={false}
            key={index}
            name={agent.name}
            strokeWidth={agent.name === currentHover ? 2 : 1}
            stroke={getColorFromString(agent.name)}
            type="basis"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
