import { FC, MouseEvent } from 'react';

type ButtonProps = {
  text?: string;
  disabled?: boolean;
  animate?: boolean;
  effect?: 'bounce' | 'bounceIn' | 'fadeIn' | 'pound' | 'pulse' | 'ping' | 'loading';
  children?: JSX.Element;
  className?: string;
  color?:
    | 'plain'
    | 'transparent'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  variant?: 'outline' | 'close';
  shape?: 'pilled' | 'circle';
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'right' | 'left';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const getButtonClassNames = ({
  disabled,
  animate,
  effect,
  color,
  variant,
  shape,
  size,
  tooltip,
  tooltipPosition
}: ButtonProps): string[] => {
  const classNames = [];

  if (disabled) {
    classNames.push('btn--disabled');
  }

  if (animate) {
    classNames.push('btn-animated');

    if (effect) {
      classNames.push('animated', effect);
    }
  }

  if (color) {
    classNames.push(`btn-${color}`);
  }

  if (variant) {
    if (variant === 'close') {
      classNames.push('btn-close', 'u-pull-right');
    } else {
      classNames.push(variant);
    }
  }

  if (size) {
    classNames.push(`btn-${size}`);
  }

  if (shape) {
    classNames.push(`btn--${shape}`);
  }

  if (tooltip) {
    classNames.push('tooltip');
  }

  if (tooltipPosition) {
    classNames.push(`tooltip--${tooltipPosition}`);
  }

  return classNames;
};

export const Button: FC<ButtonProps> = ({
  text,
  disabled = false,
  animate = false,
  effect,
  children,
  className,
  color,
  variant,
  shape,
  size,
  tooltip,
  tooltipPosition,
  onClick = () => console.log('Please provide a onClick function.')
}) => {
  const classNames = getButtonClassNames({
    disabled,
    animate,
    effect,
    color,
    variant,
    shape,
    size,
    tooltip,
    tooltipPosition
  });

  return (
    <button
      className={`${classNames.join(' ')} ${className}`}
      disabled={disabled}
      onClick={onClick}
      data-tooltip={tooltip}
    >
      {text && text}
      {children && children}
    </button>
  );
};
