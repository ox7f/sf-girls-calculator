import { NewTarget } from 'sf-girls-calculator-calculator';
import { Card } from './UI';

import { useAtom } from 'jotai';
import { selectedTargetAtom } from './atoms';

const Target: React.FC<NewTarget> = (target: NewTarget) => {
  const [selectedTarget, setSelectedTarget] = useAtom(selectedTargetAtom);
  const checked = target === selectedTarget;
  const disabled = false;

  const selectTarget = (target: NewTarget) => {
    if (checked) {
      setSelectedTarget(null);
    } else {
      setSelectedTarget(target);
    }
  };

  return (
    <Card
      header={target.name}
      body={`Time: ${target.duration}s, Health: ${target.health}`}
      footer={`Critical Resistance: ${target.critical_resistance || 0}`}
      checked={checked}
      disabled={disabled}
      onChange={() => selectTarget(target)}
    />
  );
};

export default Target;
