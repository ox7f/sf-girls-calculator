import { MouseEvent } from 'react';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  isAnimated?: boolean;
  type?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ text, disabled = false, isAnimated = false, type = '', onClick }) => {
  const animationClass = isAnimated ? 'pulse' : '';
  const disabledClass = disabled ? 'btn-transparent btn--disabled outline' : '';
  const className = `btn btn-animated hover-grow animated bounceIn ${animationClass} ${disabledClass} ${type}`;

  return (
    <button className={className.replace(/\s+/g, ' ')} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
