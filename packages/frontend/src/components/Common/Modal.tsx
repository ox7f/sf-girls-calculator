import { Portal } from './index';

interface ModalProps {
  modalId: string;
  children?: React.ReactNode;
  clickOutside?: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalId, children, clickOutside }) => {
  return (
    <Portal wrapperId="modal-container">
      <div className="modal modal--visible" id={modalId}>
        <a className="modal-overlay close-btn" aria-label="Close" onClick={clickOutside}></a>
        <div className="modal-content" role="document">
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
