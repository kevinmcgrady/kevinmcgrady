import React from 'react';
import './Row.styles.scss';

export const Row: React.FC = ({ children }) => (
  <div className='row'>{children}</div>
);
