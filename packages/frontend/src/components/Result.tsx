import { calculate_team } from 'sf-girls-calculator-calculator';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { ResultAtom, SelectedAgentsAtom, SelectedTargetAtom } from './atoms';

const Result: React.FC = () => {
  const [result, setResult] = useAtom(ResultAtom);
  const [selectedAgents, setSelectedAgents] = useAtom(SelectedAgentsAtom);
  const [selectedTarget, setSelectedTarget] = useAtom(SelectedTargetAtom);

  const [totalDamage, setTotalDamage] = useState(0);
  const disabled = selectedAgents.length === 0 || selectedTarget === null;

  const reset = () => {
    setSelectedAgents([]);
    setSelectedTarget(null);
    setResult(null);
  };

  const calculate = () => {
    if (!disabled) {
      const result = calculate_team(selectedAgents, selectedTarget);
      setResult(result);
      setTotalDamage(result.team.reduce((pv, cv) => pv + cv.total_damage, 0));
    }
  };

  return (
    <div className="u-center" style={{ width: '80%' }}>
      {result && (
        <>
          <span>Remaining Time: {(result.target.duration - result.time) / 1000} second(s)</span>
          <span>Remaining HP: {result.target.current_health.toFixed(2)}</span>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Damage</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {result.team.map((agent, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{agent.name}</td>
                  <td>{agent.total_damage.toFixed(2)}</td>
                  <td>{((agent.total_damage / totalDamage) * 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>&sum;</th>
                <td></td>
                <td>{totalDamage.toFixed(2)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </>
      )}

      <button
        className={`${disabled ? 'btn-transparent outline' : 'btn-success hover-grow animated pulse'}`}
        onClick={calculate}
      >
        Calculate
      </button>
      <button type="submit" className="btn-transparent secondary outline" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Result;
