import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { FaEraser, FaFilter } from 'react-icons/fa';
import { ClassEnum } from '@sf-girls-calculator/calculator';

import { Button } from './Button';
import { AgentDB, CurrentViewAtom, FilterAtom } from '../../atoms';

export const Search: FC = () => {
  const viewName = useAtomValue(CurrentViewAtom);
  const agents = useAtomValue(AgentDB.values);
  const setAgents = useSetAtom(AgentDB.setMany);
  const [filter, setFilter] = useAtom(FilterAtom);

  const [searchValue, setSearchValue] = useState('');
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [isOpenFilter, setOpenFilter] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

    const avatars = containerRef.current?.querySelectorAll('.avatar');
    avatars?.forEach((avatar, index) => {
      observer.observe(avatar);
      avatar.setAttribute('data-index', String(index));
    });

    return () => observer.disconnect();
  }, [agents, isOpenDropdown]);

  const reset = () => {
    setSearchValue('');
  };

  const erase = () => {
    reset();
    setAgents(
      agents.map((agent) => [
        agent.name,
        {
          ...agent,
          options: { ...agent.options, [viewName]: { ...agent.options[viewName], isSelected: false } }
        }
      ])
    );
  };

  const select = (name: string) => {
    setAgents(
      agents.map((agent) => {
        if (agent.name !== name) {
          return [agent.name, agent];
        }

        return [
          agent.name,
          {
            ...agent,
            options: {
              ...agent.options,
              [viewName]: {
                ...agent.options[viewName],
                isSelected: !agent.options[viewName].isSelected
              }
            }
          }
        ];
      })
    );
  };

  useEffect(reset, []);

  const selectedAgents = agents.filter((agent) => agent.options[viewName].isSelected);
  const filteredAgents = agents.filter((agent) => agent.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <div className="u-relative form-group w-100p" ref={dropdownRef}>
      <input
        value={searchValue}
        type="search"
        className="form-group-input"
        placeholder="Search"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
        onFocus={() => setOpenDropdown(true)}
      />
      {selectedAgents.length > 0 && (
        <Button className="form-group-btn" onClick={erase} tooltip="Unselect all" tooltipPosition="top">
          <FaEraser />
        </Button>
      )}

      {isOpenDropdown && (
        <div
          className="dropdown-right u-shadow-md u-absolute u-z-1 u-right-0 u-left-0"
          style={{ marginTop: '3.125rem' }}
        >
          <ul
            id="search-dropdown"
            className="u-overflow-y-scroll menu m-0 p-1"
            ref={containerRef}
            style={{ maxHeight: '16rem', borderLeft: 0 }}
          >
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, index) => {
                const isSelected = selectedAgents.find((sAgent) => sAgent.name === agent.name);
                const className = `menu-item${isSelected ? ' selected' : ''}`;
                const listElementStyle = {
                  height: '100%',
                  backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}Mini.webp)`,
                  backgroundSize: '100%'
                };

                return (
                  <li key={agent.name} className={className} onClick={() => select(agent.name)}>
                    <a className="w-100p u-flex">
                      <div className="avatar avatar--xs bg-white m-0 mr-1">
                        {loadedIndexes.includes(index) && <div style={listElementStyle} />}
                      </div>
                      {agent.name}
                    </a>
                  </li>
                );
              })
            ) : (
              <span>No results...</span>
            )}
          </ul>
        </div>
      )}

      {/* TODO: build filter  */}
      {/* <Button className="form-group-btn" onClick={() => setOpenFilter((prev) => !prev)} tooltip="Filter" tooltipPosition="top">
        <FaFilter />
      </Button> */}
      {isOpenFilter && (
        <div className="u-absolute dropdown-right bg-gray-300">
          <ul className="menu">
            {Object.values(ClassEnum).map((value) => (
              <li key={value} className="menu-item">
                <a>{value}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
