import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { createWrapper } from '../../utils';

interface PortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

const Portal: React.FC<PortalProps> = ({ children, wrapperId }) => {
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
      if (created && element?.parentNode) element.parentNode.removeChild(element);
    };
  }, [wrapperId]);

  if (!wrapper) return null;

  return createPortal(children, wrapper);
};

export default Portal;
