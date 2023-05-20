import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { FC, useCallback, useEffect, useState } from 'react';
import { FaChartArea, FaTable } from 'react-icons/fa';

import { Graph, Table } from './index';
import { Button, Spinner } from '../common';
import { AgentDB, CurrentViewAtom, ResultListAtom, ResultListHistoryAtom, TargetDB } from '../../atoms';
import { calculateWorker } from '../../webworker';

const WORKER_CONFIG = {
  calculator: calculateWorker.calculateCalculator,
  teamfinder: calculateWorker.calculateTeamfinder
};

export const Results: FC = () => {
  const [loading, setLoading] = useState(false);
  const [showGraph, setShowGraph] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const viewName = useAtomValue(CurrentViewAtom);
  const [results, setResults] = useAtom(ResultListAtom);
  const setHistory = useSetAtom(ResultListHistoryAtom);

  const agents = useAtomValue(AgentDB.values);
  const targets = useAtomValue(TargetDB.values);

  const workerCall = useCallback(
    async (selectedAgents: string[], selectedTargets: string[]) => {
      /** only for testing:
      if (selectedAgents.length > 0 && selectedTargets) {
        const test_results = [];

        for (let i = 0; i < 500; i++) {
          const test_result = await WORKER_CONFIG[viewName]({ selectedAgents, selectedTargets });
          test_results.push(JSON.parse(test_result)[0]);
        }

        test_results.sort((a, b) => b.totalDamage - a.totalDamage);
        console.log(test_results[0].totalDamage, test_results[test_results.length - 1].totalDamage);
      }
      */

      const newResults = await WORKER_CONFIG[viewName]({ selectedAgents, selectedTargets });
      return JSON.parse(newResults);
    },
    [viewName]
  );

  const handleCalculate = async () => {
    setLoading(true);

    const selectedAgents = agents.filter((agent) => agent.options[viewName].isSelected).map((agent) => agent.name);
    const selectedTarget = targets.filter((target) => target.options[viewName].isSelected).map((target) => target.name);

    const newResults = await workerCall(selectedAgents, selectedTarget);

    if (newResults) {
      setResults((prev) => ({ ...prev, [viewName]: newResults }));
      setHistory((prev) => [...newResults, ...prev]);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleCalculate();
  }, [agents, targets]);

  return (
    <div className="results-container">
      <div className="btn-group pt-1 u-flex-row">
        <Button
          tooltip="Show Graph"
          tooltipPosition="bottom"
          variant={showGraph ? 'outline' : undefined}
          onClick={() => {
            setShowGraph(true);
            setShowTable(false);
          }}
        >
          <FaChartArea size={20} />
        </Button>
        <Button
          tooltip="Show Table"
          tooltipPosition="bottom"
          variant={showTable ? 'outline' : undefined}
          onClick={() => {
            setShowGraph(false);
            setShowTable(true);
          }}
        >
          <FaTable size={20} />
        </Button>
        <Button text="Calculate" onClick={() => handleCalculate()} />
      </div>

      {results[viewName].map((result) => {
        const remainingTime = result.time / 1000;
        const remainingHealth = result.target.currentHealth;

        return (
          <div className="content" key={result.id}>
            <div style={{ height: '500px', width: '100%' }}>
              <p className="pt-1">
                <span>
                  Remaining Time: <span className="font-semibold">{remainingTime} second(s)</span>
                </span>

                <br />
                <span>
                  Remaining Health: <span className="font-semibold">{remainingHealth}</span>
                </span>
              </p>

              {loading && <Spinner />}
              {showTable && <Table result={result} />}
              {showGraph && <Graph result={result} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
