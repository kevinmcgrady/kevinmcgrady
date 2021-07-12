import React from 'react';
import './Typography.styles.scss';

type Variant =
  | 'title'
  | 'body'
  | 'subtitle'
  | 'smalltitle'
  | 'footertitle'
  | 'footertext'
  | 'gradiant'
  | 'logo';

interface ITypographyProps {
  variant?: Variant;
  center?: boolean;
  className?: string;
}

export const Typography: React.FC<ITypographyProps> = ({
  variant = 'body',
  center,
  className,
  children,
}) => {
  if (variant === 'title') {
    return <h1 className={center ? 'center' : ''}>{children}</h1>;
  } else if (variant === 'body') {
    return <p className={center ? 'center' : ''}>{children}</p>;
  } else if (variant === 'subtitle') {
    return <h2 className={center ? 'center' : ''}>{children}</h2>;
  } else if (variant === 'smalltitle') {
    return <h3 className={center ? 'center' : ''}>{children}</h3>;
  } else if (variant === 'footertitle') {
    return <h4 className={center ? 'center' : ''}>{children}</h4>;
  } else if (variant === 'footertext') {
    return (
      <p className={`${center ? 'center' : ''} footer-text`}>{children}</p>
    );
  } else if (variant === 'gradiant') {
    return (
      <main className={`${className ? className : ''} gradiant-text`}>
        <span>
          <h1>{children}</h1>
        </span>
      </main>
    );
  } else if (variant === 'logo') {
    return <p className='logo-text'>{children}</p>;
  }

  return null;
};
