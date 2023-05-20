import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FaEraser, FaFilter } from 'react-icons/fa';

import { Button } from './Button';
import { AgentDB, CurrentViewAtom, FilterAtom, FilteredAgentListAtom } from '../../atoms';
import { ClassEnum } from '@sf-girls-calculator/calculator';

export const Search: FC = () => {
  const [value, setValue] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useAtom(FilterAtom);

  const viewName = useAtomValue(CurrentViewAtom);
  const agents = useAtomValue(AgentDB.values);
  const setAgents = useSetAtom(AgentDB.setMany);
  const setFilteredAgentList = useSetAtom(FilteredAgentListAtom);
  const resetFilteredItems = useResetAtom(FilteredAgentListAtom);

  const selectedAgents = agents.filter((agent) => agent.options[viewName].isSelected);

  const reset = () => {
    setValue('');
    resetFilteredItems();
  };

  const erase = () => {
    reset();
    setAgents(
      agents.map((agent) => [
        agent.name,
        {
          ...agent,
          options: {
            ...agent.options,
            [viewName]: { ...agent.options[viewName], isSelected: false }
          }
        }
      ])
    );
  };

  const toggleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };

  useEffect(reset, []);

  useEffect(() => {
    // console.log('TODO: apply filter settings');
  }, [filter]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    const filteredAgents = agents
      .map((agent) => agent.name)
      .filter((name) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    setValue(search);
    setFilteredAgentList(filteredAgents);
  };

  return (
    <div className="form-group agent-search">
      <input value={value} type="search" className="form-group-input" placeholder="Search" onChange={changeHandler} />
      {/* <Button className="form-group-btn" onClick={toggleShowFilter} tooltip="Filter" tooltipPosition="top">
        <FaFilter />
      </Button> */}

      {selectedAgents.length > 0 && (
        <Button className="form-group-btn" onClick={erase} tooltip="Unselect all" tooltipPosition="top">
          <FaEraser />
        </Button>
      )}

      {/* TODO: build filter  */}
      {showFilter && (
        <div className="u-absolute dropdown-right bg-gray-300">
          <ul className="menu">
            {Object.values(ClassEnum).map((value) => (
              <li key={value} className="menu-item">
                <a>{value}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
