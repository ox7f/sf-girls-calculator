import { Agent } from '@sf-girls-calculator/calculator';
import { NavHeader, Sidebar } from './Sidebar';

interface ListProps {
  viewName: 'calculator' | 'teamfinder';
  select: (agent: Agent) => void;
}

const AgentList: React.FC<ListProps> = ({ viewName, select }) => {
  return (
    <div className="tree-nav-body mx-auto">
      <NavHeader />
      <Sidebar viewName={viewName} select={select} />
      <a href="#" id="sidebar-close" className="tree-nav-close p-0 u-shadow-none" style={{ boxShadow: 'none' }}></a>
    </div>
  );
};

export default AgentList;
