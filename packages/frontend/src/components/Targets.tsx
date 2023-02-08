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
      <div className="row level">
        <div className="col-xs-3 level-item">
          <p className="m-0">Target:</p>
        </div>
        <div className="col-xs-9 level-item input-control">
          <select className="select" placeholder="Choose one" onChange={selectHandler} defaultValue={''}>
            <option disabled value={''}>
              Select Target
            </option>

            {targets.map((target, index) => (
              <option key={index}>{target.name}</option>
            ))}
          </select>
        </div>
      </div>
    </article>
  );
};

export default Targets;
