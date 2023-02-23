import { ResultGraph, ResultTable } from './index';

const Result: React.FC = () => {
  return (
    <div className="content">
      <ResultTable />
      <ResultGraph />
    </div>
  );
};

export default Result;
