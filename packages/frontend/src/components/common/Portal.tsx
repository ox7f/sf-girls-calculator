import { FC, ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { createWrapper } from '../utils';

type PortalProps = {
  children: ReactNode;
  wrapperId: string;
};

export const Portal: FC<PortalProps> = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      element = createWrapper(wrapperId);
      created = true;
    }

    setWrapper(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapper) {
    return null;
  }

  return createPortal(children, wrapper);
};
