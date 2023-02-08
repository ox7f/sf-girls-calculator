import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { calculate_team, ResultType } from 'sf-girls-calculator-calculator';

import { selectedAgentsAtom, selectedTargetAtom } from './atoms';

const Result: React.FC = () => {
  const [result, setResult] = useState<ResultType | null>(null);
  const [totalDamage, setTotalDamage] = useState<number>(0);
  const selectedAgents = useAtomValue(selectedAgentsAtom);
  const selectedTarget = useAtomValue(selectedTargetAtom);
  const disabled = selectedAgents.length === 0 || selectedTarget === null;

  const calculate = () => {
    if (!disabled) {
      const result = calculate_team(selectedAgents, selectedTarget);
      setResult(result);
      setTotalDamage(result.team.reduce((pv, cv) => pv + cv.damage_dealt, 0));
    }
  };

  return (
    <div className="u-center" style={{ width: '80%' }}>
      {result && (
        <>
          <span>Remaining Time: {(result.target.duration - result.time) / 1000} second(s)</span>
          <span>Remaining HP: {(result.target.health - result.target.current_health).toFixed(2)}</span>

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
                  <td>{agent.damage_dealt.toFixed(2)}</td>
                  <td>{((agent.damage_dealt / totalDamage) * 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>&sum;</th>
                <td></td>
                <td>{totalDamage.toFixed(2)}</td>
                <td>100</td>
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
    </div>
  );
};

export default Result;
