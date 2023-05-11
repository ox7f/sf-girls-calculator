import { useAtom, useAtomValue } from 'jotai';
import { FC, useCallback, useEffect, useState } from 'react';
import { FaChartArea, FaTable } from 'react-icons/fa';

import { Graph, Table } from './index';
import { Button, Spinner } from '../common';
import { AgentDB, CurrentViewAtom, ResultListAtom, SelectedAgentListAtom, SelectedTargetListAtom } from '../../atoms';
import { calculateWorker } from '../../webworker';

const WORKER_CONFIG = {
  calculator: calculateWorker.calculateCalculator,
  teamfinder: calculateWorker.calculateTeamfinder
};

export const Results: FC = () => {
  const [loading, setLoading] = useState(false);
  const [showGraph, setShowGraph] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const [results, setResults] = useAtom(ResultListAtom);
  const viewName = useAtomValue(CurrentViewAtom);
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];
  const selectedTargets = useAtomValue(SelectedTargetListAtom)[viewName] || [];
  const agentEntries = useAtomValue(AgentDB.entries);

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

  const handleCalculate = useCallback(async () => {
    setLoading(true);
    const newResults = await workerCall(selectedAgents, selectedTargets);
    if (newResults) setResults((prev) => ({ ...prev, [viewName]: newResults }));
    setLoading(false);
  }, [agentEntries, selectedAgents, selectedTargets, workerCall]);

  useEffect(() => {
    handleCalculate();
  }, [handleCalculate]);

  return (
    <div className="results-container">
      {results[viewName].map((result, index) => {
        const remainingTime = result.time / 1000;
        const remainingHealth = result.target.currentHealth;

        return (
          <div className="content" key={index}>
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
            </div>

            <div style={{ height: '500px', width: '100%' }} className="animated fadeIn">
              <p className="pt-1">
                <span>
                  Remaining Time: <span className="font-semibold">{remainingTime} second(s)</span>
                </span>

                <br />
                <span>
                  Remaining HP: <span className="font-semibold">{remainingHealth}</span>
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
