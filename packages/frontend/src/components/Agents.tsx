import { NewAgent } from 'sf-girls-calculator-calculator';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  AgentsAtom,
  EditingAgent,
  FilteredAgentsAtom,
  ModifiedAgentsAtom,
  SelectedAgentsAtom,
  transformModifiedAgentToAgent
} from './atoms';
import { Agent, AgentModal } from './index';
import { Search } from './UI';

const Agents: React.FC = () => {
  const [editAgent, setEditAgent] = useAtom(EditingAgent);
  const [modifiedAgents, setModifiedAgents] = useAtom(ModifiedAgentsAtom);
  const [selectedAgents, setSelectedAgents] = useAtom(SelectedAgentsAtom);
  const filteredAgents = useAtomValue(FilteredAgentsAtom);

  const startEditing = (name = '') => {
    const agent = modifiedAgents.find((a) => a.name === name) ?? null;
    setEditAgent(agent);
  };

  const save = () => {
    const newModifiedAgents = modifiedAgents.map((p) => {
      if (p.name === editAgent?.name) {
        return editAgent;
      }
      return p;
    });

    const newSelectedAgents = selectedAgents.map((p) => {
      if (p.name === editAgent?.name) {
        return transformModifiedAgentToAgent(p, editAgent);
      }
      return p;
    });

    setSelectedAgents(newSelectedAgents);
    setModifiedAgents(newModifiedAgents);

    localStorage.setItem('modified_agents', JSON.stringify(newModifiedAgents));

    startEditing();
  };

  const cancel = () => {
    startEditing();
  };

  return (
    <div>
      <AgentModal cancel={cancel} save={save} />

      <div className="row u-center">
        {filteredAgents.map((agent, index) => (
          <Agent key={index} agent={agent} edit={startEditing} />
        ))}
      </div>
    </div>
  );
};

export const AgentsSelect: React.FC = () => {
  const allAgents = useAtomValue(AgentsAtom);
  const [filteredAgents, setFilteredAgents] = useAtom(FilteredAgentsAtom);
  const [selectedAgents, setSelectedAgents] = useAtom(SelectedAgentsAtom);

  useEffect(() => () => setFilteredAgents(allAgents), []);

  const select = (agent: NewAgent) => {
    setSelectedAgents((prev) => {
      if (prev.map((p) => p.name).includes(agent.name)) {
        return prev.filter((a) => a.name !== agent.name);
      }

      if (prev.length === 6) {
        return [...prev];
      }

      return [...prev, agent];
    });
  };

  return (
    <div>
      <div className="tree-nav-body mx-auto">
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
                <div>
                  <div className="sidebar__title font-bold uppercase text-gray-600">Agents</div>
                  <ul className="menu mb-3">
                    <li className="menu-item">
                      <Search atom={FilteredAgentsAtom} sourceAtom={AgentsAtom} />
                    </li>

                    {filteredAgents.map((agent, index) => {
                      const isSelected = selectedAgents.map((sAgent) => sAgent.name).includes(agent.name);
                      const className = `menu-item ${isSelected ? 'selected' : ''} mr-1`;
                      return (
                        <li key={index} className={className} onClick={() => select(agent)}>
                          <a>{agent.name}</a>
                        </li>
                      );
                    })}

                    {filteredAgents.length === 0 && (
                      <li className="menu-item mr-1">
                        <a>No result...</a>
                      </li>
                    )}
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <a href="#" id="sidebar-close" className="tree-nav-close p-0 u-shadow-none" style={{ boxShadow: 'none' }}></a>
      </div>
    </div>
  );
};

export default Agents;
