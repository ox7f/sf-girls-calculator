import { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Agent, HistoryType, ResultType } from '@sf-girls-calculator/calculator';

import { CustomTooltip, Logs } from './index';
import { getColorFromString, prepareGraphData } from '../utils';

interface GraphProp {
  result: ResultType;
}

export const Graph: React.FC<GraphProp> = ({ result }) => {
  const data = prepareGraphData(result);
  const [logs, setLogs] = useState<HistoryType[]>([]);

  const showLogs = (data: any) => {
    setLogs(data?.payload.data);
  };

  return (
    <>
      <ResponsiveContainer>
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDuplicatedCategory={false} dataKey="time" type="number" name="Time" unit="s" reversed />
          <YAxis dataKey="totalDamage" type="number" name="Damage" mirror />
          <Tooltip content={<CustomTooltip />} />
          <Legend onClick={showLogs} />
          {result.team.map((agent: Agent, index: number) => (
            <Line
              connectNulls
              data={data[index]}
              dataKey="totalDamage"
              dot={false}
              key={index}
              name={agent.name}
              stroke={getColorFromString(agent.name)}
              type="basis"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <Logs logs={logs} />
    </>
  );
};
