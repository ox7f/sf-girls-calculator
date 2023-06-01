import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { FaEraser } from 'react-icons/fa';
import { ClassEnum, RarityEnum } from '@sf-girls-calculator/calculator';

import { Button } from './Button';
import { MenuItem } from '../utils';
import { AgentDB, CurrentViewAtom, FilterAtom } from '../../atoms';

export const Search: FC = () => {
  const viewName = useAtomValue(CurrentViewAtom);
  const agents = useAtomValue(AgentDB.values);
  const setAgents = useSetAtom(AgentDB.setMany);
  const [filter, setFilter] = useAtom(FilterAtom);

  const [searchValue, setSearchValue] = useState(filter[viewName].searchParam);
  const [isOpenDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);

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

  const reset = () => {
    setSearchValue('');
    setFilter((prev) => ({ ...prev, [viewName]: { ...prev[viewName], searchParam: '' } }));
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

  const selectClass = (className: ClassEnum) => {
    setFilter((prev) => {
      const classFilter = prev[viewName].class;

      if (classFilter.includes(className)) {
        return {
          ...prev,
          [viewName]: { ...prev[viewName], class: classFilter.filter((c) => c !== className) }
        };
      }

      return {
        ...prev,
        [viewName]: { ...prev[viewName], class: [...classFilter, className] }
      };
    });
  };

  const selectRarity = (rarity: RarityEnum) => {
    setFilter((prev) => {
      const rarityFilter = prev[viewName].rarity;

      if (rarityFilter.includes(rarity)) {
        return {
          ...prev,
          [viewName]: { ...prev[viewName], rarity: rarityFilter.filter((r) => r !== rarity) }
        };
      }

      return {
        ...prev,
        [viewName]: { ...prev[viewName], rarity: [...rarityFilter, rarity] }
      };
    });
  };

  const handleSort = (sortDirection: string, sortParam: string) => {
    setFilter((prev) => ({
      ...prev,
      [viewName]: {
        ...prev[viewName],
        sort: sortDirection,
        sortParam: sortParam
      }
    }));
  };

  useEffect(reset, []);

  const selectedAgents = agents.filter((agent) => agent.options[viewName].isSelected);

  const MenuItem = ({ label, sortParam, sortDirection }: MenuItem) => {
    const isSelected = filter[viewName].sortParam === sortParam && filter[viewName].sort === sortDirection;
    const handleClick = () => handleSort(sortDirection, sortParam);

    return (
      <li className={`menu-item ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
        <a className="w-100p u-flex">{label}</a>
      </li>
    );
  };

  return (
    <div className="u-relative form-group w-100p" ref={dropdownRef}>
      <input
        value={searchValue}
        type="search"
        className={`form-group-input${isOpenDropdown ? ' open' : ''}`}
        id={`search-${viewName}`}
        placeholder="Search"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const searchParam = event.target.value;
          setSearchValue(searchParam);
          setFilter((prev) => ({ ...prev, [viewName]: { ...prev[viewName], searchParam } }));
        }}
        onFocus={() => setOpenDropdown(true)}
      />
      {selectedAgents.length > 0 && (
        <Button className="form-group-btn" onClick={erase} tooltip="Unselect all" tooltipPosition="top">
          <FaEraser />
        </Button>
      )}

      {isOpenDropdown && (
        <div id={`dropdown-${viewName}`} className="u-shadow-xl">
          <ul
            id="search-dropdown"
            className="u-overflow-y-scroll menu m-0 p-1"
            ref={containerRef}
            style={{ maxHeight: '33rem' }}
          >
            {/* Filter Menu */}
            <div className="divider" data-content="Filter By Class" />

            {/* classes */}
            <ul className="menu m-0 p-0" id="filter-classes">
              {Object.values(ClassEnum).map((value) => {
                const isSelected = filter[viewName].class.includes(value);
                const className = `menu-item${isSelected ? ' selected' : ''}`;
                const listElementStyle = {
                  height: '100%',
                  backgroundImage: `url(classes/${value}.webp)`,
                  backgroundSize: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                };

                return (
                  <li key={value} className={className} onClick={() => selectClass(value)}>
                    <a className="w-100p u-flex">
                      <div className="avatar avatar--xs bg-transparent m-0 mr-1">
                        <div style={listElementStyle} />
                      </div>
                      {value}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="divider" data-content="Filter By Rarity" />

            {/* rarity */}
            <ul className="menu m-0 p-0" id="filter-rarity">
              {Object.values(RarityEnum).map((value) => {
                const isSelected = filter[viewName].rarity.includes(value);
                const className = `menu-item${isSelected ? ' selected' : ''}`;
                const listElementStyle = {
                  height: '100%',
                  backgroundImage: 'url(rarity.webp)',
                  backgroundSize: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                };

                return (
                  <li key={value} className={className} onClick={() => selectRarity(value)}>
                    <a className="w-100p u-flex tooltip" data-tooltip={value}>
                      <div className="avatar avatar--xs bg-transparent m-0">
                        <div style={listElementStyle} />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="divider" data-content="Sort Agents By" />

            <ul className="menu m-0 p-0" id="filter-sorting">
              <MenuItem label="⬆️ Name" sortParam="name" sortDirection="ascending" />
              <MenuItem label="⬆️ Class" sortParam="class" sortDirection="ascending" />
              <MenuItem label="⬆️ Rarity" sortParam="rarity" sortDirection="ascending" />
              <MenuItem label="⬇️ Name" sortParam="name" sortDirection="descending" />
              <MenuItem label="⬇️ Class" sortParam="class" sortDirection="descending" />
              <MenuItem label="⬇️ Rarity" sortParam="rarity" sortDirection="descending" />
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
};
