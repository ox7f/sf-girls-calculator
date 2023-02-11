import { NewTarget, Targets as TargetsData } from 'sf-girls-calculator-calculator';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { SelectedTargetAtom } from './atoms';
import { Select } from './UI';

interface selectTarget {
  label: string;
  value: string;
  object: NewTarget;
}

const Targets: React.FC = () => {
  const [targetValue, setTargetValue] = useState('');
  const [SelectedTarget, setSelectedTarget] = useAtom(SelectedTargetAtom);
  const selectOptions: selectTarget[] = [];

  for (const [key, value] of Object.entries(TargetsData)) {
    selectOptions.push({
      label: value.name,
      value: key,
      object: value
    });
  }

  useEffect(() => {
    if (!SelectedTarget) {
      setTargetValue('');
    }
  }, [SelectedTarget]);

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
