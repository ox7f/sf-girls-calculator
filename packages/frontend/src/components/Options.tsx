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
  const [targetValue, setTargetValue] = useState('');

  const disabled = selectedAgents.length === 0 || selectedTarget === null;
  const selectOptions: SelectTargetI[] = [];

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
    <article>
      <div className="level-item input-control">
        <div className="btn-group w-90p">
          <div className="space" style={{ width: '5%' }}></div>
          <Button text="Calculate" onClick={calculate} type="btn-success" disabled={disabled} isAnimated={!disabled} />
          <Button text="Reset" onClick={reset} type="secondary" />
          <div className="space" style={{ width: '5%' }}></div>
          <Select firstOption="Select Target" value={targetValue} options={selectOptions} onChange={selectHandler} />
        </div>
      </div>
    </article>
  );
};

export default Targets;
