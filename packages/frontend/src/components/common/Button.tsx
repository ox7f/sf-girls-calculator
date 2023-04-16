import { MouseEvent } from 'react';

interface Props {
  text: string;
  disabled?: boolean;
  isAnimated?: boolean;
  type?: 'success' | 'primary' | 'transparent';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = ({ text, disabled = false, isAnimated = false, type = 'primary', onClick }) => {
  const classNames = ['btn', 'hover-grow', 'animated', 'bounceIn'];

  if (isAnimated) {
    classNames.push('pulse');
  }

  if (disabled) {
    classNames.push('btn-transparent', 'btn--disabled', 'outline');
  } else {
    classNames.push(type ? `btn-${type}` : '');
  }

  return (
    <button className={classNames.join(' ')} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
