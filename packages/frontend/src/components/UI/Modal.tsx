import { Portal } from './index';

interface ModalI {
  modalId: string;
  children?: React.ReactNode;
  clickOutside?: () => void;
}

export const Modal: React.FC<ModalI> = ({
  modalId,
  children,
  clickOutside = () => {
    return;
  }
}) => {
  return (
    <Portal wrapperId="modal">
      <div className="modal modal-animated--zoom-in" id={modalId} style={{ zIndex: '999' }}>
        <a className="modal-overlay close-btn" aria-label="Close" onClick={clickOutside}></a>
        <div className="modal-content" role="document">
          {children}
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
