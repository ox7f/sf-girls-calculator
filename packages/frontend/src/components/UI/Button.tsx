import { MouseEvent } from 'react';

interface ButtonI {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isAnimated?: boolean;
  type?: string;
}

const Button: React.FC<ButtonI> = ({ text, onClick, disabled = false, isAnimated = false, type = '' }) => {
  const className = `${isAnimated && 'animated pulse'} ${disabled && 'btn-transparent outline btn--disabled'}`;

  return (
    <button className={`btn btn-animated hover-grow ${className} ${type}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
