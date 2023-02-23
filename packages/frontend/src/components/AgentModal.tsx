import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import {
  EditingAgentAtom,
  Modal,
  ModifiedAgentsAtom,
  SelectedAgentsAtom,
  transformModifiedAgentToAgent
} from './index';

const AgentModal: React.FC = () => {
  const [editAgent, setEditAgent] = useAtom(EditingAgentAtom);
  const [modifiedAgents, setModifiedAgents] = useAtom(ModifiedAgentsAtom);
  const [selectedAgents, setSelectedAgents] = useAtom(SelectedAgentsAtom);

  if (!editAgent) return null;

  const edit = (name = '') => {
    const agent = modifiedAgents.find((a) => a.name === name) ?? null;
    setEditAgent(agent);
  };

  const save = () => {
    const newModifiedAgents = modifiedAgents.map((agent) => {
      if (agent.name === editAgent?.name) return editAgent;
      return agent;
    });

    const newSelectedAgents = selectedAgents.map((agent) => {
      if (agent.name === editAgent?.name) return transformModifiedAgentToAgent(agent, editAgent);
      return agent;
    });

    setSelectedAgents(newSelectedAgents);
    setModifiedAgents(newModifiedAgents);
    setEditAgent(null);

    localStorage.setItem('modified_agents', JSON.stringify(newModifiedAgents));
  };

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
    });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditAgent({
      ...editAgent,
      [event.target.name]: Number(event.target.value)
    });
  };

  return (
    <Modal modalId={editAgent.name} clickOutside={() => edit()}>
      <div className="modal-header">
        <a className="u-pull-right" aria-label="Close" style={{ cursor: 'pointer' }} onClick={() => edit()}>
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
          <a onClick={() => edit()}>
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

export default AgentModal;
