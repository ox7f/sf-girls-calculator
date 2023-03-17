import { useAtomValue } from 'jotai';
import { NewAgent } from 'sf-girls-calculator-calculator';
import { AgentsAtom, FilteredAgentsAtom, SelectedAgentsAtom } from '../../../atoms';
import { isSelected } from '../../../utils';
import { Search } from '../../Common';
import MenuItem from './MenuItem';

interface SidebarMenuProps {
  viewName: 'calculator' | 'teamfinder';
  select: (agent: NewAgent) => void;
}

const Menu: React.FC<SidebarMenuProps> = ({ viewName, select }) => {
  const Agents = useAtomValue(AgentsAtom);
  const filteredAgents = useAtomValue(FilteredAgentsAtom);
  const selectedAgents = useAtomValue(SelectedAgentsAtom);

  return (
    <ul className="menu mb-3">
      <li className="menu-item u-sticky u-top-0">
        <Search viewName="calculator" />
      </li>

      {filteredAgents[viewName] ? (
        filteredAgents[viewName].map((name) => {
          const agent = Agents.find((agent) => agent.name === name);

          return (
            agent && (
              <MenuItem
                key={name}
                isSelected={isSelected(selectedAgents[viewName], name)}
                name={name}
                select={() => select(agent)}
              />
            )
          );
        })
      ) : (
        <li className="menu-item mr-1">
          <a>No result...</a>
        </li>
      )}
    </ul>
  );
};

export default Menu;
