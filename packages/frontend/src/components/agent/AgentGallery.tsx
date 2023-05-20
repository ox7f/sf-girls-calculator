import { FC, useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { Button } from '../common';
import { AgentStyleMap, ClassTag, ViewName, getAgentInfo } from '../utils';
import { AgentItem } from '../../atoms';

type AgentGalleryProps = {
  agents: AgentItem[];
  viewName: ViewName;
  favorite: (agent: AgentItem) => void;
  select: (agent: AgentItem) => void;
  toggleModal: (agent: AgentItem) => void;
};

export const AgentGallery: FC<AgentGalleryProps> = ({ agents, viewName, favorite, select, toggleModal }) => {
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
      { root: null, rootMargin: '-80px', threshold: 0 }
    );

    const cards = containerRef.current?.querySelectorAll('.card');
    cards?.forEach((card, index) => {
      observer.observe(card);
      card.setAttribute('data-index', String(index));
    });

    return () => observer.disconnect();
  }, [agents]);

  const renderAgentCard = (agent: AgentItem, index: number) => {
    const {
      name,
      options: {
        isFavorite,
        [viewName]: { isSelected }
      }
    } = agent;
    const { title, bio, className } = getAgentInfo(name);

    const cardImageStyle = {
      ...AgentStyleMap[name as keyof typeof AgentStyleMap],
      backgroundImage: `url(agents/${name.replace(/\s/g, '')}.webp)`
    };

    return (
      <div key={name} className="col" style={{ minWidth: '350px', maxWidth: '350px' }}>
        <div className="card card--slide-up">
          <div className="u-absolute w-5 h-5 u-z-1">
            <span
              className="u-absolute favorite"
              style={{ top: '0.75rem', right: '1rem' }}
              onClick={() => favorite(agent)}
            >
              <FaStar color={isFavorite ? '#ffdd00' : 'white'} size={20} />
            </span>
          </div>
          <div className="card__container">
            {loadedIndexes.includes(index) && <div className="card__image" style={cardImageStyle} />}
          </div>
          <div className="card__mobile-title">
            <div className="content pl-2 pr-2">
              <div className="tile">
                <div className="tile__container row">
                  <div className="col">
                    <p className="tile__title">{name}</p>
                    <p className="tile__subtitle">{title}</p>
                  </div>
                </div>
                <div className="col pt-1">
                  <div className={`tag tag--sm ${ClassTag[className]}`}>{className}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card__body content" style={{ width: '90%' }}>
            <p>{bio}</p>
          </div>
          <div className="card__action-bar u-center">
            <Button
              text={isSelected ? 'Selected' : 'Select'}
              color={isSelected ? 'primary' : 'transparent'}
              onClick={() => select(agent)}
            />
            <Button text="Edit" color="transparent" onClick={() => toggleModal(agent)} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row u-center" ref={containerRef}>
      {agents.length ? agents.map(renderAgentCard) : <p>No results found...</p>}
    </div>
  );
};
