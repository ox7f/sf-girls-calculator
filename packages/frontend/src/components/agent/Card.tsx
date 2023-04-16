import { Agent } from '@sf-girls-calculator/calculator';
import { useAtomValue, useSetAtom } from 'jotai';

import { Button } from '../common';
import { ClassTag, ViewName, agentIsSelected } from '../utils';
import { AgentNameAtom, SelectedAgentListAtom } from '../../atoms';

interface Props {
  agent: Agent;
  viewName: ViewName;
  select: (agent: Agent) => void;
}

export const AgentCard: React.FC<Props> = ({ agent, viewName, select }) => {
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];
  const setAgentName = useSetAtom(AgentNameAtom);

  const isSelected = agentIsSelected(selectedAgents, agent.name);
  const containerStyle = {
    backgroundSize: ['Pan'].includes(agent.name)
      ? '60%'
      : ['Amikam', 'Chia', 'Feme', 'Iizuna', 'Kaja', 'Karry', 'Pan', 'Rei JK', 'Shiko'].includes(agent.name)
      ? '80%'
      : '120%',
    backgroundPosition: 'center',
    // backgroundImage: `url(agents/${agent.name.replace(' ', '')}.png)`
  };

  return (
    <div className="card card--slide-up">
      <div className="card__container">
        <div className="card__image" style={containerStyle} />
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
              <div className={`tag tag--sm ${ClassTag[agent.class]}`}>{agent.class}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__body content" style={{ width: '90%' }}>
        <p>{agent.bio ?? 'No Bio - will add it later'}</p>
      </div>
      <div className="card__action-bar u-center">
        <Button
          text={isSelected ? 'Selected' : 'Select'}
          type={isSelected ? 'success' : 'transparent'}
          onClick={() => select(agent)}
        />
        <Button text="Edit" type="primary" onClick={() => setAgentName(agent.name)} />
      </div>
    </div>
  );
};
