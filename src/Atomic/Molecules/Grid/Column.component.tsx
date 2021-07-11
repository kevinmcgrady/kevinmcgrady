import React from 'react';
import './Column.styles.scss';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface IColumnProps {
  size: Size;
}

export const Column: React.FC<IColumnProps> = ({ children, size }) => (
  <div className={`col-${size}`}>{children}</div>
);
