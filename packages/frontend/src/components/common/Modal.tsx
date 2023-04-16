import { Portal } from './index';

interface Props {
  modalId: string;
  children?: React.ReactNode;
  clickOutside?: () => void;
}

export const Modal: React.FC<Props> = ({ modalId, children = null, clickOutside = () => null }) => {
  return (
    <Portal wrapperId="modal-container">
      <div className="modal modal--visible" id={modalId}>
        <a className="modal-overlay close-btn" aria-label="Close" onClick={clickOutside}></a>
        <div className="modal-content" role="document" style={{ width: '500px', maxWidth: '500px' }}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
