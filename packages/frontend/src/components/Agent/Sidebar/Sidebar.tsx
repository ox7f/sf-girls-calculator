import { Agent } from '@sf-girls-calculator/calculator';
import Menu from './Menu';

interface SidebarProps {
  viewName: 'calculator' | 'teamfinder';
  select: (agent: Agent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ viewName, select }) => {
  return (
    <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
      <div className="sidebar-wrapper pt-2">
        <div className="sidebar px-3">
          <ul className="menu mb-3">
            <div className="sidebar__title font-bold uppercase text-gray-600">Agents</div>
            <Menu viewName={viewName} select={select} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
