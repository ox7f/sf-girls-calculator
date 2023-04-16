import { useAtom, useAtomValue } from 'jotai';
import { useCallback, useEffect, useState } from 'react';

import { Graph, Table } from './index';
import { Spinner } from '../common';
import { AgentDB, CurrentViewAtom, ResultListAtom, SelectedAgentListAtom, SelectedTargetListAtom } from '../../atoms';
import { calculateWorker } from '../../webworker';

export const Results: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useAtom(ResultListAtom);
  const viewName = useAtomValue(CurrentViewAtom);
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];
  const selectedTargets = useAtomValue(SelectedTargetListAtom)[viewName] || [];
  const agentEntries = useAtomValue(AgentDB.entries);

  const WORKER_CONFIG = {
    calculator: calculateWorker.calculateCalculator,
    teamfinder: calculateWorker.calculateTeamfinder
  };

  const workerCall = useCallback(async (selectedAgents: string[], selectedTargets: string[]) => {
    const newResults = await WORKER_CONFIG[viewName]({ selectedAgents, selectedTargets });
    return JSON.parse(newResults);
  }, []);

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
      {loading && <Spinner />}

      {results[viewName].map((result, index) => (
        <div className="content" key={index}>
          <Table result={result} />
          <Graph result={result} />
        </div>
      ))}
    </div>
  );
};
