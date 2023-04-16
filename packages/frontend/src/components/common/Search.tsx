import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaEraser } from 'react-icons/fa';

import { ViewName } from '../utils';
import { FilteredAgentListAtom, SelectedAgentListAtom } from '../../atoms';
import { AgentListAtom } from '../../atoms/atoms';

interface Props {
  viewName: ViewName;
}

export const Search: React.FC<Props> = ({ viewName }) => {
  const [value, setValue] = useState('');
  const setFilteredItems = useSetAtom(FilteredAgentListAtom);

  const resetFilteredItems = useResetAtom(FilteredAgentListAtom);
  const resetSelectedItems = useResetAtom(SelectedAgentListAtom);

  const reset = () => {
    setValue('');
    resetFilteredItems();
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
        <button className="form-group-btn btn btn-animated hover-grow animated" onClick={() => resetSelectedItems()}>
          <FaEraser />
        </button>
      )}
    </div>
  );
};
