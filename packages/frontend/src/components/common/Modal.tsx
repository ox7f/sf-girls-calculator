import { FC } from 'react';
import { Portal } from './Portal';

type ModalProps = {
  modalId: string;
  children?: React.ReactNode;
  clickOutside?: () => void;
};

export const Modal: FC<ModalProps> = ({
  modalId,
  children,
  clickOutside = () => console.log('Please provide a clickOutside function.')
}) => {
  return (
    <Portal wrapperId="modal-container">
      <div className="modal modal--visible" id={modalId}>
        <a className="modal-overlay close-btn" aria-label="Close" onClick={clickOutside}></a>
        <div className="modal-content" role="document" style={{ width: '500px', maxWidth: '500px' }}>
          {children && children}
        </div>
      </div>
    </Portal>
  );
};
