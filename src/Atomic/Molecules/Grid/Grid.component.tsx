import React from 'react';
import './Grid.styles.scss';

export const Grid: React.FC = ({ children }) => {
  return <div className='container'>{children}</div>;
};
