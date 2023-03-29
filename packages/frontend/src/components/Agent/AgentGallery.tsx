import { useAtomValue } from 'jotai';
import { Agent } from '@sf-girls-calculator/calculator';

import { Card } from './Card';
import { AgentListAtom, FilteredAgentListAtom } from '../../atoms';

interface GalleryProps {
  viewName: 'calculator' | 'teamfinder';
  select: (agent: Agent) => void;
}

const AgentGallery: React.FC<GalleryProps> = ({ viewName, select }) => {
  const agents = useAtomValue(AgentListAtom);
  const filteredAgents = useAtomValue(FilteredAgentListAtom);

  return (
    <div>
      <div className="row u-center">
        {filteredAgents[viewName].map((name) => {
          const agent = agents.find((agent) => agent.name === name);
          return agent && <Card key={name} agent={agent} viewName={viewName} select={select} />;
        })}
      </div>
    </div>
  );
};

export default AgentGallery;
