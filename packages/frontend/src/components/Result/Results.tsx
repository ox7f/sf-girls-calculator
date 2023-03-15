import { useAtom, useAtomValue } from 'jotai';
import { useCallback, useEffect, useState } from 'react';

import { Graph, Table } from './index';
import { Spinner } from '../Common';
import { ResultsAtom, SelectedAgentsAtom, SelectedTargetsAtom } from '../../atoms';
import { calculateWorker } from '../../webworker';

interface ResultProps {
  viewName: 'calculator' | 'teamfinder';
}

const Results: React.FC<ResultProps> = ({ viewName }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useAtom(ResultsAtom);
  const selectedAgents = useAtomValue(SelectedAgentsAtom);
  const selectedTargets = useAtomValue(SelectedTargetsAtom);

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
    const newResults = await workerCall(selectedAgents[viewName], selectedTargets[viewName]);
    if (newResults) setResults((prev) => ({ ...prev, [viewName]: newResults }));
    setLoading(false);
  }, [selectedAgents, selectedTargets, workerCall]);

  useEffect(() => {
    handleCalculate();
  }, [handleCalculate]);

  return (
    <div className="results-container">
      <Spinner loading={loading} />

      {results[viewName].map((result, index) => (
        <div className="content" key={index}>
          <Table result={result} />
          <Graph result={result} />
        </div>
      ))}
    </div>
  );
};

export default Results;
