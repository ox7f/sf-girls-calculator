import { NewAgent } from 'sf-girls-calculator-calculator';
import { Button } from './index';

enum ClassTag {
  Artillery = 'tag--danger',
  Gunner = 'tag--info',
  Striker = 'tag--warning',
  Support = 'tag--success'
}

interface AgentCardI {
  agent: NewAgent;
  edit: (name: string) => void;
}

const AgentCard: React.FC<AgentCardI> = ({ agent, edit }) => {
  const getClassName = (classname: keyof typeof ClassTag) => ClassTag[classname];

  return (
    <div className="col animated fadeIn" style={{ minWidth: '350px', maxWidth: '20%' }}>
      <div className="card card--slide-up">
        <div className="card__container">
          <div className="card__image"></div>
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
                <div className={`tag tag--sm ${getClassName(agent.class)}`}>{agent.class}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card__body content" style={{ width: '90%' }}>
          <p className="u-unselectable">{agent.bio ?? 'No Bio - will add it later'}</p>
        </div>

        <div className="card__action-bar u-center">
          <a href={`#${agent.name}`} onClick={() => edit(agent.name)}>
            <Button text="Edit" type="btn-transparent" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
