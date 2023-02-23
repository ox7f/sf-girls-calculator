import { NewAgent } from 'sf-girls-calculator-calculator';
import { PrimitiveAtom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface SearchBarI {
  atom: PrimitiveAtom<NewAgent[]>;
  sourceAtom: PrimitiveAtom<NewAgent[]>;
}

export const SearchBar: React.FC<SearchBarI> = ({ atom, sourceAtom }) => {
  const [value, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);

  const setAtom = useSetAtom(atom);
  const source = useAtomValue(sourceAtom);

  const focus = () => setFocus(true);
  const blur = () => setFocus(false);

  const clear = () => {
    setAtom(source);
    setValue('');
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value.toLocaleLowerCase();
    setAtom(source.filter((item) => item.name.toLocaleLowerCase().includes(search)));
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <input
        value={value}
        type="search"
        onFocus={focus}
        onBlur={blur}
        className={`form-group-input ${isFocus ? 'animated pulse' : ''}`}
        placeholder="Search"
        onChange={changeHandler}
      />
      <button className="form-group-btn btn btn-animated hover-grow animated" onClick={clear}>
        <FaTimes />
      </button>
    </div>
  );
};

export default SearchBar;
