import { calculate_team, NewTarget, Targets as TargetsData } from 'sf-girls-calculator-calculator';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { ResultAtom, SelectedAgentsAtom, SelectedTargetAtom, TotalDamageAtom } from './atoms';
import { Button, Select } from './UI';

interface SelectTargetI {
  label: string;
  value: string;
  object: NewTarget;
}

const Targets: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useAtom(SelectedTargetAtom);
  const [selectedAgents, setSelectedAgents] = useAtom(SelectedAgentsAtom);
  const setResult = useSetAtom(ResultAtom);
  const setTotalDamage = useSetAtom(TotalDamageAtom);
  const [targetValue, setTargetValue] = useState(selectedTarget?.name ?? '');

  const disabled = selectedAgents.length === 0 || selectedTarget === null;
  const selectOptions: SelectTargetI[] = [];

  for (const [, value] of Object.entries(TargetsData)) {
    selectOptions.push({
      label: value.name,
      value: value.name,
      object: value
    });
  }

  useEffect(() => {
    if (!selectedTarget) {
      setTargetValue('');
    }
  }, [selectedTarget]);

  const reset = () => {
    setSelectedAgents([]);
    setSelectedTarget(null);
    setResult(null);
    setTotalDamage(0);
  };

  const calculate = () => {
    if (disabled) return;

    const result = calculate_team(selectedAgents, selectedTarget);

    setResult(result);
    setTotalDamage(result.team.reduce((pv, cv) => pv + cv.total_damage, 0));
  };

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = selectOptions.find((option) => option.value === event.target.value);

    if (!target) return;

    setSelectedTarget(target.object);
    setTargetValue(target.value);
  };

  return (
    <div className="u-center">
      <div className="row btn-group">
        <div className="col-4 u-center">
          <Button text="Calculate" onClick={calculate} type="btn-success u-z-1" disabled={disabled} isAnimated={!disabled} />
          <div className="space w-1" />
          <Button text="Reset" onClick={reset} type="secondary w-16" />
        </div>
        <div className="col-8">
          <Select firstOption="Select Target" value={targetValue} options={selectOptions} onChange={selectHandler} />
        </div>
      </div>
    </div>
  );
};

export default Targets;
