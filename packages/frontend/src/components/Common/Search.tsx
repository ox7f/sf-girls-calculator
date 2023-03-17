import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { FaEraser } from 'react-icons/fa';
import { ChangeEvent, useEffect, useState } from 'react';
import { AgentsAtom, FilteredAgentsAtom, SelectedAgentsAtom } from '../../atoms';

interface SearchProps {
  viewName: 'calculator' | 'teamfinder';
}

const Search: React.FC<SearchProps> = ({ viewName }) => {
  const [value, setValue] = useState('');
  const resetFilteredItems = useResetAtom(FilteredAgentsAtom);

  const reset = () => {
    setValue('');
    resetFilteredItems();
  };

  useEffect(reset, []);

  const setFilteredItems = useSetAtom(FilteredAgentsAtom);
  const resetSelectedItems = useResetAtom(SelectedAgentsAtom);

  const items = useAtomValue(AgentsAtom);
  const selectedItems = useAtomValue(SelectedAgentsAtom);
  const itemNames = items.map((item) => item.name);

  const unselect = () => {
    resetSelectedItems();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;

    setValue(search);
    setFilteredItems((prev) => ({
      ...prev,
      [viewName]: itemNames.filter((name) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }));
  };

  return (
    <div className="form-group">
      <input value={value} type="search" className="form-group-input" placeholder="Search" onChange={changeHandler} />
      {selectedItems[viewName].length > 0 && (
        <button className="form-group-btn btn btn-animated hover-grow animated" onClick={unselect}>
          <FaEraser />
        </button>
      )}
    </div>
  );
};

export default Search;
