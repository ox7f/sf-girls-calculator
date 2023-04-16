import { Agents } from '@sf-girls-calculator/calculator';
import { useAtom } from 'jotai';
import { ChangeEvent, useState } from 'react';

import { EvoTree } from './EvoTree';
import { Modal } from '../common';
import { InputConfig, TabEnum, inputConfig } from '../utils';
import { AgentDB, AgentNameAtom } from '../../atoms';

const renderHeader = (onClose: () => void) => (
  <div className="modal-header">
    <a className="u-pull-right" aria-label="Close" style={{ cursor: 'pointer' }} onClick={onClose}>
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
);

const renderInput = (
  { label, step, abbrTitle }: InputConfig,
  name: string,
  value: number,
  onChange: (newValue: number) => void
) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (event.target.value.includes('-')) {
      event.preventDefault();
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="input-control" key={name}>
      <label className="font-bold">
        {label}
        {abbrTitle && (
          <abbr style={{ marginLeft: '5px' }} title={abbrTitle}>
            ?
          </abbr>
        )}
      </label>
      <input type="number" min="0" step={step} name={name} value={`${value}`} onChange={handleChange} />
    </div>
  );
};

export const AgentModal: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(TabEnum.Stats);
  const [agentName, setAgentName] = useAtom(AgentNameAtom);
  const [agent, setAgent] = useAtom(AgentDB.item(agentName));

  const defaultAgent = Agents.Agents.find((a) => a.name === agentName);
  const closeModal = () => setAgentName('');

  if (!agent || !defaultAgent) {
    return null;
  }

  const renderBody = () => {
    switch (currentTab) {
      case TabEnum.Stats:
        return Object.entries(inputConfig).map(([name, config]) =>
          renderInput(config, name, agent.stats[name], (newValue: number) =>
            setAgent({ ...agent, stats: { ...agent.stats, [name]: newValue } })
          )
        );
      case TabEnum.Bio:
        return <p>{defaultAgent.bio ?? 'No bio - will add it later'}</p>;
      case TabEnum.Skill:
        return <p>{defaultAgent.skill.description ?? 'No skill description - will add it later'}</p>;
      case TabEnum.EvoTree:
        return <EvoTree />;
    }
  };

  const renderTabs = () => (
    <div className="tab-container tabs-fill">
      <ul>
        {Object.values(TabEnum).map((tab) => (
          <li key={tab} className={tab === currentTab ? 'selected' : ''} onClick={() => setCurrentTab(tab)}>
            <div className="tab-item-content">{tab}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Modal modalId={agentName} clickOutside={closeModal}>
      {renderHeader(closeModal)}

      <div className="modal-body" style={{ minHeight: '700px' }}>
        <div className="r">
          <h3 className="font-alt font-light u-text-center">{agentName}</h3>
        </div>

        {renderTabs()}
        {renderBody()}
      </div>
    </Modal>
  );
};
