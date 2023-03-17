import { useSetAtom } from 'jotai';
import { FaCog } from 'react-icons/fa';
import { ResultType } from 'sf-girls-calculator-calculator';
import { AgentNameAtom } from '../../../atoms';
import { ClassTag } from '../../../utils';

interface TableProps {
  result: ResultType;
}

const Table: React.FC<TableProps> = ({ result }) => {
  const setAgentName = useSetAtom(AgentNameAtom);

  const remainingTime = result.time / 1000;
  const remainingHealth = result.target.current_health;

  return (
    <div className="u-center">
      <label>Remaining Time: {remainingTime} second(s)</label>
      <label>Remaining HP: {remainingHealth}</label>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class</th>
            <th>Name</th>
            <th>Damage</th>
            <th>%</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {result.team.map((agent, index) => {
            const {
              name,
              stats: { total_damage }
            } = agent;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className={`tag tag--sm ${ClassTag[agent.class]}`} style={{ cursor: 'default' }}>
                    {agent.class}
                  </div>
                </td>
                <td>{name}</td>
                <td>{total_damage}</td>
                <td>{((total_damage / result.total_damage) * 100).toFixed(2)}</td>
                <td onClick={() => setAgentName(name)} style={{ cursor: 'pointer' }}>
                  <a className="u-center mt-1 text-gray-600">
                    <FaCog />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th>&sum;</th>
            <th></th>
            <th></th>
            <th>{result.total_damage}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
