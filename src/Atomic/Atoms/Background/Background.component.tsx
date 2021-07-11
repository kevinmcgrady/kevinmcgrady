import React from 'react';
import './Background.styles.scss';

export type Color = 'default' | 'blue' | 'orange' | 'purple';

interface IBackgroundProps {
  color?: Color;
  gutter?: boolean;
}

export const Background: React.FC<IBackgroundProps> = ({
  children,
  color = 'default',
  gutter = false,
}) => (
  <div className={`background-${color} ${gutter ? 'background-gutter' : ''}`}>
    {children}
  </div>
);
