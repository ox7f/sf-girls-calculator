import { useAtomValue } from 'jotai';
import { NewAgent } from 'sf-girls-calculator-calculator';

import { Card } from './Card';
import { AgentsAtom, FilteredAgentsAtom } from '../../atoms';

interface GalleryProps {
  viewName: 'calculator' | 'teamfinder';
  select: (agent: NewAgent) => void;
}

const AgentGallery: React.FC<GalleryProps> = ({ viewName, select }) => {
  const agents = useAtomValue(AgentsAtom);
  const filteredAgents = useAtomValue(FilteredAgentsAtom);

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
