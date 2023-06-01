import { FC, MouseEvent as ReactMouseEvent, useEffect, useRef } from 'react';
import { AgentItem } from '../../atoms';

type ContextMenuProps = {
  agent: AgentItem;
  position: {
    left: number;
    top: number;
  };
  onClose: () => void;
  favorite: (agent: AgentItem) => void;
  toggleModal: (agent: AgentItem) => void;
  select: (agent: AgentItem) => void;
};

export const ContextMenu: FC<ContextMenuProps> = ({ agent, position, onClose, favorite, toggleModal, select }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="u-absolute u-shadow-md bg-white"
      style={{ left: position.left, top: position.top, zIndex: 401 }}
      onContextMenu={(event: ReactMouseEvent) => event.preventDefault()}
    >
      <ul className="menu">
        <li
          className="menu-item"
          onClick={() => {
            select(agent);
            onClose();
          }}
        >
          <a>Select</a>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            favorite(agent);
            onClose();
          }}
        >
          <a>Favorite</a>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            toggleModal(agent);
            onClose();
          }}
        >
          <a>Edit</a>
        </li>
      </ul>
    </div>
  );
};
