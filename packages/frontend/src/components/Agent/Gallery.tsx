import { Agent } from '@sf-girls-calculator/calculator';
import { useAtomValue } from 'jotai';

import { AgentCard } from './Card';
import { ViewName } from '../utils';
import { FilteredAgentListAtom } from '../../atoms';
import { AgentListAtom } from '../../atoms/atoms';

interface Props {
  viewName: ViewName;
  select: (agent: Agent) => void;
}

export const AgentGallery: React.FC<Props> = ({ viewName, select }) => {
  const allAgents = useAtomValue(AgentListAtom);
  const filteredAgents = useAtomValue(FilteredAgentListAtom)[viewName] || [];

  return (
    <div className="row u-center">
      {filteredAgents.map((name) => {
        const agent = allAgents.find((a) => a.name === name);
        return (
          agent && (
            <div key={name} className="col animated fadeIn" style={{ minWidth: '350px', maxWidth: '20%' }}>
              <AgentCard agent={agent} viewName={viewName} select={select} />
            </div>
          )
        );
      })}
    </div>
  );
};
