import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { createWrapper } from '../utils';

interface Props {
  children: React.ReactNode;
  wrapperId: string;
}

export const Portal: React.FC<Props> = ({ children, wrapperId }) => {
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
