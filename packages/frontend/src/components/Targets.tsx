import { NewTarget, Targets as TargetsData } from 'sf-girls-calculator-calculator';

import { useSetAtom } from 'jotai';
import { selectedTargetAtom } from './atoms';
import { ChangeEvent } from 'react';

const Targets: React.FC = () => {
  const setSelectedTarget = useSetAtom(selectedTargetAtom);
  const targets: NewTarget[] = [];

  for (const [, value] of Object.entries(TargetsData)) {
    targets.push(value);
  }

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = targets.find((target) => target.name === event.target.value) ?? null;
    setSelectedTarget(target);
  };

  return (
    <article>
      <select onChange={selectHandler} defaultValue={''}>
        <option disabled value={''}>
          Select Target
        </option>
        {targets.map((target, index) => (
          <option key={index}>{target.name}</option>
        ))}
      </select>
    </article>
  );
};

export default Targets;
