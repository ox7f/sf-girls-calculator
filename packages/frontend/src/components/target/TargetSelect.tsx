import { useAtom, useAtomValue } from 'jotai';
import { ChangeEvent, useState } from 'react';

import { Select } from '../common';
import { CurrentViewAtom, SelectedTargetListAtom, TargetListAtom } from '../../atoms';

export const TargetSelect: React.FC = () => {
  const viewName = useAtomValue(CurrentViewAtom);
  const targets = useAtomValue(TargetListAtom);
  const [selectedTarget, setSelectedTarget] = useAtom(SelectedTargetListAtom);
  const [targetValue, setTargetValue] = useState(selectedTarget[viewName][0]);

  const selectOptions = targets.map((target) => ({
    value: target.name,
    label: target.name
  }));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value;

    setSelectedTarget((prev) => ({ ...prev, [viewName]: [name] }));
    setTargetValue(name);
  };

  return (
    <div className="u-center">
      <Select value={targetValue} options={selectOptions} onChange={handleChange} />
    </div>
  );
};
