import { useAtomValue } from 'jotai';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaStar } from 'react-icons/fa';

import { Search } from '../common';
import { History, Results } from '../result';
import { TargetSelect } from '../target';
import { AgentItem, CurrentViewAtom, FilterAtom } from '../../atoms';

type AgentListProps = {
  agents: AgentItem[];
  loading: boolean;
  calculate: () => void;
  favorite: (agent: AgentItem) => void;
  select: (agent: AgentItem) => void;
  toggleModal: (agent: AgentItem) => void;
  contextMenuHandler: (event: MouseEvent, agent: AgentItem) => void;
};

export const AgentList: FC<AgentListProps> = ({ agents, loading, calculate, favorite, select, contextMenuHandler }) => {
  const viewName = useAtomValue(CurrentViewAtom);
  const filter = useAtomValue(FilterAtom);

  const containerRef = useRef<HTMLUListElement>(null);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setLoadedIndexes((prev) => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '-30px', threshold: 0 }
    );

    const cards = containerRef.current?.querySelectorAll('.avatar');
    cards?.forEach((card, index) => {
      observer.observe(card);
      card.setAttribute('data-index', String(index));
    });

    return () => observer.disconnect();
  }, [agents, filter]);

  const renderAgentList = () =>
    agents.length ? (
      agents.map((agent, index) => {
        const {
          options: {
            isFavorite,
            [viewName]: { isSelected }
          }
        } = agent;
        const className = `u-relative menu-item u-unselectable${isSelected ? ' selected animated bounceIn' : ''}`;
        const listElementStyle = {
          height: '100%',
          backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}Mini.webp)`,
          backgroundSize: '100%'
        };

        return (
          <li
            key={agent.name}
            className={className}
            onContextMenu={(event: MouseEvent) => contextMenuHandler(event, agent)}
          >
            <a className="w-100p u-flex" onClick={() => select(agent)}>
              <div className="avatar avatar--xs bg-white m-0 mr-1">
                {loadedIndexes.includes(index) && <div style={listElementStyle} />}
              </div>
              {agent.name}
            </a>
            <span className="u-absolute favorite" onClick={() => favorite(agent)}>
              <FaStar className={`favorite-star hover-grow-extreme ${isFavorite ? 'active' : ''}`} />
            </span>
          </li>
        );
      })
    ) : (
      <li className="menu-item mr-1">
        <p>No results found...</p>
      </li>
    );

  return (
    <>
      <div className="tree-nav-header u-items-center">
        <a href="#sidebar" className="u-shadow-none">
          <FaAngleRight color="darkgrey" />
        </a>
      </div>

      <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar px-3">
            <ul className="menu m-0">
              <div className="sidebar__title font-bold uppercase text-gray-600">Agents</div>
              <li className="menu-item">
                <Search />
              </li>
              <ul ref={containerRef} id="agent-list" className="menu mb-3">
                {renderAgentList()}
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" id="sidebar-close" className="tree-nav-close p-0 u-shadow-none" style={{ boxShadow: 'none' }}></a>

      <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
        <main className="page-layout u-center">
          <section>
            <TargetSelect />
            <Results calculate={calculate} loading={loading} contextMenuHandler={contextMenuHandler} />
          </section>

          <section>
            <History />
          </section>
        </main>
      </div>
    </>
  );
};
