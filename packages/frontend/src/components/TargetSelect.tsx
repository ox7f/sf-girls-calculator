import { NewTarget, Targets as TargetsData } from 'sf-girls-calculator-calculator';
import { ChangeEvent, useState } from 'react';
import { useAtom } from 'jotai';

import { SelectedTargetAtom, Select } from './index';

interface SelectOptionsI {
  label: string;
  value: string;
  object: NewTarget;
}

const TargetSelect: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useAtom(SelectedTargetAtom);
  const [targetValue, setTargetValue] = useState(selectedTarget.name);

  const selectOptions: SelectOptionsI[] = [];

  for (const [, value] of Object.entries(TargetsData)) {
    selectOptions.push({
      label: value.name,
      value: value.name,
      object: value
    });
  }

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = selectOptions.find((option) => option.value === event.target.value);

    if (!target) return;

    setSelectedTarget(target.object);
    setTargetValue(target.value);
  };

  return (
    <div className="u-center">
      <Select firstOption="Select Target" value={targetValue} options={selectOptions} onChange={selectHandler} />
    </div>
  );
};

export default TargetSelect;
