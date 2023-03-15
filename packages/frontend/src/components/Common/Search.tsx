import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { FaTimes } from 'react-icons/fa';
import { ChangeEvent, useEffect, useState } from 'react';
import { AgentsAtom, FilteredAgentsAtom } from '../../atoms';

interface SearchProps {
  viewName: 'calculator' | 'teamfinder';
}

const Search: React.FC<SearchProps> = ({ viewName }) => {
  const [value, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);

  const setFilteredItems = useSetAtom(FilteredAgentsAtom);
  const resetFilteredItems = useResetAtom(FilteredAgentsAtom);

  const items = useAtomValue(AgentsAtom);
  const itemNames = items.map((item) => item.name);

  const reset = () => {
    setValue('');
    resetFilteredItems();
  };

  useEffect(reset, []);

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
      <input
        value={value}
        type="search"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`form-group-input ${isFocus ? 'animated pulse' : ''}`}
        placeholder="Search"
        onChange={changeHandler}
      />
      <button className="form-group-btn btn btn-animated hover-grow animated" onClick={reset}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Search;
