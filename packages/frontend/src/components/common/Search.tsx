import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FaEraser } from 'react-icons/fa';

import { Button } from './Button';
import { AgentListAtom, CurrentViewAtom, FilteredAgentListAtom, SelectedAgentListAtom } from '../../atoms';

export const Search: FC = () => {
  const viewName = useAtomValue(CurrentViewAtom);

  const [value, setValue] = useState('');
  const setFilteredItems = useSetAtom(FilteredAgentListAtom);

  const resetFilteredItems = useResetAtom(FilteredAgentListAtom);
  const resetSelectedItems = useResetAtom(SelectedAgentListAtom);

  const reset = () => {
    setValue('');
    resetFilteredItems();
  };

  const erase = () => {
    reset();
    resetSelectedItems();
  };

  useEffect(reset, []);

  const allAgents = useAtomValue(AgentListAtom);
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];
  const agentNames = allAgents.map((agent) => agent.name);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;

    setValue(search);
    setFilteredItems((prev) => ({
      ...prev,
      [viewName]: agentNames.filter((name) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }));
  };

  return (
    <div className="form-group">
      <input value={value} type="search" className="form-group-input" placeholder="Search" onChange={changeHandler} />
      {selectedAgents.length > 0 && (
        <Button
          animate={true}
          effect="bounceIn"
          className="form-group-btn"
          onClick={erase}
          tooltip="Unselect all"
          tooltipPosition="top"
        >
          <FaEraser />
        </Button>
      )}
    </div>
  );
};
