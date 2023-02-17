import { useAtomValue } from 'jotai';
import { ResultAtom, TotalDamageAtom } from './atoms';
import { Graph, Table } from './UI';

const Result: React.FC = () => {
  const result = useAtomValue(ResultAtom);
  const totalDamage = useAtomValue(TotalDamageAtom);

  if (!result) return null;

  const tableData = {
    head: ['#', 'Name', 'Damage', '%'],
    body: result.team.map((agent) => {
      return [
        String(result.team.indexOf(agent) + 1),
        agent.name,
        agent.total_damage.toFixed(2),
        ((agent.total_damage / totalDamage) * 100).toFixed(2)
      ];
    }),
    foot: ['∑', '', totalDamage.toFixed(2), '']
  };

  return (
    <div>
      <div className="u-center">
        <label>Remaining Time: {(result.target.duration - result.time + 10) / 1000} second(s)</label>
        <label>Remaining HP: {result.target.current_health.toFixed(2)}</label>
        <Table data={tableData} />
      </div>

      <div style={{ height: '40vh' }}>
        <Graph />
      </div>
    </div>
  );
};

export default Result;
