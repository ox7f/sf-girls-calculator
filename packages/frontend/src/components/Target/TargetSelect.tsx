import { useAtom, useAtomValue } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { SelectedTargetsAtom, TargetsAtom } from '../../atoms';
import { Select } from '../Common';

interface TargetSelectI {
  viewName: 'calculator' | 'teamfinder';
}

const TargetSelect: React.FC<TargetSelectI> = ({ viewName }) => {
  const Targets = useAtomValue(TargetsAtom);
  const [selectedTarget, setSelectedTarget] = useAtom(SelectedTargetsAtom);
  const [targetValue, setTargetValue] = useState(selectedTarget[viewName][0]);

  const selectOptions = Targets.map((target) => ({
    value: target.name,
    label: target.name
  }));

  const select = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value;

    setSelectedTarget((prev) => {
      // TODO: select multiple targets?
      // const selected = prev[viewName];
      // if (selected.includes(name)) return { ...prev, [viewName]: selected.filter((n) => n !== name) };
      return { ...prev, [viewName]: [name] };
    });
    setTargetValue(name);
  };

  return (
    <div className="u-center">
      <Select value={targetValue} options={selectOptions} onChange={select} />
    </div>
  );
};

export default TargetSelect;
