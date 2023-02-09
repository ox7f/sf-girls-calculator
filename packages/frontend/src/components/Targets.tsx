import { ChangeEvent, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { NewTarget, Targets as TargetsData } from 'sf-girls-calculator-calculator';

import { selectedTargetAtom } from './atoms';
import Select from './UI/Select';

interface selectTarget {
  label: string;
  value: string;
  object: NewTarget;
}

const Targets: React.FC = () => {
  const [targetValue, setTargetValue] = useState('');
  const [selectedTarget, setSelectedTarget] = useAtom(selectedTargetAtom);
  const selectOptions: selectTarget[] = [];

  for (const [key, value] of Object.entries(TargetsData)) {
    selectOptions.push({
      label: value.name,
      value: key,
      object: value
    });
  }

  useEffect(() => {
    if (!selectedTarget) {
      setTargetValue('');
    }
  }, [selectedTarget]);

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = selectOptions.find((option) => option.value === event.target.value);

    if (target) {
      setSelectedTarget(target.object);
      setTargetValue(target.value);
    }
  };

  return (
    <article>
      <div className="level-item input-control u-center" style={{ width: '80%' }}>
        <Select
          label={'Target:'}
          value={targetValue}
          options={selectOptions}
          defaultLabel={'Select Target'}
          placeholder={'Select Target'}
          onChangeHandler={selectHandler}
        />
      </div>
    </article>
  );
};

export default Targets;
