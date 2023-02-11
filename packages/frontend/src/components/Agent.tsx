import { ClassEnum, NewAgent } from 'sf-girls-calculator-calculator';
import { ChangeEvent, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { AgentAtomType, AgentsAtomFamily, SelectedAgentsAtom } from './atoms';
import { Modal } from './UI';

interface AgentInterface {
  agent: NewAgent;
  select: () => void;
  edit: () => void;
}

const Agent: React.FC<AgentInterface> = ({ agent, select, edit }) => {
  const SelectedAgents = useAtomValue(SelectedAgentsAtom);
  const checked = SelectedAgents.filter((a) => a.name === agent.name).length > 0;
  const disabled = SelectedAgents.length > 5 && !checked;

  const getClassName = () => {
    switch (agent.class) {
      case ClassEnum.Artillery:
        return 'tag--danger';
      case ClassEnum.Gunner:
        return 'tag--info';
      case ClassEnum.Striker:
        return 'tag--warning';
      case ClassEnum.Support:
        return 'tag--success';
    }
  };

  return (
    <div className="col" style={{ minWidth: '350px', maxWidth: '350px' }}>
      <div className="card">
        <div className="card__container ">
          <div
            className="card__image"
            style={{
              backgroundSize: '120%',
              backgroundPosition: 'center'
              // backgroundImage: `url(agents/${agent.name.replace(' ', '')}.png)`
            }}
          ></div>

          <div className="card__title-container">
            <p className="title">{agent.name}</p>
            <span className="subtitle">{agent.title.toUpperCase()}</span>
          </div>
        </div>

        <div className="content">
          <div className="u-overflow-auto" style={{ height: '150px' }}>
            <p>{agent.bio ?? 'No Bio - will add it later'}</p>
          </div>
        </div>

        <div className="card__footer content">
          <div className="u-text-center">
            <div className={`tag tag--sm ${getClassName()}`}>{agent.class}</div>
          </div>
        </div>

        <div className="card__action-bar u-center">
          <a onClick={select}>
            <button
              disabled={disabled}
              className={`hover-grow ${checked ? 'btn-success animated pulse' : 'btn-transparent outline'}`}
            >
              {checked ? 'Selected' : 'Select'}
            </button>
          </a>
          <a href={`#${agent.name}`} onClick={edit}>
            <button className="hover-grow btn-transparent outline">Edit</button>
          </a>
        </div>
      </div>
    </div>
  );
};

interface AgentModalInterface {
  name: string;
  cancel: () => void;
}

export const AgentModal: React.FC<AgentModalInterface> = ({ name, cancel }) => {
  const [agent, setAgent] = useAtom(AgentsAtomFamily({ name }));
  const [newAgent, setNewAgent] = useState<AgentAtomType>(agent);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAgent((prev) => {
      return {
        ...prev,
        [event.target.name]: Number(event.target.value)
      };
    });
  };

  const save = () => {
    console.log('SAVE', agent, newAgent);
    setAgent(newAgent);
    cancel();
  };

  return (
    <Modal modalId={name} clickOutside={cancel}>
      <div className="modal-header">
        <a href="#" className="u-pull-right" aria-label="Close">
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
        <div className="modal-title">Edit Agent</div>
      </div>

      <div className="modal-body">
        <div className="r">
          <h3 className="font-alt font-light u-text-center">{name}</h3>
        </div>

        <div className="space"></div>

        <div className="section-body">
          <label className="font-bold">Attack Speed</label>
          <div className="input-control">
            <input
              type="number"
              placeholder="Attack Speed"
              name="attack_speed"
              value={newAgent.attack_speed}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="section-body">
          <label className="font-bold">Normal Attack</label>
          <div className="input-control">
            <input
              type="number"
              placeholder="Normal Attack"
              name="normal_attack"
              value={newAgent.normal_attack}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="section-body">
          <label className="font-bold">Skill Damage</label>
          <div className="input-control">
            <input
              type="number"
              placeholder="Skill Damage"
              name="skill_damage"
              value={newAgent.skill_damage}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="section-body">
          <label className="font-bold">Critical Rate</label>
          <div className="input-control">
            <input
              type="number"
              step={0.01}
              placeholder="Critical Rate"
              name="critical_rate"
              value={newAgent.critical_rate}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="section-body">
          <label className="font-bold">Critical Damage</label>
          <div className="input-control">
            <input
              type="number"
              step={0.01}
              placeholder="Critical Damage"
              name="critical_damage"
              value={newAgent.critical_damage}
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <div className="form-section u-text-right">
          <a onClick={cancel}>
            <button className="btn btn--sm u-inline-block">Cancel</button>
          </a>
          <a onClick={save}>
            <button className="btn-info btn--sm u-inline-block">Confirm</button>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default Agent;
