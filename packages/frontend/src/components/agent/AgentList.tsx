import { useAtomValue } from 'jotai';
import { FC } from 'react';
import { Agent } from '@sf-girls-calculator/calculator';

import { Search } from '../common';
import { agentIsSelected } from '../utils';
import { AgentListAtom, CurrentViewAtom, FilteredAgentListAtom, SelectedAgentListAtom } from '../../atoms';

export const AgentList: FC<{ select: (agent: Agent) => void }> = ({ select }) => {
  const viewName = useAtomValue(CurrentViewAtom);
  const allAgents = useAtomValue(AgentListAtom);
  const filteredAgents = useAtomValue(FilteredAgentListAtom)[viewName] || [];
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];

  return (
    <>
      <div className="tree-nav-header u-items-center">
        <a href="#sidebar" className="u-shadow-none">
          <span className="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              className="svg-inline--fa fa-chevron-right fa-w-10 fa-wrapper small animated pound text-gray-600"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              ></path>
            </svg>
          </span>
        </a>
      </div>
      <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar px-3">
            <ul className="menu mb-3">
              <div className="sidebar__title font-bold uppercase text-gray-600">Agents</div>
              <li className="menu-item u-sticky u-top-1">
                <Search />
              </li>
              <ul id="agent-list" className="menu mb-3">
                {filteredAgents ? (
                  filteredAgents.map((name) => {
                    const agent = allAgents.find((agent) => agent.name === name);
                    const className = `menu-item u-unselectable ${
                      agentIsSelected(selectedAgents, name) ? 'selected' : ''
                    }`;

                    return (
                      agent && (
                        <li className={className} key={agent.name} onClick={() => select(agent)}>
                          <a>{name}</a>
                        </li>
                      )
                    );
                  })
                ) : (
                  <li className="menu-item mr-1">
                    <a>No result...</a>
                  </li>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" id="sidebar-close" className="tree-nav-close p-0 u-shadow-none" style={{ boxShadow: 'none' }}></a>
    </>
  );
};
