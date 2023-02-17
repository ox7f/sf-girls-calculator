import { ChangeEvent } from 'react';
import { PrimitiveAtom, useAtomValue, useSetAtom } from 'jotai';
import { NewAgent } from 'sf-girls-calculator-calculator';

interface SearchBarI {
  atom: PrimitiveAtom<NewAgent[]>;
  sourceAtom: PrimitiveAtom<NewAgent[]>;
}

export const SearchBar: React.FC<SearchBarI> = ({ atom, sourceAtom }) => {
  const setAtom = useSetAtom(atom);
  const source = useAtomValue(sourceAtom);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value.toLocaleLowerCase();
    setAtom(source.filter((item) => item.name.toLocaleLowerCase().includes(search)));
  };

  return <input type="search" className="form-group-input" placeholder="Search" onChange={changeHandler} />;
};

export default SearchBar;
