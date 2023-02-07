import { calculate_team } from 'sf-girls-calculator-calculator';

import { useAtom } from 'jotai';
import { selectedAgentsAtom, selectedTargetAtom } from './atoms';

const Result: React.FC = () => {
  const [selectedAgents, setSelectedAgents] = useAtom(selectedAgentsAtom);
  const [selectedTarget, setSelectedTarget] = useAtom(selectedTargetAtom);
  const disabled = selectedAgents.length === 0 || selectedTarget === null;

  // TODO: result darstellen
  const calculate = () => {
    if (!disabled) {
      const result = calculate_team(selectedAgents, selectedTarget);
      console.log(
        'calculate',
        result,
        result.team.map((agent) => agent.damage_dealt)
      );
    }
  };

  const reset = () => {
    setSelectedAgents([]);
    setSelectedTarget(null);
  };

  return (
    <article>
      <span style={{ display: 'flex' }}>
        <button type="submit" disabled={disabled} className="outline" onClick={calculate}>
          Calculate
        </button>
        <button type="submit" className="secondary outline" onClick={reset}>
          Reset
        </button>
      </span>
    </article>
  );
};

export default Result;
