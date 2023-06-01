import { useAtom } from 'jotai';
import { FC, MouseEvent } from 'react';
import { FaCog } from 'react-icons/fa';
import { ResultType } from '@sf-girls-calculator/calculator';

import { ClassTag, getAgentInfo } from '../utils';
import { AgentDB, AgentItem } from '../../atoms';

interface TableProps {
  result: ResultType;
  contextMenuHandler: (event: MouseEvent, agent: AgentItem) => void;
}

type TableRow = {
  agentName: string;
  totalDamage: number;
  index: number;
  damage: number;
  contextMenuHandler: (event: MouseEvent, agent: AgentItem) => void;
};

const TableRow: FC<TableRow> = ({ agentName, totalDamage, index, damage, contextMenuHandler }) => {
  const [agent, setAgent] = useAtom(AgentDB.item(agentName));
  const { className } = getAgentInfo(agentName);
  const percentOfTotalDamage = ((totalDamage / damage) * 100).toFixed(2);

  if (!agent) {
    return null;
  }

  const openModal = () => {
    setAgent({
      ...agent,
      options: {
        ...agent.options,
        openModal: true
      }
    });
  };

  return (
    <tr onContextMenu={(event: MouseEvent) => contextMenuHandler(event, agent)}>
      <td>{index + 1}</td>
      <td>
        <div className={`tag tag--sm ${ClassTag[className]}`} style={{ cursor: 'default' }}>
          {className}
        </div>
      </td>
      <td>{agent.name}</td>
      <td>{totalDamage}</td>
      <td>{percentOfTotalDamage}</td>
      <td onClick={openModal} style={{ cursor: 'pointer' }}>
        <div className="tooltip tooltip--bottom" data-tooltip="Edit Agent">
          <a className="u-center mt-1 text-gray-600 hover-grow-extreme">
            <FaCog />
          </a>
        </div>
      </td>
    </tr>
  );
};

export const Table: FC<TableProps> = ({ result, contextMenuHandler }) => {
  const renderTableRows = () =>
    result.team.map((agent, index) => (
      <TableRow
        key={index}
        agentName={agent.name}
        totalDamage={agent.stats.totalDamage}
        index={index}
        damage={result.totalDamage}
        contextMenuHandler={contextMenuHandler}
      />
    ));

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

      <tbody>{renderTableRows()}</tbody>

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
