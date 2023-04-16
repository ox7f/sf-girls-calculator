import { Agent, ResultType } from '@sf-girls-calculator/calculator';
import { useSetAtom } from 'jotai';
import { FaCog } from 'react-icons/fa';

import { ClassTag } from '../utils';
import { AgentNameAtom } from '../../atoms';

interface Props {
  result: ResultType;
}

const TableRow: React.FC<{ agent: Agent; index: number; damage: number }> = ({ agent, index, damage }) => {
  const setAgentName = useSetAtom(AgentNameAtom);
  const {
    name,
    class: agentClass,
    stats: { totalDamage }
  } = agent;

  const percentOfTotalDamage = ((totalDamage / damage) * 100).toFixed(2);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className={`tag tag--sm ${ClassTag[agentClass]}`} style={{ cursor: 'default' }}>
          {agentClass}
        </div>
      </td>
      <td>{name}</td>
      <td>{totalDamage}</td>
      <td>{percentOfTotalDamage}</td>
      <td onClick={() => setAgentName(name)} style={{ cursor: 'pointer' }}>
        <a className="u-center mt-1 text-gray-600">
          <FaCog />
        </a>
      </td>
    </tr>
  );
};

export const Table: React.FC<Props> = ({ result }) => {
  const remainingTime = result.time / 1000;
  const remainingHealth = result.target.currentHealth;

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
          {result.team.map((agent, index) => (
            <TableRow key={index} agent={agent} index={index} damage={result.totalDamage} />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>&sum;</th>
            <th></th>
            <th></th>
            <th>{result.totalDamage}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
