import { ClassEnum, NewAgent } from 'sf-girls-calculator-calculator';
import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import { EditingAgent } from './atoms';
import { Button, Modal } from './UI';

interface AgentI {
  agent: NewAgent;
  isSelected?: boolean;
  isDisabled?: boolean;
  select: () => void;
  edit: () => void;
}

const Agent: React.FC<AgentI> = ({ agent, isSelected = false, isDisabled = false, select, edit }) => {
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
      <div className="card card--slide-up">
        <div className="card__container">
          <div
            className="card__image"
            style={
              {
                // backgroundSize: `${
                //   agent.name === 'Pan'
                //     ? '60%'
                //     : ['Amikam', 'Chia', 'Feme', 'Iizuna', 'Kaja', 'Karry', 'Pan', 'Rei JK', 'Shiko'].includes(agent.name)
                //     ? '80%'
                //     : '120%'
                // }`,
                // backgroundPosition: 'center',
                // backgroundImage: `url(agents/${agent.name.replace(' ', '')}.png)`
              }
            }
          ></div>
        </div>

        <div className="card__mobile-title">
          <div className="content pl-2 pr-2">
            <div className="tile">
              <div className="tile__container row">
                <div className="col">
                  <p className="tile__title">{agent.name}</p>
                  <p className="tile__subtitle">{agent.title}</p>
                </div>
              </div>
              <div className="col pt-1">
                <div className={`tag tag--sm ${getClassName()}`}>{agent.class}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card__body content" style={{ width: '90%' }}>
          <p className="u-unselectable">{agent.bio ?? 'No Bio - will add it later'}</p>
        </div>

        <div className="card__action-bar u-center">
          <a onClick={select}>
            <Button
              text={isSelected ? 'Selected' : 'Select'}
              type={isSelected ? 'btn-success' : 'btn-transparent'}
              isAnimated={isSelected}
              disabled={isDisabled}
            />
          </a>
          <a href={`#${agent.name}`} onClick={edit}>
            <Button text="Edit" type="btn-transparent" />
          </a>
        </div>
      </div>
    </div>
  );
};

interface AgentModalInterface {
  cancel: () => void;
  save: () => void;
}

export const AgentModal: React.FC<AgentModalInterface> = ({ cancel, save }) => {
  const [editAgent, setEditAgent] = useAtom(EditingAgent);

  if (!editAgent) return null;

  const mappedWording = Object.keys(editAgent)
    .filter((key) => key !== 'name')
    .map((key) => {
      return [
        key,
        key
          .split('_')
          .map((word) => word[0].toUpperCase() + word.substring(1, word.length))
          .join(' ')
      ];
    }); // [['attack_speed': 'Attack Speed'], ...]

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditAgent({
      ...editAgent,
      [event.target.name]: Number(event.target.value)
    });
  };

  return (
    <Modal modalId={editAgent.name} clickOutside={cancel}>
      <div className="modal-header">
        <a className="u-pull-right" aria-label="Close" style={{ cursor: 'pointer' }} onClick={cancel}>
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
          <h3 className="font-alt font-light u-text-center">{editAgent.name}</h3>
        </div>

        <div className="space"></div>

        {mappedWording.map((key) => (
          <div className="input-control" key={key[0]}>
            <label className="font-bold">{key[1]}</label>
            <input
              type="number"
              step={key[0].includes('critical') ? 0.01 : 1}
              placeholder={key[1]}
              name={key[0]}
              value={editAgent[key[0]]}
              onChange={changeHandler}
            />
          </div>
        ))}
      </div>

      <div className="modal-footer">
        <div className="form-section u-text-right">
          <a onClick={cancel}>
            <button className="hover-grow btn-transparent outline">Cancel</button>
          </a>
          <a onClick={save}>
            <button className="hover-grow btn-success animated pulse">Save</button>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default Agent;
