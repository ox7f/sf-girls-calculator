import { ChangeEvent, useState } from 'react';
import { PrimitiveAtom, useAtomValue, useSetAtom } from 'jotai';
import { NewAgent } from 'sf-girls-calculator-calculator';

interface SearchBarI {
  atom: PrimitiveAtom<NewAgent[]>;
  sourceAtom: PrimitiveAtom<NewAgent[]>;
}

export const SearchBar: React.FC<SearchBarI> = ({ atom, sourceAtom }) => {
  const [isFocus, setFocus] = useState(false);

  const setAtom = useSetAtom(atom);
  const source = useAtomValue(sourceAtom);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value.toLocaleLowerCase();
    setAtom(source.filter((item) => item.name.toLocaleLowerCase().includes(search)));
  };

  const focus = () => {
    setFocus(true);
  };

  const blur = () => {
    setFocus(false);
  };

  return (
    <input
      type="search"
      onFocus={focus}
      onBlur={blur}
      className={`form-group-input ${isFocus ? 'animated pulse' : ''}`}
      placeholder="Search"
      onChange={changeHandler}
    />
  );
};

export default SearchBar;
