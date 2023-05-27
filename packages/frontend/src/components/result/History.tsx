import { useAtomValue } from 'jotai';
import { FC, MouseEvent, useState } from 'react';
import { FaLevelDownAlt, FaLevelUpAlt } from 'react-icons/fa';
import { ResultType } from '@sf-girls-calculator/calculator';

import { ResultListHistoryAtom } from '../../atoms';

type HistoryItemProps = {
  result: ResultType;
  nextResult: number;
  difference: number;
};

const HistoryItem: FC<HistoryItemProps> = ({ result, nextResult, difference }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    setOpen((prev) => !prev);
  };

  const renderAgents = () =>
    result.team
      .sort((a, b) => b.stats.totalDamage - a.stats.totalDamage)
      .map((agent) => (
        <div
          key={agent.name}
          className="avatar avatar--xs tooltip tooltip--top"
          data-tooltip={`${agent.name}: ${agent.stats.totalDamage}`}
        >
          <div
            style={{
              height: '100%',
              backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}Mini.webp)`,
              backgroundSize: '100%'
            }}
          />
        </div>
      ));

  const renderEmptyPlaceholders = () => {
    const placeholdersCount = 7 - result.team.length;
    return Array.from(Array(placeholdersCount)).map((_, placeholderIndex) => (
      <div key={`empty-${placeholderIndex}`} className="avatar avatar--xs">
        <div style={{ height: '100%', backgroundColor: 'white', backgroundSize: '100%' }} />
      </div>
    ));
  };

  const renderDifferenceIcon = () => {
    if (difference > 0) {
      return <FaLevelUpAlt color="green" style={{ transform: 'rotate(360deg) scaleX(-1)' }} />;
    } else if (difference < 0) {
      return <FaLevelDownAlt color="red" style={{ transform: 'rotate(360deg) scaleX(-1)' }} />;
    } else {
      return <div className="w-5" />;
    }
  };

  const renderDifference = () =>
    nextResult && (
      <>
        {renderDifferenceIcon()}
        <span>{difference} %</span>
      </>
    );

  return (
    <li className="m-0 p-0">
      <details className="accordion" open={open} onClick={toggleAccordion} style={{ padding: '0.75rem' }}>
        <summary className="accordion__summary">
          {renderDifference()}
          {result.totalDamage}
        </summary>
        <div className="result-team">
          {renderAgents()}
          {renderEmptyPlaceholders()}
        </div>
      </details>
    </li>
  );
};

export const History: FC = () => {
  const history = useAtomValue(ResultListHistoryAtom);

  const renderHistoryItems = () => {
    if (history.length > 0) {
      return history.map((result, index) => {
        const nextResult = history[index + 1]?.totalDamage;
        const resultDifference = Math.round(((result.totalDamage - nextResult) / nextResult) * 100);

        return <HistoryItem key={result.id} result={result} nextResult={nextResult} difference={resultDifference} />;
      });
    }

    return (
      <li>
        <a>No Results</a>
      </li>
    );
  };

  return (
    <nav className="toc__nav">
      <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar px-3">
            <ul className="menu mb-3">
              <div className="sidebar__title font-bold uppercase text-gray-600">Results</div>
              <li className="menu-item u-sticky u-top-1"></li>
              <ul id="agent-list" className="menu mb-3 result-container">
                {renderHistoryItems()}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
