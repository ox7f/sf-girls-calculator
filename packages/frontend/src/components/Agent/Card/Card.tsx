import { useAtomValue, useSetAtom } from 'jotai';
import { Agent } from '@sf-girls-calculator/calculator';

import { CardActionBar, CardBody, CardContainer, CardTitle } from './index';
import { AgentNameAtom, SelectedAgentListAtom } from '../../../atoms';
import { isSelected } from '../../../utils';

interface CardProps {
  agent: Agent;
  viewName: 'calculator' | 'teamfinder';
  select: (agent: Agent) => void;
}

const Card: React.FC<CardProps> = ({ agent, viewName, select }) => {
  const selectedAgents = useAtomValue(SelectedAgentListAtom);
  const setAgentName = useSetAtom(AgentNameAtom);

  return (
    <div className="col animated fadeIn" style={{ minWidth: '350px', maxWidth: '20%' }}>
      <div className="card card--slide-up">
        <CardContainer name={agent.name} />
        <CardTitle name={agent.name} title={agent.title} class={agent.class} />
        <CardBody bio={agent.bio} />
        <CardActionBar
          isSelected={isSelected(selectedAgents[viewName], agent.name)}
          select={() => select(agent)}
          edit={() => setAgentName(agent.name)}
        />
      </div>
    </div>
  );
};

export default Card;
