import { Portal } from './index';

interface props {
  modalId: string;
  children?: React.ReactNode;
  clickOutside?: () => void;
}

export const Modal: React.FC<props> = ({
  modalId,
  children,
  clickOutside = () => {
    return;
  }
}) => {
  return (
    <Portal wrapperId="modal">
      <div className="modal modal-animated--zoom-in" id={modalId}>
        <a href="#" className="modal-overlay close-btn" aria-label="Close" onClick={clickOutside}></a>
        <div className="modal-content" role="document">
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
