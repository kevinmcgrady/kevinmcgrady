import React from 'react';
import './Spacer.styles.scss';

type Size = 'sm' | 'md' | 'lg';

interface ISpacerProps {
  top?: Size;
  bottom?: Size;
  left?: Size;
  right?: Size;
}

export const Spacer: React.FC<ISpacerProps> = ({
  top,
  bottom,
  left,
  right,
  children,
}) => (
  <div
    className={`${top ? `spacing-top-${top}` : ''} ${
      bottom ? `spacing-bottom-${bottom}` : ''
    } ${left ? `spacing-left-${left}` : ''} ${
      right ? `spacing-right-${right}` : ''
    }`}
  >
    {children}
  </div>
);
