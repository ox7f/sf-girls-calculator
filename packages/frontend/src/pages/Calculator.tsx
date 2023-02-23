import { calculate_team } from 'sf-girls-calculator-calculator';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import {
  AgentSelect,
  Result,
  TargetSelect,
  ResultAtom,
  SelectedAgentsAtom,
  SelectedTargetAtom,
  TotalDamageAtom
} from '../components';

const Calculator: React.FC = () => {
  const selectedAgents = useAtomValue(SelectedAgentsAtom);
  const selectedTarget = useAtomValue(SelectedTargetAtom);
  const setResult = useSetAtom(ResultAtom);
  const setTotalDamage = useSetAtom(TotalDamageAtom);

  const calculate = () => {
    if (selectedAgents.length === 0 || !selectedTarget) return;

    const result = calculate_team(selectedAgents, selectedTarget);

    setResult(result);
    setTotalDamage(result.team.reduce((pv, cv) => pv + cv.total_damage, 0));
  };

  useEffect(() => calculate(), [selectedAgents, selectedTarget]);

  return (
    <div>
      <div className="mx-1 pt-10">
        <TargetSelect />
      </div>

      <div className="default-layout tree-nav-body mx-auto mb-0">
        <AgentSelect />

        <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
          <main className="page-layout">
            <Result />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
