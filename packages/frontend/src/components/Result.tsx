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
    <article>
      {result && (
        <>
          <span style={{ float: 'left' }}>
            Remaining Time: {(result.target.duration - result.time) / 1000} second(s)
          </span>
          <span style={{ float: 'right' }}>
            Remaining HP: {(result.target.health - result.target.current_health).toFixed()}
          </span>

          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Damage</th>
                <th scope="col">%</th>
              </tr>
            </thead>
            <tbody>
              {result.team.map((agent, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{agent.name}</td>
                  <td>{agent.damage_dealt.toFixed(2)}</td>
                  <td>{((agent.damage_dealt / totalDamage) * 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="col">&sum;</th>
                <td scope="col"></td>
                <td scope="col">{totalDamage.toFixed()}</td>
                <td scope="col">100</td>
              </tr>
            </tfoot>
          </table>
        </>
      )}

      <button type="submit" disabled={disabled} className="outline" onClick={calculate}>
        Calculate
      </button>
    </article>
  );
};

export default Result;
