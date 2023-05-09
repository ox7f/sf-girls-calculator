import { useSetAtom } from 'jotai';
import { FaCog } from 'react-icons/fa';
import { Agent, ResultType } from '@sf-girls-calculator/calculator';

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
        <div className="tooltip tooltip--bottom" data-tooltip="Edit Agent">
          <a className="u-center mt-1 text-gray-600 hover-grow-extreme">
            <FaCog />
          </a>
        </div>
      </td>
    </tr>
  );
};

export const Table: React.FC<Props> = ({ result }) => {
  return (
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
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};
