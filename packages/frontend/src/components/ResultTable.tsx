import { useAtomValue, useSetAtom } from 'jotai';
import { FaCog } from 'react-icons/fa';
import { EditingAgentAtom, ModifiedAgentsAtom, ResultAtom, TotalDamageAtom } from './atoms';

const ResultTable: React.FC = () => {
  const result = useAtomValue(ResultAtom);
  const totalDamage = useAtomValue(TotalDamageAtom);
  const modifiedAgents = useAtomValue(ModifiedAgentsAtom);
  const setEditAgent = useSetAtom(EditingAgentAtom);

  const edit = (name = '') => {
    const agent = modifiedAgents.find((a) => a.name === name) ?? null;
    setEditAgent(agent);
  };

  if (!result) return null;

  return (
    <div className="u-center">
      <label>Remaining Time: {(result.target.duration - result.time + 1) / 1000} second(s)</label>
      <label>Remaining HP: {result.target.current_health.toFixed(2)}</label>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Damage</th>
            <th>%</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {result.team.map((agent, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{agent.name}</td>
              <td>{agent.total_damage}</td>
              <td>{((agent.total_damage / totalDamage) * 100).toFixed(2)}</td>
              <td onClick={() => edit(agent.name)} style={{ cursor: 'pointer' }}>
                <a href={`#${agent.name}`} className="u-center mt-1 text-gray-600">
                  <FaCog />
                </a>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>&sum;</th>
            <th></th>
            <th>{totalDamage.toFixed(2)}</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ResultTable;
