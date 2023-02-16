import { MouseEvent } from 'react';

interface ButtonI {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isAnimated?: boolean;
  type?: string;
}

const Button: React.FC<ButtonI> = ({ text, onClick, disabled = false, isAnimated = false, type = '' }) => {
  const className = [
    'btn btn-animated hover-grow',
    isAnimated ? 'animated pulse' : '',
    disabled ? 'btn-transparent outline btn--disabled' : '',
    type
  ].join(' ');

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
