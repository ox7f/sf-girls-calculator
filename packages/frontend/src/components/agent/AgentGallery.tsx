import { useAtomValue, useSetAtom } from 'jotai';
import { FC, useEffect, useRef, useState } from 'react';
import { Agent } from '@sf-girls-calculator/calculator';

import { Button } from '../common';
import { ClassTag, agentIsSelected } from '../utils';
import {
  AgentListAtom,
  AgentNameAtom,
  CurrentViewAtom,
  FilteredAgentListAtom,
  SelectedAgentListAtom
} from '../../atoms';

export const AgentGallery: FC<{ select: (agent: Agent) => void }> = ({ select }) => {
  const viewName = useAtomValue(CurrentViewAtom);
  const allAgents = useAtomValue(AgentListAtom);
  const setAgentName = useSetAtom(AgentNameAtom);
  const filteredAgents = useAtomValue(FilteredAgentListAtom)[viewName] || [];
  const selectedAgents = useAtomValue(SelectedAgentListAtom)[viewName] || [];

  const containerRef = useRef<HTMLDivElement>(null);
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
      {
        root: null,
        rootMargin: '-100px',
        threshold: 0
      }
    );

    const images = containerRef.current?.querySelectorAll('.card');
    images?.forEach((image, index) => {
      observer.observe(image);
      image.setAttribute('data-index', String(index));
    });

    return () => observer.disconnect();
  }, [filteredAgents]);

  return (
    <div className="row u-center" ref={containerRef}>
      {filteredAgents.length ? (
        filteredAgents.map((name, index) => {
          const agent = allAgents.find((a) => a.name === name);

          if (!agent) {
            return null;
          }

          const isSelected = agentIsSelected(selectedAgents, agent.name);

          return (
            <div key={name} className="col animated fadeIn" style={{ minWidth: '350px', maxWidth: '350px' }}>
              <div className="card card--slide-up">
                <div className="card__container">
                  {loadedIndexes.includes(index) && (
                    <div
                      className="card__image"
                      style={{
                        backgroundSize: ['Pan', 'Kagawa Matsu'].includes(agent.name)
                          ? '60%'
                          : [
                              'Amikam',
                              'Aphra Clairmont',
                              'Chia',
                              'Feme',
                              'Iizuna',
                              'Kaja',
                              'Karry',
                              'Midori',
                              'Pan',
                              'Rei JK',
                              'Shiko',
                              'Tsurumi',
                              'Tyrla',
                              'Windy'
                            ].includes(agent.name)
                          ? '80%'
                          : '120%',
                        backgroundPosition: 'center',
                        backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}.webp)`
                      }}
                    />
                  )}
                </div>
                <div className="card__mobile-title">
                  <div className="content pl-2 pr-2">
                    <div className="tile">
                      <div className="tile__container row">
                        <div className="col">
                          <p className="tile__title">{agent.name}</p>
                          <p className="tile__subtitle">{agent.title}</p>
                        </div>
                      </div>
                      <div className="col pt-1">
                        <div className={`tag tag--sm ${ClassTag[agent.class]}`}>{agent.class}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__body content" style={{ width: '90%' }}>
                  <p>{agent.bio ?? 'No Bio - will add it later'}</p>
                </div>
                <div className="card__action-bar u-center">
                  <Button
                    text={isSelected ? 'Selected' : 'Select'}
                    color={isSelected ? 'primary' : 'transparent'}
                    onClick={() => select(agent)}
                  />
                  <Button text="Edit" color="transparent" onClick={() => setAgentName(agent.name)} />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No results found...</p>
      )}
    </div>
  );
};
