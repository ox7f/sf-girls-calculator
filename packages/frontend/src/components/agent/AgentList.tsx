import { FC } from 'react';
import { FaAngleRight, FaStar } from 'react-icons/fa';

import { Search } from '../common';
import { ViewName } from '../utils';
import { AgentItem } from '../../atoms';

type AgentListProps = {
  agents: AgentItem[];
  viewName: ViewName;
  favorite: (agent: AgentItem) => void;
  select: (agent: AgentItem) => void;
  toggleModal: (agent: AgentItem) => void;
};

export const AgentList: FC<AgentListProps> = ({ agents, viewName, favorite, select }) => {
  const renderAgentList = () =>
    agents.length ? (
      agents.map((agent) => {
        const isSelected = agent.options[viewName].isSelected;
        const className = isSelected ? 'selected animated bounceIn' : '';

        return (
          <li key={agent.name} className={`flex u-relative menu-item u-unselectable ${className}`}>
            <a className="w-100p" onClick={() => select(agent)}>
              {agent.name}
            </a>
            <span
              className="u-absolute favorite"
              style={{ top: '0.75rem', right: '1rem' }}
              onClick={() => favorite(agent)}
            >
              <FaStar color={agent.options.isFavorite ? '#ffdd00' : 'white'} />
            </span>
          </li>
        );
      })
    ) : (
      <li className="menu-item mr-1">
        <p>No results found...</p>
      </li>
    );

  return (
    <>
      <div className="tree-nav-header u-items-center">
        <a href="#sidebar" className="u-shadow-none">
          <FaAngleRight color="darkgrey" />
        </a>
      </div>
      <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar px-3">
            <ul className="menu m-0">
              <div className="sidebar__title font-bold uppercase text-gray-600">Agents</div>
              <li className="menu-item u-sticky">
                <Search />
              </li>
              <ul id="agent-list" className="menu mb-3">
                {renderAgentList()}
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" id="sidebar-close" className="tree-nav-close p-0 u-shadow-none" style={{ boxShadow: 'none' }}></a>
    </>
  );
};
