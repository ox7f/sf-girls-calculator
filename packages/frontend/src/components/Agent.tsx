import { ClassEnum, NewAgent } from 'sf-girls-calculator-calculator';

import { useAtom } from 'jotai';
import { selectedAgentsAtom } from './atoms';

const Agent: React.FC<NewAgent> = (agent: NewAgent) => {
  const [selectedAgents, setSelectedAgents] = useAtom(selectedAgentsAtom);
  const checked = selectedAgents.filter((a) => a.name === agent.name).length > 0;
  const disabled = selectedAgents.length > 5 && !checked;

  const selectAgent = (agent: NewAgent) => {
    if (checked) {
      setSelectedAgents([...selectedAgents.filter((a) => a.name !== agent.name)]);
    } else {
      setSelectedAgents([...selectedAgents, agent]);
    }
  };

  const openModal = () => {
    console.log('TODO');
  };

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
              backgroundPosition: 'center',
              backgroundImage: `url(agents/${agent.name.replace(' ', '')}.png)`
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
          <button
            disabled={disabled}
            className={`hover-grow ${checked ? 'btn-success animated pulse' : 'btn-transparent outline'}`}
            onClick={() => selectAgent(agent)}
          >
            {checked ? 'Selected' : 'Select'}
          </button>
          <button className="hover-grow btn-transparent outline" onClick={openModal}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agent;
