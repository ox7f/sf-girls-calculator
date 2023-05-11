import { useAtom } from 'jotai';
import { ChangeEvent, FC, useState } from 'react';
import { Agents } from '@sf-girls-calculator/calculator';

import { EvoTree } from './EvoTree';
import { Modal } from '../common';
import { TabEnum, inputConfig } from '../utils';
import { AgentDB, AgentNameAtom } from '../../atoms';

export const AgentModal: FC = () => {
  const [currentTab, setCurrentTab] = useState(TabEnum.Stats);
  const [agentName, setAgentName] = useAtom(AgentNameAtom);
  const [agent, setAgent] = useAtom(AgentDB.item(agentName));

  const defaultAgent = Agents.Agents.find((a) => a.name === agentName);
  const closeModal = () => {
    setAgentName('');
    setCurrentTab(TabEnum.Stats);
  };

  if (!agent || !defaultAgent) {
    return null;
  }

  const renderBody = () => {
    switch (currentTab) {
      case TabEnum.Stats:
        return Object.entries(inputConfig).map(([name, { label, abbrTitle, step }]) => (
          <div className="input-control" key={name}>
            <label className="font-bold">
              {label}
              {abbrTitle && (
                <abbr style={{ marginLeft: '5px' }} title={abbrTitle}>
                  ?
                </abbr>
              )}
            </label>
            <input
              className="hover-grow focus-grow"
              type="number"
              min="0"
              step={step}
              name={name}
              value={`${agent.stats[name]}`}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const newValue = Number(event.target.value);
                if (event.target.value.includes('-')) {
                  event.preventDefault();
                } else {
                  setAgent({ ...agent, stats: { ...agent.stats, [name]: newValue } });
                }
              }}
            />
          </div>
        ));
      case TabEnum.Bio:
        return (
          <>
            {defaultAgent.bio ? (
              defaultAgent.bio.split('\n').map((bio, i) => <p key={i}>{bio}</p>)
            ) : (
              <p>No bio - will add it later</p>
            )}
          </>
        );
      case TabEnum.Skill:
        return (
          <>
            {defaultAgent.skill.description ? (
              defaultAgent.skill.description.split('\n').map((desc, i) => <p key={i}>{desc}</p>)
            ) : (
              <p>No skill description - will add it later</p>
            )}
          </>
        );
      case TabEnum.EvoTree:
        return <EvoTree />;
    }
  };

  const renderTabs = () => (
    <div className="tab-container tabs-fill">
      <ul>
        {Object.values(TabEnum).map((tab) => (
          <li
            key={tab}
            className={`hover-grow ${tab === currentTab ? 'selected' : ''}`}
            onClick={() => setCurrentTab(tab)}
          >
            <div className="tab-item-content">{tab}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Modal modalId={agentName} clickOutside={closeModal}>
      <div className="modal-header">
        <a
          className="u-pull-right text-xl hover-grow-extreme button text-primary close"
          aria-label="Close"
          style={{ cursor: 'pointer' }}
          onClick={closeModal}
        >
          <span className="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className="svg-inline--fa fa-times fa-w-11 fa-wrapper"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </span>
        </a>
        <div className="modal-title">Edit</div>
      </div>

      <div className="modal-body" style={{ minHeight: '700px' }}>
        <div className="u-center">
          <div className="tile level">
            <div className="tile__icon agent-avatar hover-grow-extreme">
              <div className="avatar avatar--lg bg-white">
                <div
                  style={{
                    height: '100%',
                    // backgroundImage: `url(agents/${agentName.replace(/\s/g, '')}Mini.webp)`,
                    backgroundSize: '100%'
                  }}
                />
              </div>
            </div>
            <div className="tile__container">
              <p className="tile__title m-0 text-xl">{agentName}</p>
            </div>
          </div>
        </div>

        {renderTabs()}
        {renderBody()}
      </div>
    </Modal>
  );
};
